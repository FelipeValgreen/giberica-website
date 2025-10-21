import { POSTS } from '@/data/posts'

export async function GET() {
  const baseUrl = 'https://giberica-san-patricio.vercel.app'
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Gibérica — Gestión e Inmobiliaria</title>
    <description>Artículos sobre inversión multifamily, desarrollo inmobiliario y tendencias del mercado residencial en Chile.</description>
    <link>${baseUrl}/blog</link>
    <language>es-CL</language>
    <managingEditor>contacto@giberica.cl (Equipo Gibérica)</managingEditor>
    <webMaster>contacto@giberica.cl (Equipo Gibérica)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    ${POSTS.map(post => `
    <item>
      <title><![CDATA[${post.titulo}]]></title>
      <description><![CDATA[${post.extracto}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.fecha).toUTCString()}</pubDate>
      <category>${post.categoria}</category>
      <author>contacto@giberica.cl (Equipo Gibérica)</author>
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
