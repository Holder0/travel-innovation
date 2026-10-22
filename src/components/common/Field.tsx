import React from "react"

export interface FieldProps {
  label: string
  type?: string
  placeholder?: string
  help?: string
  error?: string
  value?: string
  onChange?: (value: string) => void
  id?: string
  required?: boolean
  autoFocus?: boolean
  maxLength?: number
}

export function Field({
  label,
  type = "text",
  placeholder,
  help,
  error,
  value,
  onChange,
  id,
  required,
  autoFocus,
  maxLength,
}: FieldProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        onChange={(event) => onChange?.(event.target.value)}
      />
      {help && <span className="field__help">{help}</span>}
      {error && (
        <span className="field__error" role="alert">
          <span aria-hidden="true">⚠️</span> {error}
        </span>
      )}
    </label>
  )
}
