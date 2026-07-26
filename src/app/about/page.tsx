import type { Metadata } from 'next';
import AnimatedAboutContent from '@/components/about/AnimatedAboutContent';
import { personSchema, SITE_URL } from '@/lib/business';

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
  return (
    <>
      {/* ProfilePage marks /about as the canonical page for the Dr. Jan Duffy entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}/about#profile`,
            url: `${SITE_URL}/about`,
            mainEntity: personSchema(),
          }),
        }}
      />
      <AnimatedAboutContent />
    </>
  );
}
