"use client"

import { useState } from "react"

export function MapSection() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-olivaTierra mx-auto mb-4"></div>
            <p className="text-carbon/70">Cargando mapa...</p>
          </div>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-70.654321!3d-33.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c1234567890%3A0x1234567890abcdef!2sGran%20Avenida%2C%20El%20Bosque%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación San Patricio"
        onLoad={() => setMapLoaded(true)}
      />
    </div>
  )
}
