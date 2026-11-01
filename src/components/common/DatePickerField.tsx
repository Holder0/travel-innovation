import { useState, useRef, useEffect, useMemo } from "react"
import { CalendarIcon, AlertTriangleIcon } from "./SvgIcons"

export interface DatePickerFieldProps {
  label: string
  value?: string // Formato ISO "YYYY-MM-DD"
  onChange: (val: string) => void
  error?: string
  help?: string
  required?: boolean
  id?: string
  maxDate?: string // Por defecto: hoy
  minDate?: string // Por defecto: 1920-01-01
  placeholder?: string
  disabled?: boolean
}

const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

const WEEKDAYS_SHORT = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"]

export function DatePickerField({
  label,
  value = "",
  onChange,
  error,
  help,
  required,
  id,
  maxDate,
  minDate = "1920-01-01",
  placeholder = "Selecciona fecha en el calendario",
  disabled = false,
}: DatePickerFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const today = useMemo(() => new Date(), [])
  const todayStr = useMemo(() => {
    const y = today.getFullYear()
    const m = String(today.getMonth() + 1).padStart(2, "0")
    const d = String(today.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
  }, [today])

  const effectiveMaxDate = maxDate || todayStr

  // Parse current value
  const parsedValue = useMemo(() => {
    if (!value || !value.includes("-")) return null
    const parts = value.split("-").map(Number)
    if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) {
      return null
    }
    return {
      year: parts[0],
      month: parts[1] - 1, // 0-indexed
      day: parts[2],
    }
  }, [value])

  // Current view in the calendar (year and month)
  const [viewYear, setViewYear] = useState<number>(() => {
    if (parsedValue) return parsedValue.year
    return 2000 // Año de nacimiento predeterminado cómodo para adultos
  })

  const [viewMonth, setViewMonth] = useState<number>(() => {
    if (parsedValue) return parsedValue.month
    return 0 // Enero
  })

  // Synchronize calendar view if value changes externally
  useEffect(() => {
    if (parsedValue) {
      setViewYear(parsedValue.year)
      setViewMonth(parsedValue.month)
    }
  }, [parsedValue])

  // Close calendar popover on click outside or Escape
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

  // Formatted date string to display in the space
  const displayValue = useMemo(() => {
    if (!parsedValue) return ""
    const d = String(parsedValue.day).padStart(2, "0")
    const m = String(parsedValue.month + 1).padStart(2, "0")
    return `${d}/${m}/${parsedValue.year}`
  }, [parsedValue])

  // Calendar calculation
  const daysInCurrentMonth = useMemo(() => {
    return new Date(viewYear, viewMonth + 1, 0).getDate()
  }, [viewYear, viewMonth])

  const firstDayOffset = useMemo(() => {
    // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const day = new Date(viewYear, viewMonth, 1).getDay()
    // Convertir a semana que inicia en Lunes (0 = Lun, ..., 6 = Dom)
    return (day + 6) % 7
  }, [viewYear, viewMonth])

  // Generar lista de años desde 2026 hasta 1920
  const yearOptions = useMemo(() => {
    const currentY = today.getFullYear()
    const years: number[] = []
    for (let y = currentY; y >= 1920; y--) {
      years.push(y)
    }
    return years
  }, [today])

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  const handleSelectDay = (day: number) => {
    const formattedMonth = String(viewMonth + 1).padStart(2, "0")
    const formattedDay = String(day).padStart(2, "0")
    const dateStr = `${viewYear}-${formattedMonth}-${formattedDay}`

    if (effectiveMaxDate && dateStr > effectiveMaxDate) return
    if (minDate && dateStr < minDate) return

    onChange(dateStr)
    setIsOpen(false)
  }

  return (
    <div
      className="field date-picker-field-wrapper"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <label className="field__label" htmlFor={id}>
        {label} {required && <span style={{ color: "var(--crimson)" }}>*</span>}
      </label>

      {/* Espacio donde se muestra la fecha seleccionada + icono junto al espacio */}
      <div
        className="date-input-group"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <input
          id={id}
          type="text"
          readOnly
          disabled={disabled}
          value={displayValue}
          placeholder={placeholder}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          className={`field__input ${error ? "field__input--error" : ""}`}
          style={{
            cursor: disabled ? "not-allowed" : "pointer",
            paddingRight: "46px",
            background: disabled ? "#eef2f5" : "#ffffff",
            fontWeight: displayValue ? 600 : 400,
            color: displayValue ? "var(--abyss)" : "#8a9ea8",
            opacity: disabled ? 0.75 : 1,
          }}
          aria-invalid={Boolean(error)}
          aria-expanded={isOpen}
        />

        {/* Botón icono de calendario junto al espacio */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          aria-label={`Abrir calendario para ${label}`}
          title={disabled ? undefined : "Desplegar calendario"}
          style={{
            position: "absolute",
            right: "6px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "36px",
            height: "36px",
            border: "1px solid rgba(27, 73, 101, 0.2)",
            borderRadius: "6px",
            background: disabled ? "#eef2f5" : isOpen ? "var(--sand)" : "#f8fafc",
            display: "grid",
            placeItems: "center",
            fontSize: "18px",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
            transition: "all 0.15s ease",
          }}
        >
          <CalendarIcon size={18} color="var(--pacific, #008080)" />
        </button>
      </div>

      {help && <span className="field__help">{help}</span>}
      {error && (
        <span className="field__error" role="alert" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <AlertTriangleIcon size={14} color="#dc2626" /> {error}
        </span>
      )}

      {/* Calendario desplegable */}
      {isOpen && (
        <div
          className="calendar-popover"
          style={{
            position: "absolute",
            zIndex: 120,
            top: "calc(100% + 4px)",
            left: 0,
            width: "320px",
            boxShadow: "0 14px 36px rgba(15, 31, 44, 0.28)",
          }}
        >
          {/* Encabezado: Selector de mes y año con flechas */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            <button
              type="button"
              onClick={handlePrevMonth}
              style={{
                width: "32px",
                height: "32px",
                border: "1px solid rgba(27, 73, 101, 0.25)",
                borderRadius: "4px",
                background: "transparent",
                cursor: "pointer",
                fontWeight: 700,
                color: "var(--pacific)",
                display: "grid",
                placeItems: "center",
              }}
              aria-label="Mes anterior"
            >
              ‹
            </button>

            {/* Selectores desplegables de mes y año para navegación rápida */}
            <div style={{ display: "flex", gap: "6px", flex: 1, justifyContent: "center" }}>
              <select
                value={viewMonth}
                onChange={(e) => setViewMonth(Number(e.target.value))}
                style={{
                  padding: "4px 6px",
                  borderRadius: "4px",
                  border: "1px solid var(--pacific)",
                  background: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--abyss)",
                  cursor: "pointer",
                }}
              >
                {MONTHS_ES.map((mName, mIdx) => (
                  <option key={mName} value={mIdx}>
                    {mName}
                  </option>
                ))}
              </select>

              <select
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
                style={{
                  padding: "4px 6px",
                  borderRadius: "4px",
                  border: "1px solid var(--pacific)",
                  background: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--abyss)",
                  cursor: "pointer",
                }}
              >
                {yearOptions.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleNextMonth}
              style={{
                width: "32px",
                height: "32px",
                border: "1px solid rgba(27, 73, 101, 0.25)",
                borderRadius: "4px",
                background: "transparent",
                cursor: "pointer",
                fontWeight: 700,
                color: "var(--pacific)",
                display: "grid",
                placeItems: "center",
              }}
              aria-label="Mes siguiente"
            >
              ›
            </button>
          </div>

          {/* Días de la semana */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--pacific)",
              marginBottom: "6px",
            }}
          >
            {WEEKDAYS_SHORT.map((wd) => (
              <span key={wd}>{wd}</span>
            ))}
          </div>

          {/* Cuadrícula de días */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "2px",
            }}
          >
            {/* Espacios vacíos antes del primer día del mes */}
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <span key={`empty-${i}`} style={{ height: "32px" }} />
            ))}

            {/* Días del mes */}
            {Array.from({ length: daysInCurrentMonth }).map((_, i) => {
              const dayNum = i + 1
              const formattedM = String(viewMonth + 1).padStart(2, "0")
              const formattedD = String(dayNum).padStart(2, "0")
              const currentDayStr = `${viewYear}-${formattedM}-${formattedD}`

              const isSelected =
                parsedValue?.year === viewYear &&
                parsedValue?.month === viewMonth &&
                parsedValue?.day === dayNum

              const isFuture = effectiveMaxDate ? currentDayStr > effectiveMaxDate : false
              const isPastMin = minDate ? currentDayStr < minDate : false
              const isDisabled = isFuture || isPastMin

              return (
                <button
                  key={dayNum}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => handleSelectDay(dayNum)}
                  style={{
                    height: "32px",
                    border: isSelected ? "2px solid var(--pacific)" : "1px solid transparent",
                    borderRadius: "4px",
                    background: isSelected
                      ? "var(--pacific)"
                      : isDisabled
                      ? "transparent"
                      : "transparent",
                    color: isSelected
                      ? "#ffffff"
                      : isDisabled
                      ? "#94a3b8"
                      : "var(--abyss)",
                    fontWeight: isSelected ? 700 : 400,
                    fontSize: "13px",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    textDecoration: isDisabled ? "line-through" : "none",
                    opacity: isDisabled ? 0.35 : 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    if (!isDisabled && !isSelected) {
                      e.currentTarget.style.background = "var(--sand)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isDisabled && !isSelected) {
                      e.currentTarget.style.background = "transparent"
                    }
                  }}
                >
                  {dayNum}
                </button>
              )
            })}
          </div>

          {/* Acciones inferiores */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "12px",
              paddingTop: "8px",
              borderTop: "1px solid rgba(27, 73, 101, 0.2)",
            }}
          >
            {value ? (
              <button
                type="button"
                onClick={() => {
                  onChange("")
                  setIsOpen(false)
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "12px",
                  color: "var(--crimson)",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Limpiar
              </button>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: "var(--pacific)",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

