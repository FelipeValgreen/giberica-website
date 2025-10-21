"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Phone, Calendar } from "lucide-react"

type Msg = { role: "user" | "assistant"; content: string; ts?: number }

export function WhatsappWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant" as const,
      content: "Hola 👋, soy **María**, asesora virtual de **Gibérica**. ¿Te ayudo con *San Patricio*?"
    }
  ])
  const [input, setInput] = useState("")
  const [showContactForm, setShowContactForm] = useState(false)
  const [simulationData, setSimulationData] = useState<any>(null)

  const quickActions = [
    "Ver unidades",
    "Simular mi pie", 
    "Reservar",
    "Agendar visita",
    "Hablar con un asesor"
  ]

  const handleQuickAction = (action: string) => {
    const responses: Record<string, string> = {
      "Ver unidades": "Tenemos unidades de 62 m² y 34 m², 2D/2B. Entrega estimada Enero 2026. ¿Prefieres ver *disponibles* ahora?",
      "Simular mi pie": "Te ayudo a simular. ¿Tienes el precio en UF de la unidad o simulamos un valor estimado?",
      "Reservar": "La *reserva es de $500.000* y se *reembolsa 50%* hasta 90 días. Te pido unos datos para enviarte las instrucciones.",
      "Agendar visita": "Perfecto. Puedes agendar acá:",
      "Hablar con un asesor": "Te conecto con un asesor. Si me dejas *teléfono o correo*, aceleramos el contacto."
    }

    const newMessage = {
      role: "user" as const,
      content: action
    }

    const response = {
      role: "assistant" as const,
      content: responses[action] || "¿En qué más puedo ayudarte?"
    }

    setMessages(prev => [...prev, newMessage, response])
    
    if (action === "Reservar") {
      setShowContactForm(true)
    } else if (action === "Simular mi pie") {
      setSimulationData({ step: 'precio' })
    }
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    const newMessage = {
      role: "user" as const,
      content: input
    }

    setMessages(prev => [...prev, newMessage])
    setInput("")

    // Simular respuesta automática
    setTimeout(() => {
      const response = {
        role: "assistant" as const,
        content: "Gracias por tu consulta. ¿Te gustaría que te contacte un asesor especializado?"
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      source: 'whatsapp',
      project: 'san_patricio',
      purpose: 'reservar'
    }
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        const successMessage = {
          role: "assistant" as const,
          content: `¡Gracias, ${data.nombre}! Te envié un correo con los pasos para reservar y un asesor te contactará en breve. ¿Quieres *agendar una visita* o *ver unidades disponibles* ahora?`
        }
        setMessages(prev => [...prev, successMessage])
        setShowContactForm(false)
      }
    } catch (error) {
      console.error("Error enviando contacto:", error)
    }
  }

  const handleSimulation = (precioUF: number, piePct: number, plazoAnios: number, tasaAnual: number) => {
    const pieUF = precioUF * (piePct / 100)
    const creditoUF = precioUF - pieUF
    const i = tasaAnual / 12 / 100
    const n = plazoAnios * 12
    const dividendoUF = creditoUF * i / (1 - Math.pow(1 + i, -n))
    
    const result = {
      pieUF: Math.round(pieUF * 100) / 100,
      creditoUF: Math.round(creditoUF * 100) / 100,
      dividendoUF: Math.round(dividendoUF * 100) / 100
    }
    
    const response = {
      role: "assistant" as const,
      content: `Listo ✅ Pie aprox: *${result.pieUF} UF* | Crédito: *${result.creditoUF} UF* | Dividendo: *${result.dividendoUF} UF*. ¿Quieres que un asesor te contacte?`
    }
    
    setMessages(prev => [...prev, response])
    setSimulationData(null)
  }

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] border border-olivaTierra p-4 text-white shadow-xl hover:scale-105 transition"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[500px]">
          <DrawerHeader>
            <DrawerTitle>María | Asesora Gibérica</DrawerTitle>
          </DrawerHeader>
          
          <div className="flex-1 flex flex-col p-4">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] ${
                    message.role === "user" 
                      ? "ml-auto bg-[#25D366] text-white" 
                      : "bg-gray-100 text-gray-800"
                  } px-3 py-2 rounded-2xl`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            {!showContactForm && (
              <div className="flex flex-wrap gap-2 mb-4">
                {quickActions.map((action) => (
                  <Button
                    key={action}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action)}
                    className="text-xs"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
              <form onSubmit={handleContactSubmit} className="space-y-3 mb-4">
                <Input name="nombre" placeholder="Nombre completo" required />
                <Input name="email" placeholder="Email" type="email" required />
                <Input name="telefono" placeholder="Teléfono" type="tel" required />
                <Button type="submit" className="w-full bg-carbon text-crema hover:opacity-90">
                  Enviar datos
                </Button>
              </form>
            )}

            {/* Simulation Form */}
            {simulationData && (
              <div className="space-y-3 mb-4">
                <p className="text-sm text-gray-600">Ingresa los datos para simular:</p>
                <Input 
                  placeholder="Precio en UF (ej: 2690)" 
                  type="number"
                  onChange={(e) => setSimulationData({...simulationData, precioUF: parseFloat(e.target.value)})}
                />
                <Input 
                  placeholder="Pie % (ej: 20)" 
                  type="number"
                  onChange={(e) => setSimulationData({...simulationData, piePct: parseFloat(e.target.value)})}
                />
                <Input 
                  placeholder="Plazo años (ej: 20)" 
                  type="number"
                  onChange={(e) => setSimulationData({...simulationData, plazoAnios: parseFloat(e.target.value)})}
                />
                <Input 
                  placeholder="Tasa anual % (ej: 5.5)" 
                  type="number"
                  step="0.1"
                  onChange={(e) => setSimulationData({...simulationData, tasaAnual: parseFloat(e.target.value)})}
                />
                <Button 
                  onClick={() => handleSimulation(
                    simulationData.precioUF, 
                    simulationData.piePct, 
                    simulationData.plazoAnios, 
                    simulationData.tasaAnual
                  )}
                  className="w-full bg-carbon text-crema hover:opacity-90"
                  disabled={!simulationData.precioUF || !simulationData.piePct || !simulationData.plazoAnios || !simulationData.tasaAnual}
                >
                  Calcular
                </Button>
              </div>
            )}

            {/* Input */}
            {!showContactForm && !simulationData && (
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu consulta..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" className="bg-[#25D366] hover:bg-[#25D366]/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+56912345678'}?text=Hola, me interesa San Patricio`, '_blank')}
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open('tel:+56912345678')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Llamar
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

