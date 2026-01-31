import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Stethoscope,
  Users,
  Home,
  Heart,
  Phone,
  ArrowRight,
  Cross,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero, ServiceCard } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Conoce los servicios de la Pastoral de la Salud: atención al enfermo, apoyo al cuidador y obra social. Acompañamiento integral con amor y fe.',
}

const services = [
  {
    title: 'Atención al Enfermo',
    description: 'Acompañamiento espiritual y humano a personas hospitalizadas o en sus hogares. Visitas pastorales con oración, sacramentos y escucha activa.',
    icon: <Stethoscope className="w-6 h-6" />,
    href: '/servicios/atencion-enfermo',
    image: '/images/atencion-enfermo.webp',
    featured: true,
    details: [
      'Visitas a hospitales y clínicas',
      'Visitas domiciliarias',
      'Sacramento de la Unción',
      'Comunión a los enfermos',
      'Acompañamiento en proceso de enfermedad',
    ],
  },
  {
    title: 'Apoyo al Cuidador',
    description: 'Formación, acompañamiento y grupos de apoyo para quienes cuidan a familiares enfermos. Cuidar al que cuida es parte de nuestra misión.',
    icon: <Users className="w-6 h-6" />,
    href: '/servicios/apoyo-cuidador',
    image: '/images/apoyo-cuidador.webp',
    featured: true,
    details: [
      'Grupos de apoyo emocional',
      'Talleres de autocuidado',
      'Capacitación en cuidados básicos',
      'Acompañamiento espiritual',
      'Red de apoyo entre cuidadores',
    ],
  },
  {
    title: 'Obra Social',
    description: 'Apoyo material a familias vulnerables: medicamentos, alimentos, enseres. Canalizamos la solidaridad de la comunidad hacia quienes más lo necesitan.',
    icon: <Home className="w-6 h-6" />,
    href: '/servicios/obra-social',
    image: '/images/obra-social.webp',
    featured: true,
    details: [
      'Banco de medicamentos',
      'Dotación de ayudas técnicas',
      'Apoyo alimentario',
      'Gestión de recursos',
      'Articulación con instituciones',
    ],
  },
]

const additionalServices = [
  {
    title: 'Acompañamiento en Duelo',
    description: 'Apoyo a familias que han perdido a un ser querido, ofreciendo espacios de escucha, oración y sanación.',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: 'Atención Espiritual Urgente',
    description: 'Servicio de emergencia para administrar sacramentos a enfermos graves o en peligro de muerte.',
    icon: <Cross className="w-5 h-5" />,
  },
  {
    title: 'Formación de Agentes',
    description: 'Capacitación continua para voluntarios y agentes de pastoral de la salud.',
    icon: <Users className="w-5 h-5" />,
  },
]

export default function ServiciosPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Nuestros Servicios"
        subtitle="Acompañamiento integral para enfermos, cuidadores y familias"
        description="Ofrecemos atención espiritual, emocional y material a quienes atraviesan momentos de enfermedad. Somos presencia de Cristo que sana y consuela."
        primaryCTA={{
          label: 'Solicitar atención',
          href: '/contacto',
          icon: <Phone className="w-5 h-5" />,
        }}
        backgroundImage="/images/hero-servicios.webp"
        overlay="gradient"
      />

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Servicios Principales</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tres pilares de nuestra misión
            </h2>
            <p className="text-lg text-slate-600">
              Cada servicio está diseñado para atender integralmente las necesidades
              de quienes enfrentan la enfermedad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.href} className="flex flex-col">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  image={service.image}
                  featured={service.featured}
                />

                {/* Service details preview */}
                <div className="mt-4 px-4">
                  <ul className="space-y-2">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-celestial-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-4">Servicios Complementarios</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Más formas de acompañarte
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} variant="default" className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-celestial-100 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request Service */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="warning" className="mb-4">Cómo Solicitar</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Pasos para recibir atención
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center flex-shrink-0 font-bold text-celestial-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Contáctenos</h3>
                    <p className="text-slate-600">
                      Llame a nuestra línea o complete el formulario de contacto indicando
                      el tipo de atención que necesita.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center flex-shrink-0 font-bold text-celestial-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Evaluación inicial</h3>
                    <p className="text-slate-600">
                      Un coordinador se comunicará con usted para conocer mejor su situación
                      y definir el tipo de acompañamiento más adecuado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center flex-shrink-0 font-bold text-celestial-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Asignación de voluntario</h3>
                    <p className="text-slate-600">
                      Asignamos un agente pastoral capacitado que visitará al enfermo
                      o se comunicará con la familia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-healing-100 flex items-center justify-center flex-shrink-0 font-bold text-healing-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Acompañamiento continuo</h3>
                    <p className="text-slate-600">
                      Mantenemos el acompañamiento según las necesidades, coordinando
                      visitas, sacramentos y apoyo material si se requiere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/voluntario-visitando.webp"
                alt="Voluntario de Pastoral de la Salud visitando a un enfermo"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-slate-600 italic text-sm">
                  &ldquo;El servicio es gratuito. Nuestra misión es llevar el amor de
                  Cristo a todos sin distinción.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-red-50 border-y border-red-100">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                <Phone className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-red-800">
                  ¿Emergencia espiritual?
                </h3>
                <p className="text-red-700">
                  Para unción de enfermos graves o en peligro de muerte
                </p>
              </div>
            </div>
            <Link href="/emergencias">
              <Button variant="emergency" size="lg">
                <Phone className="w-5 h-5" />
                Ver números de emergencia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-600 to-celestial-700 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Necesita alguno de nuestros servicios?
          </h2>
          <p className="text-lg text-celestial-100 max-w-2xl mx-auto mb-8">
            Estamos aquí para acompañarle. Contáctenos y un miembro de nuestro equipo
            se pondrá en comunicación con usted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-celestial-700 hover:bg-celestial-50">
                Solicitar servicio
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/quienes-somos">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Conocer nuestro equipo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
