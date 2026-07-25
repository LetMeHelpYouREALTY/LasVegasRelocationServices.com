import type { Metadata } from 'next';
import AnimatedAboutContent from '@/components/about/AnimatedAboutContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Las Vegas Relocation Services Expert',
  description:
    'Meet Dr. Jan Duffy, your trusted Las Vegas relocation specialist. Learn about our team, credentials, and commitment to making your move to Las Vegas seamless and successful.',
  keywords:
    'Dr. Jan Duffy, Las Vegas relocation expert, relocation specialist, about us, team credentials',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Dr. Jan Duffy | Las Vegas Relocation Services Expert',
    description:
      'Meet Dr. Jan Duffy, your trusted Las Vegas relocation specialist with 15+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function AboutPage() {
  return <AnimatedAboutContent />;
}
