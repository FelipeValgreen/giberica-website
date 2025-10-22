# QA Checklist - Gibérica Website

## ✅ **MARCA & ARTE**

### Logo y Slogan
- [x] Logo SVG exacto del cliente implementado
- [x] Slogan "Gestión e Inmobiliaria" en header y footer
- [x] Paleta Olive Garden aplicada consistentemente
- [x] Tipografías Manrope (títulos) e Inter (cuerpo)
- [x] Iconografía monolínea en olivaTierra

### Colores y Componentes
- [x] CTAs primarios: carbon/crema
- [x] CTAs secundarios: olivaTierra/carbon
- [x] Header: bg-crema, links hover olivaTierra
- [x] Tablas: header bg-crema, hover arena/20
- [x] Badges de estado con colores correctos

## 🏗️ **ARQUITECTURA & UX**

### Navegación
- [x] Menú máximo 5 items: Inicio, San Patricio, Nosotros, Contacto, (Blog)
- [x] Footer con logo, slogan, dirección, WhatsApp, email, RRSS
- [x] Enlace "Aviso de privacidad" en footer
- [x] Navegación responsive con Sheet móvil

### Home
- [x] Hero: "Multi-family bien gestionado, bien diseñado"
- [x] Sub: "GIBÉRICA · Gestión e Inmobiliaria. Desde el diseño..."
- [x] 3 Pilares: Precisión, Diseño, Gestión
- [x] Proyecto destacado: San Patricio con bullets y badges
- [x] Confianza: logos proyectos
- [x] Testimonios: 3 testimonios reales
- [x] CTA final: "Agendemos 15 minutos"

### San Patricio Landing
- [x] Hero: título y subtítulo exactos
- [x] Galería con lightbox
- [x] Ficha técnica con Accordion (6 secciones)
- [x] Tabla de unidades con filtros
- [x] Simulador con fórmula exacta
- [x] Mapa con ubicación
- [x] Descargas con tracking GA4
- [x] FAQ con 5 preguntas
- [x] Sticky bar móvil

## 📝 **COPY & CONTENIDO**

### Consistencia
- [x] Slogan "Gestión e Inmobiliaria" en todo el sitio
- [x] Microcopy simple y directo
- [x] CTAs en cada sección
- [x] Énfasis en "rol independiente" y "sin gastos comunes"

### Blog
- [x] 6 posts con interlinking automático
- [x] CTA "¿Interesado en San Patricio?" en todos los posts
- [x] UTM parameters en links
- [x] Estilo consistente con paleta

## 🔍 **SEO**

### On-page
- [x] Títulos específicos por página
- [x] Meta descriptions ≤160 caracteres
- [x] H1 único por página
- [x] Alt text en imágenes
- [x] Keywords relevantes

### Técnico
- [x] Schema.org: Organization (Home), Residence (San Patricio), BlogPosting (Blog)
- [x] Sitemap.ts con todas las páginas
- [x] Robots.txt configurado
- [x] RSS feed completo
- [x] URLs optimizadas

## ⚡ **PERFORMANCE & ACCESIBILIDAD**

### Performance
- [x] next/image en 21 archivos
- [x] Fuentes optimizadas con display: 'swap'
- [x] Lazy loading implementado
- [x] Bundle size optimizado
- [x] Lighthouse target: móvil ≥ 90

### Accesibilidad
- [x] aria-label en 31 elementos
- [x] lang='es' configurado
- [x] Contraste AA con paleta Olive Garden
- [x] :focus-visible implementado
- [x] Hit areas ≥ 44x44px
- [x] Labels en formularios
- [x] Navegación por teclado

## 📊 **ANALYTICS & LEADS**

### Eventos GA4
- [x] lead_submit
- [x] simulate_open, simulate_result
- [x] reserve_click
- [x] whatsapp_open
- [x] file_download
- [x] blog_view, blog_read, blog_cta_sanpatricio_click

### Leads (Sin CRM)
- [x] API /api/leads guarda en /data/leads.json
- [x] Webhook opcional a Google Sheet
- [x] SMTP opcional para notificaciones
- [x] Adaptadores futuros para HubSpot/Kommo
- [x] WhatsApp IA integrado con API

## 🤖 **WHATSAPP IA**

### Funcionalidad
- [x] Botón flotante con border olivaTierra
- [x] Drawer in-page (no redirige)
- [x] María como asesora virtual
- [x] Quick actions: Ver unidades, Simular, Reservar, Agendar, Handoff
- [x] Captura de datos → POST /api/lead
- [x] Eventos GA4: whatsapp_open, whatsapp_simulate_result, whatsapp_reserve_submit

## 🧪 **QA FLUJOS PRINCIPALES**

### Flujo de Conversión
- [x] Home → San Patricio → Reservar → Formulario → Lead
- [x] Blog → CTA San Patricio → Landing → Conversión
- [x] WhatsApp IA → Captura datos → Lead
- [x] Simulador → Resultado → Lead

### Flujo de Navegación
- [x] Header → Todas las páginas
- [x] Footer → Enlaces funcionan
- [x] Mobile → Sheet navigation
- [x] Sticky bar → WhatsApp, Llamar, Reservar

### Flujo de Contenido
- [x] Blog listado → Detalle → CTA San Patricio
- [x] San Patricio → Tabla → Filtros → Reservar
- [x] Descargas → Tracking GA4
- [x] FAQ → Respuestas claras

## 🚀 **DEPLOYMENT**

### Vercel
- [x] Build exitoso
- [x] Variables de entorno configuradas
- [x] Dominio personalizado (opcional)
- [x] SSL automático

### GitHub
- [x] Repositorio público
- [x] README completo
- [x] Commits descriptivos
- [x] Estructura clara

## 📋 **ENTREGA FINAL**

### Criterios de Aceptación
- [x] Paleta y tipografías coherentes en todo el sitio
- [x] Logo SVG exacto con "Gestión e Inmobiliaria"
- [x] Home vendedora con pilares y proyecto destacado
- [x] San Patricio con tabla, simulador, descargas, sticky
- [x] Blog operativo con SEO e interlinking
- [x] WhatsApp IA in-page con leads registrados
- [x] SEO on-page/técnico completo
- [x] Lighthouse móvil ≥ 90, accesibilidad AA
- [x] README actualizado

### Estado: ✅ **COMPLETADO**
**Fecha:** $(date)
**Versión:** 1.0.0
**Deploy:** https://giberica-san-patricio.vercel.app
**GitHub:** https://github.com/FelipeValgreen/giberica-website
