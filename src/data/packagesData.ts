import type { PackageItem } from "../types"
import { CURRENT_YEAR } from "../utils/dateUtils"

export const packages: PackageItem[] = [
  {
    id: "navidad-galapagos",
    name: "Navidad en Galápagos",
    region: "Galápagos",
    province: "Galápagos",
    city: "Puerto Ayora (Santa Cruz)",
    days: "4 días / 3 noches",
    price: 685,
    datesText: `23 al 26 dic ${CURRENT_YEAR}`,
    availableDates: [`23 al 26 dic ${CURRENT_YEAR}`],
    dates: { startDay: 23, endDay: 26, month: "dic", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "galapagos-promo-flash",
    name: "Galápagos Santa Cruz Promo Flash",
    region: "Galápagos",
    province: "Galápagos",
    city: "Puerto Ayora (Santa Cruz)",
    days: "4 días / 3 noches",
    price: 499,
    datesText: `16 al 19 oct ${CURRENT_YEAR}`,
    availableDates: [`16 al 19 oct ${CURRENT_YEAR}`],
    dates: { startDay: 16, endDay: 19, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "galapagos-feriado-octubre",
    name: "Galápagos Feriado de Octubre",
    region: "Galápagos",
    province: "Galápagos",
    city: "Puerto Ayora (Santa Cruz)",
    days: "4 días / 3 noches",
    price: 589,
    datesText: `09 al 12 oct ${CURRENT_YEAR}`,
    availableDates: [`09 al 12 oct ${CURRENT_YEAR}`],
    dates: { startDay: 9, endDay: 12, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cojimies-fin-de-ano",
    name: "Cojimíes Fin de Año",
    region: "Costa",
    province: "Manabí",
    city: "Pedernales",
    days: "3 días / 2 noches",
    price: 189,
    datesText: `30 dic al 02 ene ${CURRENT_YEAR + 1}`,
    availableDates: [`30 dic al 02 ene ${CURRENT_YEAR + 1}`],
    dates: { startDay: 30, endDay: 31, month: "dic", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "banos-aventura",
    name: "Aventura en Baños y Cascadas",
    region: "Sierra",
    province: "Tungurahua",
    city: "Baños de Agua Santa",
    days: "3 días / 2 noches",
    price: 175,
    datesText: `09 al 11 oct ${CURRENT_YEAR}`,
    availableDates: [
      `09 al 11 oct ${CURRENT_YEAR}`,
      `16 al 18 oct ${CURRENT_YEAR}`,
      `23 al 25 oct ${CURRENT_YEAR}`,
      `06 al 08 nov ${CURRENT_YEAR}`,
      `13 al 15 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 9, endDay: 11, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ruta-spondylus",
    name: "Ruta del Spondylus y Manta",
    region: "Costa",
    province: "Manabí",
    city: "Manta",
    days: "4 días / 3 noches",
    price: 275,
    datesText: `16 al 19 oct ${CURRENT_YEAR}`,
    availableDates: [
      `16 al 19 oct ${CURRENT_YEAR}`,
      `23 al 26 oct ${CURRENT_YEAR}`,
      `06 al 09 nov ${CURRENT_YEAR}`,
      `20 al 23 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 16, endDay: 19, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "amazonia-esencial",
    name: "Amazonía Esencial y Río Napo",
    region: "Amazonía",
    province: "Napo",
    city: "Tena",
    days: "4 días / 3 noches",
    price: 319,
    datesText: `17 al 20 oct ${CURRENT_YEAR}`,
    availableDates: [
      `17 al 20 oct ${CURRENT_YEAR}`,
      `24 al 27 oct ${CURRENT_YEAR}`,
      `07 al 10 nov ${CURRENT_YEAR}`,
      `21 al 24 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 17, endDay: 20, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cuenca-patrimonial",
    name: "Cuenca Patrimonial y Cajas",
    region: "Sierra",
    province: "Azuay",
    city: "Cuenca",
    days: "3 días / 2 noches",
    price: 230,
    datesText: `01 al 03 nov ${CURRENT_YEAR}`,
    availableDates: [`01 al 03 nov ${CURRENT_YEAR}`],
    dates: { startDay: 1, endDay: 3, month: "nov", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cuyabeno-reserva",
    name: "Cuyabeno Reserva Amazónica",
    region: "Amazonía",
    province: "Sucumbíos",
    city: "Lago Agrio / Cuyabeno",
    days: "4 días / 3 noches",
    price: 380,
    datesText: `23 al 26 oct ${CURRENT_YEAR}`,
    availableDates: [
      `23 al 26 oct ${CURRENT_YEAR}`,
      `13 al 16 nov ${CURRENT_YEAR}`,
      `27 al 30 nov ${CURRENT_YEAR}`,
    ],
    dates: { startDay: 23, endDay: 26, month: "oct", year: CURRENT_YEAR },
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    ],
  },
]


