import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromMiami', {
  title: "Miami to Las Vegas Relocation Services | Dr. Jan Duffy",
  description:
    "Professional relocation services from Miami to Las Vegas. Expert assistance with housing, moving logistics, and settling into your new Las Vegas home.",
  alternates: {
    canonical: "/relocating-from/miami",
  },
});

export default function MiamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
