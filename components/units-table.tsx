"use client"

import { useState, useEffect } from "react"
import type { Unidad } from "@/data/unidades"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageCircle, Calendar } from "lucide-react"
import { track } from "@/lib/analytics"

interface UnitsTableProps {
  items: Unidad[]
  onSelect?: (unit: Unidad) => void
}

export function UnitsTable({ items, onSelect }: UnitsTableProps) {
  const [filter, setFilter] = useState<string>("all")

  useEffect(() => { 
    track("catalog_view", { count: items?.length || 0 }) 
  }, [items])

  const filtered = items.filter((unit) => {
    if (filter === "all") return true
    if (filter === "32") return unit.tipologia.includes("32")
    if (filter === "62") return unit.tipologia.includes("62")
    if (filter === "patio") return unit.m2_patio > 0
    if (filter === "terraza") return unit.m2_terraza > 0
    return true
  })

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "disponible":
        return <Badge className="bg-green-600 text-white hover:bg-green-700">Disponible</Badge>
      case "reservado":
        return <Badge className="bg-amber-600 text-white hover:bg-amber-700">Reservado</Badge>
      case "promesado":
        return <Badge className="bg-red-600 text-white hover:bg-red-700">Promesado</Badge>
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="sm">
          Todas
        </Button>
        <Button variant={filter === "32" ? "default" : "outline"} onClick={() => setFilter("32")} size="sm">
          32 m²
        </Button>
        <Button variant={filter === "62" ? "default" : "outline"} onClick={() => setFilter("62")} size="sm">
          62 m²
        </Button>
        <Button variant={filter === "patio" ? "default" : "outline"} onClick={() => setFilter("patio")} size="sm">
          Con Patio
        </Button>
        <Button variant={filter === "terraza" ? "default" : "outline"} onClick={() => setFilter("terraza")} size="sm">
          Con Terraza
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-white overflow-hidden">
        <Table aria-label="Catálogo de unidades disponibles">
          <TableHeader>
            <TableRow>
              <TableHead>Tipología</TableHead>
              <TableHead>m² Útil</TableHead>
              <TableHead>Terraza</TableHead>
              <TableHead>Patio</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Desde</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell className="font-medium">{unit.id}</TableCell>
                <TableCell>{unit.m2_util} m²</TableCell>
                <TableCell>{unit.m2_terraza > 0 ? `${unit.m2_terraza} m²` : "—"}</TableCell>
                <TableCell>{unit.m2_patio > 0 ? `${unit.m2_patio} m²` : "—"}</TableCell>
                <TableCell>{getEstadoBadge(unit.estado)}</TableCell>
                <TableCell className="font-semibold">UF {unit.precio_desde_UF.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        track("schedule_start", { unit_id: unit.id, tipologia: unit.tipologia })
                        onSelect?.(unit)
                      }}
                      disabled={unit.estado !== "disponible"}
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Agendar
                    </Button>
                    <Button size="sm" variant="outline" asChild disabled={unit.estado !== "disponible"}>
                      <a
                        href={`https://wa.me/56912345678?text=Consulta sobre ${unit.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("whatsapp_click", { unit_id: unit.id })}
                      >
                        <MessageCircle className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#1E4D3C] hover:bg-[#1E4D3C]/90"
                      onClick={() => {
                        track("reserve_start", { unit_id: unit.id, tipologia: unit.tipologia, precioDesdeUF: unit.precio_desde_UF })
                        onSelect?.(unit)
                      }}
                      disabled={unit.estado !== "disponible"}
                    >
                      Reservar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#8D8D8D] py-8">No hay unidades que coincidan con el filtro seleccionado.</p>
      )}
    </div>
  )
}
