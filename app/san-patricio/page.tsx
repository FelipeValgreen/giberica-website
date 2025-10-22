import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { UnitsTable } from "@/components/UnitsTable"
import { SimulatorButton } from "@/components/SimulatorButton"
import { MapSection } from "@/components/MapSection"
import { DownloadsSection } from "@/components/DownloadCard"
import { MobileStickyBar } from "@/components/MobileStickyBar"
import { StickyCTA } from "@/components/StickyCTA"
import { TechnicalSpecs } from "@/components/san-patricio/technical-specs"
import { FAQSection } from "@/components/san-patricio/faq-section"
import { CheckCircle, MapPin, Calendar, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "San Patricio 2D/2B · Entrega 2026 | Gibérica",
  description:
    "2D/2B con rol independiente y sin gastos comunes. 32–62 m² con terrazas/patios. Entrega Enero 2026. Reserva $500.000 (50% reembolsable a 90 días).",
  openGraph: {
    title: "San Patricio — 2D/2B sin gastos comunes",
    description: "Gran Avenida/FACh · 32–62 m² · Entrega Ene'26 · Reserva $500.000",
    images: [{ url: "/og/san-patricio-hero.jpg", width: 1200, height: 630 }],
    type: "website",
  },
}

export default function SanPatricioPage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "San Patricio — Departamentos 2D/2B",
    url: "https://giberica.com/san-patricio",
    description: "2D/2B con rol independiente y sin gastos comunes. 32–62 m² con terrazas/patios.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "El Bosque",
      addressRegion: "RM",
      addressCountry: "CL",
      streetAddress: "Gran Avenida con FACh"
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Sin gastos comunes", value: true },
      { "@type": "LocationFeatureSpecification", name: "Terrazas/Patios", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rol independiente", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sistema eléctrico", value: true },
    ],
    offers: { 
      "@type": "AggregateOffer", 
      priceCurrency: "CLP", 
      availability: "https://schema.org/InStock",
      lowPrice: "79200000",
      highPrice: "109800000"
    },
    developer: {
      "@type": "Organization",
      name: "Gibérica",
      url: "https://giberica.com"
    }
  }

  return (
    <>
      <script 
        id="sp-jsonld" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      {/* Hero Section */}
      <section id="simulador" className="relative bg-crema/60 py-20 md:py-28 lg:py-36">
        <div className="absolute inset-0 bg-[url('/apartment-building-exterior-modern.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-balance text-carbon text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              San Patricio · 2D/2B · 1ª etapa 9 unidades — Entrega Enero 2026
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-carbon/80 text-pretty leading-relaxed">
              Diseñado para inversión: multifamily sin gastos comunes; cada unidad con rol independiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-carbon text-crema hover:opacity-90 text-base rounded-md px-5 py-3">
                <Link href="#reservar">
                  Reservar
                  <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <SimulatorButton className="border border-olivaTierra text-carbon hover:bg-crema/60 text-base rounded-md px-5 py-3">
                Simular
              </SimulatorButton>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-carbon text-3xl md:text-4xl font-display mb-6">Galería</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/apartment-interior-living-room-render.jpg",
            "/apartment-bedroom-render.jpg", 
            "/apartment-terrace-render.jpg",
            "/construction-site-progress.png",
            "/apartment-floor-plan-32sqm-2bed-2bath.jpg",
            "/apartment-floor-plan-62sqm-2bed-2bath.jpg"
          ].map((src, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={src}
                alt={`San Patricio ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Ficha Técnica */}
      <Section className="bg-crema/30">
        <div className="text-center mb-12">
          <h2 className="text-carbon text-3xl md:text-4xl font-display mb-6">Ficha Técnica</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-carbon text-2xl font-display mb-6">Programa</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                  <span className="leading-relaxed">62 m² y 34 m² · 2D/2B · terrazas; patio en 1º piso</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                  <span className="leading-relaxed">Terminaciones: piso, cocina, baños completos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                  <span className="leading-relaxed">Estacionamientos disponibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                  <span className="leading-relaxed">Servicios: sin gastos comunes; mantención y aseo a cargo del propietario</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                  <span className="leading-relaxed">Rol: independiente por unidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-olivaTierra text-xl mt-0.5" />
                  <span className="leading-relaxed">Permisos: obra gruesa; entrega piloto enero 2026</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-carbon text-2xl font-display mb-6">Ubicación</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-olivaTierra text-xl mt-0.5" />
                  <div>
                    <p className="font-semibold">Calle San Patricio, El Bosque</p>
                    <p className="text-sm text-carbon/70">Frente a FACH · Paradero 34 Gran Avenida</p>
                  </div>
                </div>
                <div className="bg-olivaTierra/10 p-4 rounded-md">
                  <p className="text-sm text-olivaTierra font-medium">
                    <strong>Entrega 1ª etapa:</strong> Enero 2026<br/>
                    <strong>Reserva:</strong> $500.000 (50% reembolsable a 90 días)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Cuadro de Unidades */}
      <Section id="unidades">
        <div className="text-center mb-12">
          <h2 className="text-carbon text-3xl md:text-4xl font-display mb-6">Unidades Disponibles</h2>
          <p className="text-carbon/70">Filtra por metraje y estado para encontrar tu unidad ideal</p>
        </div>
        <UnitsTable />
      </Section>

      {/* Mapa */}
      <Section className="bg-crema/30">
        <div className="text-center mb-12">
          <h2 className="text-carbon text-3xl md:text-4xl font-display mb-6">Ubicación</h2>
        </div>
        <MapSection />
      </Section>

      {/* Ficha Técnica */}
      <Section>
        <TechnicalSpecs />
      </Section>

      {/* Descargas */}
      <Section>
        <DownloadsSection />
      </Section>

      {/* FAQ */}
      <Section className="bg-crema/30">
        <FAQSection />
      </Section>

      {/* Sticky Bar Mobile */}
      <MobileStickyBar />

      {/* Sticky CTA Desktop */}
      <StickyCTA />

    </>
  )
}
