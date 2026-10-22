import { useState, useEffect } from "react"
import type { Page, CartItem, PersonalInfo, TravelerData, PaymentDetails } from "../../types"
import { Button, Stepper } from "../../components/common"

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

  useEffect(() => {
    const timer = setTimeout(() => setPurchaseToast(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const isTransfer = paymentData.method === "transferencia"
  const isDebit = paymentData.method === "debito"
  const isCredit = paymentData.method === "credito"

  const handleDownload = () => {
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
          <strong>
            {personalInfo.email || currentUser?.email || "tu correo electrónico"}
          </strong>
          .
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
                  (t) =>
                    t.packageId === item.id ||
                    (t.packageTitle &&
                      item.pkg.name &&
                      t.packageTitle.toLowerCase() ===
                        item.pkg.name.toLowerCase())
                )

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
                          ? personalInfo.fullName ||
                            currentUser?.name ||
                            "Titular de la reserva"
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
                                    ? personalInfo.fullName ||
                                      currentUser?.name
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
                                    : "Registrada")}
                              </small>
                            </span>
                            {t.isMinor ? (
                              <span
                                className="status status--pending"
                                style={{
                                  fontSize: "12px",
                                  padding: "2px 8px",
                                }}
                              >
                                Menor de edad
                              </span>
                            ) : t.isTitular ? (
                              <span
                                className="status status--pacific"
                                style={{
                                  fontSize: "12px",
                                  padding: "2px 8px",
                                }}
                              >
                                Titular
                              </span>
                            ) : (
                              <span
                                className="status"
                                style={{
                                  fontSize: "12px",
                                  padding: "2px 8px",
                                }}
                              >
                                Acompañante
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Información Personal (Titular) */}
          <div className="confirmation-section">
            <h3>
              <span>👤</span> Información Personal (Titular)
            </h3>
            <div className="confirmation-grid">
              <div>
                <small>Titular</small>
                <strong>
                  {personalInfo.fullName ||
                    currentUser?.name ||
                    "María Andrade"}
                </strong>
              </div>
              <div>
                <small>Cédula de identidad</small>
                <strong>{personalInfo.cedula || "1712345675"}</strong>
              </div>
              <div>
                <small>Teléfono de contacto</small>
                <strong>{personalInfo.phone || "0991234567"}</strong>
              </div>
              <div>
                <small>Correo electrónico</small>
                <strong>
                  {personalInfo.email ||
                    currentUser?.email ||
                    "maria@ejemplo.com"}
                </strong>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <small>Dirección domiciliaria</small>
                <strong>
                  {personalInfo.mainStreet && personalInfo.secondaryStreet
                    ? `${personalInfo.mainStreet} y ${personalInfo.secondaryStreet}, ${personalInfo.reference || "S/N"} · ${personalInfo.city || ""}, ${personalInfo.province || ""}`
                    : "Av. Amazonas y Naciones Unidas, N34-120 · Quito, Pichincha"}
                </strong>
              </div>
            </div>
          </div>

          {/* Detalle de Pago y Facturación */}
          <div className="confirmation-section">
            <h3>
              <span>💳</span> Detalle del Pago y Facturación
            </h3>
            <div className="confirmation-grid">
              <div>
                <small>Método utilizado</small>
                <strong>
                  {isTransfer
                    ? `Transferencia bancaria (${
                        paymentData.bankVoucherNumber
                          ? `Comp. #${paymentData.bankVoucherNumber}`
                          : "Comprobante adjunto"
                      })`
                    : isDebit
                    ? `Tarjeta de débito (•••• ${
                        paymentData.cardNumber
                          ?.replace(/\s/g, "")
                          .slice(-4) || "4242"
                      })`
                    : `Tarjeta de crédito (•••• ${
                        paymentData.cardNumber
                          ?.replace(/\s/g, "")
                          .slice(-4) || "4242"
                      })`}
                </strong>
              </div>
              <div>
                <small>Modalidad</small>
                <strong>
                  {isTransfer
                    ? "Transferencia directa (1 pago)"
                    : isDebit
                    ? "Pago directo inmediato (sin plazos)"
                    : paymentData.installments || "1 pago corriente"}
                </strong>
              </div>
              <div>
                <small>Subtotal + IVA (15%)</small>
                <strong>
                  ${Math.round(total / 1.15)} + $
                  {total - Math.round(total / 1.15)}
                </strong>
              </div>
              <div>
                <small>Total pagado</small>
                <strong
                  style={{ fontSize: "16px", color: "var(--pacific)" }}
                >
                  ${total}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <section className="confirmation-next-steps">
          <h2>Qué sigue</h2>
          <div className="confirmation-steps-grid">
            {[
              {
                step: "1",
                title: "Emisión de voucher oficial",
                desc: "Verificamos los datos de tu reserva y emitimos tu comprobante oficial con código QR de acceso.",
              },
              {
                step: "2",
                title: "Itinerario y recomendaciones",
                desc: "Recibirás por correo el punto de encuentro exacto, horarios de salida y sugerencias de vestimenta.",
              },
              {
                step: "3",
                title: "Día del embarque",
                desc: "Presenta tu cédula física original y el código de reserva al momento de iniciar el viaje.",
              },
            ].map((s) => (
              <div className="confirmation-step-card" key={s.step}>
                <div className="confirmation-step-header">
                  <span className="confirmation-step-num">{s.step}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="confirmation-actions">
          <Button kind="primary" onClick={handleDownload}>
            Descargar comprobante en PDF
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

      {purchaseToast && (
        <div className="toast" role="status">
          <span>
            {!isTransfer || paymentData.bankVoucherUploaded
              ? `🎉 ¡Compra realizada con éxito! Bienvenido a tu viaje con Travel Innovation${currentUser?.name ? `, ${currentUser.name.split(" ")[0]}` : ""}.`
              : `⏳ ¡Reserva en verificación! Tienes 24 horas para adjuntar tu comprobante de pago desde "Mis compras".`}
          </span>
          <button onClick={() => setPurchaseToast(false)}>Cerrar</button>
        </div>
      )}
      {downloadToast && (
        <div className="toast" role="status">
          <span>✓ Comprobante de reserva #{bookingCode} descargado en PDF.</span>
          <button onClick={() => setDownloadToast(false)}>Cerrar</button>
        </div>
      )}
    </>
  )
}

