import type { TravelerData } from "./user"

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
  status: "En verificación" | "Compra realizada" | "Confirmada" | "Reprogramada" | "Cancelada"
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
  voucherUploaded?: boolean
  voucherFileName?: string
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


