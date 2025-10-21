"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { track } from "@/lib/analytics"

export function VSLSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const has50 = useRef(false)

  useEffect(() => {
    track("view_content", { section: "vsl" })
  }, [])

  const handlePlay = () => {
    track("vsl_play")
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100

    if (progress >= 50 && !has50.current) {
      has50.current = true
      track("vsl_50")
    }
  }

  const handleEnded = () => {
    track("vsl_complete")
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-[#1F1F1F]">Conoce San Patricio en 90 segundos</h2>
            <p className="text-lg text-[#8D8D8D]">Sin gastos comunes · 2D/2B · Entrega Ene'26</p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1F1F1F]">
            <video
              ref={videoRef}
              controls
              poster="/media/vsl-poster.jpg"
              className="w-full h-full"
              aria-label="Video San Patricio: 2D/2B sin gastos comunes"
              onPlay={handlePlay}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            >
              <source src="/media/vsl-sanpatricio.mp4" type="video/mp4" />
              <track kind="subtitles" src="/media/vsl-subtitulos.vtt" srcLang="es" label="Español" default />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Sticky CTA for mobile */}
          <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
            <Button className="w-full bg-[#1E4D3C] hover:bg-[#1E4D3C]/90 text-[#FBF9F4] shadow-lg">
              Reservar $500.000
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
