import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Heart,
  Users,
  Home,
  GraduationCap,
  Calendar,
  ArrowRight,
  HandHeart,
  Cross,
  Stethoscope,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { ServiceCard, NewsItemCompact } from '@/components/sections'

// Static data for MVP - will be replaced with CMS data
const featuredServices = [
  {
    title: 'Atención al Enfermo',
    description: 'Acompañamiento espiritual y humano a personas hospitalizadas o en sus hogares. Visitas pastorales con oración y sacramentos.',
    icon: <Stethoscope className="w-6 h-6" />,
    href: '/servicios/atencion-enfermo',
    image: '/images/atencion-enfermo.webp',
  },
  {
    title: 'Apoyo al Cuidador',
    description: 'Formación, acompañamiento y grupos de apoyo para quienes cuidan a familiares enfermos. No estás solo en esta misión.',
    icon: <Users className="w-6 h-6" />,
    href: '/servicios/apoyo-cuidador',
    image: '/images/apoyo-cuidador.webp',
  },
  {
    title: 'Obra Social',
    description: 'Apoyo material a familias vulnerables: medicamentos, alimentos, enseres. Canalizamos la solidaridad de la comunidad.',
    icon: <Home className="w-6 h-6" />,
    href: '/servicios/obra-social',
    image: '/images/obra-social.webp',
  },
]

const upcomingEvents = [
  {
    title: 'Jornada Mundial del Enfermo',
    publishedAt: '2026-02-11',
    slug: 'jornada-mundial-enfermo-2026',
    isEvent: true,
  },
  {
    title: 'Curso: Cuidadores con Corazón',
    publishedAt: '2026-02-15',
    slug: 'curso-cuidadores-corazon',
    isEvent: true,
  },
  {
    title: 'Retiro Espiritual para Voluntarios',
    publishedAt: '2026-03-01',
    slug: 'retiro-espiritual-voluntarios',
    isEvent: true,
  },
]

const stats = [
  { value: '500+', label: 'Familias acompañadas' },
  { value: '12', label: 'Parroquias activas' },
  { value: '80', label: 'Voluntarios' },
  { value: '25', label: 'Años de servicio' },
]

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-celestial-900/90 via-celestial-800/80 to-celestial-700/40" />
        </div>

        {/* Content */}
        <div className="container-pastoral relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Tagline */}
            <span className="font-accent text-3xl text-sacred-300 mb-4 block">
              &ldquo;El amor que sana&rdquo;
            </span>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Pastoral de la Salud
              <span className="block text-celestial-200">Diócesis de Armenia</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
              Acompañamos con amor y fe a los enfermos, sus familias y cuidadores.
              Somos presencia de Cristo que sana y consuela.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/emergencias">
                <Button variant="emergency" size="lg">
                  <Phone className="w-5 h-5" />
                  Línea de Emergencias
                </Button>
              </Link>
              <Link href="/servicios">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Conocer nuestros servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-celestial-600 py-8">
        <div className="container-pastoral">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-celestial-100 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Nuestros Servicios</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cómo podemos ayudarte
            </h2>
            <p className="text-lg text-slate-600">
              Ofrecemos acompañamiento integral: espiritual, emocional y material
              a quienes más lo necesitan.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link href="/servicios">
              <Button variant="secondary" size="lg">
                Ver todos los servicios
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/voluntarios-pastoral.webp"
                alt="Voluntarios de la Pastoral de la Salud"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-celestial-900/30 to-transparent" />
            </div>

            {/* Content */}
            <div>
              <Badge variant="success" className="mb-4">Nuestra Misión</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ser presencia amorosa de Cristo junto a quien sufre
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                La Pastoral de la Salud es el ministerio de la Iglesia que acompaña
                a los enfermos, sus familias y cuidadores, llevando la luz de la fe
                y el consuelo del amor de Dios.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-celestial-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cross className="w-4 h-4 text-celestial-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Acompañamiento espiritual</strong>
                    <p className="text-sm text-slate-600">Oración, sacramentos y escucha activa</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-healing-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 text-healing-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Apoyo emocional</strong>
                    <p className="text-sm text-slate-600">Grupos de apoyo y acompañamiento personalizado</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sacred-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HandHeart className="w-4 h-4 text-sacred-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Solidaridad práctica</strong>
                    <p className="text-sm text-slate-600">Ayuda material para familias vulnerables</p>
                  </div>
                </li>
              </ul>
              <Link href="/quienes-somos">
                <Button variant="primary" size="lg">
                  Conocer más sobre nosotros
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events + Call to Volunteer */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 via-white to-healing-50">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Events */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Badge variant="warning" className="mb-2">Próximos Eventos</Badge>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                    Agenda
                  </h2>
                </div>
                <Link href="/formacion" className="text-sm font-medium text-celestial-600 hover:underline">
                  Ver todos
                </Link>
              </div>
              <Card variant="default" padding="compact">
                <div className="divide-y divide-slate-100">
                  {upcomingEvents.map((event) => (
                    <NewsItemCompact key={event.slug} {...event} />
                  ))}
                </div>
              </Card>
            </div>

            {/* Volunteer CTA */}
            <div className="lg:col-span-2">
              <Card
                variant="default"
                className="h-full bg-gradient-to-br from-celestial-600 to-celestial-700 text-white"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                      <HandHeart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      ¿Quieres ser voluntario?
                    </h3>
                    <p className="text-celestial-100 mb-6">
                      Únete a nuestra red de voluntarios y sé parte de esta misión
                      de amor y servicio. Formamos y acompañamos a cada voluntario.
                    </p>
                  </div>
                  <Link href="/colaborar/voluntariado">
                    <Button
                      variant="secondary"
                      className="w-full bg-white text-celestial-700 hover:bg-celestial-50"
                    >
                      Inscribirme como voluntario
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formation/Courses Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="info" className="mb-4">Formación</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cursos y capacitaciones
            </h2>
            <p className="text-lg text-slate-600">
              Formamos cuidadores, voluntarios y agentes de pastoral con
              herramientas prácticas y espirituales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="interactive" className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-celestial-100 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-celestial-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Curso Básico para Cuidadores
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Aprende técnicas de cuidado, autocuidado y manejo del estrés.
              </p>
              <Badge variant="success">Próxima fecha: Febrero 2026</Badge>
            </Card>

            <Card variant="interactive" className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-healing-100 flex items-center justify-center mx-auto mb-4">
                <Cross className="w-8 h-8 text-healing-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Acompañamiento Espiritual
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Formación para agentes de pastoral que visitan enfermos.
              </p>
              <Badge variant="success">Inscripciones abiertas</Badge>
            </Card>

            <Card variant="interactive" className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-sacred-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sacred-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Taller de Duelo
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Herramientas para acompañar a familias en proceso de duelo.
              </p>
              <Badge variant="default">Próximamente</Badge>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/formacion">
              <Button variant="primary" size="lg">
                Ver todos los cursos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Contact */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas ayuda o quieres colaborar?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Estamos aquí para acompañarte. Contáctanos para solicitar una visita,
            inscribirte como voluntario o conocer cómo puedes aportar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Contactar
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/colaborar/donar">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
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
