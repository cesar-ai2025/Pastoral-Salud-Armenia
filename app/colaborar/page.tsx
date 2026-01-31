import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  HandHeart,
  Users,
  Gift,
  ArrowRight,
  Clock,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Colaborar',
  description: 'Colabora con la Pastoral de la Salud: dona para apoyar a familias necesitadas o únete como voluntario. Tu ayuda transforma vidas.',
}

const collaborationOptions = [
  {
    title: 'Hacer una donación',
    description: 'Tu aporte económico permite comprar medicamentos, alimentos y ayudas técnicas para familias que no pueden costearlos.',
    icon: <Heart className="w-8 h-8" />,
    href: '/colaborar/donar',
    color: 'celestial',
    highlights: [
      'Desde $10.000 COP',
      'Transferencia o Nequi',
      '100% destinado a los necesitados',
    ],
  },
  {
    title: 'Ser voluntario',
    description: 'Únete a nuestra red de voluntarios y acompaña a enfermos y sus familias. Formamos y acompañamos a cada voluntario.',
    icon: <Users className="w-8 h-8" />,
    href: '/colaborar/voluntariado',
    color: 'healing',
    highlights: [
      'Formación gratuita',
      'Horarios flexibles',
      'Acompañamiento permanente',
    ],
  },
]

const impactStats = [
  { value: '500+', label: 'Familias ayudadas al año' },
  { value: '80', label: 'Voluntarios activos' },
  { value: '200', label: 'Ayudas materiales entregadas' },
  { value: '12', label: 'Parroquias participantes' },
]

const donationUses = [
  {
    title: 'Medicamentos',
    description: 'Compra de medicamentos para pacientes crónicos que no pueden costearlos.',
    percentage: 40,
  },
  {
    title: 'Ayudas técnicas',
    description: 'Sillas de ruedas, camas, muletas y otros equipos médicos.',
    percentage: 25,
  },
  {
    title: 'Mercados solidarios',
    description: 'Alimentos para familias con enfermos en situación de vulnerabilidad.',
    percentage: 25,
  },
  {
    title: 'Formación',
    description: 'Capacitación de voluntarios y agentes de pastoral.',
    percentage: 10,
  },
]

const testimonials = [
  {
    quote: 'Ser voluntario me ha llenado el corazón. Cada visita es un encuentro con Cristo en el enfermo.',
    author: 'Martha, voluntaria desde 2020',
    type: 'volunteer',
  },
  {
    quote: 'Gracias a las donaciones pudimos conseguir la silla de ruedas que mi papá necesitaba. Dios les bendiga.',
    author: 'Carlos, familiar beneficiario',
    type: 'beneficiary',
  },
]

export default function ColaborarPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Colabora con Nosotros"
        subtitle="Tu ayuda transforma vidas"
        description="Hay muchas formas de ser parte de esta misión de amor. Dona para apoyar a familias necesitadas o únete como voluntario para acompañar a quienes más lo necesitan."
        primaryCTA={{
          label: 'Donar ahora',
          href: '/colaborar/donar',
          icon: <Heart className="w-5 h-5" />,
        }}
        secondaryCTA={{
          label: 'Ser voluntario',
          href: '/colaborar/voluntariado',
        }}
        backgroundImage="/images/donaciones-organizadas.webp"
        overlay="gradient"
      />

      {/* Impact Stats */}
      <section className="bg-celestial-600 py-10">
        <div className="container-pastoral">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
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

      {/* Collaboration Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Formas de Colaborar</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Cómo puedes ayudar?
            </h2>
            <p className="text-lg text-slate-600">
              Cada aporte, sea de tiempo o de recursos, hace una diferencia real
              en la vida de quienes más lo necesitan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {collaborationOptions.map((option, index) => (
              <Card
                key={index}
                variant="elevated"
                className={`
                  relative overflow-hidden
                  ${option.color === 'celestial' ? 'bg-gradient-to-br from-celestial-50 to-white' : 'bg-gradient-to-br from-healing-50 to-white'}
                `}
              >
                <div className={`
                  w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                  ${option.color === 'celestial' ? 'bg-celestial-100 text-celestial-600' : 'bg-healing-100 text-healing-600'}
                `}>
                  {option.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {option.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {option.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {option.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${option.color === 'celestial' ? 'text-celestial-600' : 'text-healing-600'}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link href={option.href}>
                  <Button
                    variant={option.color === 'celestial' ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {option.title === 'Hacer una donación' ? 'Donar' : 'Inscribirme'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Donations Support */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="success" className="mb-4">Transparencia</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                ¿En qué se usan las donaciones?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Cada peso donado se destina directamente a ayudar a las familias.
                Aquí puedes ver cómo distribuimos los recursos:
              </p>

              <div className="space-y-4">
                {donationUses.map((use, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-slate-900">{use.title}</span>
                      <span className="text-celestial-600 font-semibold">{use.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-celestial-500 h-2 rounded-full"
                        style={{ width: `${use.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{use.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/voluntarios-ayudas.webp"
                alt="Voluntarios preparando ayudas"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold text-celestial-600">100%</p>
                <p className="text-sm text-slate-600">destinado a los necesitados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="warning" className="mb-4">Testimonios</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Voces que inspiran
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                variant="elevated"
                className={testimonial.type === 'volunteer' ? 'bg-healing-50' : 'bg-celestial-50'}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                    ${testimonial.type === 'volunteer' ? 'bg-healing-200' : 'bg-celestial-200'}
                  `}>
                    {testimonial.type === 'volunteer' ? (
                      <HandHeart className="w-5 h-5 text-healing-700" />
                    ) : (
                      <Heart className="w-5 h-5 text-celestial-700" />
                    )}
                  </div>
                  <div>
                    <blockquote className="text-slate-700 italic mb-2">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <cite className="text-sm text-slate-500 not-italic">
                      — {testimonial.author}
                    </cite>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 via-white to-healing-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="info" className="mb-4">Más Formas de Ayudar</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Otras maneras de colaborar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card variant="outlined" className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-sacred-100 flex items-center justify-center">
                <Gift className="w-7 h-7 text-sacred-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Donar en especie</h3>
              <p className="text-sm text-slate-600">
                Medicamentos, equipos médicos, alimentos o enseres en buen estado.
              </p>
            </Card>

            <Card variant="outlined" className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-celestial-100 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-celestial-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Difundir</h3>
              <p className="text-sm text-slate-600">
                Comparte nuestra labor en redes sociales y ayúdanos a llegar a más personas.
              </p>
            </Card>

            <Card variant="outlined" className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-healing-100 flex items-center justify-center">
                <Clock className="w-7 h-7 text-healing-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Orar por nosotros</h3>
              <p className="text-sm text-slate-600">
                La oración es el fundamento de nuestra misión. Únete espiritualmente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Juntos podemos hacer más
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Cada gesto de generosidad, cada hora de servicio, construye
            un mundo más humano y compasivo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/colaborar/donar">
              <Button size="lg" className="bg-celestial-500 hover:bg-celestial-600 text-white">
                <Heart className="w-5 h-5" />
                Donar ahora
              </Button>
            </Link>
            <Link href="/colaborar/voluntariado">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                <HandHeart className="w-5 h-5" />
                Ser voluntario
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
