import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  AlertTriangle,
  Cross,
  Heart,
  Clock,
  Shield,
  Flame,
  Ambulance,
  Building,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { EmergencyNumber, EmergencyGrid } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Emergencias',
  description: 'Números de emergencia para atención pastoral urgente. Unción de enfermos, acompañamiento en peligro de muerte y líneas de emergencia en Armenia, Quindío.',
}

const pastoralEmergencyNumbers = [
  {
    name: 'Pastoral de la Salud',
    number: '+57 606 741 2233',
    description: 'Línea principal - Atención pastoral',
    isPrimary: true,
  },
  {
    name: 'Diócesis de Armenia',
    number: '+57 606 741 0000',
    description: 'Curia Diocesana',
  },
  {
    name: 'Capellanía Hospital San Juan de Dios',
    number: '+57 606 749 1234',
    description: 'Atención hospitalaria urgente',
  },
]

const civilEmergencyNumbers = [
  {
    name: 'Línea de Emergencias',
    number: '123',
    description: 'Emergencias generales - Colombia',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: 'Bomberos',
    number: '119',
    description: 'Incendios y rescate',
    icon: <Flame className="w-6 h-6" />,
  },
  {
    name: 'Policía Nacional',
    number: '112',
    description: 'Emergencias policiales',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: 'Cruz Roja Quindío',
    number: '+57 606 741 0000',
    description: 'Emergencias médicas',
    icon: <Cross className="w-6 h-6" />,
  },
  {
    name: 'Hospital San Juan de Dios',
    number: '+57 606 749 0000',
    description: 'Urgencias médicas',
    icon: <Ambulance className="w-6 h-6" />,
  },
  {
    name: 'Defensa Civil',
    number: '144',
    description: 'Emergencias y desastres',
    icon: <Shield className="w-6 h-6" />,
  },
]

const whenToCall = [
  {
    title: 'Sacramento de la Unción',
    description: 'Cuando un enfermo está grave o en peligro de muerte y necesita recibir el sacramento.',
    icon: <Cross className="w-5 h-5" />,
  },
  {
    title: 'Acompañamiento urgente',
    description: 'Cuando la familia necesita presencia y apoyo espiritual inmediato ante una situación crítica.',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: 'Viático',
    description: 'Cuando un enfermo terminal consciente desea recibir la Eucaristía como alimento para el viaje.',
    icon: <Cross className="w-5 h-5" />,
  },
  {
    title: 'Reconciliación urgente',
    description: 'Cuando el enfermo desea confesarse antes de una cirugía de alto riesgo o situación grave.',
    icon: <Heart className="w-5 h-5" />,
  },
]

export default function EmergenciasPage() {
  return (
    <PageLayout>
      {/* Emergency Header */}
      <section className="bg-red-600 text-white py-12">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-10 h-10" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Emergencias Pastorales
              </h1>
              <p className="text-red-100 text-lg">
                Líneas de atención para urgencias espirituales y números útiles
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-red-200 text-sm mb-1">Línea principal</p>
              <a
                href="tel:+576067412233"
                className="font-mono text-2xl md:text-3xl font-bold hover:underline"
              >
                +57 606 741 2233
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Emergency Numbers */}
      <section className="py-12 bg-red-50">
        <div className="container-pastoral">
          <div className="flex items-center gap-2 mb-6">
            <Cross className="w-5 h-5 text-red-600" />
            <h2 className="font-display text-xl font-bold text-slate-900">
              Números de Emergencia Pastoral
            </h2>
          </div>

          <EmergencyGrid>
            {pastoralEmergencyNumbers.map((item, index) => (
              <EmergencyNumber key={index} {...item} />
            ))}
          </EmergencyGrid>

          <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Horario de atención</p>
                <p className="text-sm text-slate-600">
                  La línea de emergencias pastorales está disponible las 24 horas
                  para casos urgentes (unción de enfermos graves, viático, acompañamiento
                  ante fallecimiento inminente).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="error" className="mb-4">Cuándo Llamar</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Cuándo solicitar atención pastoral urgente?
            </h2>
            <p className="text-lg text-slate-600">
              Llame a nuestra línea de emergencias en estas situaciones:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whenToCall.map((item, index) => (
              <Card key={index} variant="outlined" className="border-red-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  Información importante
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <strong>La Unción no es &ldquo;extremaunción&rdquo;:</strong> No es necesario
                    esperar a que el enfermo esté en las últimas. Se puede solicitar ante
                    cualquier enfermedad grave.
                  </li>
                  <li>
                    <strong>No dude en llamar:</strong> Aunque no esté seguro de la gravedad,
                    es mejor llamar y que evaluemos la situación.
                  </li>
                  <li>
                    <strong>Tenga a mano:</strong> Nombre del enfermo, dirección o habitación
                    del hospital, nombre de quien llama y relación con el enfermo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Civil Emergency Numbers */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Otros Números Útiles</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Líneas de emergencia generales
            </h2>
            <p className="text-lg text-slate-600">
              Para emergencias médicas, incendios, seguridad u otras situaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {civilEmergencyNumbers.map((item, index) => (
              <a
                key={index}
                href={`tel:${item.number.replace(/\s/g, '')}`}
                className="block group"
              >
                <Card variant="interactive" className="h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-celestial-100 flex items-center justify-center flex-shrink-0 text-celestial-600 group-hover:bg-celestial-200 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 truncate">{item.name}</h3>
                      <p className="text-xs text-slate-500">{item.description}</p>
                      <p className="font-mono text-lg font-semibold text-celestial-600 mt-1">
                        {item.number}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Card */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="max-w-2xl mx-auto">
            <Card variant="elevated" className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Guarde este número
                </h2>
                <p className="text-slate-600 mb-4">
                  Línea de emergencia pastoral - Disponible 24/7
                </p>
                <a
                  href="tel:+576067412233"
                  className="inline-block font-mono text-3xl font-bold text-red-600 hover:text-red-700 mb-6"
                >
                  +57 606 741 2233
                </a>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="tel:+576067412233">
                    <Button variant="emergency" size="lg">
                      <Phone className="w-5 h-5" />
                      Llamar ahora
                    </Button>
                  </a>
                  <Link href="/contacto">
                    <Button variant="secondary" size="lg">
                      Solicitud no urgente
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Non-Emergencies */}
      <section className="py-12 bg-slate-100">
        <div className="container-pastoral">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                ¿No es una emergencia?
              </h3>
              <p className="text-slate-600">
                Para solicitudes de visita regular, información o voluntariado, use nuestro formulario de contacto.
              </p>
            </div>
            <Link href="/contacto">
              <Button variant="secondary">
                Ir a contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
