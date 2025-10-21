"use client"

import * as React from "react"
import Image from "next/image"
import { track } from "@/lib/analytics"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

type GalleryTab = {
  name: "Renders" | "Obra" | "Drone"
  images: GalleryImage[]
}

export default function MediaGallery({
  tabs,
  defaultTab = "Renders",
}: {
  tabs: GalleryTab[]
  defaultTab?: GalleryTab["name"]
}) {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState<GalleryImage | null>(null)

  const openLightbox = (img: GalleryImage) => {
    setActive(img)
    setOpen(true)
    track("gallery_image_view", { image_id: img.id, alt: img.alt, src: img.src })
  }

  return (
    <section aria-label="Galería de imágenes del proyecto" className="py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0E3B2E] mb-8">Recorre San Patricio</h2>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full md:w-auto mb-8">
            <TabsTrigger value="Renders">Renders</TabsTrigger>
            <TabsTrigger value="Obra">Obra</TabsTrigger>
            <TabsTrigger value="Drone">Drone</TabsTrigger>
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {tab.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => openLightbox(img)}
                    className="group relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E3B2E]"
                    aria-label={`Abrir imagen: ${img.alt}`}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="h-48 md:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black border-0" showCloseButton={false}>
            <div className="relative">
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {active && (
                <img
                  src={active.src || "/placeholder.svg"}
                  alt={active.alt}
                  className="w-full max-h-[85vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
