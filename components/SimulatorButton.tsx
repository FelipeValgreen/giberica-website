"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SimulatorModal } from "@/components/SimulatorModal"

interface SimulatorButtonProps {
  className?: string
  children: React.ReactNode
}

export function SimulatorButton({ className, children }: SimulatorButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        variant="outline" 
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <SimulatorModal open={open} onOpenChange={setOpen} />
    </>
  )
}
