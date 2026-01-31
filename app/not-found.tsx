import Link from 'next/link'
import { Home, ArrowLeft, Phone } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[70vh] flex items-center justify-center py-16">
        <div className="container-pastoral text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <span className="text-9xl font-display font-bold text-celestial-200">404</span>
          </div>

          {/* Message */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="w-5 h-5" />
                Ir al inicio
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5" />
                Contactarnos
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">También puedes visitar:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/servicios" className="text-celestial-600 hover:underline">
                Nuestros servicios
              </Link>
              <Link href="/quienes-somos" className="text-celestial-600 hover:underline">
                Quiénes somos
              </Link>
              <Link href="/emergencias" className="text-celestial-600 hover:underline">
                Línea de emergencias
              </Link>
              <Link href="/formacion" className="text-celestial-600 hover:underline">
                Formación
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
