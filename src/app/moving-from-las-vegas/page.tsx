import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { leavingLasVegasGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('leavingLasVegas', {
  title: { absolute: 'Moving from Las Vegas to San Diego | Dr. Jan Duffy' },
  description:
    'Leaving Las Vegas for San Diego or New York? Dr. Jan Duffy lists the Nevada home. She is not a California or New York agent. Call (702) 707-7273.',
  alternates: { canonical: '/moving-from-las-vegas' },
});

export default function MovingFromLasVegasPage() {
  return <TopicGuide {...leavingLasVegasGuide} />;
}
