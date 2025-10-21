"use client"

import { useEffect, useState } from "react"
import type { Unidad } from "@/data/unidades"
import { UnitsTable } from "@/components/units-table"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { track } from "@/lib/analytics"

export default function UnidadesPage() {
  const [unidades, setUnidades] = useState<Unidad[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    track("catalog_view", { page: "unidades_full" })

    fetch("/api/unidades")
      .then((res) => res.json())
      .then((data) => {
        setUnidades(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/proyectos/san-patricio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al proyecto
            </Link>
          </Button>

          <div className="space-y-4">
            <h1 className="text-[#1F1F1F]">Catálogo completo de unidades</h1>
            <p className="text-lg text-[#8D8D8D]">
              San Patricio · Todas las unidades disponibles con estado en tiempo real
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12">
        <div className="container">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#8D8D8D]">Cargando unidades...</p>
            </div>
          ) : (
            <UnitsTable
              items={unidades}
              onSelect={(unit) => {
                track("unit_select", {
                  unit_id: unit.id,
                  tipologia: unit.tipologia,
                  m2: unit.m2_util,
                  precioDesdeUF: unit.precio_desde_UF,
                })
              }}
            />
          )}
        </div>
      </section>

      {/* Info footer */}
      <section className="py-12 bg-white border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-semibold text-[#1F1F1F]">¿Necesitas ayuda?</h3>
            <p className="text-[#8D8D8D]">
              Nuestro equipo está disponible para responder tus consultas y agendar visitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-[#1E4D3C] hover:bg-[#1E4D3C]/90">
                <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacto">Formulario de contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
