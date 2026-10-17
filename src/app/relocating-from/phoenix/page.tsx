import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { phoenixGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromPhoenix', {
  title: 'Moving from Phoenix to Las Vegas | Dr. Jan Duffy',
  description:
    'Phoenix to Las Vegas is a one-day drive on US-93 and I-11, or a short nonstop flight. Call (702) 707-7273.',
  alternates: { canonical: '/relocating-from/phoenix' },
});

export default function PhoenixPage() {
  return <TopicGuide {...phoenixGuide} />;
}
