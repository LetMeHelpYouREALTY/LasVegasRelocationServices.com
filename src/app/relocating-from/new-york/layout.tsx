import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromNewYork', {
  title: { absolute: 'Moving from New York to Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor for buyers moving from New York to Las Vegas. Call (702) 707-7273.',
  alternates: {
    canonical: "/relocating-from/new-york",
  },
});

export default function NewYorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
