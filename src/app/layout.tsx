import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Script from "next/script";

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
  metadataBase: new URL("https://mmb-tech.com"),
  title: {
    default: "MMBTECH — Agence Digitale Dakar | Sites Web, Apps & E-commerce",
    template: "%s | MMBTECH",
  },
  description:
    "Agence digitale à Dakar, Sénégal. Création de sites web, applications mobiles et boutiques en ligne pour les entreprises ambitieuses. Devis gratuit sous 24h.",
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
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    title: "MMBTECH — Agence Digitale Dakar",
    description: "Création de sites web, applications mobiles et boutiques en ligne à Dakar. Devis gratuit sous 24h.",
    type: "website",
    url: "https://mmb-tech.com",
    siteName: "MMBTECH",
    locale: "fr_SN",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "MMBTECH — Agence Digitale Dakar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMBTECH — Agence Digitale Dakar",
    description: "Sites web · Apps mobiles · Boutiques en ligne — Dakar, Sénégal",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
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
      image: "https://mmb-tech.com/og-image.svg",
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
      aggregateRating: undefined,
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
    <html lang="fr" className={`${bricolage.variable} ${spaceMono.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
          <WhatsAppButton />
        </SmoothScroll>

        {/* Google Analytics — replace G-XXXXXXXXXX with your real ID */}
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
