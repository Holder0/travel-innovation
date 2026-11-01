import { jsPDF } from "jspdf"
import type { CartItem, TravelerData, PersonalInfo, PaymentDetails, PurchaseItem } from "../types"

export interface BookingPdfData {
  bookingCode: string
  createdAt?: string
  titular: {
    name: string
    email: string
    phone: string
    cedula: string
    birthDate?: string
    address?: string
  }
  packages: Array<{
    name: string
    city?: string
    province?: string
    date: string
    people: number
    price: number
    total: number
  }>
  travelers: Array<{
    slotNumber?: number
    fullName: string
    cedula?: string
    birthDate?: string
    isTitular?: boolean
  }>
  total: number
  paymentMethodLabel: string
  installments?: string
  status?: string
}

export function generateBookingPdf(data: BookingPdfData) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  let y = 16

  // Primary Header Banner
  doc.setFillColor(27, 73, 101) // Pacific Blue
  doc.rect(0, 0, pageWidth, 28, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(16)
  doc.text("TRAVEL INNOVATION ECUADOR", 14, 12)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(8.5)
  doc.text("RUC: 1792345678001 · Licencia Turística Mintur N° 00482 · Facturación Oficial", 14, 18)
  doc.text("Av. Amazonas y Naciones Unidas, N34-120 · Quito, Ecuador · soporte@travelinnovation.ec", 14, 23)

  y = 36

  // Receipt Header Title
  doc.setTextColor(27, 73, 101)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.text("COMPROBANTE OFICIAL DE RESERVA TURÍSTICA", 14, y)

  y += 7

  // Box with Booking Details
  doc.setDrawColor(200, 215, 225)
  doc.setFillColor(248, 250, 252)
  doc.roundedRect(14, y, pageWidth - 28, 24, 2, 2, "FD")

  doc.setFontSize(9)
  doc.setTextColor(100, 116, 139)
  doc.text("CÓDIGO DE RESERVA:", 18, y + 6)
  doc.text("FECHA DE EMISIÓN:", 18, y + 13)
  doc.text("ESTADO:", 18, y + 20)

  doc.setTextColor(15, 23, 42)
  doc.setFont("helvetica", "bold")
  doc.text(`#${data.bookingCode}`, 65, y + 6)
  doc.setFont("helvetica", "normal")
  doc.text(data.createdAt || new Date().toLocaleString("es-EC"), 65, y + 13)

  const statusText = data.status || "Compra realizada · Reserva activa"
  doc.setTextColor(16, 185, 129)
  doc.setFont("helvetica", "bold")
  doc.text(statusText, 65, y + 20)

  // Total Box on the Right
  doc.setFillColor(238, 246, 250)
  doc.roundedRect(pageWidth - 75, y + 3, 57, 18, 2, 2, "F")
  doc.setTextColor(27, 73, 101)
  doc.setFontSize(8.5)
  doc.setFont("helvetica", "normal")
  doc.text("TOTAL PAGADO", pageWidth - 70, y + 9)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text(`$${data.total},00 USD`, pageWidth - 70, y + 17)

  y += 31

  // Section: Datos del Titular
  doc.setTextColor(27, 73, 101)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("DATOS DEL TITULAR DE LA RESERVA", 14, y)
  y += 2

  doc.setDrawColor(27, 73, 101)
  doc.setLineWidth(0.4)
  doc.line(14, y, pageWidth - 14, y)
  y += 5

  doc.setFontSize(8.5)
  doc.setTextColor(15, 23, 42)
  doc.setFont("helvetica", "bold")
  doc.text("Nombre completo:", 14, y)
  doc.setFont("helvetica", "normal")
  doc.text(data.titular.name || "Titular", 45, y)

  doc.setFont("helvetica", "bold")
  doc.text("Cédula / Pasaporte:", 115, y)
  doc.setFont("helvetica", "normal")
  doc.text(data.titular.cedula || "No registrada", 152, y)
  y += 5

  doc.setFont("helvetica", "bold")
  doc.text("Correo electrónico:", 14, y)
  doc.setFont("helvetica", "normal")
  doc.text(data.titular.email || "No registrado", 45, y)

  doc.setFont("helvetica", "bold")
  doc.text("Teléfono:", 115, y)
  doc.setFont("helvetica", "normal")
  doc.text(data.titular.phone || "No registrado", 152, y)
  y += 5

  if (data.titular.address) {
    doc.setFont("helvetica", "bold")
    doc.text("Dirección:", 14, y)
    doc.setFont("helvetica", "normal")
    doc.text(data.titular.address, 45, y)
    y += 5
  }

  if (data.titular.birthDate) {
    doc.setFont("helvetica", "bold")
    doc.text("F. Nacimiento:", 14, y)
    doc.setFont("helvetica", "normal")
    doc.text(data.titular.birthDate, 45, y)
    y += 5
  }

  y += 4

  // Section: Paquetes Turísticos
  doc.setTextColor(27, 73, 101)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text(`PAQUETES CONTRATADOS (${data.packages.length})`, 14, y)
  y += 2

  doc.line(14, y, pageWidth - 14, y)
  y += 5

  // Table Header
  doc.setFillColor(241, 245, 249)
  doc.rect(14, y, pageWidth - 28, 6, "F")
  doc.setFontSize(8)
  doc.setTextColor(71, 85, 105)
  doc.setFont("helvetica", "bold")
  doc.text("PAQUETE / DESTINO", 16, y + 4.2)
  doc.text("FECHA", 95, y + 4.2)
  doc.text("VIAJEROS", 130, y + 4.2)
  doc.text("P. UNIT", 155, y + 4.2)
  doc.text("SUBTOTAL", 175, y + 4.2)
  y += 8

  // Table Rows
  doc.setFont("helvetica", "normal")
  doc.setTextColor(15, 23, 42)
  data.packages.forEach((pkg) => {
    const pkgDesc = pkg.city ? `${pkg.name} (${pkg.city})` : pkg.name
    doc.setFont("helvetica", "bold")
    doc.text(pkgDesc.substring(0, 42), 16, y)
    doc.setFont("helvetica", "normal")
    doc.text(pkg.date, 95, y)
    doc.text(`${pkg.people} pers.`, 130, y)
    doc.text(`$${pkg.price}`, 155, y)
    doc.setFont("helvetica", "bold")
    doc.text(`$${pkg.total}`, 175, y)
    doc.setFont("helvetica", "normal")

    y += 4
    doc.setDrawColor(226, 232, 240)
    doc.setLineWidth(0.2)
    doc.line(14, y, pageWidth - 14, y)
    y += 3.5
  })

  y += 3

  // Section: Viajeros Registrados
  doc.setTextColor(27, 73, 101)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text(`LISTA DE VIAJEROS REGISTRADOS (${data.travelers.length})`, 14, y)
  y += 2
  doc.setDrawColor(27, 73, 101)
  doc.setLineWidth(0.4)
  doc.line(14, y, pageWidth - 14, y)
  y += 5

  // Travelers Table Header
  doc.setFillColor(241, 245, 249)
  doc.rect(14, y, pageWidth - 28, 6, "F")
  doc.setFontSize(8)
  doc.setTextColor(71, 85, 105)
  doc.setFont("helvetica", "bold")
  doc.text("#", 16, y + 4.2)
  doc.text("NOMBRE COMPLETO", 23, y + 4.2)
  doc.text("DOCUMENTO", 90, y + 4.2)
  doc.text("F. NACIMIENTO", 132, y + 4.2)
  doc.text("ROL", 168, y + 4.2)
  y += 8

  data.travelers.forEach((t, idx) => {
    doc.setFontSize(8)
    doc.setTextColor(15, 23, 42)
    doc.text(String(t.slotNumber || idx + 1), 16, y)
    doc.text((t.fullName || "Acompañante").substring(0, 32), 23, y)
    doc.text(t.cedula || "Registrado", 90, y)
    doc.text(t.birthDate || "Registrada", 132, y)
    doc.text(t.isTitular ? "Titular" : "Acompañante", 168, y)

    y += 4
    doc.setDrawColor(226, 232, 240)
    doc.setLineWidth(0.2)
    doc.line(14, y, pageWidth - 14, y)
    y += 3.5
  })

  y += 3

  // Financial Breakdown Box
  const subtotal = Math.round(data.total / 1.15)
  const iva = data.total - subtotal

  doc.setDrawColor(200, 215, 225)
  doc.setFillColor(250, 250, 252)
  doc.roundedRect(pageWidth - 85, y, 71, 26, 2, 2, "FD")

  doc.setFontSize(8.5)
  doc.setTextColor(71, 85, 105)
  doc.text("Subtotal:", pageWidth - 80, y + 6)
  doc.text(`$${subtotal},00`, pageWidth - 20, y + 6, { align: "right" })

  doc.text("IVA (15%):", pageWidth - 80, y + 12)
  doc.text(`$${iva},00`, pageWidth - 20, y + 12, { align: "right" })

  doc.setFont("helvetica", "bold")
  doc.setTextColor(27, 73, 101)
  doc.text("TOTAL PAGADO:", pageWidth - 80, y + 19)
  doc.setFontSize(10)
  doc.text(`$${data.total},00`, pageWidth - 20, y + 19, { align: "right" })

  // Payment method info next to breakdown
  doc.setFontSize(8.5)
  doc.setTextColor(71, 85, 105)
  doc.setFont("helvetica", "bold")
  doc.text("Método de pago:", 14, y + 6)
  doc.setFont("helvetica", "normal")
  doc.text(data.paymentMethodLabel, 42, y + 6)

  if (data.installments) {
    doc.setFont("helvetica", "bold")
    doc.text("Modalidad:", 14, y + 12)
    doc.setFont("helvetica", "normal")
    doc.text(data.installments, 42, y + 12)
  }

  y += 32

  // Legal and support footer
  doc.setDrawColor(27, 73, 101)
  doc.setLineWidth(0.4)
  doc.line(14, y, pageWidth - 14, y)
  y += 5

  doc.setFontSize(7.5)
  doc.setTextColor(100, 116, 139)
  doc.text(
    "IMPORTANTE: Presentar cédula de identidad o pasaporte original el día de salida del tour.",
    14,
    y
  )
  y += 4
  doc.text(
    "Cancelaciones o reprogramaciones se aceptan con mínimo 72 horas de anticipación conforme a nuestras políticas.",
    14,
    y
  )
  y += 4
  doc.text(
    "Para asistencia en viaje o emergencias: soporte@travelinnovation.ec · PBX: (02) 2456456 · WhatsApp: +593 99 123 4567",
    14,
    y
  )

  // Trigger real file download in the browser
  doc.save(`Comprobante-Reserva-${data.bookingCode}.pdf`)
}

