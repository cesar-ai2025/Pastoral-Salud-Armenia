'use client'

import { useState, FormEvent } from 'react'
import { Input, Select, Checkbox, Button } from '../ui'
import { GraduationCap, CheckCircle, AlertCircle } from 'lucide-react'

interface CourseRegistrationData {
  nombre: string
  email: string
  telefono: string
  cedula: string
  curso: string
  conocimientoPrevio: string
  habeasData: boolean
}

const cursoOptions = [
  { value: 'cuidador-basico', label: 'Curso Básico para Cuidadores' },
  { value: 'acompanamiento-espiritual', label: 'Acompañamiento Espiritual al Enfermo' },
  { value: 'primeros-auxilios', label: 'Primeros Auxilios Básicos' },
  { value: 'duelo', label: 'Acompañamiento en el Duelo' },
]

const conocimientoOptions = [
  { value: 'ninguno', label: 'Ninguno / Principiante' },
  { value: 'basico', label: 'Conocimientos básicos' },
  { value: 'intermedio', label: 'Nivel intermedio' },
  { value: 'avanzado', label: 'Nivel avanzado' },
]

export function CourseRegistration() {
  const [formData, setFormData] = useState<CourseRegistrationData>({
    nombre: '',
    email: '',
    telefono: '',
    cedula: '',
    curso: '',
    conocimientoPrevio: '',
    habeasData: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof CourseRegistrationData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CourseRegistrationData, string>> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo electrónico válido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    }

    if (!formData.cedula.trim()) {
      newErrors.cedula = 'La cédula es obligatoria'
    }

    if (!formData.curso) {
      newErrors.curso = 'Por favor seleccione un curso'
    }

    if (!formData.habeasData) {
      newErrors.habeasData = 'Debe aceptar la política de tratamiento de datos'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'inscripcion-curso',
          data: formData,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          cedula: '',
          curso: '',
          conocimientoPrevio: '',
          habeasData: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof CourseRegistrationData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-healing-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-healing-600" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
          ¡Inscripción recibida!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Gracias por inscribirse. Le enviaremos un correo con los detalles
          del curso y las instrucciones de pago (si aplica).
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitStatus('idle')}
        >
          Inscribirse a otro curso
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-800">Error al procesar la inscripción</p>
            <p className="text-sm text-red-600 mt-1">
              Por favor intente nuevamente o contáctenos directamente.
            </p>
          </div>
        </div>
      )}

      <Select
        label="Curso de interés"
        name="curso"
        options={cursoOptions}
        value={formData.curso}
        onChange={(e) => handleInputChange('curso', e.target.value)}
        error={errors.curso}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre completo"
          name="nombre"
          placeholder="Ej: Ana María López"
          value={formData.nombre}
          onChange={(e) => handleInputChange('nombre', e.target.value)}
          error={errors.nombre}
          required
        />

        <Input
          label="Número de cédula"
          name="cedula"
          placeholder="Ej: 1.234.567.890"
          value={formData.cedula}
          onChange={(e) => handleInputChange('cedula', e.target.value)}
          error={errors.cedula}
          required
        />

        <Input
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="Ej: ana@correo.com"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors.email}
          required
        />

        <Input
          label="Teléfono"
          name="telefono"
          type="tel"
          placeholder="Ej: 300 123 4567"
          value={formData.telefono}
          onChange={(e) => handleInputChange('telefono', e.target.value)}
          error={errors.telefono}
          required
        />
      </div>

      <Select
        label="Nivel de conocimiento previo en el tema"
        name="conocimientoPrevio"
        options={conocimientoOptions}
        value={formData.conocimientoPrevio}
        onChange={(e) => handleInputChange('conocimientoPrevio', e.target.value)}
      />

      {/* Habeas Data Consent */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <Checkbox
          name="habeasData"
          checked={formData.habeasData}
          onChange={(e) => handleInputChange('habeasData', e.target.checked)}
          error={errors.habeasData}
          required
          label={
            <span className="text-sm text-slate-700">
              Autorizo a la Pastoral de la Salud — Diócesis de Armenia a recolectar,
              almacenar y utilizar mis datos personales de conformidad con la{' '}
              <a
                href="/politica-privacidad"
                target="_blank"
                className="text-celestial-600 hover:underline"
              >
                Política de Tratamiento de Datos Personales
              </a>
              , en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013.
            </span>
          }
        />
      </div>

      <Button type="submit" isLoading={isSubmitting} size="lg" className="w-full">
        <GraduationCap className="w-4 h-4" />
        Completar inscripción
      </Button>
    </form>
  )
}

export default CourseRegistration
