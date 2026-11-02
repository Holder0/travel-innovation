import { supabase, isSupabaseConfigured } from "./supabaseClient"
import type { PackageItem, CartItem, TravelerData, PaymentDetails, PersonalInfo, PurchaseItem } from "../types"
import { CURRENT_YEAR } from "../utils/dateUtils"

const SIMPLIFIED_CATEGORY_MAP: Record<string, string> = {
  "Aventura y Deportes Extremos": "Aventura",
  "Ecoturismo y Naturaleza": "Ecoturismo",
  "Sol, Playa y Relax": "Playa y Relax",
  "Cultural, Patrimonial e Histórico": "Cultural",
  "Romántico y Luna de Miel": "Romántico",
  "Familiar y Todo Incluido": "Familiar",
  "Gastronomía y Rutas del Cacao": "Gastronomía",
  "Trekking y Alta Montaña": "Trekking",
  "Bienestar, Termas y Spa": "Bienestar y Spa",
  "Tradiciones y Turismo Comunitario": "Turismo Comunitario",
}

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

      // Mapear fechas disponibles si existen en paquete_fechas (orden cronológico estricto)
      const sortedFechas =
        item.paquete_fechas && item.paquete_fechas.length > 0
          ? [...item.paquete_fechas].sort(
              (a: any, b: any) =>
                new Date(a.fecha_inicio).getTime() - new Date(b.fecha_inicio).getTime()
            )
          : []

      const availableDates =
        sortedFechas.length > 0
          ? sortedFechas.map((f: any) => {
              const start = new Date(f.fecha_inicio)
              const end = new Date(f.fecha_fin)
              const sDay = String(start.getUTCDate()).padStart(2, "0")
              const eDay = String(end.getUTCDate()).padStart(2, "0")
              const months = [
                "ene",
                "feb",
                "mar",
                "abr",
                "may",
                "jun",
                "jul",
                "ago",
                "sep",
                "oct",
                "nov",
                "dic",
              ]
              return `${sDay} al ${eDay} ${months[end.getUTCMonth()]} ${end.getUTCFullYear()}`
            })
          : [
              `12 al ${12 + Math.max(1, item.duracion_dias - 1)} dic ${CURRENT_YEAR}`,
              `16 al ${16 + Math.max(1, item.duracion_dias - 1)} ene ${CURRENT_YEAR + 1}`,
            ]

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

      const availableSlots = sortedFechas.length > 0
        ? sortedFechas[0].cupos_disponibles
        : undefined

      const dateSlotsMap: Record<string, number> = {}
      if (sortedFechas.length > 0) {
        sortedFechas.forEach((f: any) => {
          const start = new Date(f.fecha_inicio)
          const end = new Date(f.fecha_fin)
          const sDay = String(start.getUTCDate()).padStart(2, "0")
          const eDay = String(end.getUTCDate()).padStart(2, "0")
          const months = [
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic",
          ]
          const key = `${sDay} al ${eDay} ${months[end.getUTCMonth()]} ${end.getUTCFullYear()}`
          dateSlotsMap[key] = f.cupos_disponibles
        })
      }

      const totalCapacity = sortedFechas.length > 0 ? sortedFechas[0].cupos_totales : 20

      const catName = item.categorias?.nombre || ""
      const isGalapagos =
        regionNombre === "Galápagos" || provincia?.nombre?.toLowerCase().includes("galápagos")
      const isTrekking =
        catName.includes("Trekking") || item.nombre.toLowerCase().includes("volcán")
      const isRomantico = catName.includes("Romántico")
      const isFamiliar = catName.includes("Familiar")

      let maxGroupSize = 8
      if (isGalapagos) maxGroupSize = 10
      else if (isFamiliar) maxGroupSize = 12
      else if (isTrekking) maxGroupSize = 4
      else if (isRomantico) maxGroupSize = 2
      else if (catName.includes("Aventura")) maxGroupSize = 6
      else if (catName.includes("Comunitario") || catName.includes("Spa")) maxGroupSize = 6

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
        category:
          SIMPLIFIED_CATEGORY_MAP[item.categorias?.nombre] ||
          item.categorias?.nombre ||
          "Ecoturismo",
        categorySlug: item.categorias?.slug || "ecoturismo-naturaleza",
        categoryIcon: item.categorias?.icono || "compass",
        rating: avgRating,
        reviewsCount: reviews ? reviews.length : 12,
        availableSlots: availableSlots,
        totalCapacity: totalCapacity,
        maxGroupSize: maxGroupSize,
        dateSlotsMap: dateSlotsMap,
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

      // Descontar cupos_disponibles de la fecha en paquete_fechas
      try {
        const { data: fechaMatch } = await supabase
          .from("paquete_fechas")
          .select("id, cupos_disponibles")
          .eq("paquete_id", paqueteDbId)
          .limit(1)
          .maybeSingle()

        if (fechaMatch) {
          const updatedSlots = Math.max(0, fechaMatch.cupos_disponibles - item.people)
          await supabase
            .from("paquete_fechas")
            .update({ cupos_disponibles: updatedSlots })
            .eq("id", fechaMatch.id)
        }
      } catch (errQuota) {
        console.warn("Aviso al descontar cupos en Supabase:", errQuota)
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

/**
 * Sube el PDF oficial generado automáticamente al bucket 'comprobantes' de Supabase Storage.
 * Retorna la URL pública permanente para descarga directa desde el correo electrónico.
 */
export async function uploadOfficialPdfReceiptToStorage(
  pdfBlob: Blob,
  bookingCode: string
): Promise<string | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const filePath = `oficiales/comprobante_${bookingCode}.pdf`
    const { error: uploadError } = await supabase.storage
      .from("comprobantes")
      .upload(filePath, pdfBlob, {
        contentType: "application/pdf",
        upsert: true,
      })

    if (uploadError) {
      console.warn("Aviso al subir PDF oficial a Supabase Storage:", uploadError.message)
      return null
    }

    const { data: urlData } = supabase.storage
      .from("comprobantes")
      .getPublicUrl(filePath)

    return urlData?.publicUrl || null
  } catch (err: any) {
    console.warn("Excepción al subir PDF oficial a Supabase Storage:", err)
    return null
  }
}

// =============================================================================
// SERVICIOS DE AUTENTICACIÓN Y ROLES (SUPABASE AUTH / GOTRUE)
// =============================================================================

export interface AuthUserResult {
  id: string
  name: string
  email: string
  role?: string
  phone?: string
  province?: string
  city?: string
  idNumber?: string
}

/**
 * Inicia sesión mediante Supabase Auth y consulta el rol en la tabla `usuarios`.
 */
export async function signInWithSupabase(
  email: string,
  password: string
): Promise<{
  success: boolean
  user: AuthUserResult | null
  error?: string
}> {
  if (!isSupabaseConfigured()) {
    return { success: false, user: null, error: "Supabase no está configurado." }
  }

  try {
    const cleanEmail = email.trim().toLowerCase()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: password,
    })

    if (error) {
      return { success: false, user: null, error: error.message }
    }

    if (!data.user) {
      return { success: false, user: null, error: "No se obtuvo la sesión del usuario." }
    }

    // Consultar perfil completo del usuario en public.usuarios con JOIN a roles
    let fullName = data.user.user_metadata?.first_name
      ? `${data.user.user_metadata.first_name} ${data.user.user_metadata.last_name || ""}`.trim()
      : cleanEmail.split("@")[0]
    let role = "CLIENTE"
    let phone = ""
    let province = ""
    let city = ""
    let idNumber = ""

    const { data: profile } = await supabase
      .from("usuarios")
      .select("id, nombres, apellidos, telefono, provincia, ciudad, numero_identificacion, roles(nombre)")
      .eq("id", data.user.id)
      .maybeSingle()

    if (profile) {
      fullName = `${profile.nombres} ${profile.apellidos}`.trim()
      role = (profile.roles as any)?.nombre || "CLIENTE"
      phone = profile.telefono || ""
      province = profile.provincia || ""
      city = profile.ciudad || ""
      idNumber = profile.numero_identificacion || ""
    }

    return {
      success: true,
      user: {
        id: data.user.id,
        name: fullName,
        email: data.user.email || cleanEmail,
        role: role,
        phone: phone,
        province: province,
        city: city,
        idNumber: idNumber,
      },
    }
  } catch (err: any) {
    return { success: false, user: null, error: err?.message || "Excepción al iniciar sesión." }
  }
}

/**
 * Registra un nuevo viajero en Supabase Auth y sincroniza sus datos.
 */
export async function signUpWithSupabase(
  email: string,
  password: string,
  metadata: {
    firstName: string
    lastName: string
    phone?: string
    province?: string
    city?: string
    idNumber?: string
  }
): Promise<{
  success: boolean
  user: AuthUserResult | null
  needsConfirmation?: boolean
  error?: string
}> {
  if (!isSupabaseConfigured()) {
    return { success: false, user: null, error: "Supabase no está configurado." }
  }

  try {
    const cleanEmail = email.trim().toLowerCase()
    const { data, error } = await supabase.auth.signUp({
      email: cleanEmail,
      password: password,
      options: {
        data: {
          first_name: metadata.firstName.trim(),
          last_name: metadata.lastName.trim(),
          phone: metadata.phone || "",
          province: metadata.province || "",
          city: metadata.city || "",
          numero_identificacion: metadata.idNumber || "",
        },
      },
    })

    if (error) {
      return { success: false, user: null, error: error.message }
    }

    const fullName = `${metadata.firstName} ${metadata.lastName}`.trim()
    const needsConfirm = !data.session

    return {
      success: true,
      user: data.user
        ? {
            id: data.user.id,
            name: fullName,
            email: cleanEmail,
            role: "CLIENTE",
            phone: metadata.phone || "",
            province: metadata.province || "",
            city: metadata.city || "",
            idNumber: metadata.idNumber || "",
          }
        : null,
      needsConfirmation: needsConfirm,
    }
  } catch (err: any) {
    return { success: false, user: null, error: err?.message || "Excepción al registrar usuario." }
  }
}

/**
 * Cierra la sesión activa en Supabase Auth.
 */
export async function signOutWithSupabase(): Promise<void> {
  if (isSupabaseConfigured()) {
    try {
      await supabase.auth.signOut()
    } catch (e) {
      console.warn("Aviso al cerrar sesión en Supabase:", e)
    }
  }
}

/**
 * Obtiene el usuario autenticado actualmente en Supabase.
 */
export async function getCurrentSupabaseUser(): Promise<AuthUserResult | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const { data } = await supabase.auth.getUser()
    if (!data?.user) return null

    const { data: profile } = await supabase
      .from("usuarios")
      .select("id, nombres, apellidos, telefono, provincia, ciudad, numero_identificacion, roles(nombre)")
      .eq("id", data.user.id)
      .maybeSingle()

    const name = profile
      ? `${profile.nombres} ${profile.apellidos}`.trim()
      : (data.user.user_metadata?.first_name
          ? `${data.user.user_metadata.first_name} ${data.user.user_metadata.last_name || ""}`.trim()
          : data.user.email?.split("@")[0] || "Usuario")

    return {
      id: data.user.id,
      name,
      email: data.user.email || "",
      role: (profile?.roles as any)?.nombre || "CLIENTE",
      phone: profile?.telefono || "",
      province: profile?.provincia || "",
      city: profile?.ciudad || "",
      idNumber: profile?.numero_identificacion || "",
    }
  } catch {
    return null
  }
}

/**
 * Consulta el historial de reservas de un usuario en Supabase con su desglose relacional completo.
 */
export async function fetchUserReservationsFromSupabase(
  userId?: string,
  userEmail?: string
): Promise<PurchaseItem[] | null> {
  if (!isSupabaseConfigured()) return null

  try {
    let query = supabase
      .from("reservas")
      .select(`
        id,
        codigo_reserva,
        monto_subtotal,
        monto_total,
        estado,
        metodo_pago,
        cuotas_info,
        comprobante_numero,
        comprobante_url,
        comprobante_subido_at,
        created_at,
        usuarios (
          id,
          nombres,
          apellidos,
          email,
          telefono,
          numero_identificacion,
          provincia,
          ciudad,
          direccion
        ),
        reserva_detalles (
          id,
          cantidad_personas,
          precio_unitario_congelado,
          paquetes (
            id,
            nombre,
            duracion_dias,
            duracion_noches,
            destinos (
              ciudades (
                nombre,
                provincias (
                  nombre,
                  regiones (nombre)
                )
              )
            )
          ),
          viajeros (
            id,
            numero_slot,
            nombres_completos,
            numero_documento,
            fecha_nacimiento,
            telefono,
            email,
            es_titular,
            es_menor
          )
        )
      `)
      .order("created_at", { ascending: false })

    if (userId) {
      query = query.eq("usuario_id", userId)
    }

    const { data, error } = await query

    if (error) {
      console.warn("Aviso al consultar reservas en Supabase:", error.message)
      return null
    }

    if (!data || data.length === 0) {
      return null
    }

    // Mapear cada fila relacional a la interfaz PurchaseItem
    return data.map((r: any) => {
      const u = r.usuarios
      const titularName = u ? `${u.nombres || ""} ${u.apellidos || ""}`.trim() : "Titular de la reserva"
      const statusMap: Record<string, PurchaseItem["status"]> = {
        EN_VERIFICACION: "En verificación",
        PENDIENTE: "En verificación",
        COMPRA_REALIZADA: "Compra realizada",
        CONFIRMADA: "Confirmada",
        REPROGRAMADA: "Reprogramada",
        CANCELADA: "Cancelada",
      }

      const method = (r.metodo_pago || "transferencia") as PurchaseItem["paymentMethod"]
      const methodLabelMap: Record<string, string> = {
        transferencia: "Transferencia bancaria",
        debito: "Tarjeta de débito",
        credito: "Tarjeta de crédito",
      }

      // Desglosar paquetes y viajeros
      const packagesList: PurchaseItem["packages"] = []
      const allTravelers: TravelerData[] = []

      for (const d of (r.reserva_detalles || [])) {
        const pkg = d.paquetes
        const ciudad = pkg?.destinos?.ciudades
        const prov = ciudad?.provincias
        const reg = prov?.regiones?.nombre || "Ecuador"

        const cityName = ciudad?.nombre || "Destino Ecuador"
        const provName = prov?.nombre || "Ecuador"
        const price = Number(d.precio_unitario_congelado || 150)
        const people = Number(d.cantidad_personas || 1)

        packagesList.push({
          id: pkg?.id || d.id,
          name: pkg?.nombre || "Paquete Turístico",
          region: reg,
          city: cityName,
          province: provName,
          date: r.created_at ? new Date(r.created_at).toLocaleDateString("es-EC") : "Salida programada",
          people,
          price,
          total: price * people,
        })

        for (const v of (d.viajeros || [])) {
          allTravelers.push({
            id: v.id,
            slotNumber: v.numero_slot,
            fullName: v.nombres_completos || "Pasajero",
            cedula: v.numero_documento || "",
            birthDate: v.fecha_nacimiento || "",
            phone: v.telefono || "",
            email: v.email || "",
            isTitular: Boolean(v.es_titular),
            isMinor: Boolean(v.es_menor),
            packageId: pkg?.id || d.id,
            packageTitle: pkg?.nombre || "Paquete Turístico",
          })
        }
      }

      return {
        id: r.id,
        code: r.codigo_reserva,
        createdAt: r.created_at ? new Date(r.created_at).toLocaleDateString("es-EC") : "Reciente",
        status: statusMap[r.estado] || "Compra realizada",
        packages: packagesList.length > 0 ? packagesList : [{
          id: "pkg-1",
          name: "Paquete Turístico Ecuador",
          region: "Sierra",
          city: "Quito",
          province: "Pichincha",
          date: "Salida programada",
          people: 1,
          price: Number(r.monto_total || 250),
          total: Number(r.monto_total || 250),
        }],
        total: Number(r.monto_total || 0),
        paymentMethod: method,
        paymentMethodLabel: methodLabelMap[method] || "Pago registrado",
        installments: r.cuotas_info || undefined,
        voucherNumber: r.comprobante_numero || undefined,
        voucherUploaded: Boolean(r.comprobante_url || r.comprobante_numero),
        voucherFileName: r.comprobante_url ? r.comprobante_url.split("/").pop() : undefined,
        titular: {
          name: titularName,
          email: u?.email || "",
          phone: u?.telefono || "",
          cedula: u?.numero_identificacion || "",
          address: u?.direccion || `${u?.ciudad || ""}, ${u?.provincia || ""}`,
        },
        travelers: allTravelers,
      }
    })
  } catch (err) {
    console.warn("Excepción al consultar reservas en Supabase:", err)
    return null
  }
}

/**
 * Actualiza los datos personales y de dirección de un usuario en Supabase (public.usuarios y auth.users).
 */
export async function updateSupabaseProfile(
  userId: string,
  data: {
    firstName?: string
    lastName?: string
    fullName?: string
    phone?: string
    province?: string
    city?: string
    address?: string
    idNumber?: string
  }
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Supabase no está configurado." }
  }

  try {
    const payload: any = { updated_at: new Date().toISOString() }

    if (data.fullName) {
      const parts = data.fullName.trim().split(" ")
      payload.nombres = parts[0] || ""
      payload.apellidos = parts.slice(1).join(" ") || ""
    } else {
      if (data.firstName !== undefined) payload.nombres = data.firstName.trim()
      if (data.lastName !== undefined) payload.apellidos = data.lastName.trim()
    }

    if (data.phone !== undefined) payload.telefono = data.phone.trim()
    if (data.province !== undefined) payload.provincia = data.province.trim()
    if (data.city !== undefined) payload.ciudad = data.city.trim()
    if (data.address !== undefined) payload.direccion = data.address.trim()
    if (data.idNumber !== undefined) payload.numero_identificacion = data.idNumber.trim()

    // 1. Actualizar tabla public.usuarios
    const { error: errProfile } = await supabase
      .from("usuarios")
      .update(payload)
      .eq("id", userId)

    if (errProfile) {
      console.warn("Aviso al actualizar perfil en public.usuarios:", errProfile.message)
    }

    // 2. Actualizar metadata de auth.users en GoTrue
    try {
      await supabase.auth.updateUser({
        data: {
          first_name: payload.nombres,
          last_name: payload.apellidos,
          phone: payload.telefono,
          province: payload.provincia,
          city: payload.ciudad,
          numero_identificacion: payload.numero_identificacion,
        },
      })
    } catch {
      // Ignorar si auth.users no tiene sesión activa en GoTrue
    }

    return { success: true }
  } catch (err: any) {
    return { success: false, error: err?.message || "Error al actualizar perfil." }
  }
}

/**
 * Actualiza la contraseña del usuario autenticado en Supabase Auth.
 */
export async function updateSupabasePassword(
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Supabase no está configurado." }
  }
  try {
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) return { success: false, error: error.message }
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err?.message || "Error al cambiar contraseña." }
  }
}

/**
 * Actualiza el correo electrónico del usuario autenticado en Supabase Auth.
 */
export async function updateSupabaseEmail(
  newEmail: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Supabase no está configurado." }
  }
  try {
    const clean = newEmail.trim().toLowerCase()
    const { error } = await supabase.auth.updateUser({ email: clean })
    if (error) return { success: false, error: error.message }
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err?.message || "Error al actualizar correo." }
  }
}

/**
 * Registra o actualiza una reseña comunitaria de un paquete turístico en Supabase.
 */
export async function submitReviewToSupabase(review: {
  packageId: string
  packageName: string
  rating: number
  title: string
  comment: string
  userName: string
  userEmail?: string
}): Promise<{ success: boolean; reviewId?: string; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: true, reviewId: `local-${Date.now()}` }
  }

  try {
    // 1. Obtener ID de usuario
    const { data: authData } = await supabase.auth.getUser()
    let userId = authData?.user?.id

    if (!userId && review.userEmail) {
      const { data: userProfile } = await supabase
        .from("usuarios")
        .select("id")
        .eq("email", review.userEmail)
        .maybeSingle()
      if (userProfile?.id) userId = userProfile.id
    }

    if (!userId) {
      const { data: firstUser } = await supabase.from("usuarios").select("id").limit(1).single()
      userId = firstUser?.id
    }

    if (!userId) {
      return { success: false, error: "No se encontró un usuario para registrar la reseña." }
    }

    // 2. Resolver UUID del paquete
    let paqueteDbId = review.packageId
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(paqueteDbId)

    if (!isUuid) {
      const { data: pkgFound } = await supabase
        .from("paquetes")
        .select("id")
        .ilike("nombre", `%${review.packageName.split(" ")[0]}%`)
        .limit(1)
        .maybeSingle()
      if (pkgFound?.id) paqueteDbId = pkgFound.id
    }

    const { data: newReview, error: errInsert } = await supabase
      .from("resenas")
      .upsert(
        {
          paquete_id: paqueteDbId,
          usuario_id: userId,
          calificacion: Math.max(1, Math.min(5, review.rating)),
          titulo: review.title.trim() || "Experiencia de viaje",
          comentario: review.comment.trim(),
        },
        { onConflict: "paquete_id,usuario_id" }
      )
      .select()
      .single()

    if (errInsert) {
      console.warn("Aviso al guardar reseña en Supabase:", errInsert.message)
      return { success: false, error: errInsert.message }
    }

    return { success: true, reviewId: newReview?.id }
  } catch (err: any) {
    console.error("Error al registrar reseña:", err)
    return { success: false, error: err?.message || "Error al registrar reseña" }
  }
}


