import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
      sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      accent: ['Caveat', 'cursive'],
      mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
    },

    extend: {
      colors: {
        // Celestial Blue - Divine presence, trust
        celestial: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Healing Green - Health, growth, renewal
        healing: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Sacred Gold - Divine light, hope, warmth
        sacred: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.25rem', { lineHeight: '1.5' }],
        'xl': ['1.5rem', { lineHeight: '1.375' }],
        '2xl': ['1.875rem', { lineHeight: '1.25' }],
        '3xl': ['2.375rem', { lineHeight: '1.25' }],
        '4xl': ['3rem', { lineHeight: '1.1' }],
        '5xl': ['3.75rem', { lineHeight: '1.1' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
      },

      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px -1px rgba(15, 23, 42, 0.1)',
        'DEFAULT': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.1)',
        'md': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.1)',
        'lg': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)',
        'xl': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        '2xl': '0 35px 60px -15px rgba(15, 23, 42, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.05)',
        'celestial': '0 4px 14px 0 rgba(14, 165, 233, 0.25)',
        'healing': '0 4px 14px 0 rgba(34, 197, 94, 0.25)',
        'sacred': '0 4px 14px 0 rgba(245, 158, 11, 0.25)',
      },

      transitionDuration: {
        'instant': '50ms',
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
        'slowest': '1000ms',
      },

      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      animation: {
        'fade-in': 'fadeIn 250ms ease-out',
        'slide-up': 'slideUp 250ms ease-out',
        'scale-in': 'scaleIn 250ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spin-slow': 'spin 1.5s linear infinite',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },

      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-links': theme('colors.celestial.600'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-counters': theme('colors.slate.500'),
            '--tw-prose-bullets': theme('colors.slate.400'),
            '--tw-prose-quotes': theme('colors.slate.700'),
            '--tw-prose-code': theme('colors.celestial.700'),
            '--tw-prose-hr': theme('colors.slate.200'),
            maxWidth: '65ch',
            fontFamily: theme('fontFamily.sans'),
            h1: {
              fontFamily: theme('fontFamily.display'),
            },
            h2: {
              fontFamily: theme('fontFamily.display'),
            },
            h3: {
              fontFamily: theme('fontFamily.display'),
            },
          },
        },
      }),
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

    plugin(function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.focus-ring': {
          '&:focus-visible': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.white')}, 0 0 0 4px ${theme('colors.celestial.500')}`,
          },
        },
      })

      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.sm'),
          transition: 'box-shadow 150ms ease',
          '&:hover': {
            boxShadow: theme('boxShadow.md'),
          },
        },
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.2'),
          height: '2.5rem',
          padding: `0 ${theme('spacing.4')}`,
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.sm')[0],
          fontWeight: theme('fontWeight.medium'),
          lineHeight: '1',
          borderRadius: theme('borderRadius.lg'),
          cursor: 'pointer',
          transition: 'all 150ms ease',
          '&:focus-visible': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.white')}, 0 0 0 4px ${theme('colors.celestial.500')}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            opacity: '0.5',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.celestial.600'),
          color: theme('colors.white'),
          border: 'none',
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.celestial.700'),
            boxShadow: theme('boxShadow.celestial'),
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme('colors.celestial.800'),
            transform: 'scale(0.98)',
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.slate.700'),
          border: `1px solid ${theme('colors.slate.200')}`,
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.slate.50'),
            borderColor: theme('colors.slate.300'),
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.slate.600'),
          border: 'none',
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.slate.100'),
            color: theme('colors.slate.900'),
          },
        },
        '.btn-emergency': {
          backgroundColor: theme('colors.red.600'),
          color: theme('colors.white'),
          border: 'none',
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.red.700'),
            boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.35)',
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme('colors.red.800'),
            transform: 'scale(0.98)',
          },
        },
      })
    }),
  ],
}

export default config
