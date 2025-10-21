import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Quote } from "lucide-react"
import { TESTIMONIOS } from "@/data/testimonios"

export const metadata: Metadata = {
  title: "Prensa y Testimonios | Gibérica",
  description: "Lo que dicen nuestros clientes y la prensa sobre nuestros proyectos y servicios.",
}

const PRESS_ARTICLES = [
  {
    title: "Gibérica revoluciona el desarrollo inmobiliario en Santiago",
    source: "El Mercurio",
    date: "15 de marzo, 2024",
    excerpt: "La empresa ha logrado posicionarse como referente en innovación y sostenibilidad en el sector inmobiliario.",
    url: "#",
    image: "/media/blog-banner-1.jpg"
  },
  {
    title: "Proyecto San Patricio: un nuevo estándar en vivienda social",
    source: "La Tercera",
    date: "8 de febrero, 2024", 
    excerpt: "El desarrollo combina diseño funcional con accesibilidad, estableciendo nuevos parámetros de calidad.",
    url: "#",
    image: "/media/blog-banner-2.jpg"
  },
  {
    title: "Metodología de precisión en construcción residencial",
    source: "Constructivo",
    date: "22 de enero, 2024",
    excerpt: "Gibérica implementa nuevas tecnologías y procesos que optimizan tiempos y garantizan calidad.",
    url: "#",
    image: "/media/filosofia-precision.jpg"
  }
]

const AWARDS = [
  {
    title: "Mejor Proyecto Residencial 2023",
    organization: "Cámara Chilena de la Construcción",
    year: "2023",
    description: "Reconocimiento por innovación en diseño y sostenibilidad"
  },
  {
    title: "Excelencia en Construcción",
    organization: "Instituto de la Construcción",
    year: "2023", 
    description: "Por implementación de metodologías de precisión"
  },
  {
    title: "Desarrollo Sostenible",
    organization: "Green Building Council Chile",
    year: "2022",
    description: "Certificación por prácticas ambientales responsables"
  }
]

export default function PrensaPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0E3B2E] to-[#1E4D3C] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Prensa y Testimonios
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Lo que dicen nuestros clientes y la prensa
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Nuestro trabajo habla por sí mismo. Descubre las opiniones de nuestros clientes y el reconocimiento que hemos recibido por nuestra labor.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                Testimonios de Nuestros Clientes
              </h2>
              <p className="text-lg text-[#2B2B2B]/80 max-w-3xl mx-auto">
                La satisfacción de nuestros clientes es nuestra mayor recompensa. Conoce sus experiencias.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIOS.map((testimonio, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Quote className="h-5 w-5 text-[#0E3B2E]" />
                    </div>
                    <p className="text-[#2B2B2B]/80 mb-6 italic">
                      "{testimonio.cita}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-[#0E3B2E]">{testimonio.nombre}</div>
                      <div className="text-sm text-[#2B2B2B]/60">{testimonio.tipo}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                En la Prensa
              </h2>
              <p className="text-lg text-[#2B2B2B]/80 max-w-3xl mx-auto">
                Nuestros proyectos y metodologías han sido destacados por los principales medios especializados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRESS_ARTICLES.map((article, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{article.source}</Badge>
                      <div className="flex items-center gap-1 text-sm text-[#8D8D8D]">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#0E3B2E] mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#2B2B2B]/80 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a 
                      href={article.url}
                      className="inline-flex items-center gap-1 text-[#0E3B2E] hover:underline text-sm font-medium"
                    >
                      Leer más
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E3B2E] mb-6">
                Reconocimientos y Premios
              </h2>
              <p className="text-lg text-[#2B2B2B]/80 max-w-3xl mx-auto">
                Nuestro compromiso con la excelencia ha sido reconocido por instituciones líderes del sector.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {AWARDS.map((award, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#0E3B2E] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{award.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0E3B2E] mb-2">
                      {award.title}
                    </h3>
                    <div className="text-sm text-[#2B2B2B]/60 mb-4">
                      {award.organization}
                    </div>
                    <p className="text-sm text-[#2B2B2B]/80">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-[#0E3B2E] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Números que Hablan
              </h2>
              <p className="text-xl text-white/90">
                Resultados que respaldan nuestra experiencia y compromiso
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-white/90">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-white/90">Satisfacción del Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                <div className="text-white/90">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-white/90">Premios y Reconocimientos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
