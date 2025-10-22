import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
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

      <Script id="schema-product" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Product",
          name:"San Patricio · Departamentos 2D/2B",
          brand:{"@type":"Organization", name:"Gibérica"},
          image:["https://giberica-san-patricio-filipovalverde-5673s-projects.vercel.app/apartment-building-exterior-modern.jpg"],
          description:"2D/2B (62 y 34 m²), rol independiente, sin gastos comunes, El Bosque.",
          offers:{
            "@type":"AggregateOffer",
            priceCurrency:"CLF",
            lowPrice:"1990",
            highPrice:"2810",
            availability:"https://schema.org/InStock",
            url:"https://giberica-san-patricio-filipovalverde-5673s-projects.vercel.app/san-patricio"
          }
        })}
      </Script>

      {/* Hero Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h1 className="h1">San Patricio · 2D/2B — 1ª etapa 9 unidades</h1>
            <p className="subhead">
              62 m² y 34 m² · <strong>rol independiente</strong> · <strong>sin gastos comunes</strong>.
              El Bosque (San Patricio), frente a FACH. Reserva $500.000 (50% a 90 días).
            </p>
            <div className="flex gap-3">
              <a href="#unidades" className="btn-primary">Ver unidades</a>
              <a href="#simulador" className="btn-secondary">Simular pie y dividendo</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border card p-0">
            <Image 
              src="/apartment-building-exterior-modern.jpg" 
              alt="Render San Patricio" 
              width={1200} 
              height={800} 
              priority 
              sizes="(max-width:768px) 100vw, 560px"
            />
          </div>
        </div>
      </Section>

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
        
        {/* Micro-FAQ */}
        <section className="max-w-3xl mx-auto mt-10 space-y-3 text-sm text-carbon/80">
          <h3 className="font-display font-semibold text-lg">Preguntas frecuentes</h3>
          <details className="card p-4">
            <summary className="font-medium">¿Cómo reservo?</summary>
            <p>Reserva con $500.000. Si cancelas dentro de 90 días, devolución del 50%.</p>
          </details>
          <details className="card p-4">
            <summary className="font-medium">¿Hay gastos comunes?</summary>
            <p>No, el proyecto está diseñado <strong>sin gastos comunes</strong>.</p>
          </details>
          <details className="card p-4">
            <summary className="font-medium">¿Qué significa rol independiente?</summary>
            <p>Cada unidad tiene su <strong>rol propio</strong>, lo que facilita compra, venta y financiamiento.</p>
          </details>
        </section>
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

      {/* CTA sticky solo móvil */}
      <div className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        <a href="#simulador" className="btn-primary">Simular</a>
        <a href="#unidades" className="btn-secondary">Ver unidades</a>
      </div>

    </>
  )
}
