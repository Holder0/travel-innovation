import type { Page, PurchaseItem, SupportTicket } from "../types"
import { Button, PageTitle } from "../components/common"

export function Tickets({
  go,
  tickets = [],
  purchases = [],
}: {
  go: (page: Page) => void
  tickets?: SupportTicket[]
  purchases?: PurchaseItem[]
}) {
  const purchasesWithoutTicket = purchases.filter(
    (p) =>
      !tickets.some(
        (t) =>
          t.bookingCode &&
          p.code &&
          t.bookingCode.trim().toUpperCase() === p.code.trim().toUpperCase()
      )
  )
  const canOpenNewTicket =
    purchases.length === 0 || purchasesWithoutTicket.length > 0

  return (
    <>
      <PageTitle
        title="Mis tickets de soporte"
        subtitle="Monitorea tus requerimientos, solicitudes de reprogramación y trámites en curso."
      />
      <div className="section" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div>
            <h2 style={{ margin: 0, color: "var(--pacific)" }}>
              Tickets registrados ({tickets.length})
            </h2>
            <p className="muted" style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>
              Estado y respuestas actualizadas por el equipo de atención al viajero (1 ticket por compra).
            </p>
          </div>
          {canOpenNewTicket ? (
            <Button kind="primary" onClick={() => go("soporte")}>
              + Abrir ticket de soporte
            </Button>
          ) : (
            <span
              className="status status--pacific"
              style={{ fontSize: "0.85rem", fontWeight: 700 }}
            >
              ✓ Límite de 1 ticket por compra alcanzado
            </span>
          )}
        </div>

        {tickets.length === 0 ? (
          <div
            className="empty-state"
            style={{
              padding: "48px 24px",
              textAlign: "center",
              background: "#ffffff",
              borderRadius: "var(--radius)",
              border: "1px solid var(--pacific)",
            }}
          >
            <span
              style={{ fontSize: "42px", display: "block", marginBottom: "12px" }}
            >
              📋
            </span>
            <h3 style={{ color: "var(--pacific)", marginBottom: "8px" }}>
              No tienes tickets registrados
            </h3>
            <p className="muted" style={{ maxWidth: "440px", margin: "0 auto 20px" }}>
              Si necesitas gestionar una cancelación, cambio de fecha o consultar sobre tu viaje, puedes generar un ticket de atención aquí.
            </p>
            <Button kind="primary" onClick={() => go("soporte")}>
              Crear ticket de soporte
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {tickets.map((t) => {
              const statusClass =
                t.status === "Resuelto"
                  ? "status--success"
                  : t.status === "En trámite"
                  ? "status--pacific"
                  : "status--pending"

              return (
                <article className="ticket-card" key={t.id}>
                  <div className="ticket-header">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            color: "var(--pacific)",
                          }}
                        >
                          {t.ticketNumber}
                        </span>
                        <span className={`status ${statusClass}`}>
                          {t.status === "Resuelto" && "✓ "}
                          {t.status === "En revisión" && "⏳ "}
                          {t.status === "En trámite" && "⚙️ "}
                          {t.status}
                        </span>
                      </div>
                      <span
                        className="eyebrow"
                        style={{ marginTop: "4px", display: "inline-block" }}
                      >
                        Reserva: <strong>{t.bookingCode}</strong> · Enviado el{" "}
                        {t.createdAt}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "#64748b",
                          display: "block",
                        }}
                      >
                        Tiempo estimado de respuesta
                      </span>
                      <strong
                        style={{ fontSize: "0.9rem", color: "var(--pacific)" }}
                      >
                        {t.responseEstimated || "24 a 48 horas hábiles"}
                      </strong>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--sand)",
                      padding: "14px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(27,73,101,0.15)",
                    }}
                  >
                    <div style={{ marginBottom: "6px" }}>
                      <strong
                        style={{ fontSize: "0.95rem", color: "var(--pacific)" }}
                      >
                        Motivo: {t.reason}
                      </strong>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.92rem",
                        color: "var(--abyss)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                      paddingTop: "6px",
                      borderTop: "1px dashed rgba(27,73,101,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {t.evidenceUploaded ? (
                        <>
                          <span style={{ color: "var(--success)" }}>✓</span>{" "}
                          Documentos y evidencias adjuntos
                        </>
                      ) : (
                        <>Sin archivos adjuntos</>
                      )}
                    </span>
                    <span
                      className="muted"
                      style={{ fontSize: "0.82rem", fontStyle: "italic" }}
                    >
                      🔒 Ticket registrado (no modificable · 1 ticket por compra)
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <div style={{ marginTop: "28px", textAlign: "center" }}>
          <Button kind="secondary" onClick={() => go("reservas")}>
            Volver a mis compras
          </Button>
        </div>
      </div>
    </>
  )
}

