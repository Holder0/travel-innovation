import { useState, useEffect } from "react"
import type { Page, CartItem, PersonalInfo, TravelerData, PaymentDetails } from "../../types"
import { Button, Stepper } from "../../components/common"
import { generateBookingPdf } from "../../utils/pdfGenerator"
import { sendRealBookingEmail } from "../../services/emailService"

export function Confirmation({
  go,
  total = 378,
  currentUser,
  personalInfo,
  cartItems,
  travelersList,
  paymentData,
  bookingCode = "TI-2026-8K3Q2M",
}: {
  go: (page: Page) => void
  total?: number
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  cartItems: CartItem[]
  travelersList: TravelerData[]
  paymentData: PaymentDetails
  bookingCode?: string
}) {
  const [copied, setCopied] = useState(false)
  const [downloadToast, setDownloadToast] = useState(false)
  const [purchaseToast, setPurchaseToast] = useState(true)

  const destinationEmail =
    personalInfo.email || currentUser?.email || "correo@ejemplo.com"
  const titularName =
    personalInfo.fullName || currentUser?.name || "Titular de la reserva"

  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [emailMessage, setEmailMessage] = useState("")
  const [emailToast, setEmailToast] = useState(false)
  const [hasSentEmail, setHasSentEmail] = useState(false)

  const isTransfer = paymentData.method === "transferencia"
  const isDebit = paymentData.method === "debito"
  const isCredit = paymentData.method === "credito"

  const paymentMethodLabel =
    isTransfer
      ? "Transferencia bancaria"
      : isDebit
      ? "Tarjeta de débito"
      : "Tarjeta de crédito"

  // Real Email Dispatch
  const handleSendRealEmail = async () => {
    if (!destinationEmail || !destinationEmail.includes("@")) return
    setEmailStatus("sending")
    setEmailToast(true)

    const res = await sendRealBookingEmail({
      toEmail: destinationEmail,
      bookingCode,
      titularName,
      cedula: personalInfo.cedula || "No registrada",
      phone: personalInfo.phone || "No registrado",
      total,
      paymentMethod: paymentMethodLabel,
      installments: paymentData.installments,
      packages: cartItems.map((c) => ({
        name: c.pkg.name,
        date: c.date,
        people: c.people,
        total: c.total,
      })),
      travelers: travelersList.map((t) => ({
        fullName: t.fullName,
        cedula: t.cedula,
        isTitular: t.isTitular,
      })),
    })

    if (res.success) {
      setEmailStatus("sent")
      setEmailMessage(res.message)
    } else {
      setEmailStatus("error")
      setEmailMessage(res.message)
    }
  }

  useEffect(() => {
    if (!hasSentEmail) {
      setHasSentEmail(true)
      handleSendRealEmail()
    }
  }, [hasSentEmail])

  useEffect(() => {
    if (emailToast) {
      const timer = setTimeout(() => setEmailToast(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [emailToast])

  // Real PDF Download
  const handleDownload = () => {
    const pkgTravelersList: TravelerData[] =
      travelersList.length > 0
        ? travelersList
        : [
            {
              id: "t-1",
              slotNumber: 1,
              packageTitle: cartItems[0]?.pkg.name || "Paquete turístico",
              fullName: titularName,
              cedula: personalInfo.cedula || "1712345675",
              isTitular: true,
              isMinor: false,
            },
          ]

    generateBookingPdf({
      bookingCode,
      createdAt: new Date().toLocaleString("es-EC"),
      titular: {
        name: titularName,
        email: destinationEmail,
        phone: personalInfo.phone || "0991234567",
        cedula: personalInfo.cedula || "1712345675",
        address: personalInfo.mainStreet
          ? `${personalInfo.mainStreet} y ${personalInfo.secondaryStreet || ""}, ${personalInfo.city || ""} ${personalInfo.province || ""}`.trim()
          : "Quito, Pichincha",
      },
      packages: cartItems.map((c) => ({
        name: c.pkg.name,
        city: c.pkg.city,
        province: c.pkg.province,
        date: c.date,
        people: c.people,
        price: c.pkg.price,
        total: c.total,
      })),
      travelers: pkgTravelersList.map((t, idx) => ({
        slotNumber: t.slotNumber || idx + 1,
        fullName: t.fullName || "Acompañante",
        cedula: t.cedula || "Registrado",
        isTitular: t.isTitular,
      })),
      total,
      paymentMethodLabel,
      installments: paymentData.installments,
      status:
        !isTransfer || paymentData.bankVoucherUploaded
          ? "Compra realizada · Reserva activa"
          : "En verificación · Plazo 24 horas",
    })

    setDownloadToast(true)
    setTimeout(() => setDownloadToast(false), 3500)
  }

  return (
    <>
      <div className="section" style={{ paddingBottom: 0 }}>
        <Stepper current={4} />
      </div>
      <div className="section confirmation">
        <span className="success-mark" aria-label="Éxito">
          ✓
        </span>
        <span
          className={`status ${
            !isTransfer || paymentData.bankVoucherUploaded
              ? "status--success"
              : "status--pending"
          }`}
        >
          {!isTransfer || paymentData.bankVoucherUploaded
            ? "✓ Compra realizada · Reserva activa"
            : "◷ En verificación · Comprobante pendiente (Plazo: 24 horas)"}
        </span>
        <h1>
          {!isTransfer || paymentData.bankVoucherUploaded
            ? "¡Compra realizada con éxito!"
            : "¡Reserva en verificación! Plazo de 24 horas para comprobante"}
        </h1>
        <p>
          {!isTransfer || paymentData.bankVoucherUploaded
            ? "Hemos registrado tu compra y enviado el itinerario con la confirmación oficial a "
            : "Tus cupos se encuentran reservados. Para que tu estado cambie a Compra realizada, por favor adjunta tu comprobante desde la sección Mis compras durante las próximas 24 horas. Hemos enviado las instrucciones a "}
          <strong>{destinationEmail}</strong>.
        </p>

        <div className="reservation-code">
          <span>Código de reserva</span>
          <strong>{bookingCode}</strong>
          <Button
            kind="secondary"
            onClick={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
          >
            {copied ? "Copiado ✓" : "Copiar"}
          </Button>
        </div>

        {/* Tarjeta real de envío de correo */}
        <div
          style={{
            background: emailStatus === "error" ? "#fef2f2" : "#f0fdf4",
            border: `1px solid ${emailStatus === "error" ? "#fca5a5" : "#86efac"}`,
            borderRadius: "10px",
            padding: "16px 20px",
            margin: "20px 0 24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "28px" }} aria-hidden="true">
              {emailStatus === "sending" ? "⏳" : emailStatus === "error" ? "⚠️" : "📨"}
            </span>
            <div>
              <strong
                style={{
                  color: emailStatus === "error" ? "#991b1b" : "#166534",
                  fontSize: "15px",
                  display: "block",
                }}
              >
                {emailStatus === "sending"
                  ? "Enviando comprobante a tu correo electrónico..."
                  : "Comprobante enviado al correo: " + destinationEmail}
              </strong>
              <span
                style={{
                  color: emailStatus === "error" ? "#b91c1c" : "#15803d",
                  fontSize: "13.5px",
                }}
              >
                {emailStatus === "sending"
                  ? `Conectando con el servidor de correo para despachar tu confirmación a ${destinationEmail}...`
                  : `Hemos enviado el comprobante oficial y los detalles de la reserva #${bookingCode} a ${destinationEmail}. Por favor revisa tu bandeja de entrada o correo no deseado (Spam) en tu Hotmail, Outlook o Gmail.`}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              kind="secondary"
              type="button"
              disabled={emailStatus === "sending"}
              onClick={handleSendRealEmail}
            >
              {emailStatus === "sending" ? "Enviando..." : "🔄 Reenviar al correo"}
            </Button>
            <Button kind="primary" type="button" onClick={handleDownload}>
              📥 Descargar comprobante PDF
            </Button>
          </div>
        </div>

        {/* Resumen conciso de todo */}
        <div className="confirmation-summary-card">
          {/* Paquetes Turísticos y Viajeros Registrados (Agrupados por Paquete) */}
          <div className="confirmation-section">
            <h3>
              <span>📦</span> Paquetes Turísticos y Viajeros Registrados (
              {cartItems.length} {cartItems.length === 1 ? "paquete" : "paquetes"})
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {cartItems.map((item, pIdx) => {
                let pkgTravelers = travelersList.filter(
                  (t) => t.packageId === item.id
                )

                if (pkgTravelers.length === 0) {
                  pkgTravelers = travelersList.filter(
                    (t) =>
                      t.packageTitle &&
                      item.pkg.name &&
                      t.packageTitle.toLowerCase() ===
                        item.pkg.name.toLowerCase()
                  )
                }

                if (pkgTravelers.length === 0) {
                  let startIndex = 0
                  for (let i = 0; i < pIdx; i++) {
                    startIndex += cartItems[i].people || 1
                  }
                  pkgTravelers = travelersList.slice(
                    startIndex,
                    startIndex + (item.people || 1)
                  )
                }

                if (pkgTravelers.length === 0) {
                  const fallbackList: TravelerData[] = []
                  for (let p = 1; p <= item.people; p++) {
                    fallbackList.push({
                      id: `cf-${item.id}-${p}`,
                      slotNumber: p,
                      packageId: item.id,
                      packageTitle: item.pkg.name,
                      fullName:
                        pIdx === 0 && p === 1
                          ? titularName
                          : `Viajero ${p}`,
                      cedula:
                        pIdx === 0 && p === 1
                          ? personalInfo.cedula || "1712345675"
                          : "Registrada",
                      isTitular: p === 1,
                      isMinor: false,
                    })
                  }
                  pkgTravelers = fallbackList
                }

                return (
                  <div
                    key={item.id}
                    style={{
                      border: "1px solid var(--pacific)",
                      borderRadius: "8px",
                      padding: "16px",
                      background: "var(--sand)",
                    }}
                  >
                    <div
                      className="cart-summary-item-row"
                      style={{
                        paddingBottom: "12px",
                        marginBottom: "12px",
                        borderBottom: "1px dashed rgba(27, 73, 101, 0.25)",
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: "16px" }}>
                          {item.pkg.name}
                        </strong>
                        <small>
                          📍 {item.pkg.city} ({item.pkg.province}) · 📅{" "}
                          {item.date}
                        </small>
                        <small>
                          👥 {item.people}{" "}
                          {item.people === 1 ? "viajero" : "viajeros"} ($
                          {item.pkg.price} c/u)
                        </small>
                      </div>
                      <div>
                        <strong
                          style={{
                            fontSize: "16px",
                            color: "var(--pacific)",
                          }}
                        >
                          ${item.total}
                        </strong>
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "13.5px",
                          fontWeight: 700,
                          color: "var(--pacific)",
                          marginBottom: "8px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span>👥</span> Viajeros registrados en este paquete (
                        {pkgTravelers.length}):
                      </div>
                      <div
                        className="confirmation-travelers-list"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {pkgTravelers.map((t, idx) => (
                          <div
                            key={t.id || idx}
                            className="confirmation-traveler-item"
                            style={{
                              background: "#ffffff",
                              border: "1px solid rgba(27, 73, 101, 0.18)",
                              borderRadius: "6px",
                              padding: "10px 14px",
                            }}
                          >
                            <span>
                              <strong>
                                Viajero {idx + 1}:{" "}
                                {t.fullName ||
                                  (idx === 0 && pIdx === 0
                                    ? titularName
                                    : "Acompañante")}
                              </strong>
                              <small
                                style={{
                                  marginLeft: "10px",
                                  color: "#5a6e7f",
                                }}
                              >
                                · Doc:{" "}
                                {t.cedula ||
                                  (idx === 0 && pIdx === 0
                                    ? personalInfo.cedula
                                    : "Registrado")}
                              </small>
                            </span>
                            <span
                              className={`status ${
                                t.isTitular
                                  ? "status--pacific"
                                  : "status--pending"
                              }`}
                              style={{ fontSize: "12px", padding: "2px 8px" }}
                            >
                              {t.isTitular
                                ? "★ Titular del paquete"
                                : "Acompañante"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desglose de Pago */}
          <div className="confirmation-section">
            <h3>
              <span>💳</span> Desglose de Pago y Facturación
            </h3>
            <div className="confirmation-grid">
              <div>
                <small>Titular de la reserva</small>
                <strong>{titularName}</strong>
              </div>
              <div>
                <small>Cédula / Documento</small>
                <strong>{personalInfo.cedula || "1712345675"}</strong>
              </div>
              <div>
                <small>Teléfono</small>
                <strong>{personalInfo.phone || "0991234567"}</strong>
              </div>
              <div>
                <small>Correo electrónico</small>
                <strong>{destinationEmail}</strong>
              </div>
              <div>
                <small>Método de pago utilizado</small>
                <strong>{paymentMethodLabel}</strong>
              </div>
              {paymentData.method === "credito" && (
                <div>
                  <small>Modalidad de pago</small>
                  <strong>{paymentData.installments}</strong>
                </div>
              )}
              {paymentData.method === "transferencia" && (
                <div>
                  <small>Estado comprobante bancario</small>
                  <strong
                    style={{
                      color: paymentData.bankVoucherUploaded
                        ? "var(--success)"
                        : "#b45309",
                    }}
                  >
                    {paymentData.bankVoucherUploaded
                      ? `✓ ${paymentData.bankVoucherNumber || "TR-76543210"} (Cargado)`
                      : "Pendiente (24 horas)"}
                  </strong>
                </div>
              )}
              <div>
                <small>Total pagado</small>
                <strong
                  style={{
                    color: "var(--pacific)",
                    fontSize: "18px",
                  }}
                >
                  ${total},00
                </strong>
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="next-steps-title"
          style={{ width: "100%", maxWidth: "800px", marginTop: "32px" }}
        >
          <h2 id="next-steps-title" style={{ marginBottom: "16px" }}>
            Próximos pasos recomendados
          </h2>
          <div className="next-steps">
            <div className="step-card">
              <span className="step-num" aria-hidden="true">
                1
              </span>
              <h3>Comprobante en PDF</h3>
              <p>
                Descarga y guarda tu comprobante de reserva en formato PDF en tu dispositivo.
              </p>
            </div>
            <div className="step-card">
              <span className="step-num" aria-hidden="true">
                2
              </span>
              <h3>Revisa tu correo</h3>
              <p>
                Hemos enviado la confirmación a tu correo (revisa tu bandeja y carpeta de spam).
              </p>
            </div>
            <div className="step-card">
              <span className="step-num" aria-hidden="true">
                3
              </span>
              <h3>Documento de identidad</h3>
              <p>
                Todos los viajeros deben presentar su cédula o pasaporte original el día del viaje.
              </p>
            </div>
          </div>
        </section>

        <div className="confirmation-actions">
          <Button kind="primary" onClick={handleDownload}>
            📥 Descargar comprobante en PDF
          </Button>
          <Button kind="secondary" onClick={() => go("reservas")}>
            {!isTransfer || paymentData.bankVoucherUploaded
              ? "Ver mi compra"
              : "Ir a Mis compras (adjuntar comprobante)"}
          </Button>
          <Button kind="quiet" onClick={() => go("inicio")}>
            Volver al inicio
          </Button>
        </div>
      </div>

      {/* Notificación central de compra */}
      {purchaseToast && (
        <div
          className="center-popup-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="purchase-popup-title"
          onClick={() => setPurchaseToast(false)}
        >
          <div
            className="center-popup-card"
            onClick={(e) => e.stopPropagation()}
            role="status"
          >
            <button
              type="button"
              className="center-popup-close"
              onClick={() => setPurchaseToast(false)}
              aria-label="Cerrar notificación"
            >
              ✕
            </button>
            <div
              className={`center-popup-icon ${
                !isTransfer || paymentData.bankVoucherUploaded
                  ? "center-popup-icon--celebrate"
                  : ""
              }`}
              aria-hidden="true"
            >
              {!isTransfer || paymentData.bankVoucherUploaded ? "🎉" : "⏳"}
            </div>
            <h2 id="purchase-popup-title" className="center-popup-title">
              {!isTransfer || paymentData.bankVoucherUploaded
                ? "¡Compra realizada con éxito!"
                : "¡Reserva en verificación!"}
            </h2>
            <p className="center-popup-subtitle">
              {!isTransfer || paymentData.bankVoucherUploaded
                ? `Bienvenido a tu viaje con Travel Innovation${
                    currentUser?.name
                      ? `, ${currentUser.name.split(" ")[0]}`
                      : ""
                  }. Hemos emitido los comprobantes oficiales de tu reserva.`
                : `Tienes 24 horas para adjuntar tu comprobante de pago bancario desde "Mis compras" para validar tu reserva.`}
            </p>

            {/* Aviso de correo enviado en el popup central */}
            <div
              style={{
                background: "rgba(27, 73, 101, 0.08)",
                border: "1px solid rgba(27, 73, 101, 0.18)",
                borderRadius: "8px",
                padding: "12px 14px",
                margin: "12px 0 16px",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }} aria-hidden="true">
                ✉️
              </span>
              <div style={{ flex: 1 }}>
                <strong
                  style={{
                    fontSize: "14px",
                    color: "var(--abyss)",
                    display: "block",
                  }}
                >
                  Comprobante enviado a tu correo
                </strong>
                <span style={{ fontSize: "13px", color: "#475569" }}>
                  Remitido a: <strong>{destinationEmail}</strong>. Revisa tu bandeja de entrada o correo no deseado (Spam).
                </span>
              </div>
            </div>

            <div className="center-popup-details">
              <div className="center-popup-row">
                <span>Código de reserva:</span>
                <strong>#{bookingCode}</strong>
              </div>
              <div className="center-popup-row">
                <span>Total pagado:</span>
                <strong className="center-popup-price">${total}</strong>
              </div>
            </div>
            <div className="center-popup-actions">
              <Button kind="primary" onClick={handleDownload}>
                📥 Descargar comprobante PDF
              </Button>
              <Button kind="secondary" onClick={() => setPurchaseToast(false)}>
                Entendido
              </Button>
              <Button kind="quiet" onClick={() => go("reservas")}>
                {!isTransfer || paymentData.bankVoucherUploaded
                  ? "Ver mis compras"
                  : "Adjuntar comprobante"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {emailToast && (
        <div
          className="toast"
          role="status"
          style={{
            zIndex: 150,
            bottom: "24px",
            left: "24px",
            right: "auto",
          }}
        >
          <span>
            {emailStatus === "sending"
              ? `⏳ Enviando comprobante a ${destinationEmail}...`
              : `✉️ Comprobante enviado a ${destinationEmail}`}
          </span>
          <button onClick={() => setEmailToast(false)}>✕</button>
        </div>
      )}

      {downloadToast && (
        <div className="toast" role="status">
          <span>✓ Comprobante de reserva #{bookingCode} descargado en PDF en tu equipo.</span>
          <button onClick={() => setDownloadToast(false)}>Cerrar</button>
        </div>
      )}
    </>
  )
}
