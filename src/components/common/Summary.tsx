import React, { useState } from "react"

export function Summary({
  total = 378,
  action,
}: {
  total?: number
  action?: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className="summary">
      <div
        className="summary-mobile-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>{isOpen ? "Ocultar resumen de compra" : "Ver resumen de compra"}</span>
          <span className={`summary-caret ${isOpen ? "open" : ""}`} aria-hidden="true">
            ▾
          </span>
        </div>
        <strong>${total}</strong>
      </div>

      <div className={`summary-content ${isOpen ? "is-open" : ""}`}>
        <h2>Resumen de compra</h2>
        <div>
          <span>Subtotal</span>
          <span>${Math.round(total / 1.15)}</span>
        </div>
        <div>
          <span>Impuestos (IVA)</span>
          <span>${total - Math.round(total / 1.15)}</span>
        </div>
        <div className="summary__total">
          <strong>Total</strong>
          <strong>${total}</strong>
        </div>
        {action}
      </div>
    </aside>
  )
}


