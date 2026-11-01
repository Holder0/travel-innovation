import React, { useState, useRef, useEffect } from "react"
import { Button } from "../common/Button"
import { Field } from "../common/Field"
import { getRegisteredUsers, saveRegisteredUsers } from "../../services/storage"
import { signInWithSupabase, signUpWithSupabase } from "../../services/supabaseService"
import type { RegisteredUserRecord, AppCurrentUser } from "../../types"

export function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: (user: AppCurrentUser) => void
}) {
  const modalRef = useRef<HTMLElement>(null)
  const [mode, setMode] = useState<"login" | "register" | "recovery">("login")

  // Login credentials
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Registration fields
  const [firstName, setFirstName] = useState("")
  const [firstLastName, setFirstLastName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [regConfirmPassword, setRegConfirmPassword] = useState("")

  // Error & recovery feedback
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [recoverySubmitted, setRecoverySubmitted] = useState(false)
  const [passwordWarning, setPasswordWarning] = useState(false)
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState(false)


  const handleClose = () => {
    setMode("login")
    setErrorMsg("")
    setRecoverySubmitted(false)
    setPasswordWarning(false)
    setConfirmPasswordWarning(false)
    onClose()
  }

  // Always reset to login view when opening the modal
  useEffect(() => {
    if (isOpen) {
      setMode("login")
      setErrorMsg("")
      setRecoverySubmitted(false)
      setPasswordWarning(false)
      setConfirmPasswordWarning(false)
    }
  }, [isOpen])

  // Clear errors when toggling modes
  useEffect(() => {
    if (isOpen) {
      setErrorMsg("")
      setPasswordWarning(false)
      setConfirmPasswordWarning(false)
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

  // Diccionario de usuarios institucionales de prueba (10 cuentas en Supabase)
  const SEED_TEST_USERS: Record<string, { name: string; role: string; pass: string }> = {
    "carlos.mendoza@travelinnovation.ec": { name: "Carlos Andrés Mendoza", role: "CLIENTE", pass: "Temporal2026!" },
    "maria.salazar@travelinnovation.ec": { name: "María Belén Salazar", role: "AGENTE_VENTAS", pass: "Temporal2026!" },
    "admin@travelinnovation.ec": { name: "Santiago David Herrera (Admin)", role: "ADMINISTRADOR", pass: "Temporal2026!" },
    "juan.perez@email.com": { name: "Juan Sebastián Pérez", role: "CLIENTE", pass: "Temporal2026!" },
    "ana.torres@email.com": { name: "Ana Gabriela Torres", role: "CLIENTE", pass: "Temporal2026!" },
    "diego.morales@email.com": { name: "Diego Esteban Morales", role: "CLIENTE", pass: "Temporal2026!" },
    "valeria.castro@email.com": { name: "Valeria Sofía Castro", role: "CLIENTE", pass: "Temporal2026!" },
    "fernando.alvarez@email.com": { name: "Fernando Javier Álvarez", role: "CLIENTE", pass: "Temporal2026!" },
    "gabriela.reyes@email.com": { name: "Gabriela Lucía Reyes", role: "CLIENTE", pass: "Temporal2026!" },
    "rodrigo.paredes@email.com": { name: "Rodrigo Andrés Paredes", role: "CLIENTE", pass: "Temporal2026!" },
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Por favor completa tu correo y contraseña.")
      return
    }

    setIsLoading(true)
    setErrorMsg("")

    // 1. Intentar inicio de sesión real en Supabase Auth
    try {
      const sbResult = await signInWithSupabase(email, password)
      if (sbResult.success && sbResult.user) {
        setIsLoading(false)
        setPasswordWarning(false)
        onLoginSuccess(sbResult.user)
        handleClose()
        return
      }
    } catch (err) {
      console.warn("Aviso en Supabase Auth:", err)
    }

    // 2. Fallback a usuarios registrados localmente
    const cleanEmail = email.trim().toLowerCase()
    const regUsers = getRegisteredUsers()
    const record = regUsers[cleanEmail]

    if (record) {
      if (record.password !== password) {
        setIsLoading(false)
        setErrorMsg("Contraseña incorrecta.")
        setPasswordWarning(true)
        return
      }
      setIsLoading(false)
      setPasswordWarning(false)
      onLoginSuccess({ name: record.fullName, email: record.email, role: "CLIENTE" })
      handleClose()
      return
    }

    // 3. Fallback a los 10 usuarios de prueba institucionales
    const seedUser = SEED_TEST_USERS[cleanEmail]
    if (seedUser) {
      if (password !== seedUser.pass) {
        setIsLoading(false)
        setErrorMsg("Contraseña incorrecta. (Clave de prueba: Temporal2026!)")
        setPasswordWarning(true)
        return
      }
      setIsLoading(false)
      setPasswordWarning(false)
      onLoginSuccess({ name: seedUser.name, email: cleanEmail, role: seedUser.role })
      handleClose()
      return
    }

    setIsLoading(false)
    setErrorMsg("Cuenta no encontrada o credenciales inválidas. Verifica tu correo y contraseña.")
    setPasswordWarning(false)
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
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
      return
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg("Las contraseñas no concuerdan. Por favor verifica que sean iguales.")
      setConfirmPasswordWarning(true)
      return
    }

    setIsLoading(true)
    setErrorMsg("")

    const displayName = [firstName.trim(), firstLastName.trim()]
      .filter(Boolean)
      .join(" ")

    // 1. Guardar en almacenamiento local como respaldo inmediato
    const regUsers = getRegisteredUsers()
    const emailKey = regEmail.trim().toLowerCase()
    const newRecord: RegisteredUserRecord = {
      email: regEmail.trim(),
      password: regPassword,
      firstName: firstName.trim(),
      firstLastName: firstLastName.trim(),
      fullName: displayName,
    }
    regUsers[emailKey] = newRecord
    saveRegisteredUsers(regUsers)

    // 2. Intentar registrar en Supabase Auth
    try {
      const sbResult = await signUpWithSupabase(regEmail, regPassword, {
        firstName: firstName.trim(),
        lastName: firstLastName.trim(),
      })
      if (sbResult.success && sbResult.user) {
        setIsLoading(false)
        onLoginSuccess(sbResult.user)
        handleClose()
        return
      }
    } catch (err) {
      console.warn("Aviso en registro Supabase:", err)
    }

    setIsLoading(false)
    onLoginSuccess({ name: displayName, email: regEmail.trim(), role: "CLIENTE" })
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
                onChange={(val) => {
                  setEmail(val)
                  if (passwordWarning) setPasswordWarning(false)
                  if (errorMsg) setErrorMsg("")
                }}
                required
                autoFocus
              />

              <Field
                id="login-password"
                label="Contraseña"
                type="password"
                placeholder="••••••••"
                value={password}
                hasWarning={passwordWarning}
                onChange={(val) => {
                  setPassword(val)
                  if (passwordWarning) setPasswordWarning(false)
                  if (errorMsg) setErrorMsg("")
                }}
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

              <Button kind="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Verificando..." : "Ingresar"}
              </Button>
            </form>

            {/* Accesos Rápidos de Prueba Académica (RBAC) */}
            <div
              style={{
                marginTop: "16px",
                padding: "12px 14px",
                background: "#f1f5f9",
                borderRadius: "8px",
                border: "1px dashed rgba(27, 73, 101, 0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--pacific)" }}>
                  ⚡ Cuentas de prueba (Clave: Temporal2026!):
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <button
                  type="button"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "5px 9px",
                    borderRadius: "4px",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "var(--abyss)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEmail("carlos.mendoza@travelinnovation.ec")
                    setPassword("Temporal2026!")
                    setErrorMsg("")
                  }}
                >
                  👤 Carlos (Cliente)
                </button>
                <button
                  type="button"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "5px 9px",
                    borderRadius: "4px",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "var(--abyss)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEmail("maria.salazar@travelinnovation.ec")
                    setPassword("Temporal2026!")
                    setErrorMsg("")
                  }}
                >
                  💼 María (Agente)
                </button>
                <button
                  type="button"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "5px 9px",
                    borderRadius: "4px",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "var(--abyss)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEmail("admin@travelinnovation.ec")
                    setPassword("Temporal2026!")
                    setErrorMsg("")
                  }}
                >
                  🛡️ Admin (Superadmin)
                </button>
              </div>
            </div>

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
                  label="Nombre"
                  type="text"
                  placeholder="Ej. Carlos"
                  value={firstName}
                  onChange={setFirstName}
                  required
                  autoFocus
                />
                <Field
                  id="reg-first-lastname"
                  label="Apellido"
                  type="text"
                  placeholder="Ej. Mendoza"
                  value={firstLastName}
                  onChange={setFirstLastName}
                  required
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
                onChange={(val) => {
                  setRegPassword(val)
                  if (confirmPasswordWarning) setConfirmPasswordWarning(false)
                  if (errorMsg) setErrorMsg("")
                }}
                required
              />

              <Field
                id="reg-confirm-password"
                label="Confirmar contraseña"
                type="password"
                placeholder="Repite tu contraseña"
                value={regConfirmPassword}
                hasWarning={confirmPasswordWarning}
                onChange={(val) => {
                  setRegConfirmPassword(val)
                  if (confirmPasswordWarning) setConfirmPasswordWarning(false)
                  if (errorMsg) setErrorMsg("")
                }}
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


