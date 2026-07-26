import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('investmentProperties', {
  title: 'Las Vegas Investment Properties | Real Estate Investment Services',
  description:
    'Las Vegas investment property services: market analysis, ROI evaluation, property acquisition, and portfolio guidance from Dr. Jan Duffy and Berkshire Hathaway.',
  alternates: {
    canonical: '/services/investment-properties',
  },
});

export default function InvestmentPropertiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
