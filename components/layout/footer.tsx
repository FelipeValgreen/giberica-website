import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-carbon text-crema">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Líneas arquitectónicas superiores (diagonales desde el techo) */}
                        <path d="M8 8L12 4M16 8L20 4M24 8L28 4M32 8L36 4" stroke="#EFE7D7" strokeWidth="2" strokeLinecap="round"/>
                        
                        {/* Estructura principal - G + Casa integrada */}
                        <path d="M8 40V24H12V20H8V8H24V12H28V8H40V24H36V28H40V40H8Z" fill="#EFE7D7"/>
                        
                        {/* Detalles internos de la casa (ventanas) */}
                        <rect x="12" y="12" width="8" height="8" fill="#6A6150"/>
                        <rect x="24" y="12" width="8" height="8" fill="#6A6150"/>
                        <rect x="16" y="20" width="8" height="8" fill="#6A6150"/>
                        
                        {/* Líneas arquitectónicas verticales (lado derecho) */}
                        <path d="M32 8V12M32 16V20" stroke="#EFE7D7" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-crema">GIBÉRICA</h3>
                        <p className="text-xs text-crema/80 -mt-1">Gestión e Inmobiliaria</p>
                      </div>
                    </div>
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
    </footer>
  )
}
