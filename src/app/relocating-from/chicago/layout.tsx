import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('fromChicago', {
  title: "Chicago to Las Vegas Relocation Services | Dr. Jan Duffy",
  description:
    "Professional relocation services from Chicago to Las Vegas. Expert assistance with housing, moving logistics, and settling into your new Las Vegas home.",
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
