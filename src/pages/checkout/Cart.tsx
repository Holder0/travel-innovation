import { useState, useMemo } from "react"
import type { Page, CartItem, PackageItem } from "../../types"
import { Button, PageTitle, Stepper, Summary, Placeholder } from "../../components/common"
import { AuthCheckoutModal } from "../../components/modals/AuthCheckoutModal"

interface PackageGroup {
  key: string
  pkg: PackageItem
  date: string
  items: CartItem[]
  totalPrice: number
  totalPeople: number
}

export function Cart({
  go,
  items,
  onRemoveItem,
  onUpdatePeople,
  onViewPackage,
  currentUser,
  onLoginSuccess,
}: {
  go: (page: Page) => void
  items: CartItem[]
  onRemoveItem: (id: string) => void
  onUpdatePeople?: (id: string, newPeople: number) => void
  onViewPackage?: (pkg: PackageItem) => void
  currentUser: { name: string; email: string } | null
  onLoginSuccess?: (user: { name: string; email: string }) => void
}) {
  const [removedAlert, setRemovedAlert] = useState<string | null>(null)
  const [isAuthCheckoutModalOpen, setIsAuthCheckoutModalOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({})

  const empty = items.length === 0
  const grandTotal = items.reduce((acc, curr) => acc + curr.total, 0)

  // Group packages only if they share the exact same package ID and date
  const groupedPackages = useMemo(() => {
    const groups: PackageGroup[] = []
    const groupMap = new Map<string, PackageGroup>()

    items.forEach((item) => {
      const key = `${item.pkg.id}___${item.date}`
      let group = groupMap.get(key)
      if (!group) {
        group = {
          key,
          pkg: item.pkg,
          date: item.date,
          items: [],
          totalPrice: 0,
          totalPeople: 0,
        }
        groupMap.set(key, group)
        groups.push(group)
      }
      group.items.push(item)
      group.totalPrice += item.total
      group.totalPeople += item.people
    })

    return groups
  }, [items])

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }))
  }

  const handleRemoveSingle = (subItem: CartItem) => {
    setRemovedAlert(`Un paquete de ${subItem.pkg.name} fue quitado del carrito.`)
    onRemoveItem(subItem.id)
  }

  const handleRemoveGroup = (group: PackageGroup) => {
    setRemovedAlert(
      group.items.length > 1
        ? `Se quitaron todos los paquetes de ${group.pkg.name} (${group.date}) del carrito.`
        : `${group.pkg.name} fue quitado del carrito.`
    )
    group.items.forEach((item) => {
      onRemoveItem(item.id)
    })
  }

  const handleContinueReservation = () => {
    if (!currentUser) {
      setIsAuthCheckoutModalOpen(true)
      return
    }
    go("identificacion")
  }

  return (
    <>
      <PageTitle
        title="Tu carrito"
        subtitle="Revisa tus salidas seleccionadas antes de continuar."
      />
      <div className="section">
        <Stepper current={0} />
      </div>
      {empty ? (
        <div className="section empty-state">
          <span className="empty-icon" aria-hidden="true">
            0
          </span>
          <h2>Tu carrito está vacío</h2>
          <p>Explora nuestros paquetes y elige tu próxima salida.</p>
          <Button kind="primary" onClick={() => go("catalogo")}>
            Ver paquetes
          </Button>
        </div>
      ) : (
        <div className="section checkout-layout">
          <section>
            {removedAlert && (
              <div className="inline-alert" role="status">
                <span>⚠️ {removedAlert}</span>
                <button onClick={() => setRemovedAlert(null)}>Cerrar</button>
              </div>
            )}
            <div className="cart-items-list">
              {groupedPackages.map((group) => {
                const isExpanded = !!expandedGroups[group.key]

                return (
                  <article className="cart-item" key={group.key}>
                    {group.pkg.image ? (
                      <div className="cart-item__image-wrap">
                        <img
                          src={group.pkg.image}
                          alt={`Fotografía de ${group.pkg.name}`}
                          className="cart-item__img"
                        />
                      </div>
                    ) : (
                      <Placeholder label={`Imagen de ${group.pkg.name}`} />
                    )}

                    <div>
                      <span className="eyebrow">{group.pkg.region}</span>
                      <h2>{group.pkg.name}</h2>
                      <p
                        style={{
                          margin: "4px 0 12px",
                          color: "var(--abyss)",
                          opacity: 0.85,
                          fontSize: "14px",
                        }}
                      >
                        📍 {group.pkg.city} ({group.pkg.province}) · {group.pkg.days}
                      </p>

                      <dl>
                        <div>
                          <dt>Fecha seleccionada</dt>
                          <dd>{group.date}</dd>
                        </div>
                        <div>
                          <dt>Valor total</dt>
                          <dd>
                            <strong
                              style={{
                                fontSize: "19px",
                                color: "var(--pacific)",
                              }}
                            >
                              ${group.totalPrice}
                            </strong>
                          </dd>
                        </div>
                        <div>
                          <dt>Paquetes seleccionados</dt>
                          <dd>
                            {group.items.length}{" "}
                            {group.items.length === 1 ? "paquete" : "paquetes"}{" "}
                            ({group.totalPeople}{" "}
                            {group.totalPeople === 1 ? "viajero" : "viajeros"} en total)
                          </dd>
                        </div>
                      </dl>

                      <div className="item-actions">
                        <Button
                          kind="secondary"
                          type="button"
                          onClick={() => toggleGroup(group.key)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded
                            ? "Ocultar los paquetes ▲"
                            : "Mostrar los paquetes ▼"}
                        </Button>

                        {onViewPackage && (
                          <Button
                            kind="quiet"
                            type="button"
                            onClick={() => onViewPackage(group.pkg)}
                          >
                            Ver paquete
                          </Button>
                        )}

                        <Button
                          kind="danger"
                          type="button"
                          onClick={() => handleRemoveGroup(group)}
                        >
                          {group.items.length > 1 ? "Quitar todos" : "Quitar"}
                        </Button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="cart-nested-container">
                        <div className="cart-nested-header">
                          <h3 className="cart-nested-title">
                            Paquetes seleccionados ({group.items.length})
                          </h3>
                          <span className="cart-nested-hint">
                            Ajusta los viajeros de cada paquete según tu viaje
                          </span>
                        </div>

                        <div className="cart-nested-list">
                          {group.items.map((subItem, idx) => (
                            <div key={subItem.id} className="cart-nested-card">
                              <div className="cart-nested-card-top">
                                <span className="cart-nested-badge">
                                  Paquete {idx + 1}
                                </span>
                                <button
                                  type="button"
                                  className="cart-nested-remove-btn"
                                  onClick={() => handleRemoveSingle(subItem)}
                                  aria-label={`Quitar Paquete ${idx + 1}`}
                                  title={`Quitar Paquete ${idx + 1}`}
                                >
                                  ✕ Quitar
                                </button>
                              </div>

                              <div className="cart-nested-fields">
                                <div className="cart-nested-field">
                                  <span className="cart-nested-field-label">
                                    Viajeros
                                  </span>
                                  <div className="cart-people-control">
                                    <button
                                      type="button"
                                      className="cart-people-btn"
                                      onClick={() =>
                                        onUpdatePeople &&
                                        onUpdatePeople(
                                          subItem.id,
                                          subItem.people - 1
                                        )
                                      }
                                      disabled={subItem.people <= 1}
                                      aria-label={`Disminuir viajeros para Paquete ${idx + 1}`}
                                      title={
                                        subItem.people <= 1
                                          ? "Mínimo 1 viajero"
                                          : "Quitar un viajero"
                                      }
                                    >
                                      −
                                    </button>
                                    <span
                                      className="cart-people-count"
                                      aria-live="polite"
                                    >
                                      {subItem.people}
                                    </span>
                                    <button
                                      type="button"
                                      className="cart-people-btn"
                                      onClick={() =>
                                        onUpdatePeople &&
                                        onUpdatePeople(
                                          subItem.id,
                                          Math.min(20, subItem.people + 1)
                                        )
                                      }
                                      disabled={subItem.people >= 20}
                                      aria-label={`Aumentar viajeros para Paquete ${idx + 1}`}
                                      title={
                                        subItem.people >= 20
                                          ? "Máximo 20 personas por paquete"
                                          : "Aumentar un viajero"
                                      }
                                    >
                                      +
                                    </button>
                                    <span className="cart-people-unit">
                                      {subItem.people === 1
                                        ? "viajero"
                                        : "viajeros"}
                                    </span>
                                  </div>
                                </div>

                                <div className="cart-nested-field">
                                  <span className="cart-nested-field-label">
                                    Precio unitario
                                  </span>
                                  <span className="cart-nested-field-value">
                                    ${subItem.pkg.price}
                                  </span>
                                </div>

                                <div className="cart-nested-field">
                                  <span className="cart-nested-field-label">
                                    Subtotal
                                  </span>
                                  <span className="cart-nested-field-value cart-nested-field-value--highlight">
                                    ${subItem.total}
                                  </span>
                                </div>
                              </div>

                              {subItem.people >= 20 && (
                                <div
                                  className="inline-alert"
                                  style={{
                                    marginTop: "10px",
                                    padding: "8px 12px",
                                    fontSize: "13px",
                                  }}
                                >
                                  <strong>⚠️ Límite de 20 personas por paquete</strong>
                                  <span>
                                    Para grupos corporativos o de mayor tamaño, contáctanos a{" "}
                                    <strong>travelinnovation.tamc@gmail.com</strong> o al teléfono{" "}
                                    <strong>02 2456456</strong>.
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
            <Button kind="quiet" onClick={() => go("catalogo")}>
              Seguir viendo paquetes
            </Button>
          </section>
          <Summary
            total={grandTotal}
            action={
              <div
                className="split-actions"
                style={{
                  marginTop: "16px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  kind="secondary"
                  type="button"
                  onClick={() => go("catalogo")}
                  style={{ flex: 1 }}
                >
                  Volver a paquetes
                </Button>
                <Button
                  kind="primary"
                  type="button"
                  onClick={handleContinueReservation}
                  style={{ flex: 1.2 }}
                >
                  Continuar con la reserva
                </Button>
              </div>
            }
          />
        </div>
      )}

      {isAuthCheckoutModalOpen && !currentUser && (
        <AuthCheckoutModal
          isOpen={isAuthCheckoutModalOpen}
          items={items}
          grandTotal={grandTotal}
          onClose={() => setIsAuthCheckoutModalOpen(false)}
          onLoginSuccess={(user) => {
            onLoginSuccess?.(user)
            setIsAuthCheckoutModalOpen(false)
            go("identificacion")
          }}
        />
      )}
    </>
  )
}
