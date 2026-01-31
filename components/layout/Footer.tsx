import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react'

const quickLinks = [
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/formacion', label: 'Formación' },
  { href: '/recursos', label: 'Recursos Espirituales' },
  { href: '/contacto', label: 'Contacto' },
]

const serviceLinks = [
  { href: '/servicios/atencion-enfermo', label: 'Atención al Enfermo' },
  { href: '/servicios/apoyo-cuidador', label: 'Apoyo al Cuidador' },
  { href: '/servicios/obra-social', label: 'Obra Social' },
  { href: '/emergencias', label: 'Línea de Emergencias' },
]

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-pastoral py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-pastoral-salud.jpeg"
                alt="Pastoral de la Salud"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  Pastoral de la Salud
                </p>
                <p className="text-xs text-slate-400">Diócesis de Armenia</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Acompañamos con amor y fe a los enfermos, sus familias y cuidadores.
              Somos presencia de Cristo que sana.
            </p>
            <p className="font-accent text-xl text-sacred-400 italic">
              &ldquo;El amor que sana&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-celestial-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-celestial-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-celestial-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Curia Diocesana, Armenia, Quindío, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-celestial-400 flex-shrink-0" />
                <a
                  href="tel:+576067412233"
                  className="text-sm text-slate-400 hover:text-celestial-400 transition-colors"
                >
                  +57 606 741 2233
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-celestial-400 flex-shrink-0" />
                <a
                  href="mailto:pastoraldelasalud@diocesisarmenia.org"
                  className="text-sm text-slate-400 hover:text-celestial-400 transition-colors break-all"
                >
                  pastoraldelasalud@diocesisarmenia.org
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">Síguenos</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-2 rounded-lg
                      text-slate-400 hover:text-celestial-400
                      bg-slate-800 hover:bg-slate-700
                      transition-colors
                    "
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-pastoral py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              &copy; {currentYear} Pastoral de la Salud — Diócesis de Armenia. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <Link
                href="/politica-privacidad"
                className="hover:text-celestial-400 transition-colors"
              >
                Política de Privacidad
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/terminos"
                className="hover:text-celestial-400 transition-colors"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
          <p className="text-xs text-slate-600 text-center mt-4 flex items-center justify-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red-500" /> en Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
