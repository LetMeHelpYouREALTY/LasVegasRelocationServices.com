import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import Navigation from '@/components/Navigation';
import PerformanceMonitor from '@/components/PerformanceMonitor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lasvegasrelocationservices.com'),
  title: {
    default: 'Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway',
    template: '%s | Las Vegas Relocation Services',
  },
  description:
    'Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team. Expert assistance for your move to Las Vegas.',
  keywords: [
    'Las Vegas relocation',
    'Dr. Jan Duffy',
    'Berkshire Hathaway',
    'relocation services',
    'Las Vegas moving',
    'corporate relocation',
    'residential relocation',
    'international relocation',
    'military relocation',
    'Las Vegas real estate',
    'moving to Las Vegas',
    'relocation consultant',
    'Las Vegas moving company',
    'corporate moving services',
    'family relocation Las Vegas',
  ],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Berkshire Hathaway Services Relocation Services Team',
  publisher: 'Las Vegas Relocation Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Self-referencing canonical for the homepage only. Every other route
  // overrides this in its own page/layout metadata — a site-wide canonical
  // here makes Google treat all pages as duplicates of the homepage
  // ("Alternate page with proper canonical tag" in Search Console).
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lasvegasrelocationservices.com',
    siteName: 'Las Vegas Relocation Services',
    title: 'Dr. Jan Duffy - Las Vegas Relocation Services | Berkshire Hathaway',
    description: 'Expert relocation services to Las Vegas from major US cities. Dr. Jan Duffy provides personalized assistance for seamless relocations.',
    images: [
      {
        url: 'https://www.lasvegasrelocationservices.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Las Vegas Relocation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy - Las Vegas Relocation Services | Berkshire Hathaway',
    description: 'Expert relocation services to Las Vegas from major US cities. Dr. Jan Duffy provides personalized assistance for seamless relocations.',
    images: ['https://www.lasvegasrelocationservices.com/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Business Services',
  classification: 'Relocation Services',
  other: {
    'format-detection': 'telephone=no, address=no, email=no',
    'theme-color': '#2563eb',
    'msapplication-TileColor': '#2563eb',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Las Vegas Relocation Services',
              description:
                'Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team.',
              url: 'https://www.lasvegasrelocationservices.com',
              logo: 'https://www.lasvegasrelocationservices.com/logo.png',
              image: 'https://www.lasvegasrelocationservices.com/og-image.jpg',
              telephone: '(702) 707-7273',
              email: 'DrJan@LasVegasRelocationServices.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '100 North Green Valley Parkway, Suite 330',
                addressLocality: 'Henderson',
                addressRegion: 'NV',
                postalCode: '89074',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.0395,
                longitude: -115.0272,
              },
              openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-15:00',
              priceRange: '$$',
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Check',
              areaServed: {
                '@type': 'City',
                name: 'Las Vegas',
                sameAs: 'https://en.wikipedia.org/wiki/Las_Vegas',
              },
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 36.0395,
                  longitude: -115.0272,
                },
                geoRadius: '50000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Relocation Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential Relocation',
                      description:
                        'Complete home relocation services including packing, moving, and settling into your new Las Vegas home.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Corporate Relocation',
                      description:
                        'Comprehensive corporate relocation solutions for businesses and their employees moving to Las Vegas.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'International Relocation',
                      description:
                        'Expert international relocation services for clients moving to Las Vegas from abroad.',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1',
              },
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Jennifer Martinez',
                  },
                  reviewBody:
                    'Dr. Duffy and her team made our corporate relocation to Las Vegas incredibly smooth. Their attention to detail and local market knowledge exceeded our expectations.',
                },
              ],
              employee: [
                {
                  '@type': 'Person',
                  name: 'Dr. Jan Duffy',
                  jobTitle: 'Lead Relocation Specialist',
                  description:
                    'Dr. Duffy brings over 15 years of relocation expertise and deep knowledge of the Las Vegas market.',
                },
              ],
              foundingDate: '2009',
              numberOfEmployees: '15',
              award: [
                'Berkshire Hathaway Quality Standards',
                'BBB Accredited Business',
                '15+ Years of Excellence',
              ],
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Las Vegas Relocation Services',
              description: 'Professional relocation services in Las Vegas',
              url: 'https://www.lasvegasrelocationservices.com',
              telephone: '(702) 707-7273',
              email: 'DrJan@LasVegasRelocationServices.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '100 North Green Valley Parkway, Suite 330',
                addressLocality: 'Henderson',
                addressRegion: 'NV',
                postalCode: '89074',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.0395,
                longitude: -115.0272,
              },
              openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-15:00',
              priceRange: '$$',
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Check',
            }),
          }}
        />
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
        ></script>
        <style>
          {`
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `}
        </style>
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <PerformanceMonitor />
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}
        />
        <MicrosoftClarity
          projectId={process.env.NEXT_PUBLIC_CLARITY_ID || ''}
          enabled={!!process.env.NEXT_PUBLIC_CLARITY_ID}
        />
      </body>
    </html>
  );
}
