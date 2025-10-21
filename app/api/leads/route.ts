import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

type Lead = {
  name: string
  email: string
  phone?: string
  source: string
  project?: string
  purpose?: string
  unidad?: string
  precio?: number
  m2?: number
  createdAt: string
}

const leadsPath = path.join(process.cwd(), 'data', 'leads.json')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, source, project, purpose, unidad, precio, m2 } = body

    // Validación básica
    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const lead: Lead = {
      name: nombre,
      email: email,
      phone: telefono,
      source: source || 'web',
      project: project || 'san_patricio',
      purpose: purpose || 'contact',
      unidad: unidad,
      precio: precio,
      m2: m2,
      createdAt: new Date().toISOString()
    }

    // 1) Guardar localmente
    const exists = fs.existsSync(leadsPath)
    const data: Lead[] = exists ? JSON.parse(fs.readFileSync(leadsPath, 'utf8')) : []
    data.push(lead)
    fs.writeFileSync(leadsPath, JSON.stringify(data, null, 2))

    // 2) (Opcional) Webhook a Google Sheet si está configurado
    if (process.env.GSHEET_WEBHOOK_URL) {
      try {
        await fetch(process.env.GSHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead)
        })
      } catch (error) {
        console.log('Error enviando a Google Sheet:', error)
      }
    }

    // 3) (Opcional) SMTP si está configurado
    if (process.env.SMTP_HOST) {
      // TODO: Implementar envío de email con nodemailer
      console.log('Enviando email de notificación para:', email)
    }

    console.log('Lead guardado localmente:', lead)

    return NextResponse.json({
      ok: true,
      message: 'Lead registrado exitosamente',
      lead_id: `lead_${Date.now()}`
    })

  } catch (error) {
    console.error('Error procesando lead:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}