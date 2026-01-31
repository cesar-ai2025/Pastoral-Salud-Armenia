import { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap,
  Clock,
  Users,
  Calendar,
  ArrowRight,
  Heart,
  Cross,
  Shield,
  BookOpen,
  Star,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero, CourseCard } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Formación',
  description: 'Cursos y talleres de la Pastoral de la Salud: cuidado de enfermos, autocuidado para cuidadores, acompañamiento espiritual, y más.',
}

const courses = [
  {
    title: 'Curso Básico para Cuidadores',
    description: 'Aprende técnicas de cuidado básico, movilización de pacientes, manejo del estrés y autocuidado. Ideal para familiares que cuidan a un ser querido enfermo.',
    image: '/images/cuidador-apoyo.webp',
    duration: '4 semanas',
    price: 0,
    topics: ['Cuidados básicos', 'Movilización', 'Autocuidado', 'Manejo del estrés', 'Nutrición'],
    isActive: true,
    href: '/formacion/inscripcion?curso=cuidador-basico',
  },
  {
    title: 'Acompañamiento Espiritual al Enfermo',
    description: 'Formación para agentes de pastoral que visitan enfermos. Escucha activa, oración, discernimiento pastoral y administración de sacramentales.',
    image: '/images/manos-enfermo.webp',
    duration: '6 semanas',
    price: 0,
    topics: ['Escucha activa', 'Oración', 'Sacramentales', 'Teología del sufrimiento', 'Pastoral'],
    isActive: true,
    href: '/formacion/inscripcion?curso=acompanamiento-espiritual',
  },
  {
    title: 'Primeros Auxilios Básicos',
    description: 'Conocimientos esenciales en primeros auxilios para voluntarios y cuidadores. RCP, manejo de emergencias y cuándo llamar al servicio médico.',
    image: '/images/primeros-auxilios.webp',
    duration: '2 semanas',
    price: 50000,
    topics: ['RCP', 'Emergencias', 'Heridas', 'Quemaduras', 'Fracturas'],
    isActive: true,
    href: '/formacion/inscripcion?curso=primeros-auxilios',
  },
  {
    title: 'Acompañamiento en el Duelo',
    description: 'Herramientas para acompañar a familias que han perdido a un ser querido. Etapas del duelo, escucha compasiva y apoyo pastoral.',
    image: '/images/voluntarios-pastoral.webp',
    duration: '3 semanas',
    price: 0,
    topics: ['Etapas del duelo', 'Escucha', 'Rituales', 'Autocuidado', 'Espiritualidad'],
    isActive: false,
    href: '/formacion/inscripcion?curso=duelo',
  },
]

const benefits = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Formación integral',
    description: 'Conocimientos técnicos, humanos y espirituales para un cuidado completo.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Comunidad de apoyo',
    description: 'Conecta con otras personas que comparten tu misión de cuidar.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Acompañamiento',
    description: 'No solo formamos, también acompañamos tu proceso de aprendizaje.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Certificación',
    description: 'Al completar cada curso recibes un certificado de participación.',
  },
]

const upcomingDates = [
  {
    course: 'Curso Básico para Cuidadores',
    date: 'Febrero 15, 2026',
    schedule: 'Sábados 9am - 12pm',
    spots: 25,
  },
  {
    course: 'Acompañamiento Espiritual',
    date: 'Marzo 1, 2026',
    schedule: 'Miércoles 6pm - 8pm',
    spots: 20,
  },
  {
    course: 'Primeros Auxilios',
    date: 'Marzo 20, 2026',
    schedule: 'Sábados 2pm - 6pm',
    spots: 15,
  },
]

export default function FormacionPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Formación y Capacitación"
        subtitle="Aprender para servir mejor"
        description="Ofrecemos cursos y talleres para cuidadores, voluntarios y agentes de pastoral. Formación integral que combina conocimientos técnicos, humanos y espirituales."
        primaryCTA={{
          label: 'Inscribirme',
          href: '/formacion/inscripcion',
          icon: <GraduationCap className="w-5 h-5" />,
        }}
        secondaryCTA={{
          label: 'Ver calendario',
          href: '#calendario',
        }}
        backgroundImage="/images/hero-formacion.webp"
        overlay="gradient"
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-pastoral">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="outlined" className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-celestial-100 flex items-center justify-center text-celestial-600">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Catálogo de Cursos</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nuestros cursos
            </h2>
            <p className="text-lg text-slate-600">
              Elige el curso que mejor se adapte a tus necesidades y disponibilidad.
              La mayoría son gratuitos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section id="calendario" className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Badge variant="warning" className="mb-4">Próximas Fechas</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Calendario 2026
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Consulta las próximas fechas de inicio y asegura tu cupo.
                Los cursos tienen cupos limitados.
              </p>
              <Link href="/formacion/inscripcion">
                <Button size="lg">
                  <GraduationCap className="w-4 h-4" />
                  Inscribirme ahora
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-4">
                {upcomingDates.map((item, index) => (
                  <Card key={index} variant="outlined" className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{item.course}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.schedule}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="success">{item.spots} cupos</Badge>
                      <Link href={`/formacion/inscripcion`}>
                        <Button variant="secondary" size="sm">
                          Inscribirse
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 via-white to-healing-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="info" className="mb-4">¿Para Quién?</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿A quién están dirigidos?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card variant="elevated" className="bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-healing-100 flex items-center justify-center">
                <Heart className="w-8 h-8 text-healing-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Familiares cuidadores
              </h3>
              <p className="text-sm text-slate-600">
                Si cuidas a un ser querido enfermo en casa, estos cursos te darán
                herramientas prácticas y apoyo emocional.
              </p>
            </Card>

            <Card variant="elevated" className="bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-celestial-100 flex items-center justify-center">
                <Cross className="w-8 h-8 text-celestial-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Agentes de pastoral
              </h3>
              <p className="text-sm text-slate-600">
                Para ministros y voluntarios que visitan enfermos, ofrecemos formación
                en acompañamiento espiritual.
              </p>
            </Card>

            <Card variant="elevated" className="bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-sacred-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-sacred-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Nuevos voluntarios
              </h3>
              <p className="text-sm text-slate-600">
                Si quieres unirte como voluntario, la formación es parte esencial
                de tu preparación para el servicio.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">Metodología</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ¿Cómo son los cursos?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card variant="outlined">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-celestial-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-celestial-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Presenciales</h3>
                    <p className="text-sm text-slate-600">
                      La mayoría de cursos son presenciales en la Sede Diocesana de Armenia,
                      fomentando el encuentro y la comunidad.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="outlined">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-healing-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-healing-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Teórico-prácticos</h3>
                    <p className="text-sm text-slate-600">
                      Combinamos teoría con ejercicios prácticos, dinámicas grupales
                      y casos reales.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="outlined">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sacred-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-sacred-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Dimensión espiritual</h3>
                    <p className="text-sm text-slate-600">
                      Cada sesión incluye un momento de oración y reflexión desde la fe.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="outlined">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-celestial-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-celestial-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Certificación</h3>
                    <p className="text-sm text-slate-600">
                      Al completar el 80% de asistencia, recibes un certificado oficial
                      de la Diócesis de Armenia.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-600 to-celestial-700 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para formarte?
          </h2>
          <p className="text-lg text-celestial-100 max-w-2xl mx-auto mb-8">
            Inscríbete ahora y comienza tu proceso de formación. Los cupos son limitados
            y las inscripciones cierran una semana antes del inicio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formacion/inscripcion">
              <Button size="lg" className="bg-white text-celestial-700 hover:bg-celestial-50">
                <GraduationCap className="w-5 h-5" />
                Inscribirme
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Tengo preguntas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
