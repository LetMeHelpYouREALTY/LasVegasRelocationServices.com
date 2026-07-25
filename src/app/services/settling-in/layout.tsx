import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settling-In Services | Las Vegas Relocation Support',
  description:
    'Settling-in services for new Las Vegas residents: utility setup, school enrollment, DMV registration, and local orientation from Dr. Jan Duffy.',
  alternates: {
    canonical: '/services/settling-in',
  },
};

export default function SettlingInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
