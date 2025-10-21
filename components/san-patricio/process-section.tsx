import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const STEPS = [
  {
    number: "1",
    title: "Reserva",
    description: "$500.000 por 90 días. Devolución del 50% según T&C si desistes dentro del plazo.",
  },
  {
    number: "2",
    title: "Promesa",
    description: "Firma de promesa de compraventa por correo electrónico",
  },
  {
    number: "3",
    title: "Entrega",
    description: "Etapa 1: enero 2026 con checklist de estándares",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-[#FBF9F4]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Proceso & T&C</h2>
          <p className="text-lg text-[#8D8D8D]">Pasos claros desde la reserva hasta la entrega</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1E4D3C] text-white flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">{step.title}</h3>
                  <p className="text-[#8D8D8D] leading-relaxed">{step.description}</p>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#8D8D8D]/20" />
                )}
              </div>
            ))}
          </div>

          <div className="p-8 rounded-lg bg-white border border-[#8D8D8D]/20 space-y-4">
            <h3 className="text-xl font-semibold text-[#1F1F1F] flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#1E4D3C]" />
              Condiciones
            </h3>
            <ul className="space-y-3 text-[#8D8D8D]">
              <li className="flex items-start gap-2">
                <span className="text-[#1E4D3C] mt-1">•</span>
                <span>Reserva: $500.000 por 90 días. Devolución del 50% según T&C si desistes dentro del plazo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1E4D3C] mt-1">•</span>
                <span>Promesa de compraventa se firma por correo electrónico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1E4D3C] mt-1">•</span>
                <span>Entrega Etapa 1 programada para enero 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1E4D3C] mt-1">•</span>
                <span>Cada unidad pasa por checklist de estándares de entrega</span>
              </li>
            </ul>
            <p className="text-sm text-[#8D8D8D] pt-4 border-t">
              Para más detalles, consulta nuestros{" "}
              <Link href="/terminos" className="text-[#1E4D3C] hover:underline">
                términos y condiciones
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
