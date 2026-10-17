import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('settlingIn', {
  title: { absolute: 'Settling In After a Las Vegas Move | Dr. Jan Duffy' },
  description:
    'After the purchase or lease, Dr. Jan Duffy points you to utilities and the DMV. Clark County assigns schools by address. She does not sell a settling-in package. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/settling-in',
  },
});

export default function SettlingInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
