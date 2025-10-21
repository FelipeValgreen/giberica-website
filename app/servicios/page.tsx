import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Home, Building, Wrench, Users, Target, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios | Gibérica",
  description: "Servicios especializados en desarrollo inmobiliario, diseño arquitectónico y construcción de proyectos residenciales.",
}

const SERVICES = [
  {
    icon: Home,
    title: "Desarrollo Residencial",
    description: "Proyectos habitacionales que combinan diseño funcional, sostenibilidad y calidad de vida.",
    features: ["Diseño arquitectónico", "Planificación urbana", "Gestión de permisos", "Control de calidad"]
  },
  {
    icon: Building,
    title: "Construcción",
    description: "Ejecución de proyectos con estándares de excelencia y metodologías de precisión.",
    features: ["Construcción residencial", "Remodelaciones", "Ampliaciones", "Mantenimiento"]
  },
  {
    icon: Wrench,
    title: "Consultoría",
    description: "Asesoría especializada en desarrollo inmobiliario y optimización de proyectos.",
    features: ["Estudios de factibilidad", "Análisis de mercado", "Optimización de costos", "Gestión de riesgos"]
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Análisis y Planificación",
    description: "Estudiamos el terreno, contexto urbano y necesidades del mercado para desarrollar la estrategia óptima."
  },
  {
    number: "02", 
    title: "Diseño y Desarrollo",
    description: "Creamos diseños innovadores que maximizan el valor y la funcionalidad del proyecto."
  },
  {
    number: "03",
    title: "Construcción",
    description: "Ejecutamos con precisión, cumpliendo estándares de calidad y cronogramas establecidos."
  },
  {
    number: "04",
    title: "Entrega y Post-Venta",
    description: "Entregamos proyectos terminados con servicios de post-venta y garantías completas."
  }
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0E3B2E] to-[#1E4D3C] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Soluciones integrales para el desarrollo inmobiliario
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Ofrecemos servicios especializados que abarcan todo el ciclo de vida de un proyecto inmobiliario, desde la concepción hasta la entrega final.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                Servicios Especializados
              </h2>
              <p className="text-lg text-[#2B2B2B]/80 max-w-3xl mx-auto">
                Nuestra experiencia y metodología nos permiten ofrecer soluciones completas y personalizadas para cada proyecto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {SERVICES.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#0E3B2E] rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0E3B2E] mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-[#2B2B2B]/80 mb-6 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#2B2B2B]/80">
                          <CheckCircle2 className="h-4 w-4 text-[#0E3B2E] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                Nuestro Proceso
              </h2>
              <p className="text-lg text-[#2B2B2B]/80 max-w-3xl mx-auto">
                Metodología probada que garantiza resultados excepcionales en cada etapa del proyecto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0E3B2E] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#2B2B2B]/80">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                  ¿Por qué elegir Gibérica?
                </h2>
                <p className="text-lg text-[#2B2B2B]/80 mb-8">
                  Nuestra experiencia, metodología y compromiso con la excelencia nos distinguen en el mercado inmobiliario.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0E3B2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0E3B2E] mb-2">Experiencia Comprobada</h3>
                      <p className="text-[#2B2B2B]/80">Más de 10 años desarrollando proyectos exitosos en el mercado chileno.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0E3B2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0E3B2E] mb-2">Calidad Garantizada</h3>
                      <p className="text-[#2B2B2B]/80">Estándares de construcción que superan las expectativas del mercado.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0E3B2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0E3B2E] mb-2">Atención Personalizada</h3>
                      <p className="text-[#2B2B2B]/80">Cada proyecto recibe atención individualizada y seguimiento continuo.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/media/filosofia-transformacion.jpg"
                    alt="Servicios de desarrollo inmobiliario"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#0E3B2E] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos y descubre cómo podemos ayudarte a materializar tu visión.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0E3B2E] hover:bg-white/90">
                <Link href="/contacto">
                  Contactar Ahora
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0E3B2E]">
                <Link href="/proyectos">
                  Ver Proyectos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
