import React, { useState, useRef } from "react"
import type { Page, PurchaseItem, SupportTicket } from "../types"
import { SUPPORT_REASONS } from "../types"
import { Button, Field, SelectField, PageTitle } from "../components/common"

export function Support({
  go,
  purchases = [],
  supportTickets = [],
  onTicketCreated,
}: {
  go: (page: Page) => void
  purchases?: PurchaseItem[]
  supportTickets?: SupportTicket[]
  onTicketCreated?: (ticket: SupportTicket) => void
}) {
  const [selectedBookingCode, setSelectedBookingCode] = useState(() => {
    const unsubmitted = purchases.find(
      (p) =>
        !supportTickets.some(
          (t) =>
            t.bookingCode &&
            p.code &&
            t.bookingCode.trim().toUpperCase() === p.code.trim().toUpperCase()
        )
    )
    return unsubmitted ? unsubmitted.code : (purchases[0]?.code ?? "")
  })
  const [manualBookingCode, setManualBookingCode] = useState("")
  const [reason, setReason] = useState(() => SUPPORT_REASONS[0])
  const [description, setDescription] = useState("")
  const [evidenceUploaded, setEvidenceUploaded] = useState(false)
  const [sent, setSent] = useState(false)
  const [newTicketNumber, setNewTicketNumber] = useState("")

  const activeBookingCode =
    purchases.length > 0 && selectedBookingCode !== "otro"
      ? selectedBookingCode
      : manualBookingCode.trim() || (purchases[0]?.code ?? "ST-10428")

  // Comprobar si ya existe un ticket registrado para ESTA compra específica (1 ticket por compra)
  const existingTicketForActiveCode = supportTickets.find(
    (t) =>
      t.bookingCode &&
      activeBookingCode &&
      t.bookingCode.trim().toUpperCase() ===
        activeBookingCode.trim().toUpperCase()
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (existingTicketForActiveCode) {
      return
    }
    const ticketNum = `TK-${Math.floor(10000 + Math.random() * 90000)}`
    setNewTicketNumber(ticketNum)
    const ticketObj: SupportTicket = {
      id: `tk-${Date.now()}`,
      ticketNumber: ticketNum,
      bookingCode: activeBookingCode,
      reason: reason,
      description:
        description.trim() ||
        "Solicitud de asistencia técnica, revisión o soporte operativo.",
      evidenceUploaded: evidenceUploaded,
      createdAt: new Date().toLocaleDateString("es-EC", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "En revisión",
      responseEstimated: "24 a 48 horas hábiles",
    }
    onTicketCreated?.(ticketObj)
    setSent(true)
  }

  if (sent)
    return (
      <>
        <div className="section confirmation">
          <span className="success-mark">✓</span>
          <h1>Ticket recibido</h1>
          <p>
            Tu número de ticket es{" "}
            <strong>{newTicketNumber || "TK-10428"}</strong> para la reserva{" "}
            <strong>{activeBookingCode}</strong>.
          </p>
          <div className="important-note">
            <strong>Siguiente paso</strong>
            <p>
              Revisaremos tus documentos y responderemos por correo
              en hasta 2 días hábiles. Recuerda que solo se puede registrar 1 ticket por compra y este ya ha quedado guardado de manera definitiva (no modificable). Puedes dar seguimiento al avance en la
              sección <strong>Mis tickets</strong>.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <Button kind="primary" onClick={() => go("tickets")}>
              Ver mis tickets
            </Button>
            <Button kind="secondary" onClick={() => go("reservas")}>
              Volver a mis compras
            </Button>
          </div>
        </div>
      </>
    )

  return (
    <>
      <PageTitle
        title="Soporte por ticket"
        subtitle="Cuéntanos qué necesitas y adjunta los documentos del caso."
      />
      <div className="section support-layout">
        <div className="form-panel">
          {purchases.length > 0 ? (
            <>
              <SelectField
                label="Código de reserva"
                value={selectedBookingCode}
                onChange={(val) => setSelectedBookingCode(val)}
                help="Selecciona la compra para la cual solicitas soporte (solo se permite 1 ticket por compra)."
              >
                {purchases
                  .map((p) => p.code)
                  .sort((a, b) => a.localeCompare(b, "es"))
                  .map((code) => {
                    const purchase = purchases.find((p) => p.code === code)
                    const hasTicket = supportTickets.some(
                      (t) =>
                        t.bookingCode &&
                        t.bookingCode.trim().toUpperCase() ===
                          code.trim().toUpperCase()
                    )
                    const pkgNames =
                      purchase?.packages.map((pkg) => pkg.name).join(", ") ||
                      "Compra confirmada"
                    return (
                      <option key={code} value={code}>
                        {code} — {pkgNames} {hasTicket ? "(✓ 1 ticket ya registrado)" : ""}
                      </option>
                    )
                  })}
                <option value="otro">Otro código (ingresar manualmente)</option>
              </SelectField>

              {selectedBookingCode === "otro" && (
                <Field
                  label="Código de reserva manual"
                  placeholder="Ej. TI-2026-8K3Q2M"
                  value={manualBookingCode}
                  onChange={setManualBookingCode}
                  help="Escribe el código tal como aparece en tu correo o comprobante."
                  required
                />
              )}
            </>
          ) : (
            <Field
              label="Código de reserva"
              placeholder="Ej. TI-2026-8K3Q2M"
              value={manualBookingCode}
              onChange={setManualBookingCode}
              help="Lo encuentras en tu correo de confirmación o voucher de compra (máx. 1 ticket por compra)."
              required
            />
          )}

          {existingTicketForActiveCode ? (
            <div style={{ marginTop: "16px" }}>
              <div className="inline-alert" style={{ marginBottom: "16px" }}>
                ⚠️ <strong>Esta compra ya tiene un ticket registrado</strong>: La reserva{" "}
                <strong>{activeBookingCode}</strong> ya cuenta con el ticket{" "}
                <strong>{existingTicketForActiveCode.ticketNumber}</strong> en estado{" "}
                <strong>{existingTicketForActiveCode.status}</strong>. Por políticas del servicio, solo se puede hacer <strong>1 ticket por compra</strong>.
              </div>

              <article className="ticket-card" style={{ marginBottom: "16px" }}>
                <div className="ticket-header">
                  <div>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "1.15rem",
                        color: "var(--pacific)",
                      }}
                    >
                      {existingTicketForActiveCode.ticketNumber}
                    </span>
                    <span
                      className="status status--pending"
                      style={{ marginLeft: "10px" }}
                    >
                      ⏳ {existingTicketForActiveCode.status}
                    </span>
                    <span
                      className="eyebrow"
                      style={{ display: "block", marginTop: "4px" }}
                    >
                      Reserva: <strong>{existingTicketForActiveCode.bookingCode}</strong> · Enviado el{" "}
                      {existingTicketForActiveCode.createdAt}
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
                      Respuesta estimada
                    </span>
                    <strong
                      style={{ fontSize: "0.9rem", color: "var(--pacific)" }}
                    >
                      {existingTicketForActiveCode.responseEstimated ||
                        "24 a 48 horas hábiles"}
                    </strong>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--sand)",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(27,73,101,0.15)",
                    marginTop: "12px",
                  }}
                >
                  <strong
                    style={{
                      color: "var(--pacific)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Motivo: {existingTicketForActiveCode.reason}
                  </strong>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.92rem",
                      color: "var(--abyss)",
                      lineHeight: 1.5,
                    }}
                  >
                    {existingTicketForActiveCode.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "12px",
                    borderTop: "1px dashed rgba(27,73,101,0.2)",
                    marginTop: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
                    {existingTicketForActiveCode.evidenceUploaded
                      ? "✓ Documentos de respaldo adjuntos"
                      : "Sin archivos adjuntos"}
                  </span>
                  <span
                    className="muted"
                    style={{ fontSize: "0.82rem", fontStyle: "italic" }}
                  >
                    🔒 Ticket registrado (no modificable · 1 ticket por compra)
                  </span>
                </div>
              </article>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "16px",
                  flexWrap: "wrap",
                }}
              >
                <Button kind="primary" onClick={() => go("tickets")}>
                  Ver en Mis tickets
                </Button>
                {purchases.some(
                  (p) =>
                    !supportTickets.some(
                      (t) =>
                        t.bookingCode &&
                        t.bookingCode.trim().toUpperCase() ===
                          p.code.trim().toUpperCase()
                    )
                ) && (
                  <Button
                    kind="secondary"
                    onClick={() => {
                      const avail = purchases.find(
                        (p) =>
                          !supportTickets.some(
                            (t) =>
                              t.bookingCode &&
                              t.bookingCode.trim().toUpperCase() ===
                                p.code.trim().toUpperCase()
                          )
                      )
                      if (avail) setSelectedBookingCode(avail.code)
                    }}
                  >
                    Crear ticket para otra compra
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
              <SelectField label="Motivo" value={reason} onChange={setReason}>
                {SUPPORT_REASONS.map((motivo) => (
                  <option key={motivo} value={motivo}>
                    {motivo}
                  </option>
                ))}
              </SelectField>
              {(reason === "Cancelación voluntaria" ||
                reason === "Cancelaciones tardías") && (
                <div className="inline-alert" role="alert">
                  <strong>⚠️ Revisa el plazo antes de enviar</strong>
                  <span>
                    Si faltan menos de 72 horas hábiles, la cancelación voluntaria
                    no admite reembolso. Puedes solicitar una revisión o consultar
                    opciones de reprogramación.
                  </span>
                </div>
              )}
              <label className="field">
                <span className="field__label">Descripción</span>
                <textarea
                  rows={5}
                  placeholder="Describe lo ocurrido y qué solución esperas."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <span className="field__help">
                  Incluye fechas y detalles relevantes.
                </span>
              </label>
              <div className="field">
                <span className="field__label">Evidencias y respaldos</span>
                <div
                  className="upload-zone"
                  style={{ minHeight: "170px", cursor: "pointer" }}
                >
                  <span className="upload-icon" aria-hidden="true">
                    ↑
                  </span>
                  <strong>Arrastra tus archivos de evidencia aquí</strong>
                  <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                    Formatos JPG, PNG o PDF (máx. 10 MB)
                  </span>
                  <Button
                    kind="secondary"
                    type="button"
                    onClick={() => setEvidenceUploaded(true)}
                  >
                    {evidenceUploaded ? "Cambiar archivos" : "Seleccionar archivos"}
                  </Button>
                </div>
                {evidenceUploaded && (
                  <div className="file-progress" role="status">
                    <div style={{ color: "var(--pacific)" }}>
                      <span
                        style={{
                          fontWeight: 600,
                          color: "var(--pacific)",
                        }}
                      >
                        evidencias_y_comprobante_caso.pdf
                      </span>
                      <strong style={{ color: "var(--pacific)" }}>100%</strong>
                    </div>
                    <div
                      className="progress"
                      style={{
                        borderColor: "var(--pacific)",
                        background: "rgba(27, 73, 101, 0.12)",
                      }}
                    >
                      <span style={{ background: "var(--pacific)" }} />
                    </div>
                    <span className="status status--pacific">
                      ✓ Documentos adjuntos listos
                    </span>
                  </div>
                )}
                <span className="field__help">
                  Puedes subir comprobante de pago, certificado médico, fotografías, denuncias u otros documentos de respaldo.
                </span>
              </div>
              <Button kind="primary" type="submit">
                Enviar ticket
              </Button>
            </form>
          )}
        </div>
        <aside className="support-help">
          <h2>Antes de enviar</h2>
          <p>Ten a mano tu código de reserva y los respaldos de tu caso (recuerda que solo se permite 1 ticket por compra).</p>
          <button className="text-link" onClick={() => go("politicas")}>
            Consultar políticas de reserva
          </button>
          <hr />
          <h3>¿Necesitas ayuda?</h3>
          <p>Lunes a viernes, 09:00 a 18:00</p>
          <p>02 2456456</p>
          <p>travelinnovation.tamc@gmail.com</p>
        </aside>
      </div>
    </>
  )
}

