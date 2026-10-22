import type { CartItem } from "./cart"
import type { PurchaseItem } from "./purchase"

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