import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Transformación | Gibérica",
  description: "Transformamos espacios en experiencias de vida excepcionales a través de la innovación y el diseño centrado en las personas.",
}

const TRANSFORMACION_POINTS = [
  {
    icon: Target,
    title: "Visión Transformadora",
    description: "Reimaginamos el concepto de vivienda, creando espacios que van más allá de lo funcional para convertirse en experiencias de vida únicas."
  },
  {
    icon: TrendingUp,
    title: "Innovación Continua",
    description: "Implementamos tecnologías y metodologías de vanguardia para optimizar cada proceso y maximizar el valor de cada proyecto."
  },
  {
    icon: Users,
    title: "Impacto Social",
    description: "Nuestros proyectos transforman no solo espacios, sino comunidades enteras, generando valor social y económico sostenible."
  }
]

export default function TransformacionPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0E3B2E] to-[#1E4D3C] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Transformación
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Reimaginamos espacios para crear experiencias de vida excepcionales
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              A través de la innovación, el diseño centrado en las personas y la implementación de tecnologías de vanguardia, transformamos cada proyecto en una oportunidad de crear valor sostenible y experiencias únicas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                  Nuestra Filosofía de Transformación
                </h2>
                <p className="text-lg text-[#2B2B2B]/80 mb-6">
                  En Gibérica, la transformación va más allá de construir edificios. Creamos ecosistemas habitacionales que evolucionan con las necesidades de las personas, integrando tecnología, sostenibilidad y diseño de vanguardia.
                </p>
                <p className="text-lg text-[#2B2B2B]/80 mb-8">
                  Cada proyecto es una oportunidad de redefinir estándares, implementar soluciones innovadoras y generar un impacto positivo en la comunidad y el entorno.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0E3B2E]" />
                  <span className="text-lg font-semibold text-[#0E3B2E]">
                    Transformación integral desde la concepción
                  </span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/media/filosofia-transformacion.jpg"
                  alt="Transformación e innovación en diseño"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {TRANSFORMACION_POINTS.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] rounded-full flex items-center justify-center mx-auto mb-6">
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E3B2E] mb-4">
                    {point.title}
                  </h3>
                  <p className="text-[#2B2B2B]/80">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-8 text-center">
                Proceso de Transformación
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Análisis</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Estudiamos el contexto, necesidades y oportunidades del mercado</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Conceptualización</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Desarrollamos la visión transformadora del proyecto</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Implementación</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Ejecutamos con precisión y estándares de excelencia</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Evolución</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Monitoreamos y optimizamos continuamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
