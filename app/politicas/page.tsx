import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Políticas de Privacidad — Gibérica",
  description: "Políticas de privacidad y protección de datos personales de Gibérica.",
}

export default function PoliticasPage() {
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
        <h1 className="text-3xl font-bold text-[#0E3B2E] mb-6">Políticas de Privacidad</h1>
        
        <p className="text-sm text-[#8D8D8D] mb-8">
          Última actualización: {new Date().toLocaleDateString("es-CL")}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">1. Información que Recopilamos</h2>
          <p className="mb-4">
            Recopilamos información que usted nos proporciona directamente, incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nombre completo y datos de contacto</li>
            <li>Información financiera para evaluación crediticia</li>
            <li>Preferencias de comunicación</li>
            <li>Información sobre su interés en nuestros proyectos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">2. Uso de la Información</h2>
          <p className="mb-4">
            Utilizamos su información personal para:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Procesar solicitudes de información y reservas</li>
            <li>Evaluar elegibilidad crediticia</li>
            <li>Comunicarnos sobre nuestros productos y servicios</li>
            <li>Mejorar nuestros servicios y experiencia del usuario</li>
            <li>Cumplir con obligaciones legales y regulatorias</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">3. Compartir Información</h2>
          <p className="mb-4">
            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Con su consentimiento explícito</li>
            <li>Para cumplir con obligaciones legales</li>
            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
            <li>En caso de fusión, adquisición o venta de activos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">4. Seguridad de los Datos</h2>
          <p className="mb-4">
            Implementamos medidas de seguridad técnicas y organizacionales para proteger su información:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encriptación de datos sensibles</li>
            <li>Acceso restringido a información personal</li>
            <li>Monitoreo regular de sistemas de seguridad</li>
            <li>Capacitación del personal en protección de datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">5. Cookies y Tecnologías Similares</h2>
          <p className="mb-4">
            Utilizamos cookies y tecnologías similares para:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mejorar la funcionalidad del sitio web</li>
            <li>Analizar el tráfico y comportamiento de usuarios</li>
            <li>Personalizar contenido y anuncios</li>
            <li>Recordar sus preferencias</li>
          </ul>
          <p className="mb-4">
            Puede controlar el uso de cookies a través de la configuración de su navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">6. Sus Derechos</h2>
          <p className="mb-4">
            De acuerdo con la Ley 19.628 sobre Protección de la Vida Privada, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Conocer qué información tenemos sobre usted</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de su información</li>
            <li>Oponerse al procesamiento de sus datos</li>
            <li>Retirar su consentimiento en cualquier momento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">7. Retención de Datos</h2>
          <p className="mb-4">
            Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos 
            para los cuales fue recopilada, incluyendo requisitos legales, contables o de reportes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">8. Menores de Edad</h2>
          <p className="mb-4">
            Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente 
            información personal de menores de edad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">9. Cambios en esta Política</h2>
          <p className="mb-4">
            Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios 
            significativos a través de nuestro sitio web o por correo electrónico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#0E3B2E] mb-4">10. Contacto</h2>
          <p className="mb-4">
            Para ejercer sus derechos o consultas sobre esta política, puede contactarnos en:
          </p>
          <ul className="list-none pl-0 mb-4">
            <li>Email: privacidad@giberica.com</li>
            <li>Teléfono: +56 9 1234 5678</li>
            <li>Dirección: Santiago, Chile</li>
          </ul>
        </section>
      </div>
    </div>
  )
}