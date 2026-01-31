'use client'

import { forwardRef, SelectHTMLAttributes, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      placeholder = 'Seleccionar...',
      id,
      className = '',
      ...props
    },
    ref
  ) => {
    const selectId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full h-10 px-3 py-2 pr-10
              text-base text-slate-900
              bg-white
              border rounded-lg
              appearance-none
              transition-colors duration-fast
              ${error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-200 hover:border-slate-300 focus:border-celestial-500 focus:ring-celestial-500'
              }
              focus:outline-none focus:ring-2 focus:ring-opacity-20
              disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
              ${className}
            `}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          />
        </div>

        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${selectId}-helper`} className="mt-1.5 text-sm text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
