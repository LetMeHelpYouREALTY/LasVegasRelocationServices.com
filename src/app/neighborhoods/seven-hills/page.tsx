import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { sevenHillsGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('sevenHills', {
  title: { absolute: 'Seven Hills Henderson | Dr. Jan Duffy' },
  description:
    'Seven Hills is a Henderson community, commonly zip 89052. Luxury relocation search with Dr. Jan Duffy. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/seven-hills' },
});

export default function SevenHillsPage() {
  return <TopicGuide {...sevenHillsGuide} />;
}
