import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { hendersonGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('henderson', {
  title: 'Moving to Henderson, Nevada | Dr. Jan Duffy',
  description:
    'Henderson relocation guide: 20–30 minutes to the Strip and Harry Reid International Airport. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/henderson' },
});

export default function HendersonPage() {
  return <TopicGuide {...hendersonGuide} />;
}
