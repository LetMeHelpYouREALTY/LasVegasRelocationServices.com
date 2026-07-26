import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle to Las Vegas Relocation Services | Dr. Jan Duffy",
  description:
    "Professional relocation services from Seattle to Las Vegas. Expert assistance with housing, moving logistics, and settling into your new Las Vegas home.",
  alternates: {
    canonical: "/relocating-from/seattle",
  },
};

export default function SeattleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
