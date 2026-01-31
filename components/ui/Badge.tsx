import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
type BadgeSize = 'sm' | 'default' | 'lg'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-700',
  primary: 'bg-celestial-100 text-celestial-700',
  success: 'bg-healing-100 text-healing-700',
  warning: 'bg-sacred-100 text-sacred-700',
  error: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  default: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}

export function Badge({
  variant = 'default',
  size = 'default',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium
        rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export default Badge
