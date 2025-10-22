import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo funciona la reserva y el reembolso del 50%?",
      answer: "La reserva es de $500.000. Si decides no continuar dentro de 90 días, se te reembolsa el 50% ($250.000). Esto te da tiempo para evaluar el proyecto sin compromiso total."
    },
    {
      question: "¿Qué documentos necesito para reservar?",
      answer: "Solo necesitas tu cédula de identidad y un comprobante de ingresos. El proceso es simple y te guiamos paso a paso."
    },
    {
      question: "¿Cómo funciona el arriendo y mantención?",
      answer: "Cada unidad es independiente. Puedes arrendar directamente o contratar nuestros servicios de gestión. La mantención es por cuenta del propietario, sin gastos comunes."
    },
    {
      question: "¿Qué incluye la seguridad del proyecto?",
      answer: "El proyecto cuenta con seguridad perimetral y acceso controlado. Cada unidad tiene su propia seguridad individual."
    },
    {
      question: "¿Cuándo puedo visitar el proyecto?",
      answer: "Las visitas están disponibles de lunes a viernes de 9:00 a 18:00 y sábados de 10:00 a 14:00. Puedes agendar tu visita llamando o por WhatsApp."
    }
  ]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="font-display text-2xl font-bold text-carbon mb-6">
        Preguntas Frecuentes
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-carbon">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-carbon/80">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
