import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-crema flex items-center justify-center">
      <div className="container max-w-2xl mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-carbon mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-display text-carbon mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-carbon/70 mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-carbon text-crema hover:opacity-90">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-olivaTierra text-carbon hover:bg-crema/60">
              <Link href="/san-patricio">
                Ver San Patricio
              </Link>
            </Button>
          </div>
          
          <div className="pt-8">
            <Link 
              href="/contacto"
              className="text-olivaTierra hover:text-carbon transition-colors"
            >
              ¿Necesitas ayuda? Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
