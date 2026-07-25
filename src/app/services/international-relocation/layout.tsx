import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Relocation Services | Move to Las Vegas from Abroad',
  description:
    'Expert international relocation services for moves to Las Vegas from abroad: visa guidance, customs coordination, housing, and settling-in support.',
  alternates: {
    canonical: '/services/international-relocation',
  },
};

export default function InternationalRelocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
