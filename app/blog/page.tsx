import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { POSTS } from "@/data/posts"

export const metadata: Metadata = {
  title: "Blog | Gibérica — Gestión e Inmobiliaria",
  description: "Artículos sobre inversión multifamily, desarrollo inmobiliario y tendencias del mercado residencial en Chile.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-crema">
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-carbon mb-6">
                Blog
              </h1>
              <p className="text-lg text-carbon/80">
                Artículos sobre inversión multifamily, desarrollo inmobiliario y tendencias del mercado residencial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {POSTS.map((post) => (
                <Card key={post.slug} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-olivaTierra text-olivaTierra">
                        {post.categoria}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-olivaMedio">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.fecha).toLocaleDateString('es-CL')}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-display font-semibold text-carbon line-clamp-2">
                      {post.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-carbon/80 text-sm mb-4 line-clamp-3">
                      {post.extracto}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-olivaMedio">
                        <Clock className="h-3 w-3" />
                        <span>4 min</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-olivaTierra hover:text-carbon transition-colors"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
