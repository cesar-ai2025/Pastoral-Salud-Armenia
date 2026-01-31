import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pastoralsaludarmenia.org'),
  title: {
    default: 'Pastoral de la Salud — Diócesis de Armenia',
    template: '%s | Pastoral de la Salud',
  },
  description: 'Acompañamos con amor y fe a los enfermos, sus familias y cuidadores. Somos presencia de Cristo que sana. El amor que sana.',
  keywords: [
    'pastoral salud',
    'diócesis armenia',
    'armenia quindío',
    'atención enfermos',
    'cuidadores',
    'apoyo espiritual',
    'voluntariado católico',
    'iglesia católica colombia',
  ],
  authors: [{ name: 'Diócesis de Armenia' }],
  creator: 'Pastoral de la Salud — Diócesis de Armenia',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://pastoralsaludarmenia.org',
    siteName: 'Pastoral de la Salud — Diócesis de Armenia',
    title: 'Pastoral de la Salud — Diócesis de Armenia',
    description: 'Acompañamos con amor y fe a los enfermos, sus familias y cuidadores. El amor que sana.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Pastoral de la Salud — El amor que sana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pastoral de la Salud — Diócesis de Armenia',
    description: 'Acompañamos con amor y fe a los enfermos, sus familias y cuidadores.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0284c7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
