import { ImageResponse } from "next/og";
export const dynamic = "force-static";

export const alt = "MMBTECH — Votre site web à Dakar dès 135 000 FCFA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Twitter() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "#0047FF", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>
          MMB<span style={{ color: "#FFD43B" }}>TECH</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Votre site web à Dakar</div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 18, fontSize: 40 }}>
            dès <span style={{ fontSize: 92, fontWeight: 800, color: "#FFD43B", margin: "0 16px" }}>135 000</span> FCFA
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 28, fontWeight: 700 }}>
          <span style={{ background: "#fff", color: "#0B1533", padding: "12px 24px", borderRadius: 999 }}>Devis gratuit sous 24h</span>
          <span style={{ background: "#1FAF55", padding: "12px 24px", borderRadius: 999 }}>WhatsApp</span>
        </div>
      </div>
    ),
    size,
  );
}
