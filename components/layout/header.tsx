"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/Logo"

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
        <Link href="/" className="flex items-center">
          <Logo size="md" showSlogan={true} />
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
