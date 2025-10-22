import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LegalBanner } from "@/components/legal-banner"
import { Toaster } from "@/components/ui/toaster"
import { WhatsappWidget } from "@/components/WhatsappWidget"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gibérica | Gestión e Inmobiliaria · Proyectos de inversión multifamily",
  description:
    "Multi-family bien gestionado, bien diseñado. Desde el diseño hasta la operación, nos enfocamos en proyectos que rinden y se valorizan.",
  generator: 'v0.app',
  metadataBase: new URL('https://giberica.cl'),
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://giberica.cl',
    siteName: 'Gibérica',
    title: 'Gibérica | Gestión e Inmobiliaria',
    description: 'Multi-family bien gestionado, bien diseñado.',
    images: [
      {
        url: '/og/giberica-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Gibérica - Gestión e Inmobiliaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gibérica | Gestión e Inmobiliaria',
    description: 'Multi-family bien gestionado, bien diseñado.',
    images: ['/og/giberica-home.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            `,
          }}
        />
      </head>
      <body className="theme-olive min-h-screen bg-crema text-carbon font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <LegalBanner />
        <Toaster />
        <WhatsappWidget />
      </body>
    </html>
  )
}
