"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { track } from "@/lib/analytics"

const GALLERY_IMAGES = {
  renders: [
    { src: "/media/san-patricio-render-1.jpg", alt: "Render exterior San Patricio - Vista principal" },
    { src: "/media/san-patricio-render-2.jpg", alt: "Render exterior San Patricio - Vista lateral" },
    { src: "/media/san-patricio-render-1.jpg", alt: "Render interior San Patricio - Living" },
    { src: "/media/san-patricio-render-2.jpg", alt: "Render interior San Patricio - Dormitorio" },
  ],
  obra: [
    { src: "/media/san-patricio-obra-1.jpg", alt: "Avance de obra San Patricio - Estructura" },
    { src: "/media/san-patricio-obra-2.jpg", alt: "Avance de obra San Patricio - Fachada" },
    { src: "/media/san-patricio-obra-1.jpg", alt: "Avance de obra San Patricio - Interior" },
  ],
  drone: [
    { src: "/media/san-patricio-drone-1.jpg", alt: "Vista aérea San Patricio - Contexto urbano" },
    { src: "/media/san-patricio-drone-2.jpg", alt: "Vista aérea San Patricio - Proyecto completo" },
  ],
}

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTab, setCurrentTab] = useState<"renders" | "obra" | "drone">("renders")

  const currentImages = GALLERY_IMAGES[currentTab]

  const openLightbox = (index: number, tab: "renders" | "obra" | "drone") => {
    setCurrentTab(tab)
    setCurrentImage(index)
    setLightboxOpen(true)
    track("gallery_image_view", { tab, index })
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <section className="py-20 md:py-32 bg-[#FBF9F4]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Galería</h2>
          <p className="text-lg text-[#8D8D8D]">Renders, avance de obra y vistas aéreas</p>
        </div>

        <Tabs defaultValue="renders" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="renders">Renders</TabsTrigger>
            <TabsTrigger value="obra">Obra</TabsTrigger>
            <TabsTrigger value="drone">Drone</TabsTrigger>
          </TabsList>

          <TabsContent value="renders" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {GALLERY_IMAGES.renders.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx, "renders")}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="obra" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALLERY_IMAGES.obra.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx, "obra")}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drone" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {GALLERY_IMAGES.drone.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx, "drone")}
                  className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-0">
          <div className="relative aspect-video">
            <Image
              src={currentImages[currentImage].src || "/placeholder.svg"}
              alt={currentImages[currentImage].alt}
              fill
              className="object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
              aria-label="Siguiente"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentImage + 1} / {currentImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
