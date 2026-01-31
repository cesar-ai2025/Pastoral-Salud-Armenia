import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  image?: string
  featured?: boolean
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  image,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card
        variant="interactive"
        padding="none"
        className={`
          h-full flex flex-col overflow-hidden
          ${featured ? 'ring-2 ring-celestial-200' : ''}
        `}
      >
        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Icon */}
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center mb-4
            ${featured ? 'bg-celestial-100 text-celestial-600' : 'bg-slate-100 text-slate-600'}
            group-hover:bg-celestial-100 group-hover:text-celestial-600
            transition-colors
          `}>
            {icon}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold text-slate-900 mb-2 group-hover:text-celestial-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm flex-1 mb-4">
            {description}
          </p>

          {/* Link indicator */}
          <div className="flex items-center text-sm font-medium text-celestial-600">
            <span>Conocer más</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ServiceCard
