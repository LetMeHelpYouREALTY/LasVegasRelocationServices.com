import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('movingTransportation', {
  title: { absolute: 'Moving to Las Vegas | The Realtor and the Truck | Dr. Jan Duffy' },
  description:
    'Dr. Jan Duffy is the Las Vegas relocation realtor. A licensed mover prices the truck. She does not pack or publish a mover rate. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/moving-transportation',
  },
});

export default function MovingTransportationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
