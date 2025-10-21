import type { Metadata } from "next"
import Image from "next/image"
import { ContactoForm } from "@/components/ContactoForm"

export const metadata: Metadata = {
  title: "Contacto | Gibérica",
  description: "Contáctanos para más información sobre nuestros proyectos residenciales.",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE8]">
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0E3B2E] mb-6">Contacto</h1>
          <p className="text-lg text-[#2B2B2B]/80 mb-12">
            Estamos aquí para responder tus consultas sobre nuestros proyectos.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0E3B2E] mb-6">Información de contacto</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-[#2B2B2B] mb-1">Teléfono</h3>
                  <p className="text-[#2B2B2B]/80">+56 9 1234 5678</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2B2B2B] mb-1">Email</h3>
                  <p className="text-[#2B2B2B]/80">contacto@giberica.cl</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2B2B2B] mb-1">Dirección</h3>
                  <p className="text-[#2B2B2B]/80">Santiago, Chile</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2B2B2B] mb-1">Horario</h3>
                  <p className="text-[#2B2B2B]/80">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>

              {/* Map */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2B2B2B] mb-4">Ubicación</h3>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/media/contacto-mapa.jpg"
                    alt="Mapa de ubicación - Santiago, Chile"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-[#2B2B2B]/80 mt-2">
                  Oficina principal en Santiago, Chile
                </p>
              </div>
            </div>

            <ContactoForm />
          </div>
        </div>
      </section>
    </div>
  )
}
