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
    name: "Aventura",
    slug: "aventura-extremo",
    description: "Trekking, canopy, rafting, puenting y deportes de adrenalina.",
    icon: "mountain",
  },
  {
    id: 2,
    name: "Ecoturismo",
    slug: "ecoturismo-naturaleza",
    description: "Avistamiento de flora y fauna, reservas biológicas y senderismo.",
    icon: "compass",
  },
  {
    id: 3,
    name: "Playa y Relax",
    slug: "playa-relax",
    description: "Descanso frente al mar, surf y navegación costera.",
    icon: "umbrella",
  },
  {
    id: 4,
    name: "Cultural",
    slug: "cultural-historico",
    description: "Centros históricos, museos coloniales y arquitectura patrimonial.",
    icon: "landmark",
  },
  {
    id: 5,
    name: "Romántico",
    slug: "luna-de-miel",
    description: "Escapadas exclusivas para parejas, glamping y atardeceres mágicos.",
    icon: "heart",
  },
  {
    id: 6,
    name: "Familiar",
    slug: "familiar-todo-incluido",
    description: "Experiencias adaptadas para niños, adultos mayores y grupos familiares.",
    icon: "users",
  },
  {
    id: 7,
    name: "Gastronomía",
    slug: "gastronomia-cacao",
    description: "Degustaciones de cocina tradicional andina y chocolate fino de aroma.",
    icon: "utensils",
  },
  {
    id: 8,
    name: "Trekking",
    slug: "trekking-montana",
    description: "Ascensiones a volcanes, páramos andinos y refugios de montaña.",
    icon: "flag",
  },
  {
    id: 9,
    name: "Bienestar y Spa",
    slug: "bienestar-termas",
    description: "Aguas termales curativas, spas medicinales y relajación.",
    icon: "sparkles",
  },
  {
    id: 10,
    name: "Turismo Comunitario",
    slug: "tradiciones-comunitario",
    description: "Convivencia con comunidades indígenas y mercados artesanales.",
    icon: "star",
  },
]
