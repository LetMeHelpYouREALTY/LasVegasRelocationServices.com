import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CalendlyScript from "@/components/CalendlyScript";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import Navigation from "@/components/Navigation";
import RealScoutScript from "@/components/RealScoutScript";
import CalendlySitewide from "@/components/sections/CalendlySitewide";
import {
  businessSchema,
  personSchema,
  webSiteSchema,
  SITE_URL,
} from "@/lib/business";
import { getGoogleSiteVerification } from "@/lib/google-verification";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const googleVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway",
    template: "%s | Las Vegas Relocation Services",
  },
  description:
    "Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team. Expert assistance for your move to Las Vegas.",
  keywords: [
    "Las Vegas relocation",
    "Dr. Jan Duffy",
    "Berkshire Hathaway",
    "relocation services",
    "Las Vegas moving",
    "corporate relocation",
    "residential relocation",
    "international relocation",
    "military relocation",
    "Las Vegas real estate",
    "moving to Las Vegas",
    "relocation consultant",
    "Las Vegas moving company",
    "corporate moving services",
    "Henderson NV relocation",
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Berkshire Hathaway Services Relocation Services Team",
  publisher: "Las Vegas Relocation Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Self-referencing canonical for the homepage only. Every other route
  // overrides this in its own page/layout metadata — a site-wide canonical
  // here makes Google treat all pages as duplicates of the homepage
  // ("Alternate page with proper canonical tag" in Search Console).
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    // Do NOT hardcode og:url to the homepage — Next derives per-route URLs
    // from metadataBase. A fixed homepage og:url on every page confuses GSC.
    siteName: "Las Vegas Relocation Services",
    title: "Dr. Jan Duffy - Las Vegas Relocation Services | Berkshire Hathaway",
    description:
      "Expert relocation services to Las Vegas from major US cities. Dr. Jan Duffy provides personalized assistance for seamless relocations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Jan Duffy - Las Vegas Relocation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jan Duffy - Las Vegas Relocation Services | Berkshire Hathaway",
    description:
      "Expert relocation services to Las Vegas from major US cities. Dr. Jan Duffy provides personalized assistance for seamless relocations.",
    images: ["/og-image.jpg"],
  },
  // Only emit when NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is a real token.
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  category: "Business Services",
  classification: "Relocation Services",
  other: {
    "format-detection": "telephone=no, address=no, email=no",
    "theme-color": "#2563eb",
    "msapplication-TileColor": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* RealScout origins — script itself loads lazyOnload via RealScoutScript */}
        <link
          rel="preconnect"
          href="https://em.realscout.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.realscout.com" />

        {/* Calendly widget assets — badge + inline + popup */}
        <link
          rel="preconnect"
          href="https://assets.calendly.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />

        {/*
          Site-wide entity graph: RealEstateAgent (business), Person (Dr. Jan
          Duffy), and WebSite, cross-linked via stable @id anchors. Replaces
          the previous duplicated RealEstateAgent + LocalBusiness blocks
          (RealEstateAgent is already a LocalBusiness subtype).
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  ...businessSchema(),
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Relocation Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Residential Relocation",
                          description:
                            "Complete home relocation services including packing, moving, and settling into your new Las Vegas home.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Corporate Relocation",
                          description:
                            "Comprehensive corporate relocation solutions for businesses and their employees moving to Las Vegas.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "International Relocation",
                          description:
                            "Expert international relocation services for clients moving to Las Vegas from abroad.",
                        },
                      },
                    ],
                  },
                },
                personSchema(),
                webSiteSchema(),
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-800 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <CalendlySitewide />
        <Footer />
        <CalendlyScript />
        <RealScoutScript />
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
        <MicrosoftClarity
          projectId={process.env.NEXT_PUBLIC_CLARITY_ID || ""}
          enabled={!!process.env.NEXT_PUBLIC_CLARITY_ID}
        />
      </body>
    </html>
  );
}
