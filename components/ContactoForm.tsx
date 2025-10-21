"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { track } from "@/lib/analytics"

export function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    track("contact_form_submit", {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono
    })

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-[#0E3B2E] mb-6">Envíanos un mensaje</h2>
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ¡Mensaje enviado correctamente! Te contactaremos pronto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input 
              id="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre" 
              className="mt-1" 
              required 
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com" 
              className="mt-1" 
              required 
            />
          </div>
          <div>
            <Label htmlFor="telefono">Teléfono</Label>
            <Input 
              id="telefono" 
              type="tel" 
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+56 9 XXXX XXXX" 
              className="mt-1" 
            />
          </div>
          <div>
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos en qué podemos ayudarte"
              className="mt-1 min-h-[120px]"
              required
            />
          </div>
          <div className="flex items-start space-x-2">
            <input 
              type="checkbox" 
              id="consentimiento" 
              required 
              className="mt-1"
            />
            <label htmlFor="consentimiento" className="text-sm text-[#2B2B2B]/80">
              Acepto la <a href="/politicas" className="text-[#0E3B2E] hover:underline">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales.
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#0E3B2E] hover:bg-[#0E3B2E]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      )}
    </div>
  )
}
