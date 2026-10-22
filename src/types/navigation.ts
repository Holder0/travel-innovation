export type Page =
  | "inicio"
  | "catalogo"
  | "catalogo-costa"
  | "catalogo-sierra"
  | "catalogo-amazonia"
  | "catalogo-galapagos"
  | "detalle"
  | "carrito"
  | "identificacion"
  | "viajeros"
  | "pago"
  | "confirmacion"
  | "reservas"
  | "politicas"
  | "soporte"
  | "diagrama"
  | "tickets"



export const pageNames: Record<Page, string> = {
  inicio: "Inicio",
  catalogo: "Paquetes turísticos",
  "catalogo-costa": "Paquetes en la Costa",
  "catalogo-sierra": "Paquetes en la Sierra",
  "catalogo-amazonia": "Paquetes en la Amazonía",
  "catalogo-galapagos": "Paquetes en Galápagos",
  detalle: "Detalle del paquete",
  carrito: "Carrito",
  identificacion: "Información Personal",
  viajeros: "Datos de viajeros",
  pago: "Pago de la reserva",
  confirmacion: "Confirmación",
  reservas: "Mis compras",
  politicas: "Políticas de reserva",
  soporte: "Soporte",
  diagrama: "Diagrama de estados",
  tickets: "Mis tickets",
}

