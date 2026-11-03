import { CheckIcon } from "./SvgIcons"

export const steps = ["Carrito", "Información Personal", "Viajeros", "Pago", "Confirmación"]
export function Stepper({ current }: { current: number }) {
  const currentStepName = steps[current] || steps[0]

  return (
    <div className="stepper-wrapper">
      {/* Mobile compact stepper bar */}
      <div className="stepper-mobile" aria-label={`Paso ${current + 1} de ${steps.length}: ${currentStepName}`}>
        <div className="stepper-mobile__header">
          <span className="stepper-mobile__step">Paso {current + 1} de {steps.length}</span>
          <strong className="stepper-mobile__title">{currentStepName}</strong>
        </div>
        <div className="stepper-mobile__bar">
          <div
            className="stepper-mobile__fill"
            style={{ width: `${((current + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop multi-node stepper */}
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
                  <CheckIcon size={14} color="#ffffff" />
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



