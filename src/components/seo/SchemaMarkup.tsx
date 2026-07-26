'use client';

import Script from 'next/script';
import {
  ADDRESS,
  BROKERAGE,
  BUSINESS_NAME,
  EMAIL,
  GEO_COORDINATES,
  LICENSE_LABEL,
  PHONE_TEL,
  SITE_URL,
} from '@/lib/business';

type SchemaType =
  | 'localBusiness'
  | 'realEstateAgent'
  | 'service'
  | 'place'
  | 'howTo'
  | 'article'
  | 'faqPage'
  | 'realEstate'
  | 'financialProduct';

interface SchemaMarkupProps {
  type: SchemaType;
  // Legacy page-specific overrides; prefer PageHero / src/lib/schema.ts for new markup
  data: Record<string, unknown>;
}

/**
 * Legacy per-block JSON-LD helper.
 * Prefer sitewideSchemaGraph() + PageSchema for entity/page markup.
 *
 * FAQPage and HowTo are no-ops: Google removed those rich results
 * (HowTo 2023; FAQ May–June 2026). Visible FAQ/How-to content stays on pages.
 */
export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = (): Record<string, unknown> | null => {
    switch (type) {
      case 'faqPage':
      case 'howTo':
        // Deprecated Google Search rich results — do not emit JSON-LD
        return null;

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `Dr. Jan Duffy - ${BUSINESS_NAME}`,
          description:
            'Professional relocation services from major US cities to Las Vegas. Expert real estate guidance with Berkshire Hathaway.',
          url: SITE_URL,
          telephone: PHONE_TEL,
          email: EMAIL,
          address: ADDRESS,
          geo: GEO_COORDINATES,
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas',
          },
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: GEO_COORDINATES,
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
                  description: 'Complete residential moving services to Las Vegas',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Corporate Relocation',
                  description: 'Business relocation services to Las Vegas',
                },
              },
            ],
          },
          ...data,
        };

      case 'realEstateAgent':
        return {
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          description:
            'Licensed real estate agent specializing in Las Vegas relocation services',
          url: SITE_URL,
          telephone: PHONE_TEL,
          email: EMAIL,
          worksFor: {
            '@type': 'Organization',
            name: BROKERAGE,
            url: 'https://www.berkshirehathawayhomeservices.com',
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas',
          },
          hasCredential: [
            LICENSE_LABEL,
            '15+ Years Experience',
            'Relocation Specialist',
          ],
          ...data,
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: (data.name as string) || 'Las Vegas Relocation Service',
          description:
            (data.description as string) ||
            'Professional relocation services to Las Vegas',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Dr. Jan Duffy - Las Vegas Relocation Services',
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas',
          },
          ...data,
        };

      case 'place':
        return {
          '@context': 'https://schema.org',
          '@type': 'Place',
          name: (data.name as string) || 'Las Vegas',
          description:
            (data.description as string) ||
            'Las Vegas, Nevada - The Entertainment Capital of the World',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.1699,
            longitude: -115.1398,
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            addressCountry: 'US',
          },
          ...data,
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: (data.headline as string) || 'Las Vegas Relocation Guide',
          description:
            (data.description as string) ||
            'Comprehensive guide for relocating to Las Vegas',
          author: {
            '@type': 'Person',
            name: 'Dr. Jan Duffy',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Las Vegas Relocation Services',
          },
          datePublished: (data.datePublished as string) || new Date().toISOString(),
          ...data,
        };

      case 'realEstate':
        return {
          '@context': 'https://schema.org',
          '@type': 'RealEstateListing',
          name: (data.name as string) || 'Las Vegas Investment Properties',
          description:
            (data.description as string) ||
            'Investment property opportunities in Las Vegas',
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas',
          },
          ...data,
        };

      case 'financialProduct':
        return {
          '@context': 'https://schema.org',
          '@type': 'FinancialProduct',
          name: (data.name as string) || 'Las Vegas Real Estate Investment',
          description:
            (data.description as string) ||
            'Investment opportunities in Las Vegas real estate',
          provider: {
            '@type': 'Organization',
            name: 'Dr. Jan Duffy - Las Vegas Relocation Services',
          },
          ...data,
        };

      default: {
        const _exhaustive: never = type;
        void _exhaustive;
        return null;
      }
    }
  };

  const schema = generateSchema();
  if (!schema) return null;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
