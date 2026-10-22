export const CURRENT_YEAR = new Date().getFullYear()

export const MONTH_TO_INDEX: Record<string, number> = {
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

export const MONTH_NAMES: Record<string, string> = {
  ene: "Enero",
  feb: "Febrero",
  mar: "Marzo",
  abr: "Abril",
  may: "Mayo",
  jun: "Junio",
  jul: "Julio",
  ago: "Agosto",
  sep: "Septiembre",
  oct: "Octubre",
  nov: "Noviembre",
  dic: "Diciembre",
}

export const WEEKDAY_NAMES = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
] as const

export const WEEKDAY_SHORT = ["L", "M", "M", "J", "V", "S", "D"] as const

export function getDaysInMonth(monthKey: string, year: number): number {
  const m = MONTH_TO_INDEX[monthKey] ?? 0
  return new Date(year, m + 1, 0).getDate()
}

/**
 * Returns the offset for the 1st day of the month based on a Monday-starting week:
 * 0 = Lunes, 1 = Martes, 2 = Miércoles, 3 = Jueves, 4 = Viernes, 5 = Sábado, 6 = Domingo
 */
export function getFirstDayOfWeekOffset(monthKey: string, year: number): number {
  const m = MONTH_TO_INDEX[monthKey] ?? 0
  const jsDay = new Date(year, m, 1).getDay() // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
  return (jsDay + 6) % 7 // Monday = 0, ..., Sunday = 6
}

/**
 * Returns the real weekday name (e.g., "Miércoles") for any day of the month and year
 */
export function getDayOfWeekName(day: number, monthKey: string, year: number): string {
  const m = MONTH_TO_INDEX[monthKey] ?? 0
  const jsDay = new Date(year, m, day).getDay()
  const ecuadorDayIndex = (jsDay + 6) % 7
  return WEEKDAY_NAMES[ecuadorDayIndex]
}

export interface CalendarMonthItem {
  key: string
  name: string
  days: number
  year: number
}

const MONTH_KEYS = [
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

export const CALENDAR_MONTHS: CalendarMonthItem[] = [
  ...MONTH_KEYS.map((key) => ({
    key,
    name: `${MONTH_NAMES[key]} ${CURRENT_YEAR}`,
    days: getDaysInMonth(key, CURRENT_YEAR),
    year: CURRENT_YEAR,
  })),
  ...MONTH_KEYS.map((key) => ({
    key,
    name: `${MONTH_NAMES[key]} ${CURRENT_YEAR + 1}`,
    days: getDaysInMonth(key, CURRENT_YEAR + 1),
    year: CURRENT_YEAR + 1,
  })),
]

export function isPastDay(day: number, monthKey: string, year: number): boolean {
  const m = MONTH_TO_INDEX[monthKey] ?? 0
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  const targetEndOfDay = new Date(year, m, day, 23, 59, 59, 999)
  return targetEndOfDay.getTime() < todayStart.getTime()
}

export function isToday(day: number, monthKey: string, year: number): boolean {
  const m = MONTH_TO_INDEX[monthKey] ?? 0
  const now = new Date()
  return (
    now.getFullYear() === year &&
    now.getMonth() === m &&
    now.getDate() === day
  )
}
