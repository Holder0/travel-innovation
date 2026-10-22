import { useState } from "react"
import type { Page, PackageItem } from "../types"
import { Button, SelectField } from "../components/common"

export function Detail({
  pkg = packages[4],
  go,
  onBack,
  addToCart,
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

  const total = people * pkg.price
  const add = () => {
    addToCart({
      pkg,
      date: selectedDate,
      people,
      total,
    })
    setToast(true)
  }
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
        <section className="booking-panel">
          <span className="eyebrow">{pkg.region}</span>
          <h1>{pkg.name}</h1>
          <p>{pkg.days} · 📍 {pkg.city} ({pkg.province})</p>
          <p className="price">
            <strong>${pkg.price}</strong> por persona
          </p>

          {pkg.availableDates && pkg.availableDates.length > 1 ? (
            <SelectField
              label="Intervalos de fechas disponibles"
              value={selectedDate}
              onChange={setSelectedDate}
              help="Elige tus fechas."
            >
              {[...pkg.availableDates]
                .sort((a, b) => a.localeCompare(b, "es"))
                .map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
            </SelectField>
          ) : (
            <div className="field">
              <span className="field__label">Fecha de salida</span>
              <div className="package-specific-date">
                <span className="date-icon" aria-hidden="true">📅</span>
                <div className="date-info">
                  <strong>{pkg.datesText}</strong>
                  <span className="date-badge">Fecha específica confirmada</span>
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
              >
                −
              </button>
              <strong aria-live="polite">{people}</strong>
              <button
                aria-label="Agregar una persona"
                onClick={() => setPeople(Math.min(20, people + 1))}
                disabled={people >= 20}
              >
                +
              </button>
            </div>
            {people >= 20 && (
              <div
                className="inline-alert"
                style={{ marginTop: "12px", padding: "12px 14px" }}
              >
                <strong>⚠️ Límite de 20 personas por paquete</strong>
                <span style={{ fontSize: "13.5px", lineHeight: 1.45 }}>
                  Este paquete está limitado a un máximo de 20 personas por reserva web. Si necesitas un paquete para un grupo mayor o evento corporativo, por favor contáctanos al teléfono <strong>02 2456456</strong> o al correo <strong>travelinnovation.tamc@gmail.com</strong>.
                </span>
              </div>
            )}
          </div>
          <div className="total-row">
            <span>Total estimado</span>
            <strong>${total}</strong>
          </div>
          <Button kind="primary" onClick={add}>
            Agregar al carrito
          </Button>
        </section>
      </div>
      <div className="section detail-sections">
        <details open>
          <summary>
            <span>Itinerario por día</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <h3>Día 1 · Llegada y bienvenida</h3>
            <p>
              Encuentro, traslado y primer recorrido guiado en {pkg.city}.
            </p>
            <h3>Día 2 · Actividades destacadas</h3>
            <p>Recorrido principal y tiempo libre para explorar.</p>
            <h3>Día 3 · Retorno</h3>
            <p>Desayuno y retorno al punto de origen.</p>
          </div>
        </details>
        <details>
          <summary>
            <span>Incluye / No incluye</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body two-col">
            <div>
              <h3>Incluye</h3>
              <p>✓ Transporte, alojamiento, desayunos y guía.</p>
            </div>
            <div>
              <h3>No incluye</h3>
              <p>✕ Almuerzos, cenas y gastos personales.</p>
            </div>
          </div>
        </details>
        <details>
          <summary>
            <span>Punto de encuentro y hora</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <p>
              <strong>Terminal turística, Quito · 06:00.</strong> Hay una
              tolerancia exacta de 15 minutos.
            </p>
          </div>
        </details>
        <details>
          <summary>
            <span>Documentos requeridos</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <p>
              Cédula física y original del titular. Para menores, documento de
              identidad y autorización cuando corresponda.
            </p>
          </div>
        </details>
        <details>
          <summary>
            <span>Condiciones resumidas</span>
            <span className="summary-caret" aria-hidden="true">▾</span>
          </summary>
          <div className="accordion-body">
            <p>La salida requiere un mínimo de 15 personas.</p>
            <button className="text-link" onClick={() => go("politicas")}>
              Ver política completa de cancelación
            </button>
          </div>
        </details>
      </div>
      {toast && (
        <div className="toast" role="status">
          <span>✓ {pkg.name} agregado al carrito</span>
          <button onClick={() => go("carrito")}>Ver carrito</button>
          <button onClick={() => setToast(false)}>Cerrar</button>
        </div>
      )}
    </>
  )
}

