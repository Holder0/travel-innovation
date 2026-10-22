import React, { useState, useRef, useEffect } from "react"
import { Button } from "../common/Button"
import { Field } from "../common/Field"
import { getRegisteredUsers, saveRegisteredUsers } from "../../services/storage"
import type { CartItem, RegisteredUserRecord } from "../../types"

export function AuthCheckoutModal({
  isOpen,
  items,
  grandTotal,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean
  items: CartItem[]
  grandTotal: number
  onClose: () => void
  onLoginSuccess: (user: { name: string; email: string }) => void
}) {
  const modalRef = useRef<HTMLElement>(null)
  const [mode, setMode] = useState<"login" | "register" | "recovery">("login")

  // Login credentials
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Registration fields
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [firstLastName, setFirstLastName] = useState("")
  const [secondLastName, setSecondLastName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [regConfirmPassword, setRegConfirmPassword] = useState("")

  // Error & recovery feedback
  const [errorMsg, setErrorMsg] = useState("")
  const [recoverySubmitted, setRecoverySubmitted] = useState(false)

  const handleClose = () => {
    setMode("login")
    setErrorMsg("")
    setRecoverySubmitted(false)
    onClose()
  }

  useEffect(() => {
    if (isOpen) {
      setMode("login")
      setErrorMsg("")
      setRecoverySubmitted(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setErrorMsg("")
    }
  }, [mode, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target === e.currentTarget ||
      (modalRef.current && !modalRef.current.contains(e.target as Node))
    ) {
      handleClose()
    }
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Por favor completa tu correo y contraseña.")
      return
    }
    const regUsers = getRegisteredUsers()
    const emailKey = email.trim().toLowerCase()
    const record = regUsers[emailKey]

    if (!record || record.password !== password) {
      setErrorMsg("Correo o contraseña incorrectos.")
      return
    }

    onLoginSuccess({ name: record.fullName, email: record.email })
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim()) {
      setErrorMsg("Por favor ingresa tu primer nombre.")
      return
    }
    if (!firstLastName.trim()) {
      setErrorMsg("Por favor ingresa tu primer apellido.")
      return
    }
    if (!regEmail.trim()) {
      setErrorMsg("Por favor ingresa tu correo electrónico.")
      return
    }
    if (!regPassword) {
      setErrorMsg("Por favor ingresa tu contraseña.")
      return
    }
    if (regPassword.length < 6) {
      setErrorMsg("La contraseña debe tener al menos 6 caracteres.")
      return
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg("Las contraseñas no concuerdan. Por favor verifica que sean iguales.")
      return
    }

    const regUsers = getRegisteredUsers()
    const emailKey = regEmail.trim().toLowerCase()
    if (regUsers[emailKey]) {
      setErrorMsg("Ya existe una cuenta registrada con este correo electrónico.")
      return
    }

    const displayName = [
      firstName.trim(),
      secondName.trim(),
      firstLastName.trim(),
      secondLastName.trim(),
    ]
      .filter(Boolean)
      .join(" ")

    const newRecord: RegisteredUserRecord = {
      email: regEmail.trim(),
      password: regPassword,
      firstName: firstName.trim(),
      secondName: secondName.trim(),
      firstLastName: firstLastName.trim(),
      secondLastName: secondLastName.trim(),
      fullName: displayName,
    }

    regUsers[emailKey] = newRecord
    saveRegisteredUsers(regUsers)

    onLoginSuccess({ name: displayName, email: regEmail.trim() })
  }

  const handleRecoverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setErrorMsg("Por favor ingresa tu correo electrónico.")
      return
    }
    setRecoverySubmitted(true)
    setErrorMsg("")
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <section
        ref={modalRef}
        className="modal auth-checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-checkout-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-checkout-grid">
          {/* Columna izquierda: Resumen de la compra */}
          <div className="auth-checkout-summary-col">
            <div className="panel-heading" style={{ marginBottom: "4px" }}>
              <h2 id="auth-checkout-modal-title" style={{ fontSize: "20px", margin: 0, color: "var(--pacific)" }}>
                Resumen de compra
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "260px",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "var(--sand)",
                    border: "1px solid var(--pacific)",
                    borderRadius: "var(--radius)",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span className="eyebrow" style={{ fontSize: "11px", marginBottom: "0" }}>
                    {item.pkg.region}
                  </span>
                  <strong style={{ fontSize: "15px", color: "var(--abyss)" }}>
                    {item.pkg.name}
                  </strong>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      color: "var(--abyss)",
                      opacity: 0.85,
                      marginTop: "2px",
                    }}
                  >
                    <span>📅 {item.date}</span>
                    <span>👥 {item.people} {item.people === 1 ? "viajero" : "viajeros"}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      fontWeight: 700,
                      marginTop: "6px",
                      borderTop: "1px dashed rgba(14, 116, 144, 0.25)",
                      paddingTop: "4px",
                    }}
                  >
                    <span>Subtotal</span>
                    <span style={{ color: "var(--pacific)" }}>${item.total}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--pacific)",
                paddingTop: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span>Subtotal</span>
                <strong>${Math.round(grandTotal / 1.15)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span>Impuestos (IVA)</span>
                <strong>${grandTotal - Math.round(grandTotal / 1.15)}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "2px solid var(--pacific)",
                  paddingTop: "12px",
                  marginTop: "4px",
                }}
              >
                <strong style={{ fontSize: "18px", color: "var(--pacific)" }}>Total</strong>
                <strong style={{ fontSize: "22px", color: "var(--pacific)" }}>${grandTotal}</strong>
              </div>
            </div>
          </div>

          {/* Columna derecha: Aviso de cuenta requerida e Inicio de sesión */}
          <div className="auth-checkout-form-col">
            <div
              className="inline-alert"
              style={{
                margin: "0 0 16px 0",
                padding: "14px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span aria-hidden="true" style={{ fontSize: "16px" }}>
                  ⚠️
                </span>
                <span style={{ fontSize: "14px", color: "var(--abyss)", fontWeight: 600, lineHeight: 1.4 }}>
                  {mode === "register"
                    ? "Para continuar con tu compra, crea tu cuenta o ingresa si ya tienes una."
                    : "Para continuar necesitas ingresar en una cuenta."}
                </span>
              </div>
            </div>

            <div className="panel-heading" style={{ marginBottom: "6px" }}>
              <h2 style={{ fontSize: "22px", margin: 0, color: "var(--pacific)" }}>
                {mode === "login" && "Ingresar a tu cuenta"}
                {mode === "register" && "Crear una cuenta"}
                {mode === "recovery" && "Recuperar contraseña"}
              </h2>
              <button
                className="icon-button"
                aria-label="Cerrar ventana emergente"
                onClick={handleClose}
                type="button"
                style={{ fontSize: "24px", lineHeight: 1 }}
              >
                ×
              </button>
            </div>

            <p className="auth-modal-subtitle" style={{ margin: "0 0 16px 0" }}>
              {mode === "login" && "Accede a tu cuenta para gestionar tus reservas y explorar Ecuador."}
              {mode === "register" && "Ingresa tus datos personales para registrarte y continuar con tu reserva."}
              {mode === "recovery" && "Ingresa tu correo para recibir las instrucciones de recuperación."}
            </p>

            {errorMsg && (
              <div
                className="inline-alert"
                role="alert"
                style={{ margin: "0 0 16px 0", padding: "12px 14px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span aria-hidden="true">⚠️</span>
                  <span style={{ fontSize: "14px", color: "var(--error)", fontWeight: 600 }}>
                    {errorMsg}
                  </span>
                </div>
              </div>
            )}

            {mode === "login" && (
              <>
                <form className="auth-form" onSubmit={handleLoginSubmit}>
                  <Field
                    id="checkout-login-email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={setEmail}
                    required
                    autoFocus
                  />

                  <Field
                    id="checkout-login-password"
                    label="Contraseña"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={setPassword}
                    required
                  />

                  <button
                    type="button"
                    className="auth-forgot-link"
                    onClick={() => {
                      setErrorMsg("")
                      setMode("recovery")
                    }}
                  >
                    Recuperar la contraseña
                  </button>

                  <Button kind="primary" type="submit" style={{ width: "100%", marginTop: "4px" }}>
                    Ingresar
                  </Button>
                </form>

                <hr className="modal-divider-line" />

                <div className="auth-switch-section">
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--abyss)" }}>
                    ¿No tienes una cuenta?
                  </p>
                  <Button
                    kind="secondary"
                    type="button"
                    onClick={() => {
                      setErrorMsg("")
                      setMode("register")
                    }}
                    style={{ width: "100%", marginTop: "8px" }}
                  >
                    Crear una cuenta
                  </Button>
                </div>
              </>
            )}

            {mode === "register" && (
              <>
                <form className="auth-form" onSubmit={handleRegisterSubmit}>
                  <div className="auth-form-row">
                    <Field
                      id="checkout-reg-firstname"
                      label="Primer nombre"
                      placeholder="Ej. Juan"
                      value={firstName}
                      onChange={setFirstName}
                      required
                      autoFocus
                    />
                    <Field
                      id="checkout-reg-secondname"
                      label="Segundo nombre (opcional)"
                      placeholder="Ej. Carlos"
                      value={secondName}
                      onChange={setSecondName}
                    />
                  </div>

                  <div className="auth-form-row">
                    <Field
                      id="checkout-reg-firstlastname"
                      label="Primer apellido"
                      placeholder="Ej. Pérez"
                      value={firstLastName}
                      onChange={setFirstLastName}
                      required
                    />
                    <Field
                      id="checkout-reg-secondlastname"
                      label="Segundo apellido (opcional)"
                      placeholder="Ej. Gómez"
                      value={secondLastName}
                      onChange={setSecondLastName}
                    />
                  </div>

                  <Field
                    id="checkout-reg-email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="nombre@correo.com"
                    value={regEmail}
                    onChange={setRegEmail}
                    required
                  />

                  <Field
                    id="checkout-reg-password"
                    label="Contraseña"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={regPassword}
                    onChange={setRegPassword}
                    required
                  />

                  <Field
                    id="checkout-reg-confirm-password"
                    label="Confirmar contraseña"
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={regConfirmPassword}
                    onChange={setRegConfirmPassword}
                    required
                  />

                  <Button kind="primary" type="submit" style={{ width: "100%", marginTop: "4px" }}>
                    Crear cuenta y continuar
                  </Button>
                </form>

                <hr className="modal-divider-line" />

                <div className="auth-switch-section">
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--abyss)" }}>
                    ¿Ya tienes una cuenta?
                  </p>
                  <Button
                    kind="secondary"
                    type="button"
                    onClick={() => {
                      setErrorMsg("")
                      setMode("login")
                    }}
                    style={{ width: "100%", marginTop: "8px" }}
                  >
                    Ingresar a mi cuenta
                  </Button>
                </div>
              </>
            )}

            {mode === "recovery" && (
              <>
                {recoverySubmitted ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div className="auth-alert-success" role="status">
                      <span className="auth-alert-icon" aria-hidden="true">✓</span>
                      <p className="auth-alert-content">
                        Hemos enviado un correo a <strong>{email}</strong> con las instrucciones para restablecer tu contraseña.
                      </p>
                    </div>
                    <Button
                      kind="primary"
                      type="button"
                      onClick={() => {
                        setRecoverySubmitted(false)
                        setMode("login")
                      }}
                      style={{ width: "100%" }}
                    >
                      Volver a iniciar sesión
                    </Button>
                  </div>
                ) : (
                  <form className="auth-form" onSubmit={handleRecoverySubmit}>
                    <Field
                      id="checkout-recovery-email"
                      label="Correo electrónico"
                      type="email"
                      placeholder="nombre@correo.com"
                      value={email}
                      onChange={setEmail}
                      required
                      autoFocus
                    />
                    <Button kind="primary" type="submit" style={{ width: "100%", marginTop: "4px" }}>
                      Enviar enlace de recuperación
                    </Button>
                    <Button
                      kind="secondary"
                      type="button"
                      onClick={() => setMode("login")}
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      Volver a ingresar
                    </Button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

