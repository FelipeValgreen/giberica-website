import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Home } from "@/components/icons"
import { ImagePlaceholder } from "@/components/ImagePlaceholder"

export const metadata: Metadata = {
  title: "Proyectos — Gibérica",
  description: "Conoce nuestros proyectos de desarrollo residencial con estándares de hospitalidad.",
}

export default function ProyectosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#F4EFE8] py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-balance text-[#0E3B2E]">Nuestros proyectos</h1>
            <p className="text-xl md:text-2xl text-[#2B2B2B]/80 leading-relaxed">
              Desarrollos residenciales con diseño curado, procesos rigurosos y estándares medibles.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos actuales */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-[#0E3B2E] mb-4">En desarrollo</h2>
            <p className="text-lg text-muted-foreground">Proyectos con unidades disponibles</p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl">
            <Card className="border-2 hover:border-[#0E3B2E] transition-colors overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src="/media/san-patricio-render-1.jpg"
                    alt="San Patricio - Edificio moderno"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-[#1E4D3C] text-white hover:bg-[#1E4D3C]/90">En obra</Badge>
                      <Badge variant="outline">Entrega Ene'26</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F1F1F]">San Patricio</h3>
                    <p className="text-lg text-[#8D8D8D] leading-relaxed">
                      2D/2B con rol independiente y sin gastos comunes. 32–62 m², terrazas/patios, sistema eléctrico.
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-[#8D8D8D]">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Gran Avenida / FACh, San Bernardo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      <span>32–62 m² · 2D/2B</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Entrega Etapa 1: Enero 2026</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild className="w-full bg-[#1E4D3C] hover:bg-[#1E4D3C]/90">
                      <Link href="/proyectos/san-patricio">
                        Ver proyecto
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Proyectos completados */}
      <section className="py-20 md:py-32 bg-[#F4EFE8]">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-[#0E3B2E] mb-4">Proyectos completados</h2>
            <p className="text-lg text-muted-foreground">Nuestra trayectoria</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
                <Image src="/media/royal-marbella-render.jpg" alt="Royal Marbella" fill className="object-cover" />
              </div>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Completado</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#0E3B2E]">Royal Marbella</h3>
                <p className="text-[#2B2B2B]/80 leading-relaxed">
                  Transformación de hotel boutique en activo residencial con estándares de hospitalidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
                <Image
                  src="/media/palacete-render.jpg"
                  alt="Palacete de la Alameda"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Completado</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#0E3B2E]">Palacete de la Alameda</h3>
                <p className="text-[#2B2B2B]/80 leading-relaxed">
                  Restauración patrimonial con criterios contemporáneos e integración de tecnología.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0E3B2E] text-[#F4EFE8]">
        <div className="container text-center space-y-8">
          <h2 className="text-balance">¿Quieres conocer más sobre nuestra metodología?</h2>
          <Button asChild size="lg" className="bg-[#B66A2C] hover:bg-[#B66A2C]/90">
            <Link href="/metodologia">
              Ver metodología
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
