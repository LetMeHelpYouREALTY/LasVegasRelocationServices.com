import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';
import AnimatedCorporateRelocationContent from "@/components/services/AnimatedCorporateRelocationContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = withPageImageSeo('corporateRelocation', {
  title: { absolute: 'Corporate Relocation Las Vegas | Dr. Jan Duffy' },
  description:
    'Corporate relocation realtor for companies and transferring executives in Las Vegas. Home search and office real estate. Call (702) 707-7273.',
  alternates: {
    canonical: '/services/corporate-relocation',
  },
  openGraph: {
    title: 'Corporate Relocation Las Vegas | Dr. Jan Duffy',
    description:
      'Dr. Jan Duffy is the relocation realtor for companies and executives moving to Las Vegas.',
    type: 'website',
    locale: 'en_US',
  },
});

export default function CorporateRelocationPage() {
  return <AnimatedCorporateRelocationContent />;
}
