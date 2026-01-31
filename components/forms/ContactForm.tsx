'use client'

import { useState, FormEvent } from 'react'
import { Input, Textarea, Select, Checkbox, Button } from '../ui'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  tipoConsulta: string
  mensaje: string
  habeasData: boolean
}

const tipoConsultaOptions = [
  { value: 'informacion', label: 'Información general' },
  { value: 'atencion-enfermo', label: 'Atención al enfermo' },
  { value: 'apoyo-cuidador', label: 'Apoyo al cuidador' },
  { value: 'formacion', label: 'Cursos y formación' },
  { value: 'voluntariado', label: 'Quiero ser voluntario' },
  { value: 'donacion', label: 'Donaciones' },
  { value: 'otro', label: 'Otro' },
]

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    tipoConsulta: '',
    mensaje: '',
    habeasData: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

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

    if (!formData.tipoConsulta) {
      newErrors.tipoConsulta = 'Por favor seleccione un tipo de consulta'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio'
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipoConsulta: '',
          mensaje: '',
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

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
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
          ¡Mensaje enviado!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Gracias por contactarnos. Hemos recibido su mensaje y le responderemos
          lo antes posible.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitStatus('idle')}
        >
          Enviar otro mensaje
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
            <p className="font-medium text-red-800">Error al enviar el mensaje</p>
            <p className="text-sm text-red-600 mt-1">
              Por favor intente nuevamente o contáctenos directamente por teléfono.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre completo"
          name="nombre"
          placeholder="Ej: María García"
          value={formData.nombre}
          onChange={(e) => handleInputChange('nombre', e.target.value)}
          error={errors.nombre}
          required
        />

        <Input
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="Ej: maria@correo.com"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Select
          label="Tipo de consulta"
          name="tipoConsulta"
          options={tipoConsultaOptions}
          value={formData.tipoConsulta}
          onChange={(e) => handleInputChange('tipoConsulta', e.target.value)}
          error={errors.tipoConsulta}
          required
        />
      </div>

      <Textarea
        label="Mensaje"
        name="mensaje"
        placeholder="Cuéntenos cómo podemos ayudarle..."
        rows={5}
        value={formData.mensaje}
        onChange={(e) => handleInputChange('mensaje', e.target.value)}
        error={errors.mensaje}
        required
      />

      {/* Habeas Data Consent - Required by Colombian Law 1581 of 2012 */}
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
        <Send className="w-4 h-4" />
        Enviar mensaje
      </Button>
    </form>
  )
}

export default ContactForm
