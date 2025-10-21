"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Download, ZoomIn } from "lucide-react"
import { track } from "@/lib/analytics"

const FLOORPLANS = [
  {
    id: "32m2",
    title: "Plano 2D/2B 32 m²",
    image: "/media/planos-32m2.jpg",
    pdfUrl: "/planos/sp-32m2.pdf",
  },
  {
    id: "62m2",
    title: "Plano 2D/2B 62 m²",
    image: "/media/planos-62m2.jpg",
    pdfUrl: "/planos/sp-62m2.pdf",
  },
]

export function FloorplansSection() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof FLOORPLANS)[0] | null>(null)

  const handleDownload = (plan: (typeof FLOORPLANS)[0]) => {
    track("floorplan_download", { plan: plan.id })
    // In production, this would trigger actual PDF download
    window.open(plan.pdfUrl, "_blank")
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Planos</h2>
          <p className="text-lg text-[#8D8D8D]">Distribución y medidas de cada tipología</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FLOORPLANS.map((plan) => (
            <div key={plan.id} className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#8D8D8D]/20 group cursor-pointer bg-white">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                  aria-label={`Ver ${plan.title} en grande`}
                >
                  <ZoomIn className="h-8 w-8 text-[#1F1F1F] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-[#1F1F1F]">{plan.title}</h3>
                <Button onClick={() => handleDownload(plan)} variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF A4
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#8D8D8D] text-center mt-8">
          * Planos referenciales. Medidas y distribución pueden variar según unidad específica.
        </p>
      </div>

      {/* Zoom Modal */}
      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPlan && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{selectedPlan.title}</h3>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white">
                <Image
                  src={selectedPlan.image}
                  alt={selectedPlan.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <Button
                onClick={() => handleDownload(selectedPlan)}
                className="w-full bg-[#1E4D3C] hover:bg-[#1E4D3C]/90"
              >
                <Download className="h-4 w-4 mr-2" />
                Descargar PDF A4
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
