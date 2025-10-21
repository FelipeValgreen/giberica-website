export type UnidadEstado = "disponible" | "reservado" | "promesado"

export interface Unidad {
  id: string
  tipologia: string
  m2_util: number
  m2_terraza: number
  m2_patio: number
  estado: UnidadEstado
  precio_desde_UF: number
  etapa: string
}

export const UNIDADES: Unidad[] = [
  {
    id: "SP-32-101",
    tipologia: "2D2B-32",
    m2_util: 28,
    m2_terraza: 4,
    m2_patio: 0,
    estado: "disponible",
    precio_desde_UF: 2200,
    etapa: "E1",
  },
  {
    id: "SP-32-102",
    tipologia: "2D2B-32",
    m2_util: 28,
    m2_terraza: 4,
    m2_patio: 0,
    estado: "disponible",
    precio_desde_UF: 2200,
    etapa: "E1",
  },
  {
    id: "SP-62-201",
    tipologia: "2D2B-62",
    m2_util: 56,
    m2_terraza: 6,
    m2_patio: 0,
    estado: "disponible",
    precio_desde_UF: 3000,
    etapa: "E1",
  },
  {
    id: "SP-62-203",
    tipologia: "2D2B-62",
    m2_util: 56,
    m2_terraza: 6,
    m2_patio: 0,
    estado: "reservado",
    precio_desde_UF: 3000,
    etapa: "E1",
  },
  {
    id: "SP-62-105",
    tipologia: "2D2B-62",
    m2_util: 52,
    m2_terraza: 4,
    m2_patio: 10,
    estado: "disponible",
    precio_desde_UF: 3050,
    etapa: "E1",
  },
  {
    id: "SP-62-106",
    tipologia: "2D2B-62",
    m2_util: 52,
    m2_terraza: 4,
    m2_patio: 10,
    estado: "promesado",
    precio_desde_UF: 3050,
    etapa: "E1",
  },
]
