import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TypologiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-4">Tipologías + Escenas</h2>
          <p className="text-lg text-[#8D8D8D]">Dos opciones diseñadas para vivir o invertir</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 32 m² */}
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src="/placeholder.svg?height=480&width=640" alt="Tipología 32 m²" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#1F1F1F] text-[#FBF9F4]">2D/2B 32 M²</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-[#1E4D3C] text-[#FBF9F4]">SIN GG.CC.</Badge>
              </div>
            </div>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-[#1F1F1F]">Compacto funcional</h3>
              <p className="text-[#8D8D8D] leading-relaxed">
                2 dormitorios, 2 baños, estar integrado con cocina. Terraza de 4 m². Diseño eficiente para vivir o
                arrendar.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Cocina 32m²" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dormitorio 32m²"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Baño 32m²" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 62 m² */}
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src="/placeholder.svg?height=480&width=640" alt="Tipología 62 m²" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#1F1F1F] text-[#FBF9F4]">2D/2B 62 M²</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-[#1E4D3C] text-[#FBF9F4]">SIN GG.CC.</Badge>
              </div>
            </div>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-[#1F1F1F]">Amplio con terraza o patio</h3>
              <p className="text-[#8D8D8D] leading-relaxed">
                2 dormitorios, 2 baños, estar amplio. Terraza de 6 m² (pisos superiores) o patio de 10 m² (primer piso).
                Ideal para familias o inversión.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Cocina 62m²" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dormitorio 62m²"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Terraza/Patio 62m²"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
