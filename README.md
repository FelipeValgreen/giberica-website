# Gibérica — Gestión e Inmobiliaria

Sitio web profesional para Gibérica, empresa de gestión e inmobiliaria especializada en proyectos multifamily sin gastos comunes.

## 🚀 Stack Técnico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Fuentes**: Inter (cuerpo) + Manrope (títulos)
- **Deploy**: Vercel

## 🎨 Identidad Visual

### Paleta Olive Garden
- `crema: #EFE7D7` - Fondos claros
- `arena: #D3C4A7` - Cards secundarios  
- `salvia: #BCC6A5` - Detalles suaves
- `olivaMedio: #7F8872` - Dividers/hover
- `olivaTierra: #6A6150` - Líneas monolínea, acentos
- `carbon: #2D2E26` - Texto principal, CTAs

### Logo
- SVG con G + casa + líneas arquitectónicas
- Slogan: "Gestión e Inmobiliaria"
- Colores: Oliva Tierra (#6A6150) con acentos Crema (#EFE7D7)

## 📁 Estructura del Proyecto

```
/app
  /page.tsx              -> Home
  /san-patricio/page.tsx -> Landing San Patricio
  /nosotros/page.tsx     -> Nosotros
  /contacto/page.tsx     -> Contacto
  /blog/page.tsx         -> Listado blog
  /blog/[slug]/page.tsx  -> Detalle post
  /api/leads/route.ts    -> API captura leads
  /api/chat/route.ts     -> API chat IA
  /api/unidades/route.ts -> API unidades
  /sitemap.ts            -> Sitemap XML
  /robots.txt            -> Robots.txt
  /feed.xml/route.ts     -> RSS Feed

/components
  /layout/header.tsx     -> Header con navegación
  /layout/footer.tsx    -> Footer con datos empresa
  /WhatsappWidget.tsx   -> Chat IA in-page
  /SimulatorModal.tsx   -> Modal simulador
  /UnitsTable.tsx       -> Tabla unidades
  /ui/                  -> Componentes shadcn/ui

/data
  /content.json         -> Contenido Home
  /posts.tsx            -> Posts del blog
  /unidades.json        -> Datos unidades
  /leads.json           -> Leads capturados (local)

/lib
  /config.ts           -> Configuración ENV
  /analytics.ts         -> Eventos GA4
  /utils.ts             -> Utilidades
```

## 🔧 Configuración

### Variables de Entorno

Crea `.env.local` con:

```bash
# MODO CRM (local | hubspot | kommo | both)
NEXT_PUBLIC_CRM_MODE=local

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=+569XXXXXXXX

# SMTP (opcional)
SMTP_HOST=smtp.tu-dominio.com
SMTP_PORT=587
SMTP_USER=no-reply@tu-dominio.com
SMTP_PASS=********

# Google Sheet Webhook (opcional)
GSHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec

# HubSpot (cuando esté disponible)
HUBSPOT_PORTAL_ID=XXXXXXX
HUBSPOT_FORM_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

# Kommo CRM (cuando esté disponible)
KOMMO_API_KEY=xxxx
KOMMO_PIPELINE_ID=xxx
KOMMO_STATUS_NEW=xxx

# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🚀 Scripts

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Start producción
npm start

# Lint
npm run lint
```

## 📊 Flujos de Negocio

### 1. Captura de Leads
- **Formularios**: Home, San Patricio, Contacto
- **WhatsApp IA**: Chat in-page con guión conversacional
- **API**: `/api/leads` guarda en `/data/leads.json`
- **Notificaciones**: Email SMTP o Google Sheet webhook

### 2. Simulador
- **Fórmula**: `dividendoUF = creditoUF * i / (1 - (1 + i)^(-n))`
- **Inputs**: Precio UF, Pie %, Plazo años, Tasa %
- **Outputs**: Pie UF, Crédito UF, Dividendo UF
- **Nota**: "Simulación referencial; sujeta a evaluación bancaria"

### 3. WhatsApp IA
- **Botón**: Flotante abajo-derecha con borde olivaTierra
- **Drawer**: Chat in-page (no redirige)
- **Guión**: María | Asesora Gibérica
- **Flujo**: Ver unidades → Simular → Reservar → Handoff humano

## 📝 Blog

### Estructura
- **Listado**: `/blog` con grid 3x (desktop) / 1x (móvil)
- **Detalle**: `/blog/[slug]` con CTA a San Patricio
- **RSS**: `/feed.xml` generado automáticamente
- **SEO**: Schema.org BlogPosting, metadatos completos

### Posts Existentes
- "Sin gastos comunes en la práctica"
- "Rol independiente: salida por unidad"  
- "Cómo leer tu simulación"
- "Ubicación eficiente: FACh y Gran Avenida"
- "Proceso de reserva y promesa"
- "Estándares de entrega: checklist"

## 🔍 SEO

### On-page
- **Titles**: Optimizados por página
- **Meta descriptions**: ≤160 caracteres
- **H1 único**: Por página
- **Schema.org**: Organization, Place, Offer, BlogPosting
- **Imágenes**: WebP optimizadas, alt text útil

### Técnico
- **Sitemap**: `/sitemap.xml` con todas las rutas
- **Robots**: `/robots.txt` configurado
- **RSS**: `/feed.xml` para suscriptores
- **Core Web Vitals**: CLS <0.1, LCP <2.5s, INP <200ms

## 📱 Responsive

- **Mobile First**: Diseño optimizado para móvil
- **Breakpoints**: sm, md, lg, xl
- **Sticky Mobile**: Barra inferior con WhatsApp, Llamar, Reservar
- **Touch Targets**: ≥44x44px para accesibilidad

## 🎯 Analytics

### Eventos GA4
- `lead_submit` - Formulario enviado
- `simulate_open` - Simulador abierto
- `simulate_result` - Simulación completada
- `reserve_click` - Botón reservar clickeado
- `whatsapp_open` - Chat abierto
- `file_download` - Archivo descargado
- `blog_view` - Post leído
- `blog_cta_sanpatricio_click` - CTA desde blog

## 🔄 Migración CRM

### Modo Local (Actual)
- Leads se guardan en `/data/leads.json`
- Notificaciones vía SMTP o Google Sheet
- Eventos GA4 funcionando

### Modo HubSpot/Kommo
1. Cambiar `NEXT_PUBLIC_CRM_MODE` a `"hubspot"`, `"kommo"` o `"both"`
2. Agregar credenciales correspondientes
3. El adaptador `pushLead()` manejará automáticamente la integración

## 🚀 Deploy

### Vercel
```bash
# Deploy automático desde main
git push origin main

# Deploy manual
npx vercel --prod
```

### URLs
- **Producción**: https://giberica-san-patricio.vercel.app
- **Sitemap**: https://giberica-san-patricio.vercel.app/sitemap.xml
- **RSS**: https://giberica-san-patricio.vercel.app/feed.xml

## 🔍 Lighthouse CI

### Configuración
- **Workflow**: `.github/workflows/ci-lighthouse.yml`
- **Config**: `lighthouserc.json`
- **Trigger**: Pull Requests y pushes a `main`
- **Umbral**: ≥90 en Performance, SEO, Best Practices, Accessibility

### Secrets Requeridos
```bash
VERCEL_TOKEN=vercel_xxxxx
VERCEL_ORG_ID=team_xxxxx  
VERCEL_PROJECT_ID=prj_xxxxx
```

### Resultados
- **Artifacts**: Se suben automáticamente a GitHub
- **Storage**: Temporal público para revisión
- **Runs**: 3 ejecuciones por commit para estabilidad

## 📋 Checklist QA

### Marca/Arte
- [x] Logo SVG exacto implementado
- [x] Paleta Olive Garden aplicada
- [x] Tipografías Inter + Manrope
- [x] CTAs con colores correctos

### UX/UI  
- [x] Navegación clara (máx 5 items)
- [x] Header sticky con fondo crema
- [x] WhatsApp Drawer in-page
- [x] Responsive mobile-first

### Copy
- [x] Tono inmobiliario profesional
- [x] Español Chile
- [x] Sin referencias a "hospitalidad"
- [x] CTAs claros y persuasivos

### SEO
- [x] Titles y metas optimizados
- [x] Schema.org implementado
- [x] Sitemap con todas las rutas
- [x] RSS feed funcional

### Performance
- [x] Lighthouse ≥90 móvil
- [x] Imágenes WebP optimizadas
- [x] Lazy loading implementado
- [x] Bundle size optimizado

### Accesibilidad
- [x] Contraste AA
- [x] Focus states visibles
- [x] Labels en formularios
- [x] Touch targets ≥44x44px

## 📞 Soporte

- **Email**: contacto@giberica.cl
- **Teléfono**: +56 9 1234 5678
- **WhatsApp**: +56 9 1234 5678

---

**Gibérica — Gestión e Inmobiliaria**  
*Multi-family bien gestionado, bien diseñado.*