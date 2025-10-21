"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import unidades from "@/data/unidades.json"

export function UnitsTable() {
  const [filtroM2, setFiltroM2] = useState<number[]>([])
  const [filtroEstado, setFiltroEstado] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [unidadSeleccionada, setUnidadSeleccionada] = useState<any>(null)

  const unidadesFiltradas = unidades.filter(unidad => {
    const m2Match = filtroM2.length === 0 || filtroM2.includes(unidad.m2)
    const estadoMatch = filtroEstado.length === 0 || filtroEstado.includes(unidad.estado)
    return m2Match && estadoMatch
  })

  const handleReservar = (unidad: any) => {
    setUnidadSeleccionada(unidad)
    setModalOpen(true)
  }

  const handleSubmitReserva = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      unidad: unidadSeleccionada?.id,
      precio: unidadSeleccionada?.precioUF,
      m2: unidadSeleccionada?.m2,
      source: 'units_table',
      project: 'san_patricio'
    }
    
    try {
      // TODO: Integrar con API de leads
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        console.log("Reserva enviada exitosamente:", data)
        setModalOpen(false)
        // Mostrar mensaje de éxito
        alert("¡Reserva enviada exitosamente! Te contactaremos pronto.")
      }
    } catch (error) {
      console.error("Error enviando reserva:", error)
      alert("Error al enviar la reserva. Por favor, inténtalo de nuevo.")
    }
  }

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Metraje</Label>
          <div className="flex gap-2">
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={filtroM2.includes(34)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFiltroM2([...filtroM2, 34])
                  } else {
                    setFiltroM2(filtroM2.filter(m => m !== 34))
                  }
                }}
              />
              <span className="text-sm">34 m²</span>
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={filtroM2.includes(62)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFiltroM2([...filtroM2, 62])
                  } else {
                    setFiltroM2(filtroM2.filter(m => m !== 62))
                  }
                }}
              />
              <span className="text-sm">62 m²</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Estado</Label>
          <div className="flex gap-2">
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={filtroEstado.includes("disponible")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFiltroEstado([...filtroEstado, "disponible"])
                  } else {
                    setFiltroEstado(filtroEstado.filter(e => e !== "disponible"))
                  }
                }}
              />
              <span className="text-sm">Disponible</span>
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={filtroEstado.includes("reservado")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFiltroEstado([...filtroEstado, "reservado"])
                  } else {
                    setFiltroEstado(filtroEstado.filter(e => e !== "reservado"))
                  }
                }}
              />
              <span className="text-sm">Reservado</span>
            </label>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-crema">
              <th className="text-left py-3 px-4 font-medium text-carbon">Nº</th>
              <th className="text-left py-3 px-4 font-medium text-carbon">m²</th>
              <th className="text-left py-3 px-4 font-medium text-carbon">Piso</th>
              <th className="text-left py-3 px-4 font-medium text-carbon">Orientación</th>
              <th className="text-left py-3 px-4 font-medium text-carbon">Precio UF</th>
              <th className="text-left py-3 px-4 font-medium text-carbon">Estado</th>
              <th className="text-left py-3 px-4 font-medium text-carbon">Acción</th>
            </tr>
          </thead>
          <tbody>
            {unidadesFiltradas.map((unidad) => (
              <tr key={unidad.id} className="border-b hover:bg-arena/20">
                <td className="py-3 px-4 font-mono text-sm">{unidad.id}</td>
                <td className="py-3 px-4">{unidad.m2}</td>
                <td className="py-3 px-4">{unidad.piso}</td>
                <td className="py-3 px-4">{unidad.orientacion}</td>
                <td className="py-3 px-4 font-semibold">{unidad.precioUF.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    unidad.estado === "disponible" 
                      ? "bg-salvia text-carbon" 
                      : unidad.estado === "reservado"
                      ? "bg-arena text-carbon"
                      : "bg-olivaMedio text-crema"
                  }`}>
                    {unidad.estado}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <Button
                    size="sm"
                    onClick={() => handleReservar(unidad)}
                    disabled={unidad.estado !== "disponible"}
                    className="bg-carbon text-crema hover:opacity-90"
                  >
                    {unidad.estado === "disponible" ? "Reservar" : "No disponible"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Reserva */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reservar Unidad {unidadSeleccionada?.id}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmitReserva} className="space-y-4">
            <div>
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input id="nombre" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" type="tel" required />
            </div>
            <div className="bg-crema/20 p-4 rounded-md">
              <p className="text-sm text-olivaTierra">
                <strong>Reserva:</strong> $500.000 por 90 días<br/>
                <strong>Devolución:</strong> 50% según T&C<br/>
                <strong>Unidad:</strong> {unidadSeleccionada?.id} - {unidadSeleccionada?.m2} m² - {unidadSeleccionada?.precioUF} UF
              </p>
            </div>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-carbon text-crema hover:opacity-90">
                Confirmar Reserva
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

