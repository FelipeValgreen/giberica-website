export interface Recomendacion {
  fuente: string
  cita: string
  link?: string
  logoUrl?: string
}

export const RECOMENDACIONES: Recomendacion[] = [
  {
    fuente: "Experto Inmobiliario",
    cita: "Propuesta clara: costos controlados y unidades fáciles de arrendar.",
    link: "#",
    logoUrl: "/real-estate-expert-logo.jpg",
  },
  {
    fuente: "Medio Local",
    cita: "Proceso de compra simple y documentado.",
    link: "#",
    logoUrl: "/local-media-logo.jpg",
  },
  {
    fuente: "Asesor de Inversiones",
    cita: "Rol independiente facilita la salida. Ubicación estratégica.",
    link: "#",
    logoUrl: "/investment-advisor-logo.jpg",
  },
]
