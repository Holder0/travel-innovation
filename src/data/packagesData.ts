import type { PackageItem } from "../types"
import { CURRENT_YEAR } from "../utils/dateUtils"

export const packages: PackageItem[] = [
  {
    "id": "azuay-canyoning-y-rappel-en-chorro-de-giron",
    "name": "Canyoning y Rappel en Chorro de Girón",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Girón",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "12 al 13 dic CURRENT_YEAR",
    "availableDates": [
      "12 al 13 dic CURRENT_YEAR",
      "19 al 20 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 13,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Girón · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Girón.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-1-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Canyoning y Rappel!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-1-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-biodiversidad-andina-en-parque-nacional-cajas",
    "name": "Biodiversidad Andina en Parque Nacional Cajas",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Cuenca",
    "days": "2 días / 1 noche",
    "price": 140,
    "datesText": "14 al 15 ene CURRENT_YEAR",
    "availableDates": [
      "14 al 15 ene CURRENT_YEAR",
      "21 al 22 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 14,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuenca · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Cuenca.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-2-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Biodiversidad Andina!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-2-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-descanso-y-paseo-en-bote-en-laguna-de-busa",
    "name": "Descanso y Paseo en Bote en Laguna de Busa",
    "region": "Sierra",
    "province": "Azuay",
    "city": "San Fernando",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "16 al 17 feb CURRENT_YEAR",
    "availableDates": [
      "16 al 17 feb CURRENT_YEAR",
      "23 al 24 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 15,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Fernando · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de San Fernando.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-3-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descanso y Paseo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-3-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-cuenca-colonial-museos-y-catedral-de-la-inmaculada",
    "name": "Cuenca Colonial, Museos y Catedral de la Inmaculada",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Cuenca",
    "days": "3 días / 2 noches",
    "price": 195,
    "datesText": "18 al 20 nov CURRENT_YEAR",
    "availableDates": [
      "18 al 20 nov CURRENT_YEAR",
      "25 al 27 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 20,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 16,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuenca · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Cuenca.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Cultural en Cuenca",
        "description": "Jornada completa de inmersión en Cuenca Colonial, Museos y Catedral de la Inmaculada. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-4-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cuenca Colonial, Museos y Catedral de la Inmaculada!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-4-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-escapada-romantica-en-mirador-de-turi-y-valle-de-yunguilla",
    "name": "Escapada Romántica en Mirador de Turi y Valle de Yunguilla",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Santa Isabel",
    "days": "3 días / 2 noches",
    "price": 240,
    "datesText": "20 al 22 dic CURRENT_YEAR",
    "availableDates": [
      "20 al 22 dic CURRENT_YEAR",
      "27 al 29 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 22,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 17,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santa Isabel · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Santa Isabel.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Santa Isabel",
        "description": "Jornada completa de inmersión en Escapada Romántica en Mirador de Turi y Valle de Yunguilla. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-5-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Escapada Romántica!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-5-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-ruta-de-los-rios-zoologico-yurak-allpa-y-paute",
    "name": "Ruta de los Ríos, Zoológico Yurak Allpa y Paute",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Paute",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "22 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "22 al 23 ene CURRENT_YEAR",
      "29 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 18,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Paute · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Paute.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-6-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de los Ríos, Zoológico Yurak Allpa y Paute!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-6-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-ruta-del-mote-pillo-chancho-hornado-y-cuy-asado-cuencano",
    "name": "Ruta del Mote Pillo, Chancho Hornado y Cuy Asado Cuencano",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Gualaceo",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "24 al 25 feb CURRENT_YEAR",
    "availableDates": [
      "24 al 25 feb CURRENT_YEAR",
      "31 al 32 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 19,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Gualaceo · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Gualaceo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-7-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Mote Pillo, Chancho Hornado y Cuy Asado Cuencano!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-7-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-trekking-de-altura-por-lagunas-toreadora-y-llaviucu",
    "name": "Trekking de Altura por Lagunas Toreadora y Llaviucu",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Cuenca",
    "days": "3 días / 2 noches",
    "price": 170,
    "datesText": "11 al 13 nov CURRENT_YEAR",
    "availableDates": [
      "11 al 13 nov CURRENT_YEAR",
      "18 al 20 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 13,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 20,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuenca · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Cuenca.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Cuenca",
        "description": "Jornada completa de inmersión en Trekking de Altura por Lagunas Toreadora y Llaviucu. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-8-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking de Altura por Lagunas Toreadora y Llaviucu!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-8-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-circuito-termal-y-banos-de-lodo-en-banos-de-cuenca",
    "name": "Circuito Termal y Baños de Lodo en Baños de Cuenca",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Cuenca",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "13 al 14 dic CURRENT_YEAR",
    "availableDates": [
      "13 al 14 dic CURRENT_YEAR",
      "20 al 21 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 21,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuenca · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Cuenca.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-9-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Circuito Termal y Baños de Lodo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-9-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "azuay-talleres-de-filigrana-en-plata-y-tejido-en-chordeleg-y-sigsig",
    "name": "Talleres de Filigrana en Plata y Tejido en Chordeleg y Sígsig",
    "region": "Sierra",
    "province": "Azuay",
    "city": "Chordeleg",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "15 al 16 ene CURRENT_YEAR",
    "availableDates": [
      "15 al 16 ene CURRENT_YEAR",
      "22 al 23 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 22,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Chordeleg · Bienvenida a Azuay",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Chordeleg.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-10-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Talleres de Filigrana!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-10-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-descenso-en-bicicleta-de-montana-por-el-arenal-del-chimborazo",
    "name": "Descenso en Bicicleta de Montaña por el Arenal del Chimborazo",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Guaranda",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "17 al 18 feb CURRENT_YEAR",
    "availableDates": [
      "17 al 18 feb CURRENT_YEAR",
      "24 al 25 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 23,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guaranda · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Guaranda.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-11-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descenso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-11-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-reserva-de-produccion-faunistica-y-bosque-de-polylepis",
    "name": "Reserva de Producción Faunística y Bosque de Polylepis",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Guaranda",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "19 al 20 nov CURRENT_YEAR",
    "availableDates": [
      "19 al 20 nov CURRENT_YEAR",
      "26 al 27 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 24,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guaranda · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Guaranda.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-12-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva de Producción Faunística y Bosque de Polylepis!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-12-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-relax-subtropical-y-huertos-frutales-en-caluma",
    "name": "Relax Subtropical y Huertos Frutales en Caluma",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Caluma",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "21 al 22 dic CURRENT_YEAR",
    "availableDates": [
      "21 al 22 dic CURRENT_YEAR",
      "28 al 29 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 25,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Caluma · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Caluma.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-13-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Relax Subtropical y Huertos Frutales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-13-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-santuario-de-la-virgen-del-huayco-y-centro-de-guaranda",
    "name": "Santuario de la Virgen del Huayco y Centro de Guaranda",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "San Miguel",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "23 al 24 ene CURRENT_YEAR",
    "availableDates": [
      "23 al 24 ene CURRENT_YEAR",
      "30 al 31 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 26,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Miguel · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de San Miguel.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-14-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Santuario de la Virgen del Huayco y Centro de Guaranda!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-14-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-glamping-en-colinas-andinas-y-cumbres-del-libertador",
    "name": "Glamping en Colinas Andinas y Cumbres del Libertador",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Chillanes",
    "days": "2 días / 1 noche",
    "price": 145,
    "datesText": "10 al 11 feb CURRENT_YEAR",
    "availableDates": [
      "10 al 11 feb CURRENT_YEAR",
      "17 al 18 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 27,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Chillanes · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Chillanes.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-15-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Glamping!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-15-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-complejo-turistico-las-tres-cruces-y-cascadas-de-echeandia",
    "name": "Complejo Turístico Las Tres Cruces y Cascadas de Echeandía",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Echeandía",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "12 al 13 nov CURRENT_YEAR",
    "availableDates": [
      "12 al 13 nov CURRENT_YEAR",
      "19 al 20 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 28,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Echeandía · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Echeandía.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-16-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Complejo Turístico Las Tres Cruces y Cascadas de Echeandía!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-16-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-cata-de-quesos-de-salinas-de-guaranda-y-chocolates-finos",
    "name": "Cata de Quesos de Salinas de Guaranda y Chocolates Finos",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Guaranda",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "14 al 15 dic CURRENT_YEAR",
    "availableDates": [
      "14 al 15 dic CURRENT_YEAR",
      "21 al 22 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 29,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guaranda · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Guaranda.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-17-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cata de Quesos de Salinas de Guaranda y Chocolates Finos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-17-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-trekking-al-refugio-hermanos-carrel-por-la-ruta-bolivar",
    "name": "Trekking al Refugio Hermanos Carrel por la Ruta Bolívar",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Guaranda",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "16 al 17 ene CURRENT_YEAR",
    "availableDates": [
      "16 al 17 ene CURRENT_YEAR",
      "23 al 24 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 30,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guaranda · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Guaranda.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-18-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking al Refugio Hermanos Carrel por la Ruta Bolívar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-18-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-spa-andino-con-vistas-a-la-cordillera-occidental",
    "name": "Spa Andino con Vistas a la Cordillera Occidental",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "San Miguel",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "18 al 19 feb CURRENT_YEAR",
    "availableDates": [
      "18 al 19 feb CURRENT_YEAR",
      "25 al 26 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 31,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Miguel · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de San Miguel.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-19-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Spa Andino con Vistas a la Cordillera Occidental!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-19-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "bolivar-experiencia-comunitaria-solidaria-en-salinas-de-tomabelas",
    "name": "Experiencia Comunitaria Solidaria en Salinas de Tomabelas",
    "region": "Sierra",
    "province": "Bolívar",
    "city": "Guaranda",
    "days": "3 días / 2 noches",
    "price": 155,
    "datesText": "20 al 22 nov CURRENT_YEAR",
    "availableDates": [
      "20 al 22 nov CURRENT_YEAR",
      "27 al 29 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 22,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 32,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guaranda · Bienvenida a Bolívar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Guaranda.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Turismo Comunitario en Guaranda",
        "description": "Jornada completa de inmersión en Experiencia Comunitaria Solidaria en Salinas de Tomabelas. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-20-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Experiencia Comunitaria Solidaria!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-20-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-escalada-en-roca-y-caving-en-el-cerro-cojitambo",
    "name": "Escalada en Roca y Caving en el Cerro Cojitambo",
    "region": "Sierra",
    "province": "Cañar",
    "city": "Azogues",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "22 al 23 dic CURRENT_YEAR",
    "availableDates": [
      "22 al 23 dic CURRENT_YEAR",
      "29 al 30 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 33,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Azogues · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Azogues.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-21-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Escalada!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-21-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-sendero-natural-en-bosque-protector-dudas-mazar",
    "name": "Sendero Natural en Bosque Protector Dudas Mazar",
    "region": "Sierra",
    "province": "Cañar",
    "city": "Cañar",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "24 al 25 ene CURRENT_YEAR",
    "availableDates": [
      "24 al 25 ene CURRENT_YEAR",
      "31 al 32 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 34,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cañar · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Cañar.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-22-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Sendero Natural!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-22-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-parque-acuatico-y-balnearios-tropicales-de-la-troncal",
    "name": "Parque Acuático y Balnearios Tropicales de La Troncal",
    "region": "Sierra",
    "province": "Cañar",
    "city": "La Troncal",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "11 al 12 feb CURRENT_YEAR",
    "availableDates": [
      "11 al 12 feb CURRENT_YEAR",
      "18 al 19 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 35,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a La Troncal · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de La Troncal.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-23-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Acuático y Balnearios Tropicales de La Troncal!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-23-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-complejo-arqueologico-y-templo-del-sol-de-ingapirca",
    "name": "Complejo Arqueológico y Templo del Sol de Ingapirca",
    "region": "Sierra",
    "province": "Cañar",
    "city": "Cañar",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "13 al 14 nov CURRENT_YEAR",
    "availableDates": [
      "13 al 14 nov CURRENT_YEAR",
      "20 al 21 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 36,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cañar · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Cañar.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-24-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Complejo Arqueológico y Templo del Sol de Ingapirca!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-24-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-romance-con-vista-al-santuario-de-la-virgen-del-rocio",
    "name": "Romance con Vista al Santuario de la Virgen del Rocío",
    "region": "Sierra",
    "province": "Cañar",
    "city": "Biblián",
    "days": "2 días / 1 noche",
    "price": 140,
    "datesText": "15 al 16 dic CURRENT_YEAR",
    "availableDates": [
      "15 al 16 dic CURRENT_YEAR",
      "22 al 23 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 12,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Biblián · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Biblián.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-25-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Romance con Vista al Santuario de la Virgen del Rocío!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-25-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-paseo-familiar-en-la-laguna-de-culebrillas-y-el-tambo",
    "name": "Paseo Familiar en la Laguna de Culebrillas y El Tambo",
    "region": "Sierra",
    "province": "Cañar",
    "city": "El Tambo",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "17 al 18 ene CURRENT_YEAR",
    "availableDates": [
      "17 al 18 ene CURRENT_YEAR",
      "24 al 25 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 13,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a El Tambo · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de El Tambo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-26-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-26-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-tour-gastronomico-de-cascaritas-de-azogues-y-chicha-de-jora",
    "name": "Tour Gastronómico de Cascaritas de Azogues y Chicha de Jora",
    "region": "Sierra",
    "province": "Cañar",
    "city": "Azogues",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "19 al 20 feb CURRENT_YEAR",
    "availableDates": [
      "19 al 20 feb CURRENT_YEAR",
      "26 al 27 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 14,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Azogues · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Azogues.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-27-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Tour Gastronómico de Cascaritas de Azogues y Chicha de Jora!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-27-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-trekking-por-el-gran-qhapaq-nan-camino-del-inca",
    "name": "Trekking por el Gran Qhapaq Ñan (Camino del Inca)",
    "region": "Sierra",
    "province": "Cañar",
    "city": "El Tambo",
    "days": "3 días / 2 noches",
    "price": 165,
    "datesText": "21 al 23 nov CURRENT_YEAR",
    "availableDates": [
      "21 al 23 nov CURRENT_YEAR",
      "28 al 30 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 23,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 15,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a El Tambo · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de El Tambo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en El Tambo",
        "description": "Jornada completa de inmersión en Trekking por el Gran Qhapaq Ñan (Camino del Inca). Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-28-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking por el Gran Qhapaq Ñan (Camino del Inca)!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-28-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-aguas-termales-minerales-en-yanayacu-y-spa-de-montana",
    "name": "Aguas Termales Minerales en Yanayacu y Spa de Montaña",
    "region": "Sierra",
    "province": "Cañar",
    "city": "La Troncal",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "23 al 24 dic CURRENT_YEAR",
    "availableDates": [
      "23 al 24 dic CURRENT_YEAR",
      "30 al 31 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 16,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a La Troncal · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de La Troncal.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-29-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Aguas Termales Minerales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-29-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "canar-tradiciones-canaris-y-tejido-de-ponchos-en-sisid-anejo",
    "name": "Tradiciones Cañaris y Tejido de Ponchos en Sisid Anejo",
    "region": "Sierra",
    "province": "Cañar",
    "city": "Cañar",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "10 al 11 ene CURRENT_YEAR",
    "availableDates": [
      "10 al 11 ene CURRENT_YEAR",
      "17 al 18 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 17,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cañar · Bienvenida a Cañar",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Cañar.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-30-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Tradiciones Cañaris y Tejido de Ponchos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-30-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-cicloturismo-y-canonismo-en-el-valle-de-mira",
    "name": "Cicloturismo y Cañonismo en el Valle de Mira",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Mira",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "12 al 13 feb CURRENT_YEAR",
    "availableDates": [
      "12 al 13 feb CURRENT_YEAR",
      "19 al 20 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 18,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mira · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Mira.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-31-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cicloturismo y Cañonismo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-31-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-reserva-ecologica-el-angel-y-bosque-de-frailejones-gigantes",
    "name": "Reserva Ecológica El Ángel y Bosque de Frailejones Gigantes",
    "region": "Sierra",
    "province": "Carchi",
    "city": "El Ángel (Espejo)",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "14 al 15 nov CURRENT_YEAR",
    "availableDates": [
      "14 al 15 nov CURRENT_YEAR",
      "21 al 22 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 19,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a El Ángel (Espejo) · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de El Ángel (Espejo).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-32-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva Ecológica El Ángel y Bosque de Frailejones Gigantes!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-32-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-tranquilidad-y-clima-calido-en-los-huertos-de-chota-carchi",
    "name": "Tranquilidad y Clima Cálido en los Huertos de Chota Carchi",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Mira",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "16 al 17 dic CURRENT_YEAR",
    "availableDates": [
      "16 al 17 dic CURRENT_YEAR",
      "23 al 24 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 20,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mira · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Mira.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-33-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Tranquilidad y Clima Cálido!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-33-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-esculturas-en-verde-del-cementerio-municipal-de-tulcan",
    "name": "Esculturas en Verde del Cementerio Municipal de Tulcán",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Tulcán",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "18 al 19 ene CURRENT_YEAR",
    "availableDates": [
      "18 al 19 ene CURRENT_YEAR",
      "25 al 26 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 21,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Tulcán · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Tulcán.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-34-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Esculturas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-34-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-cabana-romantica-y-laguna-volcanica-de-el-salado",
    "name": "Cabaña Romántica y Laguna Volcánica de El Salado",
    "region": "Sierra",
    "province": "Carchi",
    "city": "San Gabriel (Montúfar)",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "20 al 21 feb CURRENT_YEAR",
    "availableDates": [
      "20 al 21 feb CURRENT_YEAR",
      "27 al 28 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 22,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Gabriel (Montúfar) · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de San Gabriel (Montúfar).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-35-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabaña Romántica y Laguna Volcánica de El Salado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-35-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-bosque-de-los-arrayanes-de-san-gabriel-y-paseo-familiar",
    "name": "Bosque de los Arrayanes de San Gabriel y Paseo Familiar",
    "region": "Sierra",
    "province": "Carchi",
    "city": "San Gabriel (Montúfar)",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "22 al 23 nov CURRENT_YEAR",
    "availableDates": [
      "22 al 23 nov CURRENT_YEAR",
      "29 al 30 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 23,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Gabriel (Montúfar) · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de San Gabriel (Montúfar).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-36-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Bosque de los Arrayanes de San Gabriel y Paseo Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-36-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-ruta-del-queso-pastuzo-tardon-mireno-y-hornado-pastuso",
    "name": "Ruta del Queso Pastuzo, Tardón Mireño y Hornado Pastuso",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Tulcán",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "24 al 25 dic CURRENT_YEAR",
    "availableDates": [
      "24 al 25 dic CURRENT_YEAR",
      "31 al 32 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 24,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Tulcán · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Tulcán.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-37-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Queso Pastuzo, Tardón Mireño y Hornado Pastuso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-37-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-trekking-al-volcan-chiles-y-lagunas-verdes-azufradas",
    "name": "Trekking al Volcán Chiles y Lagunas Verdes Azufradas",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Tulcán",
    "days": "2 días / 1 noche",
    "price": 140,
    "datesText": "11 al 12 ene CURRENT_YEAR",
    "availableDates": [
      "11 al 12 ene CURRENT_YEAR",
      "18 al 19 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 25,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Tulcán · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Tulcán.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-38-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking al Volcán Chiles y Lagunas Verdes Azufradas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-38-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-santuario-y-banos-termales-de-la-gruta-de-la-paz",
    "name": "Santuario y Baños Termales de la Gruta de la Paz",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Bolívar",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "13 al 14 feb CURRENT_YEAR",
    "availableDates": [
      "13 al 14 feb CURRENT_YEAR",
      "20 al 21 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 26,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Bolívar · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Bolívar.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-39-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Santuario y Baños Termales de la Gruta de la Paz!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-39-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "carchi-convivencia-pasto-y-mitos-en-la-comuna-de-la-encanada",
    "name": "Convivencia Pasto y Mitos en la Comuna de La Encañada",
    "region": "Sierra",
    "province": "Carchi",
    "city": "Huaca",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "15 al 16 nov CURRENT_YEAR",
    "availableDates": [
      "15 al 16 nov CURRENT_YEAR",
      "22 al 23 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 27,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Huaca · Bienvenida a Carchi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Huaca.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-40-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Convivencia Pasto y Mitos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-40-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-ruta-de-ciclismo-extremo-downhill-desde-el-taita-chimborazo",
    "name": "Ruta de Ciclismo Extremo Downhill desde el Taita Chimborazo",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Riobamba",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "17 al 18 dic CURRENT_YEAR",
    "availableDates": [
      "17 al 18 dic CURRENT_YEAR",
      "24 al 25 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 28,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Riobamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-41-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de Ciclismo Extremo Downhill desde el Taita Chimborazo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-41-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-avistamiento-de-vicunas-silvestres-y-condor-andino",
    "name": "Avistamiento de Vicuñas Silvestres y Cóndor Andino",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Riobamba",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "19 al 20 ene CURRENT_YEAR",
    "availableDates": [
      "19 al 20 ene CURRENT_YEAR",
      "26 al 27 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 29,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Riobamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-42-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Avistamiento de Vicuñas Silvestres y Cóndor Andino!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-42-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-fin-de-semana-de-campo-y-sol-en-los-valles-de-pallatanga",
    "name": "Fin de Semana de Campo y Sol en los Valles de Pallatanga",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Pallatanga",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "21 al 22 feb CURRENT_YEAR",
    "availableDates": [
      "21 al 22 feb CURRENT_YEAR",
      "28 al 29 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 30,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Pallatanga · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Pallatanga.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-43-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Fin de Semana de Campo y Sol!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-43-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-ruta-de-la-nariz-del-diablo-y-centro-historico-de-alausi",
    "name": "Ruta de la Nariz del Diablo y Centro Histórico de Alausí",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Alausí",
    "days": "2 días / 1 noche",
    "price": 150,
    "datesText": "23 al 24 nov CURRENT_YEAR",
    "availableDates": [
      "23 al 24 nov CURRENT_YEAR",
      "30 al 31 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 31,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Alausí · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Alausí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-44-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de la Nariz del Diablo y Centro Histórico de Alausí!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-44-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-glamping-domo-frente-al-nevado-chimborazo-con-fogata",
    "name": "Glamping Domo Frente al Nevado Chimborazo con Fogata",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Riobamba",
    "days": "2 días / 1 noche",
    "price": 180,
    "datesText": "10 al 11 dic CURRENT_YEAR",
    "availableDates": [
      "10 al 11 dic CURRENT_YEAR",
      "17 al 18 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 32,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Riobamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-45-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Glamping Domo Frente al Nevado Chimborazo con Fogata!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-45-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-paseo-en-bote-por-laguna-de-colta-e-iglesia-de-balbanera",
    "name": "Paseo en Bote por Laguna de Colta e Iglesia de Balbanera",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Colta",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "12 al 13 ene CURRENT_YEAR",
    "availableDates": [
      "12 al 13 ene CURRENT_YEAR",
      "19 al 20 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 33,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Colta · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Colta.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-46-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-46-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-hornado-riobambeno-chicha-huevona-y-fritada-de-guano",
    "name": "Hornado Riobambeño, Chicha Huevona y Fritada de Guano",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Guano",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "14 al 15 feb CURRENT_YEAR",
    "availableDates": [
      "14 al 15 feb CURRENT_YEAR",
      "21 al 22 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 34,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guano · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Guano.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-47-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Hornado Riobambeño, Chicha Huevona y Fritada de Guano!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-47-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-ascenso-de-alta-montana-al-refugio-whymper-5-000-m",
    "name": "Ascenso de Alta Montaña al Refugio Whymper (5.000 m)",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Riobamba",
    "days": "3 días / 2 noches",
    "price": 210,
    "datesText": "16 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "16 al 18 nov CURRENT_YEAR",
      "23 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 35,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Riobamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Riobamba",
        "description": "Jornada completa de inmersión en Ascenso de Alta Montaña al Refugio Whymper (5.000 m). Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-48-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ascenso de Alta Montaña al Refugio Whymper (5.000 m)!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-48-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-spa-de-aguas-termales-volcanicas-en-ojo-de-fantasma-penipe",
    "name": "Spa de Aguas Termales Volcánicas en Ojo de Fantasma Penipe",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Penipe",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "18 al 19 dic CURRENT_YEAR",
    "availableDates": [
      "18 al 19 dic CURRENT_YEAR",
      "25 al 26 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 36,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Penipe · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Penipe.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-49-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Spa de Aguas Termales Volcánicas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-49-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "chimborazo-feria-indigena-autentica-de-guamote-y-tejedores-de-alfombras",
    "name": "Feria Indígena Auténtica de Guamote y Tejedores de Alfombras",
    "region": "Sierra",
    "province": "Chimborazo",
    "city": "Guamote",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "20 al 21 ene CURRENT_YEAR",
    "availableDates": [
      "20 al 21 ene CURRENT_YEAR",
      "27 al 28 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 12,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guamote · Bienvenida a Chimborazo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Guamote.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-50-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Feria Indígena Auténtica de Guamote y Tejedores de Alfombras!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-50-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-cabalgata-y-ciclismo-en-las-faldas-del-volcan-cotopaxi",
    "name": "Cabalgata y Ciclismo en las Faldas del Volcán Cotopaxi",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Latacunga",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "22 al 23 feb CURRENT_YEAR",
    "availableDates": [
      "22 al 23 feb CURRENT_YEAR",
      "29 al 30 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 13,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Latacunga.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-51-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabalgata y Ciclismo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-51-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-laguna-de-limpiopungo-y-flora-del-paramo-andino",
    "name": "Laguna de Limpiopungo y Flora del Páramo Andino",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Latacunga",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "24 al 25 nov CURRENT_YEAR",
    "availableDates": [
      "24 al 25 nov CURRENT_YEAR",
      "31 al 32 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 14,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Latacunga.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-52-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Laguna de Limpiopungo y Flora del Páramo Andino!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-52-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-balneario-natural-y-cascadas-subtropicales-de-la-mana",
    "name": "Balneario Natural y Cascadas Subtropicales de La Maná",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "La Maná",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "11 al 12 dic CURRENT_YEAR",
    "availableDates": [
      "11 al 12 dic CURRENT_YEAR",
      "18 al 19 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 15,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a La Maná · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de La Maná.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-53-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Balneario Natural y Cascadas Subtropicales de La Maná!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-53-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-centro-historico-de-piedra-pomez-de-latacunga-y-templos",
    "name": "Centro Histórico de Piedra Pómez de Latacunga y Templos",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Latacunga",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "13 al 14 ene CURRENT_YEAR",
    "availableDates": [
      "13 al 14 ene CURRENT_YEAR",
      "20 al 21 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 16,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Latacunga.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-54-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Centro Histórico de Piedra Pómez de Latacunga y Templos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-54-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-romance-y-cabanas-de-madera-al-borde-del-crater-quilotoa",
    "name": "Romance y Cabañas de Madera al Borde del Cráter Quilotoa",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Pujilí",
    "days": "2 días / 1 noche",
    "price": 165,
    "datesText": "15 al 16 feb CURRENT_YEAR",
    "availableDates": [
      "15 al 16 feb CURRENT_YEAR",
      "22 al 23 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 17,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Pujilí · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Pujilí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-55-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Romance y Cabañas de Madera al Borde del Cráter Quilotoa!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-55-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-ruta-de-los-helados-tradicionales-de-salcedo-y-granja-andina",
    "name": "Ruta de los Helados Tradicionales de Salcedo y Granja Andina",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Salcedo",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "17 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "17 al 18 nov CURRENT_YEAR",
      "24 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 18,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Salcedo · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Salcedo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-56-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de los Helados Tradicionales de Salcedo y Granja Andina!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-56-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-ruta-de-las-chugchucaras-latacunguenas-y-queso-de-hoja",
    "name": "Ruta de las Chugchucaras Latacungueñas y Queso de Hoja",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Latacunga",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "19 al 20 dic CURRENT_YEAR",
    "availableDates": [
      "19 al 20 dic CURRENT_YEAR",
      "26 al 27 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 19,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Latacunga.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-57-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de las Chugchucaras Latacungueñas y Queso de Hoja!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-57-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-trekking-quilotoa-loop-sigchos-isinlivi-y-chugchilan",
    "name": "Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Sigchos",
    "days": "3 días / 2 noches",
    "price": 185,
    "datesText": "21 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "21 al 23 ene CURRENT_YEAR",
      "28 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 20,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Sigchos · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Sigchos.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Sigchos",
        "description": "Jornada completa de inmersión en Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-58-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-58-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-spa-con-piedras-calientes-volcanicas-en-hosteria-de-montana",
    "name": "Spa con Piedras Calientes Volcánicas en Hostería de Montaña",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Latacunga",
    "days": "2 días / 1 noche",
    "price": 140,
    "datesText": "23 al 24 feb CURRENT_YEAR",
    "availableDates": [
      "23 al 24 feb CURRENT_YEAR",
      "30 al 31 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 21,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Latacunga.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-59-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Spa con Piedras Calientes Volcánicas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-59-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "cotopaxi-mercado-ancestral-de-saquisili-y-taller-de-pintores-de-tigua",
    "name": "Mercado Ancestral de Saquisilí y Taller de Pintores de Tigua",
    "region": "Sierra",
    "province": "Cotopaxi",
    "city": "Saquisilí",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "10 al 11 nov CURRENT_YEAR",
    "availableDates": [
      "10 al 11 nov CURRENT_YEAR",
      "17 al 18 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 22,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Saquisilí · Bienvenida a Cotopaxi",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Saquisilí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-60-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Mercado Ancestral de Saquisilí y Taller de Pintores de Tigua!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-60-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-espeleologia-y-minas-coloniales-el-sexmo-en-zaruma",
    "name": "Espeleología y Minas Coloniales El Sexmo en Zaruma",
    "region": "Costa",
    "province": "El Oro",
    "city": "Zaruma",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "12 al 13 dic CURRENT_YEAR",
    "availableDates": [
      "12 al 13 dic CURRENT_YEAR",
      "19 al 20 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 23,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zaruma · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Zaruma.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-61-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Espeleología y Minas Coloniales El Sexmo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-61-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-reserva-ecologica-arenillas-y-bosque-seco-ecuatoriano",
    "name": "Reserva Ecológica Arenillas y Bosque Seco Ecuatoriano",
    "region": "Costa",
    "province": "El Oro",
    "city": "Arenillas",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "14 al 15 ene CURRENT_YEAR",
    "availableDates": [
      "14 al 15 ene CURRENT_YEAR",
      "21 al 22 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 24,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Arenillas · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Arenillas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-62-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva Ecológica Arenillas y Bosque Seco Ecuatoriano!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-62-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-descanso-en-playa-jambeli-y-manglares-del-archipielago",
    "name": "Descanso en Playa Jambelí y Manglares del Archipiélago",
    "region": "Costa",
    "province": "El Oro",
    "city": "Machala",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "16 al 17 feb CURRENT_YEAR",
    "availableDates": [
      "16 al 17 feb CURRENT_YEAR",
      "23 al 24 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 25,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Machala · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Machala.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-63-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descanso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-63-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-patrimonio-de-madera-y-balcones-coloniales-de-zaruma",
    "name": "Patrimonio de Madera y Balcones Coloniales de Zaruma",
    "region": "Costa",
    "province": "El Oro",
    "city": "Zaruma",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "18 al 19 nov CURRENT_YEAR",
    "availableDates": [
      "18 al 19 nov CURRENT_YEAR",
      "25 al 26 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 26,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zaruma · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Zaruma.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-64-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Patrimonio de Madera y Balcones Coloniales de Zaruma!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-64-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-cena-romantica-en-colinas-de-pinas-y-cafe-de-altura",
    "name": "Cena Romántica en Colinas de Piñas y Café de Altura",
    "region": "Costa",
    "province": "El Oro",
    "city": "Piñas",
    "days": "2 días / 1 noche",
    "price": 140,
    "datesText": "20 al 21 dic CURRENT_YEAR",
    "availableDates": [
      "20 al 21 dic CURRENT_YEAR",
      "27 al 28 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 27,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Piñas · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Piñas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-65-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cena Romántica!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-65-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-paseo-en-lancha-por-puerto-bolivar-y-ruta-del-camaron",
    "name": "Paseo en Lancha por Puerto Bolívar y Ruta del Camarón",
    "region": "Costa",
    "province": "El Oro",
    "city": "Machala",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "22 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "22 al 23 ene CURRENT_YEAR",
      "29 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 28,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Machala · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Machala.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-66-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-66-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-ruta-del-tigrillo-zarumeno-cafe-arabigo-y-mariscos-de-puerto-bolivar",
    "name": "Ruta del Tigrillo Zarumeño, Café Arábigo y Mariscos de Puerto Bolívar",
    "region": "Costa",
    "province": "El Oro",
    "city": "Zaruma",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "24 al 25 feb CURRENT_YEAR",
    "availableDates": [
      "24 al 25 feb CURRENT_YEAR",
      "31 al 32 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 29,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zaruma · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Zaruma.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-67-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Tigrillo Zarumeño, Café Arábigo y Mariscos de Puerto Bolívar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-67-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-trekking-en-bosque-petrificado-de-puyango-y-huellas-fosiles",
    "name": "Trekking en Bosque Petrificado de Puyango y Huellas Fósiles",
    "region": "Costa",
    "province": "El Oro",
    "city": "Arenillas",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "11 al 12 nov CURRENT_YEAR",
    "availableDates": [
      "11 al 12 nov CURRENT_YEAR",
      "18 al 19 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 30,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Arenillas · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Arenillas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-68-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-68-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-aguas-termominerales-y-lodo-curativo-de-portovelo",
    "name": "Aguas Termominerales y Lodo Curativo de Portovelo",
    "region": "Costa",
    "province": "El Oro",
    "city": "Portovelo",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "13 al 14 dic CURRENT_YEAR",
    "availableDates": [
      "13 al 14 dic CURRENT_YEAR",
      "20 al 21 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 31,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Portovelo · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Portovelo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-69-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Aguas Termominerales y Lodo Curativo de Portovelo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-69-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "el-oro-comunidades-cacaoteras-de-pasaje-y-dulces-de-guayaba",
    "name": "Comunidades Cacaoteras de Pasaje y Dulces de Guayaba",
    "region": "Costa",
    "province": "El Oro",
    "city": "Pasaje",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "15 al 16 ene CURRENT_YEAR",
    "availableDates": [
      "15 al 16 ene CURRENT_YEAR",
      "22 al 23 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 32,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Pasaje · Bienvenida a El Oro",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Pasaje.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-70-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Comunidades Cacaoteras de Pasaje y Dulces de Guayaba!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-70-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-surf-de-olas-de-clase-mundial-y-caving-en-mompiche",
    "name": "Surf de Olas de Clase Mundial y Caving en Mompiche",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Mompiche",
    "days": "3 días / 2 noches",
    "price": 155,
    "datesText": "17 al 19 feb CURRENT_YEAR",
    "availableDates": [
      "17 al 19 feb CURRENT_YEAR",
      "24 al 26 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 19,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 33,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mompiche · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Mompiche.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Mompiche",
        "description": "Jornada completa de inmersión en Surf de Olas de Clase Mundial y Caving en Mompiche. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-71-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Surf de Olas de Clase Mundial y Caving!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-71-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-manglares-majagual-con-los-arboles-mas-altos-del-mundo",
    "name": "Manglares Majagual con los Árboles Más Altos del Mundo",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "San Lorenzo",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "19 al 20 nov CURRENT_YEAR",
    "availableDates": [
      "19 al 20 nov CURRENT_YEAR",
      "26 al 27 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 34,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Lorenzo · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de San Lorenzo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-72-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Manglares Majagual con los Árboles Más Altos del Mundo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-72-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-sol-arena-blanca-y-cocteles-tropicales-en-tonsupa-y-same",
    "name": "Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Tonsupa",
    "days": "3 días / 2 noches",
    "price": 145,
    "datesText": "21 al 23 dic CURRENT_YEAR",
    "availableDates": [
      "21 al 23 dic CURRENT_YEAR",
      "28 al 30 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 23,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 35,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Tonsupa · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Tonsupa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Playa y Relax en Tonsupa",
        "description": "Jornada completa de inmersión en Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-73-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Sol, Arena Blanca y Cocteles Tropicales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-73-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-musica-de-marimba-tradicional-declarada-patrimonio-unesco",
    "name": "Música de Marimba Tradicional declarada Patrimonio Unesco",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Esmeraldas",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "23 al 24 ene CURRENT_YEAR",
    "availableDates": [
      "23 al 24 ene CURRENT_YEAR",
      "30 al 31 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 36,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Esmeraldas · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Esmeraldas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-74-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Música de Marimba Tradicional declarada Patrimonio Unesco!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-74-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-cabana-privada-sobre-el-oceano-en-la-bahia-de-same",
    "name": "Cabaña Privada sobre el Océano en la Bahía de Same",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Same",
    "days": "3 días / 2 noches",
    "price": 210,
    "datesText": "10 al 12 feb CURRENT_YEAR",
    "availableDates": [
      "10 al 12 feb CURRENT_YEAR",
      "17 al 19 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 12,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 12,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Same · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Same.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Same",
        "description": "Jornada completa de inmersión en Cabaña Privada sobre el Océano en la Bahía de Same. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-75-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabaña Privada sobre el Océano!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-75-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-diversion-marina-familiar-en-banana-boat-y-playa-de-atacames",
    "name": "Diversión Marina Familiar en Banana Boat y Playa de Atacames",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Atacames",
    "days": "3 días / 2 noches",
    "price": 130,
    "datesText": "12 al 14 nov CURRENT_YEAR",
    "availableDates": [
      "12 al 14 nov CURRENT_YEAR",
      "19 al 21 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 14,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 13,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Atacames · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Atacames.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Familiar en Atacames",
        "description": "Jornada completa de inmersión en Diversión Marina Familiar en Banana Boat y Playa de Atacames. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-76-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Diversión Marina Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-76-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-ruta-del-encocado-de-cangrejo-azul-y-tapao-arrecho-esmeraldeno",
    "name": "Ruta del Encocado de Cangrejo Azul y Tapao Arrecho Esmeraldeño",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Rioverde",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "14 al 15 dic CURRENT_YEAR",
    "availableDates": [
      "14 al 15 dic CURRENT_YEAR",
      "21 al 22 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 14,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Rioverde · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Rioverde.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-77-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Encocado de Cangrejo Azul y Tapao Arrecho Esmeraldeño!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-77-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-caminata-por-la-selva-tropical-en-la-reserva-cotacachi-cayapas",
    "name": "Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "San Lorenzo",
    "days": "3 días / 2 noches",
    "price": 160,
    "datesText": "16 al 18 ene CURRENT_YEAR",
    "availableDates": [
      "16 al 18 ene CURRENT_YEAR",
      "23 al 25 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 18,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 15,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Lorenzo · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de San Lorenzo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en San Lorenzo",
        "description": "Jornada completa de inmersión en Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-78-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Caminata por la Selva Tropical!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-78-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-taladoterapia-marina-y-masajes-con-aceite-de-coco-puro",
    "name": "Taladoterapia Marina y Masajes con Aceite de Coco Puro",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Mompiche",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "18 al 19 feb CURRENT_YEAR",
    "availableDates": [
      "18 al 19 feb CURRENT_YEAR",
      "25 al 26 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 16,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mompiche · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Mompiche.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-79-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Taladoterapia Marina y Masajes con Aceite de Coco Puro!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-79-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "esmeraldas-convivencia-con-comunidades-afroecuatorianas-y-taller-de-marimba",
    "name": "Convivencia con Comunidades Afroecuatorianas y Taller de Marimba",
    "region": "Costa",
    "province": "Esmeraldas",
    "city": "Esmeraldas",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "20 al 21 nov CURRENT_YEAR",
    "availableDates": [
      "20 al 21 nov CURRENT_YEAR",
      "27 al 28 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 17,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Esmeraldas · Bienvenida a Esmeraldas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Esmeraldas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-80-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Convivencia con Comunidades Afroecuatorianas y Taller de Marimba!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-80-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-snorkel-extremo-con-tiburones-tintoreras-y-lobos-marinos",
    "name": "Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Villamil (Isabela)",
    "days": "4 días / 3 noches",
    "price": 580,
    "datesText": "22 al 25 dic CURRENT_YEAR",
    "availableDates": [
      "22 al 25 dic CURRENT_YEAR",
      "29 al 32 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 25,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 18,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Villamil (Isabela) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Puerto Villamil (Isabela).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Puerto Villamil (Isabela)",
        "description": "Jornada completa de inmersión en Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Aventura en Puerto Villamil (Isabela)",
        "description": "Jornada completa de inmersión en Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-81-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-81-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-santuario-de-tortugas-gigantes-y-estacion-charles-darwin",
    "name": "Santuario de Tortugas Gigantes y Estación Charles Darwin",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Ayora (Santa Cruz)",
    "days": "4 días / 3 noches",
    "price": 620,
    "datesText": "24 al 27 ene CURRENT_YEAR",
    "availableDates": [
      "24 al 27 ene CURRENT_YEAR",
      "31 al 34 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 27,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 19,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Ecoturismo en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Santuario de Tortugas Gigantes y Estación Charles Darwin. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Ecoturismo en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Santuario de Tortugas Gigantes y Estación Charles Darwin. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-82-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Santuario de Tortugas Gigantes y Estación Charles Darwin!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-82-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-descanso-en-playa-de-arena-blanca-de-bahia-tortuga",
    "name": "Descanso en Playa de Arena Blanca de Bahía Tortuga",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Ayora (Santa Cruz)",
    "days": "4 días / 3 noches",
    "price": 495,
    "datesText": "11 al 14 feb CURRENT_YEAR",
    "availableDates": [
      "11 al 14 feb CURRENT_YEAR",
      "18 al 21 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 14,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 20,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Playa y Relax en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Descanso en Playa de Arena Blanca de Bahía Tortuga. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Playa y Relax en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Descanso en Playa de Arena Blanca de Bahía Tortuga. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-83-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descanso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-83-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-historia-de-la-colonia-penal-y-centro-de-interpretacion",
    "name": "Historia de la Colonia Penal y Centro de Interpretación",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Baquerizo Moreno (San Cristóbal)",
    "days": "3 días / 2 noches",
    "price": 480,
    "datesText": "13 al 15 nov CURRENT_YEAR",
    "availableDates": [
      "13 al 15 nov CURRENT_YEAR",
      "20 al 22 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 15,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 21,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Baquerizo Moreno (San Cristóbal) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Puerto Baquerizo Moreno (San Cristóbal).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Cultural en Puerto Baquerizo Moreno (San Cristóbal)",
        "description": "Jornada completa de inmersión en Historia de la Colonia Penal y Centro de Interpretación. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-84-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Historia de la Colonia Penal y Centro de Interpretación!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-84-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-atardeceres-romanticos-en-bahia-naufragio-y-crucero-al-ocaso",
    "name": "Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Baquerizo Moreno (San Cristóbal)",
    "days": "4 días / 3 noches",
    "price": 690,
    "datesText": "15 al 18 dic CURRENT_YEAR",
    "availableDates": [
      "15 al 18 dic CURRENT_YEAR",
      "22 al 25 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 18,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 22,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Baquerizo Moreno (San Cristóbal) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Puerto Baquerizo Moreno (San Cristóbal).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Puerto Baquerizo Moreno (San Cristóbal)",
        "description": "Jornada completa de inmersión en Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Romántico en Puerto Baquerizo Moreno (San Cristóbal)",
        "description": "Jornada completa de inmersión en Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-85-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Atardeceres Románticos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-85-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-safari-insular-familiar-y-senderos-de-crateres-gemelos",
    "name": "Safari Insular Familiar y Senderos de Cráteres Gemelos",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Ayora (Santa Cruz)",
    "days": "4 días / 3 noches",
    "price": 540,
    "datesText": "17 al 20 ene CURRENT_YEAR",
    "availableDates": [
      "17 al 20 ene CURRENT_YEAR",
      "24 al 27 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 20,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 23,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Familiar en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Safari Insular Familiar y Senderos de Cráteres Gemelos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Familiar en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Safari Insular Familiar y Senderos de Cráteres Gemelos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-86-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Safari Insular Familiar y Senderos de Cráteres Gemelos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-86-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-ruta-de-la-langosta-de-galapagos-y-cafe-volcanico-de-altura",
    "name": "Ruta de la Langosta de Galápagos y Café Volcánico de Altura",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Ayora (Santa Cruz)",
    "days": "3 días / 2 noches",
    "price": 470,
    "datesText": "19 al 21 feb CURRENT_YEAR",
    "availableDates": [
      "19 al 21 feb CURRENT_YEAR",
      "26 al 28 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 21,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 24,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Gastronomía en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Ruta de la Langosta de Galápagos y Café Volcánico de Altura. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-87-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de la Langosta de Galápagos y Café Volcánico de Altura!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-87-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-ascenso-al-volcan-activo-sierra-negra-y-fumarolas-de-azufre",
    "name": "Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Villamil (Isabela)",
    "days": "4 días / 3 noches",
    "price": 560,
    "datesText": "21 al 24 nov CURRENT_YEAR",
    "availableDates": [
      "21 al 24 nov CURRENT_YEAR",
      "28 al 31 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 24,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 25,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Villamil (Isabela) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Puerto Villamil (Isabela).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Puerto Villamil (Isabela)",
        "description": "Jornada completa de inmersión en Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Trekking en Puerto Villamil (Isabela)",
        "description": "Jornada completa de inmersión en Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-88-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-88-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-spa-con-sal-marina-de-galapagos-y-piedras-volcanicas",
    "name": "Spa con Sal Marina de Galápagos y Piedras Volcánicas",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Ayora (Santa Cruz)",
    "days": "3 días / 2 noches",
    "price": 510,
    "datesText": "23 al 25 dic CURRENT_YEAR",
    "availableDates": [
      "23 al 25 dic CURRENT_YEAR",
      "30 al 32 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 25,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 26,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Bienestar y Spa en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Spa con Sal Marina de Galápagos y Piedras Volcánicas. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-89-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Spa con Sal Marina de Galápagos y Piedras Volcánicas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-89-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "galapagos-agroturismo-y-fincas-de-conservacion-en-la-parte-alta-de-santa-cruz",
    "name": "Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz",
    "region": "Galápagos",
    "province": "Galápagos",
    "city": "Puerto Ayora (Santa Cruz)",
    "days": "4 días / 3 noches",
    "price": 485,
    "datesText": "10 al 13 ene CURRENT_YEAR",
    "availableDates": [
      "10 al 13 ene CURRENT_YEAR",
      "17 al 20 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 13,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 27,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Turismo Comunitario en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Turismo Comunitario en Puerto Ayora (Santa Cruz)",
        "description": "Jornada completa de inmersión en Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-90-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Agroturismo y Fincas de Conservación!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-90-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-canyoning-y-ruta-de-las-7-cascadas-en-bucay",
    "name": "Canyoning y Ruta de las 7 Cascadas en Bucay",
    "region": "Costa",
    "province": "Guayas",
    "city": "Bucay",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "12 al 13 feb CURRENT_YEAR",
    "availableDates": [
      "12 al 13 feb CURRENT_YEAR",
      "19 al 20 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 28,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Bucay · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Bucay.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-91-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Canyoning y Ruta de las 7 Cascadas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-91-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-reserva-manglares-churute-y-observacion-de-delfines",
    "name": "Reserva Manglares Churute y Observación de Delfines",
    "region": "Costa",
    "province": "Guayas",
    "city": "Naranjal",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "14 al 15 nov CURRENT_YEAR",
    "availableDates": [
      "14 al 15 nov CURRENT_YEAR",
      "21 al 22 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 29,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Naranjal · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Naranjal.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-92-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva Manglares Churute y Observación de Delfines!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-92-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-sol-surf-y-brisa-marina-en-general-villamil-playas",
    "name": "Sol, Surf y Brisa Marina en General Villamil Playas",
    "region": "Costa",
    "province": "Guayas",
    "city": "Playas",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "16 al 17 dic CURRENT_YEAR",
    "availableDates": [
      "16 al 17 dic CURRENT_YEAR",
      "23 al 24 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 30,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Playas · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Playas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-93-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Sol, Surf y Brisa Marina!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-93-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-barrio-las-penas-cerro-santa-ana-y-malecon-2000",
    "name": "Barrio Las Peñas, Cerro Santa Ana y Malecón 2000",
    "region": "Costa",
    "province": "Guayas",
    "city": "Guayaquil",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "18 al 19 ene CURRENT_YEAR",
    "availableDates": [
      "18 al 19 ene CURRENT_YEAR",
      "25 al 26 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 31,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guayaquil · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Guayaquil.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-94-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Barrio Las Peñas, Cerro Santa Ana y Malecón 2000!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-94-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-velada-romantica-a-bordo-del-barco-henry-morgan-por-el-rio-guayas",
    "name": "Velada Romántica a Bordo del Barco Henry Morgan por el Río Guayas",
    "region": "Costa",
    "province": "Guayas",
    "city": "Guayaquil",
    "days": "2 días / 1 noche",
    "price": 155,
    "datesText": "20 al 21 feb CURRENT_YEAR",
    "availableDates": [
      "20 al 21 feb CURRENT_YEAR",
      "27 al 28 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 32,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guayaquil · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Guayaquil.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-95-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Velada Romántica a Bordo del Barco Henry Morgan por el Río Guayas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-95-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-parque-historico-de-guayaquil-y-museo-del-cacao",
    "name": "Parque Histórico de Guayaquil y Museo del Cacao",
    "region": "Costa",
    "province": "Guayas",
    "city": "Samborondón",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "22 al 23 nov CURRENT_YEAR",
    "availableDates": [
      "22 al 23 nov CURRENT_YEAR",
      "29 al 30 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 33,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Samborondón · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Samborondón.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-96-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Histórico de Guayaquil y Museo del Cacao!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-96-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-ruta-del-cangrejo-rojo-de-naranjal-y-encebollado-guayaco",
    "name": "Ruta del Cangrejo Rojo de Naranjal y Encebollado Guayaco",
    "region": "Costa",
    "province": "Guayas",
    "city": "Naranjal",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "24 al 25 dic CURRENT_YEAR",
    "availableDates": [
      "24 al 25 dic CURRENT_YEAR",
      "31 al 32 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 34,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Naranjal · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Naranjal.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-97-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Cangrejo Rojo de Naranjal y Encebollado Guayaco!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-97-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-senderismo-ecologico-en-la-cordillera-chongon-colonche",
    "name": "Senderismo Ecológico en la Cordillera Chongón Colonche",
    "region": "Costa",
    "province": "Guayas",
    "city": "Guayaquil",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "11 al 12 ene CURRENT_YEAR",
    "availableDates": [
      "11 al 12 ene CURRENT_YEAR",
      "18 al 19 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 35,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Guayaquil · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Guayaquil.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-98-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Senderismo Ecológico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-98-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-aguas-termales-sulfurosas-y-lodoterapia-en-virgen-del-cisne-naranjal",
    "name": "Aguas Termales Sulfurosas y Lodoterapia en Virgen del Cisne Naranjal",
    "region": "Costa",
    "province": "Guayas",
    "city": "Naranjal",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "13 al 14 feb CURRENT_YEAR",
    "availableDates": [
      "13 al 14 feb CURRENT_YEAR",
      "20 al 21 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 36,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Naranjal · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Naranjal.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-99-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Aguas Termales Sulfurosas y Lodoterapia!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-99-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "guayas-santuario-narcisa-de-jesus-y-tradicion-montuvia-en-nobol-y-daule",
    "name": "Santuario Narcisa de Jesús y Tradición Montuvia en Nobol y Daule",
    "region": "Costa",
    "province": "Guayas",
    "city": "Nobol",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "15 al 16 nov CURRENT_YEAR",
    "availableDates": [
      "15 al 16 nov CURRENT_YEAR",
      "22 al 23 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 12,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Nobol · Bienvenida a Guayas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Nobol.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-100-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Santuario Narcisa de Jesús y Tradición Montuvia!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-100-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-kayak-y-stand-up-paddle-en-laguna-de-san-pablo",
    "name": "Kayak y Stand Up Paddle en Laguna de San Pablo",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Otavalo",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "17 al 18 dic CURRENT_YEAR",
    "availableDates": [
      "17 al 18 dic CURRENT_YEAR",
      "24 al 25 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 13,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Otavalo · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Otavalo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-101-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Kayak y Stand Up Paddle!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-101-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-sendero-sagrado-en-cascada-de-peguche-y-lechero-milenario",
    "name": "Sendero Sagrado en Cascada de Peguche y Lechero Milenario",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Otavalo",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "19 al 20 ene CURRENT_YEAR",
    "availableDates": [
      "19 al 20 ene CURRENT_YEAR",
      "26 al 27 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 14,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Otavalo · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Otavalo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-102-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Sendero Sagrado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-102-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-tranquilidad-y-paseo-en-barco-en-la-mistica-laguna-de-cuicocha",
    "name": "Tranquilidad y Paseo en Barco en la Mística Laguna de Cuicocha",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Cotacachi",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "21 al 22 feb CURRENT_YEAR",
    "availableDates": [
      "21 al 22 feb CURRENT_YEAR",
      "28 al 29 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 15,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cotacachi · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Cotacachi.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-103-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Tranquilidad y Paseo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-103-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-centro-historico-de-la-ciudad-blanca-de-ibarra-y-ferrocarril",
    "name": "Centro Histórico de la Ciudad Blanca de Ibarra y Ferrocarril",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Ibarra",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "23 al 24 nov CURRENT_YEAR",
    "availableDates": [
      "23 al 24 nov CURRENT_YEAR",
      "30 al 31 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 16,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ibarra · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Ibarra.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-104-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Centro Histórico de la Ciudad Blanca de Ibarra y Ferrocarril!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-104-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-escapada-en-hosteria-patrimonial-con-vistas-al-taita-imbabura",
    "name": "Escapada en Hostería Patrimonial con Vistas al Taita Imbabura",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Ibarra",
    "days": "2 días / 1 noche",
    "price": 150,
    "datesText": "10 al 11 dic CURRENT_YEAR",
    "availableDates": [
      "10 al 11 dic CURRENT_YEAR",
      "17 al 18 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 17,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ibarra · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Ibarra.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-105-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Escapada!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-105-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-paseo-familiar-en-tren-de-la-libertad-y-valle-del-chota",
    "name": "Paseo Familiar en Tren de la Libertad y Valle del Chota",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Ibarra",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "12 al 13 ene CURRENT_YEAR",
    "availableDates": [
      "12 al 13 ene CURRENT_YEAR",
      "19 al 20 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 18,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ibarra · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Ibarra.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-106-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-106-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-helados-de-paila-tradicionales-de-ibarra-carnes-coloradas-y-cuy",
    "name": "Helados de Paila Tradicionales de Ibarra, Carnes Coloradas y Cuy",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Cotacachi",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "14 al 15 feb CURRENT_YEAR",
    "availableDates": [
      "14 al 15 feb CURRENT_YEAR",
      "21 al 22 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 19,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cotacachi · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Cotacachi.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-107-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Helados de Paila Tradicionales de Ibarra, Carnes Coloradas y Cuy!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-107-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-ascenso-al-volcan-fuya-fuya-y-lagunas-glaciares-de-mojanda",
    "name": "Ascenso al Volcán Fuya Fuya y Lagunas Glaciares de Mojanda",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Otavalo",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "16 al 17 nov CURRENT_YEAR",
    "availableDates": [
      "16 al 17 nov CURRENT_YEAR",
      "23 al 24 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 20,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Otavalo · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Otavalo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-108-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ascenso al Volcán Fuya Fuya y Lagunas Glaciares de Mojanda!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-108-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-circuito-de-aguas-termales-medicinales-en-chachimbiro",
    "name": "Circuito de Aguas Termales Medicinales en Chachimbiro",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Urcuquí",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "18 al 19 dic CURRENT_YEAR",
    "availableDates": [
      "18 al 19 dic CURRENT_YEAR",
      "25 al 26 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 21,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Urcuquí · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Urcuquí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-109-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Circuito de Aguas Termales Medicinales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-109-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "imbabura-gran-plaza-de-ponchos-de-otavalo-y-tallado-en-madera-de-san-antonio",
    "name": "Gran Plaza de Ponchos de Otavalo y Tallado en Madera de San Antonio",
    "region": "Sierra",
    "province": "Imbabura",
    "city": "Otavalo",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "20 al 21 ene CURRENT_YEAR",
    "availableDates": [
      "20 al 21 ene CURRENT_YEAR",
      "27 al 28 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 22,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Otavalo · Bienvenida a Imbabura",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Otavalo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-110-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Gran Plaza de Ponchos de Otavalo y Tallado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-110-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-escalada-en-la-cumbre-del-cerro-mandango-en-vilcabamba",
    "name": "Escalada en la Cumbre del Cerro Mandango en Vilcabamba",
    "region": "Sierra",
    "province": "Loja",
    "city": "Vilcabamba",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "22 al 23 feb CURRENT_YEAR",
    "availableDates": [
      "22 al 23 feb CURRENT_YEAR",
      "29 al 30 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 23,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Vilcabamba · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Vilcabamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-111-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Escalada!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-111-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-reserva-de-biosfera-podocarpus-y-paramo-de-cajanuma",
    "name": "Reserva de Biósfera Podocarpus y Páramo de Cajanuma",
    "region": "Sierra",
    "province": "Loja",
    "city": "Loja",
    "days": "3 días / 2 noches",
    "price": 155,
    "datesText": "24 al 26 nov CURRENT_YEAR",
    "availableDates": [
      "24 al 26 nov CURRENT_YEAR",
      "31 al 33 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 26,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 24,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Loja · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Loja.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Ecoturismo en Loja",
        "description": "Jornada completa de inmersión en Reserva de Biósfera Podocarpus y Páramo de Cajanuma. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-112-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva de Biósfera Podocarpus y Páramo de Cajanuma!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-112-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-descanso-tropical-y-piscinas-en-el-valle-de-catamayo",
    "name": "Descanso Tropical y Piscinas en el Valle de Catamayo",
    "region": "Sierra",
    "province": "Loja",
    "city": "Catamayo",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "11 al 12 dic CURRENT_YEAR",
    "availableDates": [
      "11 al 12 dic CURRENT_YEAR",
      "18 al 19 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 25,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Catamayo · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Catamayo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-113-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descanso Tropical y Piscinas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-113-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-puerta-de-la-ciudad-calle-lourdes-y-museos-de-la-capital-musical",
    "name": "Puerta de la Ciudad, Calle Lourdes y Museos de la Capital Musical",
    "region": "Sierra",
    "province": "Loja",
    "city": "Loja",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "13 al 14 ene CURRENT_YEAR",
    "availableDates": [
      "13 al 14 ene CURRENT_YEAR",
      "20 al 21 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 26,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Loja · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Loja.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-114-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Puerta de la Ciudad, Calle Lourdes y Museos de la Capital Musical!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-114-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-retiro-de-pareja-en-cabanas-ecologicas-del-valle-de-la-longevidad",
    "name": "Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad",
    "region": "Sierra",
    "province": "Loja",
    "city": "Vilcabamba",
    "days": "3 días / 2 noches",
    "price": 185,
    "datesText": "15 al 17 feb CURRENT_YEAR",
    "availableDates": [
      "15 al 17 feb CURRENT_YEAR",
      "22 al 24 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 17,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 27,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Vilcabamba · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Vilcabamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Vilcabamba",
        "description": "Jornada completa de inmersión en Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-115-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Retiro de Pareja!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-115-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-paseo-familiar-por-el-santuario-del-cisne-y-valle-del-viento",
    "name": "Paseo Familiar por el Santuario del Cisne y Valle del Viento",
    "region": "Sierra",
    "province": "Loja",
    "city": "Loja",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "17 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "17 al 18 nov CURRENT_YEAR",
      "24 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 28,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Loja · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Loja.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-116-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Familiar por el Santuario del Cisne y Valle del Viento!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-116-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-cata-de-cafe-arabigo-de-especialidad-lojano-y-cecina-tradicional",
    "name": "Cata de Café Arábigo de Especialidad Lojano y Cecina Tradicional",
    "region": "Sierra",
    "province": "Loja",
    "city": "Catamayo",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "19 al 20 dic CURRENT_YEAR",
    "availableDates": [
      "19 al 20 dic CURRENT_YEAR",
      "26 al 27 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 29,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Catamayo · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Catamayo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-117-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cata de Café Arábigo de Especialidad Lojano y Cecina Tradicional!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-117-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-trekking-transandino-a-lagunas-del-compadre-en-podocarpus",
    "name": "Trekking Transandino a Lagunas del Compadre en Podocarpus",
    "region": "Sierra",
    "province": "Loja",
    "city": "Loja",
    "days": "3 días / 2 noches",
    "price": 175,
    "datesText": "21 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "21 al 23 ene CURRENT_YEAR",
      "28 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 30,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Loja · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Loja.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Loja",
        "description": "Jornada completa de inmersión en Trekking Transandino a Lagunas del Compadre en Podocarpus. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-118-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking Transandino a Lagunas del Compadre!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-118-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-terapias-holisticas-yoga-y-banos-desintoxicantes-en-vilcabamba",
    "name": "Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba",
    "region": "Sierra",
    "province": "Loja",
    "city": "Vilcabamba",
    "days": "3 días / 2 noches",
    "price": 160,
    "datesText": "23 al 25 feb CURRENT_YEAR",
    "availableDates": [
      "23 al 25 feb CURRENT_YEAR",
      "30 al 32 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 25,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 31,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Vilcabamba · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Vilcabamba.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Bienestar y Spa en Vilcabamba",
        "description": "Jornada completa de inmersión en Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-119-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Terapias Holísticas, Yoga y Baños Desintoxicantes!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-119-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "loja-cultura-viva-del-pueblo-saraguro-banos-de-purificacion-y-talleres",
    "name": "Cultura Viva del Pueblo Saraguro, Baños de Purificación y Talleres",
    "region": "Sierra",
    "province": "Loja",
    "city": "Saraguro",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "10 al 11 nov CURRENT_YEAR",
    "availableDates": [
      "10 al 11 nov CURRENT_YEAR",
      "17 al 18 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 32,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Saraguro · Bienvenida a Loja",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Saraguro.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-120-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cultura Viva del Pueblo Saraguro, Baños de Purificación y Talleres!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-120-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-rafting-y-tubing-en-los-rapidos-del-rio-cristal-en-montalvo",
    "name": "Rafting y Tubing en los Rápidos del Río Cristal en Montalvo",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Montalvo",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "12 al 13 dic CURRENT_YEAR",
    "availableDates": [
      "12 al 13 dic CURRENT_YEAR",
      "19 al 20 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 33,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Montalvo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Montalvo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-121-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Rafting y Tubing!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-121-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-humedal-abras-de-mantequilla-y-observacion-de-aves-acuaticas",
    "name": "Humedal Abras de Mantequilla y Observación de Aves Acuáticas",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Vinces",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "14 al 15 ene CURRENT_YEAR",
    "availableDates": [
      "14 al 15 ene CURRENT_YEAR",
      "21 al 22 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 34,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Vinces · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Vinces.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-122-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Humedal Abras de Mantequilla y Observación de Aves Acuáticas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-122-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-balneario-fluvial-la-playita-y-paseo-nautico-en-babahoyo",
    "name": "Balneario Fluvial La Playita y Paseo Náutico en Babahoyo",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Babahoyo",
    "days": "2 días / 1 noche",
    "price": 80,
    "datesText": "16 al 17 feb CURRENT_YEAR",
    "availableDates": [
      "16 al 17 feb CURRENT_YEAR",
      "23 al 24 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 35,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Babahoyo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Babahoyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-123-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Balneario Fluvial La Playita y Paseo Náutico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-123-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-casas-flotantes-patrimoniales-sobre-el-rio-babahoyo",
    "name": "Casas Flotantes Patrimoniales sobre el Río Babahoyo",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Babahoyo",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "18 al 19 nov CURRENT_YEAR",
    "availableDates": [
      "18 al 19 nov CURRENT_YEAR",
      "25 al 26 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 36,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Babahoyo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Babahoyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-124-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Casas Flotantes Patrimoniales sobre el Río Babahoyo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-124-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-romance-en-hacienda-cacaotera-tradicional-de-paris-chiquito",
    "name": "Romance en Hacienda Cacaotera Tradicional de París Chiquito",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Vinces",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "20 al 21 dic CURRENT_YEAR",
    "availableDates": [
      "20 al 21 dic CURRENT_YEAR",
      "27 al 28 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 12,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Vinces · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Vinces.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-125-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Romance!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-125-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-parque-acuatico-la-perla-y-recreacion-campestre-en-quevedo",
    "name": "Parque Acuático La Perla y Recreación Campestre en Quevedo",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Quevedo",
    "days": "2 días / 1 noche",
    "price": 80,
    "datesText": "22 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "22 al 23 ene CURRENT_YEAR",
      "29 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 13,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quevedo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Quevedo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-126-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Acuático La Perla y Recreación Campestre!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-126-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-ruta-del-cacao-fino-de-aroma-nacional-y-gastronomia-chino-montuvia",
    "name": "Ruta del Cacao Fino de Aroma Nacional y Gastronomía Chino-Montuvia",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Quevedo",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "24 al 25 feb CURRENT_YEAR",
    "availableDates": [
      "24 al 25 feb CURRENT_YEAR",
      "31 al 32 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 14,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quevedo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Quevedo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-127-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Cacao Fino de Aroma Nacional y Gastronomía Chino-Montuvia!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-127-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-sendero-agroecologico-entre-plantaciones-de-banano-y-bosques",
    "name": "Sendero Agroecológico entre Plantaciones de Banano y Bosques",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Ventanas",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "11 al 12 nov CURRENT_YEAR",
    "availableDates": [
      "11 al 12 nov CURRENT_YEAR",
      "18 al 19 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 15,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ventanas · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Ventanas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-128-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Sendero Agroecológico entre Plantaciones de Banano y Bosques!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-128-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-spa-campestre-con-chocolaterapia-y-aguas-de-vertiente",
    "name": "Spa Campestre con Chocolaterapia y Aguas de Vertiente",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Montalvo",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "13 al 14 dic CURRENT_YEAR",
    "availableDates": [
      "13 al 14 dic CURRENT_YEAR",
      "20 al 21 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 16,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Montalvo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Montalvo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-129-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Spa Campestre con Chocolaterapia y Aguas de Vertiente!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-129-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "los-rios-rodeo-montuvio-tradicional-amorfino-y-costumbres-campesinas",
    "name": "Rodeo Montuvio Tradicional, Amorfino y Costumbres Campesinas",
    "region": "Costa",
    "province": "Los Ríos",
    "city": "Babahoyo",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "15 al 16 ene CURRENT_YEAR",
    "availableDates": [
      "15 al 16 ene CURRENT_YEAR",
      "22 al 23 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 17,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Babahoyo · Bienvenida a Los Ríos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Babahoyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-130-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Rodeo Montuvio Tradicional, Amorfino y Costumbres Campesinas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-130-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-parapente-sobre-el-acantilado-de-crucita-y-kitesurf",
    "name": "Parapente sobre el Acantilado de Crucita y Kitesurf",
    "region": "Costa",
    "province": "Manabí",
    "city": "Portoviejo",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "17 al 18 feb CURRENT_YEAR",
    "availableDates": [
      "17 al 18 feb CURRENT_YEAR",
      "24 al 25 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 18,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Portoviejo · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Portoviejo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-131-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parapente sobre el Acantilado de Crucita y Kitesurf!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-131-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-avistamiento-de-ballenas-jorobadas-en-parque-nacional-machalilla",
    "name": "Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla",
    "region": "Costa",
    "province": "Manabí",
    "city": "Puerto López",
    "days": "3 días / 2 noches",
    "price": 185,
    "datesText": "19 al 21 nov CURRENT_YEAR",
    "availableDates": [
      "19 al 21 nov CURRENT_YEAR",
      "26 al 28 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 21,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 19,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto López · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Puerto López.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Ecoturismo en Puerto López",
        "description": "Jornada completa de inmersión en Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-132-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Avistamiento de Ballenas Jorobadas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-132-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-arenas-doradas-y-aguas-turquesas-en-playa-los-frailes",
    "name": "Arenas Doradas y Aguas Turquesas en Playa Los Frailes",
    "region": "Costa",
    "province": "Manabí",
    "city": "Puerto López",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "21 al 22 dic CURRENT_YEAR",
    "availableDates": [
      "21 al 22 dic CURRENT_YEAR",
      "28 al 29 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 20,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto López · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Puerto López.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-133-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Arenas Doradas y Aguas Turquesas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-133-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-cuna-del-sombrero-fino-de-paja-toquilla-en-montecristi",
    "name": "Cuna del Sombrero Fino de Paja Toquilla en Montecristi",
    "region": "Costa",
    "province": "Manabí",
    "city": "Montecristi",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "23 al 24 ene CURRENT_YEAR",
    "availableDates": [
      "23 al 24 ene CURRENT_YEAR",
      "30 al 31 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 21,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Montecristi · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Montecristi.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-134-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cuna del Sombrero Fino de Paja Toquilla!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-134-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-atardeceres-romanticos-en-los-farallones-de-canoa-y-bahia",
    "name": "Atardeceres Románticos en los Farallones de Canoa y Bahía",
    "region": "Costa",
    "province": "Manabí",
    "city": "Canoa",
    "days": "3 días / 2 noches",
    "price": 175,
    "datesText": "10 al 12 feb CURRENT_YEAR",
    "availableDates": [
      "10 al 12 feb CURRENT_YEAR",
      "17 al 19 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 12,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 22,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Canoa · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Canoa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Canoa",
        "description": "Jornada completa de inmersión en Atardeceres Románticos en los Farallones de Canoa y Bahía. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-135-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Atardeceres Románticos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-135-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-paseo-familiar-en-el-malecon-escenico-de-manta-y-playa-el-murcielago",
    "name": "Paseo Familiar en el Malecón Escénico de Manta y Playa El Murciélago",
    "region": "Costa",
    "province": "Manabí",
    "city": "Manta",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "12 al 13 nov CURRENT_YEAR",
    "availableDates": [
      "12 al 13 nov CURRENT_YEAR",
      "19 al 20 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 23,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Manta · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Manta.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-136-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-136-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-ruta-gastronomica-del-viche-ceviche-con-mani-y-salprieta-manabita",
    "name": "Ruta Gastronómica del Viche, Ceviche con Maní y Salprieta Manabita",
    "region": "Costa",
    "province": "Manabí",
    "city": "Portoviejo",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "14 al 15 dic CURRENT_YEAR",
    "availableDates": [
      "14 al 15 dic CURRENT_YEAR",
      "21 al 22 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 24,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Portoviejo · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Portoviejo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-137-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta Gastronómica del Viche, Ceviche con Maní y Salprieta Manabita!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-137-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-trekking-por-la-selva-humeda-de-pacoche-y-monos-aulladores",
    "name": "Trekking por la Selva Húmeda de Pacoche y Monos Aulladores",
    "region": "Costa",
    "province": "Manabí",
    "city": "Manta",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "16 al 17 ene CURRENT_YEAR",
    "availableDates": [
      "16 al 17 ene CURRENT_YEAR",
      "23 al 24 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 25,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Manta · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Manta.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-138-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking por la Selva Húmeda de Pacoche y Monos Aulladores!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-138-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-banos-de-lodo-curativo-y-masajes-termales-en-san-vicente",
    "name": "Baños de Lodo Curativo y Masajes Termales en San Vicente",
    "region": "Costa",
    "province": "Manabí",
    "city": "San Vicente",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "18 al 19 feb CURRENT_YEAR",
    "availableDates": [
      "18 al 19 feb CURRENT_YEAR",
      "25 al 26 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 26,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a San Vicente · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de San Vicente.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-139-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Baños de Lodo Curativo y Masajes Termales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-139-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "manabi-comunidad-ancestral-de-agua-blanca-y-poza-sulfurosa-sagrada",
    "name": "Comunidad Ancestral de Agua Blanca y Poza Sulfurosa Sagrada",
    "region": "Costa",
    "province": "Manabí",
    "city": "Puerto López",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "20 al 21 nov CURRENT_YEAR",
    "availableDates": [
      "20 al 21 nov CURRENT_YEAR",
      "27 al 28 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 27,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto López · Bienvenida a Manabí",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Puerto López.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-140-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Comunidad Ancestral de Agua Blanca y Poza Sulfurosa Sagrada!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-140-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-expedicion-extrema-a-la-cueva-de-los-tayos",
    "name": "Expedición Extrema a la Cueva de los Tayos",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Limón Indanza",
    "days": "4 días / 3 noches",
    "price": 340,
    "datesText": "22 al 25 dic CURRENT_YEAR",
    "availableDates": [
      "22 al 25 dic CURRENT_YEAR",
      "29 al 32 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 25,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 28,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Limón Indanza · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Limón Indanza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Limón Indanza",
        "description": "Jornada completa de inmersión en Expedición Extrema a la Cueva de los Tayos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Aventura en Limón Indanza",
        "description": "Jornada completa de inmersión en Expedición Extrema a la Cueva de los Tayos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-141-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Expedición Extrema a la Cueva de los Tayos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-141-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-cascadas-magicas-del-kintia-panki-y-bosque-amazonico",
    "name": "Cascadas Mágicas del Kintia Panki y Bosque Amazónico",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Sucúa",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "24 al 25 ene CURRENT_YEAR",
    "availableDates": [
      "24 al 25 ene CURRENT_YEAR",
      "31 al 32 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 29,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Sucúa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-142-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cascadas Mágicas del Kintia Panki y Bosque Amazónico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-142-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-laguna-de-sardinayacu-y-descanso-fluvial-en-macas",
    "name": "Laguna de Sardinayacu y Descanso Fluvial en Macas",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Macas",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "11 al 12 feb CURRENT_YEAR",
    "availableDates": [
      "11 al 12 feb CURRENT_YEAR",
      "18 al 19 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 30,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Macas · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Macas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-143-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Laguna de Sardinayacu y Descanso Fluvial!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-143-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-catedral-de-la-purisima-de-macas-y-petroglifos-ancestrales",
    "name": "Catedral de la Purísima de Macas y Petroglifos Ancestrales",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Macas",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "13 al 14 nov CURRENT_YEAR",
    "availableDates": [
      "13 al 14 nov CURRENT_YEAR",
      "20 al 21 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 31,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Macas · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Macas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-144-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Catedral de la Purísima de Macas y Petroglifos Ancestrales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-144-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-cabana-selva-virgen-con-vista-al-volcan-sangay-activo",
    "name": "Cabaña Selva Virgen con Vista al Volcán Sangay Activo",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Macas",
    "days": "3 días / 2 noches",
    "price": 195,
    "datesText": "15 al 17 dic CURRENT_YEAR",
    "availableDates": [
      "15 al 17 dic CURRENT_YEAR",
      "22 al 24 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 17,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 32,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Macas · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Macas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Macas",
        "description": "Jornada completa de inmersión en Cabaña Selva Virgen con Vista al Volcán Sangay Activo. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-145-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabaña Selva Virgen con Vista al Volcán Sangay Activo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-145-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-parque-ecologico-y-balneario-natural-del-rio-upano",
    "name": "Parque Ecológico y Balneario Natural del Río Upano",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Sucúa",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "17 al 18 ene CURRENT_YEAR",
    "availableDates": [
      "17 al 18 ene CURRENT_YEAR",
      "24 al 25 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 33,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Sucúa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-146-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Ecológico y Balneario Natural del Río Upano!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-146-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-degustacion-de-ayampaco-amazonico-de-tilapia-y-chicha-de-chonta",
    "name": "Degustación de Ayampaco Amazónico de Tilapia y Chicha de Chonta",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Macas",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "19 al 20 feb CURRENT_YEAR",
    "availableDates": [
      "19 al 20 feb CURRENT_YEAR",
      "26 al 27 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 34,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Macas · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Macas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-147-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Degustación de Ayampaco Amazónico de Tilapia y Chicha de Chonta!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-147-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-trekking-hacia-las-cascadas-sagradas-del-rio-namakim",
    "name": "Trekking Hacia las Cascadas Sagradas del Río Namakim",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Gualaquiza",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "21 al 22 nov CURRENT_YEAR",
    "availableDates": [
      "21 al 22 nov CURRENT_YEAR",
      "28 al 29 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 35,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Gualaquiza · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Gualaquiza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-148-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking Hacia las Cascadas Sagradas del Río Namakim!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-148-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-banos-de-vapor-con-hierbas-medicinales-amazonicas-en-sucua",
    "name": "Baños de Vapor con Hierbas Medicinales Amazónicas en Sucúa",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Sucúa",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "23 al 24 dic CURRENT_YEAR",
    "availableDates": [
      "23 al 24 dic CURRENT_YEAR",
      "30 al 31 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 36,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Sucúa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-149-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Baños de Vapor con Hierbas Medicinales Amazónicas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-149-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "morona-santiago-convivencia-con-la-nacionalidad-shuar-y-ritos-ancestrales-de-fuerza",
    "name": "Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza",
    "region": "Amazonía",
    "province": "Morona Santiago",
    "city": "Sucúa",
    "days": "3 días / 2 noches",
    "price": 160,
    "datesText": "10 al 12 ene CURRENT_YEAR",
    "availableDates": [
      "10 al 12 ene CURRENT_YEAR",
      "17 al 19 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 12,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 12,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Sucúa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Turismo Comunitario en Sucúa",
        "description": "Jornada completa de inmersión en Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-150-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-150-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-rafting-clase-iv-en-rio-jatunyacu-y-tubing-en-tena",
    "name": "Rafting Clase IV en Río Jatunyacu y Tubing en Tena",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Tena",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "12 al 13 feb CURRENT_YEAR",
    "availableDates": [
      "12 al 13 feb CURRENT_YEAR",
      "19 al 20 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 13,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Tena · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Tena.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-151-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Rafting Clase IV!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-151-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-cavernas-de-jumandy-y-laberintos-subterraneos-de-archidona",
    "name": "Cavernas de Jumandy y Laberintos Subterráneos de Archidona",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Archidona",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "14 al 15 nov CURRENT_YEAR",
    "availableDates": [
      "14 al 15 nov CURRENT_YEAR",
      "21 al 22 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 14,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Archidona · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Archidona.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-152-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cavernas de Jumandy y Laberintos Subterráneos de Archidona!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-152-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-playas-de-agua-dulce-del-rio-misahualli-y-monos-capuchinos",
    "name": "Playas de Agua Dulce del Río Misahuallí y Monos Capuchinos",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Misahuallí",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "16 al 17 dic CURRENT_YEAR",
    "availableDates": [
      "16 al 17 dic CURRENT_YEAR",
      "23 al 24 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 15,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Misahuallí · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Misahuallí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-153-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Playas de Agua Dulce del Río Misahuallí y Monos Capuchinos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-153-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-pueblo-patrimonial-de-baeza-vieja-y-ruta-de-la-canela",
    "name": "Pueblo Patrimonial de Baeza Vieja y Ruta de la Canela",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Baeza",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "18 al 19 ene CURRENT_YEAR",
    "availableDates": [
      "18 al 19 ene CURRENT_YEAR",
      "25 al 26 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 16,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baeza · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Baeza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-154-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Pueblo Patrimonial de Baeza Vieja y Ruta de la Canela!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-154-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-domo-romantico-en-la-reserva-ecologica-cayambe-coca",
    "name": "Domo Romántico en la Reserva Ecológica Cayambe-Coca",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Papallacta",
    "days": "2 días / 1 noche",
    "price": 175,
    "datesText": "20 al 21 feb CURRENT_YEAR",
    "availableDates": [
      "20 al 21 feb CURRENT_YEAR",
      "27 al 28 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 17,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Papallacta · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Papallacta.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-155-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Domo Romántico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-155-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-visita-al-centro-de-rescate-de-fauna-silvestre-amazoonico",
    "name": "Visita al Centro de Rescate de Fauna Silvestre amaZOOnico",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Misahuallí",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "22 al 23 nov CURRENT_YEAR",
    "availableDates": [
      "22 al 23 nov CURRENT_YEAR",
      "29 al 30 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 18,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Misahuallí · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Misahuallí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-156-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Visita al Centro de Rescate de Fauna Silvestre amaZOOnico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-156-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-cata-de-chocolate-kallari-fino-de-aroma-y-maito-de-carachama",
    "name": "Cata de Chocolate Kallari Fino de Aroma y Maito de Carachama",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Tena",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "24 al 25 dic CURRENT_YEAR",
    "availableDates": [
      "24 al 25 dic CURRENT_YEAR",
      "31 al 32 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 19,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Tena · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Tena.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-157-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cata de Chocolate Kallari Fino de Aroma y Maito de Carachama!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-157-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-trekking-a-la-cascada-san-rafael-y-canon-del-quijos",
    "name": "Trekking a la Cascada San Rafael y Cañón del Quijos",
    "region": "Amazonía",
    "province": "Napo",
    "city": "El Chaco",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "11 al 12 ene CURRENT_YEAR",
    "availableDates": [
      "11 al 12 ene CURRENT_YEAR",
      "18 al 19 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 20,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a El Chaco · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de El Chaco.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-158-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking a la Cascada San Rafael y Cañón del Quijos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-158-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-circuito-termal-exclusivo-y-spa-andino-en-papallacta",
    "name": "Circuito Termal Exclusivo y Spa Andino en Papallacta",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Papallacta",
    "days": "2 días / 1 noche",
    "price": 155,
    "datesText": "13 al 14 feb CURRENT_YEAR",
    "availableDates": [
      "13 al 14 feb CURRENT_YEAR",
      "20 al 21 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 21,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Papallacta · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Papallacta.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-159-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Circuito Termal Exclusivo y Spa Andino!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-159-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "napo-comunidad-kichwa-shiripuno-danza-artesanias-y-plantas-medicinales",
    "name": "Comunidad Kichwa Shiripuno: Danza, Artesanías y Plantas Medicinales",
    "region": "Amazonía",
    "province": "Napo",
    "city": "Misahuallí",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "15 al 16 nov CURRENT_YEAR",
    "availableDates": [
      "15 al 16 nov CURRENT_YEAR",
      "22 al 23 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 22,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Misahuallí · Bienvenida a Napo",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Misahuallí.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-160-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Comunidad Kichwa Shiripuno: Danza, Artesanías y Plantas Medicinales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-160-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-expedicion-en-kayak-por-afluentes-profundos-del-rio-napo",
    "name": "Expedición en Kayak por Afluentes Profundos del Río Napo",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Puerto Francisco de Orellana (El Coca)",
    "days": "3 días / 2 noches",
    "price": 235,
    "datesText": "17 al 19 dic CURRENT_YEAR",
    "availableDates": [
      "17 al 19 dic CURRENT_YEAR",
      "24 al 26 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 19,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 23,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Puerto Francisco de Orellana (El Coca)",
        "description": "Jornada completa de inmersión en Expedición en Kayak por Afluentes Profundos del Río Napo. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-161-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Expedición!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-161-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-torre-de-observacion-del-dosel-en-la-biosfera-del-parque-nacional-yasuni",
    "name": "Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Parque Nacional Yasuní",
    "days": "4 días / 3 noches",
    "price": 420,
    "datesText": "19 al 22 ene CURRENT_YEAR",
    "availableDates": [
      "19 al 22 ene CURRENT_YEAR",
      "26 al 29 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 22,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 24,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Ecoturismo en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Ecoturismo en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-162-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Torre de Observación del Dosel!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-162-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-paseo-en-canoa-a-motor-y-playas-fluviales-del-rio-payamino",
    "name": "Paseo en Canoa a Motor y Playas Fluviales del Río Payamino",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Puerto Francisco de Orellana (El Coca)",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "21 al 22 feb CURRENT_YEAR",
    "availableDates": [
      "21 al 22 feb CURRENT_YEAR",
      "28 al 29 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 25,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-163-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-163-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-museo-arqueologico-macco-y-culturas-riberenas-de-orellana",
    "name": "Museo Arqueológico MACCO y Culturas Ribereñas de Orellana",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Puerto Francisco de Orellana (El Coca)",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "23 al 24 nov CURRENT_YEAR",
    "availableDates": [
      "23 al 24 nov CURRENT_YEAR",
      "30 al 31 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 26,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-164-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Museo Arqueológico MACCO y Culturas Ribereñas de Orellana!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-164-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-ecolodge-flotante-en-laguna-anangu-para-luna-de-miel",
    "name": "Ecolodge Flotante en Laguna Añangu para Luna de Miel",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Parque Nacional Yasuní",
    "days": "4 días / 3 noches",
    "price": 490,
    "datesText": "10 al 13 dic CURRENT_YEAR",
    "availableDates": [
      "10 al 13 dic CURRENT_YEAR",
      "17 al 20 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 13,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 27,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Ecolodge Flotante en Laguna Añangu para Luna de Miel. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Romántico en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Ecolodge Flotante en Laguna Añangu para Luna de Miel. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-165-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ecolodge Flotante!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-165-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-safari-de-monos-guacamayos-y-saladeros-de-arcilla",
    "name": "Safari de Monos, Guacamayos y Saladeros de Arcilla",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Parque Nacional Yasuní",
    "days": "3 días / 2 noches",
    "price": 310,
    "datesText": "12 al 14 ene CURRENT_YEAR",
    "availableDates": [
      "12 al 14 ene CURRENT_YEAR",
      "19 al 21 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 14,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 28,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Familiar en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Safari de Monos, Guacamayos y Saladeros de Arcilla. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-166-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Safari de Monos, Guacamayos y Saladeros de Arcilla!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-166-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-degustacion-de-gusanos-de-chonta-chontacuro-y-pescado-al-vapor",
    "name": "Degustación de Gusanos de Chonta (Chontacuro) y Pescado al Vapor",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Puerto Francisco de Orellana (El Coca)",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "14 al 15 feb CURRENT_YEAR",
    "availableDates": [
      "14 al 15 feb CURRENT_YEAR",
      "21 al 22 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 29,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-167-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Degustación de Gusanos de Chonta (Chontacuro) y Pescado al Vapor!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-167-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-trekking-nocturno-en-la-selva-primaria-y-busqueda-de-ranas-cristal",
    "name": "Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Loreto",
    "days": "3 días / 2 noches",
    "price": 185,
    "datesText": "16 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "16 al 18 nov CURRENT_YEAR",
      "23 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 30,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Loreto · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Loreto.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Loreto",
        "description": "Jornada completa de inmersión en Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-168-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking Nocturno!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-168-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-tratamiento-de-relajacion-con-lodo-de-rio-y-esencias-selvaticas",
    "name": "Tratamiento de Relajación con Lodo de Río y Esencias Selváticas",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Puerto Francisco de Orellana (El Coca)",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "18 al 19 dic CURRENT_YEAR",
    "availableDates": [
      "18 al 19 dic CURRENT_YEAR",
      "25 al 26 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 31,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-169-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Tratamiento de Relajación con Lodo de Río y Esencias Selváticas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-169-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "orellana-convivencia-con-la-nacionalidad-waorani-en-territorio-ancestral",
    "name": "Convivencia con la Nacionalidad Waorani en Territorio Ancestral",
    "region": "Amazonía",
    "province": "Orellana",
    "city": "Parque Nacional Yasuní",
    "days": "4 días / 3 noches",
    "price": 410,
    "datesText": "20 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "20 al 23 ene CURRENT_YEAR",
      "27 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 32,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Turismo Comunitario en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Convivencia con la Nacionalidad Waorani en Territorio Ancestral. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Turismo Comunitario en Parque Nacional Yasuní",
        "description": "Jornada completa de inmersión en Convivencia con la Nacionalidad Waorani en Territorio Ancestral. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-170-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Convivencia con la Nacionalidad Waorani!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-170-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-salto-del-rio-y-canyoning-en-la-cascada-hola-vida",
    "name": "Salto del Río y Canyoning en la Cascada Hola Vida",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Puyo",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "22 al 23 feb CURRENT_YEAR",
    "availableDates": [
      "22 al 23 feb CURRENT_YEAR",
      "29 al 30 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 33,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puyo · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Puyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-171-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Salto del Río y Canyoning!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-171-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-reserva-biologica-yanacocha-y-jardin-botanico-las-orquideas",
    "name": "Reserva Biológica Yanacocha y Jardín Botánico Las Orquídeas",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Puyo",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "24 al 25 nov CURRENT_YEAR",
    "availableDates": [
      "24 al 25 nov CURRENT_YEAR",
      "31 al 32 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 34,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puyo · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Puyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-172-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva Biológica Yanacocha y Jardín Botánico Las Orquídeas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-172-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-paseo-fluvial-y-tranquilidad-en-laguna-de-tarabita-mera",
    "name": "Paseo Fluvial y Tranquilidad en Laguna de Tarabita Mera",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Mera",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "11 al 12 dic CURRENT_YEAR",
    "availableDates": [
      "11 al 12 dic CURRENT_YEAR",
      "18 al 19 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 35,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mera · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Mera.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-173-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Fluvial y Tranquilidad!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-173-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-historia-de-la-aviacion-misionera-en-shell-y-museo-amazonico",
    "name": "Historia de la Aviación Misionera en Shell y Museo Amazónico",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Shell",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "13 al 14 ene CURRENT_YEAR",
    "availableDates": [
      "13 al 14 ene CURRENT_YEAR",
      "20 al 21 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 36,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Shell · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Shell.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-174-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Historia de la Aviación Misionera!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-174-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-cabana-nido-sobre-la-selva-con-mirador-indichuris-al-ocaso",
    "name": "Cabaña Nido sobre la Selva con Mirador Indichuris al Ocaso",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Puyo",
    "days": "2 días / 1 noche",
    "price": 155,
    "datesText": "15 al 16 feb CURRENT_YEAR",
    "availableDates": [
      "15 al 16 feb CURRENT_YEAR",
      "22 al 23 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 12,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puyo · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Puyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-175-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabaña Nido sobre la Selva con Mirador Indichuris al Ocaso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-175-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-paseo-en-canoa-familiar-y-parque-tematico-omaere",
    "name": "Paseo en Canoa Familiar y Parque Temático Omaere",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Puyo",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "17 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "17 al 18 nov CURRENT_YEAR",
      "24 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 13,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puyo · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Puyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-176-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-176-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-ruta-de-la-ilex-guayusa-ceviche-volquetero-y-maito-de-tilapia",
    "name": "Ruta de la Ilex Guayusa, Ceviche Volquetero y Maito de Tilapia",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Puyo",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "19 al 20 dic CURRENT_YEAR",
    "availableDates": [
      "19 al 20 dic CURRENT_YEAR",
      "26 al 27 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 14,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Puyo · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Puyo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-177-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de la Ilex Guayusa, Ceviche Volquetero y Maito de Tilapia!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-177-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-trekking-a-la-selva-virgen-de-canelos-y-miradores-panoramicos",
    "name": "Trekking a la Selva Virgen de Canelos y Miradores Panorámicos",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Canelos",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "21 al 22 ene CURRENT_YEAR",
    "availableDates": [
      "21 al 22 ene CURRENT_YEAR",
      "28 al 29 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 15,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Canelos · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Canelos.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-178-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking a la Selva Virgen de Canelos y Miradores Panorámicos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-178-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-banos-de-bosque-shinrin-yoku-y-masajes-con-arcilla-amazonica",
    "name": "Baños de Bosque (Shinrin-Yoku) y Masajes con Arcilla Amazónica",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Mera",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "23 al 24 feb CURRENT_YEAR",
    "availableDates": [
      "23 al 24 feb CURRENT_YEAR",
      "30 al 31 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 16,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mera · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Mera.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-179-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Baños de Bosque (Shinrin-Yoku) y Masajes con Arcilla Amazónica!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-179-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pastaza-alfareria-indigena-y-tradiciones-kichwa-de-canelos",
    "name": "Alfarería Indígena y Tradiciones Kichwa de Canelos",
    "region": "Amazonía",
    "province": "Pastaza",
    "city": "Canelos",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "10 al 11 nov CURRENT_YEAR",
    "availableDates": [
      "10 al 11 nov CURRENT_YEAR",
      "17 al 18 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 17,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Canelos · Bienvenida a Pastaza",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Canelos.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-180-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Alfarería Indígena y Tradiciones Kichwa de Canelos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-180-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-canopy-de-10-cables-y-tubing-en-el-bosque-protector-mindo",
    "name": "Canopy de 10 Cables y Tubing en el Bosque Protector Mindo",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Mindo",
    "days": "2 días / 1 noche",
    "price": 125,
    "datesText": "12 al 13 dic CURRENT_YEAR",
    "availableDates": [
      "12 al 13 dic CURRENT_YEAR",
      "19 al 20 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 18,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mindo · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Mindo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-181-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Canopy de 10 Cables y Tubing!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-181-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-ruta-de-los-colibries-y-jardin-de-mariposas-en-mindo-nambillo",
    "name": "Ruta de los Colibríes y Jardín de Mariposas en Mindo Nambillo",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Mindo",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "14 al 15 ene CURRENT_YEAR",
    "availableDates": [
      "14 al 15 ene CURRENT_YEAR",
      "21 al 22 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 19,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Mindo · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Mindo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-182-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de los Colibríes y Jardín de Mariposas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-182-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-piscinas-naturales-y-cascadas-verdes-de-pedro-vicente-maldonado",
    "name": "Piscinas Naturales y Cascadas Verdes de Pedro Vicente Maldonado",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Pedro Vicente Maldonado",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "16 al 17 feb CURRENT_YEAR",
    "availableDates": [
      "16 al 17 feb CURRENT_YEAR",
      "23 al 24 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 20,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Pedro Vicente Maldonado · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Pedro Vicente Maldonado.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-183-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Piscinas Naturales y Cascadas Verdes de Pedro Vicente Maldonado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-183-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-quito-colonial-convento-de-san-francisco-y-mitad-del-mundo",
    "name": "Quito Colonial, Convento de San Francisco y Mitad del Mundo",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Quito",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "18 al 19 nov CURRENT_YEAR",
    "availableDates": [
      "18 al 19 nov CURRENT_YEAR",
      "25 al 26 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 21,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quito · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Quito.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-184-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Quito Colonial, Convento de San Francisco y Mitad del Mundo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-184-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-glamping-exclusivo-con-vistas-al-volcan-rucu-pichincha-y-fogata",
    "name": "Glamping Exclusivo con Vistas al Volcán Rucu Pichincha y Fogata",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Quito",
    "days": "2 días / 1 noche",
    "price": 175,
    "datesText": "20 al 21 dic CURRENT_YEAR",
    "availableDates": [
      "20 al 21 dic CURRENT_YEAR",
      "27 al 28 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 22,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quito · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Quito.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-185-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Glamping Exclusivo con Vistas al Volcán Rucu Pichincha y Fogata!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-185-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-teleferico-de-quito-parque-vulqano-y-granja-de-machachi",
    "name": "Teleférico de Quito, Parque Vulqano y Granja de Machachi",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Quito",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "22 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "22 al 23 ene CURRENT_YEAR",
      "29 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 23,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quito · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Quito.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-186-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Teleférico de Quito, Parque Vulqano y Granja de Machachi!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-186-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-ruta-de-los-bizcochos-de-cayambe-queso-de-hoja-y-hornado-de-sangolqui",
    "name": "Ruta de los Bizcochos de Cayambe, Queso de Hoja y Hornado de Sangolquí",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Cayambe",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "24 al 25 feb CURRENT_YEAR",
    "availableDates": [
      "24 al 25 feb CURRENT_YEAR",
      "31 al 32 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 24,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cayambe · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Cayambe.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-187-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de los Bizcochos de Cayambe, Queso de Hoja y Hornado de Sangolquí!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-187-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-ascenso-de-aclimatacion-a-las-cumbres-del-rucu-pichincha-e-ilalo",
    "name": "Ascenso de Aclimatación a las Cumbres del Rucu Pichincha e Ilaló",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Quito",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "11 al 12 nov CURRENT_YEAR",
    "availableDates": [
      "11 al 12 nov CURRENT_YEAR",
      "18 al 19 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 25,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quito · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Quito.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-188-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ascenso de Aclimatación a las Cumbres del Rucu Pichincha e Ilaló!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-188-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-spa-de-altura-con-tratamiento-de-chocolate-y-sauna-andino",
    "name": "Spa de Altura con Tratamiento de Chocolate y Sauna Andino",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Quito",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "13 al 14 dic CURRENT_YEAR",
    "availableDates": [
      "13 al 14 dic CURRENT_YEAR",
      "20 al 21 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 26,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quito · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Quito.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-189-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Spa de Altura con Tratamiento de Chocolate y Sauna Andino!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-189-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "pichincha-comunidad-yunguilla-turismo-sostenible-mermeladas-y-quesos",
    "name": "Comunidad Yunguilla: Turismo Sostenible, Mermeladas y Quesos",
    "region": "Sierra",
    "province": "Pichincha",
    "city": "Quito",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "15 al 16 ene CURRENT_YEAR",
    "availableDates": [
      "15 al 16 ene CURRENT_YEAR",
      "22 al 23 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 27,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Quito · Bienvenida a Pichincha",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Quito.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-190-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Comunidad Yunguilla: Turismo Sostenible, Mermeladas y Quesos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-190-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-bautizo-de-buceo-y-snorkel-en-el-islote-el-pelado-de-ayangue",
    "name": "Bautizo de Buceo y Snorkel en el Islote El Pelado de Ayangue",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Ayangue",
    "days": "2 días / 1 noche",
    "price": 145,
    "datesText": "17 al 18 feb CURRENT_YEAR",
    "availableDates": [
      "17 al 18 feb CURRENT_YEAR",
      "24 al 25 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 28,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ayangue · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Ayangue.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-191-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Bautizo de Buceo y Snorkel!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-191-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-avistamiento-de-lobos-marinos-y-piqueros-en-la-chocolatera",
    "name": "Avistamiento de Lobos Marinos y Piqueros en La Chocolatera",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Salinas",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "19 al 20 nov CURRENT_YEAR",
    "availableDates": [
      "19 al 20 nov CURRENT_YEAR",
      "26 al 27 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 29,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Salinas · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Salinas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-192-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Avistamiento de Lobos Marinos y Piqueros!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-192-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-sol-surf-y-relajacion-frente-al-pacifico-en-playa-olon",
    "name": "Sol, Surf y Relajación Frente al Pacífico en Playa Olón",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Olón",
    "days": "3 días / 2 noches",
    "price": 140,
    "datesText": "21 al 23 dic CURRENT_YEAR",
    "availableDates": [
      "21 al 23 dic CURRENT_YEAR",
      "28 al 30 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 23,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 30,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Olón · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Olón.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Playa y Relax en Olón",
        "description": "Jornada completa de inmersión en Sol, Surf y Relajación Frente al Pacífico en Playa Olón. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-193-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Sol, Surf y Relajación Frente al Pacífico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-193-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-museo-los-amantes-de-sumpa-y-catedral-de-santa-elena",
    "name": "Museo Los Amantes de Sumpa y Catedral de Santa Elena",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Santa Elena",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "23 al 24 ene CURRENT_YEAR",
    "availableDates": [
      "23 al 24 ene CURRENT_YEAR",
      "30 al 31 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 31,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santa Elena · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Santa Elena.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-194-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Museo Los Amantes de Sumpa y Catedral de Santa Elena!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-194-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-suite-frente-al-mar-en-punta-carnero-con-cena-al-atardecer",
    "name": "Suite Frente al Mar en Punta Carnero con Cena al Atardecer",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Salinas",
    "days": "3 días / 2 noches",
    "price": 220,
    "datesText": "10 al 12 feb CURRENT_YEAR",
    "availableDates": [
      "10 al 12 feb CURRENT_YEAR",
      "17 al 19 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 12,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 32,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Salinas · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Salinas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Salinas",
        "description": "Jornada completa de inmersión en Suite Frente al Mar en Punta Carnero con Cena al Atardecer. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-195-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Suite Frente al Mar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-195-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-paseo-nautico-familiar-en-bahia-de-salinas-y-avistamiento-costero",
    "name": "Paseo Náutico Familiar en Bahía de Salinas y Avistamiento Costero",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Salinas",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "12 al 13 nov CURRENT_YEAR",
    "availableDates": [
      "12 al 13 nov CURRENT_YEAR",
      "19 al 20 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 33,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Salinas · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Salinas.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-196-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Náutico Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-196-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-ruta-de-los-ceviches-playeros-arroz-marinero-y-cazuela",
    "name": "Ruta de los Ceviches Playeros, Arroz Marinero y Cazuela",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "La Libertad",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "14 al 15 dic CURRENT_YEAR",
    "availableDates": [
      "14 al 15 dic CURRENT_YEAR",
      "21 al 22 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 34,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a La Libertad · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de La Libertad.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-197-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de los Ceviches Playeros, Arroz Marinero y Cazuela!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-197-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-caminata-por-el-bosque-protector-chongon-colonche-en-dos-mangas",
    "name": "Caminata por el Bosque Protector Chongón Colonche en Dos Mangas",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Santa Elena",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "16 al 17 ene CURRENT_YEAR",
    "availableDates": [
      "16 al 17 ene CURRENT_YEAR",
      "23 al 24 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 35,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santa Elena · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Santa Elena.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-198-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Caminata por el Bosque Protector Chongón Colonche!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-198-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-banos-de-lodo-volcanico-y-aguas-sulfurosas-de-san-vicente",
    "name": "Baños de Lodo Volcánico y Aguas Sulfurosas de San Vicente",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Santa Elena",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "18 al 19 feb CURRENT_YEAR",
    "availableDates": [
      "18 al 19 feb CURRENT_YEAR",
      "25 al 26 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 36,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santa Elena · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Santa Elena.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-199-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Baños de Lodo Volcánico y Aguas Sulfurosas de San Vicente!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-199-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santa-elena-talleres-de-paja-toquilla-y-tagua-con-artesanos-de-dos-mangas",
    "name": "Talleres de Paja Toquilla y Tagua con Artesanos de Dos Mangas",
    "region": "Costa",
    "province": "Santa Elena",
    "city": "Montañita",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "20 al 21 nov CURRENT_YEAR",
    "availableDates": [
      "20 al 21 nov CURRENT_YEAR",
      "27 al 28 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 12,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Montañita · Bienvenida a Santa Elena",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Montañita.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-200-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Talleres de Paja Toquilla y Tagua con Artesanos de Dos Mangas!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-200-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-rafting-en-los-rapidos-del-rio-blanco-y-salto-en-cascada",
    "name": "Rafting en los Rápidos del Río Blanco y Salto en Cascada",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Valle Hermoso",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "22 al 23 dic CURRENT_YEAR",
    "availableDates": [
      "22 al 23 dic CURRENT_YEAR",
      "29 al 30 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 23,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 13,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Valle Hermoso · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Valle Hermoso.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-201-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Rafting!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-201-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-reserva-botanica-la-perla-y-observacion-de-tucanes",
    "name": "Reserva Botánica La Perla y Observación de Tucanes",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Santo Domingo",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "24 al 25 ene CURRENT_YEAR",
    "availableDates": [
      "24 al 25 ene CURRENT_YEAR",
      "31 al 32 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 14,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Santo Domingo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-202-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva Botánica La Perla y Observación de Tucanes!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-202-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-parque-acuatico-tropical-y-balnearios-de-valle-hermoso",
    "name": "Parque Acuático Tropical y Balnearios de Valle Hermoso",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Valle Hermoso",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "11 al 12 feb CURRENT_YEAR",
    "availableDates": [
      "11 al 12 feb CURRENT_YEAR",
      "18 al 19 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 15,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Valle Hermoso · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Valle Hermoso.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-203-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Acuático Tropical y Balnearios de Valle Hermoso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-203-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-catedral-el-buen-pastor-y-tradicion-melcochera-de-alluriquin",
    "name": "Catedral El Buen Pastor y Tradición Melcochera de Alluriquín",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Alluriquín",
    "days": "2 días / 1 noche",
    "price": 80,
    "datesText": "13 al 14 nov CURRENT_YEAR",
    "availableDates": [
      "13 al 14 nov CURRENT_YEAR",
      "20 al 21 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 16,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Alluriquín · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Alluriquín.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-204-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Catedral El Buen Pastor y Tradición Melcochera de Alluriquín!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-204-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-cabana-romantica-rodeada-de-bosque-lluvioso-y-cascada-privada",
    "name": "Cabaña Romántica Rodeada de Bosque Lluvioso y Cascada Privada",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Santo Domingo",
    "days": "2 días / 1 noche",
    "price": 145,
    "datesText": "15 al 16 dic CURRENT_YEAR",
    "availableDates": [
      "15 al 16 dic CURRENT_YEAR",
      "22 al 23 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 17,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Santo Domingo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-205-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabaña Romántica Rodeada de Bosque Lluvioso y Cascada Privada!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-205-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-parque-de-la-juventud-y-complejo-recreativo-familiar",
    "name": "Parque de la Juventud y Complejo Recreativo Familiar",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Santo Domingo",
    "days": "2 días / 1 noche",
    "price": 80,
    "datesText": "17 al 18 ene CURRENT_YEAR",
    "availableDates": [
      "17 al 18 ene CURRENT_YEAR",
      "24 al 25 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 18,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Santo Domingo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-206-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque de la Juventud y Complejo Recreativo Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-206-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-ruta-de-las-parrilladas-de-carne-tsachila-y-dulces-de-cana",
    "name": "Ruta de las Parrilladas de Carne Tsáchila y Dulces de Caña",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Alluriquín",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "19 al 20 feb CURRENT_YEAR",
    "availableDates": [
      "19 al 20 feb CURRENT_YEAR",
      "26 al 27 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 19,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Alluriquín · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Alluriquín.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-207-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de las Parrilladas de Carne Tsáchila y Dulces de Caña!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-207-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-trekking-por-la-selva-subtropical-de-la-cascada-del-amor",
    "name": "Trekking por la Selva Subtropical de la Cascada del Amor",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Santo Domingo",
    "days": "2 días / 1 noche",
    "price": 100,
    "datesText": "21 al 22 nov CURRENT_YEAR",
    "availableDates": [
      "21 al 22 nov CURRENT_YEAR",
      "28 al 29 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 20,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Santo Domingo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-208-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking por la Selva Subtropical de la Cascada del Amor!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-208-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-banos-de-purificacion-con-hierbas-tsachilas-y-arcilla-roja",
    "name": "Baños de Purificación con Hierbas Tsáchilas y Arcilla Roja",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Santo Domingo",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "23 al 24 dic CURRENT_YEAR",
    "availableDates": [
      "23 al 24 dic CURRENT_YEAR",
      "30 al 31 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 21,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Santo Domingo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-209-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Baños de Purificación con Hierbas Tsáchilas y Arcilla Roja!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-209-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "santo-domingo-de-los-tsachilas-vivencia-ancestral-en-la-comuna-tsachila-chiguilpe-achiote-y-chamanismo",
    "name": "Vivencia Ancestral en la Comuna Tsáchila Chigüilpe: Achiote y Chamanismo",
    "region": "Costa",
    "province": "Santo Domingo de los Tsáchilas",
    "city": "Santo Domingo",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "10 al 11 ene CURRENT_YEAR",
    "availableDates": [
      "10 al 11 ene CURRENT_YEAR",
      "17 al 18 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 22,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Santo Domingo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-210-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Vivencia Ancestral!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-210-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-navegacion-nocturna-en-busqueda-de-caimanes-negros-en-cuyabeno",
    "name": "Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "4 días / 3 noches",
    "price": 340,
    "datesText": "12 al 15 feb CURRENT_YEAR",
    "availableDates": [
      "12 al 15 feb CURRENT_YEAR",
      "19 al 22 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 15,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 23,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Cuyabeno",
        "description": "Jornada completa de inmersión en Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Aventura en Cuyabeno",
        "description": "Jornada completa de inmersión en Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-211-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Navegación Nocturna!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-211-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-laguna-grande-de-cuyabeno-y-observacion-de-delfines-rosados",
    "name": "Laguna Grande de Cuyabeno y Observación de Delfines Rosados",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "4 días / 3 noches",
    "price": 380,
    "datesText": "14 al 17 nov CURRENT_YEAR",
    "availableDates": [
      "14 al 17 nov CURRENT_YEAR",
      "21 al 24 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 17,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 24,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Ecoturismo en Cuyabeno",
        "description": "Jornada completa de inmersión en Laguna Grande de Cuyabeno y Observación de Delfines Rosados. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Ecoturismo en Cuyabeno",
        "description": "Jornada completa de inmersión en Laguna Grande de Cuyabeno y Observación de Delfines Rosados. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-212-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Laguna Grande de Cuyabeno y Observación de Delfines Rosados!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-212-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-descanso-acuatico-y-atardecer-dorado-en-laguna-encantada",
    "name": "Descanso Acuático y Atardecer Dorado en Laguna Encantada",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Nueva Loja (Lago Agrio)",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "16 al 17 dic CURRENT_YEAR",
    "availableDates": [
      "16 al 17 dic CURRENT_YEAR",
      "23 al 24 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 25,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Nueva Loja (Lago Agrio) · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Nueva Loja (Lago Agrio).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-213-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descanso Acuático y Atardecer Dorado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-213-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-parque-turistico-nueva-loja-y-etnografia-de-pueblos-amazonicos",
    "name": "Parque Turístico Nueva Loja y Etnografía de Pueblos Amazónicos",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Nueva Loja (Lago Agrio)",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "18 al 19 ene CURRENT_YEAR",
    "availableDates": [
      "18 al 19 ene CURRENT_YEAR",
      "25 al 26 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 26,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Nueva Loja (Lago Agrio) · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Nueva Loja (Lago Agrio).",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-214-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Turístico Nueva Loja y Etnografía de Pueblos Amazónicos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-214-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-ecolodge-privado-en-la-reserva-cuyabeno-con-terraza-fluvial",
    "name": "Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "4 días / 3 noches",
    "price": 420,
    "datesText": "20 al 23 feb CURRENT_YEAR",
    "availableDates": [
      "20 al 23 feb CURRENT_YEAR",
      "27 al 30 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 23,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 27,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Romántico en Cuyabeno",
        "description": "Jornada completa de inmersión en Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Romántico en Cuyabeno",
        "description": "Jornada completa de inmersión en Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-215-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ecolodge Privado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-215-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-paseo-familiar-en-canoa-con-avistamiento-de-monos-y-aves",
    "name": "Paseo Familiar en Canoa con Avistamiento de Monos y Aves",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "3 días / 2 noches",
    "price": 275,
    "datesText": "22 al 24 nov CURRENT_YEAR",
    "availableDates": [
      "22 al 24 nov CURRENT_YEAR",
      "29 al 31 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 24,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 28,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Familiar en Cuyabeno",
        "description": "Jornada completa de inmersión en Paseo Familiar en Canoa con Avistamiento de Monos y Aves. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-216-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Paseo Familiar!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-216-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-ruta-del-casabe-ancestral-de-yuca-y-pescado-en-hoja-de-bijao",
    "name": "Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "3 días / 2 noches",
    "price": 195,
    "datesText": "24 al 26 dic CURRENT_YEAR",
    "availableDates": [
      "24 al 26 dic CURRENT_YEAR",
      "31 al 33 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 26,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 29,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Gastronomía en Cuyabeno",
        "description": "Jornada completa de inmersión en Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-217-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta del Casabe Ancestral de Yuca y Pescado!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-217-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-trekking-por-senderos-del-bosque-inundado-del-igapo",
    "name": "Trekking por Senderos del Bosque Inundado del Igapó",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "4 días / 3 noches",
    "price": 310,
    "datesText": "11 al 14 ene CURRENT_YEAR",
    "availableDates": [
      "11 al 14 ene CURRENT_YEAR",
      "18 al 21 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 14,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 30,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Cuyabeno",
        "description": "Jornada completa de inmersión en Trekking por Senderos del Bosque Inundado del Igapó. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Trekking en Cuyabeno",
        "description": "Jornada completa de inmersión en Trekking por Senderos del Bosque Inundado del Igapó. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-218-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking por Senderos del Bosque Inundado del Igapó!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-218-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-tratamiento-de-relajacion-con-aguas-minerales-en-cascales",
    "name": "Tratamiento de Relajación con Aguas Minerales en Cascales",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cascales",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "13 al 14 feb CURRENT_YEAR",
    "availableDates": [
      "13 al 14 feb CURRENT_YEAR",
      "20 al 21 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 31,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cascales · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Cascales.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-219-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Tratamiento de Relajación con Aguas Minerales!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-219-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "sucumbios-comunidad-etnica-siona-preparacion-de-casabe-y-sabiduria-chamanica",
    "name": "Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica",
    "region": "Amazonía",
    "province": "Sucumbíos",
    "city": "Cuyabeno",
    "days": "4 días / 3 noches",
    "price": 350,
    "datesText": "15 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "15 al 18 nov CURRENT_YEAR",
      "22 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 32,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Cuyabeno.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Turismo Comunitario en Cuyabeno",
        "description": "Jornada completa de inmersión en Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Día 3: Experiencia Principal de Turismo Comunitario en Cuyabeno",
        "description": "Jornada completa de inmersión en Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 4,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-220-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-220-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-adrenalina-pura-canyoning-rafting-y-salto-del-puente-en-banos",
    "name": "Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Baños de Agua Santa",
    "days": "3 días / 2 noches",
    "price": 175,
    "datesText": "17 al 19 dic CURRENT_YEAR",
    "availableDates": [
      "17 al 19 dic CURRENT_YEAR",
      "24 al 26 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 19,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 4.8,
    "reviewsCount": 33,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Baños de Agua Santa",
        "description": "Jornada completa de inmersión en Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-221-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Adrenalina Pura: Canyoning, Rafting y Salto del Puente!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-221-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-ruta-de-las-cascadas-manto-de-la-novia-y-pailon-del-diablo",
    "name": "Ruta de las Cascadas, Manto de la Novia y Pailón del Diablo",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Baños de Agua Santa",
    "days": "2 días / 1 noche",
    "price": 115,
    "datesText": "19 al 20 ene CURRENT_YEAR",
    "availableDates": [
      "19 al 20 ene CURRENT_YEAR",
      "26 al 27 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 20,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.9,
    "reviewsCount": 34,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-222-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta de las Cascadas, Manto de la Novia y Pailón del Diablo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-222-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-valle-de-la-eterna-primavera-huertos-de-mandarina-y-relax-en-patate",
    "name": "Valle de la Eterna Primavera, Huertos de Mandarina y Relax en Patate",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Patate",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "21 al 22 feb CURRENT_YEAR",
    "availableDates": [
      "21 al 22 feb CURRENT_YEAR",
      "28 al 29 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 22,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 5,
    "reviewsCount": 35,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Patate · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Patate.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-223-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Valle de la Eterna Primavera, Huertos de Mandarina y Relax!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-223-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-quinta-de-juan-leon-mera-museo-martinez-holguin-y-centro-de-ambato",
    "name": "Quinta de Juan León Mera, Museo Martínez Holguín y Centro de Ambato",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Ambato",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "23 al 24 nov CURRENT_YEAR",
    "availableDates": [
      "23 al 24 nov CURRENT_YEAR",
      "30 al 31 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.7,
    "reviewsCount": 36,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ambato · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Ambato.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-224-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Quinta de Juan León Mera, Museo Martínez Holguín y Centro de Ambato!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-224-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-glamping-de-lujo-con-jacuzzi-y-vista-al-volcan-tungurahua",
    "name": "Glamping de Lujo con Jacuzzi y Vista al Volcán Tungurahua",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Baños de Agua Santa",
    "days": "2 días / 1 noche",
    "price": 190,
    "datesText": "10 al 11 dic CURRENT_YEAR",
    "availableDates": [
      "10 al 11 dic CURRENT_YEAR",
      "17 al 18 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 4.8,
    "reviewsCount": 12,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-225-1",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Glamping de Lujo con Jacuzzi y Vista al Volcán Tungurahua!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-225-2",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-columpio-del-fin-del-mundo-en-casa-del-arbol-y-aldea-magica",
    "name": "Columpio del Fin del Mundo en Casa del Árbol y Aldea Mágica",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Baños de Agua Santa",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "12 al 13 ene CURRENT_YEAR",
    "availableDates": [
      "12 al 13 ene CURRENT_YEAR",
      "19 al 20 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 12,
      "endDay": 13,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.9,
    "reviewsCount": 13,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-226-1",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Columpio del Fin del Mundo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-226-2",
        "userName": "María José Luna",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-melcochas-de-banos-llapingachos-ambatenos-y-dulces-de-cevallos",
    "name": "Melcochas de Baños, Llapingachos Ambateños y Dulces de Cevallos",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Ambato",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "14 al 15 feb CURRENT_YEAR",
    "availableDates": [
      "14 al 15 feb CURRENT_YEAR",
      "21 al 22 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 14,
      "endDay": 15,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 5,
    "reviewsCount": 14,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Ambato · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Ambato.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-227-1",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Melcochas de Baños, Llapingachos Ambateños y Dulces de Cevallos!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-227-2",
        "userName": "Rodrigo Paredes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-trekking-de-alta-montana-al-refugio-del-volcan-tungurahua",
    "name": "Trekking de Alta Montaña al Refugio del Volcán Tungurahua",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Baños de Agua Santa",
    "days": "2 días / 1 noche",
    "price": 135,
    "datesText": "16 al 17 nov CURRENT_YEAR",
    "availableDates": [
      "16 al 17 nov CURRENT_YEAR",
      "23 al 24 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 16,
      "endDay": 17,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.7,
    "reviewsCount": 15,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-228-1",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking de Alta Montaña al Refugio del Volcán Tungurahua!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-228-2",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-aguas-termales-de-la-virgen-el-salado-y-spa-volcanico",
    "name": "Aguas Termales de la Virgen, El Salado y Spa Volcánico",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Baños de Agua Santa",
    "days": "2 días / 1 noche",
    "price": 110,
    "datesText": "18 al 19 dic CURRENT_YEAR",
    "availableDates": [
      "18 al 19 dic CURRENT_YEAR",
      "25 al 26 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 18,
      "endDay": 19,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 4.8,
    "reviewsCount": 16,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-229-1",
        "userName": "María José Luna",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Aguas Termales de la Virgen, El Salado y Spa Volcánico!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-229-2",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "tungurahua-cultura-salasaka-tejeduria-en-telar-ancestral-y-diablada-pillarena",
    "name": "Cultura Salasaka: Tejeduría en Telar Ancestral y Diablada Pillareña",
    "region": "Sierra",
    "province": "Tungurahua",
    "city": "Pelileo",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "20 al 21 ene CURRENT_YEAR",
    "availableDates": [
      "20 al 21 ene CURRENT_YEAR",
      "27 al 28 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 20,
      "endDay": 21,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.9,
    "reviewsCount": 17,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Pelileo · Bienvenida a Tungurahua",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Pelileo.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-230-1",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cultura Salasaka: Tejeduría!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-230-2",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-expedicion-en-bote-rapido-por-los-canones-del-rio-nangaritza",
    "name": "Expedición en Bote Rápido por los Cañones del Río Nangaritza",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Nangaritza",
    "days": "3 días / 2 noches",
    "price": 210,
    "datesText": "22 al 24 feb CURRENT_YEAR",
    "availableDates": [
      "22 al 24 feb CURRENT_YEAR",
      "29 al 31 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 22,
      "endDay": 24,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Aventura",
    "categorySlug": "aventura-extremo",
    "categoryIcon": "mountain",
    "rating": 5,
    "reviewsCount": 18,
    "availableSlots": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Nangaritza · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Nangaritza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Aventura en Nangaritza",
        "description": "Jornada completa de inmersión en Expedición en Bote Rápido por los Cañones del Río Nangaritza. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-231-1",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Expedición!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-231-2",
        "userName": "Andrés Morales",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-reserva-podocarpus-sur-bosque-de-palmeras-gigantes-y-aves",
    "name": "Reserva Podocarpus Sur: Bosque de Palmeras Gigantes y Aves",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Zamora",
    "days": "2 días / 1 noche",
    "price": 120,
    "datesText": "24 al 25 nov CURRENT_YEAR",
    "availableDates": [
      "24 al 25 nov CURRENT_YEAR",
      "31 al 32 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 24,
      "endDay": 25,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Ecoturismo",
    "categorySlug": "ecoturismo-naturaleza",
    "categoryIcon": "compass",
    "rating": 4.7,
    "reviewsCount": 19,
    "availableSlots": 6,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Zamora.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-232-1",
        "userName": "Mateo Cárdenas",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reserva Podocarpus Sur: Bosque de Palmeras Gigantes y Aves!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-232-2",
        "userName": "Lucía Benítez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-descanso-en-las-playas-de-arena-blanca-del-rio-chicana",
    "name": "Descanso en las Playas de Arena Blanca del Río Chicaña",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Yantzaza",
    "days": "2 días / 1 noche",
    "price": 95,
    "datesText": "11 al 12 dic CURRENT_YEAR",
    "availableDates": [
      "11 al 12 dic CURRENT_YEAR",
      "18 al 19 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 11,
      "endDay": 12,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Playa y Relax",
    "categorySlug": "playa-relax",
    "categoryIcon": "umbrella",
    "rating": 4.8,
    "reviewsCount": 20,
    "availableSlots": 7,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Yantzaza · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Yantzaza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-233-1",
        "userName": "Camila Villacís",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Descanso!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-233-2",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-reloj-floral-gigante-de-zamora-y-origenes-del-cacao-en-palanda",
    "name": "Reloj Floral Gigante de Zamora y Orígenes del Cacao en Palanda",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Zamora",
    "days": "2 días / 1 noche",
    "price": 90,
    "datesText": "13 al 14 ene CURRENT_YEAR",
    "availableDates": [
      "13 al 14 ene CURRENT_YEAR",
      "20 al 21 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 13,
      "endDay": 14,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Cultural",
    "categorySlug": "cultural-historico",
    "categoryIcon": "landmark",
    "rating": 4.9,
    "reviewsCount": 21,
    "availableSlots": 8,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Zamora.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-234-1",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Reloj Floral Gigante de Zamora y Orígenes del Cacao!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-234-2",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-cabana-romantica-ecologica-en-el-valle-de-las-guayabas",
    "name": "Cabaña Romántica Ecológica en el Valle de las Guayabas",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Zamora",
    "days": "2 días / 1 noche",
    "price": 160,
    "datesText": "15 al 16 feb CURRENT_YEAR",
    "availableDates": [
      "15 al 16 feb CURRENT_YEAR",
      "22 al 23 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 15,
      "endDay": 16,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Romántico",
    "categorySlug": "luna-de-miel",
    "categoryIcon": "heart",
    "rating": 5,
    "reviewsCount": 22,
    "availableSlots": 9,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Zamora.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-235-1",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Cabaña Romántica Ecológica!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-235-2",
        "userName": "Javier Proaño",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-parque-lineal-y-cascadas-de-santa-cleotilde-para-toda-la-familia",
    "name": "Parque Lineal y Cascadas de Santa Cleotilde para Toda la Familia",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Zamora",
    "days": "2 días / 1 noche",
    "price": 85,
    "datesText": "17 al 18 nov CURRENT_YEAR",
    "availableDates": [
      "17 al 18 nov CURRENT_YEAR",
      "24 al 25 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 17,
      "endDay": 18,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Familiar",
    "categorySlug": "familiar-todo-incluido",
    "categoryIcon": "users",
    "rating": 4.7,
    "reviewsCount": 23,
    "availableSlots": 10,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Zamora.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-236-1",
        "userName": "Fernando Álvarez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Parque Lineal y Cascadas de Santa Cleotilde para Toda la Familia!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-236-2",
        "userName": "Gabriela Reyes",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-ruta-arqueologica-del-primer-cacao-del-mundo-en-mayo-chinchipe",
    "name": "Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Palanda",
    "days": "3 días / 2 noches",
    "price": 145,
    "datesText": "19 al 21 dic CURRENT_YEAR",
    "availableDates": [
      "19 al 21 dic CURRENT_YEAR",
      "26 al 28 dic CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 19,
      "endDay": 21,
      "month": "dic",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Gastronomía",
    "categorySlug": "gastronomia-cacao",
    "categoryIcon": "utensils",
    "rating": 4.8,
    "reviewsCount": 24,
    "availableSlots": 11,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Palanda · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Palanda.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Gastronomía en Palanda",
        "description": "Jornada completa de inmersión en Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-237-1",
        "userName": "Sofía Enríquez",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Ruta Arqueológica del Primer Cacao del Mundo!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-237-2",
        "userName": "Esteban Salazar",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-trekking-al-laberinto-de-las-mil-ilusiones-y-cueva-de-los-tayos-sur",
    "name": "Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Nangaritza",
    "days": "3 días / 2 noches",
    "price": 180,
    "datesText": "21 al 23 ene CURRENT_YEAR",
    "availableDates": [
      "21 al 23 ene CURRENT_YEAR",
      "28 al 30 ene CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 21,
      "endDay": 23,
      "month": "ene",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d1CURRENT_YEAR7933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Trekking",
    "categorySlug": "trekking-montana",
    "categoryIcon": "flag",
    "rating": 4.9,
    "reviewsCount": 25,
    "availableSlots": 12,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Nangaritza · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Nangaritza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Día 2: Experiencia Principal de Trekking en Nangaritza",
        "description": "Jornada completa de inmersión en Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.",
        "meals": {
          "breakfast": true,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 3,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-238-1",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-238-2",
        "userName": "Valeria Castro",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-hidroterapia-natural-en-cascadas-velo-de-novia-y-chorrera",
    "name": "Hidroterapia Natural en Cascadas Velo de Novia y Chorrera",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Zamora",
    "days": "2 días / 1 noche",
    "price": 105,
    "datesText": "23 al 24 feb CURRENT_YEAR",
    "availableDates": [
      "23 al 24 feb CURRENT_YEAR",
      "30 al 31 feb CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 23,
      "endDay": 24,
      "month": "feb",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Bienestar y Spa",
    "categorySlug": "bienestar-termas",
    "categoryIcon": "sparkles",
    "rating": 5,
    "reviewsCount": 26,
    "availableSlots": 13,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Zamora.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-239-1",
        "userName": "Daniela Vega",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Hidroterapia Natural!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-239-2",
        "userName": "Juan Diego Ortiz",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  },
  {
    "id": "zamora-chinchipe-encuentro-con-las-comunidades-shuar-de-nangaritza-y-artesanias",
    "name": "Encuentro con las Comunidades Shuar de Nangaritza y Artesanías",
    "region": "Amazonía",
    "province": "Zamora Chinchipe",
    "city": "Nangaritza",
    "days": "2 días / 1 noche",
    "price": 130,
    "datesText": "10 al 11 nov CURRENT_YEAR",
    "availableDates": [
      "10 al 11 nov CURRENT_YEAR",
      "17 al 18 nov CURRENT_YEAR"
    ],
    "dates": {
      "startDay": 10,
      "endDay": 11,
      "month": "nov",
      year: CURRENT_YEAR
    },
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    "secondaryImages": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "category": "Turismo Comunitario",
    "categorySlug": "tradiciones-comunitario",
    "categoryIcon": "star",
    "rating": 4.7,
    "reviewsCount": 27,
    "availableSlots": 4,
    "itinerary": [
      {
        "day": 1,
        "title": "Encuentro y Arribo a Nangaritza · Bienvenida a Zamora Chinchipe",
        "description": "Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Nangaritza.",
        "meals": {
          "breakfast": false,
          "lunch": true,
          "dinner": true
        }
      },
      {
        "day": 2,
        "title": "Desayuno Típico, Actividad de Cierre y Retorno",
        "description": "Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.",
        "meals": {
          "breakfast": true,
          "lunch": false,
          "dinner": false
        }
      }
    ],
    "reviews": [
      {
        "id": "rev-240-1",
        "userName": "Carlos Mendoza",
        "rating": 5,
        "title": "¡Una experiencia insuperable en Encuentro con las Comunidades Shuar de Nangaritza y Artesanías!",
        "comment": "La puntualidad, la calidez del guía y la calidad de la alimentación fueron de primer nivel. Recomendado al 100% para viajar con total tranquilidad.",
        "date": "14 oct CURRENT_YEAR"
      },
      {
        "id": "rev-240-2",
        "userName": "Elena Viteri",
        "rating": 5,
        "title": "Organización impecable y paisajes de ensueño",
        "comment": "Superó todas mis expectativas. El itinerario estuvo muy bien planificado, con los tiempos justos para disfrutar cada actividad sin prisas.",
        "date": "22 oct CURRENT_YEAR"
      }
    ]
  }
];
