"use client"

import { useState } from "react"
import { SimulatorModal } from "@/components/SimulatorModal"

export function ClientHomePage() {
  const [simulatorOpen, setSimulatorOpen] = useState(false)

  return (
    <SimulatorModal open={simulatorOpen} onOpenChange={setSimulatorOpen} />
  )
}

