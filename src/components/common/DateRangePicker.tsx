import { useState, useRef, useEffect, useMemo } from "react"
import type { DateRange } from "../../types"
import {
  CALENDAR_MONTHS,
  isPastDay,
  isToday,
  getFirstDayOfWeekOffset,
  getDayOfWeekName,
  WEEKDAY_SHORT,
  WEEKDAY_NAMES,
} from "../../utils/dateUtils"
import { Button } from "./Button"

export function DateRangePicker({
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
  const currentMonth = CALENDAR_MONTHS[monthIdx] || CALENDAR_MONTHS[0]
  const startingOffset = getFirstDayOfWeekOffset(currentMonth.key, currentMonth.year)

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
              ? `${tempEnd - tempStart + 1} días seleccionados (${tempStart} al ${tempEnd} de ${currentMonth.name})`
              : tempStart
              ? `Salida: ${getDayOfWeekName(tempStart, currentMonth.key, currentMonth.year)} ${tempStart} de ${currentMonth.name} · Elige fecha de retorno`
              : "Elige fecha de salida"}
          </div>
          <div className="calendar-grid">
            {WEEKDAY_SHORT.map((d, i) => (
              <span
                key={i}
                className="calendar-weekday"
                title={WEEKDAY_NAMES[i]}
                aria-label={WEEKDAY_NAMES[i]}
              >
                {d}
              </span>
            ))}
            {Array.from({ length: startingOffset }).map((_, i) => (
              <span
                key={`empty-${i}`}
                className="calendar-day-empty"
                aria-hidden="true"
              />
            ))}
            {Array.from({ length: currentMonth.days }, (_, i) => i + 1).map((day) => {
              const isPast = isPastDay(day, currentMonth.key, currentMonth.year)
              const today = isToday(day, currentMonth.key, currentMonth.year)
              const weekdayName = getDayOfWeekName(day, currentMonth.key, currentMonth.year)
              const isStart = tempStart === day
              const isEnd = tempEnd === day
              const isEdge = isStart || isEnd
              const isInRange =
                tempStart !== null && tempEnd !== null && day > tempStart && day < tempEnd
              return (
                <button
                  type="button"
                  key={day}
                  disabled={isPast}
                  onClick={() => !isPast && handleDayClick(day)}
                  className={`calendar-day ${isEdge ? "range-edge" : ""} ${
                    isInRange ? "in-range" : ""
                  } ${isPast ? "is-past" : ""} ${today ? "is-today" : ""}`}
                  aria-label={`${weekdayName}, ${day} de ${currentMonth.name}${
                    today ? " (Hoy)" : ""
                  }${isPast ? " (Fecha pasada, no disponible)" : ""}`}
                  title={`${weekdayName}, ${day} de ${currentMonth.name}${
                    today ? " (Hoy)" : isPast ? " - Fecha pasada" : ""
                  }`}
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


