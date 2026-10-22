export const steps = ["Carrito", "Información Personal", "Viajeros", "Pago", "Confirmación"]
export function Stepper({ current }: { current: number }) {
  return (
    <div className="stepper-wrapper">
      <nav className="stepper" aria-label="Progreso de la reserva">
        {steps.map((step, index) => {
          const isDone = index < current
          const isCurrent = index === current
          return (
            <div
              className={`stepper-node ${isCurrent ? "is-current" : ""} ${
                isDone ? "is-done" : ""
              }`}
              aria-current={isCurrent ? "step" : undefined}
              key={step}
            >
              <span className="stepper-badge">
                {isDone ? (
                  <span className="stepper-check" aria-hidden="true">✓</span>
                ) : (
                  index + 1
                )}
              </span>
              <strong className="stepper-label">{step}</strong>
            </div>
          )
        })}
      </nav>
    </div>
  )
}


