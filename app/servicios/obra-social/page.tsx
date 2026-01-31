import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  ArrowRight,
  Heart,
  Package,
  Pill,
  Home,
  HandHeart,
  Users,
  CheckCircle,
  FileText,
  Building,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Obra Social',
  description: 'Programa de apoyo material para familias vulnerables: medicamentos, alimentos, enseres. Canalizamos la solidaridad de la comunidad.',
}

const services = [
  {
    icon: <Pill className="w-6 h-6" />,
    title: 'Banco de medicamentos',
    description: 'Gestionamos y distribuimos medicamentos donados para pacientes que no pueden costearlos.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Ayudas técnicas',
    description: 'Préstamo de sillas de ruedas, muletas, camas hospitalarias y otros equipos médicos.',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Mercados solidarios',
    description: 'Entrega periódica de alimentos básicos a familias con miembros enfermos.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Gestión de recursos',
    description: 'Asesoría para acceder a servicios de salud, subsidios y programas del Estado.',
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Articulación institucional',
    description: 'Coordinamos con hospitales, EPS, fundaciones y entidades para maximizar la ayuda.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Red de voluntarios',
    description: 'Voluntarios que llevan las ayudas directamente a los hogares de las familias.',
  },
]

const helpTypes = [
  {
    title: 'Medicamentos',
    items: ['Medicamentos de uso continuo', 'Insumos médicos', 'Material de curación'],
    icon: <Pill className="w-8 h-8" />,
  },
  {
    title: 'Ayudas técnicas',
    items: ['Sillas de ruedas', 'Camas hospitalarias', 'Muletas y andadores', 'Colchones antiescaras'],
    icon: <Package className="w-8 h-8" />,
  },
  {
    title: 'Apoyo alimentario',
    items: ['Mercados básicos', 'Suplementos nutricionales', 'Dietas especiales'],
    icon: <Home className="w-8 h-8" />,
  },
]

const requirements = [
  'Pertenecer a una familia en situación de vulnerabilidad',
  'Tener un miembro del hogar con enfermedad o condición especial',
  'No tener acceso a estos recursos por otros medios',
  'Estar dispuesto a recibir valoración de trabajo social',
  'Proporcionar información veraz sobre la situación familiar',
]

export default function ObraSocialPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Obra Social"
        subtitle="Solidaridad que transforma vidas"
        description="Canalizamos la generosidad de la comunidad hacia las familias más necesitadas. Medicamentos, alimentos, ayudas técnicas y más, entregados con amor y dignidad."
        primaryCTA={{
          label: 'Solicitar ayuda',
          href: '/contacto',
          icon: <Phone className="w-5 h-5" />,
        }}
        secondaryCTA={{
          label: 'Quiero donar',
          href: '/colaborar/donar',
        }}
        backgroundImage="/images/obra-social.webp"
        overlay="gradient"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Obra Social</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Donde hay necesidad, hay respuesta de amor
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Muchas familias enfrentan la enfermedad sin los recursos necesarios para
                costear medicamentos, ayudas técnicas o una alimentación adecuada.
                La Obra Social de la Pastoral de la Salud recoge y canaliza las donaciones
                de la comunidad hacia quienes más lo necesitan.
              </p>
              <p className="text-slate-600 mb-6">
                No solo entregamos recursos materiales: acompañamos a las familias,
                las orientamos y las conectamos con otras formas de apoyo disponibles.
              </p>

              <div className="flex gap-8">
                <div>
                  <p className="font-display text-3xl font-bold text-celestial-600">200+</p>
                  <p className="text-sm text-slate-600">Familias atendidas al año</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-healing-600">500+</p>
                  <p className="text-sm text-slate-600">Ayudas entregadas</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/voluntarios-ayudas.webp"
                alt="Voluntarios preparando ayudas para familias"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Help */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-4">Tipos de Ayuda</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Qué ayudas ofrecemos?
            </h2>
            <p className="text-lg text-slate-600">
              Dependiendo de la necesidad y disponibilidad, podemos ayudar con:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {helpTypes.map((type, index) => (
              <Card key={index} variant="elevated" className="bg-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-celestial-100 flex items-center justify-center text-celestial-600">
                    {type.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 text-center mb-4">
                  {type.title}
                </h3>
                <ul className="space-y-2">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-healing-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="info" className="mb-4">Servicios</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cómo funcionamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sacred-100 flex items-center justify-center flex-shrink-0 text-sacred-600">
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

      {/* How to Request */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 via-white to-healing-50">
        <div className="container-pastoral">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="warning" className="mb-4">Cómo Solicitar</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pasos para solicitar ayuda
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Steps */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center flex-shrink-0 font-bold text-celestial-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Contacte a la Pastoral</h3>
                    <p className="text-slate-600 text-sm">
                      Puede llamar, escribir o acercarse personalmente a la sede diocesana
                      para exponer su necesidad.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center flex-shrink-0 font-bold text-celestial-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Valoración social</h3>
                    <p className="text-slate-600 text-sm">
                      Un trabajador social realizará una evaluación de la situación familiar
                      para determinar la ayuda más adecuada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center flex-shrink-0 font-bold text-celestial-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Aprobación y entrega</h3>
                    <p className="text-slate-600 text-sm">
                      Si cumple los criterios y hay disponibilidad, se programará la
                      entrega de la ayuda aprobada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-healing-100 flex items-center justify-center flex-shrink-0 font-bold text-healing-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Seguimiento</h3>
                    <p className="text-slate-600 text-sm">
                      Mantenemos contacto con la familia para evaluar nuevas necesidades
                      y ofrecer acompañamiento continuo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <Card variant="outlined" className="bg-white h-fit">
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
                  Requisitos para solicitar ayuda
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-healing-600 flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  * Las ayudas están sujetas a disponibilidad de recursos.
                  Priorizamos a las familias en mayor vulnerabilidad.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/contacto">
                <Button size="lg">
                  Solicitar ayuda
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 lg:py-24 bg-sacred-50">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="success" className="mb-4">Colabora</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tu donación hace la diferencia
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                La Obra Social se sostiene gracias a la generosidad de personas como tú.
                Puedes donar medicamentos, equipos médicos, alimentos o dinero para
                ayudar a familias necesitadas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Pill className="w-5 h-5 text-celestial-600" />
                  </div>
                  <span className="text-slate-700">Medicamentos no vencidos y en buen estado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Package className="w-5 h-5 text-celestial-600" />
                  </div>
                  <span className="text-slate-700">Equipos médicos y ayudas técnicas usadas o nuevas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <HandHeart className="w-5 h-5 text-celestial-600" />
                  </div>
                  <span className="text-slate-700">Donaciones en dinero para compra de insumos</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/colaborar/donar">
                  <Button size="lg">
                    <Heart className="w-4 h-4" />
                    Hacer una donación
                  </Button>
                </Link>
                <Link href="/colaborar/voluntariado">
                  <Button variant="secondary" size="lg">
                    Ser voluntario
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/donaciones-organizadas.webp"
                alt="Donaciones siendo organizadas"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-slate-900 font-semibold">
                  &ldquo;Cada aporte, por pequeño que sea, transforma la vida de una familia.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-600 to-celestial-700 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Necesita ayuda o quiere colaborar?
          </h2>
          <p className="text-lg text-celestial-100 max-w-2xl mx-auto mb-8">
            Ya sea que necesite apoyo material o quiera ser parte de esta red de
            solidaridad, estamos aquí para usted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-celestial-700 hover:bg-celestial-50">
                Contactar
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Ver otros servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
