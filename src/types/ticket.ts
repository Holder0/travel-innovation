export interface SupportTicket {
  id: string
  ticketNumber: string
  bookingCode: string
  reason: string
  description: string
  evidenceUploaded: boolean
  createdAt: string
  status: "En revisión" | "En trámite" | "Resuelto"
  responseEstimated: string
}



export const SUPPORT_REASONS = [
  "No presentación",
  "Incumplimiento operativo",
  "Fuerza mayor restrictiva",
  "Fuerza mayor parcial o clima",
  "Falta de documentación",
  "Emergencia médica grave",
  "Baja de categoría no consensuada",
  "Cancelaciones tardías",
  "Cancelación voluntaria",
  "Abandono voluntario",
].sort((a, b) => a.localeCompare(b, "es"))

