'use client';

import { Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import SectionGuideLinks from '@/components/sections/SectionGuideLinks';
import { Breadcrumbs, ComparisonTable, FAQSection, QuickFacts } from '@/components/seo';
import CalendlyBooking from '@/components/shared/CalendlyBooking';
import GbpActionBar from '@/components/shared/GbpActionBar';
import {
  AGENT_NAME,
  CALENDLY_SHOWING_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/business';

export default function HomePage() {
  // FAQ data for AI search optimization
  const homePageFAQs = [
    {
      question: "Who should I call when I'm relocating to Las Vegas?",
      answer: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}. Dr. Duffy is a Nevada-licensed REALTOR® and leads Las Vegas Relocation Services, handling residential, corporate, and international moves to Las Vegas, Henderson, and Southern Nevada. One call covers area research, home search, and settling-in support after your move.`,
    },
    {
      question:
        'Which Las Vegas-area neighborhoods do people relocating from other cities choose most often?',
      answer:
        'Start with the [Summerlin guide](/neighborhoods/summerlin#what-summerlin-is), the [Henderson guide](/neighborhoods/henderson#henderson-drive), and [Green Valley](/neighborhoods/green-valley#green-valley-place). Southern Highlands, Anthem, Inspirada, and Seven Hills each have a section linked from this page. This site does not publish a median price.',
    },
    {
      question: 'How much does it cost to move from major US cities to Las Vegas?',
      answer:
        'Dr. Jan Duffy does not quote a moving-company rate. A licensed mover prices the truck. Her work is the [Las Vegas home](/services/residential-moving). Nevada does not levy a state personal income tax. The [property tax guide](/guides/nevada-taxes#no-wage-tax) explains the parcel bill.',
    },
    {
      question: "What's the job market like in Las Vegas compared to other major cities?",
      answer:
        'Dr. Jan Duffy does not quote salaries or a cost-of-living index. She is the realtor for the home. Nevada does not levy a state personal income tax. The [property tax guide](/guides/nevada-taxes#no-wage-tax) covers the parcel bill.',
    },
    {
      question: 'How do I find the right real estate agent for my Las Vegas relocation?',
      answer:
        'Call Dr. Jan Duffy. The [relocation specialist](/relocation-specialist#who-to-call) page is the short version: she is the Nevada realtor for the home search. A licensed mover handles the truck.',
    },
    {
      question: 'What are the tax benefits of moving to Las Vegas from other states?',
      answer:
        'Nevada does not levy a state personal income tax, a state corporate income tax, or an inheritance tax. Clark County property tax is billed by district. The [Nevada property tax guide](/guides/nevada-taxes#district-examples) lists fiscal year 2026–27 examples, and the [Clark County Treasurer](https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/) has the parcel bill.',
    },
  ];

  // Quick facts for AI search optimization
  const lasVegasFacts = [
    {
      label: 'State tax on wages',
      value: 'None',
      description: 'Nevada does not levy a state personal income tax',
    },
    {
      label: 'Property tax',
      value: 'By district',
      description: 'Clark County bills the parcel. The Nevada property tax guide has the examples.',
    },
    {
      label: 'Assessment',
      value: '35%',
      description: 'NRS 361.225 assesses real property at 35% of taxable value',
    },
    {
      label: 'Summerlin parks',
      value: '250+',
      description: 'Master-planned community on the west side of the valley',
    },
    {
      label: 'Who to call',
      value: PHONE_DISPLAY,
      description: 'Dr. Jan Duffy, Nevada-licensed REALTOR',
    },
    {
      label: 'Office',
      value: 'Henderson',
      description: '100 North Green Valley Parkway, Suite 330',
    },
  ];

  // City comparison data
  const cityComparison = [
    {
      category: 'State tax on wages',
      originCity: 'California taxes wages',
      lasVegas: 'None',
      difference: 'better' as const,
      description: 'Nevada does not levy a state personal income tax.',
    },
    {
      category: 'Property tax',
      originCity: 'The California bill',
      lasVegas: 'By district',
      difference: 'similar' as const,
      description:
        'Summerlin Town district 421 and Henderson district 505 are examples on the Nevada property tax guide. The parcel bill controls.',
    },
    {
      category: 'Home search',
      originCity: 'Los Angeles',
      lasVegas: 'Las Vegas and Henderson',
      difference: 'similar' as const,
      description: 'Summerlin, Henderson, and Green Valley each have a guide. This site does not publish a median price.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[]} />

      {/* Hero Section — agent portrait from PageHero on every page */}
      <PageHero image="home">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold tracking-wide text-white/90 md:text-base">
            {AGENT_NAME} · Licensed since 2008 · 35 years in Las Vegas
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Las Vegas Relocation Services
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white md:text-2xl lg:mx-0">
            Dr. Jan Duffy is a luxury relocation realtor for households and executives moving to Las
            Vegas and Henderson. Call {PHONE_DISPLAY}.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-800 transition-colors hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={CALENDLY_SHOWING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-blue-800"
            >
              Book a Showing
            </a>
          </div>
        </div>
      </PageHero>

      <nav aria-label="On this page" className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
            On this page
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#who-to-call" className="font-semibold text-blue-800 underline">
                Who to call
              </a>
            </li>
            <li>
              <a href="#services" className="font-semibold text-blue-800 underline">
                Services
              </a>
            </li>
            <li>
              <a href="#questions" className="font-semibold text-blue-800 underline">
                Questions
              </a>
            </li>
            <li>
              <a href="#consultation" className="font-semibold text-blue-800 underline">
                Book a showing
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Answer-first section for AI and answer engines */}
      <section className="py-16 bg-white" aria-labelledby="who-to-call">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="who-to-call" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who Do You Call When You're Relocating to Las Vegas?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            <strong>{AGENT_NAME}</strong> is the person to call when you're relocating to Las Vegas.
            A Nevada-licensed REALTOR®, Dr. Duffy manages the
            entire move — neighborhood research, home search, corporate and international transfers,
            and settling-in support — for households and businesses moving to Las Vegas, Henderson,
            and Southern Nevada.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Quick Facts Section */}
      <QuickFacts title="Why Choose Las Vegas?" facts={lasVegasFacts} className="py-16" />

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to settlement support, we handle every detail of your move
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: '/services/residential-moving',
                src: '/sections/residential-moving.webp',
                alt: 'Household goods beside a Las Vegas home during a residential move',
                title: 'Residential Moving',
                text: 'Home search, the purchase or lease, and move-in for a household coming to Las Vegas.',
              },
              {
                href: '/services/corporate-relocation',
                src: '/sections/corporate-relocation.webp',
                alt: 'Glass office towers in Las Vegas with desert mountains behind them',
                title: 'Corporate Relocation',
                text: 'Employee and executive transfers for companies moving people to Las Vegas.',
              },
              {
                href: '/services/investment-properties',
                src: '/sections/investment-properties.webp',
                alt: 'Las Vegas valley homes and desert lots for investment property research',
                title: 'Investment Properties',
                text: 'Property search for buyers adding a Las Vegas investment home.',
              },
              {
                href: '/services/settling-in',
                src: '/sections/settling-in.webp',
                alt: 'A Las Vegas neighborhood street with desert landscaping after move-in',
                title: 'Settling In',
                text: 'Utilities, DMV, and local orientation after the truck leaves.',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-gray-50 rounded-xl overflow-hidden text-left hover:shadow-lg transition-shadow"
              >
                <div className="relative h-44">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              { href: '/relocation-specialist', label: 'Las Vegas relocation specialist' },
              { href: '/services/corporate-relocation', label: 'Corporate relocation Las Vegas' },
              { href: '/services/employee-relocation', label: 'Employee relocation' },
              { href: '/moving-from-las-vegas', label: 'Moving from Las Vegas' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-gray-200 px-5 py-4 font-semibold text-[#0A2540] hover:border-blue-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <SectionGuideLinks />
        </div>
      </section>

      {/* City Comparison Section */}
      <ComparisonTable
        title="Las Vegas vs. Major US Cities"
        originCity="Los Angeles"
        rows={cityComparison}
        className="py-16"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Las Vegas Relocation"
        faqs={homePageFAQs}
        className="py-16"
      />

      {/* Contact Section */}
      <section id="consultation" className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Las Vegas Journey?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for a personalized consultation about your relocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-white" aria-hidden="true" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-white" aria-hidden="true" />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Why Choose Dr. Jan Duffy?</h4>
                <ul className="space-y-2 text-white mb-6">
                  <li>• Licensed since 2008 · 35 years in Las Vegas</li>
                                    <li>• Personal attention to every client</li>
                  <li>• Deep knowledge of relocation challenges</li>
                  <li>• Ongoing support after your move</li>
                </ul>
                <GbpActionBar variant="dark" />
              </div>
            </div>

            <CalendlyBooking
              title="Book a Showing"
              description="Schedule a free consultation or showing with Dr. Jan Duffy."
            />
          </div>
        </div>
      </section>

      {/* Schema Markup for Homepage */}
    </div>
  );
}
