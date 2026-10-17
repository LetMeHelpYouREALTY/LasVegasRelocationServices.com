import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { nevadaTaxGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('nevadaTaxes', {
  title: 'Nevada Property Tax Guide for Las Vegas Buyers | Dr. Jan Duffy',
  description:
    'Nevada has no state income tax. Clark County property tax is billed by district. FY 2026–27 examples for Summerlin and Henderson. Call (702) 707-7273.',
  alternates: { canonical: '/guides/nevada-taxes' },
});

export default function NevadaTaxesPage() {
  return <TopicGuide {...nevadaTaxGuide} />;
}
