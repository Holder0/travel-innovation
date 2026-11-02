import type { CartItem, TravelerData, PersonalInfo, PaymentDetails } from "../types"

export interface SendEmailPayload {
  toEmail: string
  bookingCode: string
  titularName: string
  cedula: string
  phone: string
  total: number
  paymentMethod: string
  installments?: string
  packages: Array<{
    name: string
    date: string
    people: number
    total: number
  }>
  travelers: Array<{
    fullName: string
    cedula?: string
    birthDate?: string
    isTitular?: boolean
  }>
}

export interface SendEmailResult {
  success: boolean
  needsActivation?: boolean
  message: string
}

export async function sendRealBookingEmail(
  data: SendEmailPayload
): Promise<SendEmailResult> {
  try {
    const packagesSummary = data.packages
      .map(
        (p, idx) =>
          `${idx + 1}. ${p.name} (${p.people} pers. | Fecha: ${p.date} | Total: $${p.total})`
      )
      .join("\n")

    const travelersSummary = data.travelers
      .map(
        (t, idx) =>
          `Viajero ${idx + 1}: ${t.fullName} (${t.isTitular ? "Titular" : "Acompañante"} | Doc: ${t.cedula || "N/A"}${t.birthDate ? ` | F. Nac: ${t.birthDate}` : ""})`
      )
      .join("\n")

    const subtotal = Math.round(data.total / 1.15)
    const iva = data.total - subtotal

    const payload = {
      _subject: `Comprobante de compra - Reserva #${data.bookingCode} - Travel Innovation`,
      _template: "table",
      _captcha: "false",
      "Código de Reserva": `#${data.bookingCode}`,
      "Titular de la Compra": data.titularName,
      "Documento (Cédula/Pasaporte)": data.cedula || "No registrado",
      "Teléfono de Contacto": data.phone || "No registrado",
      "Correo Electrónico Destino": data.toEmail,
      "Paquetes Contratados": packagesSummary,
      "Viajeros Registrados": travelersSummary,
      "Subtotal": `$${subtotal},00 USD`,
      "IVA (15%)": `$${iva},00 USD`,
      "Total Cancelado": `$${data.total},00 USD`,
      "Método de Pago": data.paymentMethod + (data.installments ? ` (${data.installments})` : ""),
      "Estado de la Reserva": "Compra confirmada · Comprobante oficial emitido",
      "Mensaje al Cliente":
        "¡Gracias por tu compra con Travel Innovation Ecuador! Este es el comprobante oficial de tu reserva. Recuerda llevar tu cédula o pasaporte original el día de salida. Para dudas o cambios contáctanos al (02) 2456456 o a soporte@travelinnovation.ec.",
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(data.toEmail.trim())}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )

    const result = await response.json()
    const isSuccess = result.success === "true" || result.success === true
    const messageStr = String(result.message || "")
    const needsActivation = messageStr.toLowerCase().includes("activation")

    if (isSuccess) {
      return {
        success: true,
        message: "Comprobante oficial despachado exitosamente a tu bandeja de correo.",
      }
    } else if (needsActivation) {
      return {
        success: false,
        needsActivation: true,
        message:
          "El proveedor de correo envió un enlace de activación inicial a tu correo para habilitar la recepción. (En correos temporales revisa la bandeja para activar, o descarga tu comprobante PDF oficial directamente aquí).",
      }
    } else {
      return {
        success: false,
        message:
          result.message ||
          "No se pudo completar el despacho por correo temporal. Puedes descargar tu comprobante en PDF directamente.",
      }
    }
  } catch (error: any) {
    console.error("Error sending real email via FormSubmit", error)
    return {
      success: false,
      message:
        error?.message ||
        "Hubo un inconveniente al conectar con el servidor de correo. Puedes descargar tu comprobante en PDF directamente.",
    }
  }
}

