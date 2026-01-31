import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  tagline?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
    icon?: ReactNode
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  backgroundImage?: string
  overlay?: 'light' | 'dark' | 'gradient'
  alignment?: 'left' | 'center'
  size?: 'default' | 'large'
}

const overlayStyles = {
  light: 'bg-white/80',
  dark: 'bg-slate-900/60',
  gradient: 'bg-gradient-to-r from-celestial-900/80 via-celestial-800/70 to-transparent',
}

export function Hero({
  title,
  subtitle,
  tagline,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = 'gradient',
  alignment = 'left',
  size = 'default',
}: HeroProps) {
  const containerAlignment = alignment === 'center' ? 'items-center text-center' : 'items-start text-left'
  const heightClass = size === 'large' ? 'min-h-[80vh]' : 'min-h-[50vh]'

  return (
    <section className={`relative ${heightClass} flex items-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
        </div>
      )}

      {/* Default gradient background if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-celestial-50 via-white to-healing-50" />
      )}

      {/* Content */}
      <div className="container-pastoral relative z-10 py-12 lg:py-20">
        <div className={`flex flex-col ${containerAlignment} max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {/* Tagline */}
          {tagline && (
            <span className="font-accent text-2xl text-sacred-500 mb-2">
              {tagline}
            </span>
          )}

          {/* Title */}
          <h1 className={`
            font-display text-4xl md:text-5xl lg:text-6xl font-bold
            ${overlay === 'dark' || overlay === 'gradient' ? 'text-white' : 'text-slate-900'}
            text-balance leading-tight
          `}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className={`
              mt-4 text-xl md:text-2xl font-medium
              ${overlay === 'dark' || overlay === 'gradient' ? 'text-celestial-100' : 'text-celestial-600'}
            `}>
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className={`
              mt-4 text-lg
              ${overlay === 'dark' || overlay === 'gradient' ? 'text-slate-200' : 'text-slate-600'}
              max-w-xl
            `}>
              {description}
            </p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className={`
              mt-8 flex flex-wrap gap-4
              ${alignment === 'center' ? 'justify-center' : 'justify-start'}
            `}>
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" variant="primary">
                    {primaryCTA.icon}
                    {primaryCTA.label}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button
                    size="lg"
                    variant={overlay === 'dark' || overlay === 'gradient' ? 'ghost' : 'secondary'}
                    className={overlay === 'dark' || overlay === 'gradient' ? 'text-white hover:bg-white/10' : ''}
                  >
                    {secondaryCTA.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
