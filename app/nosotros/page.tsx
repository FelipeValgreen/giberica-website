import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Award, TrendingUp } from "@/components/icons"

export const metadata: Metadata = {
  title: "Nosotros — Gibérica",
  description:
    "Desarrollamos activos residenciales con estándares de hospitalidad. Conoce nuestro equipo, valores y trayectoria.",
}

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#F4EFE8] py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-balance text-[#0E3B2E]">Quiénes somos</h1>
            <p className="text-xl md:text-2xl text-[#2B2B2B]/80 leading-relaxed">
              Somos un equipo especializado en transformar espacios en activos residenciales de valor sostenible,
              aplicando estándares de hospitalidad a cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0E3B2E]/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#0E3B2E]" />
                </div>
                <h2 className="text-[#0E3B2E]">Misión</h2>
                <p className="text-lg leading-relaxed text-[#2B2B2B]/80">
                  Desarrollar activos residenciales con procesos rigurosos, diseño curado y estándares medibles que
                  garanticen resultados consistentes y valor sostenible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0E3B2E]/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#0E3B2E]" />
                </div>
                <h2 className="text-[#0E3B2E]">Visión</h2>
                <p className="text-lg leading-relaxed text-[#2B2B2B]/80">
                  Ser referentes en el desarrollo de activos residenciales que combinan excelencia operativa,
                  transparencia y criterios de hospitalidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-32 bg-[#F4EFE8]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[#0E3B2E] mb-4">Nuestros valores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#0E3B2E]">Transparencia</h3>
              <p className="text-[#2B2B2B]/80 leading-relaxed">
                Procesos claros, documentación completa y comunicación honesta en cada etapa.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#0E3B2E]">Excelencia</h3>
              <p className="text-[#2B2B2B]/80 leading-relaxed">
                Estándares rigurosos de calidad en diseño, construcción y entrega.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#0E3B2E]">Innovación</h3>
              <p className="text-[#2B2B2B]/80 leading-relaxed">
                Aplicamos criterios de hospitalidad y mejores prácticas al desarrollo residencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[#0E3B2E] mb-4">Nuestro equipo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales con experiencia en desarrollo inmobiliario, arquitectura, hospitalidad y gestión de
              proyectos
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#0E3B2E]/10 flex items-center justify-center">
              <Users className="h-10 w-10 text-[#0E3B2E]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0E3B2E] text-[#F4EFE8]">
        <div className="container text-center space-y-8">
          <h2 className="text-balance">Conoce nuestra metodología</h2>
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
