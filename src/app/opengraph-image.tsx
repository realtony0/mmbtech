import { ImageResponse } from "next/og";
export const dynamic = "force-static";

export const alt = "MMBTECH — Studio digital à Dakar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#E4F7F0",
          background: "radial-gradient(120% 120% at 70% 0%, #9FD8C5 0%, #2C7A69 35%, #0A3633 70%, #03181A 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4 }}>
          <span>STUDIO DIGITAL</span>
          <span>DAKAR · SÉNÉGAL</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 210, fontWeight: 800, letterSpacing: -10, lineHeight: 0.9, color: "#fff" }}>mmbtech</div>
          <div style={{ fontSize: 34, marginTop: 24, opacity: 0.85 }}>Sites web · E-commerce · Applications · Design</div>
        </div>
      </div>
    ),
    size,
  );
}
