import React, { useState, useEffect } from "react"
import { Button } from "../common/Button"
import { Field } from "../common/Field"
import { StarIcon, CloseXIcon, CheckIcon, AlertTriangleIcon } from "../common/SvgIcons"

interface ReviewModalProps {
  isOpen: boolean
  onClose: () => void
  packageInfo: {
    id: string
    name: string
    city?: string
    province?: string
  } | null
  currentUser?: { name: string; email: string } | null
  onSubmitReview: (reviewData: {
    packageId: string
    packageName: string
    rating: number
    title: string
    comment: string
    userName: string
  }) => Promise<boolean>
}

const RATING_DESCRIPTIONS: Record<number, string> = {
  1: "1 de 5 · Experiencia insatisfactoria",
  2: "2 de 5 · Regular · Varios aspectos a mejorar",
  3: "3 de 5 · Bueno · Cumplió con el itinerario",
  4: "4 de 5 · Muy bueno · Gran experiencia y atención",
  5: "5 de 5 · Excelente · ¡Superó todas mis expectativas!",
}

export function ReviewModal({
  isOpen,
  onClose,
  packageInfo,
  currentUser,
  onSubmitReview,
}: ReviewModalProps) {
  const [rating, setRating] = useState<number>(5)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [userName, setUserName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setRating(5)
      setHoverRating(0)
      setTitle("")
      setComment("")
      setUserName(currentUser?.name || "Viajero Verificado")
      setErrorMsg("")
      setIsSuccess(false)
      setIsSubmitting(false)
    }
  }, [isOpen, currentUser])

  if (!isOpen || !packageInfo) return null

  const activeDisplayRating = hoverRating > 0 ? hoverRating : rating

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) {
      setErrorMsg("Por favor escribe tu opinión o comentario sobre el paquete.")
      return
    }
    if (comment.trim().length < 10) {
      setErrorMsg("El comentario debe tener al menos 10 caracteres.")
      return
    }

    setErrorMsg("")
    setIsSubmitting(true)

    try {
      const ok = await onSubmitReview({
        packageId: packageInfo.id,
        packageName: packageInfo.name,
        rating,
        title: title.trim() || "Experiencia de viaje",
        comment: comment.trim(),
        userName: userName.trim() || "Viajero Verificado",
      })

      if (ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
        }, 1800)
      } else {
        setErrorMsg("Hubo un problema al publicar la reseña. Inténtalo nuevamente.")
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Error al enviar la reseña.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose()
      }}
    >
      <section
        className="modal auth-modal"
        style={{ width: "min(560px, 95vw)", padding: "26px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--pacific)" }}>
              {packageInfo.city ? `${packageInfo.city} · ` : ""}Valoración de Viajero
            </span>
            <h2 id="review-modal-title" style={{ fontSize: "20px", margin: "4px 0 0", color: "var(--abyss)" }}>
              Dejar una reseña
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: "13.5px", color: "#5a6e7f" }}>
              {packageInfo.name}
            </p>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Cerrar modal de reseña"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--abyss)",
            }}
          >
            <CloseXIcon size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div
            style={{
              padding: "24px 16px",
              textAlign: "center",
              background: "#ecfdf5",
              borderRadius: "var(--radius)",
              border: "1px solid #10b981",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <CheckIcon size={24} color="#ffffff" />
            </div>
            <h3 style={{ color: "#065f46", fontSize: "17px", margin: "0 0 6px" }}>
              ¡Muchas gracias por tu reseña!
            </h3>
            <p style={{ color: "#047857", fontSize: "13.5px", margin: 0 }}>
              Tu opinión ha sido registrada exitosamente y ya es visible en la sección de opiniones de este paquete.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {errorMsg && (
              <div
                className="inline-alert"
                style={{
                  padding: "10px 14px",
                  borderColor: "#fca5a5",
                  background: "#fef2f2",
                  color: "#991b1b",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <AlertTriangleIcon size={16} color="#b91c1c" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Selector interactivo de estrellas */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "var(--abyss)",
                  marginBottom: "8px",
                }}
              >
                Calificación general *
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  background: "var(--sand)",
                  borderRadius: "var(--radius)",
                  border: "1px solid rgba(27, 73, 101, 0.2)",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }} onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((starVal) => {
                    const isFilled = activeDisplayRating >= starVal
                    return (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setRating(starVal)}
                        onMouseEnter={() => setHoverRating(starVal)}
                        style={{
                          background: "none",
                          border: "none",
                          padding: "4px",
                          cursor: "pointer",
                          transition: "transform 0.15s ease",
                          transform: activeDisplayRating >= starVal ? "scale(1.15)" : "scale(1)",
                        }}
                        aria-label={`Calificar con ${starVal} estrellas`}
                      >
                        <StarIcon
                          filled={isFilled}
                          size={28}
                          fillColor="#f59e0b"
                          emptyColor="#cbd5e1"
                        />
                      </button>
                    )
                  })}
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--pacific)",
                    marginLeft: "auto",
                  }}
                >
                  {RATING_DESCRIPTIONS[activeDisplayRating] || `${rating} estrellas`}
                </span>
              </div>
            </div>

            {/* Nombre del viajero */}
            <Field
              id="review-username"
              label="Nombre que aparecerá en la reseña"
              type="text"
              placeholder="Tu nombre completo"
              value={userName}
              onChange={setUserName}
              required
            />

            {/* Título de la reseña */}
            <Field
              id="review-title"
              label="Título de tu opinión"
              type="text"
              placeholder="p. ej. ¡Una experiencia inolvidable con el guía!"
              value={title}
              onChange={setTitle}
            />

            {/* Comentario detallado */}
            <div>
              <label
                htmlFor="review-comment"
                style={{
                  display: "block",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "var(--abyss)",
                  marginBottom: "6px",
                }}
              >
                Tu comentario o experiencia *
              </label>
              <textarea
                id="review-comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Cuéntanos qué tal estuvo la puntualidad, la guianza, la alimentación, los paisajes y las actividades..."
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--pacific)",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  lineHeight: "1.45",
                  background: "#ffffff",
                  color: "var(--abyss)",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
              <small style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#64748b" }}>
                Mínimo 10 caracteres. Sé honesto y detallado para orientar a futuros viajeros.
              </small>
            </div>

            {/* Botones de acción */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "12px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(27, 73, 101, 0.15)",
              }}
            >
              <Button
                kind="secondary"
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button kind="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Publicando reseña..." : "Publicar reseña"}
              </Button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}

