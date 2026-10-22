import { useState } from "react"
import type { Page, CartItem, PackageItem } from "../../types"
import { Button, PageTitle, Stepper, Summary, Placeholder } from "../../components/common"
import { AuthCheckoutModal } from "../../components/modals/AuthCheckoutModal"

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
  const empty = items.length === 0
  const grandTotal = items.reduce((acc, curr) => acc + curr.total, 0)

  const handleRemove = (item: CartItem) => {
    setRemovedAlert(`${item.pkg.name} fue quitado del carrito.`)
    onRemoveItem(item.id)
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
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  {item.pkg.image ? (
                    <div className="cart-item__image-wrap">
                      <img
                        src={item.pkg.image}
                        alt={`Fotografía de ${item.pkg.name}`}
                        className="cart-item__img"
                      />
                    </div>
                  ) : (
                    <Placeholder label={`Imagen de ${item.pkg.name}`} />
                  )}
                  <div>
                    <span className="eyebrow">{item.pkg.region}</span>
                    <h2>{item.pkg.name}</h2>
                    <p
                      style={{
                        margin: "4px 0 12px",
                        color: "var(--abyss)",
                        opacity: 0.85,
                        fontSize: "14px",
                      }}
                    >
                      📍 {item.pkg.city} ({item.pkg.province}) · {item.pkg.days}
                    </p>
                    <dl>
                      <div>
                        <dt>Fecha seleccionada</dt>
                        <dd>{item.date}</dd>
                      </div>
                      <div>
                        <dt>Personas</dt>
                        <dd>
                          <div className="cart-people-control">
                            <button
                              type="button"
                              className="cart-people-btn"
                              onClick={() =>
                                onUpdatePeople &&
                                onUpdatePeople(item.id, item.people - 1)
                              }
                              disabled={item.people <= 1}
                              aria-label={`Disminuir personas para ${item.pkg.name}`}
                              title={
                                item.people <= 1
                                  ? "Mínimo 1 viajero"
                                  : "Quitar una persona"
                              }
                            >
                              −
                            </button>
                            <span
                              className="cart-people-count"
                              aria-live="polite"
                            >
                              {item.people}
                            </span>
                            <button
                              type="button"
                              className="cart-people-btn"
                              onClick={() =>
                                onUpdatePeople &&
                                onUpdatePeople(item.id, Math.min(20, item.people + 1))
                              }
                              disabled={item.people >= 20}
                              aria-label={`Aumentar personas para ${item.pkg.name}`}
                              title={
                                item.people >= 20
                                  ? "Máximo 20 personas por paquete"
                                  : "Agregar una persona"
                              }
                            >
                              +
                            </button>
                            <span className="cart-people-unit">
                              {item.people === 1 ? "viajero" : "viajeros"}
                            </span>
                          </div>
                          {item.people >= 20 && (
                            <div
                              className="inline-alert"
                              style={{ marginTop: "10px", padding: "10px 12px" }}
                            >
                              <strong>⚠️ Límite de 20 personas por paquete</strong>
                              <span style={{ fontSize: "13px", lineHeight: 1.4 }}>
                                Este paquete está limitado a un máximo de 20 personas por reserva web. Si requieres cupos para un grupo más numeroso o corporativo, por favor contáctanos al teléfono <strong>02 2456456</strong> o al correo <strong>travelinnovation.tamc@gmail.com</strong>.
                              </span>
                            </div>
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt>Precio unitario</dt>
                        <dd>${item.pkg.price}</dd>
                      </div>
                      <div>
                        <dt>Subtotal paquete</dt>
                        <dd>
                          <strong>${item.total}</strong>
                        </dd>
                      </div>
                    </dl>
                    <div className="item-actions">
                      {onViewPackage && (
                        <Button
                          kind="secondary"
                          onClick={() => onViewPackage(item.pkg)}
                        >
                          Ver paquete
                        </Button>
                      )}
                      <Button
                        kind="danger"
                        onClick={() => handleRemove(item)}
                      >
                        Quitar
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
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

