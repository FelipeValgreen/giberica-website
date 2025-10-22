"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Map, Home } from "lucide-react"

interface DownloadCardProps {
  title: string
  description: string
  icon: React.ReactNode
  url: string
  filename: string
}

export function DownloadCard({ title, description, icon, url, filename }: DownloadCardProps) {
  const handleDownload = () => {
    // Evento GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'file_download', {
        file_name: filename,
        file_type: 'PDF',
        event_category: 'Downloads'
      })
    }
    
    // Abrir descarga
    window.open(url, '_blank')
  }

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-olivaTierra">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-carbon mb-2">
              {title}
            </h3>
            <p className="text-sm text-carbon/80 mb-4">
              {description}
            </p>
            <Button 
              onClick={handleDownload}
              className="bg-carbon text-crema hover:opacity-90 w-full"
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function DownloadsSection() {
  const downloads = [
    {
      title: "Brochure San Patricio",
      description: "Información completa del proyecto, ubicación y características.",
      icon: <FileText className="h-6 w-6" />,
      url: "/downloads/brochure-san-patricio.pdf",
      filename: "brochure-san-patricio.pdf"
    },
    {
      title: "Ficha Técnica",
      description: "Especificaciones técnicas, terminaciones y detalles constructivos.",
      icon: <Home className="h-6 w-6" />,
      url: "/downloads/ficha-tecnica-san-patricio.pdf", 
      filename: "ficha-tecnica-san-patricio.pdf"
    },
    {
      title: "Planos Arquitectónicos",
      description: "Planos de planta, elevaciones y detalles de las unidades.",
      icon: <Map className="h-6 w-6" />,
      url: "/downloads/planos-san-patricio.pdf",
      filename: "planos-san-patricio.pdf"
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold text-carbon mb-6">
        Documentos del Proyecto
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {downloads.map((download, index) => (
          <DownloadCard
            key={index}
            title={download.title}
            description={download.description}
            icon={download.icon}
            url={download.url}
            filename={download.filename}
          />
        ))}
      </div>
    </div>
  )
}