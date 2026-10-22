import React, { useState } from "react"

export interface SelectFieldProps {
  label: string
  children: React.ReactNode
  help?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  id?: string
}

export function SelectField({
  label,
  children,
  help,
  error,
  value,
  onChange,
  disabled = false,
  required = false,
  id,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <div className={`select-wrapper ${isOpen ? "is-open" : ""}`}>
        <select
          id={id}
          disabled={disabled}
          required={required}
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
