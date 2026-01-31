import { Play } from 'lucide-react'

interface VideoEmbedProps {
  youtubeId: string
  title: string
  aspectRatio?: '16:9' | '4:3' | '1:1'
}

const aspectRatioClasses = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
}

export function VideoEmbed({
  youtubeId,
  title,
  aspectRatio = '16:9',
}: VideoEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`

  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} rounded-xl overflow-hidden bg-slate-900`}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

// Thumbnail version that loads video on click
interface VideoThumbnailProps {
  youtubeId: string
  title: string
  onPlay?: () => void
}

export function VideoThumbnail({
  youtubeId,
  title,
  onPlay,
}: VideoThumbnailProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  return (
    <button
      onClick={onPlay}
      className="relative aspect-video w-full rounded-xl overflow-hidden group"
      aria-label={`Reproducir: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="
          w-16 h-16 md:w-20 md:h-20
          rounded-full
          bg-white/90 group-hover:bg-white
          flex items-center justify-center
          group-hover:scale-110
          transition-all
          shadow-lg
        ">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-celestial-600 ml-1" />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-medium text-sm md:text-base line-clamp-2">
          {title}
        </p>
      </div>
    </button>
  )
}

export default VideoEmbed
