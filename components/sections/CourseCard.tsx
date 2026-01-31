import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface CourseCardProps {
  title: string
  description: string
  image?: string
  duration?: string
  price?: number
  topics?: string[]
  isActive?: boolean
  href?: string
}

export function CourseCard({
  title,
  description,
  image,
  duration,
  price,
  topics = [],
  isActive = true,
  href = '/formacion/inscripcion',
}: CourseCardProps) {
  return (
    <Card variant="default" padding="none" className="h-full flex flex-col overflow-hidden">
      {/* Image */}
      {image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {!isActive && (
            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
              <Badge variant="default" size="lg">Próximamente</Badge>
            </div>
          )}
          {isActive && price !== undefined && (
            <div className="absolute top-3 right-3">
              <Badge variant="success" size="lg">
                {price === 0 ? 'Gratis' : `$${price.toLocaleString('es-CO')}`}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
          {duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
          {topics.length > 0 && (
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>{topics.length} temas</span>
            </div>
          )}
        </div>

        {/* Topics preview */}
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {topics.slice(0, 3).map((topic, index) => (
              <Badge key={index} variant="default" size="sm">
                {topic}
              </Badge>
            ))}
            {topics.length > 3 && (
              <Badge variant="default" size="sm">
                +{topics.length - 3} más
              </Badge>
            )}
          </div>
        )}

        {/* CTA */}
        {isActive ? (
          <Link href={href} className="w-full">
            <Button variant="primary" className="w-full">
              Inscribirse
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        ) : (
          <Button variant="secondary" disabled className="w-full">
            Próximamente
          </Button>
        )}
      </div>
    </Card>
  )
}

export default CourseCard
