'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        {/* Message */}
        <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Algo salió mal
        </h1>
        <p className="text-slate-600 mb-8">
          Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg" onClick={reset}>
            <RefreshCw className="w-5 h-5" />
            Intentar de nuevo
          </Button>
          <Link href="/">
            <Button variant="secondary" size="lg">
              <Home className="w-5 h-5" />
              Ir al inicio
            </Button>
          </Link>
        </div>

        {/* Error digest for debugging */}
        {error.digest && (
          <p className="mt-8 text-xs text-slate-400">
            Código de error: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
