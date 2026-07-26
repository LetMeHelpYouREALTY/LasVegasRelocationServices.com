import type { Metadata } from 'next';
import {
  AGENT_NAME,
  BUSINESS_ID,
  BUSINESS_NAME,
  PERSON_ID,
  PHONE_DISPLAY,
  SITE_URL,
} from '@/lib/business';

export const metadata: Metadata = {
  title: 'International Relocation to Las Vegas | Visa, Housing & Settling In',
  description:
    `Moving to Las Vegas from abroad? ${AGENT_NAME} with ${BUSINESS_NAME} coordinates visa guidance referrals, temporary and long-term housing, school enrollment by district, and settling-in support. Call ${PHONE_DISPLAY}.`,
  keywords: [
    'international relocation Las Vegas',
    'move to Las Vegas from abroad',
    'expat relocation Las Vegas',
    'visa relocation Nevada',
    'Dr. Jan Duffy international relocation',
  ],
  alternates: {
    canonical: '/services/international-relocation',
  },
  openGraph: {
    title: 'International Relocation to Las Vegas | Dr. Jan Duffy',
    description:
      'Visa guidance referrals, housing search, and settling-in support for households and businesses moving to Las Vegas from abroad.',
    url: `${SITE_URL}/services/international-relocation`,
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InternationalRelocationLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/international-relocation#service`,
    name: 'International Relocation to Las Vegas',
    description:
      'End-to-end relocation support for people and businesses moving to Las Vegas from outside the United States, including housing search, logistics coordination, and settling-in assistance.',
    url: `${SITE_URL}/services/international-relocation`,
    provider: { '@id': BUSINESS_ID },
    broker: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'AdministrativeArea', name: 'Clark County' },
    ],
    serviceType: 'International Relocation',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
