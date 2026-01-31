'use client'

import { forwardRef, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      id,
      rows = 4,
      className = '',
      ...props
    },
    ref
  ) => {
    const textareaId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`
            w-full px-3 py-2
            text-base text-slate-900 placeholder:text-slate-400
            bg-white
            border rounded-lg
            resize-y min-h-[80px]
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
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />

        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
