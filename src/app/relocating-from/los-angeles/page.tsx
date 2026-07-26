import {
  Building,
  Calendar,
  Car,
  DollarSign,
  Home,
  Mail,
  MapPin,
  Phone,
  Plane,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import LosAngelesPageClient from "./LosAngelesPageClient";

export const metadata: Metadata = {
  title: "Los Angeles to Las Vegas Relocation Services | Dr. Jan Duffy",
  description:
    "Professional relocation services from Los Angeles to Las Vegas. Expert assistance with housing, schools, and settling into your new Las Vegas home.",
  keywords:
    "Los Angeles to Las Vegas relocation, LA to Vegas move, California to Nevada relocation, Dr. Jan Duffy, Berkshire Hathaway",
  alternates: {
    canonical: "/relocating-from/los-angeles",
  },
  openGraph: {
    title: "Los Angeles to Las Vegas Relocation Services",
    description:
      "Professional relocation services from Los Angeles to Las Vegas with Dr. Jan Duffy and Berkshire Hathaway.",
  },
};

export default function LosAngelesToLasVegasPage() {
  return <LosAngelesPageClient />;
}
