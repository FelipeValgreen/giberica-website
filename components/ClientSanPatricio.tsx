"use client"

import { useState } from "react"
import { SimulatorModal } from "@/components/SimulatorModal"
import { WhatsappWidget } from "@/components/WhatsappWidget"

export function ClientSanPatricio() {
  const [simulatorOpen, setSimulatorOpen] = useState(false)

  return (
    <>
      <SimulatorModal open={simulatorOpen} onOpenChange={setSimulatorOpen} />
      <WhatsappWidget />
    </>
  )
}

