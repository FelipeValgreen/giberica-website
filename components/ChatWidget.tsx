// components/ChatWidget.tsx
"use client"

import * as React from "react"
import { track } from "@/lib/analytics"
import { MessageCircle, Send, X } from "lucide-react"

type Msg = { role: "user" | "assistant"; content: string; ts?: number }
type Reply = { reply: string; quick?: string[]; link?: string; intent?: string }

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { role: "assistant", content: "Hola, soy tu asesor virtual de San Patricio. ¿Vemos unidades, simulamos tu pie o agendamos un tour?", ts: Date.now() },
  ])
  const [quick, setQuick] = React.useState<string[]>(["Ver unidades disponibles", "Simular pie", "Agendar tour", "Reservar $500.000"])
  const [loading, setLoading] = React.useState(false)

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) track("chat_open", {})
  }

  const send = async (text: string) => {
    if (!text.trim()) return
    const userMsg: Msg = { role: "user", content: text, ts: Date.now() }
    setMsgs((m) => [...m, userMsg])
    setInput("")
    setLoading(true)
    track("chat_message", { role: "user" })

    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text, context: msgs }) })
      const data = (await res.json()) as Reply
      setMsgs((m) => [...m, { role: "assistant", content: data.reply, ts: Date.now() }])
      setQuick(data.quick || [])
      if (data.intent === "simulate") track("chat_simulate", {})
      if (data.intent === "reserve") track("chat_reserve_start", { source: "chat" })
      if (data.intent === "catalog") track("chat_quick_action", { action: "catalog" })
      if (data.intent === "brochure") track("chat_download_brochure", {})
    } catch (e) {
      setMsgs((m) => [...m, { role: "assistant", content: "Hubo un problema momentáneo. ¿Puedes intentar otra vez?", ts: Date.now() }])
    } finally {
      setLoading(false)
      track("chat_message", { role: "assistant" })
    }
  }

  const onQuick = (q: string) => {
    track("chat_quick_action", { action: q })
    send(q)
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggle}
        aria-label="Abrir chat"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] p-4 text-white shadow-xl hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-20 right-5 z-40 w-[360px] max-w-[92vw] rounded-2xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <p className="font-semibold">Asesor virtual — San Patricio</p>
              <p className="text-xs text-green-600">Responde en segundos</p>
            </div>
            <button aria-label="Cerrar chat" onClick={toggle} className="p-1 rounded hover:bg-gray-50">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-[380px] overflow-y-auto px-4 py-3 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] ${m.role === "user" ? "ml-auto text-white bg-emerald-700" : "bg-gray-100"} px-3 py-2 rounded-2xl`}>
                <p className={`${m.role === "user" ? "text-white" : "text-gray-800"} whitespace-pre-line`}>{m.content}</p>
              </div>
            ))}
            {loading && <p className="text-xs text-gray-500">Escribiendo…</p>}
          </div>

          {/* Quick actions */}
          {quick?.length > 0 && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {quick.map((q) => (
                <button key={q} onClick={() => onQuick(q)} className="text-xs rounded-full border px-3 py-1 hover:bg-gray-50">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Escribe tu consulta o elige una opción…"
              className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
            />
            <button onClick={() => send(input)} className="rounded-xl bg-emerald-700 px-3 py-2 text-white hover:bg-emerald-800">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
