import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('residentialMoving', {
  title: { absolute: 'Residential Relocation Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor for the Las Vegas home, including retirement moves and downsizing. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/residential-moving',
  },
});

export default function ResidentialMovingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
