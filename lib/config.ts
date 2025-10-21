// Configuración de entorno para Gibérica
export const config = {
  // MODO CRM
  CRM_MODE: process.env.NEXT_PUBLIC_CRM_MODE || 'local',
  
  // WhatsApp
  WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+569XXXXXXXX',
  
  // SMTP (opcional)
  SMTP: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  
  // Google Sheet Webhook (opcional)
  GSHEET_WEBHOOK_URL: process.env.GSHEET_WEBHOOK_URL,
  
  // HubSpot (cuando esté disponible)
  HUBSPOT: {
    portalId: process.env.HUBSPOT_PORTAL_ID,
    formId: process.env.HUBSPOT_FORM_ID,
  },
  
  // Kommo CRM (cuando esté disponible)
  KOMMO: {
    apiKey: process.env.KOMMO_API_KEY,
    pipelineId: process.env.KOMMO_PIPELINE_ID,
    statusNew: process.env.KOMMO_STATUS_NEW,
  },
  
  // Analytics
  GA4_ID: process.env.NEXT_PUBLIC_GA4_ID,
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
}

// Placeholders para .env.local
export const ENV_PLACEHOLDERS = `
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
`