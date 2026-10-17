import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { greenValleyGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('greenValley', {
  title: 'Moving to Green Valley, Henderson | Dr. Jan Duffy',
  description:
    'Green Valley is a Henderson community on Green Valley Parkway, about 20–30 minutes from the Strip. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/green-valley' },
});

export default function GreenValleyPage() {
  return <TopicGuide {...greenValleyGuide} />;
}
