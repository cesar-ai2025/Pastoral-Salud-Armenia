import { NextResponse } from 'next/server'

// Contact form submission endpoint
// In production, this would integrate with Google Sheets or a database

interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  tipoConsulta: string
  mensaje: string
  habeasData: boolean
}

// Rate limiting: simple in-memory store (use Redis in production)
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // Max requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 5000) // Limit length
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor, espere un momento.' },
        { status: 429 }
      )
    }

    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.nombre?.trim()) {
      return NextResponse.json(
        { error: 'El nombre es obligatorio' },
        { status: 400 }
      )
    }

    if (!data.email?.trim() || !validateEmail(data.email)) {
      return NextResponse.json(
        { error: 'Por favor ingrese un correo electrónico válido' },
        { status: 400 }
      )
    }

    if (!data.telefono?.trim()) {
      return NextResponse.json(
        { error: 'El teléfono es obligatorio' },
        { status: 400 }
      )
    }

    if (!data.tipoConsulta) {
      return NextResponse.json(
        { error: 'Por favor seleccione un tipo de consulta' },
        { status: 400 }
      )
    }

    if (!data.mensaje?.trim()) {
      return NextResponse.json(
        { error: 'El mensaje es obligatorio' },
        { status: 400 }
      )
    }

    if (!data.habeasData) {
      return NextResponse.json(
        { error: 'Debe aceptar la política de tratamiento de datos' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      nombre: sanitizeInput(data.nombre),
      email: sanitizeInput(data.email.toLowerCase()),
      telefono: sanitizeInput(data.telefono),
      tipoConsulta: sanitizeInput(data.tipoConsulta),
      mensaje: sanitizeInput(data.mensaje),
      fecha: new Date().toISOString(),
    }

    // In production, append to Google Sheets
    // For now, we'll just log it and return success
    if (process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      // Google Sheets integration would go here
      // const sheets = await getGoogleSheetsClient()
      // await sheets.spreadsheets.values.append(...)
      console.log('Would append to Google Sheets:', sanitizedData)
    } else {
      // Development mode: just log the data
      console.log('Contact form submission:', sanitizedData)
    }

    // Send email notification (in production)
    // await sendEmailNotification(sanitizedData)

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente',
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario. Por favor intente nuevamente.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
