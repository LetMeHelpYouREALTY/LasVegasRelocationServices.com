import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { anthemGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('anthem', {
  title: { absolute: 'Moving to Anthem, Henderson | Dr. Jan Duffy' },
  description:
    'Anthem is a Henderson community. Addresses commonly use 89044 and 89052. Dr. Jan Duffy shows the homes. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods/anthem' },
});

export default function AnthemPage() {
  return <TopicGuide {...anthemGuide} />;
}
