import type { Metadata } from 'next';
import AnimatedCorporateRelocationContent from '@/components/services/AnimatedCorporateRelocationContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Corporate Relocation Services | Las Vegas Business Moving Experts',
  description:
    'Professional corporate relocation services in Las Vegas. Expert business moving, employee relocation, and corporate transition support. Get your free consultation today.',
  keywords:
    'corporate relocation, business moving, employee relocation, Las Vegas corporate services, business transition',
  alternates: {
    canonical: '/services/corporate-relocation',
  },
  openGraph: {
    title: 'Corporate Relocation Services | Las Vegas Business Moving Experts',
    description:
      'Professional corporate relocation services in Las Vegas. Expert business moving, employee relocation, and corporate transition support.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function CorporateRelocationPage() {
  return <AnimatedCorporateRelocationContent />;
}
