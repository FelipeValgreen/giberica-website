"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export function MobileStickyBar() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+56912345678'}?text=Hola, me interesa San Patricio`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+56912345678')
  }

  const handleReserve = () => {
    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-carbon text-crema p-4 md:hidden z-50">
      <div className="flex gap-2">
        <Button 
          size="sm" 
          className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90"
          onClick={handleWhatsApp}
        >
          <Phone className="h-4 w-4 mr-2" />
          WhatsApp
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex-1 border-crema text-crema hover:bg-crema/10"
          onClick={handleCall}
        >
          <Phone className="h-4 w-4 mr-2" />
          Llamar
        </Button>
        <Button 
          size="sm" 
          className="flex-1 bg-olivaTierra hover:bg-olivaTierra/90"
          onClick={handleReserve}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Reservar
        </Button>
      </div>
    </div>
  )
}
