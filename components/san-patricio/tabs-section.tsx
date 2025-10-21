"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Home, TrendingUp, DollarSign, Key, Shield, FileText } from "lucide-react"

export function TabsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <Tabs defaultValue="vivir" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="vivir" className="text-base">
              <Home className="h-4 w-4 mr-2" />
              Para vivir
            </TabsTrigger>
            <TabsTrigger value="invertir" className="text-base">
              <TrendingUp className="h-4 w-4 mr-2" />
              Para invertir
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vivir" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-[#1F1F1F] mb-4">Diseñado para vivir</h2>
              <p className="text-lg text-[#8D8D8D] max-w-2xl mx-auto">
                Espacios funcionales con costos predecibles y sin sorpresas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">Sin gastos comunes</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">
                    Costo mensual predecible. No hay sorpresas por reparaciones del edificio. Pagas solo tus consumos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center">
                    <Home className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">Diseño funcional</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">
                    2D/2B con distribución eficiente. Terrazas y patios para disfrutar al aire libre.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">Ubicación eficiente</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">
                    A pasos de FACh y Metro. Servicios, comercio y conectividad a minutos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="invertir" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-[#1F1F1F] mb-4">Pensado para invertir</h2>
              <p className="text-lg text-[#8D8D8D] max-w-2xl mx-auto">
                Activo líquido con salida clara y tipologías que se arriendan rápido
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center">
                    <Key className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">Rol independiente</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">
                    Salida por unidad sin depender de otros propietarios. Mayor liquidez del activo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">Tipologías rentables</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">
                    2D/2B se arrienda rápido. Demanda constante en la zona. Vacancia baja.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">Proceso transparente</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">
                    Documentación clara, checklist de entrega y estándares medibles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
