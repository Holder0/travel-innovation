import type { PackageItem, ItineraryDay } from "../types"

export interface PackageDetailedMeta {
  includes: string[]
  notIncludes: string[]
  meetingPoint: string
  meetingTime: string
  meetingNotes: string
  requiredDocuments: string[]
  conditions: string[]
}

export function computePackageDetailedMeta(
  pkg: PackageItem,
  itinerary: ItineraryDay[]
): PackageDetailedMeta {
  const isGalapagos =
    pkg.region === "Galápagos" || pkg.province.toLowerCase().includes("galápagos")
  const isAmazonia =
    pkg.region === "Amazonía" ||
    ["napo", "orellana", "pastaza", "morona santiago", "sucumbíos", "zamora chinchipe"].some((p) =>
      pkg.province.toLowerCase().includes(p)
    )
  const isCosta =
    pkg.region === "Costa" ||
    ["guayas", "manabí", "santa elena", "esmeraldas", "el oro", "los ríos", "santo domingo"].some(
      (p) => pkg.province.toLowerCase().includes(p)
    )

  const isTrekking =
    pkg.categorySlug === "trekking-montana" ||
    pkg.category?.toLowerCase().includes("trekking") ||
    pkg.name.toLowerCase().includes("volcán") ||
    pkg.name.toLowerCase().includes("nevado")
  const isAventura =
    pkg.categorySlug === "aventura-extremo" ||
    pkg.category?.toLowerCase().includes("aventura") ||
    pkg.name.toLowerCase().includes("rafting") ||
    pkg.name.toLowerCase().includes("canyoning") ||
    pkg.name.toLowerCase().includes("escalada")
  const isCultural =
    pkg.categorySlug === "cultural-historico" ||
    pkg.category?.toLowerCase().includes("cultural")
  const isRomantico =
    pkg.categorySlug === "luna-de-miel" ||
    pkg.category?.toLowerCase().includes("romántico")
  const isGastronomia =
    pkg.categorySlug === "gastronomia-cacao" ||
    pkg.category?.toLowerCase().includes("gastronomía")
  const isSpa =
    pkg.categorySlug === "bienestar-termas" ||
    pkg.category?.toLowerCase().includes("bienestar") ||
    pkg.category?.toLowerCase().includes("spa")
  const isComunitario =
    pkg.categorySlug === "tradiciones-comunitario" ||
    pkg.category?.toLowerCase().includes("comunitario")

  // 1. Contar alimentos según el itinerario real del paquete
  const meals = itinerary.reduce(
    (acc, d) => {
      if (d.meals.breakfast) acc.breakfast++
      if (d.meals.lunch) acc.lunch++
      if (d.meals.dinner) acc.dinner++
      return acc
    },
    { breakfast: 0, lunch: 0, dinner: 0 }
  )

  const foodIncludes: string[] = []
  if (meals.breakfast > 0) {
    foodIncludes.push(
      `${meals.breakfast} ${meals.breakfast === 1 ? "desayuno completo incluido" : "desayunos completos incluidos"} (típico andino/costeño según hostería).`
    )
  }
  if (meals.lunch > 0) {
    foodIncludes.push(
      `${meals.lunch} ${meals.lunch === 1 ? "almuerzo turístico incluido" : "almuerzos turísticos incluidos"} (menú tradicional de 3 tiempos con ingredientes locales).`
    )
  }
  if (meals.dinner > 0) {
    foodIncludes.push(
      `${meals.dinner} ${meals.dinner === 1 ? "cena gourmet / bienvenida incluida" : "cenas incluidas"} (menú degustación especial).`
    )
  }
  if (foodIncludes.length === 0) {
    foodIncludes.push("Refrigerios ligeros de marcha e hidratación durante las caminatas.")
  }

  // 2. Construir lista de INCLUYE específica
  const includes: string[] = [
    ...foodIncludes,
  ]

  // Transporte específico
  if (isGalapagos) {
    includes.push("Navegaciones en lancha rápida interislas y traslados terrestres privados en bus climatizado.")
    includes.push("Guía naturalista bilingüe certificado por la Dirección del Parque Nacional Galápagos.")
    includes.push("Equipo de snorkel completo (máscara, tubo y aletas) y chaleco salvavidas en todas las salidas.")
    includes.push(`Alojamiento en hotel turístico seleccionado en ${pkg.city} según categoría reservada.`)
  } else if (isAmazonia) {
    includes.push("Transporte terrestre privado ida y retorno y navegación en canoas fluviales a motor con chalecos.")
    includes.push("Guía nativo de selva y guía profesional bilingüe con botiquín de primeros auxilios para expedición.")
    includes.push("Botas de caucho para caminatas por el fango selvático y ponchos impermeables para lluvia.")
    includes.push(`Hospedaje ecológico en cabañas o lodge amazónico en ${pkg.city} con baño privado.`)
  } else if (isTrekking) {
    includes.push("Transporte 4x4 de aproximación a las faldas de la montaña y refugios de altura.")
    includes.push("Guía certificado de alta montaña (ASEGUIM) con equipo de seguridad y radio de comunicación.")
    includes.push("Bastones de trekking homologados y casco de protección para pasos rocosos.")
    includes.push(`Alojamiento en refugio andino o posada de montaña en ${pkg.city}.`)
  } else if (isAventura) {
    includes.push("Transporte turístico desde el punto de encuentro hasta las zonas de descenso o río.")
    includes.push("Equipamiento técnico homologado (trajes de neopreno, cascos, arneses y remos de alto impacto).")
    includes.push("Guías certificados internacionalmente en rescate en aguas rápidas / rescate vertical.")
    includes.push(`Hospedaje turístico confortable en ${pkg.city} con áreas de descanso.`)
  } else if (isCosta) {
    includes.push("Transporte turístico terrestre climatizado y embarcaciones marítimas autorizadas por Capitanía.")
    includes.push("Guía local certificado conocedor de rutas playeras, manglares y fauna marina.")
    includes.push("Carpas de sol, parasoles y asistencia en playa privada o balneario.")
    includes.push(`Hospedaje frente al mar o cercano a la playa en ${pkg.city}.`)
  } else {
    includes.push("Transporte turístico privado con chofer profesional y aire acondicionado.")
    includes.push("Guía oficial de turismo patrimonial acreditado por el Ministerio de Turismo.")
    includes.push("Entradas a todos los museos, conventos, haciendas históricas y reservas del itinerario.")
    includes.push(`Alojamiento en hostería patrimonial u hotel seleccionado en ${pkg.city}.`)
  }

  // 3. Construir lista de NO INCLUYE específica
  const notIncludes: string[] = []
  if (isGalapagos) {
    notIncludes.push("Tributo de ingreso al Parque Nacional Galápagos ($30 nacionales / $100-$200 turistas extranjeros).")
    notIncludes.push("Tarjeta de Control Migratorio INGALA ($20 por persona a abonarse en aeropuerto continental).")
    notIncludes.push("Tasa de uso de muelle en Isabela ($10 aprox.) ni taxi acuático en bahías ($1 por trayecto).")
    notIncludes.push("Bebidas alcohólicas, cócteles, propinas a tripulación y gastos personales no descritos.")
  } else if (isTrekking) {
    notIncludes.push("Indumentaria personal térmica de alta montaña (primera capa térmica, chaqueta cortavientos impermeable, botas rígidas).")
    notIncludes.push("Seguro médico internacional contra accidentes de alta montaña (recomendado contratar previo a la salida).")
    notIncludes.push("Cenas no estipuladas ni bebidas adicionales fuera de los puntos de campamento.")
    notIncludes.push("Propinas voluntarias para guías de cordada y arrieros locales.")
  } else if (isAmazonia) {
    notIncludes.push("Vacunación previa contra la Fiebre Amarilla (obligación sanitaria personal del viajero).")
    notIncludes.push("Bebidas embotelladas fuera de los menús concertados en el lodge.")
    notIncludes.push("Contribuciones voluntarias para fotografías en comunidades indígenas.")
    notIncludes.push("Gastos médicos imprevistos o compras de artesanías autóctonas.")
  } else {
    notIncludes.push("Cenas o almuerzos no especificados en el itinerario (tiempo libre para explorar la gastronomía local).")
    notIncludes.push("Bebidas alcohólicas, gastos en compras personales o propinas al personal de servicio.")
    notIncludes.push("Actividades opcionales fuera del cronograma programado.")
    notIncludes.push("Pasajes aéreos hacia el punto de inicio de la excursión.")
  }

  // 4. Punto de encuentro y hora específico
  let meetingPoint = `Terminal Turística de ${pkg.city}, ${pkg.province}`
  let meetingTime = "06:30"
  let meetingNotes = "Presentarse con 15 minutos de anticipación para el registro de equipaje y control de lista."

  if (isGalapagos) {
    meetingPoint = `Aeropuerto de Baltra (GPS) o San Cristóbal (SCY), según tu vuelo a ${pkg.province}`
    meetingTime = "09:30"
    meetingNotes = "Nuestro guía te esperará en la sala de arribos con el letrero distintivo de Travel Innovation tras pasar inspección de bioseguridad ABG."
  } else if (pkg.province === "Pichincha" || pkg.city === "Quito") {
    meetingPoint = "Tribuna de los Shyris (Av. de los Shyris y Portugal, Parque La Carolina), Quito"
    meetingTime = isTrekking ? "05:30" : "06:15"
    meetingNotes = "Contamos con parada secundaria de abordaje en el Trébol o C.C. San Luis (previa coordinación al reservar)."
  } else if (pkg.province === "Azuay" || pkg.city === "Cuenca") {
    meetingPoint = "Parque Calderón (frente a la Catedral de la Inmaculada Concepción), Cuenca"
    meetingTime = "07:00"
    meetingNotes = "Punto accesible en el centro histórico; se solicita puntualidad para salida hacia los atractivos de la provincia."
  } else if (pkg.province === "Guayas" || pkg.city === "Guayaquil") {
    meetingPoint = "Malecón 2000 (Plaza Olmedo, junto al Club de la Unión), Guayaquil"
    meetingTime = "06:30"
    meetingNotes = "Salida puntual en transporte climatizado; parada intermedia en Gasolinera Primax del Puente Alterno Norte."
  } else if (pkg.province === "Tungurahua" || pkg.city.includes("Baños")) {
    meetingPoint = "Parque Central Palomino Flores (frente a la Basílica de la Virgen del Rosario), Baños"
    meetingTime = "07:30"
    meetingNotes = "Encuentro en la agencia receptiva autorizada para prueba de arneses y entrega de credenciales."
  } else if (pkg.province === "Cotopaxi" || pkg.city === "Latacunga") {
    meetingPoint = "Redondel del Rey de Chocolate o Terminal Terrestre de Latacunga"
    meetingTime = isTrekking ? "06:00" : "06:45"
    meetingNotes = "Revisión rápida de vestimenta abrigada antes de ascender a la cota del páramo."
  } else if (pkg.province === "Manabí" || pkg.city.includes("Manta") || pkg.city.includes("Puerto López")) {
    meetingPoint = pkg.city.includes("Puerto López")
      ? "Muelle Turístico de Puerto López (Garita de Embarque)"
      : "Malecón Escénico de Manta (Playa El Murciélago)"
    meetingTime = "07:45"
    meetingNotes = "Colocación de chalecos salvavidas y charla de seguridad marítima previo a zarpar."
  } else if (pkg.province === "Napo" || pkg.city.includes("Tena")) {
    meetingPoint = "Malecón Escénico de Misahuallí o Terminal Terrestre de Tena"
    meetingTime = "08:00"
    meetingNotes = "Recepción de equipaje impermeable y distribución de equipos para canoa o rafting."
  } else if (pkg.province === "Orellana" || pkg.city.includes("Coca")) {
    meetingPoint = "Puerto Fluvial de El Coca (Malecón del Río Napo), Orellana"
    meetingTime = "08:30"
    meetingNotes = "Control de manifiesto de navegación fluvial con la Capitanía de Puerto de la Armada del Ecuador."
  } else if (pkg.province === "Imbabura" || pkg.city.includes("Otavalo")) {
    meetingPoint = "Plaza de Ponchos (Esquina de Calle Sucre y Salinas), Otavalo"
    meetingTime = "07:15"
    meetingNotes = "Encuentro en el corazón textil de Imbabura para inicio de la ruta andina."
  } else if (pkg.province === "Chimborazo" || pkg.city.includes("Riobamba")) {
    meetingPoint = "Parque Maldonado o Estación del Ferrocarril, Riobamba"
    meetingTime = isTrekking ? "05:45" : "06:30"
    meetingNotes = "Inicio de ascenso hacia el coloso Chimborazo; tolerancia máxima estricta de 15 minutos."
  } else if (pkg.province === "Santa Elena" || pkg.city.includes("Salinas") || pkg.city.includes("Montañita")) {
    meetingPoint = pkg.city.includes("Montañita")
      ? "Plaza Central de Montañita (junto a la Iglesia)"
      : "Paseo Marítimo de San Lorenzo, Salinas"
    meetingTime = "08:00"
    meetingNotes = "Llevar ropa ligera, protector solar biodegradable y toalla de playa en mochila de mano."
  }

  // 5. Documentos requeridos específicos
  const requiredDocuments: string[] = []
  if (isGalapagos) {
    requiredDocuments.push("Cédula de identidad física y original (ecuatorianos) o pasaporte vigente por mínimo 6 meses (extranjeros).")
    requiredDocuments.push("Tarjeta de Control Migratorio (TCT) del Consejo de Gobierno de Galápagos.")
    requiredDocuments.push("Voucher de reserva de hospedaje y boleto aéreo de retorno confirmado.")
    requiredDocuments.push("Para menores de edad: documento de identidad y autorización notariada si no viaja con ambos progenitores.")
  } else if (isTrekking || isAventura) {
    requiredDocuments.push("Cédula de identidad o pasaporte original del titular y cada participante registrado.")
    requiredDocuments.push("Ficha médica de salud preventiva y formulario de aceptación de riesgos para deportes de aventura firmado.")
    requiredDocuments.push("Para menores de edad: presencia de su representante legal o tutor debidamente autorizado.")
  } else if (isAmazonia) {
    requiredDocuments.push("Cédula de identidad física o pasaporte original en buen estado.")
    requiredDocuments.push("Carné de vacunación contra la Fiebre Amarilla recomendado con al menos 10 días de antelación al viaje.")
    requiredDocuments.push("Registro personal para el pase de áreas protegidas del Ministerio de Ambiente (MAATE).")
  } else {
    requiredDocuments.push("Cédula de identidad física y original del titular de la reserva y acompañantes.")
    requiredDocuments.push("Para menores de edad: cédula de identidad física o partida de nacimiento.")
    requiredDocuments.push("Póliza de seguro médico de accidentes personales o carné de IESS (sugerido para tranquilidad durante la excursión).")
  }

  // 6. Condiciones resumidas específicas
  const conditions: string[] = []
  if (isTrekking) {
    conditions.push("Grupo mínimo para confirmar salida: 4 personas (máximo 8 montañistas por cordada técnica con guía ASEGUIM).")
    conditions.push("Apto para personas a partir de 12 años con condición física activa y sin antecedentes de cardiopatías severas o asma aguda.")
    conditions.push("Itinerario de cumbre sujeto a condiciones meteorológicas y nevadas repentinas por seguridad de la expedición.")
  } else if (isGalapagos) {
    conditions.push("Salida con cupos regulados sujeta a las disposiciones marítimas de la Dirección del Parque Nacional Galápagos.")
    conditions.push("Prohibido ingresar con plásticos de un solo uso, semillas, frutas frescas o animales domésticos a las islas.")
    conditions.push("Apto para todas las edades; navegación interislas requiere chaleco obligatorio en todo momento.")
  } else if (isAventura) {
    conditions.push("Grupo mínimo para operar la salida: 6 aventureros.")
    conditions.push("Edad mínima recomendada: 10 años para rafting / canyoning; chalecos salvavidas tipo V y cascos obligatorios.")
    conditions.push("El guía líder tiene autoridad para suspender o variar el tramo acuático en caso de crecidas intempestivas del río.")
  } else if (isAmazonia) {
    conditions.push("Grupo mínimo para confirmación: 4 personas.")
    conditions.push("Se exige respeto absoluto a los códigos culturales de las comunidades anfitrionas y no alimentar a la fauna silvestre.")
    conditions.push("Equipaje permitido: 1 maleta de hasta 15 kg por persona para traslados fluviales en canoa.")
  } else if (isRomantico) {
    conditions.push("Experiencia exclusiva diseñada para 2 personas con ambiente privado y servicios personalizados.")
    conditions.push("Horario de Check-in en hostería / glamping: 14:00 · Check-out: 12:00.")
  } else {
    conditions.push("Salida turística confirmada con un mínimo de 10 personas.")
    conditions.push("Programa apto para todas las edades, niños pequeños y adultos mayores.")
    conditions.push("En caso de fuerza mayor vial o climática, se aplicará reprogramación consensuada o ruta alternativa turística.")
  }

  return {
    includes,
    notIncludes,
    meetingPoint,
    meetingTime,
    meetingNotes,
    requiredDocuments,
    conditions,
  }
}

