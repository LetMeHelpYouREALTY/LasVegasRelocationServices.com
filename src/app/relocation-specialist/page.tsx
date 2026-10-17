import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { relocationSpecialistGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('relocationSpecialist', {
  title: { absolute: 'Las Vegas Relocation Specialist | Dr. Jan Duffy' },
  description:
    'Dr. Jan Duffy is a Las Vegas relocation realtor for households and executives moving from out of state. Call (702) 707-7273.',
  alternates: { canonical: '/relocation-specialist' },
});

export default function RelocationSpecialistPage() {
  return <TopicGuide {...relocationSpecialistGuide} />;
}
