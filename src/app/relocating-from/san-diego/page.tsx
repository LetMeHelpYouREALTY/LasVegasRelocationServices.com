import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';
import SanDiegoPageClient from './SanDiegoPageClient';

export const metadata: Metadata = withPageImageSeo('fromSanDiego', {
  title: { absolute: 'Moving from San Diego to Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor for buyers moving from San Diego to Las Vegas, including La Jolla, Coronado, and Scripps Ranch. Call (702) 707-7273.',
  keywords:
    'San Diego to Las Vegas relocation, SD to Vegas move, California to Nevada relocation, Dr. Jan Duffy, Berkshire Hathaway',
  alternates: {
    canonical: '/relocating-from/san-diego',
  },
  openGraph: {
    title: 'Moving from San Diego to Las Vegas | Dr. Jan Duffy',
    description:
      'Professional relocation services from San Diego to Las Vegas with Dr. Jan Duffy and Berkshire Hathaway.',
  },
});

export default function SanDiegoToLasVegasPage() {
  return <SanDiegoPageClient />;
}
