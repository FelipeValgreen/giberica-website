import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

export function TechnicalSpecs() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="font-display text-2xl font-bold text-carbon mb-6">
        Ficha Técnica
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="programa">
          <AccordionTrigger className="text-left font-semibold text-carbon">
            Programa
          </AccordionTrigger>
          <AccordionContent className="text-carbon/80">
            <ul className="space-y-2">
              <li>• Departamentos de 62 m² y 34 m²</li>
              <li>• 2 Dormitorios / 2 Baños</li>
              <li>• Terrazas en pisos superiores</li>
              <li>• Patios en 1º piso</li>
              <li>• Sistema eléctrico incluido</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="terminaciones">
          <AccordionTrigger className="text-left font-semibold text-carbon">
            Terminaciones
          </AccordionTrigger>
          <AccordionContent className="text-carbon/80">
            <ul className="space-y-2">
              <li>• Pisos flotantes en dormitorios</li>
              <li>• Cerámica en baños y cocina</li>
              <li>• Pintura interior y exterior</li>
              <li>• Puertas y ventanas de PVC</li>
              <li>• Instalaciones eléctricas completas</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="estacionamientos">
          <AccordionTrigger className="text-left font-semibold text-carbon">
            Estacionamientos
          </AccordionTrigger>
          <AccordionContent className="text-carbon/80">
            <p>Estacionamientos disponibles para unidades de 62 m². No incluidos en unidades de 34 m².</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="servicios">
          <AccordionTrigger className="text-left font-semibold text-carbon">
            Servicios
          </AccordionTrigger>
          <AccordionContent className="text-carbon/80">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-olivaTierra" />
                <span className="font-semibold text-carbon">Sin gastos comunes</span>
              </div>
              <p className="text-sm text-carbon/70">
                Mantención y aseo por cuenta del propietario. Cada unidad es independiente.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rol">
          <AccordionTrigger className="text-left font-semibold text-carbon">
            Rol
          </AccordionTrigger>
          <AccordionContent className="text-carbon/80">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-olivaTierra" />
                <span className="font-semibold text-carbon">Rol independiente por unidad</span>
              </div>
              <p className="text-sm text-carbon/70">
                Cada departamento tiene su propio rol, facilitando la venta individual.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="permisos">
          <AccordionTrigger className="text-left font-semibold text-carbon">
            Permisos y Obra
          </AccordionTrigger>
          <AccordionContent className="text-carbon/80">
            <ul className="space-y-2">
              <li>• Obra gruesa en progreso</li>
              <li>• Permisos municipales aprobados</li>
              <li>• Piloto Enero 2026</li>
              <li>• Entrega Etapa 1: Enero 2026</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
