import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-crema py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge
              variant="secondary"
              className="bg-olivaTierra text-crema hover:bg-olivaTierra/90 px-4 py-2 text-xs uppercase tracking-wide"
            >
              ENTREGA ENE'26
            </Badge>
            <Badge
              variant="secondary"
              className="bg-carbon text-crema hover:bg-carbon/90 px-4 py-2 text-xs uppercase tracking-wide"
            >
              RESERVA $500K/90D (50%)
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-carbon font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            San Patricio · 2D/2B · 1ª etapa 9 unidades — Entrega Enero 2026
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-carbon/80 text-pretty leading-relaxed">
            Diseñado para inversión: multifamily sin gastos comunes; cada unidad con rol independiente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-carbon text-crema hover:opacity-90">
              Reservar $500.000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-olivaTierra text-carbon hover:bg-crema/60 bg-transparent"
            >
              Simular
            </Button>
          </div>

          {/* Key Features */}
          <div className="pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#8D8D8D]">
            <span>Rol independiente</span>
            <span className="hidden sm:inline">·</span>
            <span>Sin gastos comunes</span>
            <span className="hidden sm:inline">·</span>
            <span>Diseño funcional (2D/2B)</span>
            <span className="hidden sm:inline">·</span>
            <span>Ubicación eficiente</span>
            <span className="hidden sm:inline">·</span>
            <span>Proceso claro</span>
          </div>
        </div>
      </div>
    </section>
  )
}
