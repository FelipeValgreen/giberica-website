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
          <h1 className="text-balance text-carbon font-display text-3xl md:text-4xl lg:text-5xl font-bold">2D/2B con rol independiente y sin gastos comunes.</h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-carbon/80 text-pretty leading-relaxed">
            San Patricio · Gran Avenida/FACh · 32–62 m², terrazas/patios, sistema eléctrico. Obra en curso · Entrega
            Etapa 1: enero 2026.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-carbon text-crema hover:opacity-90">
              Reservar $500.000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-[#FBF9F4] bg-transparent"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar tour 12 min
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1E4D3C] text-[#1E4D3C] hover:bg-[#1E4D3C] hover:text-[#FBF9F4] bg-transparent"
              asChild
            >
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
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
