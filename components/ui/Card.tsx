import { ReactNode, HTMLAttributes } from 'react'

type CardVariant = 'default' | 'elevated' | 'outlined' | 'interactive'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: 'none' | 'compact' | 'default' | 'spacious'
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white shadow-sm',
  elevated: 'bg-white shadow-md',
  outlined: 'bg-white border border-slate-200',
  interactive: `
    bg-white shadow-sm
    hover:shadow-md hover:-translate-y-0.5
    transition-all duration-normal
    cursor-pointer
  `,
}

const paddingStyles: Record<string, string> = {
  none: '',
  compact: 'p-4',
  default: 'p-6',
  spacious: 'p-8',
}

export function Card({
  variant = 'default',
  padding = 'default',
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

export function CardTitle({ children, as: Component = 'h3', className = '' }: CardTitleProps) {
  return (
    <Component className={`font-display text-xl font-semibold text-slate-900 ${className}`}>
      {children}
    </Component>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-sm text-slate-600 mt-1 ${className}`}>
      {children}
    </p>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-slate-100 ${className}`}>
      {children}
    </div>
  )
}

export default Card
