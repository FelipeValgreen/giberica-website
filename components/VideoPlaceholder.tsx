"use client"
import { useState } from "react"
import { Play, Youtube } from "lucide-react"
import { track } from "@/lib/analytics"

interface VideoPlaceholderProps {
  title: string
  duration?: string
  thumbnail?: string
  youtubeUrl?: string
  onPlay?: () => void
}

export function VideoPlaceholder({ 
  title, 
  duration = "1:30", 
  thumbnail,
  youtubeUrl,
  onPlay 
}: VideoPlaceholderProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handlePlay = () => {
    track("video_play", { title, source: "youtube_placeholder" })
    if (onPlay) {
      onPlay()
    } else if (youtubeUrl) {
      window.open(youtubeUrl, '_blank')
    }
  }

  return (
    <div 
      className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlay}
    >
      {/* Thumbnail o fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E] to-[#B66A2C] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🏗️</div>
          <div className="text-xl font-bold mb-2">{title}</div>
          <div className="text-sm opacity-75">Video promocional</div>
        </div>
      </div>

      {/* Overlay de YouTube */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 transform transition-transform group-hover:scale-110">
          <Play className="h-8 w-8 text-white ml-1" />
        </div>
      </div>

      {/* Duración */}
      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-sm px-2 py-1 rounded">
        {duration}
      </div>

      {/* Logo de YouTube */}
      <div className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded">
        <Youtube className="h-4 w-4" />
      </div>

      {/* Efecto hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-lg font-semibold mb-2">Ver en YouTube</div>
            <div className="text-sm opacity-75">Haz clic para reproducir</div>
          </div>
        </div>
      )}
    </div>
  )
}
