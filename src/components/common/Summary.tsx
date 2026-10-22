import React from "react"

export function Summary({
  total = 378,
  action,
}: {
  total?: number
  action?: React.ReactNode
}) {
  return (
    <aside className="summary">
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
    </aside>
  )
}


