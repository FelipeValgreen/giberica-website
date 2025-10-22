import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Compass, Ruler, CheckCircle } from "lucide-react"
import { Section } from "@/components/Section"
import { IconLine } from "@/components/IconLine"
import { SimulatorButton } from "@/components/SimulatorButton"
import content from "@/data/content.json"

export const metadata: Metadata = {
  title: "Gibérica | Gestión e Inmobiliaria · Proyectos de inversión multifamily",
  description:
    "Multi-family bien gestionado, bien diseñado. Desde el diseño hasta la operación, nos enfocamos en proyectos que rinden y se valorizan.",
  openGraph: {
    title: "Gibérica | Gestión e Inmobiliaria",
    description: "Multi-family bien gestionado, bien diseñado.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gibérica",
            url: "https://giberica.cl",
            logo: "https://giberica.cl/logo.png",
            description: "Multi-family bien gestionado, bien diseñado. Gestión e Inmobiliaria.",
            sameAs: [
              "https://facebook.com/giberica",
              "https://instagram.com/giberica",
              "https://linkedin.com/company/giberica",
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-crema/60 py-24">
        <div className="absolute inset-0 bg-[url('/aerial-view-building-construction.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-balance text-carbon text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              Multi-family bien gestionado, bien diseñado.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-carbon/80 text-pretty leading-relaxed">
              GIBÉRICA · <span className="text-olivaTierra">Gestión e Inmobiliaria</span>. Desde el diseño hasta la operación, nos enfocamos en proyectos que rinden y se valorizan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-carbon text-crema hover:opacity-90 text-base rounded-md px-5 py-3">
                <Link href="/contacto">
                  Quiero cotizar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border border-olivaTierra text-carbon hover:bg-crema/60 text-base rounded-md px-5 py-3">
                <Link href="/san-patricio">Ver San Patricio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <Section>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-carbon text-3xl md:text-4xl font-display mb-6">Nuestro manifiesto</h2>
          <p className="text-base md:text-lg text-carbon/70 max-w-2xl mx-auto leading-relaxed">
            Tres pilares que guían cada proyecto que desarrollamos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {content.pillars.map((pilar, index) => (
            <Card key={index} className="border-2 hover:border-carbon transition-colors">
              <CardContent className="pt-10 px-8 pb-10 space-y-6">
                <IconLine icon={
                  index === 0 ? <Target className="h-7 w-7" /> :
                  index === 1 ? <Compass className="h-7 w-7" /> :
                  <Ruler className="h-7 w-7" />
                } />
                <h3 className="text-carbon text-xl md:text-2xl font-display">{pilar.title}</h3>
                <p className="text-carbon/70 leading-relaxed">
                  {pilar.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Proyecto Destacado: San Patricio */}
      <Section className="bg-crema/30">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-carbon text-3xl md:text-4xl font-display leading-tight">San Patricio</h2>
            <p className="text-base md:text-lg leading-relaxed text-carbon/80">
              62 m² y 34 m² · 2D/2B · Sistema eléctrico · Terrazas · Estacionamientos · Sin gastos comunes · Rol independiente
            </p>
            <div className="bg-olivaTierra/10 p-4 rounded-md">
              <p className="text-sm text-olivaTierra font-medium">
                {content.hero.badge}
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                <span className="text-base leading-relaxed">Sin gastos comunes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                <span className="text-base leading-relaxed">Rol independiente por unidad</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                <span className="text-base leading-relaxed">Sistema eléctrico incluido</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                <span className="text-base leading-relaxed">Terrazas y patios privados</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Button asChild className="bg-carbon text-crema hover:opacity-90 rounded-md px-5 py-3">
                <Link href="/san-patricio">
                  Ver detalles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <SimulatorButton className="border border-olivaTierra text-carbon hover:bg-crema/60 rounded-md px-5 py-3">
                Simular
              </SimulatorButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 md:order-2 shadow-lg">
            <Image
              src="/apartment-building-exterior-modern.jpg"
              alt="San Patricio - Proyecto destacado"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </Section>

      {/* Confianza Section */}
      <Section>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-carbon text-3xl md:text-4xl font-display mb-6">Confianza</h2>
          <p className="text-base md:text-lg text-carbon/70 max-w-2xl mx-auto leading-relaxed">
            Proyectos que reflejan nuestro compromiso con la excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {content.trust.map((proyecto, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={index === 0 ? "/luxury-hotel-royal-marbella.jpg" : 
                        index === 1 ? "/historic-building-palacete-alameda.jpg" : 
                        "/modern-apartment-exterior-render.jpg"}
                  alt={proyecto}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="pt-8 px-8 pb-8 space-y-6">
                <h3 className="text-carbon text-2xl font-display">{proyecto}</h3>
                <ul className="space-y-4 text-carbon/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                    <span className="leading-relaxed">
                      {index === 0 ? "Transformación de hotel boutique en activo residencial" :
                       index === 1 ? "Restauración patrimonial con criterios contemporáneos" :
                       "Desarrollo multifamily con estándares internacionales"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                    <span className="leading-relaxed">
                      {index === 0 ? "Estándares de hospitalidad aplicados a diseño residencial" :
                       index === 1 ? "Integración de tecnología y diseño histórico" :
                       "Gestión integral desde diseño hasta operación"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                    <span className="leading-relaxed">
                      {index === 0 ? "Entrega 100% conforme a checklist de calidad" :
                       index === 1 ? "Proceso documentado y certificado" :
                       "Resultados consistentes y medibles"}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonios Section */}
      <Section className="bg-crema/30">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-carbon text-3xl md:text-4xl font-display">Lo que dicen de nosotros</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {content.testimonials.map((testimonio, idx) => (
            <Card key={idx} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 px-8 pb-10 space-y-6">
                <p className="text-base md:text-lg italic leading-relaxed text-carbon/90">"{testimonio.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-14 h-14 rounded-full bg-olivaTierra/10 flex items-center justify-center">
                    <span className="text-olivaTierra font-semibold text-lg">
                      {testimonio.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-carbon text-base">{testimonio.name}</p>
                    <p className="text-sm text-carbon/70">{testimonio.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="bg-carbon text-crema">
        <div className="text-center space-y-8">
          <h2 className="text-balance text-3xl md:text-4xl font-display">¿Listo para conocer nuestros proyectos?</h2>
          <Button asChild size="lg" className="bg-olivaTierra hover:bg-olivaTierra/90 text-base rounded-md px-5 py-3">
            <Link href="/san-patricio">
              Ver San Patricio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

    </>
  )
}
