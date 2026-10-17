'use client';

import { Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { Breadcrumbs, ComparisonTable, FAQSection, QuickFacts } from '@/components/seo';
import CalendlyBooking from '@/components/shared/CalendlyBooking';
import GbpActionBar from '@/components/shared/GbpActionBar';
import {
  AGENT_NAME,
  BROKERAGE,
  CALENDLY_SHOWING_URL,
  LICENSE_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/business';

export default function HomePage() {
  // FAQ data for AI search optimization
  const homePageFAQs = [
    {
      question: "Who should I call when I'm relocating to Las Vegas?",
      answer: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}. Dr. Duffy is a Nevada-licensed REALTOR® (${LICENSE_LABEL}) with ${BROKERAGE} and leads Las Vegas Relocation Services, handling residential, corporate, and international moves to Las Vegas, Henderson, and Southern Nevada. One call covers area research, home search, and settling-in support after your move.`,
    },
    {
      question:
        'Which Las Vegas-area neighborhoods do people relocating from other cities choose most often?',
      answer:
        'Summerlin, Henderson, and Green Valley are the most requested areas. Summerlin is a master-planned community with more than 250 parks, 150+ miles of trails, and the Downtown Summerlin shopping district. Henderson and Green Valley have parks and recreation programs and a 20-30 minute commute to the Strip and Harry Reid International Airport. Median home prices in these areas typically range from the mid-$400Ks to the $600Ks. Full guides are at /neighborhoods.',
    },
    {
      question: 'How much does it cost to move from major US cities to Las Vegas?',
      answer:
        'Dr. Jan Duffy does not quote a moving-company rate. A licensed mover prices the truck. Her work is the Las Vegas or Henderson home. Nevada does not levy a state personal income tax. The parcel tax bill is separate.',
    },
    {
      question: "What's the job market like in Las Vegas compared to other major cities?",
      answer:
        'Las Vegas has a diverse job market with strong opportunities in hospitality, gaming, technology, healthcare, and construction. The city is experiencing growth in tech startups and remote work opportunities. While salaries may be slightly lower than cities like San Francisco or New York, the cost of living is significantly lower, resulting in better overall financial outcomes.',
    },
    {
      question: 'How do I find the right real estate agent for my Las Vegas relocation?',
      answer:
        'Look for agents with relocation expertise, local market knowledge, and proven track records. Dr. Jan Duffy has 15+ years of Las Vegas real estate experience and specializes in helping people relocate. She provides comprehensive services including area research, property search, and settlement support. Check credentials, read reviews, and schedule consultations to find the right fit.',
    },
    {
      question: 'What are the tax benefits of moving to Las Vegas from other states?',
      answer:
        'Nevada does not levy a state personal income tax, a state corporate income tax, or an inheritance tax. Clark County property tax is billed by district, not as one valley-wide rate. The Nevada property tax guide lists fiscal year 2026–27 examples for Summerlin Town and Henderson Artesian Basin. The parcel bill controls.',
    },
  ];

  // Quick facts for AI search optimization
  const lasVegasFacts = [
    {
      label: 'State Income Tax',
      value: '0%',
      description: 'No state income tax in Nevada',
    },
    {
      label: 'Average Home Price',
      value: '$450K',
      description: 'Significantly lower than coastal cities',
    },
    {
      label: 'Days of Sunshine',
      value: '300+',
      description: 'Year-round outdoor activities',
    },
    {
      label: 'Population Growth',
      value: '2.1%',
      description: 'Fastest growing metro area',
    },
    {
      label: 'Job Growth',
      value: '3.2%',
      description: 'Strong economic expansion',
    },
    {
      label: 'Cost of Living',
      value: '8% below',
      description: 'Below national average',
    },
  ];

  // City comparison data
  const cityComparison = [
    {
      category: 'Median Home Price',
      originCity: '$850,000',
      lasVegas: '$450,000',
      difference: 'better' as const,
      description: '40%+ savings on housing',
    },
    {
      category: 'State Income Tax',
      originCity: '13.3%',
      lasVegas: '0%',
      difference: 'better' as const,
      description: 'No state income tax',
    },
    {
      category: 'Property Tax',
      originCity: 'Varies',
      lasVegas: 'By district',
      difference: 'similar' as const,
      description:
        'FY 2026–27: Summerlin Town district 421 is $2.9328 per $100 assessed. See /guides/nevada-taxes.',
    },
    {
      category: 'Sales Tax',
      originCity: '8.25%',
      lasVegas: '8.38%',
      difference: 'similar' as const,
      description: 'Comparable sales tax',
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
            {AGENT_NAME} · {BROKERAGE}
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

      {/* Answer-first section for AI and answer engines */}
      <section className="py-16 bg-white" aria-labelledby="who-to-call">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="who-to-call" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who Do You Call When You're Relocating to Las Vegas?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            <strong>{AGENT_NAME}</strong> is the person to call when you're relocating to Las Vegas.
            A Nevada-licensed REALTOR® ({LICENSE_LABEL}) with {BROKERAGE}, Dr. Duffy manages the
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
      <section className="py-20 bg-white">
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
                  <li>• 15+ years of Las Vegas real estate experience</li>
                  <li>• Berkshire Hathaway expertise and resources</li>
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
