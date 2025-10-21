// app/api/chat/route.ts
import { NextResponse } from "next/server"
import { PROJECT_KB } from "@/data/kb"
import { UNIDADES } from "@/data/unidades"

type Msg = { role: "user" | "assistant"; content: string }
type Body = { message: string; context?: Msg[]; intent?: string; payload?: any }

function pickQuickActions() {
  return [
    "Ver unidades disponibles",
    "Simular pie",
    "Agendar tour",
    "Reservar $500.000",
    "Descargar ficha PDF",
    "Ver planos 32/62 m²",
    "Términos de reserva",
  ]
}

function handleIntent(message: string) {
  const m = message.toLowerCase()
  if (m.includes("unidad") || m.includes("disponible")) return "catalog"
  if (m.includes("simul")) return "simulate"
  if (m.includes("agenda")) return "schedule"
  if (m.includes("reserv")) return "reserve"
  if (m.includes("plano")) return "floorplans"
  if (m.includes("término") || m.includes("termino") || m.includes("tyc")) return "terms"
  if (m.includes("ficha") || m.includes("pdf")) return "brochure"
  return "faq"
}

export async function POST(req: Request) {
  const body = (await req.json()) as Body
  const intent = body.intent || handleIntent(body.message)
  const actions = pickQuickActions()

  if (intent === "catalog") {
    const resumen = UNIDADES.slice(0, 5).map(u => ({
      id: u.id, tipologia: u.tipologia, uf: u.precio_desde_UF, estado: u.estado
    }))
    return NextResponse.json({
      reply:
        `Estas son algunas unidades disponibles de ${PROJECT_KB.project.name} (resumen):\n` +
        resumen.map(x => `• ${x.id} — ${x.tipologia} — desde ${x.uf} UF — ${x.estado}`).join("\n") +
        `\n¿Quieres ver el catálogo completo o agendar un tour?`,
      quick: actions,
      intent
    })
  }

  if (intent === "simulate") {
    return NextResponse.json({
      reply: "Puedo simular tu dividendo. Indícame: precio en UF (desde), pie %, tasa anual (%) y plazo (años).",
      quick: ["Simular pie", "Agendar tour", "Reservar $500.000"],
      intent
    })
  }

  if (intent === "schedule") {
    return NextResponse.json({
      reply: "Perfecto. Te derivo al calendario para elegir hora (12 minutos). ¿Te parece esta semana?",
      link: "/agenda", // reemplazar por tu URL real de agenda
      quick: ["Agendar tour", "Ver unidades disponibles", "Hablar con un asesor"],
      intent
    })
  }

  if (intent === "reserve") {
    return NextResponse.json({
      reply:
        "Para reservar, necesito tu nombre, correo y teléfono. La reserva es de $500.000 por 90 días, con devolución del 50% según T&C. ¿Confirmas que avanzamos?",
      quick: ["Confirmar reserva", "Ver T&C", "Volver a unidades"],
      intent
    })
  }

  if (intent === "brochure") {
    return NextResponse.json({
      reply: "Te dejo la ficha técnica en PDF. ¿Quieres que la envíe también a tu correo?",
      link: "/docs/san-patricio-ficha.pdf",
      quick: ["Descargar ficha PDF", "Simular pie", "Agendar tour"],
      intent
    })
  }

  if (intent === "floorplans") {
    return NextResponse.json({
      reply: "Tenemos tipologías 32 m² y 62 m². ¿Cuál te interesa ver primero?",
      quick: ["Ver plano 32 m²", "Ver plano 62 m²", "Descargar planos PDF"],
      intent
    })
  }

  if (intent === "terms") {
    return NextResponse.json({
      reply:
        `Términos de reserva: ${PROJECT_KB.project.process.reserva}. ${PROJECT_KB.project.process.devolucion}. ${PROJECT_KB.project.process.promesa}.`,
      link: "/terminos",
      quick: ["Ver T&C", "Reservar $500.000", "Agendar tour"],
      intent
    })
  }

  // FAQ / respuesta general
  return NextResponse.json({
    reply:
      `Soy tu asesor virtual de ${PROJECT_KB.brand.name} para ${PROJECT_KB.project.name}. ` +
      `Puedo ayudarte con unidades, simulación, agendar un tour o reservar. ¿Qué necesitas?`,
    quick: actions,
    intent: "faq",
  })
}
