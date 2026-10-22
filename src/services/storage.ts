import type { RegisteredUserRecord, UserAccountData } from "../types"

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
          voucherNumber: "",
          voucherUploaded: false,
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

