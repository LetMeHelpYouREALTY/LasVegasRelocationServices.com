import type { Metadata } from 'next';
import Link from 'next/link';
import NeighborhoodAreaCards from '@/components/sections/NeighborhoodAreaCards';
import PageHero from '@/components/sections/PageHero';
import { FAQSection } from '@/components/seo';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/business';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('neighborhoods', {
  title: 'Las Vegas Neighborhood Guides | Summerlin, Henderson, Green Valley',
  description:
    'Guides to Summerlin, Henderson, and Green Valley for people relocating to Las Vegas. Parks, drive times, and property-tax districts. Call (702) 707-7273.',
  alternates: { canonical: '/neighborhoods' },
});

const faqs = [
  {
    question: 'Which Las Vegas neighborhoods do relocating buyers ask about most?',
    answer:
      'Summerlin, Henderson, and Green Valley. Summerlin has 250+ parks and 150+ miles of trails. Henderson and Green Valley are often a 20–30 minute drive to the Strip and Harry Reid International Airport. Median prices in these areas typically run from the mid-$400Ks to the $600Ks.',
  },
  {
    question: 'How do I find the school assigned to a house?',
    answer:
      'Clark County School District assigns schools by street address. Look up the address. This site does not rank school quality.',
  },
  {
    question: 'Who do I call to tour these areas?',
    answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY}. One contact covers neighborhood research, showings, and the move.`,
  },
];

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero image="neighborhoods">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100 mb-4">
            Las Vegas neighborhoods
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Neighborhood guides for a Las Vegas move
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Start with Summerlin, Henderson, or Green Valley. Each guide lists what is on the ground
            and how property tax is billed. Call {PHONE_DISPLAY}.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </PageHero>

      <NeighborhoodAreaCards />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Read the full guides</h2>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                className="text-blue-700 font-semibold hover:underline"
                href="/neighborhoods/summerlin"
              >
                Summerlin
              </Link>
              <span className="text-gray-700">
                {' '}
                — parks, trails, and the Summerlin Town tax district.
              </span>
            </li>
            <li>
              <Link
                className="text-blue-700 font-semibold hover:underline"
                href="/neighborhoods/henderson"
              >
                Henderson
              </Link>
              <span className="text-gray-700">
                {' '}
                — airport drive time and a Henderson tax-district example.
              </span>
            </li>
            <li>
              <Link
                className="text-blue-700 font-semibold hover:underline"
                href="/neighborhoods/green-valley"
              >
                Green Valley
              </Link>
              <span className="text-gray-700">
                {' '}
                — the Henderson community on Green Valley Parkway.
              </span>
            </li>
            <li>
              <Link
                className="text-blue-700 font-semibold hover:underline"
                href="/guides/nevada-taxes"
              >
                Nevada property tax
              </Link>
              <span className="text-gray-700"> — how assessed value and district rates work.</span>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Neighborhood questions" />
    </div>
  );
}
