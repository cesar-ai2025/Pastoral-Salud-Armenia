import { ReactNode } from 'react'
import { Phone, ExternalLink } from 'lucide-react'
import { Card } from '../ui/Card'

interface EmergencyNumberProps {
  name: string
  number: string
  description?: string
  icon?: ReactNode
  isPrimary?: boolean
}

export function EmergencyNumber({
  name,
  number,
  description,
  icon,
  isPrimary = false,
}: EmergencyNumberProps) {
  const phoneHref = `tel:${number.replace(/\s/g, '')}`

  return (
    <a href={phoneHref} className="block group">
      <Card
        variant="interactive"
        className={`
          ${isPrimary
            ? 'bg-red-50 border-2 border-red-200 hover:border-red-300'
            : 'bg-white'
          }
        `}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
            ${isPrimary
              ? 'bg-red-100 text-red-600'
              : 'bg-celestial-100 text-celestial-600'
            }
            group-hover:scale-110 transition-transform
          `}>
            {icon || <Phone className="w-6 h-6" />}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className={`
              font-semibold text-lg
              ${isPrimary ? 'text-red-700' : 'text-slate-900'}
            `}>
              {name}
            </h3>

            {description && (
              <p className="text-sm text-slate-600 mt-1">
                {description}
              </p>
            )}

            <div className={`
              flex items-center gap-2 mt-2
              font-mono text-lg font-semibold
              ${isPrimary ? 'text-red-600' : 'text-celestial-600'}
            `}>
              <Phone className="w-4 h-4" />
              <span>{number}</span>
            </div>
          </div>

          {/* Call indicator */}
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
            ${isPrimary
              ? 'bg-red-600 text-white group-hover:bg-red-700'
              : 'bg-celestial-600 text-white group-hover:bg-celestial-700'
            }
            transition-colors
          `}>
            <Phone className="w-5 h-5" />
          </div>
        </div>
      </Card>
    </a>
  )
}

// Component for emergency cards grid layout
interface EmergencyGridProps {
  children: ReactNode
}

export function EmergencyGrid({ children }: EmergencyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  )
}

export default EmergencyNumber
