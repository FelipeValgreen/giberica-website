// /lib/ga.ts
export const gaEvent = (event: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', event, params);
    }
    
    // Google Tag Manager
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: event,
        ...params
      });
    }
  }
};

// Eventos específicos del sitio
export const trackLeadSubmit = (source: string, project?: string) => {
  gaEvent('lead_submit', {
    event_category: 'Conversion',
    event_label: source,
    project: project || 'san_patricio'
  });
};

export const trackSimulateOpen = () => {
  gaEvent('simulate_open', {
    event_category: 'Engagement',
    event_label: 'Simulator'
  });
};

export const trackSimulateResult = (precioUF: number, piePct: number) => {
  gaEvent('simulate_result', {
    event_category: 'Engagement',
    event_label: 'Simulator',
    precio_uf: precioUF,
    pie_porcentaje: piePct
  });
};

export const trackReserveClick = (unidad?: string) => {
  gaEvent('reserve_click', {
    event_category: 'Conversion',
    event_label: 'Reserve',
    unidad: unidad
  });
};

export const trackWhatsappOpen = () => {
  gaEvent('whatsapp_open', {
    event_category: 'Contact',
    event_label: 'WhatsApp Widget'
  });
};

export const trackFileDownload = (filename: string, fileType: string) => {
  gaEvent('file_download', {
    event_category: 'Downloads',
    event_label: filename,
    file_type: fileType
  });
};

export const trackBlogView = (slug: string) => {
  gaEvent('blog_view', {
    event_category: 'Content',
    event_label: slug
  });
};

export const trackBlogRead = (slug: string, percentage: number) => {
  gaEvent('blog_read', {
    event_category: 'Content',
    event_label: slug,
    read_percentage: percentage
  });
};

export const trackBlogCTAClick = (slug: string) => {
  gaEvent('blog_cta_sanpatricio_click', {
    event_category: 'Content',
    event_label: slug
  });
};
