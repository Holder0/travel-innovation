import React, { useState, useRef, useEffect } from "react"
import { Button } from "../common/Button"
import { Field } from "../common/Field"
import { getRegisteredUsers, saveRegisteredUsers } from "../../services/storage"
import type { RegisteredUserRecord } from "../../types"

export function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean
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

  // Always reset to login view when opening the modal
  useEffect(() => {
    if (isOpen) {
      setMode("login")
      setErrorMsg("")
      setRecoverySubmitted(false)
    }
  }, [isOpen])

  // Clear errors when toggling modes
  useEffect(() => {
    if (isOpen) {
      setErrorMsg("")
    }
  }, [mode, isOpen])

  // Support closing via Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  // Handle clicking outside the modal dialog
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
    handleClose()
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
      setErrorMsg(`Faltan caracteres: la contraseña debe tener al menos 6 caracteres (ingresaste ${regPassword.length}).`)
      setRegPassword("")
      setRegConfirmPassword("")
      return
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg("Las contraseñas no concuerdan. Por favor verifica que sean iguales.")
      setRegPassword("")
      setRegConfirmPassword("")
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
    handleClose()
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
        className="modal auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="panel-heading">
          <h2 id="auth-modal-title">
            {mode === "login" && "Ingresar a tu cuenta"}
            {mode === "register" && "Crear una cuenta"}
            {mode === "recovery" && "Recuperar contraseña"}
          </h2>
          <button
            className="icon-button"
            aria-label="Cerrar ventana emergente"
            onClick={handleClose}
            type="button"
          >
            ×
          </button>
        </div>

        <p className="auth-modal-subtitle">
          {mode === "login" && "Accede a tu cuenta para gestionar tus reservas y explorar Ecuador."}
          {mode === "register" && "Ingresa tus datos personales para registrarte y gestionar tus viajes."}
          {mode === "recovery" && "Ingresa tu correo para recibir las instrucciones de recuperación."}
        </p>

        {errorMsg && (
          <div
            className="inline-alert"
            role="alert"
            style={{ marginBottom: "16px", padding: "12px 14px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span aria-hidden="true">⚠️</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--error)" }}>
                {errorMsg}
              </span>
            </div>
          </div>
        )}

        {mode === "login" && (
          <>
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <Field
                id="login-email"
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={setEmail}
                required
                autoFocus
              />

              <Field
                id="login-password"
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

              <Button kind="primary" type="submit">
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
              >
                Crear una cuenta
              </Button>
            </div>
          </>
        )}

        {mode === "register" && (
          <>
            <div
              className="inline-alert"
              style={{ marginBottom: "16px", padding: "12px 14px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span aria-hidden="true">⚠️</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--abyss)" }}>
                  Ingresa tus datos personales para crear tu cuenta y gestionar tus viajes.
                </span>
              </div>
            </div>
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <div className="auth-form-row">
                <Field
                  id="reg-first-name"
                  label="Primer nombre"
                  type="text"
                  placeholder="Ej. Carlos"
                  value={firstName}
                  onChange={setFirstName}
                  required
                  autoFocus
                />
                <Field
                  id="reg-second-name"
                  label="Segundo nombre (opcional)"
                  type="text"
                  placeholder="Ej. Andrés"
                  value={secondName}
                  onChange={setSecondName}
                />
              </div>

              <div className="auth-form-row">
                <Field
                  id="reg-first-lastname"
                  label="Primer apellido"
                  type="text"
                  placeholder="Ej. Mendoza"
                  value={firstLastName}
                  onChange={setFirstLastName}
                  required
                />
                <Field
                  id="reg-second-lastname"
                  label="Segundo apellido (opcional)"
                  type="text"
                  placeholder="Ej. Salazar"
                  value={secondLastName}
                  onChange={setSecondLastName}
                />
              </div>

              <Field
                id="reg-email"
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@correo.com"
                value={regEmail}
                onChange={setRegEmail}
                required
              />

              <Field
                id="reg-password"
                label="Contraseña"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={regPassword}
                onChange={setRegPassword}
                required
              />

              <Field
                id="reg-confirm-password"
                label="Confirmar contraseña"
                type="password"
                placeholder="Repite tu contraseña"
                value={regConfirmPassword}
                onChange={setRegConfirmPassword}
                required
              />

              <Button kind="primary" type="submit">
                Crear cuenta
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
              >
                Ingresar a tu cuenta
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
                  <div className="auth-alert-content">
                    Te hemos enviado un enlace de recuperación a <strong>{email}</strong>. Revisa tu bandeja de entrada o spam.
                  </div>
                </div>
              </div>
            ) : (
              <form className="auth-form" onSubmit={handleRecoverySubmit}>
                <Field
                  id="rec-email"
                  label="Correo electrónico registrado"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={setEmail}
                  required
                  autoFocus
                />

                <Button kind="primary" type="submit">
                  Enviar instrucciones
                </Button>
              </form>
            )}

            <hr className="modal-divider-line" />

            <div className="auth-switch-section">
              <Button
                kind="secondary"
                type="button"
                onClick={() => {
                  setErrorMsg("")
                  setMode("login")
                }}
              >
                Volver a ingresar
              </Button>
            </div>
          </>
        )}
      </section>
    </div>
  )
}


