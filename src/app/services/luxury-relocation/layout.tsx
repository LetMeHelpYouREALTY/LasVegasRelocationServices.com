import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Relocation Services | Las Vegas High-End Moves',
  description:
    'White-glove luxury relocation services in Las Vegas: high-end home search, concierge move management, and discreet, personalized service from Dr. Jan Duffy.',
  alternates: {
    canonical: '/services/luxury-relocation',
  },
};

export default function LuxuryRelocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
