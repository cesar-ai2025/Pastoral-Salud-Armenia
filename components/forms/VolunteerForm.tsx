'use client'

import { useState, FormEvent } from 'react'
import { Input, Textarea, Select, Checkbox, Button } from '../ui'
import { Heart, CheckCircle, AlertCircle } from 'lucide-react'

interface VolunteerFormData {
  nombre: string
  email: string
  telefono: string
  edad: string
  ocupacion: string
  parroquia: string
  areaInteres: string
  disponibilidad: string
  experiencia: string
  motivacion: string
  habeasData: boolean
}

const areaInteresOptions = [
  { value: 'visitas-hospitales', label: 'Visitas a hospitales' },
  { value: 'visitas-hogares', label: 'Visitas domiciliarias' },
  { value: 'apoyo-cuidadores', label: 'Apoyo a cuidadores' },
  { value: 'formacion', label: 'Formación y capacitación' },
  { value: 'logistica', label: 'Logística y eventos' },
  { value: 'comunicaciones', label: 'Comunicaciones y redes' },
  { value: 'otra', label: 'Otra área' },
]

const disponibilidadOptions = [
  { value: 'mananas', label: 'Mañanas (8am - 12pm)' },
  { value: 'tardes', label: 'Tardes (2pm - 6pm)' },
  { value: 'fines-semana', label: 'Fines de semana' },
  { value: 'flexible', label: 'Horario flexible' },
]

export function VolunteerForm() {
  const [formData, setFormData] = useState<VolunteerFormData>({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    ocupacion: '',
    parroquia: '',
    areaInteres: '',
    disponibilidad: '',
    experiencia: '',
    motivacion: '',
    habeasData: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof VolunteerFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof VolunteerFormData, string>> = {}

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

    if (!formData.areaInteres) {
      newErrors.areaInteres = 'Por favor seleccione un área de interés'
    }

    if (!formData.disponibilidad) {
      newErrors.disponibilidad = 'Por favor seleccione su disponibilidad'
    }

    if (!formData.motivacion.trim()) {
      newErrors.motivacion = 'Por favor cuéntenos su motivación'
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
          type: 'voluntario',
          data: formData,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          edad: '',
          ocupacion: '',
          parroquia: '',
          areaInteres: '',
          disponibilidad: '',
          experiencia: '',
          motivacion: '',
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

  const handleInputChange = (field: keyof VolunteerFormData, value: string | boolean) => {
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
          ¡Gracias por querer ser parte!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Hemos recibido su inscripción como voluntario. Nos pondremos en contacto
          con usted pronto para coordinar los próximos pasos.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitStatus('idle')}
        >
          Volver al formulario
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
            <p className="font-medium text-red-800">Error al enviar la inscripción</p>
            <p className="text-sm text-red-600 mt-1">
              Por favor intente nuevamente o contáctenos directamente.
            </p>
          </div>
        </div>
      )}

      {/* Personal Information */}
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
          Información Personal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nombre completo"
            name="nombre"
            placeholder="Ej: Juan Pablo Pérez"
            value={formData.nombre}
            onChange={(e) => handleInputChange('nombre', e.target.value)}
            error={errors.nombre}
            required
          />

          <Input
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="Ej: juan@correo.com"
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

          <Input
            label="Edad"
            name="edad"
            type="number"
            min="18"
            max="100"
            placeholder="Ej: 35"
            value={formData.edad}
            onChange={(e) => handleInputChange('edad', e.target.value)}
          />

          <Input
            label="Ocupación"
            name="ocupacion"
            placeholder="Ej: Enfermera, Contador, Estudiante..."
            value={formData.ocupacion}
            onChange={(e) => handleInputChange('ocupacion', e.target.value)}
          />

          <Input
            label="Parroquia"
            name="parroquia"
            placeholder="Ej: San José, Nuestra Señora del Carmen..."
            value={formData.parroquia}
            onChange={(e) => handleInputChange('parroquia', e.target.value)}
          />
        </div>
      </div>

      {/* Volunteer Preferences */}
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
          Preferencias de Voluntariado
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Área de interés"
            name="areaInteres"
            options={areaInteresOptions}
            value={formData.areaInteres}
            onChange={(e) => handleInputChange('areaInteres', e.target.value)}
            error={errors.areaInteres}
            required
          />

          <Select
            label="Disponibilidad"
            name="disponibilidad"
            options={disponibilidadOptions}
            value={formData.disponibilidad}
            onChange={(e) => handleInputChange('disponibilidad', e.target.value)}
            error={errors.disponibilidad}
            required
          />
        </div>

        <div className="mt-6">
          <Textarea
            label="Experiencia previa en voluntariado"
            name="experiencia"
            placeholder="Cuéntenos si ha participado en otras actividades de voluntariado..."
            rows={3}
            value={formData.experiencia}
            onChange={(e) => handleInputChange('experiencia', e.target.value)}
          />
        </div>

        <div className="mt-6">
          <Textarea
            label="¿Por qué quiere ser voluntario?"
            name="motivacion"
            placeholder="Comparta su motivación para unirse a la Pastoral de la Salud..."
            rows={4}
            value={formData.motivacion}
            onChange={(e) => handleInputChange('motivacion', e.target.value)}
            error={errors.motivacion}
            required
          />
        </div>
      </div>

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
        <Heart className="w-4 h-4" />
        Enviar inscripción
      </Button>
    </form>
  )
}

export default VolunteerForm
