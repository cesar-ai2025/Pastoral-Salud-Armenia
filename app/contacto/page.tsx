import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  AlertTriangle,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero } from '@/components/sections'
import { ContactForm } from '@/components/forms'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacte a la Pastoral de la Salud de Armenia. Formulario de contacto, teléfono, correo electrónico y ubicación. Estamos aquí para acompañarle.',
}

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Teléfono',
    content: '+57 606 741 2233',
    link: 'tel:+576067412233',
    description: 'Lunes a viernes, 8am - 5pm',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Correo electrónico',
    content: 'pastoral.salud@diocesisarmenia.org',
    link: 'mailto:pastoral.salud@diocesisarmenia.org',
    description: 'Respondemos en 24-48 horas',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Dirección',
    content: 'Curia Diocesana, Cra 14 #20-46',
    link: 'https://maps.google.com/?q=Diocesis+de+Armenia+Colombia',
    description: 'Armenia, Quindío, Colombia',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Horario de atención',
    content: 'Lun - Vie: 8am - 12pm, 2pm - 5pm',
    description: 'Emergencias: 24 horas',
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/pastoraldesaludarmenia',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/pastoraldesaludarmenia',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/576067412233',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function ContactoPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Contáctenos"
        subtitle="Estamos aquí para acompañarle"
        description="Ya sea que necesite atención pastoral, quiera ser voluntario, o tenga alguna consulta, estaremos encantados de atenderle."
        primaryCTA={{
          label: 'Llamar ahora',
          href: 'tel:+576067412233',
          icon: <Phone className="w-5 h-5" />,
        }}
        alignment="center"
        overlay="light"
      />

      {/* Emergency Banner */}
      <section className="bg-red-50 border-y border-red-100 py-4">
        <div className="container-pastoral">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">¿Es una emergencia?</span>
            </div>
            <span className="text-red-600">
              Para unción de enfermos graves o atención urgente
            </span>
            <Link href="/emergencias">
              <Button variant="emergency" size="sm">
                Ver números de emergencia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-pastoral">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} variant="outlined" className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-celestial-100 flex items-center justify-center text-celestial-600">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-celestial-600 hover:underline font-medium"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-slate-900 font-medium">{item.content}</p>
                )}
                <p className="text-sm text-slate-500 mt-1">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Badge variant="primary" className="mb-4">Formulario de Contacto</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Envíenos un mensaje
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Complete el formulario y nos pondremos en contacto con usted lo antes posible.
              </p>

              <Card variant="elevated" className="bg-white">
                <ContactForm />
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map */}
              <div>
                <Badge variant="success" className="mb-4">Ubicación</Badge>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                  ¿Dónde encontrarnos?
                </h3>
                <Card variant="default" padding="none" className="overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5!2d-75.68!3d4.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzEnNDguMCJOIDc1wrA0MCc0OC4wIlc!5e0!3m2!1ses!2sco!4v1600000000000!5m2!1ses!2sco"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Diócesis de Armenia"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-900">Curia Diocesana</p>
                    <p className="text-sm text-slate-600">
                      Carrera 14 #20-46, Centro<br />
                      Armenia, Quindío, Colombia
                    </p>
                    <a
                      href="https://maps.google.com/?q=Diocesis+de+Armenia+Colombia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-celestial-600 hover:underline mt-2"
                    >
                      Abrir en Google Maps
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <Card variant="outlined">
                <h3 className="font-semibold text-slate-900 mb-4">Síguenos en redes</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-celestial-100 hover:text-celestial-600 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Links */}
              <Card variant="default" className="bg-gradient-to-br from-celestial-50 to-healing-50">
                <h3 className="font-semibold text-slate-900 mb-4">Enlaces rápidos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/servicios"
                      className="flex items-center gap-2 text-slate-700 hover:text-celestial-600"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Ver nuestros servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/colaborar/voluntariado"
                      className="flex items-center gap-2 text-slate-700 hover:text-celestial-600"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Quiero ser voluntario
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/formacion"
                      className="flex items-center gap-2 text-slate-700 hover:text-celestial-600"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Cursos disponibles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/colaborar/donar"
                      className="flex items-center gap-2 text-slate-700 hover:text-celestial-600"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Hacer una donación
                    </Link>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-12 bg-white">
        <div className="container-pastoral">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-healing-100 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-healing-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
              ¿Cuándo recibiré respuesta?
            </h2>
            <p className="text-slate-600 mb-6">
              Respondemos los mensajes del formulario en un plazo de <strong>24 a 48 horas hábiles</strong>.
              Para consultas urgentes, le recomendamos llamar directamente a nuestra línea telefónica.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="success">Lun-Vie: 8am - 5pm</Badge>
              <Badge variant="info">Respuesta en 24-48h</Badge>
              <Badge variant="error">Emergencias: 24h</Badge>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
