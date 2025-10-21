"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "@/components/icons"

export function LegalBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2B2B2B] text-[#F4EFE8] p-4 shadow-lg">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{" "}
          <a href="/politicas" className="underline hover:text-[#B66A2C]">
            política de privacidad
          </a>
          .
        </p>
        <div className="flex items-center gap-2">
          <Button onClick={accept} size="sm" className="bg-[#B66A2C] hover:bg-[#B66A2C]/90">
            Aceptar
          </Button>
          <Button onClick={accept} variant="ghost" size="icon" aria-label="Cerrar">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
