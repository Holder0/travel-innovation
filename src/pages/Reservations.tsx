import { useState, useRef } from "react"
import type { Page, PurchaseItem, SupportTicket } from "../types"
import { Button, Field, PageTitle } from "../components/common"

export function Reservations({
  go,
  purchases = [],
  currentUser = null,
  supportTickets = [],
  onAttachVoucher,
}: {
  go: (page: Page) => void
  purchases?: PurchaseItem[]
  currentUser?: { name: string; email: string } | null
  supportTickets?: SupportTicket[]
  onAttachVoucher?: (
    purchaseId: string,
    voucherNumber?: string,
    fileName?: string
  ) => void
}) {
  const [activePurchaseId, setActivePurchaseId] = useState<string>(
    purchases[0]?.id || ""
  )
  const [downloadToast, setDownloadToast] = useState(false)
  const [voucherSuccessToast, setVoucherSuccessToast] = useState("")
  const [voucherRefInput, setVoucherRefInput] = useState("")
  const [voucherFileReady, setVoucherFileReady] = useState(false)
  const [uploadedFileName, setUploadedFileName] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  // Reset voucher form when switching purchase
  useEffect(() => {
    setVoucherRefInput("")
    setVoucherFileReady(false)
    setUploadedFileName("")
  }, [activePurchaseId])

  // Keep activePurchaseId updated if purchases list changes
  useEffect(() => {
    if (
      purchases.length > 0 &&
      (!activePurchaseId || !purchases.some((p) => p.id === activePurchaseId))
    ) {
      setActivePurchaseId(purchases[0].id)
    }
  }, [purchases, activePurchaseId])

  const activePurchase =
    purchases.find((p) => p.id === activePurchaseId) || purchases[0]

  const handleConfirmVoucherUpload = () => {
    if (!voucherFileReady || !activePurchase) return
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      const refNum =
        voucherRefInput.trim() ||
        `TR-${Math.floor(10000000 + Math.random() * 90000000)}`
      const fName = uploadedFileName || "comprobante-transferencia.pdf"
      onAttachVoucher?.(activePurchase.id, refNum, fName)
      setVoucherSuccessToast(
        `✓ ¡Comprobante adjuntado con éxito! Tu pedido #${activePurchase.code} ahora tiene el estado: Compra realizada.`
      )
      setVoucherFileReady(false)
      setUploadedFileName("")
      setVoucherRefInput("")
      setTimeout(() => setVoucherSuccessToast(""), 5000)
    }, 600)
  }

  const hasTicketForThisPurchase = supportTickets.find(
    (t) =>
      t.bookingCode &&
      activePurchase?.code &&
      t.bookingCode.trim().toUpperCase() ===
        activePurchase.code.trim().toUpperCase()
  )

  return (
    <>
      <PageTitle
        title="Mis compras"
        subtitle={
          currentUser
            ? `Historial de compras y reservas de ${currentUser.name}`
            : "Consulta el estado y los detalles de tus viajes adquiridos."
        }
      />

      {purchases.length === 0 ? (
        <div className="section">
          <div className="empty-purchases-card">
            <span className="empty-purchases-icon" aria-hidden="true">
              🛍️
            </span>
            <h2>No tienes compras registradas</h2>
            <p style={{ maxWidth: "480px", color: "#5a6e7f" }}>
              {currentUser
                ? `Aún no has realizado ninguna compra con esta cuenta (${currentUser.email}). Explora nuestros paquetes y reserva tu próxima aventura.`
                : "Aún no hay compras registradas en esta sesión. Adquiere un paquete turístico para ver aquí tus reservas confirmadas y detalles de viaje."}
            </p>
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button kind="primary" onClick={() => go("catalogo")}>
                Explorar paquetes
              </Button>
              <Button kind="secondary" onClick={() => go("inicio")}>
                Ir al inicio
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="section reservations-layout">
          <aside className="reservation-list">
            <h2>Mis Compras ({purchases.length})</h2>
            {purchases.map((item) => {
              const isSelected = item.id === (activePurchase?.id || "")
              const pkgTitle = item.packages.map((p) => p.name).join(", ")
              const isSuccess =
                item.status === "Compra realizada" || item.status === "Confirmada"
              const isPending = item.status === "En verificación"
              return (
                <button
                  key={item.id}
                  className={isSelected ? "active" : ""}
                  onClick={() => setActivePurchaseId(item.id)}
                  type="button"
                >
                  <span>
                    <strong>{item.code}</strong>
                    <small
                      style={{
                        color: "#5a6e7f",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "160px",
                      }}
                    >
                      {pkgTitle}
                    </small>
                    <small style={{ fontSize: "11px", color: "#8a9ea8" }}>
                      {item.createdAt}
                    </small>
                  </span>
                  <span
                    className={`status status--${
                      isSuccess ? "success" : isPending ? "pending" : "error"
                    }`}
                  >
                    {isSuccess ? "✓ " : isPending ? "◷ " : ""}
                    {isSuccess ? "Compra realizada" : item.status}
                  </span>
                </button>
              )
            })}
          </aside>

          {activePurchase && (
            <section className="reservation-detail">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">
                    {activePurchase.code} · {activePurchase.createdAt}
                  </span>
                  <h2>{activePurchase.packages[0]?.name || "Reserva turística"}</h2>
                </div>
                <span
                  className={`status status--${
                    activePurchase.status === "Compra realizada" ||
                    activePurchase.status === "Confirmada"
                      ? "success"
                      : activePurchase.status === "En verificación"
                      ? "pending"
                      : "error"
                  }`}
                >
                  {activePurchase.status === "Compra realizada" ||
                  activePurchase.status === "Confirmada"
                    ? "✓ "
                    : "◷ "}
                  {activePurchase.status === "Confirmada"
                    ? "Compra realizada"
                    : activePurchase.status}
                </span>
              </div>

              {/* Banner de compra verificada con comprobante */}
              {(activePurchase.status === "Compra realizada" ||
                activePurchase.status === "Confirmada") &&
                activePurchase.paymentMethod === "transferencia" &&
                activePurchase.voucherNumber && (
                  <div
                    style={{
                      margin: "18px 0 6px",
                      padding: "14px 18px",
                      borderRadius: "var(--radius)",
                      background: "#eafaf1",
                      border: "1px solid var(--success)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "14px",
                      color: "var(--abyss)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--success)",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      ✓
                    </span>
                    <div>
                      <strong>Comprobante verificado con éxito:</strong> #{activePurchase.voucherNumber}{" "}
                      {activePurchase.voucherFileName
                        ? `(${activePurchase.voucherFileName})`
                        : ""} · Tu pedido está validado como <strong>Compra realizada</strong>.
                    </div>
                  </div>
                )}

              {/* Panel para adjuntar comprobante si la reserva está en verificación */}
              {activePurchase.status === "En verificación" && (
                <div
                  className="pending-voucher-card"
                  style={{
                    margin: "20px 0",
                    padding: "20px",
                    borderRadius: "var(--radius)",
                    background: "#fffaf0",
                    border: "1.5px solid #f59e0b",
                    boxShadow: "0 4px 16px rgba(245, 158, 11, 0.12)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "#fef3c7",
                        display: "grid",
                        placeItems: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      ⚠️
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "17px",
                            color: "var(--abyss)",
                          }}
                        >
                          Comprobante de pago pendiente de adjuntar
                        </h3>
                        <span
                          className="status status--pending"
                          style={{ fontSize: "12px" }}
                        >
                          ⏳ Plazo restante: 24 horas
                        </span>
                      </div>
                      <p
                        style={{
                          margin: "6px 0 0",
                          fontSize: "14px",
                          color: "#475569",
                        }}
                      >
                        Esta compra fue reservada por <strong>Transferencia bancaria</strong> por un monto de <strong>${activePurchase.total},00</strong>. Adjunta el comprobante de transferencia bancaria de este pedido para validar tu pago y cambiar el estado a <strong>Compra realizada</strong>.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#ffffff",
                      padding: "16px",
                      borderRadius: "var(--radius)",
                      border: "1px solid rgba(27, 73, 101, 0.18)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    <div
                      className="two-col"
                      style={{ gap: "14px", alignItems: "start" }}
                    >
                      <Field
                        label="Nº de comprobante o referencia bancaria"
                        placeholder="Ej: TRF-849204 o 76543210"
                        value={voucherRefInput}
                        onChange={(val) => setVoucherRefInput(val)}
                        help="Código de transacción bancaria emitido por tu banco."
                      />
                      <div>
                        <label
                          className="field__label"
                          style={{
                            display: "block",
                            marginBottom: "6px",
                            fontWeight: 700,
                          }}
                        >
                          Archivo del comprobante
                        </label>
                        <input
                          type="file"
                          id={`voucher-upload-file-${activePurchase.id}`}
                          style={{ display: "none" }}
                          accept=".pdf,image/png,image/jpeg"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setUploadedFileName(e.target.files[0].name)
                              setVoucherFileReady(true)
                            }
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button
                            kind="secondary"
                            type="button"
                            onClick={() => {
                              const inputEl = document.getElementById(
                                `voucher-upload-file-${activePurchase.id}`
                              ) as HTMLInputElement
                              if (inputEl) inputEl.click()
                              else {
                                setUploadedFileName("comprobante-transferencia.pdf")
                                setVoucherFileReady(true)
                              }
                            }}
                          >
                            {voucherFileReady
                              ? "Cambiar archivo"
                              : "Seleccionar archivo (PDF / JPG / PNG)"}
                          </Button>
                          {!voucherFileReady && (
                            <Button
                              kind="quiet"
                              type="button"
                              onClick={() => {
                                setUploadedFileName(
                                  "comprobante_banco_pichincha.pdf"
                                )
                                setVoucherFileReady(true)
                                if (!voucherRefInput) {
                                  setVoucherRefInput(
                                    `TR-${Math.floor(
                                      10000000 + Math.random() * 90000000
                                    )}`
                                  )
                                }
                              }}
                              style={{ fontSize: "13px" }}
                            >
                              Simular comprobante de prueba
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {voucherFileReady && (
                      <div
                        className="file-progress"
                        role="status"
                        style={{ margin: "4px 0" }}
                      >
                        <div>
                          <span>
                            📄 {uploadedFileName || "comprobante-transferencia.pdf"}
                          </span>
                          <strong>100%</strong>
                        </div>
                        <div className="progress">
                          <span style={{ width: "100%" }} />
                        </div>
                        <span className="status status--pacific">
                          ✓ Documento listo para registrar
                        </span>
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "12px",
                        marginTop: "4px",
                      }}
                    >
                      <Button
                        kind="primary"
                        type="button"
                        disabled={!voucherFileReady || isUploading}
                        onClick={handleConfirmVoucherUpload}
                      >
                        {isUploading
                          ? "Registrando comprobante..."
                          : "Adjuntar comprobante y validar compra"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Paquetes incluidos y viajeros registrados agrupados por paquete */}
              <div style={{ margin: "20px 0" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "var(--pacific)",
                    marginBottom: "12px",
                  }}
                >
                  Paquetes incluidos y viajeros registrados (
                  {activePurchase.packages.length}{" "}
                  {activePurchase.packages.length === 1
                    ? "paquete"
                    : "paquetes"}
                  )
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {activePurchase.packages.map((pkgItem, pIdx) => {
                    const allTravs = activePurchase.travelers || []
                    let pkgTravelers = allTravs.filter(
                      (t) =>
                        t.packageId === pkgItem.id ||
                        (t.packageTitle &&
                          pkgItem.name &&
                          t.packageTitle.toLowerCase() ===
                            pkgItem.name.toLowerCase())
                    )

                    if (pkgTravelers.length === 0) {
                      let startIndex = 0
                      for (let i = 0; i < pIdx; i++) {
                        startIndex += activePurchase.packages[i].people || 1
                      }
                      pkgTravelers = allTravs.slice(
                        startIndex,
                        startIndex + (pkgItem.people || 1)
                      )
                    }

                    if (pkgTravelers.length === 0) {
                      for (let p = 1; p <= pkgItem.people; p++) {
                        pkgTravelers.push({
                          id: `p-${pkgItem.id}-${p}`,
                          slotNumber: p,
                          packageId: pkgItem.id,
                          packageTitle: pkgItem.name,
                          fullName:
                            pIdx === 0 && p === 1
                              ? activePurchase.titular?.name ||
                                "Titular de la reserva"
                              : `Viajero ${p}`,
                          cedula:
                            pIdx === 0 && p === 1
                              ? activePurchase.titular?.cedula ||
                                "1712345675"
                              : "Registrada",
                          isTitular: pIdx === 0 && p === 1,
                          isMinor: false,
                        })
                      }
                    }

                    return (
                      <div
                        key={pkgItem.id || pIdx}
                        style={{
                          padding: "16px",
                          border: "1px solid var(--pacific)",
                          borderRadius: "var(--radius)",
                          background: "var(--sand)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "12px",
                            paddingBottom: "12px",
                            borderBottom:
                              "1px dashed rgba(27, 73, 101, 0.25)",
                          }}
                        >
                          <div>
                            <strong
                              style={{ fontSize: "15px", display: "block" }}
                            >
                              {pkgItem.name}
                            </strong>
                            <small
                              style={{ color: "#5a6e7f", display: "block" }}
                            >
                              📍 {pkgItem.city} ({pkgItem.province}) · 📅{" "}
                              {pkgItem.date}
                            </small>
                            <small style={{ color: "var(--abyss)" }}>
                              👥 {pkgItem.people}{" "}
                              {pkgItem.people === 1
                                ? "viajero"
                                : "viajeros"}{" "}
                              (${pkgItem.price} c/u)
                            </small>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <strong
                              style={{
                                fontSize: "17px",
                                color: "var(--pacific)",
                              }}
                            >
                              ${pkgItem.total}
                            </strong>
                          </div>
                        </div>

                        <div style={{ marginTop: "12px" }}>
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "var(--pacific)",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              marginBottom: "8px",
                            }}
                          >
                            <span>👥</span> Viajeros registrados en este
                            paquete ({pkgTravelers.length}):
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "6px",
                            }}
                          >
                            {pkgTravelers.map((t, idx) => (
                              <div
                                key={t.id || idx}
                                style={{
                                  padding: "8px 12px",
                                  background: "var(--breeze)",
                                  border: "1px solid var(--pacific)",
                                  borderRadius: "6px",
                                  fontSize: "13px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <span>
                                  <strong>Viajero {idx + 1}:</strong>{" "}
                                  {t.fullName ||
                                    "Sin nombre registrado"}{" "}
                                  · Doc: {t.cedula || "N/A"}
                                </span>
                                {t.isMinor ? (
                                  <span
                                    className="status status--pending"
                                    style={{
                                      fontSize: "11px",
                                      padding: "1px 6px",
                                    }}
                                  >
                                    Menor de edad
                                  </span>
                                ) : t.isTitular ? (
                                  <span
                                    className="status status--pacific"
                                    style={{
                                      fontSize: "11px",
                                      padding: "1px 6px",
                                    }}
                                  >
                                    Titular
                                  </span>
                                ) : (
                                  <span
                                    className="status"
                                    style={{
                                      fontSize: "11px",
                                      padding: "1px 6px",
                                    }}
                                  >
                                    Acompañante
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="two-col" style={{ margin: "20px 0" }}>
                <div>
                  <h3>Itinerario y Logística</h3>
                  <p>
                    <strong>Fechas:</strong>{" "}
                    {activePurchase.packages[0]?.date || "Por confirmar"}
                  </p>
                  <p>
                    <strong>Punto de encuentro:</strong> Terminal turística
                    oficial · 06:00 AM
                  </p>
                  <p>
                    <strong>Guía de viaje:</strong> Guía profesional certificado
                    bilingüe asignado
                  </p>
                </div>
                <div>
                  <h3>Datos del Pago</h3>
                  <p>
                    <strong>Método:</strong> {activePurchase.paymentMethodLabel}
                  </p>
                  {activePurchase.installments && (
                    <p>
                      <strong>Modalidad:</strong>{" "}
                      {activePurchase.installments}
                    </p>
                  )}
                  {activePurchase.cardLast4 && (
                    <p>
                      <strong>Tarjeta:</strong> •••• {activePurchase.cardLast4}
                    </p>
                  )}
                  {activePurchase.paymentMethod === "transferencia" && (
                    <p>
                      <strong>Comprobante bancario:</strong>{" "}
                      {activePurchase.status === "Compra realizada" ||
                      activePurchase.status === "Confirmada" ? (
                        <span style={{ color: "var(--success)", fontWeight: 700 }}>
                          #{activePurchase.voucherNumber || "TR-76543210"} (✓ Adjuntado y validado)
                        </span>
                      ) : (
                        <span style={{ color: "#b45309", fontWeight: 700 }}>
                          Pendiente de adjuntar (Plazo de 24 horas)
                        </span>
                      )}
                    </p>
                  )}
                  <p>
                    <strong>Total pagado:</strong>{" "}
                    <span
                      style={{
                        color: "var(--pacific)",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      ${activePurchase.total},00
                    </span>
                  </p>
                </div>
              </div>

              <div className="split-actions" style={{ marginTop: "24px" }}>
                <Button
                  kind="secondary"
                  type="button"
                  onClick={() => {
                    setDownloadToast(true)
                    setTimeout(() => setDownloadToast(false), 3000)
                  }}
                >
                  Descargar voucher PDF
                </Button>
                {hasTicketForThisPurchase ? (
                  <Button
                    kind="secondary"
                    type="button"
                    onClick={() => go("tickets")}
                  >
                    Ver ticket de soporte ({hasTicketForThisPurchase.ticketNumber})
                  </Button>
                ) : (
                  <Button
                    kind="primary"
                    type="button"
                    onClick={() => go("soporte")}
                  >
                    Abrir ticket de soporte
                  </Button>
                )}
              </div>
            </section>
          )}
        </div>
      )}

      {downloadToast && (
        <div className="toast" role="status">
          <span>
            ✓ Voucher de reserva #{activePurchase?.code} descargado
            exitosamente.
          </span>
          <button onClick={() => setDownloadToast(false)}>Cerrar</button>
        </div>
      )}
      {voucherSuccessToast && (
        <div className="toast" role="status">
          <span>{voucherSuccessToast}</span>
          <button onClick={() => setVoucherSuccessToast("")}>Cerrar</button>
        </div>
      )}
    </>
  )
}

