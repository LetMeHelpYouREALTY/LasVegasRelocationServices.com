import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('residentialMoving', {
  title: 'Residential Moving Services | Las Vegas Home Relocation',
  description:
    'Complete residential moving services in Las Vegas: home search assistance, packing and moving coordination, and settlement support from Dr. Jan Duffy.',
  alternates: {
    canonical: '/services/residential-moving',
  },
});

export default function ResidentialMovingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
