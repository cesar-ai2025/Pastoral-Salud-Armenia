import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  ArrowRight,
  Heart,
  Users,
  Calendar,
  BookOpen,
  CheckCircle,
  Shield,
  Coffee,
  MessageCircle,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Apoyo al Cuidador',
  description: 'Servicio de apoyo emocional, formación y acompañamiento para cuidadores de enfermos. Grupos de apoyo, talleres de autocuidado y capacitación.',
}

const services = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Grupos de apoyo',
    description: 'Espacios seguros donde cuidadores comparten experiencias, se apoyan mutuamente y reciben orientación profesional.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Talleres de autocuidado',
    description: 'Formación práctica en técnicas de manejo del estrés, descanso y cuidado personal para el cuidador.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Capacitación en cuidados',
    description: 'Cursos sobre técnicas de cuidado básico, movilización de pacientes, y manejo de situaciones difíciles.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Acompañamiento espiritual',
    description: 'Apoyo desde la fe para encontrar sentido, fortaleza y paz en la misión de cuidar.',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Escucha y consejería',
    description: 'Espacios individuales de escucha activa con voluntarios formados en acompañamiento pastoral.',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Jornadas de respiro',
    description: 'Actividades recreativas y de descanso para que los cuidadores puedan recargar energías.',
  },
]

const signs = [
  'Agotamiento físico y mental constante',
  'Sentimientos de soledad o aislamiento',
  'Irritabilidad o cambios de humor frecuentes',
  'Dificultad para dormir o descansar',
  'Descuido de la propia salud',
  'Sensación de que nadie entiende lo que vives',
]

const benefits = [
  {
    title: 'No estás solo',
    description: 'Conecta con otros cuidadores que entienden tu situación y forman una red de apoyo.',
  },
  {
    title: 'Herramientas prácticas',
    description: 'Aprende técnicas concretas para cuidar mejor y cuidarte a ti mismo.',
  },
  {
    title: 'Fortaleza espiritual',
    description: 'Encuentra sentido y paz desde la fe en tu misión de cuidar.',
  },
  {
    title: 'Prevención del agotamiento',
    description: 'Evita el síndrome del cuidador quemado con estrategias de autocuidado.',
  },
]

export default function ApoyoCuidadorPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Apoyo al Cuidador"
        subtitle="Cuidar al que cuida"
        description="Sabemos que cuidar a un ser querido enfermo es una labor exigente. Estamos aquí para acompañarte, formarte y darte herramientas para que también cuides de ti."
        primaryCTA={{
          label: 'Unirme a un grupo',
          href: '/contacto',
          icon: <Users className="w-5 h-5" />,
        }}
        secondaryCTA={{
          label: 'Ver cursos',
          href: '/formacion',
        }}
        backgroundImage="/images/apoyo-cuidador.webp"
        overlay="gradient"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Para Cuidadores</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tu bienestar también importa
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Cuidar a un familiar enfermo es un acto de amor profundo, pero también
                puede ser agotador física, emocional y espiritualmente. La Pastoral de
                la Salud reconoce la importancia de cuidar a quienes cuidan.
              </p>
              <p className="text-slate-600 mb-6">
                Nuestro programa de Apoyo al Cuidador ofrece espacios de encuentro,
                formación y acompañamiento para que puedas vivir esta misión con
                mayor serenidad y sin descuidar tu propia salud.
              </p>

              <blockquote className="border-l-4 border-healing-500 pl-4 italic text-slate-700">
                &ldquo;Para cuidar bien a otros, primero necesitas cuidar de ti mismo.&rdquo;
              </blockquote>
            </div>

            <div className="relative">
              <Image
                src="/images/cuidador-apoyo.webp"
                alt="Cuidador recibiendo apoyo"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Burnout */}
      <section className="py-16 lg:py-24 bg-red-50">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="error" className="mb-4">Señales de Alerta</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ¿Te identificas con esto?
              </h2>
              <p className="text-lg text-slate-600">
                Si experimentas alguno de estos signos, es momento de buscar apoyo.
                No es debilidad, es sabiduría cuidar de ti.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {signs.map((sign, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border border-red-100"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-slate-700">{sign}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 mt-8">
              Si marcaste varios de estos puntos, te invitamos a unirte a nuestro
              programa de apoyo. <strong>No tienes que cargar solo.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-4">Qué Ofrecemos</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Servicios para cuidadores
            </h2>
            <p className="text-lg text-slate-600">
              Un programa integral para acompañarte en tu rol de cuidador.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healing-100 flex items-center justify-center flex-shrink-0 text-healing-600">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-healing-50 via-white to-celestial-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="info" className="mb-4">Beneficios</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué unirte al programa?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="elevated" className="bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-healing-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-healing-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Groups Schedule */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="warning" className="mb-4">Grupos de Apoyo</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Encuentros mensuales
              </h2>
              <p className="text-lg text-slate-600">
                Nos reunimos cada mes en un espacio seguro y acogedor.
              </p>
            </div>

            <Card variant="outlined" className="bg-healing-50 border-healing-200">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                  <Calendar className="w-5 h-5 text-healing-600" />
                  <span className="font-semibold text-slate-900">Próximo encuentro</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Grupo de Apoyo a Cuidadores
                </h3>
                <p className="text-slate-600 mb-4">
                  Segundo sábado de cada mes, 9:00 AM<br />
                  Sede Diocesana, Armenia
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="success">Cupos disponibles</Badge>
                  <Badge variant="default">Gratuito</Badge>
                </div>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Link href="/contacto">
                <Button size="lg">
                  Inscribirme al grupo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Self-care Tips */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/autocuidado-meditacion.webp"
                alt="Persona meditando y cuidando de sí misma"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="info" className="mb-4">Consejos</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tips de autocuidado
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-healing-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900">Toma descansos regulares</strong>
                    <p className="text-sm text-slate-600">Aunque sean cortos, los momentos de pausa son esenciales.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-healing-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900">Pide y acepta ayuda</strong>
                    <p className="text-sm text-slate-600">No tienes que hacerlo todo solo. Delega cuando sea posible.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-healing-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900">No descuides tu salud</strong>
                    <p className="text-sm text-slate-600">Mantén tus citas médicas, come bien y duerme lo suficiente.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-healing-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900">Habla de cómo te sientes</strong>
                    <p className="text-sm text-slate-600">Compartir con otros alivia la carga emocional.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-healing-600 to-healing-700 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            No tienes que cargar solo
          </h2>
          <p className="text-lg text-healing-100 max-w-2xl mx-auto mb-8">
            Estamos aquí para acompañarte. Contáctanos para conocer más sobre
            nuestros grupos de apoyo y talleres para cuidadores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-healing-700 hover:bg-healing-50">
                Contactar
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/formacion">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Ver cursos disponibles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
