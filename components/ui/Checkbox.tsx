'use client'

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { Check } from 'lucide-react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode
  helperText?: string
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      id,
      className = '',
      ...props
    },
    ref
  ) => {
    const checkboxId = id || props.name

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={`
            flex items-start gap-3 cursor-pointer
            ${props.disabled ? 'cursor-not-allowed opacity-50' : ''}
          `}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className="peer sr-only"
              aria-invalid={!!error}
              aria-describedby={
                error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined
              }
              {...props}
            />
            <div
              className={`
                w-5 h-5
                border-2 rounded
                transition-all duration-fast
                ${error
                  ? 'border-red-500'
                  : 'border-slate-300 peer-hover:border-slate-400'
                }
                peer-checked:bg-celestial-600 peer-checked:border-celestial-600
                peer-focus-visible:ring-2 peer-focus-visible:ring-celestial-500 peer-focus-visible:ring-offset-2
                peer-disabled:bg-slate-100 peer-disabled:border-slate-200
              `}
            >
              <Check
                className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                strokeWidth={3}
              />
            </div>
          </div>

          {label && (
            <span className="text-sm text-slate-700 select-none">
              {label}
              {props.required && <span className="text-red-500 ml-0.5">*</span>}
            </span>
          )}
        </label>

        {error && (
          <p id={`${checkboxId}-error`} className="mt-1.5 text-sm text-red-600 ml-8" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${checkboxId}-helper`} className="mt-1.5 text-sm text-slate-500 ml-8">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
