"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface DownloadCardProps {
  title: string
  file: string
  description?: string
}

export function DownloadCard({ title, file, description = "PDF · Descarga gratuita" }: DownloadCardProps) {
  const handleDownload = () => {
    // TODO: Implementar tracking de descargas
    console.log(`Descargando: ${file}`)
    // En producción, esto abriría el archivo real
    window.open(`/docs/${file}`, '_blank')
  }

  return (
    <div className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleDownload}>
      <div className="p-6 text-center">
        <Download className="h-12 w-12 text-olivaTierra mx-auto mb-4" />
        <h3 className="text-carbon text-xl font-display mb-2">{title}</h3>
        <p className="text-carbon/70 text-sm mb-4">{description}</p>
        <Button 
          variant="outline" 
          className="border border-olivaTierra text-carbon hover:bg-crema/60"
        >
          Descargar
        </Button>
      </div>
    </div>
  )
}
