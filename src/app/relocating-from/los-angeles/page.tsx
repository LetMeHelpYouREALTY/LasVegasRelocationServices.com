import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';
import LosAngelesPageClient from './LosAngelesPageClient';

export const metadata: Metadata = withPageImageSeo('fromLosAngeles', {
  title: { absolute: 'Moving from Los Angeles to Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor for buyers moving from Los Angeles to Las Vegas, including Playa Vista. Call (702) 707-7273.',
  keywords:
    'Los Angeles to Las Vegas relocation, LA to Vegas move, California to Nevada relocation, Dr. Jan Duffy, Berkshire Hathaway',
  alternates: {
    canonical: '/relocating-from/los-angeles',
  },
  openGraph: {
    title: 'Moving from Los Angeles to Las Vegas | Dr. Jan Duffy',
    description:
      'Professional relocation services from Los Angeles to Las Vegas with Dr. Jan Duffy and Berkshire Hathaway.',
  },
});

export default function LosAngelesToLasVegasPage() {
  return <LosAngelesPageClient />;
}
