"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Calendar } from "lucide-react"

export function MobileStickyBar() {
  const handleWhatsApp = () => {
    // Evento GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_open', {
        event_category: 'Contact',
        event_label: 'Mobile Sticky Bar'
      })
    }
    
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+56912345678'}?text=Hola, me interesa San Patricio`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+56912345678')
  }

  const handleReserve = () => {
    // Evento GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'reserve_click', {
        event_category: 'Conversion',
        event_label: 'Mobile Sticky Bar'
      })
    }
    
    // Scroll to units table
    const unitsSection = document.getElementById('unidades')
    if (unitsSection) {
      unitsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-carbon text-crema p-4 md:hidden">
      <div className="flex gap-3">
        <Button
          onClick={handleWhatsApp}
          className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          WhatsApp
        </Button>
        
        <Button
          onClick={handleCall}
          variant="outline"
          className="flex-1 border-crema text-crema hover:bg-crema/10"
        >
          <Phone className="h-4 w-4 mr-2" />
          Llamar
        </Button>
        
        <Button
          onClick={handleReserve}
          className="flex-1 bg-olivaTierra hover:bg-olivaTierra/90 text-crema"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Reservar
        </Button>
      </div>
    </div>
  )
}