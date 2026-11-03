import { useState, useEffect, useMemo } from "react"
import type { Page, PackageItem, CartItem } from "../types"
import {
  Button,
  SelectField,
  CategorySvg,
  RatingStars,
  StarIcon,
  PinIcon,
  CalendarIcon,
  BreakfastIcon,
  LunchIcon,
  DinnerIcon,
  VerifiedCheckIcon,
  LightningIcon,
  AlertTriangleIcon,
  CheckIcon,
  CloseXIcon,
} from "../components/common"

import { packages } from "../data/packagesData"
import { computePackageDetailedMeta } from "../utils/packageDetailsHelper"


export function Detail({
  pkg = packages[4],
  go,
  onBack,
  addToCart,
  cartItems = [],
  currentUser,
  isFavorite = false,
  onToggleFavorite,
}: {
  pkg?: PackageItem
  go: (page: Page) => void
  onBack?: () => void
  addToCart: (item: {
    pkg: PackageItem
    date: string
    people: number
    total: number
  }) => void
  cartItems?: CartItem[]
  currentUser?: { name: string; email: string } | null
  isFavorite?: boolean
  onToggleFavorite?: (pkgId: string) => void
}) {
  const [people, setPeople] = useState(1)
  const [toast, setToast] = useState(false)
  const [selectedDate, setSelectedDate] = useState(
    pkg.availableDates && pkg.availableDates.length > 0
      ? pkg.availableDates[0]
      : pkg.datesText,
  )

  useEffect(() => {
    setPeople(1)
    setSelectedDate(
      pkg.availableDates && pkg.availableDates.length > 0
        ? pkg.availableDates[0]
        : pkg.datesText,
    )
  }, [pkg])

  const allImages = useMemo(
    () => [pkg.image, ...(pkg.secondaryImages || [])],
    [pkg]
  )
  const [activeImage, setActiveImage] = useState(pkg.image)

  useEffect(() => {
    setActiveImage(pkg.image)
  }, [pkg])

  const currentSlots = pkg.dateSlotsMap?.[selectedDate] ?? pkg.availableSlots ?? 20
  const maxGroupLimit = pkg.maxGroupSize ?? (pkg.categorySlug === "luna-de-miel" ? 2 : 10)
  const maxAllowedPeople = Math.max(1, Math.min(currentSlots, maxGroupLimit))
  const isSoldOut = currentSlots <= 0

  useEffect(() => {
    if (people > maxAllowedPeople) {
      setPeople(maxAllowedPeople)
    }
  }, [selectedDate, maxAllowedPeople])

  const total = people * pkg.price
  const add = () => {
    if (isSoldOut) return
    addToCart({
      pkg,
      date: selectedDate,
      people,
      total,
    })
    setPeople(1)
    setToast(true)
  }

  const activeReviewsList = useMemo(() => {
    if (pkg.reviews && pkg.reviews.length > 0) return pkg.reviews
    return [
      {
        id: "def-rev-1",
        userName: "Carlos Andrés Mendoza",
        rating: 5,
        title: "¡Una experiencia absolutamente recomendada!",
        comment: `El paquete a ${pkg.city} superó todas mis expectativas. La puntualidad del guía, los paisajes y los traslados fueron impecables.`,
        date: "24 oct 2026",
      },
      {
        id: "def-rev-2",
        userName: "María Belén Salazar",
        rating: 5,
        title: "Paisajes inolvidables y excelente servicio",
        comment: "Todo el cronograma se cumplió a cabalidad. La atención de la agencia fue de primera categoría desde el primer contacto.",
        date: "19 oct 2026",
      },
    ]
  }, [pkg.reviews, pkg.city])

  const starBreakdown = useMemo(() => {
    const total = activeReviewsList.length || 1
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    activeReviewsList.forEach((r) => {
      const s = Math.max(1, Math.min(5, Math.round(r.rating)))
      counts[s] = (counts[s] || 0) + 1
    })
    return {
      5: Math.round((counts[5] / total) * 100),
      4: Math.round((counts[4] / total) * 100),
      3: Math.round((counts[3] / total) * 100),
      2: Math.round((counts[2] / total) * 100),
      1: Math.round((counts[1] / total) * 100),
      average: Number((activeReviewsList.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1)),
    }
  }, [activeReviewsList])
  const resolvedItinerary = useMemo(() => {
    if (pkg.itinerary && pkg.itinerary.length > 0) {
      return pkg.itinerary
    }
    const matchDays = pkg.days.match(/(\d+)\s*d/i)
    const totalDays = matchDays ? Math.max(1, parseInt(matchDays[1], 10)) : 3

    const list: typeof pkg.itinerary = []
    for (let d = 1; d <= totalDays; d++) {
      if (d === 1) {
        list.push({
          day: 1,
          title: `Llegada, recepción y recorrido inicial en ${pkg.city}`,
          description: `Punto de encuentro y bienvenida con el guía certificado. Traslado al hospedaje seleccionado, charla de orientación sobre ${pkg.province} y primer recorrido panorámico por los atractivos principales de la zona.`,
          meals: { breakfast: false, lunch: true, dinner: true },
        })
      } else if (d === totalDays) {
        list.push({
          day: d,
          title: `Desayuno tradicional, tiempo libre y retorno`,
          description: `Desayuno completo con productos típicos locales. Tiempo libre para compras de artesanías o fotografías finales, y posterior traslado asistido para el retorno al punto de origen.`,
          meals: { breakfast: true, lunch: false, dinner: false },
        })
      } else {
        list.push({
          day: d,
          title: `Día ${d}: Expedición principal y vivencia temática en ${pkg.city}`,
          description: `Jornada completa dedicada al programa de ${pkg.category || "turismo"} en ${pkg.name}. Visita guiada a reservas naturales, parajes emblemáticos y actividades programadas con equipamiento y asistencia profesional.`,
          meals: { breakfast: true, lunch: true, dinner: true },
        })
      }
    }
    return list
  }, [pkg])

  const detailsMeta = useMemo(() => {
    return computePackageDetailedMeta(pkg, resolvedItinerary)
  }, [pkg, resolvedItinerary])

  return (
    <>
      <div className="section detail-back-nav">
        <button
          type="button"
          className="detail-back-button"
          onClick={onBack ? onBack : () => go("catalogo")}
          aria-label="Volver a la ventana previa"
        >
          <span aria-hidden="true">←</span> Volver
        </button>
      </div>
      <div className="section detail-layout">
        <section className="gallery" aria-label={`Galería de ${pkg.name}`}>
          <div className="gallery__main">
            <img
              src={activeImage || pkg.image}
              alt={`Fotografía principal de ${pkg.name}`}
              className="gallery__main-img"
            />
          </div>
          <div className="gallery__thumbs">
            {allImages.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                className={`gallery__thumb-btn ${
                  activeImage === imgUrl ? "active" : ""
                }`}
                onClick={() => setActiveImage(imgUrl)}
                aria-label={`Ver imagen ${idx + 1} de ${pkg.name}`}
              >
                <img
                  src={imgUrl}
                  alt={`Fotografía ${idx + 1} de ${pkg.name}`}
                  className="gallery__thumb-img"
                />
              </button>
            ))}
          </div>
        </section>
        <section className="booking-panel" style={{ position: "relative" }}>
          {currentUser && (
            <button
              type="button"
              className={`favorite-heart-btn ${isFavorite ? "favorite-heart-btn--active" : ""}`}
              onClick={() => onToggleFavorite && onToggleFavorite(pkg.id)}
              aria-label={
                isFavorite
                  ? "Quitar de mis favoritos"
                  : "Guardar en mis favoritos"
              }
              title={
                isFavorite
                  ? "Quitar de favoritos"
                  : "Guardar en favoritos"
              }
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: isFavorite
                  ? "1.5px solid var(--crimson)"
                  : "1px solid rgba(27, 73, 101, 0.22)",
                background: isFavorite ? "#fff5f5" : "#ffffff",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(15, 31, 44, 0.08)",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 2,
              }}
            >
              {isFavorite ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="var(--crimson)"
                  stroke="var(--crimson)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5a6e7f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              )}
            </button>
          )}

          {pkg.category && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#e8f1f5",
                color: "var(--pacific)",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "12.5px",
                fontWeight: 700,
                marginBottom: "8px",
                width: "fit-content",
              }}
            >
              <CategorySvg icon={pkg.categoryIcon || "compass"} size={14} color="var(--pacific)" />
              <span>{pkg.category}</span>
            </div>
          )}

          <span className="eyebrow">{pkg.region}</span>
          <h1>{pkg.name}</h1>

          {/* Calificación y Estrellas en Cabecera */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "4px 0 10px",
            }}
          >
            <RatingStars rating={pkg.rating || 4.9} size={18} />
            <strong style={{ fontSize: "14px", color: "var(--abyss)" }}>
              {(pkg.rating || 4.9).toFixed(1)}
            </strong>
            <span style={{ fontSize: "13px", color: "#64748b" }}>
              ({pkg.reviewsCount || 12} opiniones verificadas)
            </span>
          </div>

          <p style={{ display: "flex", alignItems: "center", gap: "6px", margin: "0 0 10px", fontSize: "14.5px" }}>
            <span>{pkg.days}</span> · <PinIcon size={16} color="var(--pacific)" /> <strong>{pkg.city}</strong> ({pkg.province})
          </p>
          <p className="price">
            <strong>${pkg.price}</strong> por persona
          </p>

          {/* Indicador de Cupos Disponibles de la fecha seleccionada */}
          <div
            className={`available-slots-badge ${
              isSoldOut || currentSlots <= 4 ? "available-slots-badge--urgent" : ""
            }`}
            style={{ marginBottom: "16px" }}
          >
            <LightningIcon size={16} color={isSoldOut || currentSlots <= 4 ? "#b91c1c" : "#92400e"} />
            <span>
              {isSoldOut
                ? "¡Cupos agotados para esta fecha de salida!"
                : currentSlots <= 4
                  ? `¡Solo quedan ${currentSlots} cupos disponibles para esta salida!`
                  : `${currentSlots} cupos disponibles (capacidad máx. del grupo: ${pkg.totalCapacity ?? 20} personas)`}
            </span>
          </div>

          {pkg.availableDates && pkg.availableDates.length > 1 ? (
            <SelectField
              label="Intervalos de fechas disponibles"
              value={selectedDate}
              onChange={setSelectedDate}
              help={
                pkg.name.toLowerCase().includes("ballena")
                  ? "Temporada oficial de avistamiento: Julio a Septiembre."
                  : pkg.category?.toLowerCase().includes("trekking") || pkg.name.toLowerCase().includes("volcán")
                    ? "Ventanas de expedición programadas en fines de semana."
                    : "Salidas programadas con cupos confirmados."
              }
            >
              {pkg.availableDates.map((date) => {
                const dateSlots = pkg.dateSlotsMap?.[date]
                const suffix =
                  dateSlots !== undefined
                    ? dateSlots <= 0
                      ? " · [AGOTADO]"
                      : dateSlots <= 4
                        ? ` · (¡Solo ${dateSlots} cupos!)`
                        : ` · (${dateSlots} cupos)`
                    : ""
                return (
                  <option key={date} value={date} disabled={dateSlots === 0}>
                    {date}{suffix}
                  </option>
                )
              })}
            </SelectField>
          ) : (
            <div className="field">
              <span className="field__label">Fecha de salida</span>
              <div className="package-specific-date">
                <span className="date-icon" aria-hidden="true">
                  <CalendarIcon size={18} color="var(--abyss)" />
                </span>
                <div className="date-info">
                  <strong>{pkg.datesText || (pkg.availableDates && pkg.availableDates[0])}</strong>
                  <span className="date-badge">
                    {pkg.name.toLowerCase().includes("diablada") ||
                    pkg.name.toLowerCase().includes("navidad") ||
                    pkg.name.toLowerCase().includes("inti raymi") ||
                    pkg.name.toLowerCase().includes("solsticio")
                      ? "Salida anual exclusiva confirmada"
                      : "Salida única programada"}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="field">
            <span className="field__label">Personas</span>
            <div className="counter">
              <button
                aria-label="Quitar una persona"
                onClick={() => setPeople(Math.max(1, people - 1))}
                disabled={people <= 1 || isSoldOut}
              >
                −
              </button>
              <strong aria-live="polite">{isSoldOut ? 0 : people}</strong>
              <button
                aria-label="Agregar una persona"
                onClick={() => setPeople(Math.min(maxAllowedPeople, people + 1))}
                disabled={people >= maxAllowedPeople || isSoldOut}
              >
                +
              </button>
            </div>
            {people >= maxAllowedPeople && !isSoldOut && (
              <div
                className="inline-alert"
                style={{ marginTop: "12px", padding: "12px 14px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <AlertTriangleIcon size={18} color="#b42318" />
                  <strong>Límite de {maxAllowedPeople} personas alcanzado</strong>
                </div>
                <span style={{ fontSize: "13.5px", lineHeight: 1.45 }}>
                  {people >= currentSlots
                    ? `Solo quedan ${currentSlots} cupos disponibles para esta salida (capacidad máxima total del grupo: ${pkg.totalCapacity ?? 20} personas).`
                    : `Este paquete permite un máximo de ${maxGroupLimit} personas por reserva individual en línea. Para grupos mayores o eventos corporativos, por favor contáctanos al teléfono 02 2456456 o al correo travelinnovation.tamc@gmail.com.`}
                </span>
              </div>
            )}
            {isSoldOut && (
              <div
                className="inline-alert"
                style={{ marginTop: "12px", padding: "12px 14px", borderColor: "#fca5a5", background: "#fef2f2" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <AlertTriangleIcon size={18} color="#b42318" />
                  <strong style={{ color: "#b91c1c" }}>Fecha sin cupos disponibles</strong>
                </div>
                <span style={{ fontSize: "13.5px", lineHeight: 1.45, color: "#991b1b" }}>
                  Esta salida se encuentra completamente agotada. Por favor selecciona otro intervalo de fechas disponible en el menú superior.
                </span>
              </div>
            )}
          </div>
          <div className="total-row">
            <span>Total estimado</span>
            <strong>${total}</strong>
          </div>
          <Button kind="primary" onClick={add} disabled={isSoldOut}>
            {isSoldOut ? "Fecha agotada" : "Agregar al carrito"}
          </Button>
        </section>
      </div>
      <div className="section detail-sections">
        <div className="detail-card">
          <div className="detail-card-header">
            <span>Itinerario detallado día a día</span>
          </div>
          <div className="accordion-body">
            <div className="itinerary-timeline-clean">
              {resolvedItinerary.map((day, idx) => (
                <div key={day.day} className="itinerary-day-seamless">
                  <div className="itinerary-day-header">
                    <span className="itinerary-day-badge">Día {day.day}</span>
                    <h3 className="itinerary-day-title">{day.title}</h3>
                  </div>
                  <p className="itinerary-day-description">{day.description}</p>
                  {idx < resolvedItinerary.length - 1 && <hr className="itinerary-day-separator" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-header">
            <span>Incluye / No incluye</span>
          </div>
          <div className="accordion-body two-col">
            <div>
              <h3>Incluye</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                {detailsMeta.includes.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", lineHeight: "1.4" }}>
                    <CheckIcon size={14} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: "12px" }}>
              <h3>No incluye</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                {detailsMeta.notIncludes.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", lineHeight: "1.4" }}>
                    <CloseXIcon size={14} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-header">
            <span>Punto de encuentro y hora</span>
          </div>
          <div className="accordion-body">
            <p style={{ margin: "0 0 6px", fontSize: "12.5px", lineHeight: "1.4" }}>
              <strong>Lugar:</strong> {detailsMeta.meetingPoint}
            </p>
            <p style={{ margin: "0 0 6px", fontSize: "12.5px", lineHeight: "1.4" }}>
              <strong>Hora de salida:</strong> {detailsMeta.meetingTime}
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--abyss)", lineHeight: "1.4" }}>
              <em>{detailsMeta.meetingNotes}</em>
            </p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-header">
            <span>Documentos requeridos</span>
          </div>
          <div className="accordion-body">
            <ul style={{ paddingLeft: "16px", margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", lineHeight: "1.4" }}>
              {detailsMeta.requiredDocuments.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-header">
            <span>Condiciones resumidas</span>
          </div>
          <div className="accordion-body">
            <ul style={{ paddingLeft: "16px", margin: "0 0 10px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", lineHeight: "1.4" }}>
              {detailsMeta.conditions.map((cond, idx) => (
                <li key={idx}>{cond}</li>
              ))}
            </ul>
            <button className="text-link" onClick={() => go("politicas")}>
              Ver política completa de cancelación
            </button>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE RESEÑAS Y CALIFICACIONES (SOLO VISUALIZACIÓN CON ESTRELLAS SVG) */}
      <section className="section reviews-section" aria-label="Calificación y opiniones de viajeros">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Opiniones de la Comunidad</span>
            <h2>Calificación y Reseñas de Viajeros</h2>
          </div>
        </div>

        <div className="reviews-grid-layout">
          {/* Tarjeta de Calificación Global Dinámica */}
          <div className="rating-score-card">
            <div className="rating-score-huge">{starBreakdown.average}</div>
            <div className="rating-score-stars">
              <RatingStars rating={starBreakdown.average} size={24} />
            </div>
            <div className="rating-score-count">
              Basado en {activeReviewsList.length} {activeReviewsList.length === 1 ? "experiencia verificada" : "experiencias verificadas"}
            </div>
            <div className="rating-breakdown">
              <div className="rating-breakdown-row">
                <span style={{ width: "65px" }}>5 estrellas</span>
                <div className="rating-breakdown-bar-bg">
                  <div className="rating-breakdown-bar-fill" style={{ width: `${starBreakdown[5]}%` }} />
                </div>
                <span style={{ width: "35px", textAlign: "right" }}>{starBreakdown[5]}%</span>
              </div>
              <div className="rating-breakdown-row">
                <span style={{ width: "65px" }}>4 estrellas</span>
                <div className="rating-breakdown-bar-bg">
                  <div className="rating-breakdown-bar-fill" style={{ width: `${starBreakdown[4]}%` }} />
                </div>
                <span style={{ width: "35px", textAlign: "right" }}>{starBreakdown[4]}%</span>
              </div>
              <div className="rating-breakdown-row">
                <span style={{ width: "65px" }}>3 estrellas</span>
                <div className="rating-breakdown-bar-bg">
                  <div className="rating-breakdown-bar-fill" style={{ width: `${starBreakdown[3]}%` }} />
                </div>
                <span style={{ width: "35px", textAlign: "right" }}>{starBreakdown[3]}%</span>
              </div>
              <div className="rating-breakdown-row">
                <span style={{ width: "65px" }}>2 estrellas</span>
                <div className="rating-breakdown-bar-bg">
                  <div className="rating-breakdown-bar-fill" style={{ width: `${starBreakdown[2]}%` }} />
                </div>
                <span style={{ width: "35px", textAlign: "right" }}>{starBreakdown[2]}%</span>
              </div>
              <div className="rating-breakdown-row">
                <span style={{ width: "65px" }}>1 estrella</span>
                <div className="rating-breakdown-bar-bg">
                  <div className="rating-breakdown-bar-fill" style={{ width: `${starBreakdown[1]}%` }} />
                </div>
                <span style={{ width: "35px", textAlign: "right" }}>{starBreakdown[1]}%</span>
              </div>
            </div>
          </div>

          {/* Listado de Opiniones de Clientes */}
          <div className="reviews-list">
            {activeReviewsList.map((rev) => (
              <article key={rev.id} className="review-card">
                <div className="review-card-header">
                  <div className="review-card-user">
                    <span>{rev.userName}</span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        color: "#059669",
                        fontWeight: 600,
                      }}
                    >
                      <VerifiedCheckIcon size={14} /> Viajero verificado
                    </span>
                  </div>
                  <span className="review-card-date">{rev.date}</span>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <RatingStars rating={rev.rating} size={15} />
                </div>
                <h4 className="review-card-title">{rev.title}</h4>
                <p className="review-card-comment">"{rev.comment}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {toast && (
        <div
          className="center-popup-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-popup-title"
          onClick={() => setToast(false)}
        >
          <div
            className="center-popup-card"
            onClick={(e) => e.stopPropagation()}
            role="status"
          >
            <button
              type="button"
              className="center-popup-close"
              onClick={() => setToast(false)}
              aria-label="Cerrar notificación"
            >
              <CloseXIcon size={18} />
            </button>
            <div className="center-popup-icon" aria-hidden="true">
              <CheckIcon size={32} color="var(--pacific)" />
            </div>

            <h2 id="cart-popup-title" className="center-popup-title">
              ¡Producto agregado con éxito!
            </h2>
            <p className="center-popup-subtitle">
              Has agregado <strong>{pkg.name}</strong> para{" "}
              <strong>
                {people} {people === 1 ? "persona" : "personas"}
              </strong>{" "}
              a tu carrito de compras.
            </p>
            <div className="center-popup-details">
              <div className="center-popup-row">
                <span>Fecha seleccionada:</span>
                <strong>{selectedDate}</strong>
              </div>
              <div className="center-popup-row">
                <span>Total estimado:</span>
                <strong className="center-popup-price">${total}</strong>
              </div>
            </div>
            <div className="center-popup-actions">
              <Button kind="primary" onClick={() => go("carrito")}>
                Ir al carrito de compras
              </Button>
              <Button kind="secondary" onClick={() => setToast(false)}>
                Seguir explorando
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Booking Bar (Mobile Only) */}
      <div className="sticky-booking-bar" role="region" aria-label="Acceso rápido a reserva">
        <div className="sticky-booking-bar__info">
          <div className="sticky-booking-bar__price">
            <strong>${pkg.price}</strong> <small>/ persona</small>
          </div>
          <div className="sticky-booking-bar__date">
            {selectedDate ? (
              <span>Salida: {selectedDate}</span>
            ) : (
              <span>Cupos disponibles: {currentSlots}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          className="button button--primary sticky-booking-bar__btn"
          disabled={isSoldOut}
          onClick={() => {
            if (isSoldOut) return
            const panel = document.querySelector(".booking-panel")
            if (panel) {
              panel.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          }}
        >
          {isSoldOut ? "Agotado" : "Reservar salida"}
        </button>
      </div>
    </>
  )
}

