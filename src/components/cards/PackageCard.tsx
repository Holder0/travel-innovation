import type { PackageItem, Page } from "../../types"
import { Button } from "../common/Button"
import { Placeholder } from "../common/Placeholder"

export function PackageCard({
  item,
  go,
  onSelect,
}: {
  item: PackageItem
  go: (page: Page) => void
  onSelect?: (item: PackageItem) => void
}) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(item)
    } else {
      go("detalle")
    }
  }
  return (
    <article
      className="package-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-label={`Ver detalles del paquete ${item.name}`}
    >
      <div className="package-card__image-container">
        {item.image ? (
          <img
            src={item.image}
            alt={`Fotografía de ${item.name}`}
            className="package-card__img"
            loading="lazy"
          />
        ) : (
          <Placeholder label={`Imagen de ${item.name}`} />
        )}
      </div>
      <div className="package-card__body">
        <h3 style={{ fontWeight: 700, margin: "0 0 6px" }}>
          <strong>{item.name}</strong>
        </h3>
        <p style={{ fontSize: "14px", color: "var(--pacific)", fontWeight: 600, margin: "0 0 6px" }}>
          📍 {item.city} ({item.province})
        </p>
        <p style={{ fontSize: "13px", color: "var(--abyss)", background: "var(--sand)", padding: "4px 8px", borderRadius: "6px", border: "1px solid var(--pacific)", margin: "4px 0 10px", display: "inline-flex", alignItems: "center", gap: "6px", width: "fit-content" }}>
          <span aria-hidden="true">📅</span> <strong>{item.datesText}</strong>
        </p>
        <p style={{ margin: "0 0 6px" }}>{item.days}</p>
        <p style={{ margin: "0 0 14px" }}>
          <strong>Desde ${item.price}</strong> por persona
        </p>
        <Button
          kind="secondary"
          onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}
        >
          Ver paquete
        </Button>
      </div>
    </article>
  )
}


