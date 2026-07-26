import type { Metadata } from 'next';
import AnimatedAboutContent from '@/components/about/AnimatedAboutContent';
import { withPageImageSeo } from '@/lib/schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = withPageImageSeo('about', {
  title: 'About Dr. Jan Duffy | Las Vegas Relocation Services Expert',
  description:
    'Meet Dr. Jan Duffy, your trusted Las Vegas relocation specialist. Learn about our team, credentials, and commitment to making your move to Las Vegas seamless and successful.',
  keywords:
    'Dr. Jan Duffy, Las Vegas relocation expert, relocation specialist, about us, team credentials',
});

export default function AboutPage() {
  // ProfilePage + ImageObject JSON-LD emitted by PageHero (image="about")
  return <AnimatedAboutContent />;
}
