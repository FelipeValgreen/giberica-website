"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { track } from "@/lib/analytics"

// Valor UF actualizado (octubre 2024)
const UF_CLP = 37500 // Valor real de UF en CLP

export default function Simulator() {
  const [uf, setUf] = useState(3000)
  const [pie, setPie] = useState(20)
  const [tasa, setTasa] = useState(6.2) // anual - tasa real del mercado
  const [plazo, setPlazo] = useState(20) // años
  const [dividendo, setDividendo] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calcular = () => {
    setIsCalculating(true)
    
    // Validaciones básicas
    if (uf < 1000 || uf > 10000) {
      alert("El precio debe estar entre 1,000 y 10,000 UF")
      setIsCalculating(false)
      return
    }
    
    if (pie < 5 || pie > 50) {
      alert("El pie debe estar entre 5% y 50%")
      setIsCalculating(false)
      return
    }
    
    if (tasa < 1 || tasa > 15) {
      alert("La tasa debe estar entre 1% y 15%")
      setIsCalculating(false)
      return
    }
    
    if (plazo < 5 || plazo > 30) {
      alert("El plazo debe estar entre 5 y 30 años")
      setIsCalculating(false)
      return
    }

    const precioCLP = uf * UF_CLP
    const pieMonto = precioCLP * (pie / 100)
    const credito = precioCLP - pieMonto
    const i = tasa / 100 / 12
    const n = plazo * 12
    const cuota = (credito * i) / (1 - Math.pow(1 + i, -n))
    
    setDividendo(Math.round(cuota))
    setIsCalculating(false)
    
    track("simulate_submit", { 
      priceUF: uf, 
      pie, 
      tasa, 
      plazo, 
      dividendoCLP: Math.round(cuota),
      precioCLP,
      pieMonto,
      credito
    })
  }

  const handleGenerateLead = () => {
    track("generate_lead", { 
      source: "simulator",
      priceUF: uf,
      dividendoCLP: dividendo
    })
    // Aquí podrías abrir un modal o redirigir a un formulario
    alert("Te contactaremos con un asesor para enviarte la simulación detallada")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto" aria-label="Simulador de crédito simple">
      <CardHeader>
        <CardTitle className="text-[#0E3B2E]">Simulador de Crédito</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="uf">Precio de la unidad (UF)</Label>
            <Input
              id="uf"
              type="number"
              value={uf}
              onChange={(e) => setUf(Number(e.target.value))}
              min="1000"
              max="10000"
              step="50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pie">Pie (%)</Label>
            <Input
              id="pie"
              type="number"
              value={pie}
              onChange={(e) => setPie(Number(e.target.value))}
              min="5"
              max="50"
              step="5"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tasa">Tasa de interés anual (%)</Label>
            <Input
              id="tasa"
              type="number"
              value={tasa}
              onChange={(e) => setTasa(Number(e.target.value))}
              min="1"
              max="15"
              step="0.1"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="plazo">Plazo (años)</Label>
            <Input
              id="plazo"
              type="number"
              value={plazo}
              onChange={(e) => setPlazo(Number(e.target.value))}
              min="5"
              max="30"
              step="1"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            className="bg-[#0E3B2E] hover:bg-[#0E3B2E]/90 flex-1" 
            onClick={calcular}
            disabled={isCalculating}
          >
            {isCalculating ? "Calculando..." : "Calcular dividendo"}
          </Button>
        </div>

        {dividendo && (
          <div className="bg-[#F4EFE8] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#0E3B2E] mb-2">Resultado de la simulación</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Precio total:</span>
                <span className="font-semibold">${(uf * UF_CLP).toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between">
                <span>Pie ({pie}%):</span>
                <span className="font-semibold">${(uf * UF_CLP * pie / 100).toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between">
                <span>Crédito:</span>
                <span className="font-semibold">${(uf * UF_CLP * (100 - pie) / 100).toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between text-lg border-t pt-2">
                <span className="font-semibold">Dividendo estimado:</span>
                <span className="font-bold text-[#0E3B2E]">${dividendo.toLocaleString("es-CL")} CLP/mes</span>
              </div>
            </div>
          </div>
        )}

        {dividendo && (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleGenerateLead}
          >
            Enviar simulación a un asesor
          </Button>
        )}

        <div className="text-sm text-[#8D8D8D] text-center space-y-1">
          <p>* Cálculo estimado. Tasas y condiciones sujetas a evaluación crediticia.</p>
          <p>* UF referencial: ${UF_CLP.toLocaleString("es-CL")} CLP (valor actualizado)</p>
          <p>* Tasa de interés variable según perfil crediticio del cliente</p>
          <p>* Gastos notariales y de escrituración no incluidos</p>
        </div>
      </CardContent>
    </Card>
  )
}
