import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moving & Transportation Services | Las Vegas Relocation',
  description:
    'Professional moving and transportation services for Las Vegas relocations: packing, vehicle transport, storage solutions, and full move coordination.',
  alternates: {
    canonical: '/services/moving-transportation',
  },
};

export default function MovingTransportationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
