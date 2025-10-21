"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [open, setOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "San Patricio", href: "/san-patricio" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-crema backdrop-blur supports-[backdrop-filter]:bg-crema/95">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo SVG - G + casa + líneas arquitectónicas según propuesta exacta */}
          <div className="flex items-center space-x-3">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Líneas arquitectónicas superiores (diagonales desde el techo) */}
              <path d="M8 8L12 4M16 8L20 4M24 8L28 4M32 8L36 4" stroke="#6A6150" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Estructura principal - G + Casa integrada */}
              <path d="M8 40V24H12V20H8V8H24V12H28V8H40V24H36V28H40V40H8Z" fill="#6A6150"/>
              
              {/* Detalles internos de la casa (ventanas) */}
              <rect x="12" y="12" width="8" height="8" fill="#EFE7D7"/>
              <rect x="24" y="12" width="8" height="8" fill="#EFE7D7"/>
              <rect x="16" y="20" width="8" height="8" fill="#EFE7D7"/>
              
              {/* Líneas arquitectónicas verticales (lado derecho) */}
              <path d="M32 8V12M32 16V20" stroke="#6A6150" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <span className="font-display text-2xl font-bold text-carbon">GIBÉRICA</span>
              <p className="text-xs text-olivaTierra -mt-1">Gestión e Inmobiliaria</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-carbon transition-colors hover:text-olivaTierra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex bg-carbon text-crema hover:opacity-90 rounded-md px-5 py-3">
            <Link href="/san-patricio">Reservar</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-carbon transition-colors hover:text-olivaTierra"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="bg-carbon text-crema hover:opacity-90 rounded-md px-5 py-3 mt-4">
                  <Link href="/san-patricio" onClick={() => setOpen(false)}>
                    Reservar
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
