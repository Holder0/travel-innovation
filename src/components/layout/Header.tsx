import { useState, useRef, useEffect, useMemo } from "react"
import type { Page } from "../../types"
import { pageNames } from "../../types"
import logoBadge from "../../assets/logo-badge.png"
import { Button } from "../common/Button"
import { getRegisteredUsers } from "../../services/storage"

export function Header({
  page,
  cartCount,
  currentPackageName,
  go,
  onGoToCart,
  onResetSearch,
  onOpenLogin,
  currentUser,
  onLogout,
  favoritesCount = 0,
  onOpenProfile,
}: {
  page: Page
  cartCount: number
  favoritesCount?: number
  currentPackageName?: string
  go: (page: Page) => void
  onGoToCart?: () => void
  onResetSearch?: () => void
  onOpenLogin: () => void
  currentUser: { name: string; email: string; role?: string } | null
  onLogout: () => void
  onOpenProfile?: () => void
}) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Extract only the first name and capitalize nicely
  const firstName = useMemo(() => {
    if (!currentUser?.name) return "Usuario"
    const raw = currentUser.name.trim().split(/\s+/)[0]
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase()
  }, [currentUser])

  const avatarInitial = useMemo(() => {
    return firstName.charAt(0).toUpperCase()
  }, [firstName])

  // Close user dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!userMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [userMenuOpen])

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <nav className="header-inner" aria-label="Navegación principal">
          <button
            className="wordmark"
            onClick={() => go("inicio")}
            aria-label="Ir a inicio - Travel Innovation"
          >
            <img
              src={logoBadge}
              alt="Logo Travel Innovation"
              className="wordmark__logo"
              width="38"
              height="38"
            />
            <span>Travel Innovation</span>
          </button>
          <div className="main-links">
            <button
              aria-current={page === "inicio" ? "page" : undefined}
              onClick={() => go("inicio")}
            >
              Inicio
            </button>
            <button
              aria-current={page.startsWith("catalogo") ? "page" : undefined}
              onClick={() => {
                onResetSearch?.()
                go("catalogo")
              }}
            >
              Paquetes
            </button>
            <button
              aria-current={page === "politicas" ? "page" : undefined}
              onClick={() => go("politicas")}
            >
              Políticas
            </button>
            <button
              aria-current={page === "soporte" ? "page" : undefined}
              onClick={() => go("soporte")}
            >
              Soporte
            </button>
          </div>
          <div className="header-actions">
            {currentUser ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button
                  type="button"
                  className="user-menu-trigger"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  aria-label={`Menú de usuario de ${firstName}`}
                >
                  <span>{firstName}</span>
                  <span
                    className={`user-menu-caret ${userMenuOpen ? "open" : ""}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="user-dropdown-menu" role="menu">
                    <div className="user-dropdown-header">
                      <div className="user-dropdown-avatar" aria-hidden="true">
                        {avatarInitial}
                      </div>
                      <div className="user-dropdown-info">
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <strong>Hola {firstName}</strong>
                          {currentUser.role && (
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 800,
                                background:
                                  currentUser.role === "ADMINISTRADOR"
                                    ? "#dc2626"
                                    : currentUser.role === "AGENTE_VENTAS"
                                    ? "#0284c7"
                                    : "#059669",
                                color: "#ffffff",
                                padding: "1px 6px",
                                borderRadius: "4px",
                                textTransform: "uppercase",
                                letterSpacing: "0.4px",
                              }}
                            >
                              {currentUser.role}
                            </span>
                          )}
                        </div>
                        <small title={currentUser.email}>{currentUser.email}</small>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        if (onOpenProfile) onOpenProfile()
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>Perfil</span>
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        go("reservas")
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      <span>Mis compras</span>
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        go("tickets")
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
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
                      <span>Mis tickets</span>
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        go("favoritos")
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <span>Mis favoritos</span>
                        {favoritesCount > 0 && (
                          <span
                            style={{
                              background: "rgba(230, 57, 70, 0.12)",
                              color: "var(--crimson)",
                              fontSize: "11px",
                              fontWeight: 700,
                              padding: "1px 7px",
                              borderRadius: "10px",
                              marginLeft: "8px",
                            }}
                          >
                            {favoritesCount}
                          </span>
                        )}
                      </span>
                    </button>
                    <hr className="dropdown-divider" />
                    <button
                      type="button"
                      className="dropdown-item dropdown-item--danger"
                      role="menuitem"
                      onClick={() => {
                        setUserMenuOpen(false)
                        onLogout()
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      <span>Salir</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button kind="secondary" onClick={onOpenLogin}>
                Inicia sesión
              </Button>
            )}

            <button
              className="cart-link"
              onClick={onGoToCart ? onGoToCart : () => go("carrito")}
              aria-label={`Carrito de compras${cartCount > 0 ? ` (${cartCount} productos)` : ""}`}
              title="Carrito de compras"
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
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1.5" />
                <circle cx="19" cy="21" r="1.5" />
                <path d="M2.5 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6l1.8-8.2H7" />
              </svg>
              {cartCount > 0 && (
                <span className="badge" aria-label={`${cartCount} paquetes`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
      {/* Espacio reservado bajo la cabecera (filo blanco entre la barra y el contenido) */}
      <div className="header-spacer" aria-hidden="true" />
    </>
  )
}


