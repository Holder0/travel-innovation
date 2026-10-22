export const CURRENT_YEAR = new Date().getFullYear()

export const CALENDAR_MONTHS = [
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

