"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TESTIMONIOS } from "@/data/testimonios"
import { Play } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Testimonios</h2>
          <p className="text-lg text-[#8D8D8D]">Lo que dicen quienes ya reservaron</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIOS.map((testimonio, idx) => (
            <Card key={idx} className="bg-white border-2 hover:border-[#1E4D3C] transition-colors">
              <CardContent className="pt-8 space-y-4">
                {testimonio.videoUrl && (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1F1F1F]/5 group cursor-pointer">
                    {testimonio.avatarUrl && (
                      <Image
                        src={testimonio.avatarUrl || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-[#1E4D3C] ml-1" fill="#1E4D3C" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-lg italic leading-relaxed text-[#1F1F1F]">"{testimonio.cita}"</p>

                  <div className="flex items-center space-x-3 pt-4 border-t">
                    {testimonio.avatarUrl && !testimonio.videoUrl && (
                      <Image
                        src={testimonio.avatarUrl || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-[#1F1F1F]">{testimonio.nombre}</p>
                      <p className="text-sm text-[#8D8D8D]">{testimonio.tipo}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
