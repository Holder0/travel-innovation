import React, { useState, useEffect, useMemo } from "react"
import type { Page, PersonalInfo } from "../../types"
import {
  Button,
  Field,
  SelectField,
  PageTitle,
  Stepper,
  Summary,
  DatePickerField,
} from "../../components/common"
import { CheckIcon, ClipboardIcon, EditPencilIcon } from "../../components/common/SvgIcons"
import { PROVINCES_DATA } from "../../data/provincesData"
import { validateCedulaOrPassport, validatePhoneNumber } from "../../utils/validation"
import { getStoredAccounts } from "../../services/storage"

export function Identification({
  go,
  total = 378,
  currentUser,
  personalInfo,
  onSavePersonalInfo,
}: {
  go: (page: Page) => void
  total?: number
  currentUser: { name: string; email: string } | null
  personalInfo: PersonalInfo
  onSavePersonalInfo: (info: PersonalInfo, saveToAccount?: boolean) => void
}) {
  // Verificar si el usuario ya tiene una dirección registrada previamente en su cuenta
  const registeredAccountData = useMemo(() => {
    if (!currentUser) return null
    const accounts = getStoredAccounts()
    const acc = accounts[currentUser.email.trim().toLowerCase()]
    const saved = acc?.savedPersonalInfo
    if (
      saved &&
      saved.mainStreet?.trim() &&
      saved.province?.trim() &&
      saved.city?.trim()
    ) {
      return saved
    }
    return null
  }, [currentUser])

  const hasRegisteredAddress = Boolean(registeredAccountData)

  const [fullName, setFullName] = useState(
    personalInfo.fullName || currentUser?.name || registeredAccountData?.fullName || ""
  )
  const [email, setEmail] = useState(
    personalInfo.email || currentUser?.email || registeredAccountData?.email || ""
  )
  const [phone, setPhone] = useState(
    personalInfo.phone || registeredAccountData?.phone || ""
  )
  const [cedula, setCedula] = useState(
    personalInfo.cedula || registeredAccountData?.cedula || ""
  )
  const [birthDate, setBirthDate] = useState(
    personalInfo.birthDate || registeredAccountData?.birthDate || ""
  )
  const [province, setProvince] = useState(
    personalInfo.province || registeredAccountData?.province || ""
  )
  const [city, setCity] = useState(
    personalInfo.city || registeredAccountData?.city || ""
  )
  const [mainStreet, setMainStreet] = useState(
    personalInfo.mainStreet || registeredAccountData?.mainStreet || ""
  )
  const [secondaryStreet, setSecondaryStreet] = useState(
    personalInfo.secondaryStreet || registeredAccountData?.secondaryStreet || ""
  )
  const [reference, setReference] = useState(
    personalInfo.reference || registeredAccountData?.reference || ""
  )
  const [wantsToUpdate, setWantsToUpdate] = useState(false)

  // Solo se bloquean los campos si el usuario ya tiene dirección registrada y seleccionó mantenerla
  const isLocked = hasRegisteredAddress && !wantsToUpdate

  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    phone?: string
    cedula?: string
    birthDate?: string
    province?: string
    city?: string
    mainStreet?: string
    secondaryStreet?: string
    reference?: string
  }>({})

  // Auto-llenar campos si el usuario ya tiene una dirección registrada en su cuenta
  useEffect(() => {
    if (registeredAccountData) {
      if (!province && registeredAccountData.province) setProvince(registeredAccountData.province)
      if (!city && registeredAccountData.city) setCity(registeredAccountData.city)
      if (!mainStreet && registeredAccountData.mainStreet) setMainStreet(registeredAccountData.mainStreet)
      if (!secondaryStreet && registeredAccountData.secondaryStreet)
        setSecondaryStreet(registeredAccountData.secondaryStreet)
      if (!reference && registeredAccountData.reference)
        setReference(registeredAccountData.reference)
      if (!phone && registeredAccountData.phone)
        setPhone(registeredAccountData.phone)
      if (!cedula && registeredAccountData.cedula)
        setCedula(registeredAccountData.cedula)
      if (!birthDate && registeredAccountData.birthDate)
        setBirthDate(registeredAccountData.birthDate)
    }
  }, [registeredAccountData])

  const syncPersonalInfo = (overrides: Partial<PersonalInfo> = {}) => {
    onSavePersonalInfo(
      {
        fullName: overrides.fullName !== undefined ? overrides.fullName : fullName,
        email: overrides.email !== undefined ? overrides.email : email,
        phone: overrides.phone !== undefined ? overrides.phone : phone,
        cedula: overrides.cedula !== undefined ? overrides.cedula : cedula,
        birthDate: overrides.birthDate !== undefined ? overrides.birthDate : birthDate,
        province: overrides.province !== undefined ? overrides.province : province,
        city: overrides.city !== undefined ? overrides.city : city,
        mainStreet: overrides.mainStreet !== undefined ? overrides.mainStreet : mainStreet,
        secondaryStreet: overrides.secondaryStreet !== undefined ? overrides.secondaryStreet : secondaryStreet,
        reference: overrides.reference !== undefined ? overrides.reference : reference,
      },
      false
    )
  }

  const handleSelectKeepCurrent = () => {
    setWantsToUpdate(false)
    if (registeredAccountData) {
      setProvince(registeredAccountData.province || "")
      setCity(registeredAccountData.city || "")
      setMainStreet(registeredAccountData.mainStreet || "")
      setSecondaryStreet(registeredAccountData.secondaryStreet || "")
      setReference(registeredAccountData.reference || "")
      if (registeredAccountData.phone) setPhone(registeredAccountData.phone)
      if (registeredAccountData.cedula) setCedula(registeredAccountData.cedula)
      if (registeredAccountData.birthDate) setBirthDate(registeredAccountData.birthDate)
      syncPersonalInfo({
        province: registeredAccountData.province || "",
        city: registeredAccountData.city || "",
        mainStreet: registeredAccountData.mainStreet || "",
        secondaryStreet: registeredAccountData.secondaryStreet || "",
        reference: registeredAccountData.reference || "",
        phone: registeredAccountData.phone || phone,
        cedula: registeredAccountData.cedula || cedula,
        birthDate: registeredAccountData.birthDate || birthDate,
      })
    }
  }

  useEffect(() => {
    if (currentUser) {
      if (!fullName) setFullName(currentUser.name)
      if (!email) setEmail(currentUser.email)
    }
  }, [currentUser])

  const availableCities = useMemo(() => {
    if (!province || !PROVINCES_DATA[province]) return []
    return [...PROVINCES_DATA[province].cities].sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [province])

  const handleProvinceChange = (newProv: string) => {
    setProvince(newProv)
    setCity("")
    if (errors.province) setErrors((prev) => ({ ...prev, province: undefined }))
    if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }))
    syncPersonalInfo({ province: newProv, city: "" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    const nextErrors: typeof errors = {}

    if (!currentUser) {
      if (!fullName.trim()) {
        nextErrors.fullName = "El nombre es requerido."
        hasError = true
      }
      if (!email.trim()) {
        nextErrors.email = "El correo es requerido."
        hasError = true
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        nextErrors.email = "Ingresa un correo electrónico válido."
        setEmail("")
        hasError = true
      }
    }

    // Phone validation
    const phoneRes = validatePhoneNumber(phone)
    if (!phoneRes.isValid) {
      nextErrors.phone = phoneRes.error
      hasError = true
    }

    // Cédula o pasaporte validation
    const cedulaRes = validateCedulaOrPassport(cedula)
    if (!cedulaRes.isValid) {
      nextErrors.cedula = cedulaRes.error
      hasError = true
    }

    if (!birthDate.trim()) {
      nextErrors.birthDate = "La fecha de nacimiento es requerida."
      hasError = true
    }

    if (!province.trim()) {
      nextErrors.province = "Selecciona una provincia."
      hasError = true
    }

    if (!city.trim()) {
      nextErrors.city = "Selecciona una ciudad."
      hasError = true
    }

    if (!mainStreet.trim()) {
      nextErrors.mainStreet = "Ingresa la calle principal."
      hasError = true
    }

    if (!secondaryStreet.trim()) {
      nextErrors.secondaryStreet = "Ingresa la calle secundaria o intersección."
      hasError = true
    }

    if (!reference.trim()) {
      nextErrors.reference = "Ingresa el número de inmueble o referencia."
      hasError = true
    }

    setErrors(nextErrors)
    if (!hasError) {
      const finalInfo: PersonalInfo = {
        fullName: fullName.trim() || currentUser?.name || "Titular",
        email: email.trim() || currentUser?.email || "",
        phone: phone.trim(),
        cedula: cedula.trim(),
        birthDate: birthDate.trim(),
        province,
        city,
        mainStreet: mainStreet.trim(),
        secondaryStreet: secondaryStreet.trim(),
        reference: reference.trim(),
      }

      // Si no tenía dirección registrada previa, o si seleccionó actualizarla:
      // se guarda y actualiza en la cuenta del usuario y en su perfil
      const shouldUpdateAccount = !hasRegisteredAddress || wantsToUpdate
      onSavePersonalInfo(finalInfo, shouldUpdateAccount)
      go("viajeros")
    }
  }

  return (
    <>
      <PageTitle
        title="Información Personal"
        subtitle={
          hasRegisteredAddress
            ? "Revisa tus datos guardados o actualízalos para continuar con la reserva."
            : "Completa tus datos personales y de facturación para la reserva."
        }
      />
      <div className="section">
        <Stepper current={1} />
      </div>
      <div className="section checkout-layout">
        <form className="form-panel" onSubmit={handleSubmit} noValidate>
          <div className="panel-heading" style={{ marginBottom: "18px" }}>
            <div>
              <span className="eyebrow">Titular de la reserva</span>
              <h2 style={{ margin: "4px 0 2px" }}>
                {fullName || currentUser?.name || "Titular"}
              </h2>
              <span style={{ fontSize: "14px", color: "#5a6e7f" }}>
                {email || currentUser?.email || "Correo del titular"}
              </span>
            </div>
            {currentUser ? (
              <span className="status status--pacific" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <CheckIcon size={14} color="currentColor" /> Sesión iniciada
              </span>
            ) : (
              <Button kind="quiet" type="button" onClick={() => go("carrito")}>
                Iniciar sesión
              </Button>
            )}
          </div>

          <p style={{ margin: "0 0 20px", fontSize: "14px", color: "var(--abyss)" }}>
            {hasRegisteredAddress
              ? "Tus datos se encuentran precargados de tu registro previo. Revisa la información a continuación:"
              : "Ingresa tus datos requeridos para el registro oficial de la reserva y emisión del comprobante:"}
          </p>

          {!currentUser && (
            <div className="two-col" style={{ marginBottom: "14px" }}>
              <Field
                label="Nombre completo"
                placeholder="Como consta en tu cédula"
                value={fullName}
                onChange={(val) => {
                  setFullName(val)
                  syncPersonalInfo({ fullName: val })
                  if (errors.fullName)
                    setErrors((prev) => ({ ...prev, fullName: undefined }))
                }}
                error={errors.fullName}
                help="Nombre del titular."
                required
              />
              <Field
                label="Correo electrónico"
                type="email"
                placeholder="nombre@correo.com"
                value={email}
                onChange={(val) => {
                  setEmail(val)
                  syncPersonalInfo({ email: val })
                  if (errors.email)
                    setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                error={errors.email}
                help="Para comprobantes."
                required
              />
            </div>
          )}

          <div className="two-col">
            <Field
              label="Teléfono celular"
              type="tel"
              placeholder="Ej. 0991234567"
              value={phone}
              disabled={isLocked}
              onChange={(val) => {
                const clean = val.replace(/\D/g, "")
                setPhone(clean)
                syncPersonalInfo({ phone: clean })
                if (errors.phone)
                  setErrors((prev) => ({ ...prev, phone: undefined }))
              }}
              error={errors.phone}
              help="10 dígitos numéricos (inicia con 09)."
              required
            />

            <Field
              label="Cédula de identidad o pasaporte"
              placeholder="10 dígitos de cédula o pasaporte"
              value={cedula}
              disabled={isLocked}
              onChange={(val) => {
                const clean = val.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
                setCedula(clean)
                syncPersonalInfo({ cedula: clean })
                if (errors.cedula)
                  setErrors((prev) => ({ ...prev, cedula: undefined }))
              }}
              error={errors.cedula}
              help="Cédula (10 dígitos) o pasaporte (6 a 12 caracteres)."
              required
            />
          </div>

          <div className="two-col" style={{ marginTop: "14px" }}>
            <DatePickerField
              id="titular-birth-date"
              label="Fecha de nacimiento del titular"
              value={birthDate}
              disabled={isLocked}
              onChange={(val) => {
                setBirthDate(val)
                syncPersonalInfo({ birthDate: val })
                if (errors.birthDate)
                  setErrors((prev) => ({ ...prev, birthDate: undefined }))
              }}
              error={errors.birthDate}
              help="Selecciona tu fecha en el calendario desplegable."
              required
            />
          </div>

          <div className="two-col" style={{ marginTop: "14px" }}>
            <SelectField
              label="Provincia"
              value={province}
              disabled={isLocked}
              onChange={handleProvinceChange}
              error={errors.province}
              help="Residencia."
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
              label="Ciudad"
              value={city}
              onChange={(val) => {
                setCity(val)
                syncPersonalInfo({ city: val })
                if (errors.city)
                  setErrors((prev) => ({ ...prev, city: undefined }))
              }}
              error={errors.city}
              help="Cantón."
              disabled={isLocked || !province}
              required
            >
              <option value="">
                {province
                  ? "Selecciona tu ciudad"
                  : "Elige provincia primero"}
              </option>
              {availableCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectField>
          </div>

          <div style={{ marginTop: "20px" }}>
            <span
              className="field__label"
              style={{ display: "block", marginBottom: "8px", fontWeight: 700 }}
            >
              Dirección domiciliaria
            </span>
            <div className="two-col">
              <Field
                label="Calle principal"
                placeholder="Ej. Av. Amazonas"
                value={mainStreet}
                disabled={isLocked}
                onChange={(val) => {
                  setMainStreet(val)
                  syncPersonalInfo({ mainStreet: val })
                  if (errors.mainStreet)
                    setErrors((prev) => ({ ...prev, mainStreet: undefined }))
                }}
                error={errors.mainStreet}
                help="Vía principal."
                required
              />
              <Field
                label="Calle secundaria / Intersección"
                placeholder="Ej. Naciones Unidas"
                value={secondaryStreet}
                disabled={isLocked}
                onChange={(val) => {
                  setSecondaryStreet(val)
                  syncPersonalInfo({ secondaryStreet: val })
                  if (errors.secondaryStreet)
                    setErrors((prev) => ({ ...prev, secondaryStreet: undefined }))
                }}
                error={errors.secondaryStreet}
                help="Intersección."
                required
              />
            </div>
            <div style={{ marginTop: "14px" }}>
              <Field
                label="N° de casa / Edificio y referencia"
                placeholder="Ej. N34-120, diagonal al parque La Carolina"
                value={reference}
                disabled={isLocked}
                onChange={(val) => {
                  setReference(val)
                  syncPersonalInfo({ reference: val })
                  if (errors.reference)
                    setErrors((prev) => ({ ...prev, reference: undefined }))
                }}
                error={errors.reference}
                help="Número y referencia."
                required
              />
            </div>
          </div>

          {/* Si ya tiene una dirección registrada: preguntar si desea actualizarla o mantenerla */}
          {hasRegisteredAddress && (
            <div className="update-data-section">
              <div className="update-data-box">
                <div className="update-data-header">
                  <span className="update-icon" aria-hidden="true">
                    <ClipboardIcon size={20} color="var(--pacific)" />
                  </span>
                  <div>
                    <strong className="update-title">
                      ¿Deseas actualizar algún dato?
                    </strong>
                    <p className="update-desc">
                      Hemos rellenado tus campos automáticamente con la información que ingresaste previamente. Puedes confirmar estos datos o modificarlos directamente antes de continuar.
                    </p>
                  </div>
                </div>

                <div className="update-choice-group">
                  <label
                    className={`update-choice-card ${
                      !wantsToUpdate ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="updateDataOption"
                      checked={!wantsToUpdate}
                      onChange={handleSelectKeepCurrent}
                    />
                    <div className="choice-text">
                      <strong>Mantener mis datos actuales</strong>
                      <small>Confirmar y continuar con los datos mostrados arriba.</small>
                    </div>
                  </label>

                  <label
                    className={`update-choice-card ${
                      wantsToUpdate ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="updateDataOption"
                      checked={wantsToUpdate}
                      onChange={() => setWantsToUpdate(true)}
                    />
                    <div className="choice-text">
                      <strong>Sí, deseo actualizar mis datos</strong>
                      <small>Modifica cualquiera de los campos y guarda los cambios.</small>
                    </div>
                  </label>
                </div>

                {wantsToUpdate && (
                  <div className="update-active-notice">
                    <EditPencilIcon size={16} color="var(--pacific)" />
                    <span>
                      Puedes editar cualquiera de los campos de arriba (teléfono, cédula o dirección). Los nuevos datos se guardarán para tu reserva y en tu cuenta.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="split-actions" style={{ marginTop: "28px" }}>
            <Button
              kind="secondary"
              type="button"
              onClick={() => {
                syncPersonalInfo()
                go("carrito")
              }}
            >
              Volver al carrito
            </Button>
            <Button kind="primary" type="submit">
              {hasRegisteredAddress && wantsToUpdate
                ? "Guardar cambios y continuar a viajeros"
                : "Confirmar datos y continuar a viajeros"}
            </Button>
          </div>
        </form>
        <Summary total={total} />
      </div>
    </>
  )
}

