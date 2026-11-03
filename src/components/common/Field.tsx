import React from "react"
import { AlertTriangleIcon } from "./SvgIcons"

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
  hasWarning?: boolean
  inputClassName?: string
  disabled?: boolean
  readOnly?: boolean
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
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
  hasWarning = false,
  inputClassName = "",
  disabled,
  readOnly,
  inputMode,
}: FieldProps) {
  const computedInputClass = [
    hasWarning ? "field__input--warning" : "",
    inputClassName,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <input
        id={id}
        className={computedInputClass || undefined}
        aria-invalid={Boolean(error)}
        placeholder={placeholder}
        type={type}
        inputMode={inputMode}
        value={value}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        onChange={(event) => onChange?.(event.target.value)}
      />
      {help && <span className="field__help">{help}</span>}
      {error && (
        <span className="field__error" role="alert" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <AlertTriangleIcon size={14} color="var(--error)" /> {error}
        </span>
      )}

    </label>
  )
}
