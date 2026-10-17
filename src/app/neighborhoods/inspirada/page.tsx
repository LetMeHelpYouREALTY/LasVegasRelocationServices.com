import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { inspiradaGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('inspirada', {
  title: { absolute: 'Moving to Inspirada, Henderson | Dr. Jan Duffy' },
  description:
    'Inspirada is a Henderson master-planned community. The community site lists Henderson, NV 89044. Call Dr. Jan Duffy at (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/inspirada' },
});

export default function InspiradaPage() {
  return <TopicGuide {...inspiradaGuide} />;
}
