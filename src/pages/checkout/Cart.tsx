import { useState, useMemo, useEffect } from "react"
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

interface DeleteTarget {
  type: "single" | "group"
  pkgName: string
  date?: string
  itemId?: string
  groupKey?: string
  itemCount?: number
  people?: number
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
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null)

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

  // Request deletion with confirmation
  const requestRemoveSingle = (subItem: CartItem, index: number) => {
    setDeleteTarget({
      type: "single",
      pkgName: subItem.pkg.name,
      itemId: subItem.id,
      people: subItem.people,
      itemCount: index + 1,
    })
  }

  const requestRemoveGroup = (group: PackageGroup) => {
    setDeleteTarget({
      type: "group",
      pkgName: group.pkg.name,
      date: group.date,
      groupKey: group.key,
      itemCount: group.items.length,
    })
  }

  const cancelDelete = () => {
    setDeleteTarget(null)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return

    if (deleteTarget.type === "group" && deleteTarget.groupKey) {
      const group = groupedPackages.find((g) => g.key === deleteTarget.groupKey)
      if (group) {
        group.items.forEach((item) => {
          onRemoveItem(item.id)
        })
        setRemovedAlert(
          group.items.length > 1
            ? `Se quitaron todos los paquetes de ${group.pkg.name} (${group.date}) del carrito.`
            : `${group.pkg.name} fue quitado del carrito.`
        )
      }
    } else if (deleteTarget.type === "single" && deleteTarget.itemId) {
      onRemoveItem(deleteTarget.itemId)
      setRemovedAlert(`Un paquete de ${deleteTarget.pkgName} fue quitado del carrito.`)
    }

    setDeleteTarget(null)
  }

  // Close confirmation modal on Escape key
  useEffect(() => {
    if (!deleteTarget) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") cancelDelete()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [deleteTarget])

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
                    <button
                      type="button"
                      className="cart-btn-remove-group"
                      onClick={() => requestRemoveGroup(group)}
                      aria-label={
                        group.items.length > 1
                          ? `Quitar todos los paquetes de ${group.pkg.name}`
                          : `Quitar paquete de ${group.pkg.name}`
                      }
                      title={
                        group.items.length > 1
                          ? "Quitar todos los paquetes"
                          : "Quitar paquete"
                      }
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>

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

                    <div className="cart-item__content">
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
                            className="cart-btn-details"
                            type="button"
                            onClick={() => onViewPackage(group.pkg)}
                          >
                            Detalles
                          </Button>
                        )}
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
                                  onClick={() => requestRemoveSingle(subItem, idx)}
                                  aria-label={`Quitar Paquete ${idx + 1}`}
                                  title={`Quitar Paquete ${idx + 1}`}
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <path d="M3 6h18" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                  </svg>
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

      {/* Confirmation Modal for Removing Package(s) */}
      {deleteTarget && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={cancelDelete}
        >
          <section
            className="modal cart-confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-confirm-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="panel-heading" style={{ marginBottom: "14px" }}>
              <h2
                id="cart-confirm-modal-title"
                style={{ fontSize: "19px", color: "var(--pacific)", margin: 0 }}
              >
                {deleteTarget.type === "group" && (deleteTarget.itemCount || 1) > 1
                  ? "¿Quitar todos los paquetes?"
                  : "¿Quitar paquete del carrito?"}
              </h2>
              <button
                className="icon-button"
                aria-label="Cerrar confirmación"
                onClick={cancelDelete}
                type="button"
              >
                ×
              </button>
            </div>

            <div className="cart-confirm-modal-body">
              <div className="cart-confirm-icon-wrap" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c53030"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
              <div>
                {deleteTarget.type === "group" ? (
                  (deleteTarget.itemCount || 1) > 1 ? (
                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        color: "var(--abyss)",
                        lineHeight: 1.5,
                      }}
                    >
                      ¿Estás seguro de que deseas quitar los{" "}
                      <strong>{deleteTarget.itemCount} paquetes</strong> seleccionados de{" "}
                      <strong>{deleteTarget.pkgName}</strong> ({deleteTarget.date}) del carrito?
                    </p>
                  ) : (
                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        color: "var(--abyss)",
                        lineHeight: 1.5,
                      }}
                    >
                      ¿Estás seguro de que deseas quitar el paquete{" "}
                      <strong>{deleteTarget.pkgName}</strong> ({deleteTarget.date}) del carrito?
                    </p>
                  )
                ) : (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      color: "var(--abyss)",
                      lineHeight: 1.5,
                    }}
                  >
                    ¿Estás seguro de que deseas quitar este{" "}
                    <strong>Paquete {deleteTarget.itemCount}</strong> ({deleteTarget.people}{" "}
                    {deleteTarget.people === 1 ? "viajero" : "viajeros"}) de{" "}
                    <strong>{deleteTarget.pkgName}</strong> del carrito?
                  </p>
                )}
                <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#5a6e7f" }}>
                  Esta acción liberará la selección en tu carrito actual.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "24px",
                paddingTop: "16px",
                borderTop: "1px solid #d4e3e8",
              }}
            >
              <Button
                kind="secondary"
                type="button"
                onClick={cancelDelete}
              >
                Cancelar
              </Button>
              <Button
                kind="danger"
                type="button"
                className="cart-confirm-delete-btn"
                onClick={confirmDelete}
              >
                Sí, quitar
              </Button>
            </div>
          </section>
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
