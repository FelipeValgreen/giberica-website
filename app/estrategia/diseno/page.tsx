import type { Metadata } from "next"
import Image from "next/image"
import { Palette, Compass, Ruler, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Diseño | Gibérica",
  description: "Diseño curado que combina estética, funcionalidad y sostenibilidad para crear espacios únicos y memorables.",
}

const DISENO_PRINCIPLES = [
  {
    icon: Palette,
    title: "Estética Refinada",
    description: "Cada elemento está cuidadosamente seleccionado para crear armonía visual y experiencias sensoriales excepcionales."
  },
  {
    icon: Compass,
    title: "Funcionalidad Intuitiva",
    description: "El diseño se adapta a las necesidades humanas, creando flujos naturales y espacios que mejoran la calidad de vida."
  },
  {
    icon: Ruler,
    title: "Proporción Perfecta",
    description: "Aplicamos principios de diseño clásico y contemporáneo para lograr espacios equilibrados y armoniosos."
  },
  {
    icon: Lightbulb,
    title: "Innovación Creativa",
    description: "Exploramos nuevas formas de habitar, integrando tecnología y sostenibilidad de manera elegante y funcional."
  }
]

export default function DisenoPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0E3B2E] to-[#1E4D3C] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Diseño
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Diseño curado que transforma espacios en experiencias únicas
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Nuestro enfoque de diseño combina estética refinada, funcionalidad intuitiva y sostenibilidad, creando espacios que no solo se ven excepcionales, sino que mejoran la calidad de vida de quienes los habitan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <Image
                  src="/media/filosofia-diseno.jpg"
                  alt="Proceso de diseño arquitectónico"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                  Filosofía de Diseño
                </h2>
                <p className="text-lg text-[#2B2B2B]/80 mb-6">
                  En Gibérica, el diseño es más que estética. Es la herramienta que utilizamos para crear espacios que inspiran, conectan y transforman la forma en que las personas viven y se relacionan con su entorno.
                </p>
                <p className="text-lg text-[#2B2B2B]/80 mb-8">
                  Cada proyecto es una oportunidad de explorar nuevas posibilidades, integrando elementos de diseño clásico con innovaciones contemporáneas, siempre con el foco en la experiencia humana.
                </p>
                <div className="bg-[#0E3B2E]/5 p-6 rounded-lg">
                  <p className="text-lg font-semibold text-[#0E3B2E] italic">
                    "El diseño no es solo cómo se ve y se siente. El diseño es cómo funciona."
                  </p>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="mb-20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-12 text-center">
                Principios de Diseño
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {DISENO_PRINCIPLES.map((principle, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-[#0E3B2E] rounded-full flex items-center justify-center mb-6">
                      <principle.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0E3B2E] mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-[#2B2B2B]/80">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Process */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-8 text-center">
                Proceso de Diseño
              </h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Investigación</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Análisis del contexto y necesidades</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Conceptualización</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Desarrollo de la idea central</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Desarrollo</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Refinamiento y detallado</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Validación</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Pruebas y optimización</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    5
                  </div>
                  <h3 className="font-semibold text-[#0E3B2E] mb-2">Implementación</h3>
                  <p className="text-sm text-[#2B2B2B]/80">Ejecución con precisión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
