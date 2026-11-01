import { supabase, isSupabaseConfigured } from "./supabaseClient"
import type { PackageItem, CartItem, TravelerData, PaymentDetails, PersonalInfo, PurchaseItem } from "../types"
import { CURRENT_YEAR } from "../utils/dateUtils"

/**
 * Consulta el catálogo de paquetes turísticos directamente desde Supabase.
 * Realiza un JOIN relacional (3FN) a través de destinos -> ciudades -> provincias -> regiones.
 */
export async function fetchPackagesFromSupabase(): Promise<PackageItem[] | null> {
  if (!isSupabaseConfigured()) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from("paquetes")
      .select(`
        id,
        nombre,
        slug,
        duracion_dias,
        duracion_noches,
        precio_base,
        imagen_principal,
        imagenes_secundarias,
        destinos (
          id,
          ciudad,
          ciudades (
            id,
            nombre,
            provincias (
              id,
              nombre,
              regiones (
                id,
                nombre
              )
            )
          )
        ),
        categorias (
          id,
          nombre,
          slug,
          icono
        ),
        itinerarios (
          id,
          dia_numero,
          titulo_actividad,
          descripcion,
          incluye_desayuno,
          incluye_almuerzo,
          incluye_cena
        ),
        resenas (
          id,
          calificacion,
          titulo,
          comentario,
          created_at,
          usuarios (
            nombres,
            apellidos
          )
        ),
        paquete_fechas (
          id,
          fecha_inicio,
          fecha_fin,
          cupos_totales,
          cupos_disponibles,
          precio_salida
        )
      `)
      .eq("is_active", true)

    if (error) {
      console.warn("Aviso al consultar paquetes en Supabase:", error.message)
      return null
    }

    if (!data || data.length === 0) {
      return null
    }

    // Mapear la estructura relacional de PostgreSQL al modelo de la interfaz web
    return data.map((item: any) => {
      const destino = item.destinos
      const ciudad = destino?.ciudades
      const provincia = ciudad?.provincias
      const regionNombre = provincia?.regiones?.nombre || "Sierra"

      const regionTyped: "Costa" | "Sierra" | "Amazonía" | "Galápagos" =
        ["Costa", "Sierra", "Amazonía", "Galápagos"].includes(regionNombre)
          ? (regionNombre as any)
          : "Sierra"

      const daysText = `${item.duracion_dias} días / ${item.duracion_noches} noches`

      // Mapear fechas disponibles si existen en paquete_fechas
      const availableDates = item.paquete_fechas && item.paquete_fechas.length > 0
        ? item.paquete_fechas.map((f: any) => {
            const start = new Date(f.fecha_inicio)
            const end = new Date(f.fecha_fin)
            const sDay = String(start.getUTCDate()).padStart(2, "0")
            const eDay = String(end.getUTCDate()).padStart(2, "0")
            const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
            return `${sDay} al ${eDay} ${months[end.getUTCMonth()]} ${end.getUTCFullYear()}`
          })
        : [`Salidas programadas ${CURRENT_YEAR}`]

      // Mapear itinerario día a día
      const itinerary = item.itinerarios && item.itinerarios.length > 0
        ? [...item.itinerarios]
            .sort((a: any, b: any) => a.dia_numero - b.dia_numero)
            .map((it: any) => ({
              day: it.dia_numero,
              title: it.titulo_actividad,
              description: it.descripcion,
              meals: {
                breakfast: Boolean(it.incluye_desayuno),
                lunch: Boolean(it.incluye_almuerzo),
                dinner: Boolean(it.incluye_cena),
              },
            }))
        : undefined

      // Mapear reseñas
      const rawResenas = item.resenas || []
      const reviews = rawResenas.length > 0
        ? rawResenas.map((r: any) => ({
            id: r.id,
            userName: r.usuarios?.nombres
              ? `${r.usuarios.nombres} ${r.usuarios.apellidos || ""}`.trim()
              : "Viajero Verificado",
            rating: Number(r.calificacion) || 5,
            title: r.titulo || "Experiencia inolvidable",
            comment: r.comentario || "",
            date: r.created_at
              ? new Date(r.created_at).toLocaleDateString("es-EC", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Reciente",
          }))
        : undefined

      const avgRating = reviews && reviews.length > 0
        ? Number((reviews.reduce((acc: number, cur: any) => acc + cur.rating, 0) / reviews.length).toFixed(1))
        : 4.9

      const availableSlots = item.paquete_fechas && item.paquete_fechas.length > 0
        ? item.paquete_fechas[0].cupos_disponibles
        : undefined

      return {
        id: item.slug || item.id,
        name: item.nombre,
        region: regionTyped,
        province: provincia?.nombre || "Pichincha",
        city: destino?.ciudad || ciudad?.nombre || "Quito",
        days: daysText,
        price: Number(item.precio_base),
        datesText: availableDates[0],
        availableDates: availableDates,
        dates: {
          startDay: 1,
          endDay: item.duracion_dias,
          month: "nov",
          year: CURRENT_YEAR,
        },
        image: item.imagen_principal,
        secondaryImages: (item.imagenes_secundarias && item.imagenes_secundarias.length >= 2)
          ? [item.imagenes_secundarias[0], item.imagenes_secundarias[1]]
          : [item.imagen_principal, item.imagen_principal],
        category: item.categorias?.nombre || "Ecoturismo y Naturaleza",
        categorySlug: item.categorias?.slug || "ecoturismo-naturaleza",
        categoryIcon: item.categorias?.icono || "compass",
        rating: avgRating,
        reviewsCount: reviews ? reviews.length : 12,
        availableSlots: availableSlots,
        itinerary: itinerary,
        reviews: reviews,
      }
    })
  } catch (err) {
    console.warn("Excepción al conectar con Supabase:", err)
    return null
  }
}

/**
 * Guarda una reserva completa en Supabase (Cabecera, Detalle y Pasajeros).
 */
export async function saveReservationToSupabase({
  bookingCode,
  total,
  paymentData,
  cartItems,
  travelersList,
  personalInfo,
}: {
  bookingCode: string
  total: number
  paymentData: PaymentDetails
  cartItems: CartItem[]
  travelersList: TravelerData[]
  personalInfo: PersonalInfo
}): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Supabase no está configurado en .env" }
  }

  try {
    // 1. Obtener usuario autenticado actual o buscar por email
    const { data: authData } = await supabase.auth.getUser()
    let userId = authData?.user?.id

    if (!userId) {
      // Buscar usuario en public.usuarios por email
      const { data: userProfile } = await supabase
        .from("usuarios")
        .select("id")
        .eq("email", personalInfo.email)
        .maybeSingle()

      if (userProfile?.id) {
        userId = userProfile.id
      } else {
        // Usar primer usuario de prueba como fallback seguro
        const { data: fallbackUser } = await supabase
          .from("usuarios")
          .select("id")
          .limit(1)
          .single()
        userId = fallbackUser?.id
      }
    }

    if (!userId) {
      return { success: false, error: "No se encontró un usuario válido para asociar la reserva." }
    }

    // 2. Insertar Cabecera en 'reservas'
    const { data: reserva, error: errReserva } = await supabase
      .from("reservas")
      .insert({
        codigo_reserva: bookingCode,
        usuario_id: userId,
        monto_subtotal: total,
        monto_total: total,
        estado: paymentData.method === "transferencia" ? "EN_VERIFICACION" : "COMPRA_REALIZADA",
        metodo_pago: paymentData.method,
        cuotas_info: paymentData.installments,
        comprobante_numero: paymentData.bankVoucherNumber,
        fecha_limite_pago: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      })
      .select()
      .single()

    if (errReserva) {
      console.error("Error al insertar reserva en Supabase:", errReserva)
      return { success: false, error: errReserva.message }
    }

    // 3. Insertar Detalle en 'reserva_detalles' y Pasajeros en 'viajeros'
    for (const item of cartItems) {
      // Verificar si el ID del paquete es un UUID válido de la BD, o buscar por nombre
      let paqueteDbId = item.pkg.id
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(paqueteDbId)

      if (!isUuid) {
        const { data: pkgFound } = await supabase
          .from("paquetes")
          .select("id")
          .ilike("nombre", `%${item.pkg.name.split(" ")[0]}%`)
          .limit(1)
          .maybeSingle()

        if (pkgFound?.id) {
          paqueteDbId = pkgFound.id
        } else {
          // Asignar primer paquete disponible
          const { data: firstPkg } = await supabase.from("paquetes").select("id").limit(1).single()
          if (firstPkg?.id) paqueteDbId = firstPkg.id
        }
      }

      const { data: detalle, error: errDetalle } = await supabase
        .from("reserva_detalles")
        .insert({
          reserva_id: reserva.id,
          paquete_id: paqueteDbId,
          cantidad_personas: item.people,
          precio_unitario_congelado: item.pkg.price,
        })
        .select()
        .single()

      if (errDetalle) {
        console.warn("Aviso al insertar detalle:", errDetalle.message)
        continue
      }

      // 4. Insertar pasajeros en 'viajeros'
      const travelersForPackage = travelersList.filter(
        (t) => !t.packageId || t.packageId === item.pkg.id || travelersList.length <= item.people
      )

      const payloadViajeros = travelersForPackage.map((t, idx) => ({
        reserva_detalle_id: detalle.id,
        numero_slot: t.slotNumber || idx + 1,
        nombres_completos: t.fullName,
        tipo_documento: "CEDULA",
        numero_documento: t.cedula || "No registrada",
        telefono: t.phone,
        email: t.email,
        es_titular: t.isTitular,
        es_menor: t.isMinor,
      }))

      if (payloadViajeros.length > 0) {
        await supabase.from("viajeros").insert(payloadViajeros)
      }
    }

    return { success: true }
  } catch (err: any) {
    console.error("Excepción al guardar reserva en Supabase:", err)
    return { success: false, error: err?.message || "Error desconocido" }
  }
}

/**
 * Sube un comprobante bancario al bucket de Supabase Storage.
 */
export async function uploadVoucherToSupabaseStorage(
  file: File,
  bookingCode: string
): Promise<{ success: boolean; publicUrl?: string; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Supabase no está configurado en .env" }
  }

  try {
    const fileExt = file.name.split(".").pop() || "pdf"
    const filePath = `vouchers/${bookingCode}-${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("comprobantes")
      .upload(filePath, file, { upsert: true })

    if (uploadError) {
      return { success: false, error: uploadError.message }
    }

    const { data: urlData } = supabase.storage
      .from("comprobantes")
      .getPublicUrl(filePath)

    // Actualizar la reserva en la base de datos con la URL del comprobante
    await supabase
      .from("reservas")
      .update({
        comprobante_url: urlData.publicUrl,
        comprobante_numero: `TR-${Math.floor(100000 + Math.random() * 900000)}`,
        comprobante_subido_at: new Date().toISOString(),
        estado: "COMPRA_REALIZADA",
      })
      .eq("codigo_reserva", bookingCode)

    return { success: true, publicUrl: urlData.publicUrl }
  } catch (err: any) {
    return { success: false, error: err?.message || "Error al subir comprobante" }
  }
}

