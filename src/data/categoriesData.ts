export interface TravelCategory {
  id: number
  name: string
  slug: string
  description: string
  icon: string
}

export const TRAVEL_CATEGORIES: TravelCategory[] = [
  {
    id: 1,
    name: "Aventura y Deportes Extremos",
    slug: "aventura-extremo",
    description: "Trekking, canopy, rafting, puenting y deportes de adrenalina.",
    icon: "mountain",
  },
  {
    id: 2,
    name: "Ecoturismo y Naturaleza",
    slug: "ecoturismo-naturaleza",
    description: "Avistamiento de flora y fauna, reservas biológicas y senderismo.",
    icon: "compass",
  },
  {
    id: 3,
    name: "Sol, Playa y Relax",
    slug: "playa-relax",
    description: "Descanso frente al mar, surf y navegación costera.",
    icon: "umbrella",
  },
  {
    id: 4,
    name: "Cultural, Patrimonial e Histórico",
    slug: "cultural-historico",
    description: "Centros históricos, museos coloniales y arquitectura patrimonial.",
    icon: "landmark",
  },
  {
    id: 5,
    name: "Romántico y Luna de Miel",
    slug: "luna-de-miel",
    description: "Escapadas exclusivas para parejas, glamping y atardeceres mágicos.",
    icon: "heart",
  },
  {
    id: 6,
    name: "Familiar y Todo Incluido",
    slug: "familiar-todo-incluido",
    description: "Experiencias adaptadas para niños, adultos mayores y grupos familiares.",
    icon: "users",
  },
  {
    id: 7,
    name: "Gastronomía y Rutas del Cacao",
    slug: "gastronomia-cacao",
    description: "Degustaciones de cocina tradicional andina y chocolate fino de aroma.",
    icon: "utensils",
  },
  {
    id: 8,
    name: "Trekking y Alta Montaña",
    slug: "trekking-montana",
    description: "Ascensiones a volcanes, páramos andinos y refugios de montaña.",
    icon: "flag",
  },
  {
    id: 9,
    name: "Bienestar, Termas y Spa",
    slug: "bienestar-termas",
    description: "Aguas termales curativas, spas medicinales y relajación.",
    icon: "sparkles",
  },
  {
    id: 10,
    name: "Tradiciones y Turismo Comunitario",
    slug: "tradiciones-comunitario",
    description: "Convivencia con comunidades indígenas y mercados artesanales.",
    icon: "star",
  },
]

