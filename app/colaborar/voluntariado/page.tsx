import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  HandHeart,
  ArrowLeft,
  Heart,
  Users,
  GraduationCap,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { VolunteerForm } from '@/components/forms'

export const metadata: Metadata = {
  title: 'Voluntariado',
  description: 'Únete como voluntario a la Pastoral de la Salud de Armenia. Acompaña a enfermos y sus familias. Formación gratuita y horarios flexibles.',
}

const volunteerAreas = [
  {
    title: 'Visitas a hospitales',
    description: 'Acompaña a enfermos hospitalizados con oración y presencia.',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: 'Visitas domiciliarias',
    description: 'Visita a enfermos en sus hogares, llevando la comunión y consuelo.',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: 'Apoyo a cuidadores',
    description: 'Facilita grupos de apoyo y talleres para cuidadores.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: 'Formación',
    description: 'Ayuda en la organización y logística de cursos y talleres.',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: 'Logística y eventos',
    description: 'Colabora en la organización de jornadas y eventos especiales.',
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    title: 'Comunicaciones',
    description: 'Apoya en redes sociales, fotografía y difusión.',
    icon: <Clock className="w-5 h-5" />,
  },
]

const benefits = [
  'Formación gratuita en acompañamiento pastoral',
  'Horarios flexibles según tu disponibilidad',
  'Comunidad de voluntarios que se apoyan mutuamente',
  'Crecimiento personal y espiritual',
  'Certificado de voluntariado',
  'La satisfacción de servir a quien más lo necesita',
]

const process = [
  {
    step: 1,
    title: 'Inscríbete',
    description: 'Completa el formulario de inscripción con tus datos y preferencias.',
  },
  {
    step: 2,
    title: 'Entrevista',
    description: 'Nos reunimos contigo para conocerte mejor y resolver tus dudas.',
  },
  {
    step: 3,
    title: 'Formación',
    description: 'Participas en el curso de formación básica para voluntarios.',
  },
  {
    step: 4,
    title: 'Acompañamiento',
    description: 'Comienzas tu servicio acompañado por un voluntario con experiencia.',
  },
]

export default function VoluntariadoPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-gradient-to-br from-healing-600 to-healing-700 text-white py-12">
        <div className="container-pastoral">
          <Link
            href="/colaborar"
            className="inline-flex items-center gap-2 text-healing-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a colaborar
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <HandHeart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold">
                Ser Voluntario
              </h1>
              <p className="text-healing-100">Únete a nuestra misión de amor y servicio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="success" className="mb-4">Voluntariado</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tu tiempo es un regalo valioso
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Como voluntario de la Pastoral de la Salud, serás parte de una red de
                personas comprometidas con acompañar a quienes más lo necesitan.
              </p>
              <p className="text-slate-600 mb-6">
                No necesitas experiencia previa: nosotros te formamos y acompañamos.
                Solo necesitas un corazón dispuesto a servir.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="info">+80 voluntarios activos</Badge>
                <Badge variant="warning">12 parroquias</Badge>
                <Badge variant="success">Formación gratuita</Badge>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-servicios.webp"
                alt="Voluntarios de la Pastoral de la Salud"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="primary" className="mb-4">Áreas de Servicio</Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              ¿En qué puedes colaborar?
            </h2>
            <p className="text-slate-600">
              Hay diferentes formas de servir según tus habilidades y disponibilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerAreas.map((area, index) => (
              <Card key={index} variant="outlined" className="bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-healing-100 flex items-center justify-center flex-shrink-0 text-healing-600">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{area.title}</h3>
                    <p className="text-sm text-slate-600">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="warning" className="mb-4">Proceso</Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              ¿Cómo me hago voluntario?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-healing-100 flex items-center justify-center font-bold text-healing-700 text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-healing-50 via-white to-celestial-50">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated" className="bg-white">
                <div className="mb-6">
                  <Badge variant="success" className="mb-2">Formulario de Inscripción</Badge>
                  <h2 className="font-display text-xl font-semibold text-slate-900">
                    Únete a nuestro equipo
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Completa el formulario y nos pondremos en contacto contigo.
                  </p>
                </div>

                <VolunteerForm />
              </Card>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Benefits */}
              <Card variant="default" className="bg-healing-50 border-healing-100">
                <h3 className="font-semibold text-slate-900 mb-4">¿Qué recibes como voluntario?</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-healing-600 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Requirements */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-4">Requisitos básicos</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Ser mayor de 18 años</li>
                  <li>• Disponer de al menos 4 horas semanales</li>
                  <li>• Disposición para la formación</li>
                  <li>• Compromiso con la misión pastoral</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  No se requiere experiencia previa. Nosotros te formamos.
                </p>
              </Card>

              {/* Contact */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-2">¿Tienes dudas?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Si tienes preguntas sobre el voluntariado, escríbenos.
                </p>
                <Link href="/contacto">
                  <Button variant="ghost" size="sm" className="w-full">
                    Contactar
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-healing-600 text-white">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-display italic mb-6">
              &ldquo;Ser voluntario de la Pastoral de la Salud me ha enseñado que
              dar es recibir mucho más de lo que imaginas. Cada visita es un
              encuentro con Dios.&rdquo;
            </blockquote>
            <cite className="text-healing-200 not-italic">
              — María del Carmen, voluntaria desde 2018
            </cite>
          </div>
        </div>
      </section>

      {/* Other Ways CTA */}
      <section className="py-12 bg-white">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                ¿No puedes ser voluntario pero quieres ayudar?
              </h3>
              <p className="text-slate-600">
                Tu donación también hace una gran diferencia.
              </p>
            </div>
            <Link href="/colaborar/donar">
              <Button variant="secondary">
                <Heart className="w-4 h-4" />
                Hacer una donación
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
