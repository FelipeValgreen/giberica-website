"use client"

import { useState, useEffect } from "react"
import { UnitsTable } from "@/components/units-table"
import type { Unidad } from "@/data/unidades"
import { track } from "@/lib/analytics"

export function UnitsSection() {
  const [units, setUnits] = useState<Unidad[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    track("catalog_view")

    const fetchUnits = async () => {
      try {
        const response = await fetch("/api/unidades")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUnits(data)
      } catch (err) {
        console.error("[v0] Error fetching units:", err)
        // Fallback to empty array
        setUnits([])
      } finally {
        setLoading(false)
      }
    }

    fetchUnits()
  }, [])

  const handleUnitSelect = (unit: Unidad) => {
    track("unit_select", {
      unit_id: unit.id,
      tipologia: unit.tipologia,
      m2: unit.m2_util + unit.m2_terraza + unit.m2_patio,
      precioDesdeUF: unit.precio_desde_UF,
    })
  }

  return (
    <section className="py-16 md:py-24 bg-[#FBF9F4]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Catálogo de Unidades</h2>
          <p className="text-lg text-[#8D8D8D]">Disponibilidad en tiempo real · Etapa 1</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#8D8D8D]">Cargando unidades...</p>
          </div>
        ) : (
          <UnitsTable items={units} onSelect={handleUnitSelect} />
        )}
      </div>
    </section>
  )
}
