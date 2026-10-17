import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { paradiseGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('paradise', {
  title: { absolute: 'Moving to Paradise, Nevada | Dr. Jan Duffy' },
  description:
    'Paradise is the unincorporated Clark County town around the Strip. Luxury and investment searches, including zip 89109. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/paradise' },
});

export default function ParadisePage() {
  return <TopicGuide {...paradiseGuide} />;
}
