import type { PackageItem, Page } from "../../types"
import { Button } from "../common/Button"
import { Placeholder } from "../common/Placeholder"
import { StarIcon, PinIcon, CalendarIcon, CategorySvg } from "../common/SvgIcons"

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

  const ratingValue = item.rating || 4.9
  const reviewsCount = item.reviewsCount || 12

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
      <div className="package-card__image-container" style={{ position: "relative" }}>
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
        {item.category && (
          <div
            className="package-card__category-badge"
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "rgba(15, 31, 44, 0.85)",
              color: "#ffffff",
              backdropFilter: "blur(6px)",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
              zIndex: 1,
            }}
          >
            <CategorySvg icon={item.categoryIcon || "compass"} size={14} color="#fcd34d" />
            <span>{item.category}</span>
          </div>
        )}
      </div>
      <div className="package-card__body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--pacific)" }}>
            {item.region}
          </span>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 700, color: "var(--abyss)" }}>
            <StarIcon size={15} fillColor="#f59e0b" />
            <span>{ratingValue.toFixed(1)}</span>
            <span style={{ fontSize: "11.5px", color: "#64748b", fontWeight: 500 }}>({reviewsCount})</span>
          </div>
        </div>

        <h3 style={{ fontWeight: 700, margin: "0 0 6px", fontSize: "17px", lineHeight: 1.3 }}>
          <strong>{item.name}</strong>
        </h3>
        <p style={{ fontSize: "13.5px", color: "var(--pacific)", fontWeight: 600, margin: "0 0 6px", display: "flex", alignItems: "center", gap: "5px" }}>
          <PinIcon size={15} color="var(--pacific)" />
          <span>{item.city} ({item.province})</span>
        </p>
        <p style={{ fontSize: "13px", color: "var(--abyss)", background: "var(--sand)", padding: "4px 8px", borderRadius: "6px", border: "1px solid var(--pacific)", margin: "4px 0 10px", display: "inline-flex", alignItems: "center", gap: "6px", width: "fit-content" }}>
          <CalendarIcon size={14} color="var(--abyss)" /> <strong>{item.datesText}</strong>
        </p>
        <p style={{ margin: "0 0 6px", fontSize: "13.5px", color: "#475569" }}>{item.days}</p>
        <p style={{ margin: "0 0 14px", fontSize: "15px" }}>
          <strong>Desde ${item.price}</strong> por persona
        </p>
        <Button
          kind="secondary"
          onClick={(e) => {
            e?.stopPropagation()
            handleClick()
          }}
        >
          Ver paquete
        </Button>
      </div>
    </article>
  )
}



