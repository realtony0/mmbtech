import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { MetaPixel } from "@/components/MetaPixel";
import { CampaignCapture } from "@/components/WaLink";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mmb-tech.com"),
  title: {
    default: "Création de site web à Dakar dès 135 000 FCFA | MMBTECH",
    template: "%s | MMBTECH",
  },
  description:
    "Site vitrine, boutique en ligne avec paiement mobile ou application : MMBTECH crée votre site à Dakar dès 135 000 FCFA. Devis gratuit sous 24h sur WhatsApp, paiement en plusieurs fois.",
  keywords: [
    "agence digitale Dakar",
    "création site web Sénégal",
    "développement application mobile Dakar",
    "boutique en ligne Sénégal",
    "e-commerce Dakar",
    "agence web Dakar",
    "site internet Sénégal",
    "application mobile Sénégal",
    "MMBTECH",
    "design web Dakar",
  ],
  authors: [{ name: "MMBTECH", url: "https://mmb-tech.com" }],
  creator: "MMBTECH",
  publisher: "MMBTECH",
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: "https://mmb-tech.com" },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Votre site web à Dakar dès 135 000 FCFA — MMBTECH",
    description: "Site vitrine, boutique en ligne, application. Devis gratuit sous 24h sur WhatsApp.",
    type: "website",
    url: "https://mmb-tech.com",
    siteName: "MMBTECH",
    locale: "fr_SN",
      },
  twitter: {
    card: "summary_large_image",
    title: "Votre site web à Dakar dès 135 000 FCFA — MMBTECH",
    description: "Site vitrine, boutique en ligne, application. Devis gratuit sous 24h sur WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Meta Business Manager domain verification (required to configure ad events for mmb-tech.com)
  ...(process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION && {
    other: { "facebook-domain-verification": process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION },
  }),
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mmb-tech.com/#organization",
      name: "MMBTECH",
      url: "https://mmb-tech.com",
      logo: "https://mmb-tech.com/favicon.svg",
      description: "Agence digitale à Dakar spécialisée dans la création de sites web, applications mobiles et boutiques en ligne.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+221774992742",
        contactType: "customer service",
        email: "contact@mmb-tech.com",
        availableLanguage: ["French", "Wolof"],
        areaServed: ["SN", "CI", "ML", "GN", "BF", "CM"],
      },
      sameAs: [
        "https://instagram.com/mmbtech.sn",
        "https://linkedin.com/company/mmbtech",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mmb-tech.com/#localbusiness",
      name: "MMBTECH",
      image: "https://mmb-tech.com/opengraph-image",
      url: "https://mmb-tech.com",
      telephone: "+221774992742",
      email: "contact@mmb-tech.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 14.6928,
        longitude: -17.4467,
      },
      priceRange: "135000 FCFA - 2000000 FCFA",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mmb-tech.com/#website",
      url: "https://mmb-tech.com",
      name: "MMBTECH",
      publisher: { "@id": "https://mmb-tech.com/#organization" },
      inLanguage: "fr",
    },
    {
      "@type": "Service",
      "@id": "https://mmb-tech.com/#service-web",
      name: "Création de Sites Web",
      provider: { "@id": "https://mmb-tech.com/#organization" },
      description: "Sites internet professionnels, modernes et responsives pour entreprises à Dakar et au Sénégal.",
      areaServed: { "@type": "Country", name: "Sénégal" },
      offers: { "@type": "Offer", priceCurrency: "XOF", price: "135000", description: "À partir de 135 000 FCFA" },
    },
    {
      "@type": "Service",
      "@id": "https://mmb-tech.com/#service-app",
      name: "Développement d'Applications Mobiles",
      provider: { "@id": "https://mmb-tech.com/#organization" },
      description: "Applications iPhone et Android publiées sur App Store et Play Store.",
      areaServed: { "@type": "Country", name: "Sénégal" },
      offers: { "@type": "Offer", priceCurrency: "XOF", price: "750000", description: "À partir de 750 000 FCFA" },
    },
    {
      "@type": "Service",
      "@id": "https://mmb-tech.com/#service-ecommerce",
      name: "Boutiques en Ligne & E-commerce",
      provider: { "@id": "https://mmb-tech.com/#organization" },
      description: "Boutiques en ligne avec paiement mobile et carte bancaire, livrées clé en main.",
      areaServed: { "@type": "Country", name: "Sénégal" },
      offers: { "@type": "Offer", priceCurrency: "XOF", price: "180000", description: "À partir de 180 000 FCFA" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS runs */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <CampaignCapture />
        <MetaPixel />
        {/* Google Analytics — set NEXT_PUBLIC_GA_ID to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
