import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  ArrowRight,
  Cross,
  Heart,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Stethoscope,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Atención al Enfermo',
  description: 'Servicio de acompañamiento espiritual y pastoral a enfermos hospitalizados o en sus hogares. Visitas, oración, sacramentos y escucha activa.',
}

const services = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visitas hospitalarias',
    description: 'Acompañamos a enfermos en hospitales y clínicas de Armenia y el Quindío, llevando consuelo y presencia.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Visitas domiciliarias',
    description: 'Para quienes no pueden salir de casa, llevamos la comunión y el acompañamiento espiritual a su hogar.',
  },
  {
    icon: <Cross className="w-6 h-6" />,
    title: 'Sacramento de la Unción',
    description: 'Coordinamos con sacerdotes la administración del sacramento de la Unción de los enfermos.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Comunión a los enfermos',
    description: 'Ministros extraordinarios de la comunión llevan la Eucaristía a quienes no pueden asistir a misa.',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Acompañamiento continuo',
    description: 'Establecemos visitas periódicas para mantener el acompañamiento durante todo el proceso de enfermedad.',
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Articulación con salud',
    description: 'Trabajamos en coordinación con personal de salud para una atención integral del paciente.',
  },
]

const benefits = [
  'Presencia humana y espiritual que alivia la soledad del enfermo',
  'Oración y consuelo basados en la fe católica',
  'Escucha activa y acompañamiento emocional',
  'Acceso a los sacramentos de la Iglesia',
  'Apoyo también para la familia del enfermo',
  'Servicio gratuito para todos sin distinción',
]

const testimonials = [
  {
    quote: 'Las visitas de la Pastoral fueron un regalo de Dios. Mi madre se sentía muy sola en el hospital y el acompañamiento le devolvió la paz.',
    author: 'María Elena, familiar de paciente',
  },
  {
    quote: 'Cuando más necesitaba a Dios, llegaron a mi casa con la comunión y mucho amor. Eso me dio fuerzas para seguir luchando.',
    author: 'Don José, paciente crónico',
  },
]

export default function AtencionEnfermoPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Atención al Enfermo"
        subtitle="Acompañamiento espiritual en la enfermedad"
        description="Visitamos a enfermos en hospitales y hogares, llevando la presencia amorosa de Cristo a través de la oración, los sacramentos y el acompañamiento humano."
        primaryCTA={{
          label: 'Solicitar visita',
          href: '/contacto',
          icon: <Phone className="w-5 h-5" />,
        }}
        secondaryCTA={{
          label: 'Emergencias',
          href: '/emergencias',
        }}
        backgroundImage="/images/atencion-enfermo.webp"
        overlay="gradient"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Nuestra Misión</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ser presencia de Cristo junto al que sufre
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                La enfermedad es un momento de vulnerabilidad donde la presencia amorosa
                y la fe pueden marcar una diferencia profunda. La Pastoral de la Salud
                lleva el consuelo de Dios a quienes atraviesan estos momentos difíciles.
              </p>
              <p className="text-slate-600 mb-6">
                Nuestros voluntarios están formados para ofrecer escucha activa, oración
                y acompañamiento espiritual, respetando siempre las creencias y la
                dignidad de cada persona.
              </p>

              <blockquote className="border-l-4 border-celestial-500 pl-4 italic text-slate-700">
                &ldquo;Estuve enfermo y me visitaron&rdquo;
                <cite className="block text-sm text-slate-500 mt-1 not-italic">— Mateo 25, 36</cite>
              </blockquote>
            </div>

            <div className="relative">
              <Image
                src="/images/voluntario-visitando.webp"
                alt="Voluntario visitando a un enfermo"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-4">Qué Ofrecemos</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Servicios de atención al enfermo
            </h2>
            <p className="text-lg text-slate-600">
              Cada servicio está pensado para atender las necesidades espirituales
              y emocionales del enfermo y su familia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-celestial-100 flex items-center justify-center flex-shrink-0 text-celestial-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/manos-enfermo.webp"
                alt="Manos sosteniendo las manos de un enfermo"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="info" className="mb-4">Beneficios</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                ¿Por qué solicitar el servicio?
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-healing-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 via-white to-healing-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="warning" className="mb-4">Testimonios</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Lo que dicen quienes nos han recibido
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated" className="bg-white">
                <blockquote className="text-lg text-slate-700 italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-sm text-slate-500 not-italic">
                  — {testimonial.author}
                </cite>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Cómo Solicitar</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              ¿Cómo puedo pedir una visita?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              El familiar, un amigo, el personal de salud o el mismo enfermo pueden
              solicitar la visita. El servicio es gratuito.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
              <Card variant="outlined">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-celestial-100 flex items-center justify-center font-bold text-celestial-600 text-lg">
                    1
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Contacte</h3>
                  <p className="text-sm text-slate-600">
                    Llame o escriba indicando el nombre del enfermo, ubicación y tipo de atención.
                  </p>
                </div>
              </Card>

              <Card variant="outlined">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-celestial-100 flex items-center justify-center font-bold text-celestial-600 text-lg">
                    2
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Coordinamos</h3>
                  <p className="text-sm text-slate-600">
                    Un coordinador le llamará para acordar fecha, hora y tipo de visita.
                  </p>
                </div>
              </Card>

              <Card variant="outlined">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-healing-100 flex items-center justify-center font-bold text-healing-600 text-lg">
                    3
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Visitamos</h3>
                  <p className="text-sm text-slate-600">
                    Un voluntario capacitado realizará la visita con todo el respeto y amor.
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg">
                  Solicitar visita
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/emergencias">
                <Button variant="emergency" size="lg">
                  <Phone className="w-4 h-4" />
                  Emergencias
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services CTA */}
      <section className="py-12 bg-slate-100">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Conozca nuestros otros servicios
              </h3>
              <p className="text-slate-600">
                Apoyo al cuidador, obra social y más.
              </p>
            </div>
            <Link href="/servicios">
              <Button variant="secondary">
                Ver todos los servicios
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
