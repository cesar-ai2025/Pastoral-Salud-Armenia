'use client'

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'emergency' | 'destructive'
type ButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-celestial-600 text-white border-transparent
    hover:bg-celestial-700 hover:shadow-celestial
    active:bg-celestial-800 active:scale-[0.98]
  `,
  secondary: `
    bg-white text-slate-700 border-slate-200
    hover:bg-slate-50 hover:border-slate-300
    active:bg-slate-100 active:scale-[0.98]
  `,
  ghost: `
    bg-transparent text-slate-600 border-transparent
    hover:bg-slate-100 hover:text-slate-900
    active:bg-slate-200
  `,
  emergency: `
    bg-red-600 text-white border-transparent
    hover:bg-red-700 hover:shadow-[0_4px_14px_0_rgba(220,38,38,0.35)]
    active:bg-red-800 active:scale-[0.98]
    animate-pulse-gentle
  `,
  destructive: `
    bg-red-600 text-white border-transparent
    hover:bg-red-700
    active:bg-red-800 active:scale-[0.98]
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-7 px-2.5 text-xs gap-1.5',
  sm: 'h-8 px-3 text-sm gap-1.5',
  default: 'h-10 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-base gap-2',
  xl: 'h-12 px-6 text-base gap-2.5',
}

const iconSizes: Record<ButtonSize, string> = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-4 h-4',
  default: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-5 h-5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center
          font-sans font-medium
          rounded-lg border
          transition-all duration-fast
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celestial-500 focus-visible:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className={`${iconSizes[size]} animate-spin`} />
            <span>Procesando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className={iconSizes[size]}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={iconSizes[size]}>{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
