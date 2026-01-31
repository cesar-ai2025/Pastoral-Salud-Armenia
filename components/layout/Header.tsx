'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'

const navItems = [
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  {
    href: '/servicios',
    label: 'Servicios',
    children: [
      { href: '/servicios/atencion-enfermo', label: 'Atención al Enfermo' },
      { href: '/servicios/apoyo-cuidador', label: 'Apoyo al Cuidador' },
      { href: '/servicios/obra-social', label: 'Obra Social' },
    ],
  },
  { href: '/formacion', label: 'Formación' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/colaborar', label: 'Colaborar' },
  { href: '/contacto', label: 'Contacto' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-pastoral">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Dual Logos */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Logo Pastoral */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-pastoral-salud.jpeg"
                alt="Pastoral de la Salud"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover"
              />
            </Link>

            {/* Separator */}
            <div className="h-8 lg:h-10 w-px bg-slate-200" />

            {/* Logo Diócesis */}
            <a
              href="https://diocesisarmenia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/images/logo-diocesis-armenia.png"
                alt="Diócesis de Armenia"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
            </a>

            {/* Site Name (hidden on mobile) */}
            <div className="hidden md:block ml-2">
              <p className="font-display text-lg font-semibold text-slate-900 leading-tight">
                Pastoral de la Salud
              </p>
              <p className="text-xs text-slate-500">Diócesis de Armenia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="
                    flex items-center gap-1
                    px-3 py-2
                    text-sm font-medium text-slate-600
                    hover:text-celestial-600
                    rounded-lg
                    transition-colors
                  "
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-white rounded-lg shadow-lg border border-slate-100 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="
                            block px-4 py-2
                            text-sm text-slate-600
                            hover:text-celestial-600 hover:bg-slate-50
                            transition-colors
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Emergency Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <Link href="/emergencias">
              <Button variant="emergency" size="sm" className="hidden sm:flex">
                <Phone className="w-4 h-4" />
                <span>Emergencias</span>
              </Button>
              <Button variant="emergency" size="sm" className="sm:hidden px-2">
                <Phone className="w-4 h-4" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="container-pastoral py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    className="
                      block px-3 py-2
                      text-base font-medium text-slate-700
                      hover:text-celestial-600 hover:bg-slate-50
                      rounded-lg
                      transition-colors
                    "
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="
                            block px-3 py-2
                            text-sm text-slate-600
                            hover:text-celestial-600 hover:bg-slate-50
                            rounded-lg
                            transition-colors
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
