import type { Metadata } from "next"
import { TESTIMONIOS } from "@/data/testimonios"
import { RECOMENDACIONES } from "@/data/recomendaciones"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Prensa y Testimonios | Gibérica",
  description: "Lo que dicen nuestros clientes y los medios sobre Gibérica.",
}

export default function PrensaTestimoniosPage() {
  const prensaItems = [
    { medio: "El Mercurio", logo: "/el-mercurio-logo.jpg", link: "#" },
    { medio: "La Tercera", logo: "/la-tercera-logo.jpg", link: "#" },
    { medio: "Revista Vivienda", logo: "/revista-vivienda-logo.jpg", link: "#" },
    { medio: "Portal Inmobiliario", logo: "/portal-inmobiliario-logo.jpg", link: "#" },
  ]

  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0E3B2E] mb-6">Prensa y Testimonios</h1>
          <p className="text-lg text-[#2B2B2B]/80">
            La confianza de nuestros clientes y el reconocimiento de los medios respaldan nuestro trabajo.
          </p>
        </div>
      </section>

      {/* Prensa */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold text-[#0E3B2E] mb-8 text-center">Apariciones en medios</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {prensaItems.map((item) => (
            <a
              key={item.medio}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={item.logo || "/placeholder.svg"}
                alt={item.medio}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold text-[#0E3B2E] mb-8 text-center">Testimonios de clientes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIOS.map((testimonio, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <p className="text-[#2B2B2B] mb-4 italic">"{testimonio.cita}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0E3B2E]/10 flex items-center justify-center">
                    <span className="font-semibold text-[#0E3B2E]">{testimonio.nombre.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2B2B2B]">{testimonio.nombre}</p>
                    <p className="text-sm text-[#2B2B2B]/60">{testimonio.tipo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="container py-12 pb-24">
        <h2 className="font-serif text-3xl font-bold text-[#0E3B2E] mb-8 text-center">Recomendaciones de expertos</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {RECOMENDACIONES.map((rec, index) => (
            <Card key={index} className="bg-white border-l-4 border-[#B66A2C]">
              <CardContent className="p-6">
                <p className="text-[#2B2B2B] mb-3">"{rec.cita}"</p>
                <p className="font-semibold text-[#0E3B2E]">— {rec.fuente}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
