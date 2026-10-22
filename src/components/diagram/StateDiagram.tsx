import { PageTitle } from "../common/PageTitle"

export function StateDiagram() {
  const nodes = [
    "Inicio",
    "Catálogo",
    "Detalle",
    "Carrito",
    "Información Personal",
    "Viajeros",
    "Pago de la reserva",
    "Confirmación",
    "Mis reservas",
    "Soporte",
    "Resolución",
  ]
  return (
    <>
      <PageTitle
        title="Diagrama de estados"
        subtitle="Mapa del flujo principal y sus rutas alternativas."
      />
      <div className="section diagram">
        <div className="diagram-flow">
          {nodes.map((node, index) => (
            <div className="diagram-step" key={node}>
              <span>{node}</span>
              {index < nodes.length - 1 && <b aria-hidden="true">→</b>}
              {node === "Información Personal" && (
                <small>Datos del titular y facturación</small>
              )}
              {node === "Confirmación" && <small>Pago en verificación</small>}
              {node === "Resolución" && <small>Reprogramar / Reembolso</small>}
            </div>
          ))}
        </div>
        <div className="diagram-branches">
          <article>
            <strong>Carrito vacío</strong>
            <span>→</span>
            <strong>Catálogo</strong>
          </article>
          <article>
            <strong>Error de validación</strong>
            <span>→</span>
            <strong>Mismo paso</strong>
          </article>
        </div>
      </div>
    </>
  )
}

