import type { Metadata } from "next";
import { withPageImageSeo } from '@/lib/schema';
import SanDiegoPageClient from "./SanDiegoPageClient";

export const metadata: Metadata = withPageImageSeo('fromSanDiego', {
  title: "San Diego to Las Vegas Relocation Services | Dr. Jan Duffy",
  description:
    "Professional relocation services from San Diego to Las Vegas. Expert assistance with housing, schools, and settling into your new Las Vegas home.",
  keywords:
    "San Diego to Las Vegas relocation, SD to Vegas move, California to Nevada relocation, Dr. Jan Duffy, Berkshire Hathaway",
  alternates: {
    canonical: "/relocating-from/san-diego",
  },
  openGraph: {
    title: "San Diego to Las Vegas Relocation Services",
    description:
      "Professional relocation services from San Diego to Las Vegas with Dr. Jan Duffy and Berkshire Hathaway.",
  },
});

export default function SanDiegoToLasVegasPage() {
  return <SanDiegoPageClient />;
}
