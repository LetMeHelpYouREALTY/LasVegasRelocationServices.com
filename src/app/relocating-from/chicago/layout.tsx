import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromChicago', {
  title: { absolute: 'Moving from Chicago to Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor for buyers moving from Chicago to Las Vegas. Call (702) 707-7273.',
  alternates: {
    canonical: "/relocating-from/chicago",
  },
});

export default function ChicagoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
