import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromNewYork', {
  title: "New York to Las Vegas Relocation Services | Dr. Jan Duffy",
  description:
    "Professional relocation services from New York City to Las Vegas. Expert assistance with housing, corporate moves, and settling into your new Las Vegas home.",
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
