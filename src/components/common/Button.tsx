import React from "react"

export interface ButtonProps {
  children: React.ReactNode
  onClick?: (e?: React.MouseEvent) => void
  kind?: "primary" | "secondary" | "quiet" | "danger"
  disabled?: boolean
  type?: "button" | "submit"
  className?: string
  style?: React.CSSProperties
  id?: string
}

export function Button({
  children,
  onClick,
  kind = "secondary",
  disabled = false,
  type = "button",
  className = "",
  style,
  id,
}: ButtonProps) {
  return (
    <button
      id={id}
      className={`button button--${kind} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  )
}
