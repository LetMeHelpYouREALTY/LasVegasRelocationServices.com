import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('investmentProperties', {
  title: { absolute: 'Las Vegas Investment Properties | Dr. Jan Duffy' },
  description:
    'Investment property search in Las Vegas, Paradise, and zip 89109 with relocation realtor Dr. Jan Duffy. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/investment-properties',
  },
});

export default function InvestmentPropertiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
