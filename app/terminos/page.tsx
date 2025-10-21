import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones — Gibérica",
  description: "Términos y condiciones de uso del sitio web y servicios de Gibérica.",
}

export default function TerminosPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-[#0E3B2E] mb-6">Términos y Condiciones</h1>
        
        <p className="text-sm text-[#8D8D8D] mb-8">
          Última actualización: {new Date().toLocaleDateString("es-CL")}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">1. Aceptación de los Términos</h2>
          <p className="mb-4">
            Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. 
            Si no está de acuerdo con alguna parte de estos términos, no debe utilizar este sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">2. Información del Proyecto</h2>
          <p className="mb-4">
            La información presentada en este sitio web sobre el proyecto San Patricio es de carácter referencial. 
            Los precios, superficies, fechas de entrega y características pueden variar sin previo aviso.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Los precios están expresados en UF y pueden variar según disponibilidad</li>
            <li>Las superficies son aproximadas y pueden tener variaciones menores</li>
            <li>Las fechas de entrega son estimadas y están sujetas a condiciones de obra</li>
            <li>Las imágenes son referenciales y pueden no corresponder al resultado final</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">3. Proceso de Reserva</h2>
          <p className="mb-4">
            El proceso de reserva está sujeto a las siguientes condiciones:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>La reserva requiere un pago inicial de $500.000 CLP</li>
            <li>El plazo de reserva es de 90 días calendario</li>
            <li>En caso de desistimiento, se devuelve el 50% del monto pagado</li>
            <li>La reserva no garantiza la asignación de una unidad específica</li>
            <li>La reserva está sujeta a evaluación crediticia y documentación</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">4. Responsabilidades del Usuario</h2>
          <p className="mb-4">
            El usuario se compromete a:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Proporcionar información veraz y actualizada</li>
            <li>No utilizar el sitio para fines ilegales o no autorizados</li>
            <li>Respetar los derechos de propiedad intelectual</li>
            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">5. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            Gibérica no se hace responsable por:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Interrupciones temporales del servicio</li>
            <li>Pérdida de datos o información</li>
            <li>Daños derivados del uso del sitio web</li>
            <li>Variaciones en precios o disponibilidad de unidades</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">6. Modificaciones</h2>
          <p className="mb-4">
            Gibérica se reserva el derecho de modificar estos términos en cualquier momento. 
            Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">7. Ley Aplicable</h2>
          <p className="mb-4">
            Estos términos se rigen por las leyes de la República de Chile. 
            Cualquier disputa será resuelta por los tribunales competentes de Santiago.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">8. Contacto</h2>
          <p className="mb-4">
            Para consultas sobre estos términos y condiciones, puede contactarnos en:
          </p>
          <ul className="list-none pl-0 mb-4">
            <li>Email: contacto@giberica.com</li>
            <li>Teléfono: +56 9 1234 5678</li>
            <li>Dirección: Santiago, Chile</li>
          </ul>
        </section>
      </div>
    </div>
  )
}