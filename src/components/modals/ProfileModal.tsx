import React, { useState, useEffect, useMemo } from "react"
import type { Page, PersonalInfo } from "../../types"
import {
  Button,
  Field,
  SelectField,
  DatePickerField,
} from "../common"
import { PROVINCES_DATA } from "../../data/provincesData"
import {
  validateCedulaOrPassport,
  validatePhoneNumber,
} from "../../utils/validation"
import {
  getRegisteredUsers,
  saveRegisteredUsers,
} from "../../services/storage"

export interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  onSavePersonalInfo: (info: PersonalInfo) => void
  onUpdateEmail: (oldEmail: string, newEmail: string) => void
  onUpdateName: (newName: string) => void
  purchasesCount?: number
  favoritesCount?: number
  ticketsCount?: number
  go: (page: Page) => void
}

type ProfileTab = "datos" | "direccion" | "seguridad" | "actividad"

export function ProfileModal({
  isOpen,
  onClose,
  currentUser,
  personalInfo,
  onSavePersonalInfo,
  onUpdateEmail,
  onUpdateName,
  purchasesCount = 0,
  favoritesCount = 0,
  ticketsCount = 0,
  go,
}: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>("datos")

  // --- TAB 1: DATOS PERSONALES ---
  const [isEditingInfo, setIsEditingInfo] = useState(false)
  const [infoName, setInfoName] = useState("")
  const [infoPhone, setInfoPhone] = useState("")
  const [infoCedula, setInfoCedula] = useState("")
  const [infoBirthDate, setInfoBirthDate] = useState("")
  const [infoErrors, setInfoErrors] = useState<{
    name?: string
    phone?: string
    cedula?: string
    birthDate?: string
  }>({})
  const [infoSuccessMsg, setInfoSuccessMsg] = useState<string | null>(null)

  // --- TAB 2: DIRECCION ---
  const [isEditingAddress, setIsEditingAddress] = useState(false)
  const [addrProvince, setAddrProvince] = useState("")
  const [addrCity, setAddrCity] = useState("")
  const [addrMainStreet, setAddrMainStreet] = useState("")
  const [addrSecondaryStreet, setAddrSecondaryStreet] = useState("")
  const [addrReference, setAddrReference] = useState("")
  const [addrErrors, setAddrErrors] = useState<{
    province?: string
    city?: string
    mainStreet?: string
    secondaryStreet?: string
    reference?: string
  }>({})
  const [addrSuccessMsg, setAddrSuccessMsg] = useState<string | null>(null)

  // --- TAB 3: SEGURIDAD (CORREO Y CONTRASEÑA) ---
  // Cambio de correo
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [newEmail, setNewEmail] = useState("")
  const [confirmNewEmail, setConfirmNewEmail] = useState("")
  const [emailCurrentPassword, setEmailCurrentPassword] = useState("")
  const [emailPasswordWarning, setEmailPasswordWarning] = useState(false)
  const [confirmEmailWarning, setConfirmEmailWarning] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState<string | null>(null)
  const [emailSuccessMsg, setEmailSuccessMsg] = useState<string | null>(null)

  // Cambio de contraseña
  const [isEditingPassword, setIsEditingPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [currentPasswordWarning, setCurrentPasswordWarning] = useState(false)
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string | null>(null)
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState<string | null>(null)

  // Sincronizar estados cuando se abre el modal o cambia el usuario
  useEffect(() => {
    if (isOpen && currentUser) {
      setInfoName(personalInfo.fullName || currentUser.name || "")
      setInfoPhone(personalInfo.phone || "")
      setInfoCedula(personalInfo.cedula || "")
      setInfoBirthDate(personalInfo.birthDate || "")

      setAddrProvince(personalInfo.province || "")
      setAddrCity(personalInfo.city || "")
      setAddrMainStreet(personalInfo.mainStreet || "")
      setAddrSecondaryStreet(personalInfo.secondaryStreet || "")
      setAddrReference(personalInfo.reference || "")

      // Limpiar estados de edición y avisos
      setIsEditingInfo(false)
      setIsEditingAddress(false)
      setIsEditingEmail(false)
      setIsEditingPassword(false)

      setInfoErrors({})
      setAddrErrors({})
      setEmailErrorMsg(null)
      setPasswordErrorMsg(null)
      setEmailPasswordWarning(false)
      setConfirmEmailWarning(false)
      setCurrentPasswordWarning(false)
      setConfirmPasswordWarning(false)
    }
  }, [isOpen, currentUser, personalInfo])

  const firstName = useMemo(() => {
    if (!currentUser?.name) return "Usuario"
    const raw = currentUser.name.trim().split(/\s+/)[0]
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase()
  }, [currentUser])

  const avatarInitial = useMemo(() => {
    return firstName.charAt(0).toUpperCase()
  }, [firstName])

  const availableCities = useMemo(() => {
    if (!addrProvince || !PROVINCES_DATA[addrProvince]) return []
    return [...PROVINCES_DATA[addrProvince].cities].sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [addrProvince])

  if (!isOpen || !currentUser) return null

  // --- HANDLERS: DATOS PERSONALES ---
  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault()
    let hasErr = false
    const errs: typeof infoErrors = {}

    if (!infoName.trim()) {
      errs.name = "El nombre completo es obligatorio."
      hasErr = true
    }

    if (infoPhone.trim()) {
      const pRes = validatePhoneNumber(infoPhone)
      if (!pRes.isValid) {
        errs.phone = pRes.error
        hasErr = true
      }
    }

    if (infoCedula.trim()) {
      const cRes = validateCedulaOrPassport(infoCedula)
      if (!cRes.isValid) {
        errs.cedula = cRes.error
        hasErr = true
      }
    }

    setInfoErrors(errs)
    if (hasErr) return

    onSavePersonalInfo({
      ...personalInfo,
      fullName: infoName.trim(),
      phone: infoPhone.trim(),
      cedula: infoCedula.trim(),
      birthDate: infoBirthDate.trim(),
    })

    if (infoName.trim() !== currentUser.name) {
      onUpdateName(infoName.trim())
    }

    setIsEditingInfo(false)
    setInfoSuccessMsg("✓ Datos personales actualizados correctamente.")
    setTimeout(() => setInfoSuccessMsg(null), 4000)
  }

  // --- HANDLERS: DIRECCION ---
  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault()
    let hasErr = false
    const errs: typeof addrErrors = {}

    if (!addrProvince.trim()) {
      errs.province = "Selecciona una provincia."
      hasErr = true
    }
    if (!addrCity.trim()) {
      errs.city = "Selecciona un cantón o ciudad."
      hasErr = true
    }
    if (!addrMainStreet.trim()) {
      errs.mainStreet = "Ingresa la calle principal."
      hasErr = true
    }
    if (!addrSecondaryStreet.trim()) {
      errs.secondaryStreet = "Ingresa la calle secundaria o intersección."
      hasErr = true
    }
    if (!addrReference.trim()) {
      errs.reference = "Ingresa el número de inmueble o referencia."
      hasErr = true
    }

    setAddrErrors(errs)
    if (hasErr) return

    onSavePersonalInfo({
      ...personalInfo,
      province: addrProvince.trim(),
      city: addrCity.trim(),
      mainStreet: addrMainStreet.trim(),
      secondaryStreet: addrSecondaryStreet.trim(),
      reference: addrReference.trim(),
    })

    setIsEditingAddress(false)
    setAddrSuccessMsg("✓ Dirección domiciliaria guardada con éxito.")
    setTimeout(() => setAddrSuccessMsg(null), 4000)
  }

  // --- HANDLERS: CAMBIO DE CORREO ---
  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailErrorMsg(null)
    setEmailPasswordWarning(false)
    setConfirmEmailWarning(false)

    const cleanNew = newEmail.trim().toLowerCase()
    const cleanConfirm = confirmNewEmail.trim().toLowerCase()

    if (!cleanNew) {
      setEmailErrorMsg("Ingresa tu nuevo correo electrónico.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanNew)) {
      setEmailErrorMsg("Ingresa un correo electrónico con formato válido.")
      return
    }

    if (cleanNew === currentUser.email.trim().toLowerCase()) {
      setEmailErrorMsg("El nuevo correo debe ser diferente a tu correo actual.")
      return
    }

    if (cleanNew !== cleanConfirm) {
      setEmailErrorMsg("Los correos electrónicos no concuerdan.")
      setConfirmEmailWarning(true)
      return
    }

    if (!emailCurrentPassword) {
      setEmailErrorMsg("Ingresa tu contraseña actual para confirmar el cambio.")
      setEmailPasswordWarning(true)
      return
    }

    // Verificar contraseña actual
    const regUsers = getRegisteredUsers()
    const userRecord = regUsers[currentUser.email.trim().toLowerCase()]
    if (userRecord && userRecord.password !== emailCurrentPassword) {
      setEmailErrorMsg("Contraseña actual incorrecta.")
      setEmailPasswordWarning(true)
      return
    }

    // Verificar si el nuevo correo ya existe en otra cuenta
    if (regUsers[cleanNew]) {
      setEmailErrorMsg("Este correo electrónico ya se encuentra registrado por otra cuenta.")
      return
    }

    // Proceder al cambio
    onUpdateEmail(currentUser.email, cleanNew)
    setIsEditingEmail(false)
    setNewEmail("")
    setConfirmNewEmail("")
    setEmailCurrentPassword("")
    setEmailSuccessMsg(`✓ Tu correo se ha actualizado exitosamente a ${cleanNew}.`)
    setTimeout(() => setEmailSuccessMsg(null), 5000)
  }

  // --- HANDLERS: CAMBIO DE CONTRASEÑA ---
  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordErrorMsg(null)
    setCurrentPasswordWarning(false)
    setConfirmPasswordWarning(false)

    if (!currentPassword) {
      setPasswordErrorMsg("Ingresa tu contraseña actual.")
      setCurrentPasswordWarning(true)
      return
    }

    const regUsers = getRegisteredUsers()
    const userKey = currentUser.email.trim().toLowerCase()
    const record = regUsers[userKey]

    if (record && record.password !== currentPassword) {
      setPasswordErrorMsg("Contraseña actual incorrecta.")
      setCurrentPasswordWarning(true)
      return
    }

    if (!newPassword) {
      setPasswordErrorMsg("Ingresa tu nueva contraseña.")
      return
    }

    if (newPassword.length < 6) {
      setPasswordErrorMsg(`La nueva contraseña debe tener al menos 6 caracteres (ingresaste ${newPassword.length}).`)
      return
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordErrorMsg("Las contraseñas no concuerdan. Por favor verifica que sean iguales.")
      setConfirmPasswordWarning(true)
      return
    }

    // Actualizar contraseña en el registro
    if (record) {
      record.password = newPassword
      regUsers[userKey] = record
      saveRegisteredUsers(regUsers)
    }

    setIsEditingPassword(false)
    setCurrentPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
    setPasswordSuccessMsg("✓ Tu contraseña ha sido cambiada exitosamente.")
    setTimeout(() => setPasswordSuccessMsg(null), 5000)
  }

  const hasAddress = Boolean(
    personalInfo.province &&
    personalInfo.city &&
    personalInfo.mainStreet
  )

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{ zIndex: 110 }}
    >
      <section
        className="modal"
        style={{
          maxWidth: "680px",
          width: "94%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "24px 28px",
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "0 20px 45px rgba(15, 31, 44, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado Principal estilo Amazon */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "1px solid #e2e8f0",
            paddingBottom: "16px",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              className="user-dropdown-avatar"
              style={{
                width: "56px",
                height: "56px",
                fontSize: "24px",
                borderRadius: "50%",
                background: "var(--pacific)",
                color: "#ffffff",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(27, 73, 101, 0.25)",
              }}
            >
              {avatarInitial}
            </div>
            <div>
              <span className="eyebrow" style={{ color: "var(--pacific)" }}>
                Mi Cuenta · Travel Innovation
              </span>
              <h2
                id="profile-modal-title"
                style={{ margin: "2px 0 3px", fontSize: "21px", color: "var(--abyss)" }}
              >
                {currentUser.name}
              </h2>
              <span style={{ fontSize: "14px", color: "#5a6e7f" }}>
                {currentUser.email} · <span style={{ color: "var(--success)", fontWeight: 600 }}>✓ Cuenta Activa</span>
              </span>
            </div>
          </div>
          <button
            className="icon-button"
            aria-label="Cerrar modal de perfil"
            onClick={onClose}
            type="button"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
              color: "#5a6e7f",
              padding: "4px 8px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Pestañas de Navegación estilo Amazon */}
        <div
          role="tablist"
          style={{
            display: "flex",
            gap: "8px",
            borderBottom: "2px solid #e2e8f0",
            marginBottom: "20px",
            overflowX: "auto",
            paddingBottom: "2px",
          }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "datos"}
            onClick={() => setActiveTab("datos")}
            style={{
              padding: "8px 14px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              background: "transparent",
              color: activeTab === "datos" ? "var(--pacific)" : "#5a6e7f",
              borderBottom: activeTab === "datos" ? "3px solid var(--pacific)" : "3px solid transparent",
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
            }}
          >
            Datos personales
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "direccion"}
            onClick={() => setActiveTab("direccion")}
            style={{
              padding: "8px 14px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              background: "transparent",
              color: activeTab === "direccion" ? "var(--pacific)" : "#5a6e7f",
              borderBottom: activeTab === "direccion" ? "3px solid var(--pacific)" : "3px solid transparent",
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
            }}
          >
            Dirección
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "seguridad"}
            onClick={() => setActiveTab("seguridad")}
            style={{
              padding: "8px 14px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              background: "transparent",
              color: activeTab === "seguridad" ? "var(--pacific)" : "#5a6e7f",
              borderBottom: activeTab === "seguridad" ? "3px solid var(--pacific)" : "3px solid transparent",
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
            }}
          >
            Seguridad y Acceso
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "actividad"}
            onClick={() => setActiveTab("actividad")}
            style={{
              padding: "8px 14px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              background: "transparent",
              color: activeTab === "actividad" ? "var(--pacific)" : "#5a6e7f",
              borderBottom: activeTab === "actividad" ? "3px solid var(--pacific)" : "3px solid transparent",
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
            }}
          >
            Mi actividad
          </button>
        </div>

        {/* =========================================================================
            TAB 1: DATOS PERSONALES
           ========================================================================= */}
        {activeTab === "datos" && (
          <div>
            {infoSuccessMsg && (
              <div
                className="inline-alert"
                style={{
                  background: "#e8f7f0",
                  borderColor: "var(--success)",
                  color: "#0f5132",
                  marginBottom: "16px",
                }}
              >
                {infoSuccessMsg}
              </div>
            )}

            {!isEditingInfo ? (
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "16px", color: "var(--pacific)" }}>
                    Información identificativa
                  </h3>
                  <Button
                    kind="secondary"
                    style={{ fontSize: "13px", padding: "6px 14px", border: "1.5px solid var(--pacific)" }}
                    onClick={() => setIsEditingInfo(true)}
                  >
                    Editar datos
                  </Button>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "12px", color: "#5a6e7f", display: "block" }}>
                      Nombre completo
                    </span>
                    <strong style={{ fontSize: "15px", color: "var(--abyss)" }}>
                      {currentUser.name}
                    </strong>
                  </div>

                  <div>
                    <span style={{ fontSize: "12px", color: "#5a6e7f", display: "block" }}>
                      Cédula / Pasaporte
                    </span>
                    <strong style={{ fontSize: "15px", color: "var(--abyss)" }}>
                      {personalInfo.cedula || "No registrada"}
                    </strong>
                  </div>

                  <div>
                    <span style={{ fontSize: "12px", color: "#5a6e7f", display: "block" }}>
                      Teléfono celular
                    </span>
                    <strong style={{ fontSize: "15px", color: "var(--abyss)" }}>
                      {personalInfo.phone || "No registrado"}
                    </strong>
                  </div>

                  <div>
                    <span style={{ fontSize: "12px", color: "#5a6e7f", display: "block" }}>
                      Fecha de nacimiento
                    </span>
                    <strong style={{ fontSize: "15px", color: "var(--abyss)" }}>
                      {personalInfo.birthDate || "No registrada"}
                    </strong>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveInfo} noValidate>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid var(--pacific)",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <h3 style={{ margin: "0 0 16px", fontSize: "16px", color: "var(--pacific)" }}>
                    Editar datos personales
                  </h3>

                  <div className="two-col" style={{ marginBottom: "14px" }}>
                    <Field
                      label="Nombre completo"
                      value={infoName}
                      onChange={(val) => {
                        setInfoName(val)
                        if (infoErrors.name) setInfoErrors((p) => ({ ...p, name: undefined }))
                      }}
                      error={infoErrors.name}
                      help="Como consta en tu documento oficial."
                      required
                    />

                    <Field
                      label="Teléfono celular"
                      type="tel"
                      placeholder="Ej. 0991234567"
                      value={infoPhone}
                      onChange={(val) => {
                        const clean = val.replace(/\D/g, "")
                        setInfoPhone(clean)
                        if (infoErrors.phone) setInfoErrors((p) => ({ ...p, phone: undefined }))
                      }}
                      error={infoErrors.phone}
                      help="10 dígitos numéricos (inicia con 09)."
                    />
                  </div>

                  <div className="two-col" style={{ marginBottom: "14px" }}>
                    <Field
                      label="Cédula de identidad o pasaporte"
                      placeholder="10 dígitos de cédula o pasaporte"
                      value={infoCedula}
                      onChange={(val) => {
                        const clean = val.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
                        setInfoCedula(clean)
                        if (infoErrors.cedula) setInfoErrors((p) => ({ ...p, cedula: undefined }))
                      }}
                      error={infoErrors.cedula}
                      help="Cédula ecuatoriana o pasaporte internacional."
                    />

                    <DatePickerField
                      id="profile-birth-date"
                      label="Fecha de nacimiento"
                      value={infoBirthDate}
                      onChange={(val) => {
                        setInfoBirthDate(val)
                        if (infoErrors.birthDate) setInfoErrors((p) => ({ ...p, birthDate: undefined }))
                      }}
                      error={infoErrors.birthDate}
                      help="Selecciona en el calendario (haz clic en 📅)."
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "18px" }}>
                    <Button kind="secondary" type="button" onClick={() => setIsEditingInfo(false)}>
                      Cancelar
                    </Button>
                    <Button kind="primary" type="submit">
                      Guardar datos
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: DIRECCION
           ========================================================================= */}
        {activeTab === "direccion" && (
          <div>
            {addrSuccessMsg && (
              <div
                className="inline-alert"
                style={{
                  background: "#e8f7f0",
                  borderColor: "var(--success)",
                  color: "#0f5132",
                  marginBottom: "16px",
                }}
              >
                {addrSuccessMsg}
              </div>
            )}

            {!isEditingAddress ? (
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "16px", color: "var(--pacific)" }}>
                    Dirección de residencia y facturación
                  </h3>
                  <Button
                    kind="secondary"
                    style={{ fontSize: "13px", padding: "6px 14px", border: "1.5px solid var(--pacific)" }}
                    onClick={() => setIsEditingAddress(true)}
                  >
                    Actualizar dirección
                  </Button>
                </div>

                {hasAddress ? (
                  <div style={{ color: "var(--abyss)", lineHeight: 1.6, fontSize: "15px" }}>
                    <div style={{ fontWeight: 600 }}>
                      {personalInfo.mainStreet} y {personalInfo.secondaryStreet}
                    </div>
                    <div style={{ color: "#5a6e7f", fontSize: "14px" }}>
                      Ref: {personalInfo.reference || "Sin referencia adicional"}
                    </div>
                    <div style={{ color: "var(--pacific)", fontWeight: 500, fontSize: "14px", marginTop: "4px" }}>
                      {personalInfo.city}, {personalInfo.province} · Ecuador
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: "center", padding: "16px 10px", color: "#5a6e7f" }}>
                    <p style={{ margin: 0, fontSize: "14px" }}>
                      No tienes una dirección registrada todavía. Utiliza el botón de arriba para registrar tu dirección domiciliaria.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSaveAddress} noValidate>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid var(--pacific)",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <h3 style={{ margin: "0 0 16px", fontSize: "16px", color: "var(--pacific)" }}>
                    Actualizar dirección domiciliaria
                  </h3>

                  <div className="two-col" style={{ marginBottom: "14px" }}>
                    <SelectField
                      label="Provincia"
                      value={addrProvince}
                      onChange={(newProv) => {
                        setAddrProvince(newProv)
                        setAddrCity("")
                        if (addrErrors.province) setAddrErrors((p) => ({ ...p, province: undefined }))
                      }}
                      error={addrErrors.province}
                      required
                    >
                      <option value="">Selecciona tu provincia</option>
                      {Object.keys(PROVINCES_DATA)
                        .sort((a, b) => a.localeCompare(b, "es"))
                        .map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                    </SelectField>

                    <SelectField
                      label="Ciudad / Cantón"
                      value={addrCity}
                      onChange={(newCity) => {
                        setAddrCity(newCity)
                        if (addrErrors.city) setAddrErrors((p) => ({ ...p, city: undefined }))
                      }}
                      error={addrErrors.city}
                      disabled={!addrProvince}
                      required
                    >
                      <option value="">
                        {addrProvince ? "Selecciona tu ciudad" : "Elige provincia primero"}
                      </option>
                      {availableCities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </SelectField>
                  </div>

                  <div className="two-col" style={{ marginBottom: "14px" }}>
                    <Field
                      label="Calle principal"
                      placeholder="Ej. Av. Amazonas"
                      value={addrMainStreet}
                      onChange={(val) => {
                        setAddrMainStreet(val)
                        if (addrErrors.mainStreet) setAddrErrors((p) => ({ ...p, mainStreet: undefined }))
                      }}
                      error={addrErrors.mainStreet}
                      required
                    />

                    <Field
                      label="Calle secundaria / Intersección"
                      placeholder="Ej. Naciones Unidas"
                      value={addrSecondaryStreet}
                      onChange={(val) => {
                        setAddrSecondaryStreet(val)
                        if (addrErrors.secondaryStreet)
                          setAddrErrors((p) => ({ ...p, secondaryStreet: undefined }))
                      }}
                      error={addrErrors.secondaryStreet}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <Field
                      label="N° de casa / Edificio y referencia"
                      placeholder="Ej. N34-120, diagonal al parque La Carolina"
                      value={addrReference}
                      onChange={(val) => {
                        setAddrReference(val)
                        if (addrErrors.reference) setAddrErrors((p) => ({ ...p, reference: undefined }))
                      }}
                      error={addrErrors.reference}
                      help="Número de inmueble y puntos de referencia."
                      required
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "18px" }}>
                    <Button kind="secondary" type="button" onClick={() => setIsEditingAddress(false)}>
                      Cancelar
                    </Button>
                    <Button kind="primary" type="submit">
                      Guardar dirección
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 3: SEGURIDAD (CORREO Y CONTRASEÑA)
           ========================================================================= */}
        {activeTab === "seguridad" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* SECCIÓN 1: CORREO ELECTRÓNICO */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: isEditingEmail ? "14px" : "0",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 2px", fontSize: "16px", color: "var(--pacific)" }}>
                    Correo electrónico de acceso
                  </h3>
                  <span style={{ fontSize: "14px", color: "var(--abyss)", fontWeight: 600 }}>
                    {currentUser.email}
                  </span>
                  <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#5a6e7f" }}>
                    Utilizas este correo para iniciar sesión y recibir comprobantes.
                  </p>
                </div>
                {!isEditingEmail && (
                  <Button
                    kind="secondary"
                    style={{ fontSize: "13px", padding: "6px 14px", border: "1.5px solid var(--pacific)" }}
                    onClick={() => {
                      setIsEditingEmail(true)
                      setIsEditingPassword(false)
                      setEmailErrorMsg(null)
                    }}
                  >
                    Cambiar correo
                  </Button>
                )}
              </div>

              {emailSuccessMsg && (
                <div
                  className="inline-alert"
                  style={{
                    background: "#e8f7f0",
                    borderColor: "var(--success)",
                    color: "#0f5132",
                    marginTop: "12px",
                  }}
                >
                  {emailSuccessMsg}
                </div>
              )}

              {isEditingEmail && (
                <form
                  onSubmit={handleSaveEmail}
                  noValidate
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(27, 73, 101, 0.25)",
                    borderRadius: "6px",
                    padding: "16px",
                    marginTop: "12px",
                  }}
                >
                  {emailErrorMsg && (
                    <div
                      className="inline-alert"
                      style={{
                        background: "#fff5f5",
                        borderColor: "var(--crimson)",
                        color: "var(--crimson)",
                        marginBottom: "14px",
                      }}
                    >
                      ⚠️ {emailErrorMsg}
                    </div>
                  )}

                  <div className="two-col" style={{ marginBottom: "14px" }}>
                    <Field
                      label="Nuevo correo electrónico"
                      type="email"
                      placeholder="nuevo@correo.com"
                      value={newEmail}
                      onChange={(val) => {
                        setNewEmail(val)
                        if (emailErrorMsg) setEmailErrorMsg(null)
                      }}
                      required
                    />

                    <Field
                      label="Confirmar nuevo correo"
                      type="email"
                      placeholder="Repite el nuevo correo"
                      value={confirmNewEmail}
                      hasWarning={confirmEmailWarning}
                      onChange={(val) => {
                        setConfirmNewEmail(val)
                        if (confirmEmailWarning) setConfirmEmailWarning(false)
                        if (emailErrorMsg) setEmailErrorMsg(null)
                      }}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <Field
                      label="Contraseña actual de tu cuenta"
                      type="password"
                      placeholder="••••••••"
                      value={emailCurrentPassword}
                      hasWarning={emailPasswordWarning}
                      onChange={(val) => {
                        setEmailCurrentPassword(val)
                        if (emailPasswordWarning) setEmailPasswordWarning(false)
                        if (emailErrorMsg) setEmailErrorMsg(null)
                      }}
                      help="Por tu seguridad, confirma tu contraseña actual para cambiar el correo."
                      required
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <Button
                      kind="secondary"
                      type="button"
                      onClick={() => {
                        setIsEditingEmail(false)
                        setNewEmail("")
                        setConfirmNewEmail("")
                        setEmailCurrentPassword("")
                        setEmailErrorMsg(null)
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button kind="primary" type="submit">
                      Guardar nuevo correo
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* SECCIÓN 2: CONTRASEÑA */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: isEditingPassword ? "14px" : "0",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 2px", fontSize: "16px", color: "var(--pacific)" }}>
                    Contraseña de la cuenta
                  </h3>
                  <span style={{ fontSize: "16px", letterSpacing: "2px", color: "var(--abyss)" }}>
                    ••••••••••••
                  </span>
                  <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#5a6e7f" }}>
                    Te recomendamos usar una contraseña de al menos 6 caracteres.
                  </p>
                </div>
                {!isEditingPassword && (
                  <Button
                    kind="secondary"
                    style={{ fontSize: "13px", padding: "6px 14px", border: "1.5px solid var(--pacific)" }}
                    onClick={() => {
                      setIsEditingPassword(true)
                      setIsEditingEmail(false)
                      setPasswordErrorMsg(null)
                    }}
                  >
                    Cambiar contraseña
                  </Button>
                )}
              </div>

              {passwordSuccessMsg && (
                <div
                  className="inline-alert"
                  style={{
                    background: "#e8f7f0",
                    borderColor: "var(--success)",
                    color: "#0f5132",
                    marginTop: "12px",
                  }}
                >
                  {passwordSuccessMsg}
                </div>
              )}

              {isEditingPassword && (
                <form
                  onSubmit={handleSavePassword}
                  noValidate
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(27, 73, 101, 0.25)",
                    borderRadius: "6px",
                    padding: "16px",
                    marginTop: "12px",
                  }}
                >
                  {passwordErrorMsg && (
                    <div
                      className="inline-alert"
                      style={{
                        background: "#fff5f5",
                        borderColor: "var(--crimson)",
                        color: "var(--crimson)",
                        marginBottom: "14px",
                      }}
                    >
                      ⚠️ {passwordErrorMsg}
                    </div>
                  )}

                  <div style={{ marginBottom: "14px" }}>
                    <Field
                      label="Contraseña actual"
                      type="password"
                      placeholder="Ingresa tu contraseña actual"
                      value={currentPassword}
                      hasWarning={currentPasswordWarning}
                      onChange={(val) => {
                        setCurrentPassword(val)
                        if (currentPasswordWarning) setCurrentPasswordWarning(false)
                        if (passwordErrorMsg) setPasswordErrorMsg(null)
                      }}
                      required
                    />
                  </div>

                  <div className="two-col" style={{ marginBottom: "14px" }}>
                    <Field
                      label="Nueva contraseña"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={newPassword}
                      onChange={(val) => {
                        setNewPassword(val)
                        if (passwordErrorMsg) setPasswordErrorMsg(null)
                      }}
                      help="Al menos 6 caracteres."
                      required
                    />

                    <Field
                      label="Confirmar nueva contraseña"
                      type="password"
                      placeholder="Repite la nueva contraseña"
                      value={confirmNewPassword}
                      hasWarning={confirmPasswordWarning}
                      onChange={(val) => {
                        setConfirmNewPassword(val)
                        if (confirmPasswordWarning) setConfirmPasswordWarning(false)
                        if (passwordErrorMsg) setPasswordErrorMsg(null)
                      }}
                      required
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <Button
                      kind="secondary"
                      type="button"
                      onClick={() => {
                        setIsEditingPassword(false)
                        setCurrentPassword("")
                        setNewPassword("")
                        setConfirmNewPassword("")
                        setPasswordErrorMsg(null)
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button kind="primary" type="submit">
                      Guardar nueva contraseña
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: MI ACTIVIDAD (ESTILO AMAZON DASHBOARD)
           ========================================================================= */}
        {activeTab === "actividad" && (
          <div>
            <p style={{ margin: "0 0 16px", color: "#5a6e7f", fontSize: "14px" }}>
              Accesos directos a tu historial y compras turísticas en Travel Innovation:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ color: "var(--pacific)", marginBottom: "6px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <h4 style={{ margin: "0 0 2px", color: "var(--pacific)", fontSize: "15px" }}>Mis compras</h4>
                  <span style={{ fontSize: "13px", color: "#5a6e7f" }}>
                    {purchasesCount} {purchasesCount === 1 ? "reserva realizada" : "reservas realizadas"}
                  </span>
                </div>
                <Button
                  kind="secondary"
                  style={{ fontSize: "13px", padding: "6px 12px", border: "1.5px solid var(--pacific)", color: "var(--pacific)" }}
                  onClick={() => {
                    onClose()
                    go("reservas")
                  }}
                >
                  Ver mis compras
                </Button>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ color: "var(--pacific)", marginBottom: "6px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h4 style={{ margin: "0 0 2px", color: "var(--pacific)", fontSize: "15px" }}>Mis favoritos</h4>
                  <span style={{ fontSize: "13px", color: "#5a6e7f" }}>
                    {favoritesCount} {favoritesCount === 1 ? "paquete guardado" : "paquetes guardados"}
                  </span>
                </div>
                <Button
                  kind="secondary"
                  style={{ fontSize: "13px", padding: "6px 12px", border: "1.5px solid var(--pacific)", color: "var(--pacific)" }}
                  onClick={() => {
                    onClose()
                    go("favoritos")
                  }}
                >
                  Ver mis favoritos
                </Button>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ color: "var(--pacific)", marginBottom: "6px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h4 style={{ margin: "0 0 2px", color: "var(--pacific)", fontSize: "15px" }}>Mis tickets</h4>
                  <span style={{ fontSize: "13px", color: "#5a6e7f" }}>
                    {ticketsCount} {ticketsCount === 1 ? "ticket registrado" : "tickets registrados"}
                  </span>
                </div>
                <Button
                  kind="secondary"
                  style={{ fontSize: "13px", padding: "6px 12px", border: "1.5px solid var(--pacific)", color: "var(--pacific)" }}
                  onClick={() => {
                    onClose()
                    go("tickets")
                  }}
                >
                  Consultar tickets
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Pie de modal */}
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "16px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button kind="secondary" onClick={onClose}>
            Cerrar perfil
          </Button>
        </div>
      </section>
    </div>
  )
}

