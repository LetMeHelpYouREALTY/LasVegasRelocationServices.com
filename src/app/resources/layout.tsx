import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Relocation Resources & Tools',
  description:
    'Free Las Vegas relocation resources: neighborhood guides, moving checklists, cost of living and mortgage calculators, market reports, and legal information for your move.',
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
