"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { track } from "@/lib/analytics"

interface VSLPlayerProps {
  src: string
  poster: string
  subtitles?: string
  title: string
}

export function VSLPlayer({ src, poster, subtitles, title }: VSLPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [hasTracked50, setHasTracked50] = useState(false)
  const [hasTrackedComplete, setHasTrackedComplete] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        if (progress === 0) {
          track("vsl_play", { video: title })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100
      setProgress(percent)

      if (percent >= 50 && !hasTracked50) {
        track("vsl_50", { video: title })
        setHasTracked50(true)
      }

      if (percent >= 95 && !hasTrackedComplete) {
        track("vsl_complete", { video: title })
        setHasTrackedComplete(true)
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [hasTracked50, hasTrackedComplete, title])

  return (
    <div className="relative w-full aspect-video bg-grafito rounded-lg overflow-hidden group">
      <video ref={videoRef} className="w-full h-full" poster={poster} aria-label={title} crossOrigin="anonymous">
        <source src={src} type="video/mp4" />
        {subtitles && <track kind="subtitles" src={subtitles} srcLang="es" label="Español" default />}
        Tu navegador no soporta video HTML5.
      </video>

      {/* Controls overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-grafito/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-cobre transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlay}
                className="text-white hover:bg-white/20"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMute}
                className="text-white hover:bg-white/20"
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20"
              aria-label="Pantalla completa"
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      {isPlaying && (
        <div className="md:hidden absolute bottom-4 left-4 right-4">
          <Button
            className="w-full bg-cobre hover:bg-cobre/90 text-white"
            onClick={() => {
              track("reserve_start", { source: "vsl_sticky_cta" })
              window.location.href = "#reservar"
            }}
          >
            Reservar $500.000
          </Button>
        </div>
      )}
    </div>
  )
}
