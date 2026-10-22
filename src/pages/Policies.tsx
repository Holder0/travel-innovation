import type { Page } from "../types"
import { Button, PageTitle } from "../components/common"
import { policyGroups } from "../data/policiesData"

export function Policies({ go }: { go: (page: Page) => void }) {
  return (
    <>
      <PageTitle
        title="Políticas de reserva"
        subtitle="Condiciones claras para cancelar, reprogramar o solicitar un reembolso."
      />
      <div className="section policy-content">
        {policyGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.items.map(([title, text]) => (
              <details key={title}>
                <summary>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      className={`policy-icon ${
                        group.icon === "✓" ? "success" : "error"
                      }`}
                    >
                      {group.icon}
                    </span>
                    {title}
                  </span>
                  <span className="summary-caret" aria-hidden="true">▾</span>
                </summary>
                <div className="accordion-body">
                  <p>{text}</p>
                </div>
              </details>
            ))}
          </section>
        ))}
        <section style={{ marginTop: "40px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span className="eyebrow">Procedimiento paso a paso</span>
            <h2 style={{ margin: "4px 0 8px 0", color: "var(--pacific)" }}>
              Cómo se tramita una solicitud o reembolso
            </h2>
            <p className="muted" style={{ margin: 0, fontSize: "0.95rem" }}>
              Conoce las etapas, plazos reglamentarios y canales de acreditación para gestionar tu caso de forma clara y sin complicaciones.
            </p>
          </div>

          <div className="timeline">
            <article>
              <span>1</span>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Paso 1: Notificación y Apertura del Caso</h3>
                  <span className="status status--pacific">Canal oficial de soporte</span>
                </div>
                <p style={{ marginBottom: "12px" }}>
                  Envía tu requerimiento a través del sistema de soporte indicando el código de reserva (ej. TI-2026-XXXX) y adjuntando la documentación de respaldo.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "12px",
                    background: "var(--sand)",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(27,73,101,0.15)",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      ⏱️ Plazos de solicitud
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Hasta 72 horas de anticipación para cancelaciones voluntarias; máx. 48 horas hábiles tras el retorno para reclamos operativos.
                    </span>
                  </div>
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      📎 Documentos requeridos
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Cédula del titular, comprobante de pago bancario y certificados de respaldo (médico, fuerza mayor o fotos).
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <span>2</span>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Paso 2: Evaluación y Resolución</h3>
                  <span className="status status--pacific">Respuesta en 24-48h</span>
                </div>
                <p style={{ marginBottom: "12px" }}>
                  Nuestro equipo de operaciones analiza las causas y los antecedentes con los operadores locales para darte una solución oportuna.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "12px",
                    background: "var(--sand)",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(27,73,101,0.15)",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      🔄 Reprogramación prioritaria
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Te ofrecemos posponer la fecha del viaje sin penalidades dentro de una vigencia de 6 a 12 meses.
                    </span>
                  </div>
                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "var(--pacific)",
                        fontSize: "0.88rem",
                        marginBottom: "3px",
                      }}
                    >
                      ⚖️ Liquidación de reembolso
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--abyss)" }}>
                      Si corresponde devolución según los términos, se liquida el valor neto deducidos los costos no recuperables.
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <span>3</span>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Paso 3: Acreditación del Reembolso</h3>
                  <span className="status status--pacific">✓ Directo a tu cuenta</span>
                </div>
                <p style={{ marginBottom: "12px" }}>
                  Las devoluciones se realizan exclusivamente por el mismo método con el que se efectuó el pago original, a nombre del titular de la reserva.
                </p>
                <div className="timeline-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: "45%" }}>Método de acreditación</th>
                        <th style={{ width: "25%" }}>Plazo estimado</th>
                        <th style={{ width: "30%" }}>Observaciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Transferencia bancaria</strong>
                          <div
                            style={{
                              fontSize: "0.82rem",
                              color: "var(--abyss)",
                              opacity: 0.8,
                            }}
                          >
                            A cuenta del titular registrado
                          </div>
                        </td>
                        <td>
                          <span
                            className="status status--pacific"
                            style={{ fontWeight: 600 }}
                          >
                            3 a 5 días hábiles
                          </span>
                        </td>
                        <td style={{ fontSize: "0.85rem" }}>
                          Sujeto a confirmación bancaria interbancaria SPI.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Reversión a tarjeta de crédito/débito</strong>
                          <div
                            style={{
                              fontSize: "0.82rem",
                              color: "var(--abyss)",
                              opacity: 0.8,
                            }}
                          >
                            A través de la pasarela de pagos
                          </div>
                        </td>
                        <td>
                          <span
                            className="status status--pacific"
                            style={{ fontWeight: 600 }}
                          >
                            7 a 15 días hábiles
                          </span>
                        </td>
                        <td style={{ fontSize: "0.85rem" }}>
                          El tiempo exacto depende del banco emisor de tu tarjeta.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <Button kind="primary" onClick={() => go("soporte")}>
              Abrir ticket de soporte
            </Button>
            <Button kind="secondary" onClick={() => go("tickets")}>
              Ver mis tickets activos
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

