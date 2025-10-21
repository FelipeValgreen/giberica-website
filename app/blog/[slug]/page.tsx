import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Mail, Share2, Heart } from "lucide-react"
import { POSTS } from "@/data/posts"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: "Post no encontrado | Gibérica",
    }
  }

  return {
    title: `${post.titulo} | Gibérica Blog`,
    description: post.extracto,
    openGraph: {
      title: post.titulo,
      description: post.extracto,
      type: "article",
      publishedTime: post.fecha,
      authors: ["Equipo Gibérica"],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.extracto,
    author: {
      "@type": "Person",
      name: "Equipo Gibérica",
    },
    publisher: {
      "@type": "Organization",
      name: "Gibérica",
      url: "https://giberica.com",
    },
    datePublished: post.fecha,
    dateModified: post.fecha,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://giberica.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-crema">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-carbon hover:text-olivaTierra transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver al blog
                </Link>
              </div>

              {/* Banner Image */}
              <div className="mb-8">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Article Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-olivaTierra/10 text-olivaTierra text-sm font-medium rounded-full">
                    {post.categoria}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-olivaMedio">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.fecha).toLocaleDateString('es-CL')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>4 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Equipo Gibérica</span>
                    </div>
                  </div>
                </div>
                
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-carbon mb-6">
                  {post.titulo}
                </h1>
                
                <p className="text-lg text-carbon/80 leading-relaxed">
                  {post.extracto}
                </p>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                  <div 
                    className="space-y-6 text-carbon leading-relaxed prose-headings:font-display prose-headings:text-carbon prose-h2:text-2xl prose-h3:text-xl"
                    dangerouslySetInnerHTML={{ __html: post.contenido }}
                  />
                </div>
              </article>

              {/* Social Actions */}
              <div className="mt-12 mb-16">
                <div className="flex items-center justify-between p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Me gusta
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                  <div className="text-sm text-[#8D8D8D]">
                    ¿Te gustó este artículo?
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-16">
                <Card className="bg-gradient-to-r from-[#0E3B2E] to-[#1E4D3C] text-white">
                  <CardContent className="p-8 text-center">
                    <Mail className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Mantente informado</h3>
                    <p className="text-white/90 mb-6">
                      Recibe nuestros artículos más recientes sobre desarrollo inmobiliario y diseño funcional.
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="flex-1 px-4 py-2 rounded-lg text-[#0E3B2E]"
                      />
                      <Button className="bg-white text-[#0E3B2E] hover:bg-white/90">
                        Suscribirse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <div className="mb-16">
                <Card className="bg-crema border-2 border-olivaTierra">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-display font-bold text-carbon mb-4">
                      ¿Interesado en San Patricio?
                    </h3>
                    <p className="text-lg text-carbon/80 mb-6">
                      Conoce nuestro proyecto multifamily sin gastos comunes y descubre cómo invertir inteligentemente.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button asChild className="bg-carbon text-crema hover:opacity-90">
                        <Link href="/san-patricio?utm_source=blog&utm_medium=internal&utm_campaign=content">
                          Ver San Patricio
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-olivaTierra text-carbon hover:bg-crema/60">
                        <Link href="/san-patricio#simulador?utm_source=blog&utm_medium=internal&utm_campaign=content">
                          Simular
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Related Posts */}
              <div className="mt-16">
                <h2 className="font-display text-2xl font-bold text-carbon mb-8">
                  Artículos relacionados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {POSTS
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <h3 className="font-display font-semibold text-carbon mb-2 line-clamp-2">
                          {relatedPost.titulo}
                        </h3>
                        <p className="text-sm text-carbon/80 line-clamp-2">
                          {relatedPost.extracto}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
