import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { southernHighlandsGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('southernHighlands', {
  title: { absolute: 'Southern Highlands Las Vegas | Dr. Jan Duffy' },
  description:
    'Southern Highlands is unincorporated Clark County in the southwest Las Vegas valley. Luxury home search with Dr. Jan Duffy. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/southern-highlands' },
});

export default function SouthernHighlandsPage() {
  return <TopicGuide {...southernHighlandsGuide} />;
}
