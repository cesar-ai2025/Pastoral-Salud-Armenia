'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  PlayCircle,
  Download,
  Cross,
  Heart,
  FileText,
  Video,
  Music,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Button, Card, Badge } from '@/components/ui'
import { Hero, VideoEmbed } from '@/components/sections'

const prayers = [
  {
    title: 'Oración por los enfermos',
    content: `Señor Jesús, que pasaste haciendo el bien
y sanando a todos los que sufrían,
te pedimos por nuestros hermanos enfermos.

Dales paciencia en el dolor,
fortaleza en la prueba,
y la certeza de tu amor que no abandona.

Que sientan tu presencia sanadora
y encuentren en Ti consuelo y esperanza.

Por la intercesión de María, salud de los enfermos,
te lo pedimos. Amén.`,
    category: 'Para enfermos',
  },
  {
    title: 'Oración del cuidador',
    content: `Señor, Tú que cuidaste a los más necesitados,
dame fuerzas para continuar esta misión.

Cuando el cansancio me venza,
sé Tú mi descanso.
Cuando la paciencia me falte,
dame Tu amor compasivo.
Cuando me sienta solo,
recuérdame que caminas conmigo.

Bendice mis manos que cuidan,
mis ojos que velan,
mi corazón que ama.

Dame la gracia de ver Tu rostro
en quien me necesita. Amén.`,
    category: 'Para cuidadores',
  },
  {
    title: 'Oración en el dolor',
    content: `Jesús, que sufriste en la cruz,
comprende mi dolor.

No te pido que lo quites,
sino que me ayudes a llevarlo.
Dame fe para confiar en Ti,
esperanza para no desfallecer,
amor para ofrecerte este momento.

Transforma mi sufrimiento en ofrenda,
mi debilidad en tu fortaleza.

María, que estuviste al pie de la cruz,
acompáñame también a mí. Amén.`,
    category: 'En el sufrimiento',
  },
  {
    title: 'Oración por un familiar enfermo',
    content: `Padre bueno, te encomiendo a mi ser querido
que atraviesa este momento de enfermedad.

Tú que amas a cada uno de tus hijos,
míralo con compasión.
Acompáñalo en las noches de dolor,
dale paz en los momentos de angustia.

Bendice a quienes lo cuidan,
guía a los médicos que lo atienden.

Si es Tu voluntad, devuélvele la salud.
Pero sobre todo, danos la fe para aceptar
Tu santo querer. Amén.`,
    category: 'Para la familia',
  },
]

const videos = [
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with real YouTube IDs
    title: 'Oración por los enfermos - Rosario meditado',
    description: 'Rosario meditado especialmente para acompañar a los enfermos.',
    duration: '45 min',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Reflexión: El sentido cristiano del sufrimiento',
    description: 'Una reflexión sobre cómo la fe nos ayuda a dar sentido al dolor.',
    duration: '15 min',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Música para orar: Cantos de sanación',
    description: 'Selección de cantos para momentos de oración y meditación.',
    duration: '60 min',
  },
]

const downloads = [
  {
    title: 'Guía de oraciones para el enfermo',
    description: 'Colección de oraciones para diferentes momentos de la enfermedad.',
    format: 'PDF',
    size: '2.5 MB',
    url: '#',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: 'Novena a la Virgen de la Salud',
    description: 'Novena tradicional para pedir por la salud de nuestros seres queridos.',
    format: 'PDF',
    size: '1.2 MB',
    url: '#',
    icon: <Cross className="w-5 h-5" />,
  },
  {
    title: 'Manual para cuidadores - Aspectos espirituales',
    description: 'Guía de acompañamiento espiritual para quienes cuidan enfermos.',
    format: 'PDF',
    size: '4.1 MB',
    url: '#',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: 'Sacramento de la Unción - Guía para familias',
    description: 'Información sobre el sacramento de la Unción de los enfermos.',
    format: 'PDF',
    size: '890 KB',
    url: '#',
    icon: <Heart className="w-5 h-5" />,
  },
]

const externalResources = [
  {
    title: 'Vatican.va - Pastoral de la Salud',
    description: 'Documentos del Vaticano sobre la pastoral de la salud.',
    url: 'https://www.vatican.va/roman_curia/pontifical_councils/hlthwork/index_sp.htm',
  },
  {
    title: 'CELAM - Pastoral de la Salud',
    description: 'Recursos del Consejo Episcopal Latinoamericano.',
    url: 'https://celam.org/',
  },
  {
    title: 'Conferencia Episcopal de Colombia',
    description: 'Sitio oficial de la Iglesia Católica en Colombia.',
    url: 'https://www.cec.org.co/',
  },
]

export default function RecursosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const categories = ['all', ...new Set(prayers.map((p) => p.category))]

  const filteredPrayers =
    activeCategory === 'all'
      ? prayers
      : prayers.filter((p) => p.category === activeCategory)

  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Recursos Espirituales"
        subtitle="Alimento para el alma"
        description="Oraciones, reflexiones, videos y materiales para fortalecer tu fe y acompañar los momentos de enfermedad con esperanza."
        primaryCTA={{
          label: 'Ver oraciones',
          href: '#oraciones',
          icon: <BookOpen className="w-5 h-5" />,
        }}
        secondaryCTA={{
          label: 'Descargar materiales',
          href: '#descargas',
        }}
        alignment="center"
        overlay="light"
      />

      {/* Prayers Section */}
      <section id="oraciones" className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="primary" className="mb-4">Oraciones</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Oraciones para diferentes momentos
            </h2>
            <p className="text-lg text-slate-600">
              Selección de oraciones para acompañar la enfermedad, el cuidado y el dolor.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category
                    ? 'bg-celestial-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }
                `}
              >
                {category === 'all' ? 'Todas' : category}
              </button>
            ))}
          </div>

          {/* Prayers Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPrayers.map((prayer, index) => (
              <Card key={index} variant="elevated" className="bg-gradient-to-br from-white to-celestial-50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-celestial-100 flex items-center justify-center flex-shrink-0">
                    <Cross className="w-5 h-5 text-celestial-600" />
                  </div>
                  <div>
                    <Badge variant="default" size="sm" className="mb-1">
                      {prayer.category}
                    </Badge>
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {prayer.title}
                    </h3>
                  </div>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-slate-700 text-sm leading-relaxed">
                  {prayer.content}
                </pre>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="info" className="mb-4">Videos</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Videos de oración y reflexión
            </h2>
            <p className="text-lg text-slate-600">
              Contenido audiovisual para acompañar tus momentos de oración.
            </p>
          </div>

          {/* Selected Video */}
          {selectedVideo && (
            <div className="mb-8 max-w-3xl mx-auto">
              <VideoEmbed
                youtubeId={selectedVideo}
                title="Video seleccionado"
              />
              <Button
                variant="ghost"
                size="sm"
                className="mt-4"
                onClick={() => setSelectedVideo(null)}
              >
                Cerrar video
              </Button>
            </div>
          )}

          {/* Video Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                variant="interactive"
                className="cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="aspect-video rounded-lg bg-slate-200 mb-4 relative overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                  <Badge variant="default" className="absolute bottom-2 right-2">
                    {video.duration}
                  </Badge>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{video.title}</h3>
                <p className="text-sm text-slate-600">{video.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@diocesisdearmenia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-celestial-600 hover:underline"
            >
              Ver más videos en YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="descargas" className="py-16 lg:py-24 bg-white">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-4">Descargas</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Materiales descargables
            </h2>
            <p className="text-lg text-slate-600">
              Guías, novenas y materiales para imprimir y usar en casa o en comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {downloads.map((item, index) => (
              <Card key={index} variant="outlined" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-healing-100 flex items-center justify-center flex-shrink-0 text-healing-600">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="default" size="sm">{item.format}</Badge>
                    <span className="text-xs text-slate-500">{item.size}</span>
                  </div>
                </div>
                <a href={item.url} download>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-celestial-50 via-white to-healing-50">
        <div className="container-pastoral">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="warning" className="mb-4">Enlaces Externos</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Recursos de la Iglesia
            </h2>
            <p className="text-lg text-slate-600">
              Enlaces a recursos oficiales de la Iglesia Católica sobre pastoral de la salud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {externalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card variant="interactive" className="h-full">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-celestial-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{resource.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-celestial-600">
                    Visitar
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-celestial-600 text-white">
        <div className="container-pastoral text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas acompañamiento espiritual?
          </h2>
          <p className="text-lg text-celestial-100 max-w-2xl mx-auto mb-8">
            Si deseas que un agente pastoral te acompañe en oración o necesitas
            el sacramento de la Unción, contáctanos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-celestial-700 hover:bg-celestial-50">
                Solicitar acompañamiento
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/emergencias">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Emergencias
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
