import type { Page } from "../../types"
import logoBadge from "../../assets/logo-badge.png"

export function Footer({ go }: { go: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <img
            src={logoBadge}
            alt="Logo Travel Innovation"
            width="32"
            height="32"
            style={{ borderRadius: "50%", flexShrink: 0 }}
          />
          <strong style={{ fontSize: "18px" }}>Travel Innovation</strong>
        </div>
        <p>Viajes nacionales pensados para descubrir Ecuador.</p>
      </div>
      <div>
        <strong>Contacto</strong>
        <p>Quito, Ecuador · 02 2456456</p>
        <p>travelinnovation.tamc@gmail.com</p>
      </div>
      <div className="footer-links">
        <strong>Ayuda</strong>
        <button onClick={() => go("politicas")}>Políticas de reserva</button>
        <button onClick={() => go("soporte")}>Soporte por ticket</button>
      </div>
    </footer>
  )
}


