import { PackageItem } from "./package"

export interface CartItem {
  id: string
  pkg: PackageItem
  date: string
  people: number
  total: number
}


