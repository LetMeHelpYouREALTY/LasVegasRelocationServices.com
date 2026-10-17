import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { dallasGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromDallas', {
  title: 'Moving from Dallas to Las Vegas | Dr. Jan Duffy',
  description:
    'Dallas and Nevada both have no state personal income tax. Nonstop flights run DFW to Harry Reid. Call (702) 707-7273.',
  alternates: { canonical: '/relocating-from/dallas' },
});

export default function DallasPage() {
  return <TopicGuide {...dallasGuide} />;
}
