import React, { useState, useRef } from "react"
import type { Page, CartItem, PersonalInfo, TravelerData, PaymentDetails, PaymentMethodType } from "../../types"
import { Button, Field, SelectField, PageTitle, Stepper, Summary } from "../../components/common"
import { validateCardNumber, validateCardExpiry, validateCardCvv } from "../../utils/validation"

export function Payment({
  go,
  total = 378,
  currentUser,
  personalInfo,
  cartItems,
  travelersList,
  paymentData,
  onSavePaymentData,
  onConfirmReservation,
}: {
  go: (page: Page) => void
  total?: number
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  cartItems: CartItem[]
  travelersList: TravelerData[]
  paymentData: PaymentDetails
  onSavePaymentData: (data: PaymentDetails) => void
  onConfirmReservation: (code: string, paymentDetails: PaymentDetails) => void
}) {
  const [method, setMethod] = useState<PaymentMethodType>(
    paymentData.method || "credito"
  )
  const [file, setFile] = useState(paymentData.bankVoucherUploaded || false)
  const [voucherNumber, setVoucherNumber] = useState(
    paymentData.bankVoucherNumber || ""
  )
  const [voucherError, setVoucherError] = useState("")

  // Card fields
  const [cardNumber, setCardNumber] = useState(paymentData.cardNumber || "")
  const [cardHolder, setCardHolder] = useState(paymentData.cardHolder || "")
  const [cardExpiry, setCardExpiry] = useState(paymentData.cardExpiry || "")
  const [cardCvv, setCardCvv] = useState(paymentData.cardCvv || "")
  const [installments, setInstallments] = useState(
    paymentData.installments || "1 pago corriente (sin recargo)"
  )
  const [cardErrors, setCardErrors] = useState<{
    cardNumber?: string
    cardHolder?: string
    cardExpiry?: string
    cardCvv?: string
  }>({})

  useEffect(() => {
    setMethod(paymentData.method || "credito")
    setCardNumber(paymentData.cardNumber || "")
    setCardHolder(paymentData.cardHolder || "")
    setCardExpiry(paymentData.cardExpiry || "")
    setCardCvv(paymentData.cardCvv || "")
    setInstallments(
      paymentData.installments || "1 pago corriente (sin recargo)"
    )
    setVoucherNumber(paymentData.bankVoucherNumber || "")
    setFile(paymentData.bankVoucherUploaded || false)
    setAccepted(false)
    setTermsError(false)
    setCardErrors({})
    setVoucherError("")
  }, [paymentData])

  const [accepted, setAccepted] = useState(false)
  const [modal, setModal] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [copied, setCopied] = useState("")

  const [bookingRefCode, setBookingRefCode] = useState(() => generateBookingCode())

  useEffect(() => {
    setBookingRefCode(generateBookingCode())
  }, [total, cartItems.length])

  const bankData = [
    ["Banco", "Banco Pichincha"],
    ["Tipo de cuenta", "Corriente"],
    ["Número de cuenta", "2100849302"],
    ["Titular", "Travel Innovation Ecuador S.A."],
    ["RUC", "1792345678001"],
    ["Correo comprobante", "pagos@travelinnovation.ec"],
    ["Monto exacto", `$${total},00`],
    ["Referencia sugerida", bookingRefCode],
  ]

  const handleConfirm = () => {
    if (!accepted) {
      setTermsError(true)
      return
    }

    if (method === "transferencia") {
      const finalPayment: PaymentDetails = {
        method: "transferencia",
        bankVoucherNumber: file ? `TR-${Math.floor(10000000 + Math.random() * 90000000)}` : "",
        bankVoucherUploaded: Boolean(file),
      }
      onSavePaymentData(finalPayment)
      onConfirmReservation(bookingRefCode, finalPayment)
      go("confirmacion")
    } else {
      // Card validation (Debito or Credito)
      let hasError = false
      const nextErrs: typeof cardErrors = {}

      // Validar número de tarjeta (16 dígitos, Luhn y no repetidos)
      const cardRes = validateCardNumber(cardNumber)
      if (!cardRes.isValid) {
        nextErrs.cardNumber = cardRes.error
        setCardNumber("") // Borra solo este campo errado
        hasError = true
      }

      if (!cardHolder.trim()) {
        nextErrs.cardHolder = "Ingresa el nombre del titular tal como figura en la tarjeta."
        hasError = true
      }

      // Validar fecha de expiración (no meses inventados como 80/98)
      const expiryRes = validateCardExpiry(cardExpiry)
      if (!expiryRes.isValid) {
        nextErrs.cardExpiry = expiryRes.error
        setCardExpiry("") // Borra solo este campo errado
        hasError = true
      }

      // Validar código de seguridad (CVV de solo 3 dígitos)
      const cvvRes = validateCardCvv(cardCvv)
      if (!cvvRes.isValid) {
        nextErrs.cardCvv = cvvRes.error
        setCardCvv("") // Borra solo este campo errado
        hasError = true
      }

      setCardErrors(nextErrs)
      if (hasError) {
        return
      }

      const finalPayment: PaymentDetails = {
        method: method,
        cardNumber,
        cardHolder: cardHolder.trim(),
        cardExpiry,
        cardCvv,
        installments:
          method === "debito"
            ? "1 pago directo (débito)"
            : installments,
        bankVoucherUploaded: true,
      }
      onSavePaymentData(finalPayment)
      onConfirmReservation(bookingRefCode, finalPayment)
      go("confirmacion")
    }
  }

  return (
    <>
      <PageTitle
        title="Pago de la reserva"
        subtitle="Revisa tus datos y selecciona tu método de pago preferido."
      />
      <div className="section">
        <Stepper current={3} />
      </div>
      <div className="section checkout-layout">
        <section className="form-stack">
          {/* 1. Resumen de datos personales */}
          <article className="form-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Paso 1 · Titular</span>
                <h2>Información Personal</h2>
              </div>
              <Button kind="quiet" type="button" onClick={() => go("identificacion")}>
                Editar datos ✎
              </Button>
            </div>
            <div className="checkout-recap-grid">
              <div>
                <small>Titular</small>
                <strong>
                  {personalInfo.fullName || currentUser?.name || "María Andrade"}
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
          </article>

          {/* 2. Resumen del carrito */}
          <article className="form-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Paso 2 · Carrito</span>
                <h2>
                  Resumen de paquetes ({cartItems.length}{" "}
                  {cartItems.length === 1 ? "paquete" : "paquetes"})
                </h2>
              </div>
              <Button kind="quiet" type="button" onClick={() => go("carrito")}>
                Editar carrito ✎
              </Button>
            </div>
            <div className="cart-checkout-summary-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-summary-item-row">
                  <div>
                    <strong style={{ fontSize: "16px" }}>{item.pkg.name}</strong>
                    <small>
                      📍 {item.pkg.city} ({item.pkg.province}) · 📅 {item.date}
                    </small>
                    <small>
                      👥 {item.people}{" "}
                      {item.people === 1 ? "viajero" : "viajeros"} (${item.pkg.price}{" "}
                      c/u)
                    </small>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <strong
                      style={{ fontSize: "17px", color: "var(--pacific)" }}
                    >
                      ${item.total}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* 3. Selección de método de pago (3 opciones: transferencia, debito, credito) */}
          <article className="form-panel">
            <h2>Método de pago</h2>
            <div className="payment-method-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={method === "transferencia"}
                className={`payment-tab-btn ${
                  method === "transferencia" ? "is-active" : ""
                }`}
                onClick={() => setMethod("transferencia")}
              >
                <span className="tab-icon">🏦</span>
                <div className="tab-text">
                  <strong>Transferencia bancaria</strong>
                  <small>Depósito o transferencia directa</small>
                </div>
                {method === "transferencia" && (
                  <span className="tab-check">✓</span>
                )}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={method === "debito"}
                className={`payment-tab-btn ${
                  method === "debito" ? "is-active" : ""
                }`}
                onClick={() => setMethod("debito")}
              >
                <span className="tab-icon">💳</span>
                <div className="tab-text">
                  <strong>Tarjeta de débito</strong>
                  <small>Pago directo · Sin pago a plazos</small>
                </div>
                {method === "debito" && <span className="tab-check">✓</span>}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={method === "credito"}
                className={`payment-tab-btn ${
                  method === "credito" ? "is-active" : ""
                }`}
                onClick={() => setMethod("credito")}
              >
                <span className="tab-icon">💳</span>
                <div className="tab-text">
                  <strong>Tarjeta de crédito</strong>
                  <small>Pago corriente o diferido a plazos</small>
                </div>
                {method === "credito" && <span className="tab-check">✓</span>}
              </button>
            </div>

            {method === "transferencia" ? (
              <div className="transfer-payment-body">
                <div
                  className="panel-heading"
                  style={{ marginBottom: "12px" }}
                >
                  <h3 style={{ margin: 0 }}>Datos para transferir</h3>
                  <span className="status status--pending">
                    Monto: ${total},00
                  </span>
                </div>
                <div className="bank-data">
                  {bankData.map(([label, value]) => (
                    <div key={label}>
                      <span>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </span>
                      <Button
                        kind="quiet"
                        type="button"
                        onClick={() => {
                          setCopied(label)
                          setTimeout(() => setCopied(""), 2000)
                        }}
                      >
                        {copied === label ? "Copiado ✓" : "Copiar"}
                      </Button>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "20px" }}>
                  <div className="panel-heading" style={{ marginBottom: "10px" }}>
                    <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Adjuntar comprobante de pago</h3>
                    <span className="status status--pacific">
                      {file ? "✓ Comprobante cargado" : "Opcional ahora · Plazo de 24 horas"}
                    </span>
                  </div>
                  <p style={{ margin: "0 0 14px", fontSize: "14px", color: "var(--abyss)" }}>
                    Si ya realizaste la transferencia o depósito bancario, puedes adjuntarlo de inmediato para su verificación. Si prefieres transferir después, puedes confirmar tu reserva ahora y enviar el comprobante durante las próximas 24 horas.
                  </p>
                  <div className="upload-zone">
                    <span className="upload-icon" aria-hidden="true">
                      ↑
                    </span>
                    <strong>Arrastra tu archivo aquí</strong>
                    <span>Formatos JPG, PNG o PDF (máx. 5 MB)</span>
                    <Button
                      kind="secondary"
                      type="button"
                      onClick={() => setFile(true)}
                    >
                      {file ? "Cambiar archivo" : "Seleccionar archivo"}
                    </Button>
                  </div>
                  {file && (
                    <div className="file-progress" role="status">
                      <div>
                        <span>comprobante-transferencia.pdf</span>
                        <strong>100%</strong>
                      </div>
                      <div className="progress">
                        <span />
                      </div>
                      <span className="status status--pacific">
                        ✓ Comprobante listo
                      </span>
                    </div>
                  )}
                </div>

                <div className="important-note" style={{ marginTop: "18px" }}>
                  <strong>⚠️ Plazo para enviar comprobante: 24 horas</strong>
                  <p>
                    Tus cupos se mantendrán reservados durante 24 horas a partir de la confirmación. Podrás remitir tu comprobante a <strong>pagos@travelinnovation.ec</strong> o cargarlo directamente desde la sección <strong>Mis compras</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="card-payment-body">
                {/* Banner específico cuando es Débito */}
                {method === "debito" && (
                  <div className="debit-info-banner">
                    <span aria-hidden="true" style={{ fontSize: "22px" }}>
                      ℹ️
                    </span>
                    <div>
                      <strong>Pago inmediato con tarjeta de débito</strong>
                      <p style={{ margin: "4px 0 0", color: "#475569" }}>
                        El cobro se debitará directamente de tu cuenta bancaria en un
                        solo pago por el monto total (${total},00).{" "}
                        <strong>
                          Las tarjetas de débito no admiten pago a plazos ni financiamiento diferido.
                        </strong>
                      </p>
                    </div>
                  </div>
                )}

                <div className="card-brands-row">
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--abyss)",
                    }}
                  >
                    {method === "debito"
                      ? "Redes de débito aceptadas:"
                      : "Tarjetas de crédito aceptadas:"}
                  </span>
                  {method === "debito" ? (
                    <>
                      <span className="card-brand-badge">VISA Débito</span>
                      <span className="card-brand-badge">Mastercard Débito</span>
                      <span className="card-brand-badge">Maestro</span>
                    </>
                  ) : (
                    <>
                      <span className="card-brand-badge">VISA</span>
                      <span className="card-brand-badge">Mastercard</span>
                      <span className="card-brand-badge">American Express</span>
                      <span className="card-brand-badge">Diners Club</span>
                      <span className="card-brand-badge">Discover</span>
                    </>
                  )}
                </div>

                <div style={{ marginTop: "12px" }}>
                  <Field
                    label="Número de tarjeta"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(val) => {
                      const clean = val.replace(/\D/g, "")
                      const formatted = clean
                        .replace(/(\d{4})/g, "$1 ")
                        .trim()
                      setCardNumber(formatted)
                      if (cardErrors.cardNumber)
                        setCardErrors((p) => ({ ...p, cardNumber: undefined }))
                    }}
                    error={cardErrors.cardNumber}
                    help={
                      method === "debito"
                        ? "16 dígitos de tu tarjeta de débito bancaria."
                        : "16 dígitos de tu tarjeta de crédito."
                    }
                    required
                  />
                </div>

                <div style={{ marginTop: "14px" }}>
                  <Field
                    label="Nombre del titular en la tarjeta"
                    placeholder="Como figura en el plástico"
                    value={cardHolder}
                    onChange={(val) => {
                      setCardHolder(val.toUpperCase())
                      if (cardErrors.cardHolder)
                        setCardErrors((p) => ({ ...p, cardHolder: undefined }))
                    }}
                    error={cardErrors.cardHolder}
                    help="Nombre y apellido tal como aparece en la tarjeta."
                    required
                  />
                </div>

                <div className="two-col" style={{ marginTop: "14px" }}>
                  <Field
                    label="Fecha de expiración"
                    placeholder="MM/AA"
                    value={cardExpiry}
                    onChange={(val) => {
                      let clean = val.replace(/[^\d/]/g, "")
                      if (!clean.includes("/") && clean.length > 2) {
                        clean = `${clean.slice(0, 2)}/${clean.slice(2)}`
                      }
                      setCardExpiry(clean)
                      if (cardErrors.cardExpiry)
                        setCardErrors((p) => ({ ...p, cardExpiry: undefined }))
                    }}
                    error={cardErrors.cardExpiry}
                    help="Mes y año en formato MM/AA (mes de 01 a 12)."
                    required
                  />

                  <Field
                    label="Código de seguridad (CVV)"
                    placeholder="3 dígitos"
                    type="password"
                    value={cardCvv}
                    onChange={(val) => {
                      const clean = val.replace(/\D/g, "")
                      setCardCvv(clean)
                      if (cardErrors.cardCvv)
                        setCardErrors((p) => ({ ...p, cardCvv: undefined }))
                    }}
                    error={cardErrors.cardCvv}
                    help="Exactamente 3 dígitos al reverso de tu tarjeta."
                    required
                  />
                </div>

                {/* En Débito NO hay pago a plazos. Solo en Crédito se muestra el selector de cuotas */}
                {method === "credito" && (
                  <div style={{ marginTop: "14px" }}>
                    <SelectField
                      label="Modalidad de pago / Diferido a plazos"
                      value={installments}
                      onChange={(val) => setInstallments(val)}
                      help="Selecciona si deseas pago corriente o cuotas diferidas con tu tarjeta de crédito."
                    >
                      {[
                        {
                          val: "6 cuotas sin intereses",
                          txt: `6 cuotas sin intereses ($${(total / 6).toFixed(2)}/mes)`,
                        },
                        {
                          val: "3 cuotas sin intereses",
                          txt: `3 cuotas sin intereses ($${(total / 3).toFixed(2)}/mes)`,
                        },
                        {
                          val: "12 cuotas con intereses",
                          txt: `12 cuotas con intereses ($${((total * 1.08) / 12).toFixed(2)}/mes)`,
                        },
                        {
                          val: "1 pago corriente (sin recargo)",
                          txt: `1 pago corriente ($${total})`,
                        },
                      ]
                        .sort((a, b) => a.txt.localeCompare(b.txt, "es"))
                        .map((opt) => (
                          <option key={opt.val} value={opt.val}>
                            {opt.txt}
                          </option>
                        ))}
                    </SelectField>
                  </div>
                )}

                <div className="security-badge">
                  <span aria-hidden="true">🔒</span>
                  <span>
                    <strong>Pago seguro:</strong> Transacción encriptada con
                    cifrado SSL de 256 bits y certificación PCI-DSS.
                  </span>
                </div>
              </div>
            )}

            <label className="check" style={{ marginTop: "20px" }}>
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => {
                  setAccepted(e.target.checked)
                  if (termsError) setTermsError(false)
                }}
              />
              <span>
                He leído y acepto la{" "}
                <button
                  type="button"
                  className="text-link inline"
                  onClick={() => setModal(true)}
                >
                  política de cancelación y reembolsos
                </button>
                .
              </span>
            </label>
            {termsError && (
              <p
                className="field__error"
                role="status"
                style={{ marginTop: "-8px", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span aria-hidden="true" style={{ background: "transparent", borderRadius: 0 }}>⚠️</span> Debes aceptar la política de cancelación y reembolsos para continuar.
              </p>
            )}

            <div className="split-actions" style={{ marginTop: "24px" }}>
              <Button kind="secondary" type="button" onClick={() => go("viajeros")}>
                Volver a datos de viajeros
              </Button>
              <Button kind="primary" type="button" onClick={handleConfirm}>
                {method === "transferencia"
                  ? file
                    ? "Confirmar comprobante y finalizar"
                    : "Confirmar reserva (plazo de 24h para transferir)"
                  : method === "debito"
                  ? `Pagar $${total} con débito y finalizar`
                  : `Pagar $${total} con crédito y finalizar`}
              </Button>
            </div>
          </article>
        </section>
        <Summary total={total} />
      </div>

      {modal && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setModal(false)}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="panel-heading">
              <h2 id="modal-title">Políticas de cancelación y reembolsos</h2>
              <button
                className="icon-button"
                aria-label="Cerrar modal"
                onClick={() => setModal(false)}
              >
                ×
              </button>
            </div>
            <p>
              Las cancelaciones voluntarias deben solicitarse con al menos 72
              horas hábiles de anticipación a la fecha de inicio del tour. Aplican
              excepciones por causas de fuerza mayor comprobadas y emergencias
              médicas debidamente documentadas.
            </p>
            <button
              className="text-link"
              type="button"
              onClick={() => {
                setModal(false)
                go("politicas")
              }}
            >
              Leer política completa
            </button>
            <div className="split-actions">
              <Button
                kind="secondary"
                type="button"
                onClick={() => setModal(false)}
              >
                Cerrar
              </Button>
              <Button
                kind="primary"
                type="button"
                onClick={() => {
                  setAccepted(true)
                  setTermsError(false)
                  setModal(false)
                }}
              >
                Aceptar política
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

