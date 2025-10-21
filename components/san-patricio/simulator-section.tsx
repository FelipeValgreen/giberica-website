"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { track } from "@/lib/analytics"

const UF_TO_CLP = 37000 // Mock value

export function SimulatorSection() {
  const { toast } = useToast()
  const [precioUF, setPrecioUF] = useState(2200)
  const [piePercent, setPiePercent] = useState(20)
  const [tasa, setTasa] = useState(4.5)
  const [plazo, setPlazo] = useState(25)
  const [dividendo, setDividendo] = useState<number | null>(null)

  const calcular = () => {
    const montoFinanciar = precioUF * (1 - piePercent / 100)
    const tasaMensual = tasa / 100 / 12
    const numPagos = plazo * 12

    const dividendoUF =
      (montoFinanciar * tasaMensual * Math.pow(1 + tasaMensual, numPagos)) / (Math.pow(1 + tasaMensual, numPagos) - 1)

    const dividendoCLP = Math.round(dividendoUF * UF_TO_CLP)
    setDividendo(dividendoCLP)

    track("simulate_click", {
      priceUF: precioUF,
      pie: piePercent,
      tasa,
      plazo,
      dividendoCLP,
    })
  }

  const enviarAsesor = async () => {
    track("simulate_submit", {
      priceUF: precioUF,
      pie: piePercent,
      tasa,
      plazo,
      dividendoCLP: dividendo,
    })

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "simulacion",
          simulacion: { precioUF, piePercent, tasa, plazo, dividendo },
        }),
      })

      if (response.ok) {
        toast({
          title: "Simulación enviada",
          description: "Un asesor se contactará contigo pronto.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar la simulación. Intenta nuevamente.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="simulador" className="py-20 md:py-32 bg-[#FBF9F4]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Simulador</h2>
          <p className="text-lg text-[#8D8D8D]">Calcula tu dividendo mensual estimado</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Simulación de crédito hipotecario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="precio">Precio (UF)</Label>
                <Input
                  id="precio"
                  type="number"
                  value={precioUF}
                  onChange={(e) => setPrecioUF(Number(e.target.value))}
                  min={2000}
                  max={4000}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pie">Pie (%)</Label>
                <Input
                  id="pie"
                  type="number"
                  value={piePercent}
                  onChange={(e) => setPiePercent(Number(e.target.value))}
                  min={10}
                  max={50}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tasa">Tasa anual (%)</Label>
                <Input
                  id="tasa"
                  type="number"
                  step="0.1"
                  value={tasa}
                  onChange={(e) => setTasa(Number(e.target.value))}
                  min={3}
                  max={8}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plazo">Plazo (años)</Label>
                <Input
                  id="plazo"
                  type="number"
                  value={plazo}
                  onChange={(e) => setPlazo(Number(e.target.value))}
                  min={10}
                  max={30}
                />
              </div>
            </div>

            <Button onClick={calcular} className="w-full bg-[#1E4D3C] hover:bg-[#1E4D3C]/90">
              Calcular dividendo
            </Button>

            {dividendo !== null && (
              <div className="p-6 rounded-lg bg-[#1E4D3C]/5 border border-[#1E4D3C]/20 space-y-4">
                <div className="text-center">
                  <p className="text-sm text-[#8D8D8D] mb-2">Dividendo mensual estimado</p>
                  <p className="text-4xl font-bold text-[#1E4D3C]">${dividendo.toLocaleString("es-CL")}</p>
                  <p className="text-sm text-[#8D8D8D] mt-2">
                    Pie: UF {((precioUF * piePercent) / 100).toLocaleString()}( $
                    {Math.round(((precioUF * piePercent) / 100) * UF_TO_CLP).toLocaleString("es-CL")})
                  </p>
                </div>

                <Button onClick={enviarAsesor} variant="outline" className="w-full bg-transparent">
                  Enviar simulación a un asesor
                </Button>
              </div>
            )}

            <p className="text-xs text-[#8D8D8D] text-center">
              * Simulación referencial. Valores finales sujetos a aprobación bancaria.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
