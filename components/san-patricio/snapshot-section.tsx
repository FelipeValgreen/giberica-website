"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { track } from "@/lib/analytics"

export function SnapshotSection() {
  const { toast } = useToast()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [loading, setLoading] = useState(false)

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    track("download_snapshot", { email, telefono })

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "snapshot",
          email,
          telefono,
        }),
      })

      if (response.ok) {
        toast({
          title: "Descarga iniciada",
          description: "El Investment Snapshot se descargará en breve.",
        })

        // Simulate PDF download
        setTimeout(() => {
          setDialogOpen(false)
          setEmail("")
          setTelefono("")
        }, 1000)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo procesar la solicitud.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-[#1E4D3C]/10 flex items-center justify-center mx-auto">
            <FileText className="h-8 w-8 text-[#1E4D3C]" />
          </div>

          <div className="space-y-4">
            <h2 className="text-[#1F1F1F]">Investment Snapshot</h2>
            <p className="text-lg text-[#8D8D8D] leading-relaxed">
              Descarga el análisis completo con renta esperada, vacancia estimada, cap rate y escenarios de salida por
              unidad y por bloque.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-[#FBF9F4] border border-[#8D8D8D]/20">
              <p className="text-sm text-[#8D8D8D] mb-1">Renta esperada</p>
              <p className="text-2xl font-bold text-[#1E4D3C]">$450k - $650k</p>
              <p className="text-xs text-[#8D8D8D] mt-1">mensual por unidad</p>
            </div>

            <div className="p-6 rounded-lg bg-[#FBF9F4] border border-[#8D8D8D]/20">
              <p className="text-sm text-[#8D8D8D] mb-1">Vacancia estimada</p>
              <p className="text-2xl font-bold text-[#1E4D3C]">{"<"}5%</p>
              <p className="text-xs text-[#8D8D8D] mt-1">zona Gran Avenida</p>
            </div>

            <div className="p-6 rounded-lg bg-[#FBF9F4] border border-[#8D8D8D]/20">
              <p className="text-sm text-[#8D8D8D] mb-1">Cap rate estimado</p>
              <p className="text-2xl font-bold text-[#1E4D3C]">6.5% - 7.5%</p>
              <p className="text-xs text-[#8D8D8D] mt-1">anual bruto</p>
            </div>
          </div>

          <Button size="lg" onClick={() => setDialogOpen(true)} className="bg-[#1E4D3C] hover:bg-[#1E4D3C]/90">
            <Download className="h-5 w-5 mr-2" />
            Descargar Investment Snapshot
          </Button>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Descargar Investment Snapshot</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleDownload} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                placeholder="+56 9 1234 5678"
              />
            </div>

            <Button type="submit" className="w-full bg-[#1E4D3C] hover:bg-[#1E4D3C]/90" disabled={loading}>
              {loading ? "Procesando..." : "Descargar PDF"}
            </Button>

            <p className="text-xs text-[#8D8D8D] text-center">
              Al descargar aceptas recibir información sobre San Patricio.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
