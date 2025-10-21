// Analytics tracking functions
export function track(event: string, properties?: Record<string, any>) {
  // TODO: Implementar tracking real con GA4/GTM
  if (typeof window !== 'undefined') {
    console.log(`Analytics: ${event}`, properties)
    
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', event, properties)
    }
    
    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: event,
        ...properties
      })
    }
  }
}

// Eventos específicos del sitio
export const events = {
  // Navegación
  page_view: (page: string) => track('page_view', { page }),
  
  // Leads
  lead_submit: (source: string, project?: string) => 
    track('lead_submit', { source, project }),
  
  // Simulador
  simulate_open: () => track('simulate_open'),
  simulate_result: (precio: number, pie: number) => 
    track('simulate_result', { precio, pie }),
  
  // Reservas
  reserve_click: (unit_id: string, precio: number) => 
    track('reserve_click', { unit_id, precio }),
  reserve_complete: (unit_id: string) => 
    track('reserve_complete', { unit_id }),
  
  // WhatsApp
  whatsapp_open: () => track('whatsapp_open'),
  whatsapp_message: (message: string) => 
    track('whatsapp_message', { message }),
  
  // Descargas
  file_download: (file: string) => 
    track('file_download', { file }),
  
  // VSL
  vsl_play: () => track('vsl_play'),
  vsl_50: () => track('vsl_50'),
  vsl_complete: () => track('vsl_complete'),
  
  // Agendamiento
  schedule_start: (source: string) => 
    track('schedule_start', { source }),
  schedule_complete: () => track('schedule_complete')
}

// Declaraciones globales para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}