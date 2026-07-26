import type { Metadata } from 'next';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('relocationPlanning', {
  title: 'Relocation Planning Services | Las Vegas Move Planning',
  description:
    'Personalized Las Vegas relocation planning: timelines, budgets, checklists, and step-by-step move coordination from Dr. Jan Duffy and Berkshire Hathaway.',
  alternates: {
    canonical: '/services/relocation-planning',
  },
});

export default function RelocationPlanningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
