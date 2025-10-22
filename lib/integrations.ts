// /lib/integrations.ts
export type LeadPayload = {
  name: string; 
  email: string; 
  phone?: string;
  source: "web" | "whatsapp"; 
  project?: string; 
  purpose?: string;
  unidad?: string;
  precio?: number;
  m2?: number;
};

// Placeholder for local lead saving and notification
async function saveLocalAndNotify(payload: LeadPayload) {
  console.log("Saving lead locally and notifying:", payload);
  // In a real scenario, this would write to a file or a simple DB
  // and send an email notification.
  return { ok: true, message: "Lead saved locally" };
}

// Placeholder for HubSpot integration
async function saveToHubSpot(payload: LeadPayload) {
  console.log("Saving lead to HubSpot:", payload);
  // Implement HubSpot API call here
  return { ok: true, message: "Lead sent to HubSpot" };
}

// Placeholder for Kommo integration
async function saveToKommo(payload: LeadPayload) {
  console.log("Saving lead to Kommo:", payload);
  // Implement Kommo API call here
  return { ok: true, message: "Lead sent to Kommo" };
}

export async function pushLead(payload: LeadPayload) {
  const MODE = process.env.NEXT_PUBLIC_CRM_MODE || "local"; // "local" | "hubspot" | "kommo" | "both"
  if (MODE === "local") return saveLocalAndNotify(payload);
  if (MODE === "hubspot") return saveToHubSpot(payload);
  if (MODE === "kommo") return saveToKommo(payload);
  if (MODE === "both") { 
    await saveToHubSpot(payload); 
    return saveToKommo(payload); 
  }
  return { ok: false, message: "Invalid CRM mode" };
}
