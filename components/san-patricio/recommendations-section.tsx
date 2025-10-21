"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { RECOMENDACIONES } from "@/data/recomendaciones"
import { Quote } from "lucide-react"

export function RecommendationsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#FBF9F4]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Recomendaciones</h2>
          <p className="text-lg text-[#8D8D8D]">Lo que dicen expertos y medios</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {RECOMENDACIONES.map((rec, idx) => (
            <Card key={idx} className="bg-white border-2 hover:border-[#1E4D3C] transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center flex-shrink-0">
                    <Quote className="h-5 w-5 text-[#1E4D3C]" />
                  </div>
                  <p className="text-base leading-relaxed text-[#1F1F1F] italic">"{rec.cita}"</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  {rec.logoUrl && (
                    <Image
                      src={rec.logoUrl || "/placeholder.svg"}
                      alt={rec.fuente}
                      width={40}
                      height={40}
                      className="rounded grayscale opacity-60"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-[#1F1F1F] text-sm">{rec.fuente}</p>
                    {rec.link && (
                      <a
                        href={rec.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#1E4D3C] hover:underline"
                      >
                        Ver fuente
                      </a>
                    )}
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
