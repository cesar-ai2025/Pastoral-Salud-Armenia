import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Users, BookOpen, Target } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { TeamMember, Hero } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce la estructura, misión y equipo de la Pastoral de la Salud de la Diócesis de Armenia.',
}

const teamMembers = [
  {
    name: 'Monseñor Pablo Emiro Salas Anteliz',
    role: 'Obispo de la Diócesis de Armenia',
    roleType: 'obispo' as const,
    bio: 'Guía espiritual de la Diócesis y promotor de la pastoral de la salud.',
  },
  {
    name: 'Padre Juan Carlos Martínez',
    role: 'Delegado Diocesano de Pastoral de la Salud',
    roleType: 'delegado' as const,
    bio: 'Coordina todas las iniciativas de acompañamiento a enfermos en la Diócesis.',
  },
  {
    name: 'Hermana María del Carmen Ríos',
    role: 'Coordinadora de Formación',
    roleType: 'coordinador' as const,
    bio: 'Encargada de los programas de capacitación para voluntarios y cuidadores.',
  },
  {
    name: 'Dra. Lucía Fernanda Gómez',
    role: 'Asesora Médica',
    roleType: 'asesor' as const,
    bio: 'Profesional de la salud que orienta nuestros programas de cuidado.',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Amor compasivo',
    description: 'Seguimos el ejemplo de Cristo Buen Samaritano, acercándonos a quien sufre con ternura y misericordia.',
  },
  {
    icon: Users,
    title: 'Servicio fraterno',
    description: 'Vemos en cada enfermo el rostro de Cristo y le servimos como hermanos.',
  },
  {
    icon: BookOpen,
    title: 'Formación continua',
    description: 'Nos preparamos constantemente para ofrecer un acompañamiento de calidad.',
  },
  {
    icon: Target,
    title: 'Presencia constante',
    description: 'Estamos allí cuando más se nos necesita, sin condiciones ni límites.',
  },
]

export default function QuienesSomosPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-celestial-600 to-celestial-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-quienes-somos.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container-pastoral relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white">Quiénes Somos</Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Somos Iglesia que sana
            </h1>
            <p className="text-xl text-celestial-100 max-w-2xl">
              La Pastoral de la Salud es el ministerio de la Diócesis de Armenia
              dedicado a acompañar con amor y fe a los enfermos, sus familias y cuidadores.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card variant="outlined" className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-celestial-100 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-celestial-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ser presencia amorosa y sanadora de Cristo en medio del sufrimiento humano,
                acompañando a los enfermos, sus familias y cuidadores con atención integral:
                espiritual, emocional y material. Promovemos una cultura de la vida y la
                dignidad humana en todas sus etapas.
              </p>
            </Card>

            {/* Vision */}
            <Card variant="outlined" className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-healing-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-healing-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Nuestra Visión
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ser una pastoral de referencia en el Quindío, reconocida por su cercanía
                con los más vulnerables, la calidad de su formación y la red solidaria de
                voluntarios que hacen presente el amor de Dios en hospitales, hogares y
                comunidades de toda la Diócesis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Nuestros Valores</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Principios que nos guían
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} variant="default" className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-celestial-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-celestial-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/historia-pastoral.webp"
                alt="Historia de la Pastoral de la Salud"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge variant="warning" className="mb-4">Nuestra Historia</Badge>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
                Más de 25 años sirviendo con amor
              </h2>
              <div className="prose prose-slate">
                <p>
                  La Pastoral de la Salud de la Diócesis de Armenia nació en la década
                  de 1990 como respuesta al llamado de San Juan Pablo II de renovar el
                  compromiso de la Iglesia con los enfermos.
                </p>
                <p>
                  Desde entonces, hemos formado cientos de agentes de pastoral, visitado
                  miles de enfermos en hospitales y hogares, y acompañado a innumerables
                  familias en los momentos más difíciles.
                </p>
                <p>
                  Hoy continuamos esa misión con renovado vigor, adaptándonos a los desafíos
                  del mundo actual pero manteniendo siempre nuestro compromiso con el
                  Evangelio de la vida y la esperanza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 to-healing-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-4">Nuestro Equipo</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quienes lideran esta misión
            </h2>
            <p className="text-lg text-slate-600">
              Un equipo comprometido con el servicio y la formación continua.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-celestial-600 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres ser parte de nuestra misión?
          </h2>
          <p className="text-xl text-celestial-100 max-w-2xl mx-auto mb-8">
            Te invitamos a unirte como voluntario, participar en nuestros cursos
            o colaborar con tus donaciones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/colaborar/voluntariado">
              <Button size="lg" className="bg-white text-celestial-700 hover:bg-celestial-50">
                Ser voluntario
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Contactarnos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
