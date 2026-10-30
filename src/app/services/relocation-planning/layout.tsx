import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('relocationPlanning', {
  title: { absolute: 'Las Vegas Relocation Planning | Dr. Jan Duffy' },
  description:
    'Plan the Las Vegas home search with Dr. Jan Duffy, REALTOR® licensed since 2008. She does not publish a planning package price. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/relocation-planning',
  },
});

export default function RelocationPlanningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
