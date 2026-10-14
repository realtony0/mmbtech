import { whatsappLink } from "./data";

type Fbq = (...args: unknown[]) => void;
declare global {
  interface Window {
    fbq?: Fbq;
  }
}

const KEY = "mmb_ref";

/** Send a standard Meta Pixel event (no-op when the pixel isn't configured). */
export function track(event: "Lead" | "Contact" | "ViewContent" | "InitiateCheckout", params?: Record<string, unknown>) {
  try {
    window.fbq?.("track", event, params);
  } catch {}
}

/** Remember which ad brought the visitor (utm_* from the landing URL) for this session. */
export function rememberCampaign() {
  try {
    const q = new URLSearchParams(window.location.search);
    const parts = [q.get("utm_source"), q.get("utm_campaign"), q.get("utm_content")].filter(Boolean);
    if (!parts.length && q.get("fbclid")) parts.push("facebook");
    if (parts.length) sessionStorage.setItem(KEY, parts.join(" / "));
  } catch {}
}

function campaignRef() {
  try {
    return sessionStorage.getItem(KEY) || "";
  } catch {
    return "";
  }
}

/** WhatsApp URL with the campaign reference appended, so you know which ad converted. */
export function whatsappWithRef(text: string) {
  const ref = campaignRef();
  return whatsappLink(ref ? `${text}\n\n(Réf : ${ref})` : text);
}
