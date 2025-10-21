"use client"
import { track } from "@/lib/analytics"
import { VideoPlaceholder } from "@/components/VideoPlaceholder"

export default function VSLPlayer({
  src = "/media/vsl-sanpatricio.mp4",
  poster = "/media/vsl-poster.jpg",
  captions = "/media/vsl-subtitulos.vtt",
}: { 
  src?: string
  poster?: string
  captions?: string 
}) {
  const handlePlay = () => {
    track("vsl_play", {})
    // Simular eventos de progreso
    setTimeout(() => track("vsl_50", {}), 45000) // 45 segundos
    setTimeout(() => track("vsl_complete", {}), 85000) // 85 segundos
  }

  return (
    <div className="relative">
      <VideoPlaceholder
        title="San Patricio - Video Promocional"
        duration="1:30"
        youtubeUrl="https://youtube.com/watch?v=dQw4w9WgXcQ"
        onPlay={handlePlay}
      />

      {/* CTA sticky en mobile */}
      <div className="md:hidden sticky bottom-4 mt-3 flex gap-2 justify-center">
        <a 
          href="#reservar" 
          onClick={() => track("reserve_start", { source: "vsl_sticky" })}
          className="px-4 py-2 rounded-full bg-[#0E3B2E] text-white text-sm font-semibold hover:bg-[#0E3B2E]/90 transition-colors"
        >
          Reservar $500.000
        </a>
        <a 
          href="#agenda" 
          onClick={() => track("schedule_start", { source: "vsl_sticky" })}
          className="px-4 py-2 rounded-full bg-white border border-[#0E3B2E] text-[#0E3B2E] text-sm font-semibold hover:bg-[#0E3B2E] hover:text-white transition-colors"
        >
          Agendar tour
        </a>
      </div>
    </div>
  )
}
