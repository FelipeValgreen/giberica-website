import type { Metadata } from "next"
import Image from "next/image"
import { Target, CheckCircle2, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Precisión | Gibérica",
  description: "Precisión en cada detalle, desde la planificación hasta la entrega final, garantizando estándares de excelencia en cada proyecto.",
}

const PRECISION_ASPECTS = [
  {
    icon: Target,
    title: "Planificación Meticulosa",
    description: "Cada proyecto se desarrolla con una planificación exhaustiva que considera todos los aspectos técnicos, legales y comerciales."
  },
  {
    icon: CheckCircle2,
    title: "Control de Calidad",
    description: "Implementamos sistemas de control de calidad en cada etapa del proceso, garantizando estándares de excelencia."
  },
  {
    icon: Clock,
    title: "Cumplimiento de Plazos",
    description: "Nuestro compromiso con la precisión se refleja en el cumplimiento estricto de cronogramas y entregas programadas."
  },
  {
    icon: Award,
    title: "Estándares de Excelencia",
    description: "Aplicamos los más altos estándares de la industria, superando expectativas y estableciendo nuevos referentes de calidad."
  }
]

export default function PrecisionPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0E3B2E] to-[#1E4D3C] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Precisión
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Excelencia en cada detalle, desde la concepción hasta la entrega
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              La precisión es el fundamento de nuestra metodología. Cada proceso, cada decisión y cada detalle está cuidadosamente planificado y ejecutado para garantizar resultados excepcionales y superar las expectativas de nuestros clientes.
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
                  Metodología de Precisión
                </h2>
                <p className="text-lg text-[#2B2B2B]/80 mb-6">
                  En Gibérica, la precisión no es solo un objetivo, es nuestra forma de trabajar. Implementamos metodologías rigurosas que garantizan la excelencia en cada etapa del proceso, desde la planificación inicial hasta la entrega final.
                </p>
                <p className="text-lg text-[#2B2B2B]/80 mb-8">
                  Nuestro enfoque sistemático y detallado nos permite anticipar desafíos, optimizar recursos y entregar proyectos que superan consistentemente las expectativas de calidad y funcionalidad.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#0E3B2E]/5 rounded-lg">
                    <div className="text-2xl font-bold text-[#0E3B2E]">100%</div>
                    <div className="text-sm text-[#2B2B2B]/80">Cumplimiento de plazos</div>
                  </div>
                  <div className="text-center p-4 bg-[#0E3B2E]/5 rounded-lg">
                    <div className="text-2xl font-bold text-[#0E3B2E]">0</div>
                    <div className="text-sm text-[#2B2B2B]/80">Tolerancia a errores</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/media/filosofia-precision.jpg"
                  alt="Control de calidad y precisión"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Precision Aspects */}
            <div className="mb-20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-12 text-center">
                Aspectos de Precisión
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {PRECISION_ASPECTS.map((aspect, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-[#0E3B2E] rounded-full flex items-center justify-center mb-6">
                      <aspect.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0E3B2E] mb-4">
                      {aspect.title}
                    </h3>
                    <p className="text-[#2B2B2B]/80">
                      {aspect.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Standards */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-8 text-center">
                Estándares de Calidad
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E3B2E] mb-4">Inspección Rigurosa</h3>
                  <p className="text-[#2B2B2B]/80">
                    Cada elemento es inspeccionado múltiples veces durante el proceso de construcción, garantizando la máxima calidad.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E3B2E] mb-4">Certificaciones</h3>
                  <p className="text-[#2B2B2B]/80">
                    Cumplimos con todas las certificaciones y estándares de la industria, superando los requisitos mínimos.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0E3B2E] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E3B2E] mb-4">Mejora Continua</h3>
                  <p className="text-[#2B2B2B]/80">
                    Implementamos procesos de mejora continua que nos permiten elevar constantemente nuestros estándares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
