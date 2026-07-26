import type { Metadata } from 'next';
import {
  AGENT_NAME,
  BUSINESS_NAME,
  PHONE_DISPLAY,
} from '@/lib/business';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('internationalRelocation', {
  title: 'International Relocation to Las Vegas | Visa, Housing & Settling In',
  description: `Moving to Las Vegas from abroad? ${AGENT_NAME} with ${BUSINESS_NAME} coordinates visa guidance referrals, temporary and long-term housing, school enrollment by district, and settling-in support. Call ${PHONE_DISPLAY}.`,
  keywords: [
    'international relocation Las Vegas',
    'move to Las Vegas from abroad',
    'expat relocation Las Vegas',
    'visa relocation Nevada',
    'Dr. Jan Duffy international relocation',
  ],
  robots: {
    index: true,
    follow: true,
  },
});

export default function InternationalRelocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Service + ImageObject JSON-LD emitted by PageHero
  return children;
}
