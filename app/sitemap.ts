import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pastoralsaludarmenia.org'

  // Static pages
  const staticPages = [
    '',
    '/quienes-somos',
    '/servicios',
    '/servicios/atencion-enfermo',
    '/servicios/apoyo-cuidador',
    '/servicios/obra-social',
    '/formacion',
    '/formacion/inscripcion',
    '/recursos',
    '/colaborar',
    '/colaborar/donar',
    '/colaborar/voluntariado',
    '/contacto',
    '/emergencias',
    '/politica-privacidad',
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/servicios') ? 0.9 : 0.8,
  }))
}
