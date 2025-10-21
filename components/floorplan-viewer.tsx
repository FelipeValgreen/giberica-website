"use client"

import * as React from "react"
import Image from "next/image"
import { Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { track } from "@/lib/analytics"
import { Button } from "@/components/ui/button"

export default function FloorplanViewer({
  title = "Plano 2D/2B — 62 m²",
  image = "/floorplans/62m2.png",
  alt = "Plano tipología 62 m²",
  pdf = "/floorplans/62m2.pdf",
  specs = { util: 56, terraza: 6, patio: 0 },
}: {
  title?: string
  image?: string
  alt?: string
  pdf?: string
  specs?: { util: number; terraza: number; patio: number }
}) {
  const [scale, setScale] = React.useState(1)

  const zoomIn = () => setScale((s) => Math.min(2.5, +(s + 0.25).toFixed(2)))
  const zoomOut = () => setScale((s) => Math.max(1, +(s - 0.25).toFixed(2)))
  const reset = () => setScale(1)

  const onDownload = () => {
    track("floorplan_download", {
      title,
      pdf,
      util: specs.util,
      terraza: specs.terraza,
      patio: specs.patio,
    })
  }

  return (
    <section aria-label="Planos y superficies" className="py-20 md:py-28 lg:py-36 bg-[#F4EFE8]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0E3B2E] mb-3">{title}</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Superficies: útil {specs.util} m² · terraza {specs.terraza} m² · patio {specs.patio} m²
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-white rounded-lg border p-1">
              <Button onClick={zoomOut} aria-label="Alejar plano" variant="ghost" size="sm" className="h-9 w-9 p-0">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm tabular-nums w-12 text-center font-medium">{Math.round(scale * 100)}%</span>
              <Button onClick={zoomIn} aria-label="Acercar plano" variant="ghost" size="sm" className="h-9 w-9 p-0">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button onClick={reset} aria-label="Restablecer zoom" variant="ghost" size="sm" className="h-9 w-9 p-0">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            <Button asChild className="bg-[#0E3B2E] hover:bg-[#0E3B2E]/90">
              <a href={pdf} download onClick={onDownload}>
                <Download className="h-4 w-4 mr-2" />
                Descargar PDF
              </a>
            </Button>
          </div>
        </div>

        <div
          className="relative overflow-auto rounded-2xl border bg-white shadow-lg"
          aria-label="Lienzo del plano con zoom"
        >
          <div
            className="origin-top-left transition-transform duration-200"
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={alt}
              width={1600}
              height={1000}
              priority={false}
              className="select-none"
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">
          Imágenes y planos referenciales y sujetos a variación. Revisa la ficha técnica final.
        </p>
      </div>
    </section>
  )
}
