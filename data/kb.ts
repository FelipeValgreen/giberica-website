// data/kb.ts
export const PROJECT_KB = {
  brand: {
    name: "Gibérica Inmobiliaria",
    slogan: "Diseño que rinde.",
    pillars: ["Simplicidad", "Diseño funcional", "Precisión en ejecución"],
  },
  project: {
    name: "San Patricio",
    slogan: "Vive simple. Invierte claro.",
    location: { comuna: "El Bosque", hitos: ["Gran Avenida", "FACh"] },
    types: [
      { code: "2D2B-32", title: "2D/2B — 32 m²", features: ["Estar integrado", "Ideal renta"] },
      { code: "2D2B-62", title: "2D/2B — 62 m²", features: ["Estar amplio", "Terraza / patio en 1° piso"] },
    ],
    specs: {
      superficies: "32–62 m², terrazas/patios",
      sistema: "Sistema eléctrico",
      gastos_comunes: "Sin gastos comunes (cada propietario gestiona su mantención)",
    },
    delivery: { etapa1: "Enero 2026", status: "Obra en curso" },
    process: {
      reserva: "Reserva $500.000 por 90 días",
      devolucion: "Devolución del 50% si desistes dentro de 90 días y según T&C",
      promesa: "La promesa se envía y firma por correo electrónico",
    },
    finance: {
      simulador: "UF (desde), pie %, tasa, plazo → dividendo estimado",
      nota: "Tasación y condiciones finales dependen de cada banco",
    },
    ctas: ["Ver unidades", "Simular pie", "Agendar tour", "Reservar", "Descargar ficha PDF", "Ver planos 32/62 m²", "Términos de reserva"],
    legal: "Imágenes y planos referenciales. Sujetos a disponibilidad.",
  },
  faq: [
    { q: "¿Qué significa sin gastos comunes?", a: "No hay cobro mensual de administración. Cada propietario gestiona su mantención, aseo y seguridad." },
    { q: "¿Puedo reservar y desistir?", a: "Sí. La reserva es $500.000 por 90 días con devolución del 50% según T&C." },
    { q: "¿Rol independiente?", a: "Cada unidad tiene rol propio. Facilita la salida por unidad." },
  ],
}
