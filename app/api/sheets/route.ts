import { NextResponse } from 'next/server'

// Generic form submission endpoint for volunteer and course registrations
// In production, this would integrate with Google Sheets

type FormType = 'voluntario' | 'inscripcion-curso'

interface VolunteerFormData {
  nombre: string
  email: string
  telefono: string
  edad?: string
  ocupacion?: string
  parroquia?: string
  areaInteres: string
  disponibilidad: string
  experiencia?: string
  motivacion: string
  habeasData: boolean
}

interface CourseRegistrationData {
  nombre: string
  email: string
  telefono: string
  cedula: string
  curso: string
  conocimientoPrevio?: string
  habeasData: boolean
}

interface SubmissionPayload {
  type: FormType
  data: VolunteerFormData | CourseRegistrationData
}

// Rate limiting
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000
const MAX_REQUESTS = 3

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

function sanitizeInput(input: string | undefined): string {
  if (!input) return ''
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 5000)
}

function validateVolunteerForm(data: VolunteerFormData): string | null {
  if (!data.nombre?.trim()) return 'El nombre es obligatorio'
  if (!data.email?.trim() || !validateEmail(data.email)) return 'Correo electrónico inválido'
  if (!data.telefono?.trim()) return 'El teléfono es obligatorio'
  if (!data.areaInteres) return 'Seleccione un área de interés'
  if (!data.disponibilidad) return 'Seleccione su disponibilidad'
  if (!data.motivacion?.trim()) return 'Por favor cuéntenos su motivación'
  if (!data.habeasData) return 'Debe aceptar la política de tratamiento de datos'
  return null
}

function validateCourseRegistration(data: CourseRegistrationData): string | null {
  if (!data.nombre?.trim()) return 'El nombre es obligatorio'
  if (!data.email?.trim() || !validateEmail(data.email)) return 'Correo electrónico inválido'
  if (!data.telefono?.trim()) return 'El teléfono es obligatorio'
  if (!data.cedula?.trim()) return 'La cédula es obligatoria'
  if (!data.curso) return 'Seleccione un curso'
  if (!data.habeasData) return 'Debe aceptar la política de tratamiento de datos'
  return null
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor, espere un momento.' },
        { status: 429 }
      )
    }

    const payload: SubmissionPayload = await request.json()

    if (!payload.type || !payload.data) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      )
    }

    let validationError: string | null = null
    let sheetName = ''
    let sanitizedData: Record<string, string> = {}

    if (payload.type === 'voluntario') {
      const data = payload.data as VolunteerFormData
      validationError = validateVolunteerForm(data)
      sheetName = 'Voluntarios'

      sanitizedData = {
        fecha: new Date().toISOString(),
        nombre: sanitizeInput(data.nombre),
        email: sanitizeInput(data.email.toLowerCase()),
        telefono: sanitizeInput(data.telefono),
        edad: sanitizeInput(data.edad),
        ocupacion: sanitizeInput(data.ocupacion),
        parroquia: sanitizeInput(data.parroquia),
        areaInteres: sanitizeInput(data.areaInteres),
        disponibilidad: sanitizeInput(data.disponibilidad),
        experiencia: sanitizeInput(data.experiencia),
        motivacion: sanitizeInput(data.motivacion),
      }
    } else if (payload.type === 'inscripcion-curso') {
      const data = payload.data as CourseRegistrationData
      validationError = validateCourseRegistration(data)
      sheetName = 'Inscripciones'

      sanitizedData = {
        fecha: new Date().toISOString(),
        nombre: sanitizeInput(data.nombre),
        cedula: sanitizeInput(data.cedula),
        email: sanitizeInput(data.email.toLowerCase()),
        telefono: sanitizeInput(data.telefono),
        curso: sanitizeInput(data.curso),
        conocimientoPrevio: sanitizeInput(data.conocimientoPrevio),
      }
    } else {
      return NextResponse.json(
        { error: 'Tipo de formulario no válido' },
        { status: 400 }
      )
    }

    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      )
    }

    // In production, append to the appropriate Google Sheet
    if (process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      // Google Sheets integration would go here
      // const sheets = await getGoogleSheetsClient()
      // await sheets.spreadsheets.values.append({
      //   spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      //   range: `${sheetName}!A:Z`,
      //   valueInputOption: 'RAW',
      //   requestBody: { values: [Object.values(sanitizedData)] },
      // })
      console.log(`Would append to ${sheetName}:`, sanitizedData)
    } else {
      // Development mode
      console.log(`${payload.type} form submission:`, sanitizedData)
    }

    // Send confirmation email (in production)
    // await sendConfirmationEmail(sanitizedData.email, payload.type)

    return NextResponse.json({
      success: true,
      message: payload.type === 'voluntario'
        ? 'Inscripción de voluntario recibida'
        : 'Inscripción al curso recibida',
    })
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario. Por favor intente nuevamente.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
