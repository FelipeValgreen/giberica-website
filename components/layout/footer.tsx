import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/Logo"

export function Footer() {
  return (
    <footer className="border-t bg-carbon text-crema">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Brand */}
                  <div className="space-y-4">
                    <Logo size="md" showSlogan={true} className="text-crema" />
                    <p className="text-sm text-crema/80">
                      Multi-family bien gestionado, bien diseñado.
                    </p>
                  </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-olivaTierra transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/san-patricio" className="hover:text-olivaTierra transition-colors">
                  San Patricio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-olivaTierra transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-olivaTierra transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="hover:text-olivaTierra transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-olivaTierra transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contacto@giberica.cl
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +56 9 1234 5678
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="hover:text-olivaTierra transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-olivaTierra transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-olivaTierra transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-crema/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-crema/60">
          <p>&copy; 2025 Gibérica. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/politicas" className="hover:text-olivaTierra transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-olivaTierra transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
      
      {/* Línea base con tagline (tipografía oficial) */}
      <div className="bg-olivaTierra text-crema text-xs">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-col md:flex-row gap-2 md:justify-between">
          <div className="brand-subheading">"Multi-family bien gestionado, bien diseñado."</div>
          <div className="opacity-90 brand-subheading">Brand & web por Greenseo LLC</div>
        </div>
      </div>
    </footer>
  )
}
