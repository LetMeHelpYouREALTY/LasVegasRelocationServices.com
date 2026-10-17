import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromSeattle', {
  title: { absolute: 'Moving from Seattle to Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor for buyers moving from Seattle to Las Vegas. Call (702) 707-7273.',
  alternates: {
    canonical: "/relocating-from/seattle",
  },
});

export default function SeattleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
