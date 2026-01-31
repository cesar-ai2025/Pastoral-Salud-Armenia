import { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap,
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { CourseRegistration } from '@/components/forms'

export const metadata: Metadata = {
  title: 'Inscripción a Cursos',
  description: 'Inscríbase a los cursos de formación de la Pastoral de la Salud: cuidadores, acompañamiento espiritual, primeros auxilios y más.',
}

const courseDetails = [
  {
    id: 'cuidador-basico',
    name: 'Curso Básico para Cuidadores',
    date: 'Febrero 15, 2026',
    schedule: 'Sábados 9:00 AM - 12:00 PM',
    duration: '4 semanas',
    price: 'Gratuito',
    location: 'Sede Diocesana, Armenia',
  },
  {
    id: 'acompanamiento-espiritual',
    name: 'Acompañamiento Espiritual al Enfermo',
    date: 'Marzo 1, 2026',
    schedule: 'Miércoles 6:00 PM - 8:00 PM',
    duration: '6 semanas',
    price: 'Gratuito',
    location: 'Sede Diocesana, Armenia',
  },
  {
    id: 'primeros-auxilios',
    name: 'Primeros Auxilios Básicos',
    date: 'Marzo 20, 2026',
    schedule: 'Sábados 2:00 PM - 6:00 PM',
    duration: '2 semanas',
    price: '$50.000 COP',
    location: 'Cruz Roja Quindío',
  },
  {
    id: 'duelo',
    name: 'Acompañamiento en el Duelo',
    date: 'Por confirmar',
    schedule: 'Por confirmar',
    duration: '3 semanas',
    price: 'Gratuito',
    location: 'Sede Diocesana, Armenia',
  },
]

const requirements = [
  'Ser mayor de 18 años',
  'Tener disponibilidad para asistir a las sesiones programadas',
  'Compromiso de completar al menos el 80% del curso',
  'Disposición para participar en dinámicas grupales',
]

export default function InscripcionPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-gradient-to-br from-celestial-50 via-white to-healing-50 py-12">
        <div className="container-pastoral">
          <Link
            href="/formacion"
            className="inline-flex items-center gap-2 text-celestial-600 hover:text-celestial-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a formación
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-celestial-100 flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-celestial-600" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                Inscripción a Cursos
              </h1>
              <p className="text-slate-600">Complete el formulario para inscribirse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <Card variant="elevated">
                <div className="mb-6">
                  <Badge variant="primary" className="mb-2">Formulario de Inscripción</Badge>
                  <h2 className="font-display text-xl font-semibold text-slate-900">
                    Datos del participante
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Complete todos los campos requeridos para procesar su inscripción.
                  </p>
                </div>

                <CourseRegistration />
              </Card>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Details */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-4">Fechas de los cursos</h3>
                <div className="space-y-4">
                  {courseDetails.map((course) => (
                    <div key={course.id} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <h4 className="font-medium text-slate-900 text-sm">{course.name}</h4>
                      <div className="mt-1 space-y-1 text-xs text-slate-600">
                        <p className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {course.date}
                        </p>
                        <p className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.schedule}
                        </p>
                        <p className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {course.location}
                        </p>
                      </div>
                      <Badge
                        variant={course.price === 'Gratuito' ? 'success' : 'warning'}
                        size="sm"
                        className="mt-2"
                      >
                        {course.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Requirements */}
              <Card variant="default" className="bg-celestial-50 border-celestial-100">
                <h3 className="font-semibold text-slate-900 mb-4">Requisitos</h3>
                <ul className="space-y-2">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-celestial-600 flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Contact Info */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-2">¿Tienes preguntas?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Si tienes dudas sobre los cursos o el proceso de inscripción, contáctanos.
                </p>
                <Link href="/contacto">
                  <Button variant="secondary" size="sm" className="w-full">
                    Contactar
                  </Button>
                </Link>
              </Card>

              {/* Important Info */}
              <Card variant="default" className="bg-amber-50 border-amber-100">
                <h3 className="font-semibold text-amber-800 mb-2">Información importante</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Las inscripciones cierran una semana antes del inicio</li>
                  <li>• Recibirá confirmación por correo electrónico</li>
                  <li>• Los cursos con costo requieren pago previo al inicio</li>
                  <li>• Se requiere 80% de asistencia para certificación</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Courses CTA */}
      <section className="py-12 bg-slate-50">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                ¿Buscas otro curso?
              </h3>
              <p className="text-slate-600">
                Consulta nuestro catálogo completo de formación.
              </p>
            </div>
            <Link href="/formacion">
              <Button variant="secondary">
                Ver todos los cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
