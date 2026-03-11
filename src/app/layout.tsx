import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MMBTECH — Agence Digitale Dakar",
  description:
    "Mmbtech conçoit et développe des expériences digitales exceptionnelles — web, mobile, e-commerce — pour les marques qui veulent dominer leur marché.",
  keywords: ["agence digitale", "Dakar", "Sénégal", "création site web", "application mobile", "boutique en ligne", "e-commerce"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "MMBTECH — Agence Digitale Dakar",
    description: "Sites web · Apps mobiles · Boutiques en ligne — Dakar, Sénégal",
    type: "website",
    url: "https://mmbtech.sn",
    siteName: "MMBTECH",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMBTECH — Agence Digitale Dakar",
    description: "Sites web · Apps mobiles · Boutiques en ligne — Dakar, Sénégal",
  },
  metadataBase: new URL("https://mmbtech.sn"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${spaceMono.variable} ${dmSerif.variable}`}>
      <body>
        <SmoothScroll>
          {children}
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
