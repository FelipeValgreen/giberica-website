"use client"

import Image from "next/image"
import { MapPin, Clock, Train, ShoppingBag, GraduationCap, Hospital } from "lucide-react"

const NEARBY_PLACES = [
  { icon: Train, label: "FACh", time: "5 min", type: "caminando" },
  { icon: Train, label: "Comercio local", time: "5 min", type: "caminando" },
  { icon: ShoppingBag, label: "Supermercados", time: "10 min", type: "caminando" },
  { icon: GraduationCap, label: "Colegios", time: "10 min", type: "caminando" },
  { icon: Hospital, label: "Centros de salud", time: "15 min", type: "caminando" },
]

export function LocationSection() {
  return (
    <section className="py-20 md:py-32 bg-[#FBF9F4]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Ubicación & Entorno</h2>
          <p className="text-lg text-[#8D8D8D]">Gran Avenida / FACh — Conectividad y servicios</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#8D8D8D]/20">
              <Image src="/santiago-chile-map-gran-avenida-location.jpg" alt="Mapa ubicación San Patricio" fill className="object-cover" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <MapPin className="h-12 w-12 text-[#1E4D3C] drop-shadow-lg" fill="#1E4D3C" />
                  <div className="absolute inset-0 animate-ping">
                    <MapPin className="h-12 w-12 text-[#1E4D3C] opacity-75" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#8D8D8D] text-center">San Patricio · Gran Avenida / FACh · El Bosque</p>
          </div>

          {/* Nearby places */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#1F1F1F]">Servicios cercanos</h3>
            <div className="space-y-4">
              {NEARBY_PLACES.map((place, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-[#8D8D8D]/20">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center flex-shrink-0">
                    <place.icon className="h-6 w-6 text-[#1E4D3C]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1F1F1F]">{place.label}</p>
                    <p className="text-sm text-[#8D8D8D]">{place.type}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#1E4D3C]">
                    <Clock className="h-4 w-4" />
                    <span className="font-semibold">{place.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-lg bg-[#1E4D3C]/5 border border-[#1E4D3C]/20">
              <h4 className="font-semibold text-[#1F1F1F] mb-2">Isócronas de acceso</h4>
              <ul className="space-y-2 text-sm text-[#8D8D8D]">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>5 min: FACh, comercio local</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span>10 min: Metro, supermercados</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span>15 min: Centros comerciales, hospitales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
