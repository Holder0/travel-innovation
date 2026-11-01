import { useState, useMemo } from "react"
import type { Page, PackageItem, FavoriteItem } from "../types"
import { Button, PageTitle } from "../components/common"
import { HeartIcon, PartyIcon, PinIcon, ShoppingCartIcon } from "../components/common/SvgIcons"
import { packages } from "../data/packagesData"

export function Favorites({
  go,
  favorites = [],
  onRemoveFavorite,
  onViewPackage,
  onAddToCart,
  currentUser,
  onOpenLogin,
}: {
  go: (page: Page) => void
  favorites: FavoriteItem[]
  onRemoveFavorite: (packageId: string) => void
  onViewPackage: (pkg: PackageItem) => void
  onAddToCart: (pkg: PackageItem) => void
  currentUser: { name: string; email: string } | null
  onOpenLogin: () => void
}) {
  const [deleteTarget, setDeleteTarget] = useState<{
    pkgId: string
    pkgName: string
  } | null>(null)
  const [addedToast, setAddedToast] = useState<string | null>(null)

  // Sort from newest to oldest (más nuevo al más viejo)
  const sortedFavorites = useMemo(() => {
    return [...favorites].sort((a, b) => b.addedAt - a.addedAt)
  }, [favorites])

  // Enrich with package details
  const enrichedFavorites = useMemo(() => {
    return sortedFavorites
      .map((item) => {
        const pkg = packages.find((p) => p.id === item.packageId)
        if (!pkg) return null
        return {
          ...item,
          pkg,
        }
      })
      .filter(Boolean) as Array<FavoriteItem & { pkg: PackageItem }>
  }, [sortedFavorites])

  const formatDateAdded = (timestamp: number) => {
    try {
      const d = new Date(timestamp)
      return d.toLocaleDateString("es-EC", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return "Recientemente"
    }
  }

  const handleAddToCartWithToast = (pkg: PackageItem) => {
    onAddToCart(pkg)
    setAddedToast(`¡"${pkg.name}" se agregó al carrito!`)
    setTimeout(() => setAddedToast(null), 4000)
  }

  // If not logged in, prompt user
  if (!currentUser) {
    return (
      <>
        <PageTitle
          title="Mis favoritos"
          subtitle="Guarda y organiza los paquetes turísticos que más te interesan para tu próximo viaje."
        />
        <div className="section" style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
          <div
            className="form-panel"
            style={{
              padding: "36px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: "#fff5f5",
                display: "grid",
                placeItems: "center",
                fontSize: "32px",
                border: "2px solid rgba(230, 57, 70, 0.25)",
              }}
            >
              <HeartIcon size={32} filled={true} fillColor="var(--crimson, #e63946)" />
            </div>
            <h2 style={{ margin: "4px 0", color: "var(--pacific)" }}>
              Inicia sesión para ver tus favoritos
            </h2>
            <p style={{ margin: 0, color: "#5a6e7f", fontSize: "15px", maxWidth: "420px" }}>
              Inicia sesión con tu cuenta para guardar paquetes con el corazón y acceder a tu lista desde cualquier dispositivo.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              <Button kind="primary" onClick={onOpenLogin}>
                Iniciar sesión
              </Button>
              <Button kind="secondary" onClick={() => go("catalogo")}>
                Explorar paquetes
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <PageTitle
        title="Mis favoritos"
        subtitle="Paquetes turísticos guardados en tu cuenta. Ordenados desde el más recientemente agregado hasta el más antiguo."
      />

      {addedToast && (
        <div
          className="inline-alert"
          role="status"
          style={{
            maxWidth: "960px",
            margin: "0 auto 20px",
            background: "#e8f7f0",
            borderColor: "var(--success)",
            color: "var(--abyss)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <PartyIcon size={18} color="var(--success)" />
            <span>{addedToast}</span>
          </span>
          <Button
            kind="quiet"
            style={{ fontSize: "13px", padding: "4px 8px", textDecoration: "underline" }}
            onClick={() => go("carrito")}
          >
            Ir al carrito →
          </Button>
        </div>
      )}

      <div className="section" style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div>
            <h2 style={{ margin: 0, color: "var(--pacific)", fontSize: "20px" }}>
              Paquetes guardados ({enrichedFavorites.length})
            </h2>
            <span style={{ fontSize: "13px", color: "#5a6e7f" }}>
              Visualización ordenada: más nuevo primero
            </span>
          </div>
          {enrichedFavorites.length > 0 && (
            <Button kind="secondary" onClick={() => go("catalogo")}>
              + Explorar más destinos
            </Button>
          )}
        </div>

        {enrichedFavorites.length === 0 ? (
          <div
            className="form-panel"
            style={{
              textAlign: "center",
              padding: "50px 24px",
              background: "#ffffff",
              border: "1.5px dashed rgba(27, 73, 101, 0.3)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 16px",
                borderRadius: "50%",
                background: "var(--breeze)",
                display: "grid",
                placeItems: "center",
                fontSize: "30px",
              }}
            >
              <HeartIcon size={32} filled={false} color="#94a3b8" />
            </div>
            <h3 style={{ margin: "0 0 8px", color: "var(--pacific)" }}>
              No tienes paquetes en tus favoritos aún
            </h3>
            <p
              style={{
                margin: "0 auto 20px",
                maxWidth: "460px",
                fontSize: "14px",
                color: "#5a6e7f",
                lineHeight: 1.5,
              }}
            >
              Explora nuestro catálogo de paquetes turísticos por Costa, Sierra, Amazonía y Galápagos. Al hacer clic en el corazón de cualquier paquete, se guardará aquí.
            </p>
            <Button kind="primary" onClick={() => go("catalogo")}>
              Ver catálogo de paquetes
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {enrichedFavorites.map((item, idx) => {
              const { pkg } = item
              return (
                <article
                  key={pkg.id}
                  className="cart-item"
                  style={{
                    position: "relative",
                    background: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid rgba(27, 73, 101, 0.2)",
                    padding: "20px",
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    boxShadow: "0 4px 14px rgba(15, 31, 44, 0.05)",
                  }}
                >
                  {/* Botón de quitar de favoritos con diseño idéntico al carrito */}
                  <button
                    type="button"
                    className="cart-btn-remove-group"
                    onClick={() =>
                      setDeleteTarget({ pkgId: pkg.id, pkgName: pkg.name })
                    }
                    aria-label={`Quitar paquete de ${pkg.name}`}
                    title="Quitar de favoritos"
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

                  {/* Imagen del paquete */}
                  <div
                    style={{
                      width: "180px",
                      height: "135px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={pkg.image}
                      alt={`Fotografía de ${pkg.name}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Contenido del paquete */}
                  <div style={{ flex: 1, minWidth: "260px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "4px",
                      }}
                    >
                      <span className="eyebrow">{pkg.region}</span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#5a6e7f",
                          background: "var(--breeze)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontWeight: 500,
                        }}
                      >
                        #{idx + 1} más reciente
                      </span>
                    </div>

                    <h3
                      style={{
                        margin: "0 0 4px",
                        fontSize: "19px",
                        color: "var(--pacific)",
                      }}
                    >
                      {pkg.name}
                    </h3>

                    <p
                      style={{
                        margin: "0 0 10px",
                        color: "#5a6e7f",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <PinIcon size={14} color="var(--pacific)" /> {pkg.city} ({pkg.province}) · {pkg.days}
                    </p>

                    <dl
                      style={{
                        display: "flex",
                        gap: "24px",
                        margin: "0 0 14px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <dt
                          style={{
                            fontSize: "12px",
                            color: "#5a6e7f",
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          Precio
                        </dt>
                        <dd
                          style={{
                            margin: 0,
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "var(--pacific)",
                          }}
                        >
                          ${pkg.price}{" "}
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#5a6e7f",
                              fontWeight: 400,
                            }}
                          >
                            / persona
                          </span>
                        </dd>
                      </div>

                      <div>
                        <dt
                          style={{
                            fontSize: "12px",
                            color: "#5a6e7f",
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          Guardado
                        </dt>
                        <dd
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            color: "var(--abyss)",
                            fontWeight: 500,
                          }}
                        >
                          {formatDateAdded(item.addedAt)}
                        </dd>
                      </div>

                      <div>
                        <dt
                          style={{
                            fontSize: "12px",
                            color: "#5a6e7f",
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          Fechas
                        </dt>
                        <dd
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            color: "var(--abyss)",
                          }}
                        >
                          {pkg.datesText || "Fechas confirmadas"}
                        </dd>
                      </div>
                    </dl>

                    {/* Acciones del paquete */}
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <Button
                        kind="primary"
                        onClick={() => handleAddToCartWithToast(pkg)}
                        style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                      >
                        <ShoppingCartIcon size={16} /> Agregar al carrito
                      </Button>
                      <button
                        type="button"
                        className="button button--secondary"
                        style={{ border: "1.5px solid var(--pacific)" }}
                        onClick={() => {
                          onViewPackage(pkg)
                          go("detalle")
                        }}
                      >
                        Detalles
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>

      {/* Modal de confirmación para eliminar de favoritos */}
      {deleteTarget && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-delete-fav-title"
          onClick={() => setDeleteTarget(null)}
        >
          <div
            className="modal"
            style={{ maxWidth: "460px", padding: "24px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius)",
                  background: "#fde8e8",
                  border: "1.5px solid #e05252",
                  color: "#c53030",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <h3
                id="confirm-delete-fav-title"
                style={{ margin: 0, fontSize: "18px", color: "var(--abyss)" }}
              >
                ¿Quitar de tus favoritos?
              </h3>
            </div>

            <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#5a6e7f", lineHeight: 1.5 }}>
              ¿Estás seguro de que deseas quitar{" "}
              <strong>"{deleteTarget.pkgName}"</strong> de tu lista de favoritos? Podrás volver a agregarlo en cualquier momento desde el catálogo o la vista de detalles.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <Button kind="secondary" onClick={() => setDeleteTarget(null)}>
                Cancelar
              </Button>
              <Button
                kind="danger"
                onClick={() => {
                  onRemoveFavorite(deleteTarget.pkgId)
                  setDeleteTarget(null)
                }}
              >
                Sí, quitar de favoritos
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

