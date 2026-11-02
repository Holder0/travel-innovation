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
  pdfDownloadUrl?: string
  pdfBase64?: string
  packages: Array<{
    name: string
    date: string
    people: number
    price?: number
    total: number
    image?: string
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

    const itemsHtml = data.packages
      .map(
        (p) => `
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
          <tr style="vertical-align: middle;">
            <td style="padding: 12px 12px 12px 0; width: 68px;">
              <img style="height: 64px; width: 64px; border-radius: 8px; object-fit: cover; display: block; border: 1px solid #cbd5e1;" height="64" width="64" src="${p.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80'}" alt="${p.name}" />
            </td>
            <td style="padding: 12px 8px; width: 100%;">
              <div style="font-size: 15px; font-weight: 700; color: #1b4965; line-height: 1.3;">${p.name}</div>
              <div style="font-size: 13px; color: #64748b; margin-top: 4px;">Salida: ${p.date} · Pasajeros: ${p.people} pers.</div>
            </td>
            <td style="padding: 12px 0 12px 12px; white-space: nowrap; text-align: right;">
              <strong style="font-size: 16px; color: #0f172a;">$${p.total},00 USD</strong>
            </td>
          </tr>
        </table>`
      )
      .join("")

    const travelersHtml = data.travelers
      .map(
        (t, idx) => `
        <div style="font-size: 13px; color: #334155; padding: 4px 0; border-bottom: 1px dashed #e2e8f0;">
          <strong>Viajero ${idx + 1} (${t.isTitular ? "Titular" : "Acompañante"}):</strong> ${t.fullName} · Doc: ${t.cedula || "N/A"}${t.birthDate ? ` · Nacimiento: ${t.birthDate}` : ""}
        </div>`
      )
      .join("")

    // 1. Si EmailJS está configurado, despachar directamente sin requerir activaciones
    const emailJsServiceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim()
    const emailJsTemplateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim()
    const emailJsPublicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim()

    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      try {
        const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: emailJsServiceId,
            template_id: emailJsTemplateId,
            user_id: emailJsPublicKey,
            template_params: {
              to_email: data.toEmail,
              email: data.toEmail,
              order_id: data.bookingCode,
              booking_code: data.bookingCode,
              titular_name: data.titularName,
              cedula: data.cedula,
              phone: data.phone,
              total: `${data.total},00`,
              subtotal: `${subtotal},00`,
              iva: `${iva},00`,
              cost_tax: `${iva},00`,
              cost_shipping: `0,00`,
              cost_total: `${data.total},00`,
              payment_method: data.paymentMethod + (data.installments ? ` (${data.installments})` : ""),
              pdf_download_url: data.pdfDownloadUrl || `https://holder0.github.io/travel-innovation/#comprobante-${data.bookingCode}`,
              my_pdf: data.pdfBase64 || "",
              content: data.pdfBase64 || "",
              items_html: itemsHtml,
              travelers_html: travelersHtml,
              packages_summary: packagesSummary,
              travelers_summary: travelersSummary,
            },
          }),
        })

        if (emailJsResponse.ok) {
          return {
            success: true,
            message: "Comprobante oficial despachado directamente a tu bandeja de correo.",
          }
        } else {
          const errText = await emailJsResponse.text()
          console.warn("Aviso EmailJS:", errText)
        }
      } catch (e) {
        console.warn("Aviso: EmailJS no pudo despachar, intentando servicio secundario:", e)
      }
    }

    // 2. Despacho secundario vía FormSubmit
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

