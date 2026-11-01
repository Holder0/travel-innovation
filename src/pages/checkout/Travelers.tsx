import React, { useState, useEffect, useMemo } from "react"
import type { Page, CartItem, PersonalInfo, TravelerData } from "../../types"
import {
  Button,
  Field,
  SelectField,
  PageTitle,
  Stepper,
  Summary,
  DatePickerField,
} from "../../components/common"
import { validateCedulaOrPassport, validatePhoneNumber } from "../../utils/validation"

export function isTravelerMinor(birthDateStr?: string): boolean {
  if (!birthDateStr) return false
  const parts = birthDateStr.split("-").map(Number)
  if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return false
  const today = new Date()
  let age = today.getFullYear() - parts[0]
  const m = today.getMonth() + 1 - parts[1]
  if (m < 0 || (m === 0 && today.getDate() < parts[2])) {
    age--
  }
  return age < 18
}

export function Travelers({
  go,
  total = 378,
  currentUser,
  personalInfo,
  cartItems,
  travelersList,
  onSaveTravelers,
}: {
  go: (page: Page) => void
  total?: number
  currentUser?: { name: string; email: string } | null
  personalInfo: PersonalInfo
  cartItems: CartItem[]
  travelersList: TravelerData[]
  onSaveTravelers: (travelers: TravelerData[]) => void
}) {
  // Generate traveler slots based directly on the cart items
  const generatedSlots = useMemo(() => {
    const list: TravelerData[] = []
    if (cartItems.length === 0) {
      const titularBirth = personalInfo.birthDate || ""
      list.push({
        id: "traveler-default-1",
        packageId: "default",
        slotNumber: 1,
        packageTitle: "Paquete turístico",
        isTitular: true,
        fullName: personalInfo.fullName || currentUser?.name || "",
        cedula: personalInfo.cedula || "",
        phone: personalInfo.phone || "",
        email: personalInfo.email || currentUser?.email || "",
        isMinor: isTravelerMinor(titularBirth),
        birthDate: titularBirth,
      })
    } else {
      cartItems.forEach((item) => {
        for (let p = 1; p <= item.people; p++) {
          const isFirstInPkg = p === 1
          const bDate = isFirstInPkg ? personalInfo.birthDate || "" : ""
          list.push({
            id: `traveler-${item.id}-${p}`,
            packageId: item.id,
            slotNumber: p,
            packageTitle: item.pkg.name,
            isTitular: isFirstInPkg,
            fullName: isFirstInPkg
              ? personalInfo.fullName || currentUser?.name || ""
              : "",
            cedula: isFirstInPkg ? personalInfo.cedula || "" : "",
            phone: isFirstInPkg ? personalInfo.phone || "" : "",
            email: isFirstInPkg
              ? personalInfo.email || currentUser?.email || ""
              : "",
            isMinor: isTravelerMinor(bDate),
            birthDate: bDate,
          })
        }
      })
    }
    return list
  }, [cartItems, personalInfo, currentUser])

  const [travelers, setTravelers] = useState<TravelerData[]>(() => {
    if (travelersList && travelersList.length > 0) {
      return generatedSlots.map((gen, idx) => {
        const existing = travelersList.find((t) => t.id === gen.id) || travelersList[idx]
        if (existing) {
          return {
            ...gen,
            fullName:
              existing.fullName !== undefined ? existing.fullName : gen.fullName,
            cedula:
              existing.cedula !== undefined ? existing.cedula : gen.cedula,
            phone: existing.phone !== undefined ? existing.phone : gen.phone,
            email: existing.email !== undefined ? existing.email : gen.email,
            isMinor: existing.isMinor !== undefined ? existing.isMinor : gen.isMinor,
            birthDate: existing.birthDate || "",
            isTitular:
              existing.isTitular !== undefined
                ? existing.isTitular
                : gen.isTitular,
          }
        }
        return gen
      })
    }
    return generatedSlots
  })

  // Synchronize slot counts if cartItems changes
  useEffect(() => {
    setTravelers((prev) => {
      if (prev.length !== generatedSlots.length) {
        return generatedSlots.map((gen, idx) => {
          const existing = prev.find((t) => t.id === gen.id) || prev[idx]
          if (existing) {
            return {
              ...gen,
              fullName: existing.fullName !== undefined ? existing.fullName : gen.fullName,
              cedula: existing.cedula !== undefined ? existing.cedula : gen.cedula,
              phone: existing.phone !== undefined ? existing.phone : gen.phone,
              email: existing.email !== undefined ? existing.email : gen.email,
              isMinor: existing.isMinor !== undefined ? existing.isMinor : gen.isMinor,
              birthDate: existing.birthDate || "",
              isTitular: existing.isTitular !== undefined ? existing.isTitular : gen.isTitular,
            }
          }
          return gen
        })
      }
      return prev
    })
  }, [generatedSlots])

  // Reset travelers to fresh blank slots when travelersList is emptied
  useEffect(() => {
    if (!travelersList || travelersList.length === 0) {
      setTravelers(generatedSlots)
      setErrors({})
      setGroupErrors({})
    }
  }, [travelersList, generatedSlots])

  const [errors, setErrors] = useState<
    Record<string, { fullName?: string; cedula?: string; birthDate?: string; phone?: string; email?: string }>
  >({})
  const [groupErrors, setGroupErrors] = useState<Record<string, string | undefined>>({})

  const handleTravelerChange = (
    travelerId: string,
    field: keyof TravelerData,
    value: any
  ) => {
    const updated = travelers.map((t) => {
      if (t.id === travelerId) {
        const next = { ...t, [field]: value }
        if (field === "birthDate") {
          next.isMinor = isTravelerMinor(value)
        }
        return next
      }
      return t
    })
    setTravelers(updated)
    onSaveTravelers(updated)

    if (errors[travelerId]?.[field as "fullName" | "cedula" | "birthDate" | "phone" | "email"]) {
      setErrors((prev) => ({
        ...prev,
        [travelerId]: {
          ...prev[travelerId],
          [field]: undefined,
        },
      }))
    }
  }

  const handleRoleChange = (
    travelerId: string,
    packageId: string,
    role: "titular" | "acompanante"
  ) => {
    let updated: TravelerData[]
    if (role === "titular") {
      // En este paquete, travelerId es titular y los demás son acompañantes
      updated = travelers.map((t) => {
        if (t.packageId === packageId) {
          return {
            ...t,
            isTitular: t.id === travelerId,
          }
        }
        return t
      })
    } else {
      updated = travelers.map((t) => {
        if (t.id === travelerId) {
          return {
            ...t,
            isTitular: false,
          }
        }
        return t
      })
    }
    setTravelers(updated)
    onSaveTravelers(updated)
    setGroupErrors((prev) => ({ ...prev, [packageId]: undefined }))
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    const nextErrors: Record<
      string,
      { fullName?: string; cedula?: string; birthDate?: string; phone?: string }
    > = {}
    const nextGroupErrors: Record<string, string> = {}

    // Validar datos de cada viajero y limpiar solo campos errados
    const updatedTravelers = travelers.map((t) => {
      const errs: {
        fullName?: string
        cedula?: string
        birthDate?: string
        phone?: string
      } = {}
      let modified = { ...t }

      if (!t.fullName.trim()) {
        errs.fullName = "El nombre completo es requerido."
        hasError = true
      }

      // Validar documento / cédula o pasaporte
      const cedulaRes = validateCedulaOrPassport(t.cedula)
      if (!cedulaRes.isValid) {
        errs.cedula = cedulaRes.error
        hasError = true
      }

      // Validar teléfono del titular si fue ingresado
      if (t.isTitular && t.phone) {
        const phoneRes = validatePhoneNumber(t.phone)
        if (!phoneRes.isValid) {
          errs.phone = phoneRes.error
          hasError = true
        }
      }

      if (!t.birthDate?.trim()) {
        errs.birthDate = "La fecha de nacimiento es requerida."
        hasError = true
      }

      if (Object.keys(errs).length > 0) {
        nextErrors[t.id] = errs
      }

      return modified
    })

    // Validar que cada paquete tenga un titular seleccionado
    const targetGroups =
      cartItems.length > 0
        ? cartItems.map((c) => ({ id: c.id, name: c.pkg.name }))
        : [{ id: "default", name: "Paquete turístico" }]

    targetGroups.forEach((grp) => {
      const hasTitular = travelers.some(
        (t) => (t.packageId === grp.id || !t.packageId) && t.isTitular
      )
      if (!hasTitular) {
        nextGroupErrors[grp.id] = `Debes seleccionar a un titular para el paquete "${grp.name}".`
        hasError = true
      }
    })

    setErrors(nextErrors)
    setGroupErrors(nextGroupErrors)

    if (hasError) {
      setTravelers(updatedTravelers) // Limpia solo los campos con error
      return
    }

    onSaveTravelers(travelers)
    go("pago")
  }

  const renderedGroups = useMemo(() => {
    if (cartItems.length === 0) {
      return [
        {
          id: "default",
          pkg: {
            id: "default",
            name: "Paquete turístico",
            destination: "Ecuador",
            image: "",
          },
          people: 1,
          travelers: travelers.filter(
            (t) => !t.packageId || t.packageId === "default"
          ),
        },
      ]
    }
    return cartItems.map((item) => ({
      id: item.id,
      pkg: item.pkg,
      people: item.people,
      travelers: travelers.filter((t) => t.packageId === item.id),
    }))
  }, [cartItems, travelers])

  return (
    <>
      <PageTitle
        title="Datos de viajeros"
        subtitle="Completa los datos de los pasajeros agrupados por paquete turístico."
      />
      <div className="section">
        <Stepper current={2} />
      </div>
      <div className="section checkout-layout">
        <form className="form-stack" onSubmit={handleContinue} noValidate>
          {renderedGroups.map((group, gIdx) => {
            const currentTitular = group.travelers.find((t) => t.isTitular)
            const groupError = groupErrors[group.id]

            return (
              <section
                className="package-travelers-group"
                key={group.id}
                style={{ marginBottom: "28px" }}
              >
                <div className="package-travelers-header">
                  <div>
                    <span className="eyebrow">
                      Paquete {gIdx + 1} de {renderedGroups.length}
                    </span>
                    <h2 style={{ margin: "2px 0 4px 0", color: "var(--pacific)" }}>
                      {group.pkg.name}
                    </h2>
                    <p
                      className="muted"
                      style={{ margin: 0, fontSize: "0.88rem" }}
                    >
                      📍 {("destination" in group.pkg ? (group.pkg as any).destination : `${group.pkg.city} (${group.pkg.province})`)} · {group.people}{" "}
                      {group.people === 1 ? "pasajero" : "pasajeros"}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="status status--pacific">
                      Titular:{" "}
                      <strong>
                        {currentTitular?.fullName || "Selecciona un titular"}
                      </strong>
                    </span>
                  </div>
                </div>

                {groupError && (
                  <div
                    className="inline-alert"
                    role="alert"
                    style={{ marginBottom: "16px" }}
                  >
                    ⚠️ {groupError}
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  {group.travelers.map((traveler, pIdx) => {
                    const isFirstInGroup = pIdx === 0
                    const travelerErrors = errors[traveler.id] || {}

                    return (
                      <article
                        className="form-panel"
                        key={traveler.id}
                        style={{ background: "#ffffff" }}
                      >
                        <div
                          className="panel-heading"
                          style={{ marginBottom: "16px" }}
                        >
                          <div>
                            <span className="eyebrow">{group.pkg.name}</span>
                            <h3
                              style={{ margin: "2px 0", color: "var(--pacific)" }}
                            >
                              Viajero {traveler.slotNumber} ·{" "}
                              {traveler.isTitular
                                ? "Titular del paquete"
                                : "Acompañante"}
                            </h3>
                          </div>
                          {isFirstInGroup && (
                            <span className="status status--pacific">
                              ✓ Datos precargados
                            </span>
                          )}
                        </div>

                        <div
                          className="two-col"
                          style={{ marginBottom: "14px" }}
                        >
                          {group.travelers.length === 1 ? (
                            <SelectField
                              label="Rol en la reserva"
                              value="titular"
                              disabled={true}
                              help="Único pasajero (titular)."
                            >
                              <option value="titular">Titular de la reserva</option>
                            </SelectField>
                          ) : (
                            <SelectField
                              label="Rol en la reserva"
                              value={traveler.isTitular ? "titular" : "acompanante"}
                              onChange={(val) =>
                                handleRoleChange(
                                  traveler.id,
                                  group.id,
                                  val as "titular" | "acompanante"
                                )
                              }
                              help="Titular o acompañante."
                            >
                              <option value="titular">Titular de la reserva</option>
                              <option value="acompanante">Acompañante</option>
                            </SelectField>
                          )}
                        </div>

                        <div className="two-col">
                          <Field
                            label="Nombre completo"
                            placeholder="Como aparece en su documento"
                            value={traveler.fullName}
                            onChange={(val) =>
                              handleTravelerChange(
                                traveler.id,
                                "fullName",
                                val
                              )
                            }
                            error={travelerErrors.fullName}
                            help={
                              isFirstInGroup
                                ? "Datos editables del titular."
                                : "Nombre completo."
                            }
                            required
                          />
                          <Field
                            label="Documento de identidad"
                            placeholder="Cédula de 10 dígitos o pasaporte"
                            value={traveler.cedula}
                            onChange={(val) =>
                              handleTravelerChange(
                                traveler.id,
                                "cedula",
                                val.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
                              )
                            }
                            error={travelerErrors.cedula}
                            help="Cédula ecuatoriana o pasaporte."
                            required
                          />
                        </div>

                        <div
                          className="two-col"
                          style={{ marginTop: "14px" }}
                        >
                          <DatePickerField
                            id={`traveler-birthdate-${traveler.id}`}
                            label="Fecha de nacimiento"
                            value={traveler.birthDate || ""}
                            onChange={(val) =>
                              handleTravelerChange(
                                traveler.id,
                                "birthDate",
                                val
                              )
                            }
                            error={travelerErrors.birthDate}
                            help="Selecciona en el calendario (haz clic en 📅)."
                            required
                          />

                          {traveler.isTitular ? (
                            <Field
                              label="Teléfono de contacto"
                              placeholder="Ej. 0991234567"
                              value={traveler.phone || ""}
                              onChange={(val) =>
                                handleTravelerChange(
                                  traveler.id,
                                  "phone",
                                  val.replace(/\D/g, "")
                                )
                              }
                              error={travelerErrors.phone}
                              help="10 dígitos (inicia con 09)."
                            />
                          ) : null}
                        </div>

                        {traveler.isTitular && (
                          <div
                            className="two-col"
                            style={{ marginTop: "14px" }}
                          >
                            <Field
                              label="Correo electrónico"
                              placeholder="ejemplo@correo.com"
                              type="email"
                              value={traveler.email || ""}
                              onChange={(val) =>
                                handleTravelerChange(
                                  traveler.id,
                                  "email",
                                  val
                                )
                              }
                              help="Para vouchers y notificaciones."
                            />
                          </div>
                        )}

                        {traveler.birthDate && isTravelerMinor(traveler.birthDate) && (
                          <div
                            className="inline-alert"
                            style={{ marginTop: "12px" }}
                          >
                            ⚠️ <strong>Menor de edad:</strong> Lleva su documento de identidad y autorización escrita si viaja sin sus padres o representantes legales.
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </section>
            )
          })}

          <div className="important-note">
            <strong>⚠️ Lleva tu cédula física y original el día del viaje</strong>
            <p>
              Todos los pasajeros deben presentar su documento de identidad original
              para el embarque y check-in del paquete contratado.
            </p>
          </div>

          <div className="split-actions">
            <Button
              kind="secondary"
              type="button"
              onClick={() => {
                onSaveTravelers(travelers)
                go("identificacion")
              }}
            >
              Volver a información personal
            </Button>
            <Button kind="primary" type="submit">
              Continuar al pago
            </Button>
          </div>
        </form>
        <Summary total={total} />
      </div>
    </>
  )
}

