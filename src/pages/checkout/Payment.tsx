import React, { useState, useRef, useEffect } from "react"
import type { Page, CartItem, PersonalInfo, TravelerData, PaymentDetails, PaymentMethodType } from "../../types"
import { Button, Field, SelectField, PageTitle, Stepper, Summary } from "../../components/common"
import {
  EditPencilIcon,
  PinIcon,
  CalendarIcon,
  UsersGroupIcon,
  CreditCardIcon,
  BankIcon,
  CheckIcon,
  ShieldIcon,
  LockIcon,
  AlertTriangleIcon,
  InfoIcon,
} from "../../components/common/SvgIcons"
import { validateCardNumber, validateCardExpiry, validateCardCvv } from "../../utils/validation"
import { generateBookingCode } from "../../services/storage"

type CardBrand = "visa" | "mastercard" | "amex" | "diners" | "discover" | null

function detectCardBrand(num: string): CardBrand {
  const clean = num.replace(/\D/g, "")
  if (!clean) return null
  if (/^4/.test(clean)) return "visa"
  if (/^(5[1-5]|2[2-7])/.test(clean)) return "mastercard"
  if (/^3[47]/.test(clean)) return "amex"
  if (/^(36|38|30[0-5])/.test(clean)) return "diners"
  if (/^(6011|65|64[4-9])/.test(clean)) return "discover"
  return null
}

function formatCardNumber(value: string): string {
  const clean = value.replace(/\D/g, "")
  if (/^3[47]/.test(clean)) {
    // Amex: 4 - 6 - 5
    const p1 = clean.slice(0, 4)
    const p2 = clean.slice(4, 10)
    const p3 = clean.slice(10, 15)
    return [p1, p2, p3].filter(Boolean).join(" ")
  }
  // Demás marcas: 4 - 4 - 4 - 4
  const parts = clean.slice(0, 16).match(/.{1,4}/g)
  return parts ? parts.join(" ") : clean
}

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
  // Pestaña principal de método de pago: "tarjeta" o "transferencia"
  const [mainTab, setMainTab] = useState<"tarjeta" | "transferencia">(
    paymentData.method === "transferencia" ? "transferencia" : "tarjeta"
  )
  // Tipo de tarjeta dentro de la pestaña de tarjeta: "debito" o "credito"
  const [cardType, setCardType] = useState<"debito" | "credito">(
    paymentData.method === "debito" ? "debito" : "credito"
  )
  const [file, setFile] = useState(paymentData.bankVoucherUploaded || false)
  const [voucherNumber, setVoucherNumber] = useState(
    paymentData.bankVoucherNumber || ""
  )
  const [voucherError, setVoucherError] = useState("")

  // Campos de tarjeta
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

  const detectedBrand = detectCardBrand(cardNumber)

  const syncPaymentData = (overrides: Partial<PaymentDetails> = {}) => {
    const effectiveMethod: PaymentMethodType =
      overrides.method !== undefined
        ? overrides.method
        : mainTab === "transferencia"
        ? "transferencia"
        : cardType

    onSavePaymentData({
      method: effectiveMethod,
      bankVoucherNumber:
        overrides.bankVoucherNumber !== undefined
          ? overrides.bankVoucherNumber
          : voucherNumber,
      bankVoucherUploaded:
        overrides.bankVoucherUploaded !== undefined
          ? overrides.bankVoucherUploaded
          : file,
      cardNumber:
        overrides.cardNumber !== undefined ? overrides.cardNumber : cardNumber,
      cardHolder:
        overrides.cardHolder !== undefined ? overrides.cardHolder : cardHolder,
      cardExpiry:
        overrides.cardExpiry !== undefined ? overrides.cardExpiry : cardExpiry,
      cardCvv: overrides.cardCvv !== undefined ? overrides.cardCvv : cardCvv,
      installments:
        overrides.installments !== undefined
          ? overrides.installments
          : effectiveMethod === "debito"
          ? "1 pago directo (débito)"
          : installments,
    })
  }

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

    if (mainTab === "transferencia") {
      const finalPayment: PaymentDetails = {
        method: "transferencia",
        bankVoucherNumber: "",
        bankVoucherUploaded: false,
      }
      onSavePaymentData(finalPayment)
      onConfirmReservation(bookingRefCode, finalPayment)
      go("confirmacion")
    } else {
      // Validación de tarjeta (débito o crédito)
      let hasError = false
      const nextErrs: typeof cardErrors = {}

      // Validar número de tarjeta (15 a 16 dígitos, Luhn y no repetidos)
      const cardRes = validateCardNumber(cardNumber)
      if (!cardRes.isValid) {
        nextErrs.cardNumber = cardRes.error
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
        hasError = true
      }

      // Validar código de seguridad (CVV de 4 dígitos para Amex, 3 dígitos para demás)
      const expectedCvvLen = detectedBrand === "amex" ? 4 : 3
      const cvvRes = validateCardCvv(cardCvv, expectedCvvLen)
      if (!cvvRes.isValid) {
        nextErrs.cardCvv = cvvRes.error
        hasError = true
      }

      setCardErrors(nextErrs)
      if (hasError) {
        return
      }

      const finalPayment: PaymentDetails = {
        method: cardType,
        cardNumber,
        cardHolder: cardHolder.trim(),
        cardExpiry,
        cardCvv,
        installments:
          cardType === "debito"
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
              <Button kind="quiet" type="button" onClick={() => { syncPaymentData(); go("identificacion"); }} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <span>Editar datos</span>
                <EditPencilIcon size={13} />
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
              <Button kind="quiet" type="button" onClick={() => { syncPaymentData(); go("carrito"); }} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <span>Editar carrito</span>
                <EditPencilIcon size={13} />
              </Button>
            </div>
            <div className="cart-checkout-summary-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-summary-item-row">
                  <div>
                    <strong style={{ fontSize: "16px" }}>{item.pkg.name}</strong>
                    <small style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <PinIcon size={13} color="var(--pacific)" /> {item.pkg.city} ({item.pkg.province}) · <CalendarIcon size={13} color="var(--pacific)" /> {item.date}
                    </small>
                    <small style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <UsersGroupIcon size={13} color="var(--pacific)" /> {item.people}{" "}
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

          {/* 3. Selección de método de pago (2 opciones principales: Tarjeta de crédito o débito, y Transferencia) */}
          <article className="form-panel">
            <h2>Método de pago</h2>
            <div className="payment-method-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={mainTab === "tarjeta"}
                className={`payment-tab-btn ${
                  mainTab === "tarjeta" ? "is-active" : ""
                }`}
                onClick={() => {
                  setMainTab("tarjeta")
                  syncPaymentData({ method: cardType })
                }}
              >
                <span className="tab-icon"><CreditCardIcon size={20} /></span>
                <div className="tab-text">
                  <strong>Tarjeta de crédito o débito</strong>
                  <small>Visa, Mastercard, Amex, Diners · Directo o cuotas</small>
                </div>
                {mainTab === "tarjeta" && <span className="tab-check"><CheckIcon size={14} color="#ffffff" /></span>}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={mainTab === "transferencia"}
                className={`payment-tab-btn ${
                  mainTab === "transferencia" ? "is-active" : ""
                }`}
                onClick={() => {
                  setMainTab("transferencia")
                  syncPaymentData({ method: "transferencia" })
                }}
              >
                <span className="tab-icon"><BankIcon size={20} /></span>
                <div className="tab-text">
                  <strong>Transferencia bancaria</strong>
                  <small>Depósito o transferencia · Plazo de 24 horas</small>
                </div>
                {mainTab === "transferencia" && (
                  <span className="tab-check"><CheckIcon size={14} color="#ffffff" /></span>
                )}
              </button>
            </div>

            {mainTab === "transferencia" ? (
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
                  {bankData.map(([label, value]) => {
                    const isAccountNumber = label === "Número de cuenta"
                    return (
                      <div key={label}>
                        <span>
                          <small>{label}</small>
                          <strong>{value}</strong>
                        </span>
                        {isAccountNumber && (
                          <Button
                            kind="quiet"
                            type="button"
                            onClick={() => {
                              if (navigator?.clipboard?.writeText) {
                                navigator.clipboard.writeText(value).catch(() => {})
                              }
                              setCopied(label)
                              setTimeout(() => setCopied(""), 2000)
                            }}
                          >
                            {copied === label ? (
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                <span>Copiado</span>
                                <CheckIcon size={12} color="currentColor" />
                              </span>
                            ) : (
                              "Copiar"
                            )}
                          </Button>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div
                  className="transfer-guarantee-card"
                  style={{
                    marginTop: "20px",
                    padding: "20px",
                    borderRadius: "var(--radius)",
                    background: "#eef6f9",
                    border: "1.5px solid var(--pacific)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        minWidth: "42px",
                        borderRadius: "50%",
                        background: "var(--pacific)",
                        color: "#ffffff",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <ShieldIcon size={22} color="#ffffff" />
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "16px",
                          color: "var(--pacific)",
                          marginBottom: "4px",
                        }}
                      >
                        Reserva garantizada por 24 horas sin pago inmediato
                      </strong>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          color: "#334155",
                          lineHeight: 1.5,
                        }}
                      >
                        Al confirmar este paso, bloquearemos y garantizaremos tus cupos
                        durante <strong>24 horas</strong>. No necesitas transferir en este
                        instante. Emitiremos tu código oficial de reserva y podrás
                        adjuntar tu comprobante de pago al finalizar o desde Mis compras.
                      </p>
                    </div>
                  </div>

                  <div
                    className="transfer-steps-flow"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "12px",
                      paddingTop: "14px",
                      borderTop: "1px solid rgba(27, 73, 101, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid rgba(27, 73, 101, 0.15)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "var(--pacific)",
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: 700,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          1
                        </span>
                        <strong
                          style={{ fontSize: "13px", color: "var(--pacific)" }}
                        >
                          Confirma tu reserva
                        </strong>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#5a6e7f",
                          lineHeight: 1.4,
                        }}
                      >
                        Haz clic abajo para emitir tu código oficial y asegurar tus cupos de inmediato.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#ffffff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid rgba(27, 73, 101, 0.15)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "var(--pacific)",
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: 700,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          2
                        </span>
                        <strong
                          style={{ fontSize: "13px", color: "var(--pacific)" }}
                        >
                          Transfiere a tu ritmo
                        </strong>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#5a6e7f",
                          lineHeight: 1.4,
                        }}
                      >
                        Tienes 24 horas para transferir desde tu banca móvil usando tu código como referencia.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#ffffff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid rgba(27, 73, 101, 0.15)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "var(--pacific)",
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: 700,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          3
                        </span>
                        <strong
                          style={{ fontSize: "13px", color: "var(--pacific)" }}
                        >
                          Adjunta comprobante
                        </strong>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#5a6e7f",
                          lineHeight: 1.4,
                        }}
                      >
                        Sube tu comprobante en la pantalla final de confirmación, desde tu correo o en Mis compras.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="important-note" style={{ marginTop: "16px" }}>
                  <strong style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <InfoIcon size={16} color="#0284c7" /> Plazo para remitir comprobante: 24 horas
                  </strong>
                  <p>
                    Tus cupos se mantendrán asegurados durante 24 horas a partir de la confirmación. Podrás adjuntar tu comprobante de inmediato en la siguiente pantalla, o cuando lo tengas listo desde la sección <strong>Mis compras</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="card-payment-body">
                {/* Selector de tipo de tarjeta: Débito vs Crédito */}
                <div style={{ marginBottom: "16px" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--abyss)",
                      marginBottom: "8px",
                    }}
                  >
                    Modalidad de tu tarjeta:
                  </span>
                  <div className="card-type-selector">
                    <label
                      className={`card-type-option ${
                        cardType === "debito" ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="cardTypeSelection"
                        value="debito"
                        checked={cardType === "debito"}
                        onChange={() => {
                          setCardType("debito")
                          syncPaymentData({
                            method: "debito",
                            installments: "1 pago directo (débito)",
                          })
                        }}
                      />
                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: "14px",
                            color: "var(--abyss)",
                          }}
                        >
                          Tarjeta de débito
                        </strong>
                        <small style={{ fontSize: "12px", color: "#5a6e7f" }}>
                          Pago directo de contado · Sin diferidos
                        </small>
                      </div>
                    </label>

                    <label
                      className={`card-type-option ${
                        cardType === "credito" ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="cardTypeSelection"
                        value="credito"
                        checked={cardType === "credito"}
                        onChange={() => {
                          setCardType("credito")
                          syncPaymentData({
                            method: "credito",
                            installments: installments,
                          })
                        }}
                      />
                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: "14px",
                            color: "var(--abyss)",
                          }}
                        >
                          Tarjeta de crédito
                        </strong>
                        <small style={{ fontSize: "12px", color: "#5a6e7f" }}>
                          Pago corriente o diferido a cuotas
                        </small>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Banner específico cuando es Débito */}
                {cardType === "debito" && (
                  <div className="debit-info-banner">
                    <span aria-hidden="true" style={{ display: "grid", placeItems: "center" }}>
                      <InfoIcon size={24} color="#0284c7" />
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

                {/* Marcas aceptadas con iluminación dinámica por auto-detección */}
                <div className="card-brands-row">
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--abyss)",
                    }}
                  >
                    Marcas aceptadas:
                  </span>
                  {[
                    { id: "visa", label: "VISA" },
                    { id: "mastercard", label: "Mastercard" },
                    { id: "amex", label: "American Express" },
                    { id: "diners", label: "Diners Club" },
                    { id: "discover", label: "Discover" },
                  ].map((b) => (
                    <span
                      key={b.id}
                      className={`card-brand-badge ${
                        detectedBrand === b.id ? "is-detected" : ""
                      }`}
                    >
                      {detectedBrand === b.id && (
                        <span style={{ marginRight: "4px", display: "inline-flex", alignItems: "center" }}><CheckIcon size={12} color="currentColor" /></span>
                      )}
                      {b.label}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "12px" }}>
                  <Field
                    label={
                      detectedBrand === "visa"
                        ? "Número de tarjeta (Detectada: VISA)"
                        : detectedBrand === "mastercard"
                        ? "Número de tarjeta (Detectada: Mastercard)"
                        : detectedBrand === "amex"
                        ? "Número de tarjeta (Detectada: American Express)"
                        : detectedBrand === "diners"
                        ? "Número de tarjeta (Detectada: Diners Club)"
                        : detectedBrand === "discover"
                        ? "Número de tarjeta (Detectada: Discover)"
                        : "Número de tarjeta"
                    }
                    placeholder={
                      detectedBrand === "amex"
                        ? "3782 822468 95001"
                        : "1234 5678 9012 3456"
                    }
                    value={cardNumber}
                    inputMode="numeric"
                    maxLength={detectedBrand === "amex" ? 17 : 19}
                    onChange={(val) => {
                      const formatted = formatCardNumber(val)
                      setCardNumber(formatted)
                      syncPaymentData({ cardNumber: formatted })
                      if (cardErrors.cardNumber)
                        setCardErrors((p) => ({ ...p, cardNumber: undefined }))
                    }}
                    error={cardErrors.cardNumber}
                    help={
                      detectedBrand === "amex"
                        ? "15 dígitos de tu tarjeta American Express (formato 4-6-5)."
                        : cardType === "debito"
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
                      const formatted = val.toUpperCase()
                      setCardHolder(formatted)
                      syncPaymentData({ cardHolder: formatted })
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
                    inputMode="numeric"
                    maxLength={5}
                    onChange={(val) => {
                      let clean = val.replace(/[^\d/]/g, "")
                      if (!clean.includes("/") && clean.length > 2) {
                        clean = `${clean.slice(0, 2)}/${clean.slice(2)}`
                      }
                      if (clean.length > 5) {
                        clean = clean.slice(0, 5)
                      }
                      setCardExpiry(clean)
                      syncPaymentData({ cardExpiry: clean })
                      if (cardErrors.cardExpiry)
                        setCardErrors((p) => ({ ...p, cardExpiry: undefined }))
                    }}
                    error={cardErrors.cardExpiry}
                    help="Mes y año en formato MM/AA (mes de 01 a 12)."
                    required
                  />

                  <Field
                    label={
                      detectedBrand === "amex"
                        ? "Código de seguridad (4 dígitos Amex)"
                        : "Código de seguridad (CVV)"
                    }
                    placeholder={detectedBrand === "amex" ? "1234" : "123"}
                    type="password"
                    inputMode="numeric"
                    maxLength={detectedBrand === "amex" ? 4 : 3}
                    value={cardCvv}
                    onChange={(val) => {
                      const clean = val.replace(/\D/g, "")
                      const maxLen = detectedBrand === "amex" ? 4 : 3
                      const truncated = clean.slice(0, maxLen)
                      setCardCvv(truncated)
                      syncPaymentData({ cardCvv: truncated })
                      if (cardErrors.cardCvv)
                        setCardErrors((p) => ({ ...p, cardCvv: undefined }))
                    }}
                    error={cardErrors.cardCvv}
                    help={
                      detectedBrand === "amex"
                        ? "Exactamente 4 dígitos impresos al frente de tu tarjeta American Express."
                        : "Exactamente 3 dígitos al reverso de tu tarjeta."
                    }
                    required
                  />
                </div>

                {/* En Débito NO hay pago a plazos. Solo en Crédito se muestra el selector de cuotas */}
                {cardType === "credito" && (
                  <div style={{ marginTop: "14px" }}>
                    <SelectField
                      label="Modalidad de pago / Diferido a plazos"
                      value={installments}
                      onChange={(val) => {
                        setInstallments(val)
                        syncPaymentData({ installments: val })
                      }}
                      help="Selecciona si deseas pago corriente o cuotas diferidas con tu tarjeta de crédito."
                    >
                      {[
                        {
                          val: "1 pago corriente (sin recargo)",
                          txt: `1 pago corriente ($${total},00)`,
                        },
                        {
                          val: "3 cuotas sin intereses",
                          txt: `3 cuotas sin intereses ($${(total / 3).toFixed(2)}/mes) · Sin intereses`,
                        },
                        {
                          val: "6 cuotas sin intereses",
                          txt: `6 cuotas sin intereses ($${(total / 6).toFixed(2)}/mes) · Sin intereses`,
                        },
                        {
                          val: "12 cuotas con intereses",
                          txt: `12 cuotas con intereses ($${((total * 1.08) / 12).toFixed(2)}/mes)`,
                        },
                      ].map((opt) => (
                        <option key={opt.val} value={opt.val}>
                          {opt.txt}
                        </option>
                      ))}
                    </SelectField>
                  </div>
                )}

                <div className="security-badge" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <LockIcon size={16} color="var(--pacific)" />
                  <span>
                    <strong>Pago seguro:</strong> Transacción encriptada con
                    cifrado SSL de 256 bits y certificación PCI-DSS.
                  </span>
                </div>
              </div>
            )}

            <label
              className="check"
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={accepted}
                aria-invalid={termsError}
                className={`terms-checkbox ${termsError ? "terms-checkbox--error" : ""}`}
                style={{
                  width: "20px",
                  height: "20px",
                  minWidth: "20px",
                  cursor: "pointer",
                  accentColor: "var(--pacific)",
                  border: termsError ? "2px solid #e05252" : undefined,
                  outline: termsError ? "2px solid #e05252" : undefined,
                  outlineOffset: "1.5px",
                  boxShadow: termsError ? "0 0 0 2px rgba(224, 82, 82, 0.35)" : undefined,
                  borderRadius: "3px",
                  transition: "all 0.15s ease",
                }}
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
                <AlertTriangleIcon size={16} color="var(--error, #dc2626)" /> Debes aceptar la política de cancelación y reembolsos para continuar.
              </p>
            )}

            <div className="split-actions" style={{ marginTop: "24px" }}>
              <Button
                kind="secondary"
                type="button"
                onClick={() => {
                  syncPaymentData()
                  go("viajeros")
                }}
              >
                Volver a datos de viajeros
              </Button>
              <Button kind="primary" type="button" onClick={handleConfirm}>
                {mainTab === "transferencia"
                  ? "Confirmar reserva y obtener datos de pago"
                  : cardType === "debito"
                  ? `Pagar $${total} con débito y finalizar`
                  : installments.includes("cuotas")
                  ? `Pagar $${total} con crédito (${installments.split(" ")[0]} cuotas) y finalizar`
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

