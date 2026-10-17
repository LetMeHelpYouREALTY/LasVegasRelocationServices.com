import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('luxuryRelocation', {
  title: { absolute: 'Luxury Relocation Las Vegas | Dr. Jan Duffy' },
  description:
    'High-net-worth relocation realtor for Las Vegas and Henderson. Home search with Dr. Jan Duffy. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/luxury-relocation',
  },
});

export default function LuxuryRelocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
