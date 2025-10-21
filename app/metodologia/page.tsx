import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle2, FileText, Shield, ClipboardCheck } from "@/components/icons"
import { ImagePlaceholder } from "@/components/ImagePlaceholder"

export const metadata: Metadata = {
  title: "Metodología — Gibérica",
  description:
    "Estándares medibles de entrega, QA por etapas, documentación completa y gobierno de datos en cada proyecto.",
}

export default function MetodologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#F4EFE8] py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-balance text-[#0E3B2E]">Metodología rigurosa</h1>
            <p className="text-xl md:text-2xl text-[#2B2B2B]/80 leading-relaxed">
              Aplicamos estándares medibles de entrega, QA por etapas, documentación completa y gobierno de datos en
              cada proyecto que desarrollamos.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[#0E3B2E] mb-4">Nuestro proceso</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada proyecto pasa por etapas definidas con criterios de calidad verificables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-[#0E3B2E] transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#0E3B2E]">Análisis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evaluación técnica, financiera y de mercado. Definición de estándares del proyecto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0E3B2E] transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#0E3B2E]">Diseño</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Arquitectura funcional, especificaciones técnicas y criterios de hospitalidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0E3B2E] transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#0E3B2E]">Ejecución</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Construcción con QA continuo, inspecciones por etapa y control de calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0E3B2E] transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0E3B2E] text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-[#0E3B2E]">Entrega</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Checklist de más de 100 puntos, documentación as-built y certificados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estándares */}
      <section className="py-20 md:py-32 bg-[#F4EFE8]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[#0E3B2E]">Estándares de entrega</h2>
              <p className="text-lg leading-relaxed text-[#2B2B2B]/80">
                Cada unidad pasa por un checklist exhaustivo antes de la entrega. Más de 100 puntos de control que
                garantizan la calidad.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0E3B2E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0E3B2E] mb-1">Inspección estructural</h4>
                    <p className="text-[#2B2B2B]/80">Muros, pisos, cielos, ventanas y puertas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0E3B2E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0E3B2E] mb-1">Instalaciones</h4>
                    <p className="text-[#2B2B2B]/80">Sistema eléctrico, grifería, sanitarios y terminaciones</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0E3B2E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0E3B2E] mb-1">Documentación</h4>
                    <p className="text-[#2B2B2B]/80">Planos as-built, certificados y garantías</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0E3B2E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0E3B2E] mb-1">Impermeabilizaciones</h4>
                    <p className="text-[#2B2B2B]/80">Baños, terrazas y puntos críticos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/media/metodologia-imagen.jpg"
                alt="Checklist de calidad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QA por etapas */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[#0E3B2E] mb-4">Control de calidad por etapas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No esperamos al final. Inspeccionamos en cada fase crítica del proyecto.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-[#0E3B2E]">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5" />
                  Etapa 1: Obra gruesa
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#2B2B2B]/80 leading-relaxed">
                Inspección de fundaciones, estructura, muros y losas. Verificación de niveles y escuadras. Control de
                materiales y especificaciones técnicas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-[#0E3B2E]">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="h-5 w-5" />
                  Etapa 2: Instalaciones
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#2B2B2B]/80 leading-relaxed">
                Revisión de sistemas eléctricos, sanitarios y de gas. Pruebas de presión en cañerías. Verificación de
                puntos de luz y enchufes según planos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-[#0E3B2E]">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  Etapa 3: Terminaciones
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#2B2B2B]/80 leading-relaxed">
                Control de pinturas, revestimientos, pisos y carpintería. Verificación de funcionamiento de ventanas y
                puertas. Limpieza y detalles finales.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-[#0E3B2E]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  Etapa 4: Entrega final
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#2B2B2B]/80 leading-relaxed">
                Checklist completo de más de 100 puntos. Entrega de documentación as-built, certificados y garantías.
                Capacitación en uso de instalaciones.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0E3B2E] text-[#F4EFE8]">
        <div className="container text-center space-y-8">
          <h2 className="text-balance">Ve nuestra metodología en acción</h2>
          <Button asChild size="lg" className="bg-[#B66A2C] hover:bg-[#B66A2C]/90">
            <Link href="/proyectos">
              Ver proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
