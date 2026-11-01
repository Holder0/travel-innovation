import React, { useState, useEffect, useMemo } from "react"
import type { Page, PersonalInfo } from "../../types"
import { Button, Field, SelectField, PageTitle, Stepper, Summary } from "../../components/common"
import { PROVINCES_DATA } from "../../data/provincesData"
import { validateCedulaOrPassport, validatePhoneNumber } from "../../utils/validation"

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
  onSavePersonalInfo: (info: PersonalInfo) => void
}) {
  const [fullName, setFullName] = useState(
    personalInfo.fullName || currentUser?.name || ""
  )
  const [email, setEmail] = useState(
    personalInfo.email || currentUser?.email || ""
  )
  const [phone, setPhone] = useState(personalInfo.phone || "")
  const [cedula, setCedula] = useState(personalInfo.cedula || "")
  const [province, setProvince] = useState(personalInfo.province || "")
  const [city, setCity] = useState(personalInfo.city || "")
  const [mainStreet, setMainStreet] = useState(personalInfo.mainStreet || "")
  const [secondaryStreet, setSecondaryStreet] = useState(
    personalInfo.secondaryStreet || ""
  )
  const [reference, setReference] = useState(personalInfo.reference || "")
  const [wantsToUpdate, setWantsToUpdate] = useState(false)

  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    phone?: string
    cedula?: string
    province?: string
    city?: string
    mainStreet?: string
    secondaryStreet?: string
    reference?: string
  }>({})

  // Check if user has previously entered their required identification data
  const hasPreviouslyEnteredData = useMemo(() => {
    return Boolean(
      personalInfo.phone?.trim() &&
      personalInfo.cedula?.trim() &&
      personalInfo.province?.trim() &&
      personalInfo.city?.trim() &&
      personalInfo.mainStreet?.trim()
    )
  }, [personalInfo])

  const syncPersonalInfo = (overrides: Partial<PersonalInfo> = {}) => {
    onSavePersonalInfo({
      fullName: overrides.fullName !== undefined ? overrides.fullName : fullName,
      email: overrides.email !== undefined ? overrides.email : email,
      phone: overrides.phone !== undefined ? overrides.phone : phone,
      cedula: overrides.cedula !== undefined ? overrides.cedula : cedula,
      province: overrides.province !== undefined ? overrides.province : province,
      city: overrides.city !== undefined ? overrides.city : city,
      mainStreet: overrides.mainStreet !== undefined ? overrides.mainStreet : mainStreet,
      secondaryStreet: overrides.secondaryStreet !== undefined ? overrides.secondaryStreet : secondaryStreet,
      reference: overrides.reference !== undefined ? overrides.reference : reference,
    })
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
      onSavePersonalInfo({
        fullName: fullName.trim() || currentUser?.name || "Titular",
        email: email.trim() || currentUser?.email || "",
        phone: phone.trim(),
        cedula: cedula.trim(),
        province,
        city,
        mainStreet: mainStreet.trim(),
        secondaryStreet: secondaryStreet.trim(),
        reference: reference.trim(),
      })
      go("viajeros")
    }
  }

  return (
    <>
      <PageTitle
        title="Información Personal"
        subtitle={
          hasPreviouslyEnteredData
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
              <span className="status status--pacific">✓ Sesión iniciada</span>
            ) : (
              <Button kind="quiet" type="button" onClick={() => go("carrito")}>
                Iniciar sesión
              </Button>
            )}
          </div>

          <p style={{ margin: "0 0 20px", fontSize: "14px", color: "var(--abyss)" }}>
            {hasPreviouslyEnteredData
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
            <SelectField
              label="Provincia"
              value={province}
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
              disabled={!province}
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

          {/* Si ya ha ingresado datos antes: preguntar si desea actualizar algún dato */}
          {hasPreviouslyEnteredData && (
            <div className="update-data-section">
              <div className="update-data-box">
                <div className="update-data-header">
                  <span className="update-icon" aria-hidden="true">
                    📋
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
                      onChange={() => setWantsToUpdate(false)}
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
                    <span aria-hidden="true">✏️</span>
                    <span>
                      Puedes editar cualquiera de los campos de arriba (teléfono, cédula o dirección). Los nuevos datos se guardarán para tu reserva.
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
              {hasPreviouslyEnteredData
                ? wantsToUpdate
                  ? "Guardar cambios y continuar a viajeros"
                  : "Confirmar datos y continuar a viajeros"
                : "Continuar a datos de viajeros"}
            </Button>
          </div>
        </form>
        <Summary total={total} />
      </div>
    </>
  )
}

