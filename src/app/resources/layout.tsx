import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('resources', {
  title: 'Las Vegas Relocation Resources & Tools',
  description:
    'Free Las Vegas relocation resources: neighborhood guides, moving checklists, cost of living and mortgage calculators, market reports, and legal information for your move.',
  alternates: {
    canonical: '/resources',
  },
});

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
