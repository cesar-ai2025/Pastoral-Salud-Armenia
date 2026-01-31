import { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart,
  ArrowLeft,
  Shield,
  CheckCircle,
  Gift,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { DonationForm } from '@/components/forms'

export const metadata: Metadata = {
  title: 'Donar',
  description: 'Haz una donación a la Pastoral de la Salud de Armenia. Tu aporte ayuda a familias necesitadas con medicamentos, alimentos y ayudas técnicas.',
}

const impactExamples = [
  {
    amount: '$20.000',
    description: 'Cubre medicamentos básicos para un paciente por una semana',
  },
  {
    amount: '$50.000',
    description: 'Proporciona un mercado básico para una familia',
  },
  {
    amount: '$100.000',
    description: 'Ayuda a costear ayudas técnicas como muletas o andadores',
  },
  {
    amount: '$200.000',
    description: 'Contribuye a la compra de una silla de ruedas',
  },
]

const guarantees = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: '100% transparente',
    description: 'Cada peso se destina a los beneficiarios.',
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: 'Impacto real',
    description: 'Ayudamos a familias reales de nuestra comunidad.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Con amor',
    description: 'Entregamos las ayudas con dignidad y respeto.',
  },
]

export default function DonarPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-gradient-to-br from-celestial-600 to-celestial-700 text-white py-12">
        <div className="container-pastoral">
          <Link
            href="/colaborar"
            className="inline-flex items-center gap-2 text-celestial-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a colaborar
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold">
                Hacer una donación
              </h1>
              <p className="text-celestial-100">Tu generosidad transforma vidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated">
                <div className="mb-6">
                  <Badge variant="primary" className="mb-2">Donación Segura</Badge>
                  <h2 className="font-display text-xl font-semibold text-slate-900">
                    Elige el monto y método de pago
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Todas las donaciones se destinan íntegramente a ayudar a familias necesitadas.
                  </p>
                </div>

                <DonationForm />
              </Card>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Impact */}
              <Card variant="default" className="bg-celestial-50 border-celestial-100">
                <h3 className="font-semibold text-slate-900 mb-4">Tu donación hace la diferencia</h3>
                <div className="space-y-3">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge variant="primary" className="flex-shrink-0">
                        {example.amount}
                      </Badge>
                      <p className="text-sm text-slate-700">{example.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Guarantees */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-4">Nuestro compromiso</h3>
                <div className="space-y-4">
                  {guarantees.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-healing-100 flex items-center justify-center flex-shrink-0 text-healing-600">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* In-kind Donations */}
              <Card variant="outlined" className="bg-sacred-50 border-sacred-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sacred-100 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-sacred-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">¿Prefieres donar en especie?</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      También recibimos medicamentos, equipos médicos y alimentos.
                    </p>
                    <Link href="/contacto">
                      <Button variant="secondary" size="sm">
                        Contactar para coordinar
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Questions */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-2">¿Tienes preguntas?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Escríbenos si tienes dudas sobre el proceso de donación.
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

      {/* Trust Section */}
      <section className="py-12 bg-slate-50">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
              Gracias por confiar en nosotros
            </h2>
            <p className="text-slate-600 mb-6">
              Desde 1999, la Pastoral de la Salud de la Diócesis de Armenia acompaña a
              enfermos y sus familias. Tu donación nos permite continuar esta misión de amor.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-celestial-600">25+</p>
                <p className="text-sm text-slate-600">Años de servicio</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-healing-600">500+</p>
                <p className="text-sm text-slate-600">Familias ayudadas al año</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-sacred-600">12</p>
                <p className="text-sm text-slate-600">Parroquias activas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways CTA */}
      <section className="py-12 bg-white">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                ¿También quieres donar tu tiempo?
              </h3>
              <p className="text-slate-600">
                Únete como voluntario y acompaña a enfermos y sus familias.
              </p>
            </div>
            <Link href="/colaborar/voluntariado">
              <Button variant="secondary">
                Ser voluntario
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
