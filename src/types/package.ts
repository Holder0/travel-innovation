export interface DateRange {
  startDay: number
  endDay: number
  month: string
  year: number
}

export interface SearchFilters {
  region?: string
  category?: string
  province?: string
  city?: string
  dateRange?: DateRange | null
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  meals: {
    breakfast: boolean
    lunch: boolean
    dinner: boolean
  }
}

export interface ReviewItem {
  id: string
  userName: string
  rating: number // 1 al 5
  title: string
  comment: string
  date: string
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
  // Atributos relacionales 3FN
  category?: string
  categorySlug?: string
  categoryIcon?: string
  rating?: number
  reviewsCount?: number
  availableSlots?: number
  itinerary?: ItineraryDay[]
  reviews?: ReviewItem[]
}

export interface CatalogFilterState {
  region: string
  category: string
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
  category: "",
  province: "",
  city: "",
  dateRange: null,
  dateActive: false,
  minPrice: 100,
  maxPrice: 900,
  sortBy: "Alfabético: A a Z (Ascendente)",
  currentPage: 1,
}

export const ECUADOR_REGIONS = [
  "Sierra",
  "Galápagos",
  "Costa",
  "Amazonía",
] as const



