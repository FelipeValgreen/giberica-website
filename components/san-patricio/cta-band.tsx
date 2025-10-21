"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, DollarSign } from "lucide-react"
import { track } from "@/lib/analytics"

export function CTABand() {
  const handleReserveClick = () => {
    track("reserve_start", { source: "cta_band" })
    window.location.href = "#reservar"
  }

  const handleScheduleClick = () => {
    track("schedule_start", { source: "cta_band" })
    // In production, this would open a scheduling modal or redirect
    window.location.href = "#agendar"
  }

  const handleWhatsAppClick = () => {
    track("whatsapp_click", { source: "cta_band" })
    window.open("https://wa.me/56912345678?text=Hola, quiero información sobre San Patricio", "_blank")
  }

  return (
    <section className="py-12 bg-[#1E4D3C] text-white sticky bottom-0 z-40 shadow-lg">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">¿Listo para reservar tu unidad?</h3>
            <p className="text-[#FBF9F4]/80 text-sm md:text-base">Reserva con $500.000 por 90 días · Entrega Ene'26</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button size="lg" onClick={handleReserveClick} className="bg-[#B66A2C] hover:bg-[#B66A2C]/90 text-white">
              <DollarSign className="h-5 w-5 mr-2" />
              Reservar $500.000
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleScheduleClick}
              className="bg-white text-[#1E4D3C] hover:bg-white/90 border-white"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar tour 12 min
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="bg-transparent text-white hover:bg-white/10 border-white"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
