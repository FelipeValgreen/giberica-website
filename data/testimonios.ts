export interface Testimonio {
  nombre: string
  tipo: string
  cita: string
  videoUrl?: string
  avatarUrl?: string
}

export const TESTIMONIOS: Testimonio[] = [
  {
    nombre: "Camila P.",
    tipo: "Compradora 32 m²",
    cita: "Reservé por lo simple: sin gastos comunes y cerca de la FACh.",
    videoUrl: "/media/testi-camila.mp4",
    avatarUrl: "/professional-woman-avatar.png",
  },
  {
    nombre: "Marcelo R.",
    tipo: "Inversionista 62 m²",
    cita: "Rol por unidad = salida clara. Proceso transparente.",
    videoUrl: "/media/testi-marcelo.mp4",
    avatarUrl: "/professional-man-avatar.png",
  },
  {
    nombre: "Patricia S.",
    tipo: "Compradora 62 m²",
    cita: "La terraza y el diseño funcional me convencieron. Entrega en tiempo.",
    avatarUrl: "/smiling-woman-avatar.png",
  },
]
