"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SimulatorModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SimulatorModal({ open, onOpenChange }: SimulatorModalProps) {
  const [precioUF, setPrecioUF] = useState("")
  const [piePct, setPiePct] = useState("20")
  const [plazoAnios, setPlazoAnios] = useState("20")
  const [tasaAnual, setTasaAnual] = useState("6.5")
  const [resultado, setResultado] = useState<{
    pieUF: number
    dividendoUF: number
    pieCLP: number
    dividendoCLP: number
  } | null>(null)

  const calcular = () => {
    const precio = parseFloat(precioUF)
    const pie = parseFloat(piePct) / 100
    const plazo = parseFloat(plazoAnios)
    const tasa = parseFloat(tasaAnual) / 100

    if (!precio || !pie || !plazo || !tasa) return

    const pieUF = precio * pie
    const creditoUF = precio - pieUF
    const i = tasa / 12
    const n = plazo * 12
    const dividendoUF = creditoUF * i / (1 - Math.pow(1 + i, -n))

    // TODO: Obtener valor UF actual de API
    const valorUF = 38000 // Placeholder
    const pieCLP = pieUF * valorUF
    const dividendoCLP = dividendoUF * valorUF

    setResultado({
      pieUF,
      dividendoUF,
      pieCLP,
      dividendoCLP
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Simulador de Pie</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="precio">Precio en UF</Label>
            <Input
              id="precio"
              type="number"
              value={precioUF}
              onChange={(e) => setPrecioUF(e.target.value)}
              placeholder="Ej: 2690"
            />
          </div>

          <div>
            <Label htmlFor="pie">Pie (%)</Label>
            <Input
              id="pie"
              type="number"
              value={piePct}
              onChange={(e) => setPiePct(e.target.value)}
              placeholder="Ej: 20"
            />
          </div>

          <div>
            <Label htmlFor="plazo">Plazo (años)</Label>
            <Input
              id="plazo"
              type="number"
              value={plazoAnios}
              onChange={(e) => setPlazoAnios(e.target.value)}
              placeholder="Ej: 20"
            />
          </div>

          <div>
            <Label htmlFor="tasa">Tasa anual (%)</Label>
            <Input
              id="tasa"
              type="number"
              step="0.1"
              value={tasaAnual}
              onChange={(e) => setTasaAnual(e.target.value)}
              placeholder="Ej: 6.5"
            />
          </div>

          <Button onClick={calcular} className="w-full bg-carbon text-crema hover:opacity-90">
            Calcular
          </Button>

          {resultado && (
            <div className="bg-crema/20 p-4 rounded-md space-y-2">
              <h4 className="font-semibold text-carbon">Resultados:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-olivaTierra">Pie:</p>
                  <p className="font-semibold">{resultado.pieUF.toFixed(1)} UF</p>
                  <p className="text-xs">≈ ${resultado.pieCLP.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-olivaTierra">Dividendo:</p>
                  <p className="font-semibold">{resultado.dividendoUF.toFixed(1)} UF</p>
                  <p className="text-xs">≈ ${resultado.dividendoCLP.toLocaleString()}</p>
                </div>
              </div>
              <p className="text-xs text-olivaTierra mt-2">
                * Simulación referencial; sujeta a evaluación bancaria.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

