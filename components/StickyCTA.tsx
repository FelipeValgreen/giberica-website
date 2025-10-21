"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Eye, Calendar } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Mostrar después de 50% del scroll
      if (scrollY > windowHeight * 0.5 && scrollY < documentHeight - windowHeight - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 right-5 z-30 bg-white border border-olivaTierra/20 rounded-lg shadow-xl p-4 max-w-xs">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-display font-semibold text-carbon text-sm">
            ¿Interesado en San Patricio?
          </h3>
          <p className="text-xs text-carbon/70">
            Ver disponibilidad y reservar
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6 p-0 text-carbon/50 hover:text-carbon"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Button
          size="sm"
          className="bg-carbon text-crema hover:opacity-90 text-xs px-3 py-2"
          onClick={() => {
            document.getElementById('unidades')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Eye className="h-3 w-3 mr-1" />
          Ver unidades
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-olivaTierra text-carbon hover:bg-crema/60 text-xs px-3 py-2"
          onClick={() => {
            document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Calendar className="h-3 w-3 mr-1" />
          Simular
        </Button>
      </div>
    </div>
  )
}
