import { NextResponse } from "next/server"
import { UNIDADES } from "@/data/unidades"

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(UNIDADES)
}
