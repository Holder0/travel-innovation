import { useEffect, useMemo, useRef, useState } from "react"

type Page =
  | "inicio"
  | "catalogo"
  | "catalogo-costa"
  | "catalogo-sierra"
  | "catalogo-amazonia"
  | "catalogo-galapagos"
  | "detalle"
  | "carrito"
  | "identificacion"
  | "viajeros"
  | "pago"
  | "confirmacion"
  | "reservas"
  | "politicas"
  | "soporte"
  | "diagrama"
  | "tickets"

export interface SupportTicket {
  id: string
  ticketNumber: string
  bookingCode: string
  reason: string
  description: string
  evidenceUploaded: boolean
  createdAt: string
  status: "En revisión" | "En trámite" | "Resuelto"
  responseEstimated: string
}

export interface DateRange {
  startDay: number
  endDay: number
  month: string
  year: number
}

export interface SearchFilters {
  region?: string
  province?: string
  city?: string
  dateRange?: DateRange | null
}

export interface PackageItem {
  id: string
  name: string
  region: "Costa" | "Sierra" | "Amazonía" | "Galápagos"
  province: string
  city: string
  days: string
  price: number
  datesText: string
  availableDates?: string[]
  dates: {
    startDay: number
    endDay: number
    month: string
    year: number
  }
  image: string
  secondaryImages: [string, string]
}

export interface CartItem {
  id: string
  pkg: PackageItem
  date: string
  people: number
  total: number
}

export const PROVINCES_DATA: Record<
  string,
  { region: "Costa" | "Sierra" | "Amazonía" | "Galápagos"; cities: string[] }
> = {
  Azuay: {
    region: "Sierra",
    cities: [
      "Cuenca",
      "Gualaceo",
      "Paute",
      "Chordeleg",
      "Santa Isabel",
      "Girón",
      "Sígsig",
      "Nabón",
      "Pucará",
      "San Fernando",
      "Sevilla de Oro",
      "Guachapala",
      "El Pan",
      "Oña",
      "Camilo Ponce Enríquez",
    ],
  },
  Bolívar: {
    region: "Sierra",
    cities: [
      "Guaranda",
      "San Miguel",
      "Chimbo",
      "Caluma",
      "Echeandía",
      "Las Naves",
      "Chillanes",
    ],
  },
  Cañar: {
    region: "Sierra",
    cities: [
      "Azogues",
      "Cañar",
      "La Troncal",
      "Biblián",
      "Déleg",
      "El Tambo",
      "Suscal",
    ],
  },
  Carchi: {
    region: "Sierra",
    cities: [
      "Tulcán",
      "San Gabriel (Montúfar)",
      "Mira",
      "Bolívar",
      "El Ángel (Espejo)",
      "Huaca",
    ],
  },
  Chimborazo: {
    region: "Sierra",
    cities: [
      "Riobamba",
      "Alausí",
      "Guano",
      "Colta",
      "Chambo",
      "Guamote",
      "Pallatanga",
      "Penipe",
      "Cumandá",
      "Chunchi",
    ],
  },
  Cotopaxi: {
    region: "Sierra",
    cities: [
      "Latacunga",
      "Salcedo",
      "Pujilí",
      "Saquisilí",
      "La Maná",
      "Pangua (El Corazón)",
      "Sigchos",
    ],
  },
  "El Oro": {
    region: "Costa",
    cities: [
      "Machala",
      "Pasaje",
      "Santa Rosa",
      "Huaquillas",
      "Arenillas",
      "Zaruma",
      "Piñas",
      "Portovelo",
      "El Guabo",
      "Atahualpa (Paccha)",
      "Balsas",
      "Chilla",
      "Las Lajas",
      "Marcabelí",
    ],
  },
  Esmeraldas: {
    region: "Costa",
    cities: [
      "Esmeraldas",
      "Atacames",
      "Quinindé",
      "San Lorenzo",
      "Muisne",
      "Rioverde",
      "Eloy Alfaro (Valdez)",
    ],
  },
  Galápagos: {
    region: "Galápagos",
    cities: [
      "Puerto Ayora (Santa Cruz)",
      "Puerto Baquerizo Moreno (San Cristóbal)",
      "Puerto Villamil (Isabela)",
    ],
  },
  Guayas: {
    region: "Costa",
    cities: [
      "Guayaquil",
      "Samborondón",
      "Daule",
      "Durán",
      "Milagro",
      "Playas (General Villamil)",
      "Salitre",
      "Naranjal",
      "Balzar",
      "El Empalme",
      "Pedro Carbo",
      "Yaguachi",
      "Santa Lucía",
      "Colimes",
      "Palestina",
      "Bucay (Gral. Antonio Elizalde)",
      "Naranjito",
      "Marcelino Maridueña",
      "Lomas de Sargentillo",
      "Nobol",
      "Simón Bolívar",
      "Isidro Ayora",
      "Balao",
      "Jujan (Alfredo Baquerizo Moreno)",
    ],
  },
  Imbabura: {
    region: "Sierra",
    cities: [
      "Ibarra",
      "Otavalo",
      "Cotacachi",
      "Antonio Ante (Atuntaqui)",
      "Pimampiro",
      "Urcuquí",
    ],
  },
  Loja: {
    region: "Sierra",
    cities: [
      "Loja",
      "Catamayo",
      "Cariamanga (Calvas)",
      "Macará",
      "Saraguro",
      "Celica",
      "Paltas (Catacocha)",
      "Puyango (Alamor)",
      "Gonzanamá",
      "Espíndola (Amaluza)",
      "Chaguarpamba",
      "Pindal",
      "Zapotillo",
      "Quilanga",
      "Sozoranga",
      "Olmedo",
    ],
  },
  "Los Ríos": {
    region: "Costa",
    cities: [
      "Babahoyo",
      "Quevedo",
      "Buena Fe",
      "Ventanas",
      "Vinces",
      "Valencia",
      "Montalvo",
      "Mocache",
      "Puebloviejo",
      "Palenque",
      "Urdaneta (Catarama)",
      "Baba",
      "Quinsaloma",
    ],
  },
  Manabí: {
    region: "Costa",
    cities: [
      "Portoviejo",
      "Manta",
      "Chone",
      "Montecristi",
      "Jipijapa",
      "Bahía de Caráquez (Sucre)",
      "El Carmen",
      "Pedernales",
      "Tosagua",
      "Rocafuerte",
      "Santa Ana",
      "Calceta (Bolívar)",
      "Jama",
      "San Vicente",
      "Jaramijó",
      "Puerto López",
      "Paján",
      "Flavio Alfaro",
      "Pichincha",
      "Junín",
      "24 de Mayo",
      "Olmedo",
    ],
  },
  "Morona Santiago": {
    region: "Amazonía",
    cities: [
      "Macas (Morona)",
      "Sucúa",
      "Gualaquiza",
      "Limón Indanza",
      "Palora",
      "Santiago de Méndez",
      "Tiwintza",
      "Taisha",
      "Logroño",
      "San Juan Bosco",
      "Huamboya",
      "Pablo Sexto",
    ],
  },
  Napo: {
    region: "Amazonía",
    cities: [
      "Tena",
      "Archidona",
      "El Chaco",
      "Baeza (Quijos)",
      "Carlos Julio Arosemena Tola",
    ],
  },
  Orellana: {
    region: "Amazonía",
    cities: [
      "Puerto Francisco de Orellana (El Coca)",
      "La Joya de los Sachas",
      "Loreto",
      "Nuevo Rocafuerte (Aguarico)",
    ],
  },
  Pastaza: {
    region: "Amazonía",
    cities: ["Puyo (Pastaza)", "Mera", "Santa Clara", "Arajuno"],
  },
  Pichincha: {
    region: "Sierra",
    cities: [
      "Quito",
      "Rumiñahui (Sangolquí)",
      "Cayambe",
      "Mejía (Machachi)",
      "Pedro Moncayo (Tabacundo)",
      "Puerto Quito",
      "Pedro Vicente Maldonado",
      "San Miguel de los Bancos",
    ],
  },
  "Santa Elena": {
    region: "Costa",
    cities: ["Santa Elena", "Salinas", "La Libertad"],
  },
  "Santo Domingo de los Tsáchilas": {
    region: "Costa",
    cities: ["Santo Domingo", "La Concordia"],
  },
  Sucumbíos: {
    region: "Amazonía",
    cities: [
      "Nueva Loja (Lago Agrio)",
      "Shushufindi",
      "Cáscales",
      "Gonzalo Pizarro (Lumbaquí)",
      "Putumayo",
      "Cuyabeno",
      "Sucumbíos",
    ],
  },
  Tungurahua: {
    region: "Sierra",
    cities: [
      "Ambato",
      "Baños de Agua Santa",
      "Pelileo",
      "Píllaro",
      "Cevallos",
      "Tisaleo",
      "Quero",
      "Mocha",
      "Patate",
    ],
  },
  "Zamora Chinchipe": {
    region: "Amazonía",
    cities: [
      "Zamora",
      "Yantzaza",
      "El Pangui",
      "Centinela del Cóndor (Zumbi)",
      "Nangaritza (Guayzimi)",
      "Palanda",
      "Chinchipe (Zumba)",
      "Paquisha",
      "Yacuambi",
    ],
  },
}

// ==========================================
// VALIDACIONES DE FORMULARIOS Y REGLAS DE NEGOCIO
// ==========================================

export function validateEcuadorianCedula(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "La cédula de identidad es requerida." }
  }
  if (clean.length < 10) {
    return {
      isValid: false,
      error: `Faltan números: la cédula debe tener exactamente 10 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 10) {
    return {
      isValid: false,
      error: `Están de más números: la cédula debe tener exactamente 10 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (/^(\d)\1{9}$/.test(clean)) {
    return {
      isValid: false,
      error: "Cédula inválida: no se permiten números repetidos o ficticios.",
    }
  }
  const prov = parseInt(clean.substring(0, 2), 10)
  if ((prov < 1 || prov > 24) && prov !== 30) {
    return {
      isValid: false,
      error: "Código de provincia no válido: los dos primeros dígitos deben estar entre 01 y 24.",
    }
  }
  const third = parseInt(clean.charAt(2), 10)
  if (third >= 6) {
    return {
      isValid: false,
      error: "Tercer dígito no válido para cédula de persona natural.",
    }
  }
  const coef = [2, 1, 2, 1, 2, 1, 2, 1, 2]
  let sum = 0
  for (let i = 0; i < 9; i++) {
    let p = parseInt(clean.charAt(i), 10) * coef[i]
    if (p >= 10) p -= 9
    sum += p
  }
  const verifier = (10 - (sum % 10)) % 10
  const lastDigit = parseInt(clean.charAt(9), 10)
  if (verifier !== lastDigit) {
    return {
      isValid: false,
      error: "Número de cédula inválido: el dígito verificador no coincide con una cédula ecuatoriana real.",
    }
  }
  return { isValid: true }
}

export function validatePhoneNumber(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "El número de teléfono es requerido." }
  }
  if (clean.length < 10) {
    return {
      isValid: false,
      error: `Faltan números: el número de teléfono debe tener exactamente 10 dígitos (ingresaste ${clean.length}, ej. 0991234567).`,
    }
  }
  if (clean.length > 10) {
    return {
      isValid: false,
      error: `Están de más números: el número de teléfono debe tener máximo 10 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (!clean.startsWith("0")) {
    return {
      isValid: false,
      error: "Número de teléfono inválido: debe iniciar con 0 (ej. 09...).",
    }
  }
  if (/^(\d)\1{9}$/.test(clean)) {
    return {
      isValid: false,
      error: "Número de teléfono inválido: no se admiten números repetidos o ficticios.",
    }
  }
  return { isValid: true }
}

export function validateCardNumber(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "Ingresa el número de tu tarjeta." }
  }
  if (clean.length < 16) {
    return {
      isValid: false,
      error: `Faltan números: la tarjeta debe tener exactamente 16 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 16) {
    return {
      isValid: false,
      error: `Están de más números: la tarjeta debe tener exactamente 16 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (/^(\d)\1{15}$/.test(clean)) {
    return {
      isValid: false,
      error: "Tarjeta no válida: no se admiten números ficticios o repetidos (ej. 16 unos seguidos).",
    }
  }
  let sum = 0
  let shouldDouble = false
  for (let i = clean.length - 1; i >= 0; i--) {
    let digit = parseInt(clean.charAt(i), 10)
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }
  if (sum % 10 !== 0) {
    return {
      isValid: false,
      error: "Número de tarjeta no válido: el algoritmo de verificación indica que no es una tarjeta real.",
    }
  }
  return { isValid: true }
}

export function validateCardExpiry(value: string): {
  isValid: boolean
  error?: string
} {
  const trimmed = value.trim()
  if (!trimmed) {
    return { isValid: false, error: "Ingresa la fecha de vencimiento (MM/AA)." }
  }
  const parts = trimmed.split("/")
  if (parts.length !== 2) {
    return {
      isValid: false,
      error: "Formato inválido: la fecha debe ingresarse como MM/AA (ej. 12/28).",
    }
  }
  const monthStr = parts[0].trim()
  const yearStr = parts[1].trim()
  if (monthStr.length < 2 || yearStr.length < 2) {
    return {
      isValid: false,
      error: "Faltan números: debes ingresar 2 dígitos de mes y 2 de año (MM/AA).",
    }
  }
  if (monthStr.length > 2 || yearStr.length > 2) {
    return {
      isValid: false,
      error: "Están de más números: la fecha debe ser de 2 dígitos de mes y 2 de año (MM/AA).",
    }
  }
  const month = parseInt(monthStr, 10)
  const year = parseInt(yearStr, 10)
  if (isNaN(month) || isNaN(year)) {
    return { isValid: false, error: "La fecha debe contener únicamente números." }
  }
  if (month < 1 || month > 12) {
    return {
      isValid: false,
      error: `Mes inválido (${monthStr}): no se pueden ingresar meses inventados (debe estar entre 01 y 12).`,
    }
  }
  const curYearShort = 26
  const curMonth = 10
  if (year < curYearShort || (year === curYearShort && month < curMonth)) {
    return { isValid: false, error: "Tarjeta vencida: la fecha de vencimiento ya expiró." }
  }
  if (year > curYearShort + 20) {
    return { isValid: false, error: "Año de vencimiento demasiado lejano o incorrecto." }
  }
  return { isValid: true }
}

export function validateCardCvv(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "El código de seguridad (CVV) es requerido." }
  }
  if (clean.length < 3) {
    return {
      isValid: false,
      error: `Faltan números: el código de seguridad (CVV) debe tener exactamente 3 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 3) {
    return {
      isValid: false,
      error: `Están de más números: el código de seguridad debe tener exactamente 3 dígitos (ingresaste ${clean.length}).`,
    }
  }
  return { isValid: true }
}

export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  cedula: string
  province: string
  city: string
  mainStreet: string
  secondaryStreet: string
  reference: string
}

export interface TravelerData {
  id: string
  packageId?: string
  slotNumber: number
  packageTitle: string
  isTitular: boolean
  fullName: string
  cedula: string
  phone?: string
  email?: string
  isMinor: boolean
  birthDate?: string
}

export type PaymentMethodType = "transferencia" | "debito" | "credito"

export interface PaymentDetails {
  method: PaymentMethodType
  bankVoucherNumber?: string
  bankVoucherUploaded?: boolean
  cardNumber?: string
  cardHolder?: string
  cardExpiry?: string
  cardCvv?: string
  installments?: string
}

export interface PurchaseItem {
  id: string
  code: string
  createdAt: string
  status: "En verificación" | "Confirmada" | "Reprogramada" | "Cancelada"
  packages: Array<{
    id: string
    name: string
    region: string
    city: string
    province: string
    date: string
    people: number
    price: number
    total: number
  }>
  total: number
  paymentMethod: PaymentMethodType
  paymentMethodLabel: string
  installments?: string
  voucherNumber?: string
  cardLast4?: string
  titular: {
    name: string
    email: string
    phone: string
    cedula: string
    address: string
  }
  travelers: TravelerData[]
}

export interface UserAccountData {
  cart: CartItem[]
  purchases: PurchaseItem[]
  savedPersonalInfo?: PersonalInfo
}

export interface RegisteredUserRecord {
  email: string
  password: string
  firstName: string
  secondName?: string
  firstLastName: string
  secondLastName?: string
  fullName: string
}

const STORAGE_USERS_REGISTRY_KEY = "travel_innovation_users_registry_v1"

const DEFAULT_REGISTERED_USERS: Record<string, RegisteredUserRecord> = {
  "maria@ejemplo.com": {
    email: "maria@ejemplo.com",
    password: "password123",
    firstName: "María",
    secondName: "",
    firstLastName: "Andrade",
    secondLastName: "",
    fullName: "María Andrade",
  },
}

export function getRegisteredUsers(): Record<string, RegisteredUserRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_USERS_REGISTRY_KEY)
    if (raw) {
      return { ...DEFAULT_REGISTERED_USERS, ...JSON.parse(raw) }
    }
  } catch (err) {
    console.error("Error reading users registry", err)
  }
  return { ...DEFAULT_REGISTERED_USERS }
}

export function saveRegisteredUsers(users: Record<string, RegisteredUserRecord>) {
  try {
    localStorage.setItem(STORAGE_USERS_REGISTRY_KEY, JSON.stringify(users))
  } catch (err) {
    console.error("Error saving users registry", err)
  }
}

export function generateBookingCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let randomPart = ""
  for (let i = 0; i < 6; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  const year = new Date().getFullYear()
  return `TI-${year}-${randomPart}`
}

const STORAGE_ACCOUNTS_KEY = "travel_innovation_accounts_v3"

export function getStoredAccounts(): Record<string, UserAccountData> {
  try {
    const raw = localStorage.getItem(STORAGE_ACCOUNTS_KEY)
    if (raw) return JSON.parse(raw)
  } catch (err) {
    console.error("Error reading accounts from localStorage", err)
  }
  return {
    "maria@ejemplo.com": {
      cart: [],
      savedPersonalInfo: {
        fullName: "María Andrade",
        email: "maria@ejemplo.com",
        phone: "0991234567",
        cedula: "1712345675",
        province: "Pichincha",
        city: "Quito",
        mainStreet: "Av. Amazonas",
        secondaryStreet: "Naciones Unidas",
        reference: "N34-120",
      },
      purchases: [
        {
          id: "demo-purchase-1",
          code: "VJ-8K3Q2M",
          createdAt: "02 oct 2026, 14:30",
          status: "En verificación",
          packages: [
            {
              id: "aventura-banos",
              name: "Aventura en Baños",
              region: "Sierra",
              city: "Baños de Agua Santa",
              province: "Tungurahua",
              date: "09 al 11 oct 2026",
              people: 2,
              price: 189,
              total: 378,
            },
          ],
          total: 378,
          paymentMethod: "transferencia",
          paymentMethodLabel: "Transferencia bancaria",
          voucherNumber: "76543210",
          titular: {
            name: "María Andrade",
            email: "maria@ejemplo.com",
            phone: "0991234567",
            cedula: "1712345675",
            address: "Av. Amazonas y Naciones Unidas, N34-120 · Quito, Pichincha",
          },
          travelers: [
            {
              id: "t-1",
              slotNumber: 1,
              packageTitle: "Aventura en Baños",
              isTitular: true,
              fullName: "María Andrade",
              cedula: "1712345675",
              isMinor: false,
            },
            {
              id: "t-2",
              slotNumber: 2,
              packageTitle: "Aventura en Baños",
              isTitular: false,
              fullName: "Carlos Andrade",
              cedula: "1798765432",
              isMinor: false,
            },
          ],
        },
      ],
    },
  }
}

export function saveStoredAccounts(data: Record<string, UserAccountData>) {
  try {
    localStorage.setItem(STORAGE_ACCOUNTS_KEY, JSON.stringify(data))
  } catch (err) {
    console.error("Error saving accounts to localStorage", err)
  }
}

const CURRENT_YEAR = new Date().getFullYear()

const packages: PackageItem[] = [
  {
    id: "navidad-galapagos",
    name: "Navidad en Galápagos",
    region: "Galápagos",
    province: "Galápagos",
    city: "Puerto Ayora (Santa Cruz)",
    days: "4 días / 3 noches",
    price: 685,
    datesText: `23 al 26 dic ${CURRENT_YEAR}`,
    availableDates: [`23 al 26 dic ${CURRENT_YEAR}`],
    dates: { startDay: 23, endDay: 26, month: "dic", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "galapagos-promo-flash",
    name: "Galápagos Santa Cruz Promo Flash",
    region: "Galápagos",
    province: "Galápagos",
    city: "Puerto Ayora (Santa Cruz)",
    days: "4 días / 3 noches",
    price: 499,
    datesText: `16 al 19 oct ${CURRENT_YEAR}`,
    availableDates: [`16 al 19 oct ${CURRENT_YEAR}`],
    dates: { startDay: 16, endDay: 19, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "galapagos-feriado-octubre",
    name: "Galápagos Feriado de Octubre",
    region: "Galápagos",
    province: "Galápagos",
    city: "Puerto Ayora (Santa Cruz)",
    days: "4 días / 3 noches",
    price: 589,
    datesText: `09 al 12 oct ${CURRENT_YEAR}`,
    availableDates: [`09 al 12 oct ${CURRENT_YEAR}`],
    dates: { startDay: 9, endDay: 12, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cojimies-fin-de-ano",
    name: "Cojimíes Fin de Año",
    region: "Costa",
    province: "Manabí",
    city: "Pedernales",
    days: "3 días / 2 noches",
    price: 189,
    datesText: `30 dic al 02 ene ${CURRENT_YEAR + 1}`,
    availableDates: [`30 dic al 02 ene ${CURRENT_YEAR + 1}`],
    dates: { startDay: 30, endDay: 31, month: "dic", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "banos-aventura",
    name: "Aventura en Baños y Cascadas",
    region: "Sierra",
    province: "Tungurahua",
    city: "Baños de Agua Santa",
    days: "3 días / 2 noches",
    price: 175,
    datesText: `09 al 11 oct ${CURRENT_YEAR}`,
    availableDates: [
      `09 al 11 oct ${CURRENT_YEAR}`,
      `16 al 18 oct ${CURRENT_YEAR}`,
      `23 al 25 oct ${CURRENT_YEAR}`,
      `06 al 08 nov ${CURRENT_YEAR}`,
      `13 al 15 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 9, endDay: 11, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ruta-spondylus",
    name: "Ruta del Spondylus y Manta",
    region: "Costa",
    province: "Manabí",
    city: "Manta",
    days: "4 días / 3 noches",
    price: 275,
    datesText: `16 al 19 oct ${CURRENT_YEAR}`,
    availableDates: [
      `16 al 19 oct ${CURRENT_YEAR}`,
      `23 al 26 oct ${CURRENT_YEAR}`,
      `06 al 09 nov ${CURRENT_YEAR}`,
      `20 al 23 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 16, endDay: 19, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "amazonia-esencial",
    name: "Amazonía Esencial y Río Napo",
    region: "Amazonía",
    province: "Napo",
    city: "Tena",
    days: "4 días / 3 noches",
    price: 319,
    datesText: `17 al 20 oct ${CURRENT_YEAR}`,
    availableDates: [
      `17 al 20 oct ${CURRENT_YEAR}`,
      `24 al 27 oct ${CURRENT_YEAR}`,
      `07 al 10 nov ${CURRENT_YEAR}`,
      `21 al 24 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 17, endDay: 20, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cuenca-patrimonial",
    name: "Cuenca Patrimonial y Cajas",
    region: "Sierra",
    province: "Azuay",
    city: "Cuenca",
    days: "3 días / 2 noches",
    price: 230,
    datesText: `01 al 03 nov ${CURRENT_YEAR}`,
    availableDates: [`01 al 03 nov ${CURRENT_YEAR}`],
    dates: { startDay: 1, endDay: 3, month: "nov", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cuyabeno-reserva",
    name: "Cuyabeno Reserva Amazónica",
    region: "Amazonía",
    province: "Sucumbíos",
    city: "Lago Agrio / Cuyabeno",
    days: "4 días / 3 noches",
    price: 380,
    datesText: `23 al 26 oct ${CURRENT_YEAR}`,
    availableDates: [
      `23 al 26 oct ${CURRENT_YEAR}`,
      `13 al 16 nov ${CURRENT_YEAR}`,
      `27 al 30 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 23, endDay: 26, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    ],
  },
]

const pageNames: Record<Page, string> = {
  inicio: "Inicio",
  catalogo: "Paquetes turísticos",
  "catalogo-costa": "Paquetes en la Costa",
  "catalogo-sierra": "Paquetes en la Sierra",
  "catalogo-amazonia": "Paquetes en la Amazonía",
  "catalogo-galapagos": "Paquetes en Galápagos",
  detalle: "Detalle del paquete",
  carrito: "Carrito",
  identificacion: "Información Personal",
  viajeros: "Datos de viajeros",
  pago: "Pago de la reserva",
  confirmacion: "Confirmación",
  reservas: "Mis compras",
  politicas: "Políticas de reserva",
  soporte: "Soporte",
  diagrama: "Diagrama de estados",
  tickets: "Mis tickets",
}

function Button({
  children,
  onClick,
  kind = "secondary",
  disabled = false,
  type = "button",
  className = "",
  style,
  id,
}: {
  children: React.ReactNode
  onClick?: () => void
  kind?: "primary" | "secondary" | "quiet" | "danger"
  disabled?: boolean
  type?: "button" | "submit"
  className?: string
  style?: React.CSSProperties
  id?: string
}) {
  return (
    <button
      id={id}
      className={`button button--${kind} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  )
}

function Field({
  label,
  type = "text",
  placeholder,
  help,
  error,
  value,
  onChange,
  id,
  required,
  autoFocus,
  maxLength,
}: {
  label: string
  type?: string
  placeholder?: string
  help?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  id?: string
  required?: boolean
  autoFocus?: boolean
  maxLength?: number
}) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        onChange={(event) => onChange?.(event.target.value)}
      />
      {help && <span className="field__help">{help}</span>}
      {error && (
        <span className="field__error" role="alert">
          <span aria-hidden="true">⚠️</span> {error}
        </span>
      )}
    </label>
  )
}

function SelectField({
  label,
  children,
  help,
  error,
  value,
  onChange,
  disabled = false,
  id,
}: {
  label: string
  children: React.ReactNode
  help?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  id?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <div className={`select-wrapper ${isOpen ? "is-open" : ""}`}>
        <select
          id={id}
          disabled={disabled}
          value={value}
          onChange={(event) => {
            onChange?.(event.target.value)
            setIsOpen(false)
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {children}
        </select>
        <span
          className={`dropdown-caret ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </div>
      {help && <span className="field__help">{help}</span>}
      {error && (
        <span className="field__error" role="alert">
          <span aria-hidden="true">⚠️</span> {error}
        </span>
      )}
    </label>
  )
}

const CALENDAR_MONTHS = [
  { key: "jul", name: `Julio ${CURRENT_YEAR}`, days: 31, year: CURRENT_YEAR },
  { key: "ago", name: `Agosto ${CURRENT_YEAR}`, days: 31, year: CURRENT_YEAR },
  { key: "sep", name: `Septiembre ${CURRENT_YEAR}`, days: 30, year: CURRENT_YEAR },
  { key: "oct", name: `Octubre ${CURRENT_YEAR}`, days: 31, year: CURRENT_YEAR },
  { key: "nov", name: `Noviembre ${CURRENT_YEAR}`, days: 30, year: CURRENT_YEAR },
  { key: "dic", name: `Diciembre ${CURRENT_YEAR}`, days: 31, year: CURRENT_YEAR },
  { key: "ene", name: `Enero ${CURRENT_YEAR + 1}`, days: 31, year: CURRENT_YEAR + 1 },
]

export function isPastDay(day: number, monthKey: string, year: number): boolean {
  const monthMap: Record<string, number> = {
    ene: 0,
    feb: 1,
    mar: 2,
    abr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dic: 11,
  }
  const m = monthMap[monthKey] ?? 0
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  const targetEndOfDay = new Date(year, m, day, 23, 59, 59, 999)
  return targetEndOfDay.getTime() < todayStart.getTime()
}

export function isToday(day: number, monthKey: string, year: number): boolean {
  const monthMap: Record<string, number> = {
    ene: 0,
    feb: 1,
    mar: 2,
    abr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dic: 11,
  }
  const m = monthMap[monthKey] ?? 0
  const now = new Date()
  return (
    now.getFullYear() === year &&
    now.getMonth() === m &&
    now.getDate() === day
  )
}

function DateRangePicker({
  value,
  onChange,
  label = "Fecha de viaje",
}: {
  value: DateRange | null
  onChange: (range: DateRange | null) => void
  label?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  const getCurrentMonthIndex = () => {
    const now = new Date()
    const currentMonthKey = [
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
    ][now.getMonth()]
    const idx = CALENDAR_MONTHS.findIndex((m) => m.key === currentMonthKey)
    return idx >= 0 ? idx : 0
  }

  const initialMonthIdx = useMemo(() => {
    if (!value) return getCurrentMonthIndex()
    const idx = CALENDAR_MONTHS.findIndex((m) => m.key === value.month)
    return idx >= 0 ? idx : getCurrentMonthIndex()
  }, [value])

  const [monthIdx, setMonthIdx] = useState(initialMonthIdx)
  const currentMonth = CALENDAR_MONTHS[monthIdx]

  const [tempStart, setTempStart] = useState<number | null>(value ? value.startDay : null)
  const [tempEnd, setTempEnd] = useState<number | null>(value ? value.endDay : null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value) {
      const idx = CALENDAR_MONTHS.findIndex((m) => m.key === value.month)
      if (idx >= 0) setMonthIdx(idx)
      setTempStart(value.startDay)
      setTempEnd(value.endDay)
    } else {
      setMonthIdx(getCurrentMonthIndex())
      setTempStart(null)
      setTempEnd(null)
    }
  }, [value, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const handleDayClick = (day: number) => {
    if (isPastDay(day, currentMonth.key, currentMonth.year)) {
      return
    }
    if (tempStart === null || (tempStart !== null && tempEnd !== null)) {
      setTempStart(day)
      setTempEnd(null)
    } else {
      if (day < tempStart) {
        setTempStart(day)
        setTempEnd(null)
      } else if (day === tempStart) {
        setTempEnd(day)
      } else {
        setTempEnd(day)
      }
    }
  }

  const applyRange = () => {
    if (tempStart !== null && isPastDay(tempStart, currentMonth.key, currentMonth.year)) {
      return
    }
    if (tempStart !== null && tempEnd !== null) {
      onChange({
        startDay: Math.min(tempStart, tempEnd),
        endDay: Math.max(tempStart, tempEnd),
        month: currentMonth.key,
        year: currentMonth.year,
      })
    } else if (tempStart !== null) {
      onChange({
        startDay: tempStart,
        endDay: tempStart,
        month: currentMonth.key,
        year: currentMonth.year,
      })
    }
    setIsOpen(false)
  }

  const clearRange = () => {
    setTempStart(null)
    setTempEnd(null)
    onChange(null)
    setIsOpen(false)
  }

  const hasRange = value !== null
  const daysDiff = value ? value.endDay - value.startDay + 1 : 0
  const monthName = value ? (CALENDAR_MONTHS.find(m => m.key === value.month)?.name.split(" ")[0] || value.month) : ""

  return (
    <div ref={containerRef} className="field date-range-field" style={{ position: "relative" }}>
      {label && <span className="field__label">{label}</span>}
      <button
        type="button"
        className={`date-trigger ${hasRange ? "is-active" : ""}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          minHeight: "52px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "4px 10px",
          background: hasRange ? "var(--sand)" : "var(--breeze)",
          border: hasRange ? "2px solid var(--pacific)" : "1px solid var(--pacific)",
          borderRadius: "var(--radius)",
          cursor: "pointer",
          textAlign: "left",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <span aria-hidden="true" style={{ fontSize: "16px", flexShrink: 0 }}>📅</span>
        <span style={{ display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0, overflow: "hidden" }}>
          <strong style={{ fontSize: "13px", lineHeight: "1.25", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--abyss)" }}>
            {hasRange ? `${value.startDay}–${value.endDay} ${monthName}` : "Elegir intervalo de días"}
          </strong>
          <small style={{ fontSize: "11px", lineHeight: "1.25", opacity: 0.8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--abyss)" }}>
            {hasRange ? `${daysDiff} ${daysDiff === 1 ? "día" : "días"} (Ida y vuelta)` : "Seleccionar ida y regreso"}
          </small>
        </span>
        <span className={`dropdown-caret ${isOpen ? "open" : ""}`} aria-hidden="true" style={{ flexShrink: 0 }}>
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          className="calendar-popover"
          role="dialog"
          aria-label="Seleccionar intervalo de fechas"
        >
          <div className="calendar-heading">
            <button
              type="button"
              aria-label="Mes anterior"
              disabled={monthIdx === 0}
              onClick={() => {
                setMonthIdx(i => Math.max(0, i - 1))
                setTempStart(null)
                setTempEnd(null)
              }}
            >
              ‹
            </button>
            <strong style={{ color: "var(--pacific)" }}>{currentMonth.name}</strong>
            <button
              type="button"
              aria-label="Mes siguiente"
              disabled={monthIdx === CALENDAR_MONTHS.length - 1}
              onClick={() => {
                setMonthIdx(i => Math.min(CALENDAR_MONTHS.length - 1, i + 1))
                setTempStart(null)
                setTempEnd(null)
              }}
            >
              ›
            </button>
          </div>
          <div style={{ textAlign: "center", marginBottom: "8px", fontSize: "12px", color: "var(--abyss)" }}>
            {tempStart && tempEnd
              ? `${tempEnd - tempStart + 1} días seleccionados`
              : tempStart
              ? "Elige fecha de retorno"
              : "Elige fecha de salida"}
          </div>
          <div className="calendar-grid">
            {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
              <span key={i} className="calendar-weekday">
                {d}
              </span>
            ))}
            {Array.from({ length: currentMonth.days }, (_, i) => i + 1).map((day) => {
              const isPast = isPastDay(day, currentMonth.key, currentMonth.year)
              const today = isToday(day, currentMonth.key, currentMonth.year)
              const isStart = tempStart === day
              const isEnd = tempEnd === day
              const isEdge = isStart || isEnd
              const isInRange = tempStart !== null && tempEnd !== null && day > tempStart && day < tempEnd
              return (
                <button
                  type="button"
                  key={day}
                  disabled={isPast}
                  onClick={() => !isPast && handleDayClick(day)}
                  className={`calendar-day ${isEdge ? "range-edge" : ""} ${isInRange ? "in-range" : ""} ${isPast ? "is-past" : ""} ${today ? "is-today" : ""}`}
                  aria-label={`${day} de ${currentMonth.name}${today ? " (Hoy)" : ""}${isPast ? " (Fecha pasada, no disponible)" : ""}`}
                  title={isPast ? "Fecha pasada (no disponible)" : today ? "Hoy" : undefined}
                >
                  {day}
                </button>
              )
            })}
          </div>
          <div className="calendar-actions">
            <button
              type="button"
              className="text-link"
              onClick={clearRange}
            >
              Borrar
            </button>
            <Button
              kind="primary"
              onClick={applyRange}
              disabled={tempStart === null}
            >
              Aplicar intervalo
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function Placeholder({
  label = "Imagen referencial del destino",
}: {
  label?: string
}) {
  return (
    <div className="placeholder" role="img" aria-label={label}>
      <span className="placeholder__icon" aria-hidden="true">
        □
      </span>
      <span>{label}</span>
    </div>
  )
}

function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: (user: { name: string; email: string }) => void
}) {
  const modalRef = useRef<HTMLElement>(null)
  const [mode, setMode] = useState<"login" | "register" | "recovery">("login")

  // Login credentials
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Registration fields
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [firstLastName, setFirstLastName] = useState("")
  const [secondLastName, setSecondLastName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [regConfirmPassword, setRegConfirmPassword] = useState("")

  // Error & recovery feedback
  const [errorMsg, setErrorMsg] = useState("")
  const [recoverySubmitted, setRecoverySubmitted] = useState(false)

  const handleClose = () => {
    setMode("login")
    setErrorMsg("")
    setRecoverySubmitted(false)
    onClose()
  }

  // Always reset to login view when opening the modal
  useEffect(() => {
    if (isOpen) {
      setMode("login")
      setErrorMsg("")
      setRecoverySubmitted(false)
    }
  }, [isOpen])

  // Clear errors when toggling modes
  useEffect(() => {
    if (isOpen) {
      setErrorMsg("")
    }
  }, [mode, isOpen])

  // Support closing via Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  // Handle clicking outside the modal dialog
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target === e.currentTarget ||
      (modalRef.current && !modalRef.current.contains(e.target as Node))
    ) {
      handleClose()
    }
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Por favor completa tu correo y contraseña.")
      return
    }
    const regUsers = getRegisteredUsers()
    const emailKey = email.trim().toLowerCase()
    const record = regUsers[emailKey]

    if (!record || record.password !== password) {
      setErrorMsg("Correo o contraseña incorrectos.")
      return
    }

    onLoginSuccess({ name: record.fullName, email: record.email })
    handleClose()
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim()) {
      setErrorMsg("Por favor ingresa tu primer nombre.")
      return
    }
    if (!firstLastName.trim()) {
      setErrorMsg("Por favor ingresa tu primer apellido.")
      return
    }
    if (!regEmail.trim()) {
      setErrorMsg("Por favor ingresa tu correo electrónico.")
      return
    }
    if (!regPassword) {
      setErrorMsg("Por favor ingresa tu contraseña.")
      return
    }
    if (regPassword.length < 6) {
      setErrorMsg(`Faltan caracteres: la contraseña debe tener al menos 6 caracteres (ingresaste ${regPassword.length}).`)
      setRegPassword("")
      setRegConfirmPassword("")
      return
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg("Las contraseñas no concuerdan. Por favor verifica que sean iguales.")
      setRegPassword("")
      setRegConfirmPassword("")
      return
    }

    const regUsers = getRegisteredUsers()
    const emailKey = regEmail.trim().toLowerCase()
    if (regUsers[emailKey]) {
      setErrorMsg("Ya existe una cuenta registrada con este correo electrónico.")
      return
    }

    const displayName = [
      firstName.trim(),
      secondName.trim(),
      firstLastName.trim(),
      secondLastName.trim(),
    ]
      .filter(Boolean)
      .join(" ")

    const newRecord: RegisteredUserRecord = {
      email: regEmail.trim(),
      password: regPassword,
      firstName: firstName.trim(),
      secondName: secondName.trim(),
      firstLastName: firstLastName.trim(),
      secondLastName: secondLastName.trim(),
      fullName: displayName,
    }

    regUsers[emailKey] = newRecord
    saveRegisteredUsers(regUsers)

    onLoginSuccess({ name: displayName, email: regEmail.trim() })
    handleClose()
  }

  const handleRecoverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setErrorMsg("Por favor ingresa tu correo electrónico.")
      return
    }
    setRecoverySubmitted(true)
    setErrorMsg("")
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <section
        ref={modalRef}
        className="modal auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="panel-heading">
          <h2 id="auth-modal-title">
            {mode === "login" && "Ingresar a tu cuenta"}
            {mode === "register" && "Crear una cuenta"}
            {mode === "recovery" && "Recuperar contraseña"}
          </h2>
          <button
            className="icon-button"
            aria-label="Cerrar ventana emergente"
            onClick={handleClose}
            type="button"
          >
            ×
          </button>
        </div>

        <p className="auth-modal-subtitle">
          {mode === "login" && "Accede a tu cuenta para gestionar tus reservas y explorar Ecuador."}
          {mode === "register" && "Ingresa tus datos personales para registrarte y gestionar tus viajes."}
          {mode === "recovery" && "Ingresa tu correo para recibir las instrucciones de recuperación."}
        </p>

        {errorMsg && (
          <div
            className="inline-alert"
            role="alert"
            style={{ marginBottom: "16px", padding: "12px 14px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span aria-hidden="true">⚠️</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--error)" }}>
                {errorMsg}
              </span>
            </div>
          </div>
        )}

        {mode === "login" && (
          <>
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <Field
                id="login-email"
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={setEmail}
                required
                autoFocus
              />

              <Field
                id="login-password"
                label="Contraseña"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={setPassword}
                required
              />

              <button
                type="button"
                className="auth-forgot-link"
                onClick={() => {
                  setErrorMsg("")
                  setMode("recovery")
                }}
              >
                Recuperar la contraseña
              </button>

              <Button kind="primary" type="submit">
                Ingresar
              </Button>
            </form>

            <hr className="modal-divider-line" />

            <div className="auth-switch-section">
              <p style={{ margin: 0, fontSize: "14px", color: "var(--abyss)" }}>
                ¿No tienes una cuenta?
              </p>
              <Button
                kind="secondary"
                type="button"
                onClick={() => {
                  setErrorMsg("")
                  setMode("register")
                }}
              >
                Crear una cuenta
              </Button>
            </div>
          </>
        )}

        {mode === "register" && (
          <>
            <div
              className="inline-alert"
              style={{ marginBottom: "16px", padding: "12px 14px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span aria-hidden="true">⚠️</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--abyss)" }}>
                  Ingresa tus datos personales para crear tu cuenta y gestionar tus viajes.
                </span>
              </div>
            </div>
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <div className="auth-form-row">
                <Field
                  id="reg-first-name"
                  label="Primer nombre"
                  type="text"
                  placeholder="Ej. Carlos"
                  value={firstName}
                  onChange={setFirstName}
                  required
                  autoFocus
                />
                <Field
                  id="reg-second-name"
                  label="Segundo nombre (opcional)"
                  type="text"
                  placeholder="Ej. Andrés"
                  value={secondName}
                  onChange={setSecondName}
                />
              </div>

              <div className="auth-form-row">
                <Field
                  id="reg-first-lastname"
                  label="Primer apellido"
                  type="text"
                  placeholder="Ej. Mendoza"
                  value={firstLastName}
                  onChange={setFirstLastName}
                  required
                />
                <Field
                  id="reg-second-lastname"
                  label="Segundo apellido (opcional)"
                  type="text"
                  placeholder="Ej. Salazar"
                  value={secondLastName}
                  onChange={setSecondLastName}
                />
              </div>

              <Field
                id="reg-email"
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@correo.com"
                value={regEmail}
                onChange={setRegEmail}
                required
              />

              <Field
                id="reg-password"
                label="Contraseña"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={regPassword}
                onChange={setRegPassword}
                required
              />

              <Field
                id="reg-confirm-password"
                label="Confirmar contraseña"
                type="password"
                placeholder="Repite tu contraseña"
                value={regConfirmPassword}
                onChange={setRegConfirmPassword}
                required
              />

              <Button kind="primary" type="submit">
                Crear cuenta
              </Button>
            </form>

            <hr className="modal-divider-line" />

            <div className="auth-switch-section">
              <p style={{ margin: 0, fontSize: "14px", color: "var(--abyss)" }}>
                ¿Ya tienes una cuenta?
              </p>
              <Button
                kind="secondary"
                type="button"
                onClick={() => {
                  setErrorMsg("")
                  setMode("login")
                }}
              >
                Ingresar a tu cuenta
              </Button>
            </div>
          </>
        )}

        {mode === "recovery" && (
          <>
            {recoverySubmitted ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="auth-alert-success" role="status">
                  <span className="auth-alert-icon" aria-hidden="true">✓</span>
                  <div className="auth-alert-content">
                    Te hemos enviado un enlace de recuperación a <strong>{email}</strong>. Revisa tu bandeja de entrada o spam.
                  </div>
                </div>
              </div>
            ) : (
              <form className="auth-form" onSubmit={handleRecoverySubmit}>
                <Field
                  id="rec-email"
                  label="Correo electrónico registrado"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={setEmail}
                  required
                  autoFocus
                />

                <Button kind="primary" type="submit">
                  Enviar instrucciones
                </Button>
              </form>
            )}

            <hr className="modal-divider-line" />

            <div className="auth-switch-section">
              <Button
                kind="secondary"
                type="button"
                onClick={() => {
                  setErrorMsg("")
                  setMode("login")
                }}
              >
                Volver a ingresar
              </Button>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

function Header({
  page,
  cartCount,
  currentPackageName,
  go,
  onResetSearch,
  onOpenLogin,
  currentUser,
  onLogout,
}: {
  page: Page
  cartCount: number
  currentPackageName?: string
  go: (page: Page) => void
  onResetSearch?: () => void
  onOpenLogin: () => void
  currentUser: { name: string; email: string } | null
  onLogout: () => void
}) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Extract only the first name and capitalize nicely
  const firstName = useMemo(() => {
    if (!currentUser?.name) return "Usuario"
    const raw = currentUser.name.trim().split(/\s+/)[0]
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase()
  }, [currentUser])

  const avatarInitial = useMemo(() => {
    return firstName.charAt(0).toUpperCase()
  }, [firstName])

  // Close user dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!userMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [userMenuOpen])

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <nav className="header-inner" aria-label="Navegación principal">
          <button className="wordmark" onClick={() => go("inicio")}>
            Travel Innovation
          </button>
          <div className="main-links">
            <button
              aria-current={page === "inicio" ? "page" : undefined}
              onClick={() => go("inicio")}
            >
              Inicio
            </button>
            <button
              aria-current={page.startsWith("catalogo") ? "page" : undefined}
              onClick={() => {
                onResetSearch?.()
                go("catalogo")
              }}
            >
              Paquetes
            </button>
            <button
              aria-current={page === "politicas" ? "page" : undefined}
              onClick={() => go("politicas")}
            >
              Políticas
            </button>
            <button
              aria-current={page === "soporte" ? "page" : undefined}
              onClick={() => go("soporte")}
            >
              Soporte
            </button>
          </div>
          <div className="header-actions">
            {currentUser ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button
                  type="button"
                  className="user-menu-trigger"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  aria-label={`Menú de usuario de ${firstName}`}
                >
                  <span>{firstName}</span>
                  <span
                    className={`user-menu-caret ${userMenuOpen ? "open" : ""}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="user-dropdown-menu" role="menu">
                    <div className="user-dropdown-header">
                      <div className="user-dropdown-avatar" aria-hidden="true">
                        {avatarInitial}
                      </div>
                      <div className="user-dropdown-info">
                        <strong>Hola {firstName}</strong>
                        <small title={currentUser.email}>{currentUser.email}</small>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        go("reservas")
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      <span>Mis compras</span>
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        go("tickets")
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      <span>Mis tickets</span>
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        setIsProfileModalOpen(true)
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>Perfil</span>
                    </button>
                    <hr className="dropdown-divider" />
                    <button
                      type="button"
                      className="dropdown-item dropdown-item--danger"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        onLogout()
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      <span>Salir</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button kind="secondary" onClick={onOpenLogin}>
                Ingresar
              </Button>
            )}

            <button
              className="cart-link"
              onClick={() => go("carrito")}
              aria-label={`Carrito de compras${cartCount > 0 ? ` (${cartCount} productos)` : ""}`}
              title="Carrito de compras"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1.5" />
                <circle cx="19" cy="21" r="1.5" />
                <path d="M2.5 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6l1.8-8.2H7" />
              </svg>
              {cartCount > 0 && (
                <span className="badge" aria-label={`${cartCount} paquetes`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
      {/* Espacio reservado bajo la cabecera (conserva el espacio sin mostrar la sección Inicio) */}
      <div className="header-spacer" aria-hidden="true" />

      {/* Modal de Mi Perfil */}
      {isProfileModalOpen && currentUser && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsProfileModalOpen(false)
          }}
        >
          <section
            className="modal auth-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="panel-heading">
              <h2 id="profile-modal-title">Mi perfil</h2>
              <button
                className="icon-button"
                aria-label="Cerrar modal de perfil"
                onClick={() => setIsProfileModalOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                margin: "18px 0 14px",
              }}
            >
              <div
                className="user-dropdown-avatar"
                style={{ width: "52px", height: "52px", fontSize: "22px" }}
              >
                {avatarInitial}
              </div>
              <div>
                <strong style={{ fontSize: "18px", display: "block", color: "var(--abyss)" }}>
                  {currentUser.name}
                </strong>
                <span style={{ fontSize: "14px", color: "#5a6e7f" }}>
                  {currentUser.email}
                </span>
              </div>
            </div>
            <hr className="modal-divider-line" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                margin: "14px 0 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                  borderBottom: "1px solid var(--sand)",
                  paddingBottom: "8px",
                }}
              >
                <span style={{ color: "var(--pacific)", fontWeight: 600 }}>Tipo de cuenta</span>
                <strong>Viajero / Turista</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                  borderBottom: "1px solid var(--sand)",
                  paddingBottom: "8px",
                }}
              >
                <span style={{ color: "var(--pacific)", fontWeight: 600 }}>Estado</span>
                <span style={{ color: "var(--success)", fontWeight: 700 }}>✓ Activo</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Button
                kind="primary"
                style={{ flex: 1, minWidth: "110px" }}
                onClick={() => {
                  setIsProfileModalOpen(false)
                  go("reservas")
                }}
              >
                Mis compras
              </Button>
              <Button
                kind="secondary"
                style={{ flex: 1, minWidth: "110px" }}
                onClick={() => {
                  setIsProfileModalOpen(false)
                  go("tickets")
                }}
              >
                Mis tickets
              </Button>
              <Button
                kind="secondary"
                style={{ minWidth: "80px" }}
                onClick={() => setIsProfileModalOpen(false)}
              >
                Cerrar
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

function Footer({ go }: { go: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div>
        <strong>Travel Innovation</strong>
        <p>Viajes nacionales pensados para descubrir Ecuador.</p>
      </div>
      <div>
        <strong>Contacto</strong>
        <p>Quito, Ecuador · 02 2456456</p>
        <p>travelinnovation.tamc@gmail.com</p>
      </div>
      <div className="footer-links">
        <strong>Ayuda</strong>
        <button onClick={() => go("politicas")}>Políticas de reserva</button>
        <button onClick={() => go("soporte")}>Soporte por ticket</button>
      </div>
    </footer>
  )
}

function PackageCard({
  item,
  go,
  onSelect,
}: {
  item: PackageItem
  go: (page: Page) => void
  onSelect?: (item: PackageItem) => void
}) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(item)
    } else {
      go("detalle")
    }
  }
  return (
    <article className="package-card">
      <div className="package-card__image-container">
        {item.image ? (
          <img
            src={item.image}
            alt={`Fotografía de ${item.name}`}
            className="package-card__img"
            loading="lazy"
          />
        ) : (
          <Placeholder label={`Imagen de ${item.name}`} />
        )}
      </div>
      <div className="package-card__body">
        <h3 style={{ fontWeight: 700, margin: "0 0 6px" }}>
          <strong>{item.name}</strong>
        </h3>
        <p style={{ fontSize: "14px", color: "var(--pacific)", fontWeight: 600, margin: "0 0 6px" }}>
          📍 {item.city} ({item.province})
        </p>
        <p style={{ fontSize: "13px", color: "var(--abyss)", background: "var(--sand)", padding: "4px 8px", borderRadius: "6px", border: "1px solid var(--pacific)", margin: "4px 0 10px", display: "inline-flex", alignItems: "center", gap: "6px", width: "fit-content" }}>
          <span aria-hidden="true">📅</span> <strong>{item.datesText}</strong>
        </p>
        <p style={{ margin: "0 0 6px" }}>{item.days}</p>
        <p style={{ margin: "0 0 14px" }}>
          <strong>Desde ${item.price}</strong> por persona
        </p>
        <Button kind="secondary" onClick={handleClick}>
          Ver paquete
        </Button>
      </div>
    </article>
  )
}

function Home({
  go,
  onSearch,
  onViewPackage,
}: {
  go: (page: Page) => void
  onSearch: (filters: SearchFilters) => void
  onViewPackage?: (item: PackageItem) => void
}) {
  const [selectedProvince, setSelectedProvince] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [dateRange, setDateRange] = useState<DateRange | null>(null)

  const availableProvinces = useMemo(() => {
    return Array.from(new Set(packages.map((p) => p.province))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [])

  const availableCities = useMemo(() => {
    if (!selectedProvince) {
      return Array.from(new Set(packages.map((p) => p.city))).sort((a, b) =>
        a.localeCompare(b, "es")
      )
    }
    return Array.from(
      new Set(
        packages
          .filter((p) => p.province === selectedProvince)
          .map((p) => p.city),
      ),
    ).sort((a, b) => a.localeCompare(b, "es"))
  }, [selectedProvince])

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province)
    if (province) {
      const citiesInProv = packages
        .filter((p) => p.province === province)
        .map((p) => p.city)
      if (selectedCity && !citiesInProv.includes(selectedCity)) {
        setSelectedCity("")
      }
    }
  }

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
  }

  const handleSearchSubmit = () => {
    onSearch({
      province: selectedProvince,
      city: selectedCity,
      dateRange,
    })
  }

  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow light">Paquetes nacionales</span>
          <h1>Descubre el Ecuador a tu ritmo</h1>
          <p>Elige una provincia y encuentra una salida para tu próximo viaje.</p>
        </div>
        <div className="search-panel" role="search">
          <SelectField
            label="Provincia"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value="">Todas las provincias</option>
            {availableProvinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </SelectField>

          <SelectField
            label="Ciudad"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">
              {selectedProvince
                ? `Todas las ciudades de ${selectedProvince}`
                : "Todas las ciudades"}
            </option>
            {availableCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </SelectField>

          <DateRangePicker
            label="Fecha de viaje"
            value={dateRange}
            onChange={setDateRange}
          />

          <Button kind="primary" onClick={handleSearchSubmit}>
            Buscar paquetes
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Explora</span>
            <h2>Viaja por región</h2>
          </div>
        </div>
        <div className="region-grid">
          {(
            [
              ["Costa", "Costa"],
              ["Sierra", "Sierra"],
              ["Amazonía", "Amazonía"],
              ["Galápagos", "Galápagos"],
            ] as const
          ).map(([regionName, regionValue], index) => (
            <button
              className="region-card"
              key={regionName}
              onClick={() => {
                onSearch({
                  region: regionValue,
                  province: "",
                  city: "",
                  dateRange: null,
                })
              }}
            >
              <span className="region-icon" aria-hidden="true">
                {index + 1}
              </span>
              <strong>{regionName}</strong>
              <span>Ver paquetes</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selección de la semana</span>
            <h2>Paquetes destacados</h2>
          </div>
          <Button
            kind="quiet"
            onClick={() =>
              onSearch({ region: "", province: "", city: "", dateRange: null })
            }
          >
            Ver todos los paquetes
          </Button>
        </div>
        <div className="package-grid">
          {packages.slice(0, 4).map((item) => (
            <PackageCard
              key={item.id}
              item={item}
              go={go}
              onSelect={onViewPackage}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export interface CatalogFilterState {
  region: string
  province: string
  city: string
  dateRange: DateRange | null
  dateActive: boolean
  minPrice: number
  maxPrice: number
  sortBy: string
  currentPage: number
}

export const DEFAULT_CATALOG_FILTERS: CatalogFilterState = {
  region: "",
  province: "",
  city: "",
  dateRange: null,
  dateActive: false,
  minPrice: 100,
  maxPrice: 900,
  sortBy: "Alfabético: A a Z (Ascendente)",
  currentPage: 1,
}

function Catalog({
  go,
  filters,
  onUpdateFilters,
  onResetFilters,
  onViewPackage,
}: {
  go: (page: Page) => void
  filters: CatalogFilterState
  onUpdateFilters: (
    updater:
      | Partial<CatalogFilterState>
      | ((prev: CatalogFilterState) => CatalogFilterState),
  ) => void
  onResetFilters: () => void
  onViewPackage?: (item: PackageItem) => void
}) {
  const {
    region: selectedRegion,
    province: selectedProvince,
    city: selectedCity,
    dateRange,
    dateActive,
    minPrice,
    maxPrice,
    sortBy,
    currentPage,
  } = filters

  const update = (partial: Partial<CatalogFilterState>) => {
    onUpdateFilters((prev) => ({
      ...prev,
      ...partial,
    }))
  }

  const ITEMS_PER_PAGE = 6

  const availableProvinces = useMemo(() => {
    let list = packages
    if (selectedRegion) {
      list = list.filter((p) => p.region === selectedRegion)
    }
    return Array.from(new Set(list.map((p) => p.province))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [selectedRegion])

  const availableCities = useMemo(() => {
    let list = packages
    if (selectedRegion) {
      list = list.filter((p) => p.region === selectedRegion)
    }
    if (selectedProvince) {
      list = list.filter((p) => p.province === selectedProvince)
    }
    return Array.from(new Set(list.map((p) => p.city))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [selectedRegion, selectedProvince])

  const matchingPackages = useMemo(() => {
    return packages.filter((item) => {
      if (selectedRegion && item.region !== selectedRegion) {
        return false
      }
      if (selectedProvince && item.province !== selectedProvince) {
        return false
      }
      if (selectedCity && item.city !== selectedCity) {
        return false
      }
      if (item.price < minPrice || item.price > maxPrice) {
        return false
      }
      if (dateActive && dateRange) {
        if (item.dates.month !== dateRange.month) {
          return false
        }
        const hasOverlap = !(
          dateRange.endDay < item.dates.startDay ||
          dateRange.startDay > item.dates.endDay
        )
        if (!hasOverlap) {
          return false
        }
      }
      return true
    })
  }, [
    selectedRegion,
    selectedProvince,
    selectedCity,
    minPrice,
    maxPrice,
    dateActive,
    dateRange,
  ])

  const sortedPackages = useMemo(() => {
    const list = [...matchingPackages]
    if (
      sortBy === "Alfabético: A a Z (Ascendente)" ||
      sortBy === "Nombre: A a Z" ||
      sortBy === "Alfabético ascendente"
    ) {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"))
    } else if (
      sortBy === "Alfabético: Z a A (Descendente)" ||
      sortBy === "Nombre: Z a A" ||
      sortBy === "Alfabético descendente"
    ) {
      list.sort((a, b) => b.name.localeCompare(a.name, "es"))
    } else if (sortBy === "Precio: menor a mayor") {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === "Precio: mayor a menor") {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === "Duración") {
      list.sort((a, b) => {
        const daysA = parseInt(a.days) || 0
        const daysB = parseInt(b.days) || 0
        return daysB - daysA
      })
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"))
    }
    return list
  }, [matchingPackages, sortBy])

  const totalPages = Math.max(1, Math.ceil(sortedPackages.length / ITEMS_PER_PAGE))
  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedPackages.slice(start, start + ITEMS_PER_PAGE)
  }, [sortedPackages, currentPage])

  const clearFilters = () => {
    onResetFilters()
  }

  const catalogTitle = useMemo(() => {
    if (selectedProvince) {
      return `Paquetes en ${selectedProvince}`
    }
    if (selectedRegion) {
      return `Paquetes en ${selectedRegion === "Sierra" ? "la Sierra" : selectedRegion === "Amazonía" ? "la Amazonía" : selectedRegion === "Costa" ? "la Costa" : selectedRegion}`
    }
    return "Paquetes turísticos"
  }, [selectedProvince, selectedRegion])

  return (
    <>
      <PageTitle
        title={catalogTitle}
        subtitle="Encuentra una salida que se ajuste a tu tiempo y presupuesto."
      />
      <div className="catalog-layout section">
        <aside className="filters">
          <div className="filter-heading">
            <h2>Filtros</h2>
          </div>

          <div className="filter-section">
            <span className="filter-section-title">Destino</span>
            <SelectField
              label="Provincia"
              value={selectedProvince}
              onChange={(prov) => {
                const citiesInProv = prov
                  ? packages.filter((p) => p.province === prov).map((p) => p.city)
                  : []
                const newCity =
                  selectedCity && !citiesInProv.includes(selectedCity)
                    ? ""
                    : selectedCity
                update({
                  province: prov,
                  city: newCity,
                  currentPage: 1,
                })
              }}
            >
              <option value="">
                {selectedRegion
                  ? `Todas las provincias de ${selectedRegion === "Sierra" ? "la Sierra" : selectedRegion === "Amazonía" ? "la Amazonía" : selectedRegion === "Costa" ? "la Costa" : selectedRegion}`
                  : "Todas las provincias"}
              </option>
              {availableProvinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Ciudad"
              value={selectedCity}
              onChange={(city) => update({ city, currentPage: 1 })}
            >
              <option value="">
                {selectedProvince
                  ? `Todas las ciudades de ${selectedProvince}`
                  : "Todas las ciudades"}
              </option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="filter-section date-filter">
            <span className="filter-section-title">Fechas del viaje</span>
            <DateRangePicker
              label="Intervalo de fechas"
              value={dateRange}
              onChange={(range) => {
                update({
                  dateRange: range,
                  dateActive: Boolean(range),
                  currentPage: 1,
                })
              }}
            />
          </div>

          <div className="filter-section">
            <span className="filter-section-title">Rango de precio</span>
            <div className="price-values">
              <span>Desde <strong>${minPrice}</strong></span>
              <span>Hasta <strong>${maxPrice}</strong></span>
            </div>
            <div className="range-slider">
              <div className="range-track" />
              <input
                aria-label="Precio mínimo"
                max="850"
                min="100"
                step="25"
                type="range"
                value={minPrice}
                onChange={(event) =>
                  update({
                    minPrice: Math.min(Number(event.target.value), maxPrice - 50),
                    currentPage: 1,
                  })
                }
              />
              <input
                aria-label="Precio máximo"
                max="900"
                min="150"
                step="25"
                type="range"
                value={maxPrice}
                onChange={(event) =>
                  update({
                    maxPrice: Math.max(Number(event.target.value), minPrice + 50),
                    currentPage: 1,
                  })
                }
              />
            </div>
            <div className="range-limits"><span>$100</span><span>$900</span></div>
          </div>

          <button
            type="button"
            className="button--clear-filters"
            onClick={clearFilters}
          >
            Limpiar filtros
          </button>
        </aside>

        <div className="catalog-results">
          <div className="results-toolbar">
            <div>
              <strong>
                {matchingPackages.length === 1
                  ? "1 paquete encontrado"
                  : `${matchingPackages.length} paquetes encontrados`}
              </strong>
              <div
                style={{
                  display: "inline-flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginLeft: "10px",
                }}
              >
                {selectedRegion && (
                  <span className="active-filter">
                    Región: {selectedRegion}
                    <button
                      aria-label="Quitar filtro de región"
                      onClick={() => update({ region: "", currentPage: 1 })}
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedProvince && (
                  <span className="active-filter">
                    Provincia: {selectedProvince}
                    <button
                      aria-label="Quitar filtro de provincia"
                      onClick={() =>
                        update({ province: "", city: "", currentPage: 1 })
                      }
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedCity && (
                  <span className="active-filter">
                    Ciudad: {selectedCity}
                    <button
                      aria-label="Quitar filtro de ciudad"
                      onClick={() => update({ city: "", currentPage: 1 })}
                    >
                      ×
                    </button>
                  </span>
                )}
                {dateActive && dateRange && (
                  <span className="active-filter">
                    ✓ {dateRange.startDay}–{dateRange.endDay} {dateRange.month}{" "}
                    {dateRange.year}
                    <button
                      aria-label="Quitar filtro de fechas"
                      onClick={() =>
                        update({
                          dateActive: false,
                          dateRange: null,
                          currentPage: 1,
                        })
                      }
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
            <SelectField
              label="Ordenar por"
              value={sortBy}
              onChange={(sb) => update({ sortBy: sb, currentPage: 1 })}
            >
              {[
                "Recomendados",
                "Precio: menor a mayor",
                "Precio: mayor a menor",
                "Duración",
                "Alfabético: Z a A (Descendente)",
                "Alfabético: A a Z (Ascendente)",
              ]
                .sort((a, b) => a.localeCompare(b, "es"))
                .map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
            </SelectField>
          </div>

          {matchingPackages.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">
                !
              </span>
              <h2>No encontramos paquetes</h2>
              <p>
                No encontramos paquetes con los filtros seleccionados
                {selectedProvince ? ` en ${selectedProvince}` : ""}{selectedCity ? ` (${selectedCity})` : ""}.
                Prueba quitando uno o más filtros para ver otras opciones.
              </p>
              <Button kind="primary" onClick={clearFilters}>
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="package-grid package-grid--catalog">
                {paginatedPackages.map((item, index) => (
                  <PackageCard
                    key={`${item.id}-${index}`}
                    item={item}
                    go={go}
                    onSelect={onViewPackage}
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <nav className="pagination" aria-label="Paginación del catálogo">
                  <button
                    className="pagination-button"
                    disabled={currentPage <= 1}
                    onClick={() => {
                      update({ currentPage: Math.max(1, currentPage - 1) })
                      window.scrollTo({ top: 200, behavior: "smooth" })
                    }}
                  >
                    Anterior
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      className={`pagination-button ${currentPage === pageNum ? "is-active" : ""}`}
                      aria-current={currentPage === pageNum ? "page" : undefined}
                      onClick={() => {
                        update({ currentPage: pageNum })
                        window.scrollTo({ top: 200, behavior: "smooth" })
                      }}
                    >
                      {pageNum}
                    </button>
                  ))}
                  <button
                    className="pagination-button"
                    disabled={currentPage >= totalPages}
                    onClick={() => {
                      update({ currentPage: Math.min(totalPages, currentPage + 1) })
                      window.scrollTo({ top: 200, behavior: "smooth" })
                    }}
                  >
                    Siguiente
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="page-title">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  )
}

function Detail({
  pkg = packages[4],
  go,
  onBack,
  addToCart,
}: {
  pkg?: PackageItem
  go: (page: Page) => void
  onBack?: () => void
  addToCart: (item: {
    pkg: PackageItem
    date: string
    people: number
    total: number
  }) => void
}) {
  const [people, setPeople] = useState(1)
  const [toast, setToast] = useState(false)
  const [selectedDate, setSelectedDate] = useState(
    pkg.availableDates && pkg.availableDates.length > 0
      ? pkg.availableDates[0]
      : pkg.datesText,
  )

  useEffect(() => {
    setPeople(1)
    setSelectedDate(
      pkg.availableDates && pkg.availableDates.length > 0
        ? pkg.availableDates[0]
        : pkg.datesText,
    )
  }, [pkg])

  const allImages = useMemo(
    () => [pkg.image, ...(pkg.secondaryImages || [])],
    [pkg]
  )
  const [activeImage, setActiveImage] = useState(pkg.image)

  useEffect(() => {
    setActiveImage(pkg.image)
  }, [pkg])

  const total = people * pkg.price
  const add = () => {
    addToCart({
      pkg,
      date: selectedDate,
      people,
      total,
    })
    setToast(true)
  }
  return (
    <>
      <div className="section detail-back-nav">
        <button
          type="button"
          className="detail-back-button"
          onClick={onBack ? onBack : () => go("catalogo")}
          aria-label="Volver a la ventana previa"
        >
          <span aria-hidden="true">←</span> Volver
        </button>
      </div>
      <div className="section detail-layout">
        <section className="gallery" aria-label={`Galería de ${pkg.name}`}>
          <div className="gallery__main">
            <img
              src={activeImage || pkg.image}
              alt={`Fotografía principal de ${pkg.name}`}
              className="gallery__main-img"
            />
          </div>
          <div className="gallery__thumbs">
            {allImages.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                className={`gallery__thumb-btn ${
                  activeImage === imgUrl ? "active" : ""
                }`}
                onClick={() => setActiveImage(imgUrl)}
                aria-label={`Ver imagen ${idx + 1} de ${pkg.name}`}
              >
                <img
                  src={imgUrl}
                  alt={`Fotografía ${idx + 1} de ${pkg.name}`}
                  className="gallery__thumb-img"
                />
              </button>
            ))}
          </div>
        </section>
        <section className="booking-panel">
          <span className="eyebrow">{pkg.region}</span>
          <h1>{pkg.name}</h1>
          <p>{pkg.days} · 📍 {pkg.city} ({pkg.province})</p>
          <p className="price">
            <strong>${pkg.price}</strong> por persona
          </p>

          {pkg.availableDates && pkg.availableDates.length > 1 ? (
            <SelectField
              label="Intervalos de fechas disponibles"
              value={selectedDate}
              onChange={setSelectedDate}
              help="Paquete con salidas confirmadas: elige el intervalo deseado."
            >
              {[...pkg.availableDates]
                .sort((a, b) => a.localeCompare(b, "es"))
                .map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
            </SelectField>
          ) : (
            <div className="field">
              <span className="field__label">Fecha de salida</span>
              <div className="package-specific-date">
                <span className="date-icon" aria-hidden="true">📅</span>
                <div className="date-info">
                  <strong>{pkg.datesText}</strong>
                  <span className="date-badge">Fecha específica confirmada</span>
                </div>
              </div>
            </div>
          )}

          <div className="field">
            <span className="field__label">Personas</span>
            <div className="counter">
              <button
                aria-label="Quitar una persona"
                onClick={() => setPeople(Math.max(1, people - 1))}
              >
                −
              </button>
              <strong aria-live="polite">{people}</strong>
              <button
                aria-label="Agregar una persona"
                onClick={() => setPeople(Math.min(20, people + 1))}
                disabled={people >= 20}
              >
                +
              </button>
            </div>
            {people >= 20 && (
              <div
                className="inline-alert"
                style={{ marginTop: "12px", padding: "12px 14px" }}
              >
                <strong>⚠️ Límite de 20 personas por paquete</strong>
                <span style={{ fontSize: "13.5px", lineHeight: 1.45 }}>
                  Este paquete está limitado a un máximo de 20 personas por reserva web. Si necesitas un paquete para un grupo mayor o evento corporativo, por favor contáctanos al teléfono <strong>02 2456456</strong> o al correo <strong>travelinnovation.tamc@gmail.com</strong>.
                </span>
              </div>
            )}
          </div>
          <div className="total-row">
            <span>Total estimado</span>
            <strong>${total}</strong>
          </div>
          <Button kind="primary" onClick={add}>
            Agregar al carrito
          </Button>
        </section>
      </div>
      <div className="section detail-sections">
        <details open>
          <summary>
            <span>Itinerario por día</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <h3>Día 1 · Llegada y bienvenida</h3>
            <p>
              Encuentro, traslado y primer recorrido guiado en {pkg.city}.
            </p>
            <h3>Día 2 · Actividades destacadas</h3>
            <p>Recorrido principal y tiempo libre para explorar.</p>
            <h3>Día 3 · Retorno</h3>
            <p>Desayuno y retorno al punto de origen.</p>
          </div>
        </details>
        <details>
          <summary>
            <span>Incluye / No incluye</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body two-col">
            <div>
              <h3>Incluye</h3>
              <p>✓ Transporte, alojamiento, desayunos y guía.</p>
            </div>
            <div>
              <h3>No incluye</h3>
              <p>✕ Almuerzos, cenas y gastos personales.</p>
            </div>
          </div>
        </details>
        <details>
          <summary>
            <span>Punto de encuentro y hora</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <p>
              <strong>Terminal turística, Quito · 06:00.</strong> Hay una
              tolerancia exacta de 15 minutos.
            </p>
          </div>
        </details>
        <details>
          <summary>
            <span>Documentos requeridos</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <p>
              Cédula física y original del titular. Para menores, documento de
              identidad y autorización cuando corresponda.
            </p>
          </div>
        </details>
        <details>
          <summary>
            <span>Condiciones resumidas</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <p>La salida requiere un mínimo de 15 personas.</p>
            <button className="text-link" onClick={() => go("politicas")}>
              Ver política completa de cancelación
            </button>
          </div>
        </details>
      </div>
      {toast && (
        <div className="toast" role="status">
          <span>✓ {pkg.name} agregado al carrito</span>
          <button onClick={() => go("carrito")}>Ver carrito</button>
          <button onClick={() => setToast(false)}>Cerrar</button>
        </div>
      )}
    </>
  )
}

const steps = ["Carrito", "Información Personal", "Viajeros", "Pago", "Confirmación"]
function Stepper({ current }: { current: number }) {
  return (
    <div className="stepper-wrapper">
      <nav className="stepper" aria-label="Progreso de la reserva">
        {steps.map((step, index) => {
          const isDone = index < current
          const isCurrent = index === current
          return (
            <div
              className={`stepper-node ${isCurrent ? "is-current" : ""} ${
                isDone ? "is-done" : ""
              }`}
              aria-current={isCurrent ? "step" : undefined}
              key={step}
            >
              <span className="stepper-badge">
                {isDone ? (
                  <span className="stepper-check" aria-hidden="true">✓</span>
                ) : (
                  index + 1
                )}
              </span>
              <strong className="stepper-label">{step}</strong>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

function AuthCheckoutModal({
  isOpen,
  items,
  grandTotal,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean
  items: CartItem[]
  grandTotal: number
  onClose: () => void
  onLoginSuccess: (user: { name: string; email: string }) => void
}) {
  const modalRef = useRef<HTMLElement>(null)
  const [mode, setMode] = useState<"login" | "register" | "recovery">("login")

  // Login credentials
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Registration fields
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [firstLastName, setFirstLastName] = useState("")
  const [secondLastName, setSecondLastName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [regConfirmPassword, setRegConfirmPassword] = useState("")

  // Error & recovery feedback
  const [errorMsg, setErrorMsg] = useState("")
  const [recoverySubmitted, setRecoverySubmitted] = useState(false)

  const handleClose = () => {
    setMode("login")
    setErrorMsg("")
    setRecoverySubmitted(false)
    onClose()
  }

  useEffect(() => {
    if (isOpen) {
      setMode("login")
      setErrorMsg("")
      setRecoverySubmitted(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setErrorMsg("")
    }
  }, [mode, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target === e.currentTarget ||
      (modalRef.current && !modalRef.current.contains(e.target as Node))
    ) {
      handleClose()
    }
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Por favor completa tu correo y contraseña.")
      return
    }
    const regUsers = getRegisteredUsers()
    const emailKey = email.trim().toLowerCase()
    const record = regUsers[emailKey]

    if (!record || record.password !== password) {
      setErrorMsg("Correo o contraseña incorrectos.")
      return
    }

    onLoginSuccess({ name: record.fullName, email: record.email })
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim()) {
      setErrorMsg("Por favor ingresa tu primer nombre.")
      return
    }
    if (!firstLastName.trim()) {
      setErrorMsg("Por favor ingresa tu primer apellido.")
      return
    }
    if (!regEmail.trim()) {
      setErrorMsg("Por favor ingresa tu correo electrónico.")
      return
    }
    if (!regPassword) {
      setErrorMsg("Por favor ingresa tu contraseña.")
      return
    }
    if (regPassword.length < 6) {
      setErrorMsg("La contraseña debe tener al menos 6 caracteres.")
      return
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg("Las contraseñas no concuerdan. Por favor verifica que sean iguales.")
      return
    }

    const regUsers = getRegisteredUsers()
    const emailKey = regEmail.trim().toLowerCase()
    if (regUsers[emailKey]) {
      setErrorMsg("Ya existe una cuenta registrada con este correo electrónico.")
      return
    }

    const displayName = [
      firstName.trim(),
      secondName.trim(),
      firstLastName.trim(),
      secondLastName.trim(),
    ]
      .filter(Boolean)
      .join(" ")

    const newRecord: RegisteredUserRecord = {
      email: regEmail.trim(),
      password: regPassword,
      firstName: firstName.trim(),
      secondName: secondName.trim(),
      firstLastName: firstLastName.trim(),
      secondLastName: secondLastName.trim(),
      fullName: displayName,
    }

    regUsers[emailKey] = newRecord
    saveRegisteredUsers(regUsers)

    onLoginSuccess({ name: displayName, email: regEmail.trim() })
  }

  const handleRecoverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setErrorMsg("Por favor ingresa tu correo electrónico.")
      return
    }
    setRecoverySubmitted(true)
    setErrorMsg("")
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <section
        ref={modalRef}
        className="modal auth-checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-checkout-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-checkout-grid">
          {/* Columna izquierda: Resumen de la compra */}
          <div className="auth-checkout-summary-col">
            <div className="panel-heading" style={{ marginBottom: "4px" }}>
              <h2 id="auth-checkout-modal-title" style={{ fontSize: "20px", margin: 0, color: "var(--pacific)" }}>
                Resumen de compra
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "260px",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "var(--sand)",
                    border: "1px solid var(--pacific)",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "0" }}>
                    {item.pkg.region}
                  </span>
                  <strong style={{ fontSize: "15px", color: "var(--abyss)" }}>
                    {item.pkg.name}
                  </strong>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      color: "var(--abyss)",
                      opacity: 0.85,
                      marginTop: "2px",
                    }}
                  >
                    <span>📅 {item.date}</span>
                    <span>👥 {item.people} {item.people === 1 ? "viajero" : "viajeros"}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      fontWeight: 700,
                      marginTop: "6px",
                      borderTop: "1px dashed rgba(14, 116, 144, 0.25)",
                      paddingTop: "4px",
                    }}
                  >
                    <span>Subtotal</span>
                    <span style={{ color: "var(--pacific)" }}>${item.total}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--pacific)",
                paddingTop: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span>Subtotal</span>
                <strong>${Math.round(grandTotal / 1.15)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span>Impuestos (IVA)</span>
                <strong>${grandTotal - Math.round(grandTotal / 1.15)}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "2px solid var(--pacific)",
                  paddingTop: "12px",
                  marginTop: "4px",
                }}
              >
                <strong style={{ fontSize: "18px", color: "var(--pacific)" }}>Total</strong>
                <strong style={{ fontSize: "22px", color: "var(--pacific)" }}>${grandTotal}</strong>
              </div>
            </div>
          </div>

          {/* Columna derecha: Aviso de cuenta requerida e Inicio de sesión */}
          <div className="auth-checkout-form-col">
            <div
              className="inline-alert"
              style={{
                margin: "0 0 16px 0",
                padding: "14px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span aria-hidden="true" style={{ fontSize: "16px" }}>
                  ⚠️
                </span>
                <span style={{ fontSize: "14px", color: "var(--abyss)", fontWeight: 600, lineHeight: 1.4 }}>
                  {mode === "register"
                    ? "Para continuar con tu compra, crea tu cuenta o ingresa si ya tienes una."
                    : "Para continuar necesitas ingresar en una cuenta."}
                </span>
              </div>
            </div>

            <div className="panel-heading" style={{ marginBottom: "6px" }}>
              <h2 style={{ fontSize: "22px", margin: 0, color: "var(--pacific)" }}>
                {mode === "login" && "Ingresar a tu cuenta"}
                {mode === "register" && "Crear una cuenta"}
                {mode === "recovery" && "Recuperar contraseña"}
              </h2>
              <button
                className="icon-button"
                aria-label="Cerrar ventana emergente"
                onClick={handleClose}
                type="button"
                style={{ fontSize: "24px", lineHeight: 1 }}
              >
                ×
              </button>
            </div>

            <p className="auth-modal-subtitle" style={{ margin: "0 0 16px 0" }}>
              {mode === "login" && "Accede a tu cuenta para gestionar tus reservas y explorar Ecuador."}
              {mode === "register" && "Ingresa tus datos personales para registrarte y continuar con tu reserva."}
              {mode === "recovery" && "Ingresa tu correo para recibir las instrucciones de recuperación."}
            </p>

            {errorMsg && (
              <div
                className="inline-alert"
                role="alert"
                style={{ margin: "0 0 16px 0", padding: "12px 14px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span aria-hidden="true">⚠️</span>
                  <span style={{ fontSize: "14px", color: "var(--error)", fontWeight: 600 }}>
                    {errorMsg}
                  </span>
                </div>
              </div>
            )}

            {mode === "login" && (
              <>
                <form className="auth-form" onSubmit={handleLoginSubmit}>
                  <Field
                    id="checkout-login-email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={setEmail}
                    required
                    autoFocus
                  />

                  <Field
                    id="checkout-login-password"
                    label="Contraseña"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={setPassword}
                    required
                  />

                  <button
                    type="button"
                    className="auth-forgot-link"
                    onClick={() => {
                      setErrorMsg("")
                      setMode("recovery")
                    }}
                  >
                    Recuperar la contraseña
                  </button>

                  <Button kind="primary" type="submit" style={{ width: "100%", marginTop: "4px" }}>
                    Ingresar
                  </Button>
                </form>

                <hr className="modal-divider-line" />

                <div className="auth-switch-section">
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--abyss)" }}>
                    ¿No tienes una cuenta?
                  </p>
                  <Button
                    kind="secondary"
                    type="button"
                    onClick={() => {
                      setErrorMsg("")
                      setMode("register")
                    }}
                    style={{ width: "100%", marginTop: "8px" }}
                  >
                    Crear una cuenta
                  </Button>
                </div>
              </>
            )}

            {mode === "register" && (
              <>
                <form className="auth-form" onSubmit={handleRegisterSubmit}>
                  <div className="auth-form-row">
                    <Field
                      id="checkout-reg-firstname"
                      label="Primer nombre"
                      placeholder="Ej. Juan"
                      value={firstName}
                      onChange={setFirstName}
                      required
                      autoFocus
                    />
                    <Field
                      id="checkout-reg-secondname"
                      label="Segundo nombre (opcional)"
                      placeholder="Ej. Carlos"
                      value={secondName}
                      onChange={setSecondName}
                    />
                  </div>

                  <div className="auth-form-row">
                    <Field
                      id="checkout-reg-firstlastname"
                      label="Primer apellido"
                      placeholder="Ej. Pérez"
                      value={firstLastName}
                      onChange={setFirstLastName}
                      required
                    />
                    <Field
                      id="checkout-reg-secondlastname"
                      label="Segundo apellido (opcional)"
                      placeholder="Ej. Gómez"
                      value={secondLastName}
                      onChange={setSecondLastName}
                    />
                  </div>

                  <Field
                    id="checkout-reg-email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="nombre@correo.com"
                    value={regEmail}
                    onChange={setRegEmail}
                    required
                  />

                  <Field
                    id="checkout-reg-password"
                    label="Contraseña"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={regPassword}
                    onChange={setRegPassword}
                    required
                  />

                  <Field
                    id="checkout-reg-confirm-password"
                    label="Confirmar contraseña"
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={regConfirmPassword}
                    onChange={setRegConfirmPassword}
                    required
                  />

                  <Button kind="primary" type="submit" style={{ width: "100%", marginTop: "4px" }}>
                    Crear cuenta y continuar
                  </Button>
                </form>

                <hr className="modal-divider-line" />

                <div className="auth-switch-section">
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--abyss)" }}>
                    ¿Ya tienes una cuenta?
                  </p>
                  <Button
                    kind="secondary"
                    type="button"
                    onClick={() => {
                      setErrorMsg("")
                      setMode("login")
                    }}
                    style={{ width: "100%", marginTop: "8px" }}
                  >
                    Ingresar a mi cuenta
                  </Button>
                </div>
              </>
            )}

            {mode === "recovery" && (
              <>
                {recoverySubmitted ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div className="auth-alert-success" role="status">
                      <span className="auth-alert-icon" aria-hidden="true">✓</span>
                      <p className="auth-alert-content">
                        Hemos enviado un correo a <strong>{email}</strong> con las instrucciones para restablecer tu contraseña.
                      </p>
                    </div>
                    <Button
                      kind="primary"
                      type="button"
                      onClick={() => {
                        setRecoverySubmitted(false)
                        setMode("login")
                      }}
                      style={{ width: "100%" }}
                    >
                      Volver a iniciar sesión
                    </Button>
                  </div>
                ) : (
                  <form className="auth-form" onSubmit={handleRecoverySubmit}>
                    <Field
                      id="checkout-recovery-email"
                      label="Correo electrónico"
                      type="email"
                      placeholder="nombre@correo.com"
                      value={email}
                      onChange={setEmail}
                      required
                      autoFocus
                    />
                    <Button kind="primary" type="submit" style={{ width: "100%", marginTop: "4px" }}>
                      Enviar enlace de recuperación
                    </Button>
                    <Button
                      kind="secondary"
                      type="button"
                      onClick={() => setMode("login")}
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      Volver a ingresar
                    </Button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Cart({
  go,
  items,
  onRemoveItem,
  onUpdatePeople,
  onViewPackage,
  currentUser,
  onLoginSuccess,
}: {
  go: (page: Page) => void
  items: CartItem[]
  onRemoveItem: (id: string) => void
  onUpdatePeople?: (id: string, newPeople: number) => void
  onViewPackage?: (pkg: PackageItem) => void
  currentUser: { name: string; email: string } | null
  onLoginSuccess?: (user: { name: string; email: string }) => void
}) {
  const [removedAlert, setRemovedAlert] = useState<string | null>(null)
  const [isAuthCheckoutModalOpen, setIsAuthCheckoutModalOpen] = useState(false)
  const empty = items.length === 0
  const grandTotal = items.reduce((acc, curr) => acc + curr.total, 0)

  const handleRemove = (item: CartItem) => {
    setRemovedAlert(`${item.pkg.name} fue quitado del carrito.`)
    onRemoveItem(item.id)
  }

  const handleContinueReservation = () => {
    if (!currentUser) {
      setIsAuthCheckoutModalOpen(true)
      return
    }
    go("identificacion")
  }

  return (
    <>
      <PageTitle
        title="Tu carrito"
        subtitle="Revisa tus salidas seleccionadas antes de continuar."
      />
      <div className="section">
        <Stepper current={0} />
      </div>
      {empty ? (
        <div className="section empty-state">
          <span className="empty-icon" aria-hidden="true">
            0
          </span>
          <h2>Tu carrito está vacío</h2>
          <p>Explora nuestros paquetes y elige tu próxima salida.</p>
          <Button kind="primary" onClick={() => go("catalogo")}>
            Ver paquetes
          </Button>
        </div>
      ) : (
        <div className="section checkout-layout">
          <section>
            {removedAlert && (
              <div className="inline-alert" role="status">
                <span>⚠️ {removedAlert}</span>
                <button onClick={() => setRemovedAlert(null)}>Cerrar</button>
              </div>
            )}
            <div className="cart-items-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  {item.pkg.image ? (
                    <div className="cart-item__image-wrap">
                      <img
                        src={item.pkg.image}
                        alt={`Fotografía de ${item.pkg.name}`}
                        className="cart-item__img"
                      />
                    </div>
                  ) : (
                    <Placeholder label={`Imagen de ${item.pkg.name}`} />
                  )}
                  <div>
                    <span className="eyebrow">{item.pkg.region}</span>
                    <h2>{item.pkg.name}</h2>
                    <p
                      style={{
                        margin: "4px 0 12px",
                        color: "var(--abyss)",
                        opacity: 0.85,
                        fontSize: "14px",
                      }}
                    >
                      📍 {item.pkg.city} ({item.pkg.province}) · {item.pkg.days}
                    </p>
                    <dl>
                      <div>
                        <dt>Fecha seleccionada</dt>
                        <dd>{item.date}</dd>
                      </div>
                      <div>
                        <dt>Personas</dt>
                        <dd>
                          <div className="cart-people-control">
                            <button
                              type="button"
                              className="cart-people-btn"
                              onClick={() =>
                                onUpdatePeople &&
                                onUpdatePeople(item.id, item.people - 1)
                              }
                              disabled={item.people <= 1}
                              aria-label={`Disminuir personas para ${item.pkg.name}`}
                              title={
                                item.people <= 1
                                  ? "Mínimo 1 viajero"
                                  : "Quitar una persona"
                              }
                            >
                              −
                            </button>
                            <span
                              className="cart-people-count"
                              aria-live="polite"
                            >
                              {item.people}
                            </span>
                            <button
                              type="button"
                              className="cart-people-btn"
                              onClick={() =>
                                onUpdatePeople &&
                                onUpdatePeople(item.id, Math.min(20, item.people + 1))
                              }
                              disabled={item.people >= 20}
                              aria-label={`Aumentar personas para ${item.pkg.name}`}
                              title={
                                item.people >= 20
                                  ? "Máximo 20 personas por paquete"
                                  : "Agregar una persona"
                              }
                            >
                              +
                            </button>
                            <span className="cart-people-unit">
                              {item.people === 1 ? "viajero" : "viajeros"}
                            </span>
                          </div>
                          {item.people >= 20 && (
                            <div
                              className="inline-alert"
                              style={{ marginTop: "10px", padding: "10px 12px" }}
                            >
                              <strong>⚠️ Límite de 20 personas por paquete</strong>
                              <span style={{ fontSize: "13px", lineHeight: 1.4 }}>
                                Este paquete está limitado a un máximo de 20 personas por reserva web. Si requieres cupos para un grupo más numeroso o corporativo, por favor contáctanos al teléfono <strong>02 2456456</strong> o al correo <strong>travelinnovation.tamc@gmail.com</strong>.
                              </span>
                            </div>
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt>Precio unitario</dt>
                        <dd>${item.pkg.price}</dd>
                      </div>
                      <div>
                        <dt>Subtotal paquete</dt>
                        <dd>
                          <strong>${item.total}</strong>
                        </dd>
                      </div>
                    </dl>
                    <div className="item-actions">
                      {onViewPackage && (
                        <Button
                          kind="secondary"
                          onClick={() => onViewPackage(item.pkg)}
                        >
                          Ver paquete
                        </Button>
                      )}
                      <Button
                        kind="danger"
                        onClick={() => handleRemove(item)}
                      >
                        Quitar
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Button kind="quiet" onClick={() => go("catalogo")}>
              Seguir viendo paquetes
            </Button>
          </section>
          <Summary
            total={grandTotal}
            action={
              <div
                className="split-actions"
                style={{
                  marginTop: "16px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  kind="secondary"
                  type="button"
                  onClick={() => go("catalogo")}
                  style={{ flex: 1 }}
                >
                  Volver a paquetes
                </Button>
                <Button
                  kind="primary"
                  type="button"
                  onClick={handleContinueReservation}
                  style={{ flex: 1.2 }}
                >
                  Continuar con la reserva
                </Button>
              </div>
            }
          />
        </div>
      )}

      {isAuthCheckoutModalOpen && !currentUser && (
        <AuthCheckoutModal
          isOpen={isAuthCheckoutModalOpen}
          items={items}
          grandTotal={grandTotal}
          onClose={() => setIsAuthCheckoutModalOpen(false)}
          onLoginSuccess={(user) => {
            onLoginSuccess?.(user)
            setIsAuthCheckoutModalOpen(false)
            go("identificacion")
          }}
        />
      )}
    </>
  )
}

function Summary({
  total = 378,
  action,
}: {
  total?: number
  action?: React.ReactNode
}) {
  return (
    <aside className="summary">
      <h2>Resumen de compra</h2>
      <div>
        <span>Subtotal</span>
        <span>${Math.round(total / 1.15)}</span>
      </div>
      <div>
        <span>Impuestos (IVA)</span>
        <span>${total - Math.round(total / 1.15)}</span>
      </div>
      <div className="summary__total">
        <strong>Total</strong>
        <strong>${total}</strong>
      </div>
      {action}
    </aside>
  )
}

function Identification({
  go,
  total = 378,
  currentUser,
  personalInfo,
  onSavePersonalInfo,
}: {
  go: (page: Page) => void
  total?: number
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  onSavePersonalInfo: (info: PersonalInfo) => void
}) {
  const [fullName, setFullName] = useState(
    personalInfo.fullName || currentUser?.name || ""
  )
  const [email, setEmail] = useState(
    personalInfo.email || currentUser?.email || ""
  )
  const [phone, setPhone] = useState(personalInfo.phone || "")
  const [cedula, setCedula] = useState(personalInfo.cedula || "")
  const [province, setProvince] = useState(personalInfo.province || "")
  const [city, setCity] = useState(personalInfo.city || "")
  const [mainStreet, setMainStreet] = useState(personalInfo.mainStreet || "")
  const [secondaryStreet, setSecondaryStreet] = useState(
    personalInfo.secondaryStreet || ""
  )
  const [reference, setReference] = useState(personalInfo.reference || "")
  const [wantsToUpdate, setWantsToUpdate] = useState(false)

  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    phone?: string
    cedula?: string
    province?: string
    city?: string
    mainStreet?: string
    secondaryStreet?: string
    reference?: string
  }>({})

  // Check if user has previously entered their required identification data
  const hasPreviouslyEnteredData = useMemo(() => {
    return Boolean(
      personalInfo.phone?.trim() &&
      personalInfo.cedula?.trim() &&
      personalInfo.province?.trim() &&
      personalInfo.city?.trim() &&
      personalInfo.mainStreet?.trim()
    )
  }, [personalInfo])

  useEffect(() => {
    setFullName(personalInfo.fullName || currentUser?.name || "")
    setEmail(personalInfo.email || currentUser?.email || "")
    setPhone(personalInfo.phone || "")
    setCedula(personalInfo.cedula || "")
    setProvince(personalInfo.province || "")
    setCity(personalInfo.city || "")
    setMainStreet(personalInfo.mainStreet || "")
    setSecondaryStreet(personalInfo.secondaryStreet || "")
    setReference(personalInfo.reference || "")
    setWantsToUpdate(false)
  }, [personalInfo, currentUser])

  const availableCities = useMemo(() => {
    if (!province || !PROVINCES_DATA[province]) return []
    return [...PROVINCES_DATA[province].cities].sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [province])

  const handleProvinceChange = (newProv: string) => {
    setProvince(newProv)
    setCity("")
    if (errors.province) setErrors((prev) => ({ ...prev, province: undefined }))
    if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    const nextErrors: typeof errors = {}

    if (!currentUser) {
      if (!fullName.trim()) {
        nextErrors.fullName = "El nombre es requerido."
        hasError = true
      }
      if (!email.trim()) {
        nextErrors.email = "El correo es requerido."
        hasError = true
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        nextErrors.email = "Ingresa un correo electrónico válido."
        setEmail("")
        hasError = true
      }
    }

    // Phone validation
    const phoneRes = validatePhoneNumber(phone)
    if (!phoneRes.isValid) {
      nextErrors.phone = phoneRes.error
      setPhone("") // Se borra solo este campo errado
      hasError = true
    }

    // Cédula validation
    const cedulaRes = validateEcuadorianCedula(cedula)
    if (!cedulaRes.isValid) {
      nextErrors.cedula = cedulaRes.error
      setCedula("") // Se borra solo este campo errado
      hasError = true
    }

    if (!province.trim()) {
      nextErrors.province = "Selecciona una provincia."
      hasError = true
    }

    if (!city.trim()) {
      nextErrors.city = "Selecciona una ciudad."
      hasError = true
    }

    if (!mainStreet.trim()) {
      nextErrors.mainStreet = "Ingresa la calle principal."
      hasError = true
    }

    if (!secondaryStreet.trim()) {
      nextErrors.secondaryStreet = "Ingresa la calle secundaria o intersección."
      hasError = true
    }

    if (!reference.trim()) {
      nextErrors.reference = "Ingresa el número de inmueble o referencia."
      hasError = true
    }

    setErrors(nextErrors)
    if (!hasError) {
      onSavePersonalInfo({
        fullName: fullName.trim() || currentUser?.name || "Titular",
        email: email.trim() || currentUser?.email || "",
        phone: phone.trim(),
        cedula: cedula.trim(),
        province,
        city,
        mainStreet: mainStreet.trim(),
        secondaryStreet: secondaryStreet.trim(),
        reference: reference.trim(),
      })
      go("viajeros")
    }
  }

  return (
    <>
      <PageTitle
        title="Información Personal"
        subtitle={
          hasPreviouslyEnteredData
            ? "Revisa tus datos guardados o actualízalos para continuar con la reserva."
            : "Completa tus datos personales y de facturación para la reserva."
        }
      />
      <div className="section">
        <Stepper current={1} />
      </div>
      <div className="section checkout-layout">
        <form className="form-panel" onSubmit={handleSubmit} noValidate>
          <div className="panel-heading" style={{ marginBottom: "18px" }}>
            <div>
              <span className="eyebrow">Titular de la reserva</span>
              <h2 style={{ margin: "4px 0 2px" }}>
                {fullName || currentUser?.name || "Titular"}
              </h2>
              <span style={{ fontSize: "14px", color: "#5a6e7f" }}>
                {email || currentUser?.email || "Correo del titular"}
              </span>
            </div>
            {currentUser ? (
              <span className="status status--pacific">✓ Sesión iniciada</span>
            ) : (
              <Button kind="quiet" type="button" onClick={() => go("carrito")}>
                Iniciar sesión
              </Button>
            )}
          </div>

          <p style={{ margin: "0 0 20px", fontSize: "14px", color: "var(--abyss)" }}>
            {hasPreviouslyEnteredData
              ? "Tus datos se encuentran precargados de tu registro previo. Revisa la información a continuación:"
              : "Ingresa tus datos requeridos para el registro oficial de la reserva y emisión del comprobante:"}
          </p>

          {!currentUser && (
            <div className="two-col" style={{ marginBottom: "14px" }}>
              <Field
                label="Nombre completo"
                placeholder="Como consta en tu cédula"
                value={fullName}
                onChange={(val) => {
                  setFullName(val)
                  if (errors.fullName)
                    setErrors((prev) => ({ ...prev, fullName: undefined }))
                }}
                error={errors.fullName}
                help="Nombre del titular."
                required
              />
              <Field
                label="Correo electrónico"
                type="email"
                placeholder="nombre@correo.com"
                value={email}
                onChange={(val) => {
                  setEmail(val)
                  if (errors.email)
                    setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                error={errors.email}
                help="Donde recibirás los comprobantes."
                required
              />
            </div>
          )}

          <div className="two-col">
            <Field
              label="Teléfono celular"
              type="tel"
              placeholder="Ej. 0991234567"
              value={phone}
              onChange={(val) => {
                const clean = val.replace(/\D/g, "")
                setPhone(clean)
                if (errors.phone)
                  setErrors((prev) => ({ ...prev, phone: undefined }))
              }}
              error={errors.phone}
              help="10 dígitos para coordinación y avisos del viaje."
              required
            />

            <Field
              label="Cédula de identidad"
              placeholder="10 dígitos numéricos"
              value={cedula}
              onChange={(val) => {
                const clean = val.replace(/\D/g, "")
                setCedula(clean)
                if (errors.cedula)
                  setErrors((prev) => ({ ...prev, cedula: undefined }))
              }}
              error={errors.cedula}
              help="10 dígitos para tu reserva y factura."
              required
            />
          </div>

          <div className="two-col" style={{ marginTop: "14px" }}>
            <SelectField
              label="Provincia"
              value={province}
              onChange={handleProvinceChange}
              error={errors.province}
              help="Provincia de residencia."
              required
            >
              <option value="">Selecciona tu provincia</option>
              {Object.keys(PROVINCES_DATA)
                .sort((a, b) => a.localeCompare(b, "es"))
                .map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
            </SelectField>

            <SelectField
              label="Ciudad"
              value={city}
              onChange={(val) => {
                setCity(val)
                if (errors.city)
                  setErrors((prev) => ({ ...prev, city: undefined }))
              }}
              error={errors.city}
              help="Ciudad o cantón."
              disabled={!province}
              required
            >
              <option value="">
                {province
                  ? "Selecciona tu ciudad"
                  : "Selecciona primero una provincia"}
              </option>
              {availableCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectField>
          </div>

          <div style={{ marginTop: "20px" }}>
            <span
              className="field__label"
              style={{ display: "block", marginBottom: "8px", fontWeight: 700 }}
            >
              Dirección domiciliaria
            </span>
            <div className="two-col">
              <Field
                label="Calle principal"
                placeholder="Ej. Av. Amazonas"
                value={mainStreet}
                onChange={(val) => {
                  setMainStreet(val)
                  if (errors.mainStreet)
                    setErrors((prev) => ({ ...prev, mainStreet: undefined }))
                }}
                error={errors.mainStreet}
                help="Calle o avenida principal."
                required
              />
              <Field
                label="Calle secundaria / Intersección"
                placeholder="Ej. Naciones Unidas"
                value={secondaryStreet}
                onChange={(val) => {
                  setSecondaryStreet(val)
                  if (errors.secondaryStreet)
                    setErrors((prev) => ({ ...prev, secondaryStreet: undefined }))
                }}
                error={errors.secondaryStreet}
                help="Calle secundaria o transversal."
                required
              />
            </div>
            <div style={{ marginTop: "14px" }}>
              <Field
                label="N° de casa / Edificio y referencia"
                placeholder="Ej. N34-120, diagonal al parque La Carolina"
                value={reference}
                onChange={(val) => {
                  setReference(val)
                  if (errors.reference)
                    setErrors((prev) => ({ ...prev, reference: undefined }))
                }}
                error={errors.reference}
                help="Número de inmueble y punto de referencia."
                required
              />
            </div>
          </div>

          {/* Si ya ha ingresado datos antes: preguntar si desea actualizar algún dato */}
          {hasPreviouslyEnteredData && (
            <div className="update-data-section">
              <div className="update-data-box">
                <div className="update-data-header">
                  <span className="update-icon" aria-hidden="true">
                    📋
                  </span>
                  <div>
                    <strong className="update-title">
                      ¿Deseas actualizar algún dato?
                    </strong>
                    <p className="update-desc">
                      Hemos rellenado tus campos automáticamente con la información que ingresaste previamente. Puedes confirmar estos datos o modificarlos directamente antes de continuar.
                    </p>
                  </div>
                </div>

                <div className="update-choice-group">
                  <label
                    className={`update-choice-card ${
                      !wantsToUpdate ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="updateDataOption"
                      checked={!wantsToUpdate}
                      onChange={() => setWantsToUpdate(false)}
                    />
                    <div className="choice-text">
                      <strong>Mantener mis datos actuales</strong>
                      <small>Confirmar y continuar con los datos mostrados arriba.</small>
                    </div>
                  </label>

                  <label
                    className={`update-choice-card ${
                      wantsToUpdate ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="updateDataOption"
                      checked={wantsToUpdate}
                      onChange={() => setWantsToUpdate(true)}
                    />
                    <div className="choice-text">
                      <strong>Sí, deseo actualizar mis datos</strong>
                      <small>Modifica cualquiera de los campos y guarda los cambios.</small>
                    </div>
                  </label>
                </div>

                {wantsToUpdate && (
                  <div className="update-active-notice">
                    <span aria-hidden="true">✏️</span>
                    <span>
                      Puedes editar cualquiera de los campos de arriba (teléfono, cédula o dirección). Los nuevos datos se guardarán para tu reserva.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="split-actions" style={{ marginTop: "28px" }}>
            <Button kind="secondary" type="button" onClick={() => go("carrito")}>
              Volver al carrito
            </Button>
            <Button kind="primary" type="submit">
              {hasPreviouslyEnteredData
                ? wantsToUpdate
                  ? "Guardar cambios y continuar a viajeros"
                  : "Confirmar datos y continuar a viajeros"
                : "Continuar a datos de viajeros"}
            </Button>
          </div>
        </form>
        <Summary total={total} />
      </div>
    </>
  )
}

function Travelers({
  go,
  total = 378,
  currentUser,
  personalInfo,
  cartItems,
  travelersList,
  onSaveTravelers,
}: {
  go: (page: Page) => void
  total?: number
  currentUser?: { name: string; email: string } | null
  personalInfo: PersonalInfo
  cartItems: CartItem[]
  travelersList: TravelerData[]
  onSaveTravelers: (travelers: TravelerData[]) => void
}) {
  // Generate traveler slots based directly on the cart items
  const generatedSlots = useMemo(() => {
    const list: TravelerData[] = []
    if (cartItems.length === 0) {
      list.push({
        id: "traveler-default-1",
        packageId: "default",
        slotNumber: 1,
        packageTitle: "Paquete turístico",
        isTitular: true,
        fullName: personalInfo.fullName || currentUser?.name || "",
        cedula: personalInfo.cedula || "",
        phone: personalInfo.phone || "",
        email: personalInfo.email || currentUser?.email || "",
        isMinor: false,
        birthDate: "",
      })
    } else {
      cartItems.forEach((item) => {
        for (let p = 1; p <= item.people; p++) {
          const isFirstInPkg = p === 1
          list.push({
            id: `traveler-${item.id}-${p}`,
            packageId: item.id,
            slotNumber: p,
            packageTitle: item.pkg.name,
            isTitular: isFirstInPkg,
            fullName: isFirstInPkg
              ? personalInfo.fullName || currentUser?.name || ""
              : "",
            cedula: isFirstInPkg ? personalInfo.cedula || "" : "",
            phone: isFirstInPkg ? personalInfo.phone || "" : "",
            email: isFirstInPkg
              ? personalInfo.email || currentUser?.email || ""
              : "",
            isMinor: false,
            birthDate: "",
          })
        }
      })
    }
    return list
  }, [cartItems, personalInfo, currentUser])

  const [travelers, setTravelers] = useState<TravelerData[]>(() => {
    if (
      travelersList &&
      travelersList.length === generatedSlots.length &&
      travelersList.length > 0
    ) {
      return generatedSlots.map((gen, idx) => {
        const existing = travelersList[idx]
        if (existing) {
          return {
            ...gen,
            fullName:
              existing.fullName !== undefined ? existing.fullName : gen.fullName,
            cedula:
              existing.cedula !== undefined ? existing.cedula : gen.cedula,
            phone: existing.phone !== undefined ? existing.phone : gen.phone,
            email: existing.email !== undefined ? existing.email : gen.email,
            isMinor: existing.isMinor,
            birthDate: existing.birthDate || "",
            isTitular:
              existing.isTitular !== undefined
                ? existing.isTitular
                : gen.isTitular,
          }
        }
        return gen
      })
    }
    return generatedSlots
  })

  // Synchronize slot counts if cartItems changes
  useEffect(() => {
    setTravelers((prev) => {
      if (prev.length !== generatedSlots.length) {
        return generatedSlots
      }
      return prev
    })
  }, [generatedSlots])

  // Reset travelers to fresh blank slots when travelersList is emptied
  useEffect(() => {
    if (!travelersList || travelersList.length === 0) {
      setTravelers(generatedSlots)
      setErrors({})
      setGroupErrors({})
    }
  }, [travelersList, generatedSlots])

  const [errors, setErrors] = useState<
    Record<string, { fullName?: string; cedula?: string; birthDate?: string }>
  >({})
  const [groupErrors, setGroupErrors] = useState<Record<string, string>>({})

  const handleTravelerChange = (
    travelerId: string,
    field: keyof TravelerData,
    value: any
  ) => {
    setTravelers((prev) =>
      prev.map((t) => {
        if (t.id === travelerId) {
          return { ...t, [field]: value }
        }
        return t
      })
    )
    if (errors[travelerId]?.[field as "fullName" | "cedula" | "birthDate"]) {
      setErrors((prev) => ({
        ...prev,
        [travelerId]: {
          ...prev[travelerId],
          [field]: undefined,
        },
      }))
    }
  }

  const handleRoleChange = (
    travelerId: string,
    packageId: string,
    role: "titular" | "acompanante"
  ) => {
    setTravelers((prev) => {
      if (role === "titular") {
        // En este paquete, travelerId es titular y los demás son acompañantes
        return prev.map((t) => {
          if (t.packageId === packageId) {
            return {
              ...t,
              isTitular: t.id === travelerId,
            }
          }
          return t
        })
      } else {
        return prev.map((t) => {
          if (t.id === travelerId) {
            return {
              ...t,
              isTitular: false,
            }
          }
          return t
        })
      }
    })
    setGroupErrors((prev) => ({ ...prev, [packageId]: undefined }))
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    const nextErrors: Record<
      string,
      { fullName?: string; cedula?: string; birthDate?: string; phone?: string }
    > = {}
    const nextGroupErrors: Record<string, string> = {}

    // Validar datos de cada viajero y limpiar solo campos errados
    const updatedTravelers = travelers.map((t) => {
      const errs: {
        fullName?: string
        cedula?: string
        birthDate?: string
        phone?: string
      } = {}
      let modified = { ...t }

      if (!t.fullName.trim()) {
        errs.fullName = "El nombre completo es requerido."
        hasError = true
      }

      // Validar documento / cédula
      const cedulaRes = validateEcuadorianCedula(t.cedula)
      if (!cedulaRes.isValid) {
        errs.cedula = cedulaRes.error
        modified.cedula = "" // ¡Se borra solo este campo errado del viajero!
        hasError = true
      }

      // Validar teléfono del titular si fue ingresado
      if (t.isTitular && t.phone) {
        const phoneRes = validatePhoneNumber(t.phone)
        if (!phoneRes.isValid) {
          errs.phone = phoneRes.error
          modified.phone = "" // ¡Se borra solo este campo errado!
          hasError = true
        }
      }

      if (t.isMinor && !t.birthDate) {
        errs.birthDate =
          "La fecha de nacimiento es requerida para menores de edad."
        hasError = true
      }

      if (Object.keys(errs).length > 0) {
        nextErrors[t.id] = errs
      }

      return modified
    })

    // Validar que cada paquete tenga un titular seleccionado
    const targetGroups =
      cartItems.length > 0
        ? cartItems.map((c) => ({ id: c.id, name: c.pkg.name }))
        : [{ id: "default", name: "Paquete turístico" }]

    targetGroups.forEach((grp) => {
      const hasTitular = travelers.some(
        (t) => (t.packageId === grp.id || !t.packageId) && t.isTitular
      )
      if (!hasTitular) {
        nextGroupErrors[grp.id] = `Debes seleccionar a un titular para el paquete "${grp.name}".`
        hasError = true
      }
    })

    setErrors(nextErrors)
    setGroupErrors(nextGroupErrors)

    if (hasError) {
      setTravelers(updatedTravelers) // Limpia solo los campos con error
      return
    }

    onSaveTravelers(travelers)
    go("pago")
  }

  const renderedGroups = useMemo(() => {
    if (cartItems.length === 0) {
      return [
        {
          id: "default",
          pkg: {
            id: "default",
            name: "Paquete turístico",
            destination: "Ecuador",
            image: "",
          },
          people: 1,
          travelers: travelers.filter(
            (t) => !t.packageId || t.packageId === "default"
          ),
        },
      ]
    }
    return cartItems.map((item) => ({
      id: item.id,
      pkg: item.pkg,
      people: item.people,
      travelers: travelers.filter((t) => t.packageId === item.id),
    }))
  }, [cartItems, travelers])

  return (
    <>
      <PageTitle
        title="Datos de viajeros"
        subtitle="Completa los datos de los pasajeros agrupados por paquete turístico."
      />
      <div className="section">
        <Stepper current={2} />
      </div>
      <div className="section checkout-layout">
        <form className="form-stack" onSubmit={handleContinue} noValidate>
          {renderedGroups.map((group, gIdx) => {
            const currentTitular = group.travelers.find((t) => t.isTitular)
            const groupError = groupErrors[group.id]

            return (
              <section
                className="package-travelers-group"
                key={group.id}
                style={{ marginBottom: "28px" }}
              >
                <div className="package-travelers-header">
                  <div>
                    <span className="eyebrow">
                      Paquete {gIdx + 1} de {renderedGroups.length}
                    </span>
                    <h2 style={{ margin: "2px 0 4px 0", color: "var(--pacific)" }}>
                      {group.pkg.name}
                    </h2>
                    <p
                      className="muted"
                      style={{ margin: 0, fontSize: "0.88rem" }}
                    >
                      📍 {group.pkg.destination} · {group.people}{" "}
                      {group.people === 1 ? "pasajero" : "pasajeros"}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="status status--pacific">
                      Titular:{" "}
                      <strong>
                        {currentTitular?.fullName || "Selecciona un titular"}
                      </strong>
                    </span>
                  </div>
                </div>

                {groupError && (
                  <div
                    className="inline-alert"
                    role="alert"
                    style={{ marginBottom: "16px" }}
                  >
                    ⚠️ {groupError}
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  {group.travelers.map((traveler, pIdx) => {
                    const isFirstInGroup = pIdx === 0
                    const travelerErrors = errors[traveler.id] || {}

                    return (
                      <article
                        className="form-panel"
                        key={traveler.id}
                        style={{ background: "#ffffff" }}
                      >
                        <div
                          className="panel-heading"
                          style={{ marginBottom: "16px" }}
                        >
                          <div>
                            <span className="eyebrow">{group.pkg.name}</span>
                            <h3
                              style={{ margin: "2px 0", color: "var(--pacific)" }}
                            >
                              Viajero {traveler.slotNumber} ·{" "}
                              {traveler.isTitular
                                ? "Titular del paquete"
                                : "Acompañante"}
                            </h3>
                          </div>
                          {isFirstInGroup && (
                            <span className="status status--pacific">
                              ✓ Datos precargados
                            </span>
                          )}
                        </div>

                        <div
                          className="two-col"
                          style={{ marginBottom: "14px" }}
                        >
                          <SelectField
                            label="Rol en la reserva"
                            value={traveler.isTitular ? "titular" : "acompanante"}
                            onChange={(val) =>
                              handleRoleChange(
                                traveler.id,
                                group.id,
                                val as "titular" | "acompanante"
                              )
                            }
                            help="Define si esta persona es el titular responsable de este paquete o un acompañante."
                          >
                            <option value="titular">Titular de la reserva</option>
                            <option value="acompanante">Acompañante</option>
                          </SelectField>
                        </div>

                        <div className="two-col">
                          <Field
                            label="Nombre completo"
                            placeholder="Como aparece en su documento"
                            value={traveler.fullName}
                            onChange={(val) =>
                              handleTravelerChange(
                                traveler.id,
                                "fullName",
                                val
                              )
                            }
                            error={travelerErrors.fullName}
                            help={
                              isFirstInGroup
                                ? "Datos del titular de la cuenta (puedes editarlos si viaja otra persona)."
                                : "Nombre y apellido completos del pasajero."
                            }
                            required
                          />
                          <Field
                            label="Documento de identidad"
                            placeholder="Cédula de 10 dígitos o pasaporte"
                            value={traveler.cedula}
                            onChange={(val) =>
                              handleTravelerChange(
                                traveler.id,
                                "cedula",
                                val
                              )
                            }
                            error={travelerErrors.cedula}
                            help="Cédula de identidad o pasaporte vigente."
                            required
                          />
                        </div>

                        {traveler.isTitular && (
                          <div
                            className="two-col"
                            style={{ marginTop: "14px" }}
                          >
                            <Field
                              label="Teléfono de contacto"
                              placeholder="Ej. 0991234567"
                              value={traveler.phone || ""}
                              onChange={(val) =>
                                handleTravelerChange(
                                  traveler.id,
                                  "phone",
                                  val
                                )
                              }
                              error={travelerErrors.phone}
                              help="10 dígitos para coordinación y avisos de logística."
                            />
                            <Field
                              label="Correo electrónico"
                              placeholder="ejemplo@correo.com"
                              type="email"
                              value={traveler.email || ""}
                              onChange={(val) =>
                                handleTravelerChange(
                                  traveler.id,
                                  "email",
                                  val
                                )
                              }
                              help="Para recibir itinerario y vouchers."
                            />
                          </div>
                        )}

                        <label className="check" style={{ marginTop: "14px" }}>
                          <input
                            type="checkbox"
                            checked={traveler.isMinor}
                            onChange={(e) =>
                              handleTravelerChange(
                                traveler.id,
                                "isMinor",
                                e.target.checked
                              )
                            }
                          />
                          <span>Este viajero es menor de edad</span>
                        </label>

                        {traveler.isMinor && (
                          <div style={{ marginTop: "10px" }}>
                            <Field
                              label="Fecha de nacimiento"
                              type="date"
                              value={traveler.birthDate || ""}
                              onChange={(val) =>
                                handleTravelerChange(
                                  traveler.id,
                                  "birthDate",
                                  val
                                )
                              }
                              error={travelerErrors.birthDate}
                              help="Fecha de nacimiento del menor."
                              required
                            />
                            <div
                              className="inline-alert"
                              style={{ marginTop: "8px" }}
                            >
                              ⚠️ Lleva su documento de identidad y autorización
                              escrita si viaja sin sus padres o representantes
                              legales.
                            </div>
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </section>
            )
          })}

          <div className="important-note">
            <strong>⚠️ Lleva tu cédula física y original el día del viaje</strong>
            <p>
              Todos los pasajeros deben presentar su documento de identidad original
              para el embarque y check-in del paquete contratado.
            </p>
          </div>

          <div className="split-actions">
            <Button
              kind="secondary"
              type="button"
              onClick={() => go("identificacion")}
            >
              Volver a información personal
            </Button>
            <Button kind="primary" type="submit">
              Continuar al pago
            </Button>
          </div>
        </form>
        <Summary total={total} />
      </div>
    </>
  )
}

function Payment({
  go,
  total = 378,
  currentUser,
  personalInfo,
  cartItems,
  travelersList,
  paymentData,
  onSavePaymentData,
  onConfirmReservation,
}: {
  go: (page: Page) => void
  total?: number
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  cartItems: CartItem[]
  travelersList: TravelerData[]
  paymentData: PaymentDetails
  onSavePaymentData: (data: PaymentDetails) => void
  onConfirmReservation: (code: string, paymentDetails: PaymentDetails) => void
}) {
  const [method, setMethod] = useState<PaymentMethodType>(
    paymentData.method || "credito"
  )
  const [file, setFile] = useState(paymentData.bankVoucherUploaded || false)
  const [voucherNumber, setVoucherNumber] = useState(
    paymentData.bankVoucherNumber || ""
  )
  const [voucherError, setVoucherError] = useState("")

  // Card fields
  const [cardNumber, setCardNumber] = useState(paymentData.cardNumber || "")
  const [cardHolder, setCardHolder] = useState(paymentData.cardHolder || "")
  const [cardExpiry, setCardExpiry] = useState(paymentData.cardExpiry || "")
  const [cardCvv, setCardCvv] = useState(paymentData.cardCvv || "")
  const [installments, setInstallments] = useState(
    paymentData.installments || "1 pago corriente (sin recargo)"
  )
  const [cardErrors, setCardErrors] = useState<{
    cardNumber?: string
    cardHolder?: string
    cardExpiry?: string
    cardCvv?: string
  }>({})

  useEffect(() => {
    setMethod(paymentData.method || "credito")
    setCardNumber(paymentData.cardNumber || "")
    setCardHolder(paymentData.cardHolder || "")
    setCardExpiry(paymentData.cardExpiry || "")
    setCardCvv(paymentData.cardCvv || "")
    setInstallments(
      paymentData.installments || "1 pago corriente (sin recargo)"
    )
    setVoucherNumber(paymentData.bankVoucherNumber || "")
    setFile(paymentData.bankVoucherUploaded || false)
    setAccepted(false)
    setTermsError(false)
    setCardErrors({})
    setVoucherError("")
  }, [paymentData])

  const [accepted, setAccepted] = useState(false)
  const [modal, setModal] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [copied, setCopied] = useState("")

  const [bookingRefCode, setBookingRefCode] = useState(() => generateBookingCode())

  useEffect(() => {
    setBookingRefCode(generateBookingCode())
  }, [total, cartItems.length])

  const bankData = [
    ["Banco", "Banco Pichincha"],
    ["Tipo de cuenta", "Corriente"],
    ["Número de cuenta", "2100849302"],
    ["Titular", "Travel Innovation Ecuador S.A."],
    ["RUC", "1792345678001"],
    ["Correo comprobante", "pagos@travelinnovation.ec"],
    ["Monto exacto", `$${total},00`],
    ["Referencia sugerida", bookingRefCode],
  ]

  const handleConfirm = () => {
    if (!accepted) {
      setTermsError(true)
      return
    }

    if (method === "transferencia") {
      if (!file) {
        setVoucherError(
          "Debes adjuntar el comprobante de tu transferencia o depósito para continuar."
        )
        return
      }
      const finalPayment: PaymentDetails = {
        method: "transferencia",
        bankVoucherNumber: `TR-${Math.floor(10000000 + Math.random() * 90000000)}`,
        bankVoucherUploaded: true,
      }
      onSavePaymentData(finalPayment)
      onConfirmReservation(bookingRefCode, finalPayment)
      go("confirmacion")
    } else {
      // Card validation (Debito or Credito)
      let hasError = false
      const nextErrs: typeof cardErrors = {}

      // Validar número de tarjeta (16 dígitos, Luhn y no repetidos)
      const cardRes = validateCardNumber(cardNumber)
      if (!cardRes.isValid) {
        nextErrs.cardNumber = cardRes.error
        setCardNumber("") // Borra solo este campo errado
        hasError = true
      }

      if (!cardHolder.trim()) {
        nextErrs.cardHolder = "Ingresa el nombre del titular tal como figura en la tarjeta."
        hasError = true
      }

      // Validar fecha de expiración (no meses inventados como 80/98)
      const expiryRes = validateCardExpiry(cardExpiry)
      if (!expiryRes.isValid) {
        nextErrs.cardExpiry = expiryRes.error
        setCardExpiry("") // Borra solo este campo errado
        hasError = true
      }

      // Validar código de seguridad (CVV de solo 3 dígitos)
      const cvvRes = validateCardCvv(cardCvv)
      if (!cvvRes.isValid) {
        nextErrs.cardCvv = cvvRes.error
        setCardCvv("") // Borra solo este campo errado
        hasError = true
      }

      setCardErrors(nextErrs)
      if (hasError) {
        return
      }

      const finalPayment: PaymentDetails = {
        method: method,
        cardNumber,
        cardHolder: cardHolder.trim(),
        cardExpiry,
        cardCvv,
        installments:
          method === "debito"
            ? "1 pago directo (débito)"
            : installments,
      }
      onSavePaymentData(finalPayment)
      onConfirmReservation(bookingRefCode, finalPayment)
      go("confirmacion")
    }
  }

  return (
    <>
      <PageTitle
        title="Pago de la reserva"
        subtitle="Revisa tus datos y selecciona tu método de pago preferido."
      />
      <div className="section">
        <Stepper current={3} />
      </div>
      <div className="section checkout-layout">
        <section className="form-stack">
          {/* 1. Resumen de datos personales */}
          <article className="form-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Paso 1 · Titular</span>
                <h2>Información Personal</h2>
              </div>
              <Button kind="quiet" type="button" onClick={() => go("identificacion")}>
                Editar datos ✎
              </Button>
            </div>
            <div className="checkout-recap-grid">
              <div>
                <small>Titular</small>
                <strong>
                  {personalInfo.fullName || currentUser?.name || "María Andrade"}
                </strong>
              </div>
              <div>
                <small>Cédula de identidad</small>
                <strong>{personalInfo.cedula || "1712345675"}</strong>
              </div>
              <div>
                <small>Teléfono de contacto</small>
                <strong>{personalInfo.phone || "0991234567"}</strong>
              </div>
              <div>
                <small>Correo electrónico</small>
                <strong>
                  {personalInfo.email ||
                    currentUser?.email ||
                    "maria@ejemplo.com"}
                </strong>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <small>Dirección domiciliaria</small>
                <strong>
                  {personalInfo.mainStreet && personalInfo.secondaryStreet
                    ? `${personalInfo.mainStreet} y ${personalInfo.secondaryStreet}, ${personalInfo.reference || "S/N"} · ${personalInfo.city || ""}, ${personalInfo.province || ""}`
                    : "Av. Amazonas y Naciones Unidas, N34-120 · Quito, Pichincha"}
                </strong>
              </div>
            </div>
          </article>

          {/* 2. Resumen del carrito */}
          <article className="form-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Paso 2 · Carrito</span>
                <h2>
                  Resumen de paquetes ({cartItems.length}{" "}
                  {cartItems.length === 1 ? "paquete" : "paquetes"})
                </h2>
              </div>
              <Button kind="quiet" type="button" onClick={() => go("carrito")}>
                Editar carrito ✎
              </Button>
            </div>
            <div className="cart-checkout-summary-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-summary-item-row">
                  <div>
                    <strong style={{ fontSize: "16px" }}>{item.pkg.name}</strong>
                    <small>
                      📍 {item.pkg.city} ({item.pkg.province}) · 📅 {item.date}
                    </small>
                    <small>
                      👥 {item.people}{" "}
                      {item.people === 1 ? "viajero" : "viajeros"} (${item.pkg.price}{" "}
                      c/u)
                    </small>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <strong
                      style={{ fontSize: "17px", color: "var(--pacific)" }}
                    >
                      ${item.total}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* 3. Selección de método de pago (3 opciones: transferencia, debito, credito) */}
          <article className="form-panel">
            <h2>Método de pago</h2>
            <div className="payment-method-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={method === "transferencia"}
                className={`payment-tab-btn ${
                  method === "transferencia" ? "is-active" : ""
                }`}
                onClick={() => setMethod("transferencia")}
              >
                <span className="tab-icon">🏦</span>
                <div className="tab-text">
                  <strong>Transferencia bancaria</strong>
                  <small>Depósito o transferencia directa</small>
                </div>
                {method === "transferencia" && (
                  <span className="tab-check">✓</span>
                )}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={method === "debito"}
                className={`payment-tab-btn ${
                  method === "debito" ? "is-active" : ""
                }`}
                onClick={() => setMethod("debito")}
              >
                <span className="tab-icon">💳</span>
                <div className="tab-text">
                  <strong>Tarjeta de débito</strong>
                  <small>Pago directo · Sin pago a plazos</small>
                </div>
                {method === "debito" && <span className="tab-check">✓</span>}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={method === "credito"}
                className={`payment-tab-btn ${
                  method === "credito" ? "is-active" : ""
                }`}
                onClick={() => setMethod("credito")}
              >
                <span className="tab-icon">💳</span>
                <div className="tab-text">
                  <strong>Tarjeta de crédito</strong>
                  <small>Pago corriente o diferido a plazos</small>
                </div>
                {method === "credito" && <span className="tab-check">✓</span>}
              </button>
            </div>

            {method === "transferencia" ? (
              <div className="transfer-payment-body">
                <div
                  className="panel-heading"
                  style={{ marginBottom: "12px" }}
                >
                  <h3 style={{ margin: 0 }}>Datos para transferir</h3>
                  <span className="status status--pending">
                    Monto: ${total},00
                  </span>
                </div>
                <div className="bank-data">
                  {bankData.map(([label, value]) => (
                    <div key={label}>
                      <span>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </span>
                      <Button
                        kind="quiet"
                        type="button"
                        onClick={() => {
                          setCopied(label)
                          setTimeout(() => setCopied(""), 2000)
                        }}
                      >
                        {copied === label ? "Copiado ✓" : "Copiar"}
                      </Button>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "20px" }}>
                  <span
                    className="field__label"
                    style={{
                      display: "block",
                      marginBottom: "6px",
                      fontWeight: 700,
                    }}
                  >
                    Adjuntar comprobante de pago
                  </span>
                  <div className="upload-zone">
                    <span className="upload-icon" aria-hidden="true">
                      ↑
                    </span>
                    <strong>Arrastra tu archivo aquí</strong>
                    <span>Formatos JPG, PNG o PDF (máx. 5 MB)</span>
                    <Button
                      kind="secondary"
                      type="button"
                      onClick={() => {
                        setFile(true)
                        if (voucherError) setVoucherError("")
                      }}
                    >
                      {file ? "Cambiar archivo" : "Seleccionar archivo"}
                    </Button>
                  </div>
                  {voucherError && (
                    <p
                      className="field__error"
                      role="alert"
                      style={{ marginTop: "8px", display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <span aria-hidden="true">⚠️</span> {voucherError}
                    </p>
                  )}
                  {file && (
                    <div className="file-progress" role="status">
                      <div>
                        <span>comprobante-transferencia.pdf</span>
                        <strong>100%</strong>
                      </div>
                      <div className="progress">
                        <span />
                      </div>
                      <span className="status status--success">
                        ✓ Comprobante listo
                      </span>
                    </div>
                  )}
                </div>

                <div className="important-note" style={{ marginTop: "18px" }}>
                  <strong>⚠️ Plazo para enviar comprobante: 24 horas</strong>
                  <p>
                    Después de este tiempo, los cupos reservados pueden ser
                    reversados automáticamente.
                  </p>
                </div>
              </div>
            ) : (
              <div className="card-payment-body">
                {/* Banner específico cuando es Débito */}
                {method === "debito" && (
                  <div className="debit-info-banner">
                    <span aria-hidden="true" style={{ fontSize: "22px" }}>
                      ℹ️
                    </span>
                    <div>
                      <strong>Pago inmediato con tarjeta de débito</strong>
                      <p style={{ margin: "4px 0 0", color: "#475569" }}>
                        El cobro se debitará directamente de tu cuenta bancaria en un
                        solo pago por el monto total (${total},00).{" "}
                        <strong>
                          Las tarjetas de débito no admiten pago a plazos ni financiamiento diferido.
                        </strong>
                      </p>
                    </div>
                  </div>
                )}

                <div className="card-brands-row">
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--abyss)",
                    }}
                  >
                    {method === "debito"
                      ? "Redes de débito aceptadas:"
                      : "Tarjetas de crédito aceptadas:"}
                  </span>
                  {method === "debito" ? (
                    <>
                      <span className="card-brand-badge">VISA Débito</span>
                      <span className="card-brand-badge">Mastercard Débito</span>
                      <span className="card-brand-badge">Maestro</span>
                    </>
                  ) : (
                    <>
                      <span className="card-brand-badge">VISA</span>
                      <span className="card-brand-badge">Mastercard</span>
                      <span className="card-brand-badge">American Express</span>
                      <span className="card-brand-badge">Diners Club</span>
                      <span className="card-brand-badge">Discover</span>
                    </>
                  )}
                </div>

                <div style={{ marginTop: "12px" }}>
                  <Field
                    label="Número de tarjeta"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(val) => {
                      const clean = val.replace(/\D/g, "")
                      const formatted = clean
                        .replace(/(\d{4})/g, "$1 ")
                        .trim()
                      setCardNumber(formatted)
                      if (cardErrors.cardNumber)
                        setCardErrors((p) => ({ ...p, cardNumber: undefined }))
                    }}
                    error={cardErrors.cardNumber}
                    help={
                      method === "debito"
                        ? "16 dígitos de tu tarjeta de débito bancaria."
                        : "16 dígitos de tu tarjeta de crédito."
                    }
                    required
                  />
                </div>

                <div style={{ marginTop: "14px" }}>
                  <Field
                    label="Nombre del titular en la tarjeta"
                    placeholder="Como figura en el plástico"
                    value={cardHolder}
                    onChange={(val) => {
                      setCardHolder(val.toUpperCase())
                      if (cardErrors.cardHolder)
                        setCardErrors((p) => ({ ...p, cardHolder: undefined }))
                    }}
                    error={cardErrors.cardHolder}
                    help="Nombre y apellido tal como aparece en la tarjeta."
                    required
                  />
                </div>

                <div className="two-col" style={{ marginTop: "14px" }}>
                  <Field
                    label="Fecha de expiración"
                    placeholder="MM/AA"
                    value={cardExpiry}
                    onChange={(val) => {
                      let clean = val.replace(/[^\d/]/g, "")
                      if (!clean.includes("/") && clean.length > 2) {
                        clean = `${clean.slice(0, 2)}/${clean.slice(2)}`
                      }
                      setCardExpiry(clean)
                      if (cardErrors.cardExpiry)
                        setCardErrors((p) => ({ ...p, cardExpiry: undefined }))
                    }}
                    error={cardErrors.cardExpiry}
                    help="Mes y año en formato MM/AA (mes de 01 a 12)."
                    required
                  />

                  <Field
                    label="Código de seguridad (CVV)"
                    placeholder="3 dígitos"
                    type="password"
                    value={cardCvv}
                    onChange={(val) => {
                      const clean = val.replace(/\D/g, "")
                      setCardCvv(clean)
                      if (cardErrors.cardCvv)
                        setCardErrors((p) => ({ ...p, cardCvv: undefined }))
                    }}
                    error={cardErrors.cardCvv}
                    help="Exactamente 3 dígitos al reverso de tu tarjeta."
                    required
                  />
                </div>

                {/* En Débito NO hay pago a plazos. Solo en Crédito se muestra el selector de cuotas */}
                {method === "credito" && (
                  <div style={{ marginTop: "14px" }}>
                    <SelectField
                      label="Modalidad de pago / Diferido a plazos"
                      value={installments}
                      onChange={(val) => setInstallments(val)}
                      help="Selecciona si deseas pago corriente o cuotas diferidas con tu tarjeta de crédito."
                    >
                      {[
                        {
                          val: "6 cuotas sin intereses",
                          txt: `6 cuotas sin intereses ($${(total / 6).toFixed(2)}/mes)`,
                        },
                        {
                          val: "3 cuotas sin intereses",
                          txt: `3 cuotas sin intereses ($${(total / 3).toFixed(2)}/mes)`,
                        },
                        {
                          val: "12 cuotas con intereses",
                          txt: `12 cuotas con intereses ($${((total * 1.08) / 12).toFixed(2)}/mes)`,
                        },
                        {
                          val: "1 pago corriente (sin recargo)",
                          txt: `1 pago corriente ($${total})`,
                        },
                      ]
                        .sort((a, b) => a.txt.localeCompare(b.txt, "es"))
                        .map((opt) => (
                          <option key={opt.val} value={opt.val}>
                            {opt.txt}
                          </option>
                        ))}
                    </SelectField>
                  </div>
                )}

                <div className="security-badge">
                  <span aria-hidden="true">🔒</span>
                  <span>
                    <strong>Pago seguro:</strong> Transacción encriptada con
                    cifrado SSL de 256 bits y certificación PCI-DSS.
                  </span>
                </div>
              </div>
            )}

            <label className="check" style={{ marginTop: "20px" }}>
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => {
                  setAccepted(e.target.checked)
                  if (termsError) setTermsError(false)
                }}
              />
              <span>
                He leído y acepto la{" "}
                <button
                  type="button"
                  className="text-link inline"
                  onClick={() => setModal(true)}
                >
                  política de cancelación y reembolsos
                </button>
                .
              </span>
            </label>
            {termsError && (
              <p
                className="field__error"
                role="status"
                style={{ marginTop: "-8px", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span aria-hidden="true">⚠️</span> Debes aceptar la política de cancelación y reembolsos para
                continuar.
              </p>
            )}

            <div className="split-actions" style={{ marginTop: "24px" }}>
              <Button kind="secondary" type="button" onClick={() => go("viajeros")}>
                Volver a datos de viajeros
              </Button>
              <Button kind="primary" type="button" onClick={handleConfirm}>
                {method === "transferencia"
                  ? "Confirmar comprobante y finalizar"
                  : method === "debito"
                  ? `Pagar $${total} con débito y finalizar`
                  : `Pagar $${total} con crédito y finalizar`}
              </Button>
            </div>
          </article>
        </section>
        <Summary total={total} />
      </div>

      {modal && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setModal(false)}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="panel-heading">
              <h2 id="modal-title">Políticas de cancelación y reembolsos</h2>
              <button
                className="icon-button"
                aria-label="Cerrar modal"
                onClick={() => setModal(false)}
              >
                ×
              </button>
            </div>
            <p>
              Las cancelaciones voluntarias deben solicitarse con al menos 72
              horas hábiles de anticipación a la fecha de inicio del tour. Aplican
              excepciones por causas de fuerza mayor comprobadas y emergencias
              médicas debidamente documentadas.
            </p>
            <button
              className="text-link"
              type="button"
              onClick={() => {
                setModal(false)
                go("politicas")
              }}
            >
              Leer política completa
            </button>
            <div className="split-actions">
              <Button
                kind="secondary"
                type="button"
                onClick={() => setModal(false)}
              >
                Cerrar
              </Button>
              <Button
                kind="primary"
                type="button"
                onClick={() => {
                  setAccepted(true)
                  setTermsError(false)
                  setModal(false)
                }}
              >
                Aceptar política
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

function Confirmation({
  go,
  total = 378,
  currentUser,
  personalInfo,
  cartItems,
  travelersList,
  paymentData,
  bookingCode = "TI-2026-8K3Q2M",
}: {
  go: (page: Page) => void
  total?: number
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  cartItems: CartItem[]
  travelersList: TravelerData[]
  paymentData: PaymentDetails
  bookingCode?: string
}) {
  const [copied, setCopied] = useState(false)
  const [downloadToast, setDownloadToast] = useState(false)
  const [purchaseToast, setPurchaseToast] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setPurchaseToast(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const isTransfer = paymentData.method === "transferencia"
  const isDebit = paymentData.method === "debito"
  const isCredit = paymentData.method === "credito"

  const handleDownload = () => {
    setDownloadToast(true)
    setTimeout(() => setDownloadToast(false), 3500)
  }

  return (
    <>
      <div className="section" style={{ paddingBottom: 0 }}>
        <Stepper current={4} />
      </div>
      <div className="section confirmation">
        <span className="success-mark" aria-label="Éxito">
          ✓
        </span>
        <span
          className={`status ${
            !isTransfer ? "status--success" : "status--pending"
          }`}
        >
          {!isTransfer
            ? "✓ Pago confirmado · Reserva activa"
            : "◷ Pago en verificación (Comprobante registrado)"}
        </span>
        <h1>
          {!isTransfer
            ? "¡Tu reserva ha sido confirmada con éxito!"
            : "¡Recibimos tu comprobante de reserva!"}
        </h1>
        <p>
          Hemos registrado tu reserva y enviado el itinerario con la confirmación oficial a{" "}
          <strong>
            {personalInfo.email || currentUser?.email || "tu correo electrónico"}
          </strong>
          .
        </p>

        <div className="reservation-code">
          <span>Código de reserva</span>
          <strong>{bookingCode}</strong>
          <Button
            kind="secondary"
            onClick={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
          >
            {copied ? "Copiado ✓" : "Copiar"}
          </Button>
        </div>

        {/* Resumen conciso de todo */}
        <div className="confirmation-summary-card">
          {/* Paquetes reservados */}
          <div className="confirmation-section">
            <h3>
              <span>📦</span> Paquetes Turísticos Reservados
            </h3>
            <div className="confirmation-packages-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-summary-item-row">
                  <div>
                    <strong>{item.pkg.name}</strong>
                    <small>
                      📍 {item.pkg.city} ({item.pkg.province}) · 📅 {item.date}
                    </small>
                    <small>
                      👥 {item.people}{" "}
                      {item.people === 1 ? "viajero" : "viajeros"} (${item.pkg.price}{" "}
                      c/u)
                    </small>
                  </div>
                  <div>
                    <strong
                      style={{ fontSize: "16px", color: "var(--pacific)" }}
                    >
                      ${item.total}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Información Personal (Titular) */}
          <div className="confirmation-section">
            <h3>
              <span>👤</span> Información Personal (Titular)
            </h3>
            <div className="confirmation-grid">
              <div>
                <small>Titular</small>
                <strong>
                  {personalInfo.fullName || currentUser?.name || "María Andrade"}
                </strong>
              </div>
              <div>
                <small>Cédula de identidad</small>
                <strong>{personalInfo.cedula || "1712345675"}</strong>
              </div>
              <div>
                <small>Teléfono de contacto</small>
                <strong>{personalInfo.phone || "0991234567"}</strong>
              </div>
              <div>
                <small>Correo electrónico</small>
                <strong>
                  {personalInfo.email ||
                    currentUser?.email ||
                    "maria@ejemplo.com"}
                </strong>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <small>Dirección domiciliaria</small>
                <strong>
                  {personalInfo.mainStreet && personalInfo.secondaryStreet
                    ? `${personalInfo.mainStreet} y ${personalInfo.secondaryStreet}, ${personalInfo.reference || "S/N"} · ${personalInfo.city || ""}, ${personalInfo.province || ""}`
                    : "Av. Amazonas y Naciones Unidas, N34-120 · Quito, Pichincha"}
                </strong>
              </div>
            </div>
          </div>

          {/* Viajeros Registrados */}
          <div className="confirmation-section">
            <h3>
              <span>👥</span> Viajeros Registrados ({travelersList.length || 1})
            </h3>
            <div className="confirmation-travelers-list">
              {travelersList.map((t, idx) => (
                <div key={t.id || idx} className="confirmation-traveler-item">
                  <span>
                    <strong>
                      Viajero {idx + 1}:{" "}
                      {t.fullName ||
                        (idx === 0
                          ? personalInfo.fullName || currentUser?.name
                          : "Acompañante")}
                    </strong>
                    <small style={{ marginLeft: "10px", color: "#5a6e7f" }}>
                      · Doc:{" "}
                      {t.cedula ||
                        (idx === 0 ? personalInfo.cedula : "Registrada")}
                    </small>
                  </span>
                  {t.isMinor ? (
                    <span
                      className="status status--pending"
                      style={{ fontSize: "12px", padding: "2px 8px" }}
                    >
                      Menor de edad
                    </span>
                  ) : t.isTitular ? (
                    <span
                      className="status status--pacific"
                      style={{ fontSize: "12px", padding: "2px 8px" }}
                    >
                      Titular
                    </span>
                  ) : (
                    <span
                      className="status"
                      style={{ fontSize: "12px", padding: "2px 8px" }}
                    >
                      Acompañante
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detalle de Pago y Facturación */}
          <div className="confirmation-section">
            <h3>
              <span>💳</span> Detalle del Pago y Facturación
            </h3>
            <div className="confirmation-grid">
              <div>
                <small>Método utilizado</small>
                <strong>
                  {isTransfer
                    ? `Transferencia bancaria (${
                        paymentData.bankVoucherNumber
                          ? `Comp. #${paymentData.bankVoucherNumber}`
                          : "Comprobante adjunto"
                      })`
                    : isDebit
                    ? `Tarjeta de débito (•••• ${
                        paymentData.cardNumber
                          ?.replace(/\s/g, "")
                          .slice(-4) || "4242"
                      })`
                    : `Tarjeta de crédito (•••• ${
                        paymentData.cardNumber
                          ?.replace(/\s/g, "")
                          .slice(-4) || "4242"
                      })`}
                </strong>
              </div>
              <div>
                <small>Modalidad</small>
                <strong>
                  {isTransfer
                    ? "Transferencia directa (1 pago)"
                    : isDebit
                    ? "Pago directo inmediato (sin plazos)"
                    : paymentData.installments || "1 pago corriente"}
                </strong>
              </div>
              <div>
                <small>Subtotal + IVA (15%)</small>
                <strong>
                  ${Math.round(total / 1.15)} + $
                  {total - Math.round(total / 1.15)}
                </strong>
              </div>
              <div>
                <small>Total pagado</small>
                <strong
                  style={{ fontSize: "16px", color: "var(--pacific)" }}
                >
                  ${total}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <section className="confirmation-next-steps">
          <h2>Qué sigue</h2>
          <div className="confirmation-steps-grid">
            {[
              {
                step: "1",
                title: "Emisión de voucher oficial",
                desc: "Verificamos los datos de tu reserva y emitimos tu comprobante oficial con código QR de acceso.",
              },
              {
                step: "2",
                title: "Itinerario y recomendaciones",
                desc: "Recibirás por correo el punto de encuentro exacto, horarios de salida y sugerencias de vestimenta.",
              },
              {
                step: "3",
                title: "Día del embarque",
                desc: "Presenta tu cédula física original y el código de reserva al momento de iniciar el viaje.",
              },
            ].map((s) => (
              <div className="confirmation-step-card" key={s.step}>
                <div className="confirmation-step-header">
                  <span className="confirmation-step-num">{s.step}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="confirmation-actions">
          <Button kind="primary" onClick={handleDownload}>
            Descargar comprobante en PDF
          </Button>
          <Button kind="secondary" onClick={() => go("reservas")}>
            Ver mi reserva
          </Button>
          <Button kind="quiet" onClick={() => go("inicio")}>
            Volver al inicio
          </Button>
        </div>
      </div>

      {purchaseToast && (
        <div className="toast" role="status">
          <span>
            🎉 ¡Compra realizada y confirmada con éxito! Bienvenido a tu viaje con Travel Innovation{currentUser?.name ? `, ${currentUser.name.split(" ")[0]}` : ""}.
          </span>
          <button onClick={() => setPurchaseToast(false)}>Cerrar</button>
        </div>
      )}
      {downloadToast && (
        <div className="toast" role="status">
          <span>✓ Comprobante de reserva #{bookingCode} descargado en PDF.</span>
          <button onClick={() => setDownloadToast(false)}>Cerrar</button>
        </div>
      )}
    </>
  )
}

function Reservations({
  go,
  purchases = [],
  currentUser = null,
}: {
  go: (page: Page) => void
  purchases?: PurchaseItem[]
  currentUser?: { name: string; email: string } | null
}) {
  const [activePurchaseId, setActivePurchaseId] = useState<string>(
    purchases[0]?.id || ""
  )
  const [downloadToast, setDownloadToast] = useState(false)

  // Keep activePurchaseId updated if purchases list changes
  useEffect(() => {
    if (
      purchases.length > 0 &&
      (!activePurchaseId || !purchases.some((p) => p.id === activePurchaseId))
    ) {
      setActivePurchaseId(purchases[0].id)
    }
  }, [purchases, activePurchaseId])

  const activePurchase =
    purchases.find((p) => p.id === activePurchaseId) || purchases[0]

  return (
    <>
      <PageTitle
        title="Mis compras"
        subtitle={
          currentUser
            ? `Historial de compras y reservas de ${currentUser.name}`
            : "Consulta el estado y los detalles de tus viajes adquiridos."
        }
      />

      {purchases.length === 0 ? (
        <div className="section">
          <div className="empty-purchases-card">
            <span className="empty-purchases-icon" aria-hidden="true">
              🛍️
            </span>
            <h2>No tienes compras registradas</h2>
            <p style={{ maxWidth: "480px", color: "#5a6e7f" }}>
              {currentUser
                ? `Aún no has realizado ninguna compra con esta cuenta (${currentUser.email}). Explora nuestros paquetes y reserva tu próxima aventura.`
                : "Aún no hay compras registradas en esta sesión. Adquiere un paquete turístico para ver aquí tus reservas confirmadas y detalles de viaje."}
            </p>
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button kind="primary" onClick={() => go("catalogo")}>
                Explorar paquetes
              </Button>
              <Button kind="secondary" onClick={() => go("inicio")}>
                Ir al inicio
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="section reservations-layout">
          <aside className="reservation-list">
            <h2>Mis Compras ({purchases.length})</h2>
            {purchases.map((item) => {
              const isSelected = item.id === (activePurchase?.id || "")
              const pkgTitle = item.packages.map((p) => p.name).join(", ")
              const isSuccess = item.status === "Confirmada"
              const isPending = item.status === "En verificación"
              return (
                <button
                  key={item.id}
                  className={isSelected ? "active" : ""}
                  onClick={() => setActivePurchaseId(item.id)}
                  type="button"
                >
                  <span>
                    <strong>{item.code}</strong>
                    <small
                      style={{
                        color: "#5a6e7f",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "160px",
                      }}
                    >
                      {pkgTitle}
                    </small>
                    <small style={{ fontSize: "11px", color: "#8a9ea8" }}>
                      {item.createdAt}
                    </small>
                  </span>
                  <span
                    className={`status status--${
                      isSuccess ? "success" : isPending ? "pending" : "error"
                    }`}
                  >
                    {isSuccess ? "✓ " : isPending ? "◷ " : ""}
                    {item.status}
                  </span>
                </button>
              )
            })}
          </aside>

          {activePurchase && (
            <section className="reservation-detail">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">
                    {activePurchase.code} · {activePurchase.createdAt}
                  </span>
                  <h2>{activePurchase.packages[0]?.name || "Reserva turística"}</h2>
                </div>
                <span
                  className={`status status--${
                    activePurchase.status === "Confirmada"
                      ? "success"
                      : activePurchase.status === "En verificación"
                      ? "pending"
                      : "error"
                  }`}
                >
                  {activePurchase.status === "Confirmada" ? "✓ " : "◷ "}
                  {activePurchase.status}
                </span>
              </div>

              {/* Lista de paquetes adquiridos en esta compra */}
              <div style={{ margin: "20px 0" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "var(--pacific)",
                    marginBottom: "12px",
                  }}
                >
                  Paquetes incluidos ({activePurchase.packages.length})
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {activePurchase.packages.map((pkgItem) => (
                    <div
                      key={pkgItem.id}
                      style={{
                        padding: "14px 16px",
                        border: "1px solid var(--pacific)",
                        borderRadius: "var(--radius)",
                        background: "var(--sand)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: "15px", display: "block" }}>
                          {pkgItem.name}
                        </strong>
                        <small style={{ color: "#5a6e7f", display: "block" }}>
                          📍 {pkgItem.city} ({pkgItem.province}) · 📅{" "}
                          {pkgItem.date}
                        </small>
                        <small style={{ color: "var(--abyss)" }}>
                          👥 {pkgItem.people}{" "}
                          {pkgItem.people === 1 ? "viajero" : "viajeros"} ($
                          {pkgItem.price} c/u)
                        </small>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <strong
                          style={{
                            fontSize: "17px",
                            color: "var(--pacific)",
                          }}
                        >
                          ${pkgItem.total}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="two-col" style={{ margin: "20px 0" }}>
                <div>
                  <h3>Itinerario y Logística</h3>
                  <p>
                    <strong>Fechas:</strong>{" "}
                    {activePurchase.packages[0]?.date || "Por confirmar"}
                  </p>
                  <p>
                    <strong>Punto de encuentro:</strong> Terminal turística
                    oficial · 06:00 AM
                  </p>
                  <p>
                    <strong>Guía de viaje:</strong> Guía profesional certificado
                    bilingüe asignado
                  </p>
                </div>
                <div>
                  <h3>Datos del Pago</h3>
                  <p>
                    <strong>Método:</strong> {activePurchase.paymentMethodLabel}
                  </p>
                  {activePurchase.installments && (
                    <p>
                      <strong>Modalidad:</strong>{" "}
                      {activePurchase.installments}
                    </p>
                  )}
                  {activePurchase.cardLast4 && (
                    <p>
                      <strong>Tarjeta:</strong> •••• {activePurchase.cardLast4}
                    </p>
                  )}
                  {activePurchase.voucherNumber && (
                    <p>
                      <strong>Comprobante:</strong> #
                      {activePurchase.voucherNumber}
                    </p>
                  )}
                  <p>
                    <strong>Total pagado:</strong>{" "}
                    <span
                      style={{
                        color: "var(--pacific)",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      ${activePurchase.total},00
                    </span>
                  </p>
                </div>
              </div>

              {activePurchase.travelers &&
                activePurchase.travelers.length > 0 && (
                  <div style={{ margin: "20px 0" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        color: "var(--pacific)",
                        marginBottom: "10px",
                      }}
                    >
                      Viajeros registrados ({activePurchase.travelers.length})
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {activePurchase.travelers.map((t, idx) => (
                        <div
                          key={t.id || idx}
                          style={{
                            padding: "8px 12px",
                            background: "var(--breeze)",
                            border: "1px solid var(--pacific)",
                            borderRadius: "6px",
                            fontSize: "13.5px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            <strong>Viajero {idx + 1}:</strong>{" "}
                            {t.fullName || "Sin nombre registrado"} · Doc:{" "}
                            {t.cedula || "N/A"}
                          </span>
                          {t.isMinor ? (
                            <span
                              className="status status--pending"
                              style={{ fontSize: "11px", padding: "1px 6px" }}
                            >
                              Menor de edad
                            </span>
                          ) : idx === 0 ? (
                            <span
                              className="status status--success"
                              style={{ fontSize: "11px", padding: "1px 6px" }}
                            >
                              Titular
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              <div className="split-actions" style={{ marginTop: "24px" }}>
                <Button
                  kind="secondary"
                  type="button"
                  onClick={() => {
                    setDownloadToast(true)
                    setTimeout(() => setDownloadToast(false), 3000)
                  }}
                >
                  Descargar voucher PDF
                </Button>
                <Button kind="primary" type="button" onClick={() => go("soporte")}>
                  Abrir ticket de soporte
                </Button>
              </div>
            </section>
          )}
        </div>
      )}

      {downloadToast && (
        <div className="toast" role="status">
          <span>
            ✓ Voucher de reserva #{activePurchase?.code} descargado
            exitosamente.
          </span>
          <button onClick={() => setDownloadToast(false)}>Cerrar</button>
        </div>
      )}
    </>
  )
}

const policyGroups = [
  {
    title: "Cuándo NO se aceptan cancelaciones ni reembolsos",
    icon: "×",
    items: [
      [
        "No presentación",
        "No presentarse en el punto de encuentro a la hora del itinerario, con tolerancia exacta de 15 minutos.",
      ],
      [
        "Falta de documentación",
        "No presentar cédula física y original, o los documentos requeridos para menores.",
      ],
      [
        "Cancelaciones tardías",
        "Solicitudes con menos de 72 horas hábiles antes del inicio del tour.",
      ],
      [
        "Fuerza mayor parcial o clima",
        "Alteraciones menores o tráfico cuando se proveyeron el destino principal y el alojamiento.",
      ],
      [
        "Abandono voluntario",
        "Retiro una vez iniciado el tour por motivos personales o cambio de opinión.",
      ],
    ],
  },
  {
    title: "Cuándo SÍ se aceptan cancelaciones, reprogramaciones o reembolsos",
    icon: "✓",
    items: [
      [
        "Incumplimiento operativo",
        "La agencia cancela el paquete, por ejemplo, al no alcanzar el mínimo de 15 personas.",
      ],
      [
        "Fuerza mayor restrictiva",
        "Cierre total de vías principales verificable por ECU911 o el Ministerio de Transporte.",
      ],
      [
        "Emergencia médica grave",
        "Certificado médico oficial del IESS o MSP ingresado hasta 24 horas antes de la salida.",
      ],
      [
        "Baja de categoría no consensuada",
        "Cambio grave a alojamiento de categoría inferior sin aviso ni compensación.",
      ],
    ],
  },
]

function Policies({ go }: { go: (page: Page) => void }) {
  return (
    <>
      <PageTitle
        title="Políticas de reserva"
        subtitle="Condiciones claras para cancelar, reprogramar o solicitar un reembolso."
      />
      <div className="section policy-content">
        {policyGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.items.map(([title, text]) => (
              <details key={title}>
                <summary>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      className={`policy-icon ${
                        group.icon === "✓" ? "success" : "error"
                      }`}
                    >
                      {group.icon}
                    </span>
                    {title}
                  </span>
                  <span className="summary-caret" aria-hidden="true">▾</span>
                </summary>
                <div className="accordion-body">
                  <p>{text}</p>
                </div>
              </details>
            ))}
          </section>
        ))}
        <section style={{ marginTop: "40px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span className="eyebrow">Procedimiento paso a paso</span>
            <h2 style={{ margin: "4px 0 8px 0", color: "var(--pacific)" }}>
              Cómo se tramita una solicitud o reembolso
            </h2>
            <p className="muted" style={{ margin: 0, fontSize: "0.95rem" }}>
              Conoce las etapas, plazos reglamentarios y canales de acreditación para gestionar tu caso de forma clara y sin complicaciones.
            </p>
          </div>

          <div className="timeline">
            <article>
              <span>1</span>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Paso 1: Notificación y Apertura del Caso</h3>
                  <span className="status status--pacific">Canal oficial de soporte</span>
                </div>
                <p style={{ marginBottom: "12px" }}>
                  Envía tu requerimiento a través del sistema de soporte indicando el código de reserva (ej. TI-2026-XXXX) y adjuntando la documentación de respaldo.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "12px",
                    background: "var(--sand)",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(27,73,101,0.15)",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      ⏱️ Plazos de solicitud
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Hasta 72 horas de anticipación para cancelaciones voluntarias; máx. 48 horas hábiles tras el retorno para reclamos operativos.
                    </span>
                  </div>
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      📎 Documentos requeridos
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Cédula del titular, comprobante de pago bancario y certificados de respaldo (médico, fuerza mayor o fotos).
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <span>2</span>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Paso 2: Evaluación y Resolución</h3>
                  <span className="status status--pacific">Respuesta en 24-48h</span>
                </div>
                <p style={{ marginBottom: "12px" }}>
                  Nuestro equipo de operaciones analiza las causas y los antecedentes con los operadores locales para darte una solución oportuna.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "12px",
                    background: "var(--sand)",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(27,73,101,0.15)",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      🔄 Reprogramación prioritaria
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Te ofrecemos posponer la fecha del viaje sin penalidades dentro de una vigencia de 6 a 12 meses.
                    </span>
                  </div>
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      ⚖️ Liquidación de reembolso
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Si corresponde devolución según los términos, se liquida el valor neto deducidos los costos no recuperables.
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <span>3</span>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Paso 3: Acreditación del Reembolso</h3>
                  <span className="status status--success">✓ Directo a tu cuenta</span>
                </div>
                <p style={{ marginBottom: "12px" }}>
                  Las devoluciones se realizan exclusivamente por el mismo método con el que se efectuó el pago original, a nombre del titular de la reserva.
                </p>
                <div className="timeline-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: "45%" }}>Método de acreditación</th>
                        <th style={{ width: "25%" }}>Plazo estimado</th>
                        <th style={{ width: "30%" }}>Observaciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Transferencia bancaria</strong>
                          <div
                            style={{
                              fontSize: "0.82rem",
                              color: "var(--abyss)",
                              opacity: 0.8,
                            }}
                          >
                            A cuenta del titular registrado
                          </div>
                        </td>
                        <td>
                          <span
                            className="status status--success"
                            style={{ fontWeight: 600 }}
                          >
                            3 a 5 días hábiles
                          </span>
                        </td>
                        <td style={{ fontSize: "0.85rem" }}>
                          Sujeto a confirmación bancaria interbancaria SPI.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Reversión a tarjeta de crédito/débito</strong>
                          <div
                            style={{
                              fontSize: "0.82rem",
                              color: "var(--abyss)",
                              opacity: 0.8,
                            }}
                          >
                            A través de la pasarela de pagos
                          </div>
                        </td>
                        <td>
                          <span
                            className="status status--pacific"
                            style={{ fontWeight: 600 }}
                          >
                            7 a 15 días hábiles
                          </span>
                        </td>
                        <td style={{ fontSize: "0.85rem" }}>
                          El tiempo exacto depende del banco emisor de tu tarjeta.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <Button kind="primary" onClick={() => go("soporte")}>
              Abrir ticket de soporte
            </Button>
            <Button kind="secondary" onClick={() => go("tickets")}>
              Ver mis tickets activos
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

const SUPPORT_REASONS = [
  "No presentación",
  "Incumplimiento operativo",
  "Fuerza mayor restrictiva",
  "Fuerza mayor parcial o clima",
  "Falta de documentación",
  "Emergencia médica grave",
  "Baja de categoría no consensuada",
  "Cancelaciones tardías",
  "Cancelación voluntaria",
  "Abandono voluntario",
].sort((a, b) => a.localeCompare(b, "es"))

function Support({
  go,
  purchases = [],
  supportTickets = [],
  onTicketCreated,
}: {
  go: (page: Page) => void
  purchases?: PurchaseItem[]
  supportTickets?: SupportTicket[]
  onTicketCreated?: (ticket: SupportTicket) => void
}) {
  const [selectedBookingCode, setSelectedBookingCode] = useState(() => {
    return purchases.length > 0 ? purchases[0].code : ""
  })
  const [manualBookingCode, setManualBookingCode] = useState("")
  const [reason, setReason] = useState(() => SUPPORT_REASONS[0])
  const [description, setDescription] = useState("")
  const [evidenceUploaded, setEvidenceUploaded] = useState(false)
  const [sent, setSent] = useState(false)
  const [newTicketNumber, setNewTicketNumber] = useState("")

  const activeBookingCode =
    purchases.length > 0 && selectedBookingCode !== "otro"
      ? selectedBookingCode
      : manualBookingCode || (purchases[0]?.code ?? "ST-10428")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const ticketNum = `TK-${Math.floor(10000 + Math.random() * 90000)}`
    setNewTicketNumber(ticketNum)
    const ticketObj: SupportTicket = {
      id: `tk-${Date.now()}`,
      ticketNumber: ticketNum,
      bookingCode: activeBookingCode,
      reason: reason,
      description:
        description.trim() ||
        "Solicitud de asistencia técnica, revisión o soporte operativo.",
      evidenceUploaded: evidenceUploaded,
      createdAt: new Date().toLocaleDateString("es-EC", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "En revisión",
      responseEstimated: "24 a 48 horas hábiles",
    }
    onTicketCreated?.(ticketObj)
    setSent(true)
  }

  // Si ya existe un ticket registrado y no se acaba de enviar en esta pantalla
  if (supportTickets && supportTickets.length > 0 && !sent) {
    const existingTicket = supportTickets[0]
    return (
      <>
        <PageTitle
          title="Soporte por ticket"
          subtitle="Atención y seguimiento de solicitudes de servicio."
        />
        <div className="section" style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div className="inline-alert" style={{ marginBottom: "20px" }}>
            ⚠️ <strong>Ya posees un ticket registrado en proceso</strong>: Actualmente tienes activo el ticket{" "}
            <strong>{existingTicket.ticketNumber}</strong> correspondiente a la reserva{" "}
            <strong>{existingTicket.bookingCode}</strong>. Por políticas de atención al cliente, únicamente se permite enviar y mantener un ticket activo a la vez para su revisión.
          </div>

          <article className="ticket-card">
            <div className="ticket-header">
              <div>
                <span style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--pacific)" }}>
                  {existingTicket.ticketNumber}
                </span>
                <span className="status status--pending" style={{ marginLeft: "10px" }}>
                  ⏳ {existingTicket.status}
                </span>
                <span className="eyebrow" style={{ display: "block", marginTop: "4px" }}>
                  Reserva: <strong>{existingTicket.bookingCode}</strong> · Enviado el {existingTicket.createdAt}
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.82rem", color: "#64748b", display: "block" }}>
                  Respuesta estimada
                </span>
                <strong style={{ fontSize: "0.9rem", color: "var(--pacific)" }}>
                  {existingTicket.responseEstimated || "24 a 48 horas hábiles"}
                </strong>
              </div>
            </div>

            <div
              style={{
                background: "var(--sand)",
                padding: "14px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(27,73,101,0.15)",
                marginTop: "12px",
              }}
            >
              <strong style={{ color: "var(--pacific)", display: "block", marginBottom: "4px" }}>
                Motivo: {existingTicket.reason}
              </strong>
              <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--abyss)", lineHeight: 1.5 }}>
                {existingTicket.description}
              </p>
            </div>

            <div
              style={{
                paddingTop: "12px",
                borderTop: "1px dashed rgba(27,73,101,0.2)",
                marginTop: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
                {existingTicket.evidenceUploaded ? "✓ Documentos de respaldo adjuntos" : "Sin archivos adjuntos"}
              </span>
              <span className="muted" style={{ fontSize: "0.82rem", fontStyle: "italic" }}>
                🔒 Ticket en proceso de atención (no modificable)
              </span>
            </div>
          </article>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button kind="primary" onClick={() => go("tickets")}>
              Ver estado en Mis tickets
            </Button>
            <Button kind="secondary" onClick={() => go("reservas")}>
              Volver a mis compras
            </Button>
          </div>
        </div>
      </>
    )
  }

  if (sent)
    return (
      <>
        <div className="section confirmation">
          <span className="success-mark">✓</span>
          <h1>Ticket recibido</h1>
          <p>
            Tu número de ticket es{" "}
            <strong>{newTicketNumber || "TK-10428"}</strong> para la reserva{" "}
            <strong>{activeBookingCode}</strong>.
          </p>
          <div className="important-note">
            <strong>Siguiente paso</strong>
            <p>
              Revisaremos tus documentos y responderemos por correo
              en hasta 2 días hábiles. Recuerda que este ticket ya ha quedado registrado de manera definitiva y no admite modificaciones. Puedes dar seguimiento al avance en la
              sección <strong>Mis tickets</strong>.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <Button kind="primary" onClick={() => go("tickets")}>
              Ver mis tickets
            </Button>
            <Button kind="secondary" onClick={() => go("reservas")}>
              Volver a mis compras
            </Button>
          </div>
        </div>
      </>
    )

  return (
    <>
      <PageTitle
        title="Soporte por ticket"
        subtitle="Cuéntanos qué necesitas y adjunta los documentos del caso."
      />
      <div className="section support-layout">
        <form className="form-panel" onSubmit={handleSubmit}>
          {purchases.length > 0 ? (
            <>
              <SelectField
                label="Código de reserva"
                value={selectedBookingCode}
                onChange={(val) => setSelectedBookingCode(val)}
                help="Selecciona el código de tu compra realizada o ingresa otro manualmente."
              >
                {purchases
                  .map((p) => p.code)
                  .sort((a, b) => a.localeCompare(b, "es"))
                  .map((code) => {
                    const purchase = purchases.find((p) => p.code === code)
                    const pkgNames =
                      purchase?.packages.map((pkg) => pkg.name).join(", ") ||
                      "Compra confirmada"
                    return (
                      <option key={code} value={code}>
                        {code} — {pkgNames}
                      </option>
                    )
                  })}
                <option value="otro">Otro código (ingresar manualmente)</option>
              </SelectField>

              {selectedBookingCode === "otro" && (
                <Field
                  label="Código de reserva manual"
                  placeholder="Ej. TI-2026-8K3Q2M"
                  value={manualBookingCode}
                  onChange={setManualBookingCode}
                  help="Escribe el código tal como aparece en tu correo o comprobante."
                  required
                />
              )}
            </>
          ) : (
            <Field
              label="Código de reserva"
              placeholder="Ej. TI-2026-8K3Q2M"
              value={manualBookingCode}
              onChange={setManualBookingCode}
              help="Lo encuentras en tu correo de confirmación o voucher de compra."
              required
            />
          )}

          <SelectField label="Motivo" value={reason} onChange={setReason}>
            {SUPPORT_REASONS.map((motivo) => (
              <option key={motivo} value={motivo}>
                {motivo}
              </option>
            ))}
          </SelectField>
          {(reason === "Cancelación voluntaria" ||
            reason === "Cancelaciones tardías") && (
            <div className="inline-alert" role="alert">
              <strong>⚠️ Revisa el plazo antes de enviar</strong>
              <span>
                Si faltan menos de 72 horas hábiles, la cancelación voluntaria
                no admite reembolso. Puedes solicitar una revisión o consultar
                opciones de reprogramación.
              </span>
            </div>
          )}
          <label className="field">
            <span className="field__label">Descripción</span>
            <textarea
              rows={5}
              placeholder="Describe lo ocurrido y qué solución esperas."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span className="field__help">
              Incluye fechas y detalles relevantes.
            </span>
          </label>
          <div className="field">
            <span className="field__label">Evidencias y respaldos</span>
            <div
              className="upload-zone"
              style={{ minHeight: "170px", cursor: "pointer" }}
            >
              <span className="upload-icon" aria-hidden="true">
                ↑
              </span>
              <strong>Arrastra tus archivos de evidencia aquí</strong>
              <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                Formatos JPG, PNG o PDF (máx. 10 MB)
              </span>
              <Button
                kind="secondary"
                type="button"
                onClick={() => setEvidenceUploaded(true)}
              >
                {evidenceUploaded ? "Cambiar archivos" : "Seleccionar archivos"}
              </Button>
            </div>
            {evidenceUploaded && (
              <div className="file-progress" role="status">
                <div>
                  <span>evidencias_y_comprobante_caso.pdf</span>
                  <strong>100%</strong>
                </div>
                <div className="progress">
                  <span />
                </div>
                <span className="status status--success">
                  ✓ Documentos adjuntos listos
                </span>
              </div>
            )}
            <span className="field__help">
              Puedes subir comprobante de pago, certificado médico, fotografías, denuncias u otros documentos de respaldo.
            </span>
          </div>
          <Button kind="primary" type="submit">
            Enviar ticket
          </Button>
        </form>
        <aside className="support-help">
          <h2>Antes de enviar</h2>
          <p>Ten a mano tu código de reserva y los respaldos de tu caso.</p>
          <button className="text-link" onClick={() => go("politicas")}>
            Consultar políticas de reserva
          </button>
          <hr />
          <h3>¿Necesitas ayuda?</h3>
          <p>Lunes a viernes, 09:00 a 18:00</p>
          <p>02 2456456</p>
          <p>travelinnovation.tamc@gmail.com</p>
        </aside>
      </div>
    </>
  )
}

function Tickets({
  go,
  tickets = [],
}: {
  go: (page: Page) => void
  tickets?: SupportTicket[]
}) {
  return (
    <>
      <PageTitle
        title="Mis tickets de soporte"
        subtitle="Monitorea tus requerimientos, solicitudes de reprogramación y trámites en curso."
      />
      <div className="section" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div>
            <h2 style={{ margin: 0, color: "var(--pacific)" }}>
              Tickets registrados ({tickets.length})
            </h2>
            <p className="muted" style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>
              Estado y respuestas actualizadas por el equipo de atención al viajero.
            </p>
          </div>
          {tickets.length === 0 ? (
            <Button kind="primary" onClick={() => go("soporte")}>
              + Abrir ticket de soporte
            </Button>
          ) : (
            <span
              className="status status--pacific"
              style={{ fontSize: "0.85rem", fontWeight: 700 }}
            >
              ✓ Límite de 1 ticket activo alcanzado
            </span>
          )}
        </div>

        {tickets.length === 0 ? (
          <div
            className="empty-state"
            style={{
              padding: "48px 24px",
              textAlign: "center",
              background: "#ffffff",
              borderRadius: "var(--radius)",
              border: "1px solid var(--pacific)",
            }}
          >
            <span
              style={{ fontSize: "42px", display: "block", marginBottom: "12px" }}
            >
              📋
            </span>
            <h3 style={{ color: "var(--pacific)", marginBottom: "8px" }}>
              No tienes tickets registrados
            </h3>
            <p className="muted" style={{ maxWidth: "440px", margin: "0 auto 20px" }}>
              Si necesitas gestionar una cancelación, cambio de fecha o consultar sobre tu viaje, puedes generar un ticket de atención aquí.
            </p>
            <Button kind="primary" onClick={() => go("soporte")}>
              Crear ticket de soporte
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {tickets.map((t) => {
              const statusClass =
                t.status === "Resuelto"
                  ? "status--success"
                  : t.status === "En trámite"
                  ? "status--pacific"
                  : "status--pending"

              return (
                <article className="ticket-card" key={t.id}>
                  <div className="ticket-header">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            color: "var(--pacific)",
                          }}
                        >
                          {t.ticketNumber}
                        </span>
                        <span className={`status ${statusClass}`}>
                          {t.status === "Resuelto" && "✓ "}
                          {t.status === "En revisión" && "⏳ "}
                          {t.status === "En trámite" && "⚙️ "}
                          {t.status}
                        </span>
                      </div>
                      <span
                        className="eyebrow"
                        style={{ marginTop: "4px", display: "inline-block" }}
                      >
                        Reserva: <strong>{t.bookingCode}</strong> · Enviado el{" "}
                        {t.createdAt}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "#64748b",
                          display: "block",
                        }}
                      >
                        Tiempo estimado de respuesta
                      </span>
                      <strong
                        style={{ fontSize: "0.9rem", color: "var(--pacific)" }}
                      >
                        {t.responseEstimated || "24 a 48 horas hábiles"}
                      </strong>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--sand)",
                      padding: "14px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(27,73,101,0.15)",
                    }}
                  >
                    <div style={{ marginBottom: "6px" }}>
                      <strong
                        style={{ fontSize: "0.95rem", color: "var(--pacific)" }}
                      >
                        Motivo: {t.reason}
                      </strong>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.92rem",
                        color: "var(--abyss)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                      paddingTop: "6px",
                      borderTop: "1px dashed rgba(27,73,101,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {t.evidenceUploaded ? (
                        <>
                          <span style={{ color: "var(--success)" }}>✓</span>{" "}
                          Documentos y evidencias adjuntos
                        </>
                      ) : (
                        <>Sin archivos adjuntos</>
                      )}
                    </span>
                    <span
                      className="muted"
                      style={{ fontSize: "0.82rem", fontStyle: "italic" }}
                    >
                      🔒 Ticket registrado (no modificable)
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <div style={{ marginTop: "28px", textAlign: "center" }}>
          <Button kind="secondary" onClick={() => go("reservas")}>
            Volver a mis compras
          </Button>
        </div>
      </div>
    </>
  )
}

function StateDiagram() {
  const nodes = [
    "Inicio",
    "Catálogo",
    "Detalle",
    "Carrito",
    "Información Personal",
    "Viajeros",
    "Pago de la reserva",
    "Confirmación",
    "Mis reservas",
    "Soporte",
    "Resolución",
  ]
  return (
    <>
      <PageTitle
        title="Diagrama de estados"
        subtitle="Mapa del flujo principal y sus rutas alternativas."
      />
      <div className="section diagram">
        <div className="diagram-flow">
          {nodes.map((node, index) => (
            <div className="diagram-step" key={node}>
              <span>{node}</span>
              {index < nodes.length - 1 && <b aria-hidden="true">→</b>}
              {node === "Información Personal" && (
                <small>Datos del titular y facturación</small>
              )}
              {node === "Confirmación" && <small>Pago en verificación</small>}
              {node === "Resolución" && <small>Reprogramar / Reembolso</small>}
            </div>
          ))}
        </div>
        <div className="diagram-branches">
          <article>
            <strong>Carrito vacío</strong>
            <span>→</span>
            <strong>Catálogo</strong>
          </article>
          <article>
            <strong>Error de validación</strong>
            <span>→</span>
            <strong>Mismo paso</strong>
          </article>
        </div>
      </div>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("inicio")
  const [previousPage, setPreviousPage] = useState<Page>("catalogo")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [purchases, setPurchases] = useState<PurchaseItem[]>([])
  const [lastPurchasedItems, setLastPurchasedItems] = useState<CartItem[]>([])
  const [lastPurchasedTravelers, setLastPurchasedTravelers] = useState<TravelerData[]>([])
  const [lastPurchasedPayment, setLastPurchasedPayment] = useState<PaymentDetails | null>(null)
  const [catalogFilters, setCatalogFilters] = useState<CatalogFilterState>(
    DEFAULT_CATALOG_FILTERS,
  )
  const [selectedPackage, setSelectedPackage] = useState<PackageItem>(
    packages[4],
  )
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<{
    name: string
    email: string
  } | null>(null)
  const [accountCreatedToast, setAccountCreatedToast] = useState<string | null>(null)

  useEffect(() => {
    if (accountCreatedToast) {
      const timer = setTimeout(() => setAccountCreatedToast(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [accountCreatedToast])

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    email: "",
    phone: "",
    cedula: "",
    province: "",
    city: "",
    mainStreet: "",
    secondaryStreet: "",
    reference: "",
  })

  const [travelersList, setTravelersList] = useState<TravelerData[]>([])

  const [paymentData, setPaymentData] = useState<PaymentDetails>({
    method: "credito",
    cardNumber: "",
    cardHolder: "",
    cardExpiry: "",
    cardCvv: "",
    installments: "1 pago corriente (sin recargo)",
    bankVoucherNumber: "",
    bankVoucherUploaded: false,
  })

  const [confirmedBookingCode, setConfirmedBookingCode] = useState(() =>
    generateBookingCode()
  )

  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([])

  const handleCreateTicket = (ticket: SupportTicket) => {
    setSupportTickets((prev) => [ticket, ...prev])
  }

  // Sync personal info when user changes
  useEffect(() => {
    if (currentUser) {
      setPersonalInfo((prev) => ({
        ...prev,
        fullName: prev.fullName || currentUser.name,
        email: prev.email || currentUser.email,
      }))
    }
  }, [currentUser])

  // Sync active user cart, purchases, and personal info to localStorage whenever they change
  useEffect(() => {
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: cartItems,
          purchases: purchases,
          savedPersonalInfo: personalInfo,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }
  }, [cartItems, purchases, currentUser, personalInfo])

  const handleSavePersonalInfo = (info: PersonalInfo) => {
    setPersonalInfo(info)
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          ...(currentAccounts[emailKey] || { cart: [], purchases: [] }),
          savedPersonalInfo: info,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }
  }

  const handleLoginSuccess = (user: { name: string; email: string }) => {
    const currentAccounts = getStoredAccounts()
    const emailKey = user.email.trim().toLowerCase()
    const existing = currentAccounts[emailKey]

    const regUsers = getRegisteredUsers()
    const regRecord = regUsers[emailKey]
    const regFullName = regRecord ? regRecord.fullName : user.name

    if (existing) {
      // Account exists: restore that account's cart, purchases, and personal info
      let mergedCart = [...(existing.cart || [])]
      if (cartItems.length > 0) {
        const existingPkgIds = new Set(mergedCart.map((c) => c.pkg.id))
        const newGuestItems = cartItems.filter(
          (c) => !existingPkgIds.has(c.pkg.id)
        )
        mergedCart = [...mergedCart, ...newGuestItems]
      }
      setCartItems(mergedCart)
      setPurchases(existing.purchases || [])

      if (existing.savedPersonalInfo) {
        setPersonalInfo({
          ...existing.savedPersonalInfo,
          fullName: regFullName,
          email: user.email,
        })
      } else {
        setPersonalInfo({
          fullName: regFullName,
          email: user.email,
          phone: "",
          cedula: "",
          province: "",
          city: "",
          mainStreet: "",
          secondaryStreet: "",
          reference: "",
        })
      }

      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: mergedCart,
          purchases: existing.purchases || [],
          savedPersonalInfo: existing.savedPersonalInfo
            ? { ...existing.savedPersonalInfo, fullName: regFullName, email: user.email }
            : undefined,
        },
      }
      saveStoredAccounts(updatedAccounts)
    } else {
      // Brand new account created: assign own isolated cart, empty purchases, empty personal info
      const initialCart = [...cartItems]
      const newAccountData: UserAccountData = {
        cart: initialCart,
        purchases: [],
        savedPersonalInfo: undefined,
      }
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: newAccountData,
      }
      saveStoredAccounts(updatedAccounts)
      setCartItems(initialCart)
      setPurchases([])
      setPersonalInfo({
        fullName: regFullName,
        email: user.email,
        phone: "",
        cedula: "",
        province: "",
        city: "",
        mainStreet: "",
        secondaryStreet: "",
        reference: "",
      })
      setAccountCreatedToast(
        `🎉 ¡Cuenta creada con éxito! Bienvenido a Travel Innovation, ${regFullName.split(" ")[0] || "viajero"}.`
      )
    }

    setCurrentUser({ name: regFullName, email: user.email })
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    // When logging out: persist current account cart, purchases, and personal info
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: cartItems,
          purchases: purchases,
          savedPersonalInfo: personalInfo,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }

    // Reset session states for fresh guest or next user
    setCurrentUser(null)
    setCartItems([])
    setPurchases([])
    setLastPurchasedItems([])
    setLastPurchasedTravelers([])
    setLastPurchasedPayment(null)
    setPersonalInfo({
      fullName: "",
      email: "",
      phone: "",
      cedula: "",
      province: "",
      city: "",
      mainStreet: "",
      secondaryStreet: "",
      reference: "",
    })
    setTravelersList([])
    setSupportTickets([])
    setPaymentData({
      method: "credito",
      cardNumber: "",
      cardHolder: "",
      cardExpiry: "",
      cardCvv: "",
      installments: "1 pago corriente (sin recargo)",
      bankVoucherNumber: "",
      bankVoucherUploaded: false,
    })
    go("inicio")
  }

  const handleAddToCart = (item: {
    pkg: PackageItem
    date: string
    people: number
    total: number
  }) => {
    const newItem: CartItem = {
      id: `${item.pkg.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ...item,
    }
    setCartItems((prev) => [...prev, newItem])

    // Requirement 2: Ensure any subsequent purchase has fresh blank travelers and payment data
    setTravelersList([])
    setPaymentData({
      method: "credito",
      cardNumber: "",
      cardHolder: "",
      cardExpiry: "",
      cardCvv: "",
      installments: "1 pago corriente (sin recargo)",
      bankVoucherNumber: "",
      bankVoucherUploaded: false,
    })
  }

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setTravelersList([])
  }

  const handleUpdateCartItemPeople = (id: string, newPeople: number) => {
    const validPeople = Math.min(20, Math.max(1, newPeople))
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              people: validPeople,
              total: validPeople * item.pkg.price,
            }
          : item
      )
    )
    setTravelersList([])
  }

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.total, 0)
  }, [cartItems])

  const go = (next: Page) => {
    if (next === "detalle") {
      setPreviousPage(page)
    }
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSearch = (filters: SearchFilters) => {
    setCatalogFilters({
      region: filters.region || "",
      province: filters.province || "",
      city: filters.city || "",
      dateRange: filters.dateRange || null,
      dateActive: Boolean(filters.dateRange),
      minPrice: 100,
      maxPrice: 900,
      sortBy: "Recomendados",
      currentPage: 1,
    })
    go("catalogo")
  }

  const handleViewPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg)
    go("detalle")
  }

  const handleConfirmReservation = (
    code: string,
    finalPayment: PaymentDetails
  ) => {
    const finalCode = code || generateBookingCode()
    setConfirmedBookingCode(finalCode)

    const now = new Date()
    const day = String(now.getDate()).padStart(2, "0")
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
    const monthStr = months[now.getMonth()]
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, "0")
    const mins = String(now.getMinutes()).padStart(2, "0")
    const formattedDate = `${day} ${monthStr} ${year}, ${hours}:${mins}`

    const isTransfer = finalPayment.method === "transferencia"
    const methodLabel =
      finalPayment.method === "transferencia"
        ? "Transferencia bancaria"
        : finalPayment.method === "debito"
        ? "Tarjeta de débito"
        : "Tarjeta de crédito"

    const cleanCard = finalPayment.cardNumber?.replace(/\s/g, "") || ""
    const cardLast4 = cleanCard ? cleanCard.slice(-4) : undefined

    const newPurchase: PurchaseItem = {
      id: `purchase-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      code: finalCode,
      createdAt: formattedDate,
      status: isTransfer ? "En verificación" : "Confirmada",
      packages: cartItems.map((item) => ({
        id: item.pkg.id,
        name: item.pkg.name,
        region: item.pkg.region,
        city: item.pkg.city,
        province: item.pkg.province,
        date: item.date,
        people: item.people,
        price: item.pkg.price,
        total: item.total,
      })),
      total: cartTotal || 378,
      paymentMethod: finalPayment.method,
      paymentMethodLabel: methodLabel,
      installments: finalPayment.installments,
      voucherNumber: finalPayment.bankVoucherNumber,
      cardLast4: cardLast4,
      titular: {
        name: personalInfo.fullName || currentUser?.name || "Titular de la reserva",
        email: personalInfo.email || currentUser?.email || "correo@ejemplo.com",
        phone: personalInfo.phone || "0991234567",
        cedula: personalInfo.cedula || "1712345675",
        address: personalInfo.mainStreet
          ? `${personalInfo.mainStreet} y ${personalInfo.secondaryStreet || ""}, ${personalInfo.city || ""} ${personalInfo.province || ""}`.trim()
          : "Quito, Pichincha",
      },
      travelers:
        travelersList.length > 0
          ? travelersList
          : [
              {
                id: "t-1",
                slotNumber: 1,
                packageTitle: cartItems[0]?.pkg.name || "Aventura en Baños",
                isTitular: true,
                fullName:
                  personalInfo.fullName ||
                  currentUser?.name ||
                  "Titular de la reserva",
                cedula: personalInfo.cedula || "1712345675",
                isMinor: false,
              },
            ],
    }

    // Save snapshot of current purchase for confirmation screen
    setLastPurchasedItems([...cartItems])
    setLastPurchasedTravelers([...travelersList])
    setLastPurchasedPayment({ ...finalPayment })

    // Add to purchases and empty cart
    setPurchases((prev) => [newPurchase, ...prev])
    setCartItems([])

    // Requirement 2: Reset travelers and payment data so subsequent purchases start blank
    setTravelersList([])
    setPaymentData({
      method: "credito",
      cardNumber: "",
      cardHolder: "",
      cardExpiry: "",
      cardCvv: "",
      installments: "1 pago corriente (sin recargo)",
      bankVoucherNumber: "",
      bankVoucherUploaded: false,
    })
  }

  const content = useMemo(() => {
    switch (page) {
      case "inicio":
        return (
          <Home
            go={go}
            onSearch={handleSearch}
            onViewPackage={handleViewPackage}
          />
        )
      case "catalogo":
        return (
          <Catalog
            go={go}
            filters={catalogFilters}
            onUpdateFilters={setCatalogFilters}
            onResetFilters={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
            onViewPackage={handleViewPackage}
          />
        )
      case "catalogo-costa":
      case "catalogo-sierra":
      case "catalogo-amazonia":
      case "catalogo-galapagos": {
        const regionMap: Record<
          string,
          "Costa" | "Sierra" | "Amazonía" | "Galápagos"
        > = {
          "catalogo-costa": "Costa",
          "catalogo-sierra": "Sierra",
          "catalogo-amazonia": "Amazonía",
          "catalogo-galapagos": "Galápagos",
        }
        const regionName = regionMap[page] || ""
        return (
          <Catalog
            go={go}
            filters={{ ...catalogFilters, region: regionName }}
            onUpdateFilters={setCatalogFilters}
            onResetFilters={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
            onViewPackage={handleViewPackage}
          />
        )
      }
      case "detalle":
        return (
          <Detail
            pkg={selectedPackage}
            go={go}
            onBack={() => go(previousPage || "catalogo")}
            addToCart={handleAddToCart}
          />
        )
      case "carrito":
        return (
          <Cart
            go={go}
            items={cartItems}
            onRemoveItem={handleRemoveCartItem}
            onUpdatePeople={handleUpdateCartItemPeople}
            onViewPackage={handleViewPackage}
            currentUser={currentUser}
            onLoginSuccess={handleLoginSuccess}
          />
        )
      case "identificacion":
        return (
          <Identification
            go={go}
            total={cartTotal || 378}
            currentUser={currentUser}
            personalInfo={personalInfo}
            onSavePersonalInfo={handleSavePersonalInfo}
          />
        )
      case "viajeros":
        return (
          <Travelers
            go={go}
            total={cartTotal || 378}
            currentUser={currentUser}
            personalInfo={personalInfo}
            cartItems={cartItems}
            travelersList={travelersList}
            onSaveTravelers={setTravelersList}
          />
        )
      case "pago":
        return (
          <Payment
            go={go}
            total={cartTotal || 378}
            currentUser={currentUser}
            personalInfo={personalInfo}
            cartItems={cartItems}
            travelersList={travelersList}
            paymentData={paymentData}
            onSavePaymentData={setPaymentData}
            onConfirmReservation={handleConfirmReservation}
          />
        )
      case "confirmacion":
        return (
          <Confirmation
            go={go}
            total={
              lastPurchasedItems.reduce((acc, c) => acc + c.total, 0) ||
              cartTotal ||
              378
            }
            currentUser={currentUser}
            personalInfo={personalInfo}
            cartItems={
              lastPurchasedItems.length > 0 ? lastPurchasedItems : cartItems
            }
            travelersList={
              lastPurchasedTravelers.length > 0
                ? lastPurchasedTravelers
                : travelersList
            }
            paymentData={lastPurchasedPayment || paymentData}
            bookingCode={confirmedBookingCode}
          />
        )
      case "reservas":
        return (
          <Reservations
            go={go}
            purchases={purchases}
            currentUser={currentUser}
          />
        )
      case "politicas":
        return <Policies go={go} />
      case "soporte":
        return (
          <Support
            go={go}
            purchases={purchases}
            supportTickets={supportTickets}
            onTicketCreated={handleCreateTicket}
          />
        )
      case "tickets":
        return <Tickets go={go} tickets={supportTickets} />
      case "diagrama":
        return <StateDiagram />
    }
  }, [
    page,
    cartItems,
    cartTotal,
    purchases,
    lastPurchasedItems,
    lastPurchasedTravelers,
    lastPurchasedPayment,
    catalogFilters,
    selectedPackage,
    previousPage,
    currentUser,
    personalInfo,
    travelersList,
    paymentData,
    confirmedBookingCode,
    supportTickets,
  ])
  return (
    <div className="app">
      <Header
        page={page}
        cartCount={cartItems.length}
        currentPackageName={selectedPackage?.name}
        go={go}
        onResetSearch={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <main id="contenido" tabIndex={-1}>
        {content}
      </main>
      <Footer go={go} />
      <button className="floating-help" onClick={() => go("soporte")}>
        Ayuda
      </button>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      {accountCreatedToast && (
        <div className="toast" role="status" style={{ zIndex: 120 }}>
          <span>{accountCreatedToast}</span>
          <button onClick={() => setAccountCreatedToast(null)}>Cerrar</button>
        </div>
      )}
    </div>
  )
}
