import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { summerlinGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('summerlin', {
  title: 'Moving to Summerlin | Las Vegas Relocation | Dr. Jan Duffy',
  description:
    'Summerlin has 250+ parks and 150+ miles of trails. See the FY 2026–27 Summerlin Town tax example and call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/summerlin' },
});

export default function SummerlinPage() {
  return <TopicGuide {...summerlinGuide} />;
}
