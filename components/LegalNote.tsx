import Link from "next/link"

export default function LegalNote() {
  return (
    <div className="bg-[#F4EFE8] py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-sm text-[#8D8D8D] space-y-2">
          <p>
            <strong>Información importante:</strong> Imágenes referenciales. Precios y superficies pueden variar. 
            Sujeto a disponibilidad. Política de datos vigente.
          </p>
          <p>
            Los precios están expresados en UF y pueden variar según disponibilidad. Las superficies son aproximadas 
            y pueden tener variaciones menores. Las fechas de entrega son estimadas y están sujetas a condiciones de obra.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              href="/terminos" 
              className="text-[#0E3B2E] hover:text-[#0E3B2E]/80 underline"
            >
              Términos y Condiciones
            </Link>
            <Link 
              href="/politicas" 
              className="text-[#0E3B2E] hover:text-[#0E3B2E]/80 underline"
            >
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
