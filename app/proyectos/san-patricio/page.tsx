import type { Metadata } from "next"
import Script from "next/script"
import { HeroSection } from "@/components/san-patricio/hero-section"
import VSLPlayer from "@/components/VSLPlayer"
import { VSLSection } from "@/components/san-patricio/vsl-section"
import { UnitsSection } from "@/components/san-patricio/units-section"
import { TypologiesSection } from "@/components/san-patricio/typologies-section"
import { GallerySection } from "@/components/san-patricio/gallery-section"
import { FloorplansSection } from "@/components/san-patricio/floorplans-section"
import { LocationSection } from "@/components/san-patricio/location-section"
import { TabsSection } from "@/components/san-patricio/tabs-section"
import { SimulatorSection } from "@/components/san-patricio/simulator-section"
import { SnapshotSection } from "@/components/san-patricio/snapshot-section"
import { ProcessSection } from "@/components/san-patricio/process-section"
import { TestimonialsSection } from "@/components/san-patricio/testimonials-section"
import { RecommendationsSection } from "@/components/san-patricio/recommendations-section"
import { CTABand } from "@/components/san-patricio/cta-band"
import LegalNote from "@/components/LegalNote"

export const metadata: Metadata = {
  title: "San Patricio: 2D/2B sin gastos comunes — Gran Avenida/FACh — Entrega Ene'26",
  description:
    "2D/2B 32–62 m² con terrazas/patios y sistema eléctrico. Obra en curso. Reserva $500.000 (90 días, 50% devolución). Entrega Etapa 1: enero 2026.",
  openGraph: {
    title: "San Patricio — 2D/2B sin gastos comunes",
    description:
      "Gran Avenida/FACh · 32–62 m² · Entrega Ene'26 · Reserva $500.000",
    images: [{ url: "/og/san-patricio-hero.jpg", width: 1200, height: 630 }],
    type: "website",
  },
}

export default function SanPatricioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "San Patricio — Departamentos 2D/2B",
    url: "https://giberica.com/proyectos/san-patricio",
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
      <Script 
        id="sp-jsonld" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      <HeroSection />
      <VSLSection />
      <UnitsSection />
      <TypologiesSection />
      <GallerySection />
      <FloorplansSection />
      <LocationSection />
      <TabsSection />
      <SimulatorSection />
      <SnapshotSection />
      <ProcessSection />
      <TestimonialsSection />
      <RecommendationsSection />
      <CTABand />
      <LegalNote />
    </>
  )
}
