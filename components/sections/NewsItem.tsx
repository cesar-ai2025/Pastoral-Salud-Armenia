import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface NewsItemProps {
  title: string
  excerpt: string
  slug: string
  image?: string
  publishedAt: string
  isEvent?: boolean
  eventDate?: string
}

export function NewsItem({
  title,
  excerpt,
  slug,
  image,
  publishedAt,
  isEvent = false,
  eventDate,
}: NewsItemProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedEventDate = eventDate
    ? new Date(eventDate).toLocaleDateString('es-CO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      })
    : null

  return (
    <Link href={`/noticias/${slug}`} className="group block h-full">
      <Card variant="interactive" padding="none" className="h-full flex flex-col overflow-hidden">
        {/* Image */}
        {image && (
          <div className="relative h-40 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-slow"
            />
            {isEvent && (
              <div className="absolute top-3 left-3">
                <Badge variant="warning">Evento</Badge>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          {/* Date */}
          <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={publishedAt}>{formattedDate}</time>
          </div>

          {/* Event date if applicable */}
          {isEvent && formattedEventDate && (
            <div className="text-sm font-medium text-sacred-600 mb-2">
              📅 {formattedEventDate}
            </div>
          )}

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-slate-900 mb-2 group-hover:text-celestial-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 flex-1 line-clamp-3">
            {excerpt}
          </p>

          {/* Read more */}
          <div className="flex items-center text-sm font-medium text-celestial-600 mt-4">
            <span>Leer más</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  )
}

// Compact version for lists
interface NewsItemCompactProps {
  title: string
  publishedAt: string
  slug: string
  isEvent?: boolean
}

export function NewsItemCompact({
  title,
  publishedAt,
  slug,
  isEvent = false,
}: NewsItemCompactProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'short',
  })

  return (
    <Link
      href={`/noticias/${slug}`}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
    >
      {/* Date badge */}
      <div className="w-12 h-12 rounded-lg bg-slate-100 flex flex-col items-center justify-center flex-shrink-0">
        <span className="text-xs text-slate-500 uppercase">
          {new Date(publishedAt).toLocaleDateString('es-CO', { month: 'short' })}
        </span>
        <span className="text-lg font-semibold text-slate-900">
          {new Date(publishedAt).getDate()}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {isEvent && (
          <Badge variant="warning" size="sm" className="mb-1">
            Evento
          </Badge>
        )}
        <h4 className="text-sm font-medium text-slate-900 group-hover:text-celestial-600 transition-colors line-clamp-2">
          {title}
        </h4>
      </div>
    </Link>
  )
}

export default NewsItem
