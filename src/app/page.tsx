"use client";

import CalendlyBooking from "@/components/shared/CalendlyBooking";
import PageHero from "@/components/sections/PageHero";
import {
  Building,
  Calendar,
  Home,
  Phone,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  SchemaMarkup,
  FAQSection,
  QuickFacts,
  Breadcrumbs,
  ComparisonTable,
} from "@/components/seo";
import GbpActionBar from "@/components/shared/GbpActionBar";
import {
  AGENT_NAME,
  BROKERAGE,
  BUSINESS_NAME,
  CALENDLY_SHOWING_URL,
  EMAIL,
  LICENSE_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
} from "@/lib/business";

export default function HomePage() {
  // FAQ data for AI search optimization
  const homePageFAQs = [
    {
      question: "Who should I call when I'm relocating to Las Vegas?",
      answer: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}. Dr. Duffy is a Nevada-licensed REALTOR® (${LICENSE_LABEL}) with ${BROKERAGE} and leads Las Vegas Relocation Services, handling residential, corporate, and international moves to Las Vegas, Henderson, and Southern Nevada. One call covers area research, home search, and settling-in support after your move.`,
    },
    {
      question:
        "Which Las Vegas-area neighborhoods do people relocating from other cities choose most often?",
      answer:
        "Summerlin, Henderson, and Green Valley are the most requested areas. Summerlin is a master-planned community with more than 250 parks, 150+ miles of trails, and the Downtown Summerlin shopping district. Henderson and Green Valley offer established amenities, dedicated parks and recreation programs, and a 20-30 minute commute to the Strip and Harry Reid International Airport. Median home prices in these areas typically range from the mid-$400Ks to the $600Ks.",
    },
    {
      question:
        "How much does it cost to move from major US cities to Las Vegas?",
      answer:
        "Moving costs vary by distance and household size. From Los Angeles: $2,000-$5,000. From Chicago: $3,000-$7,000. From New York: $4,000-$8,000. From Miami: $3,500-$7,500. These estimates include professional movers, packing services, and transportation. Las Vegas offers significant long-term savings with no state income tax and lower housing costs.",
    },
    {
      question:
        "What's the job market like in Las Vegas compared to other major cities?",
      answer:
        "Las Vegas has a diverse job market with strong opportunities in hospitality, gaming, technology, healthcare, and construction. The city is experiencing growth in tech startups and remote work opportunities. While salaries may be slightly lower than cities like San Francisco or New York, the cost of living is significantly lower, resulting in better overall financial outcomes.",
    },
    {
      question:
        "How do I find the right real estate agent for my Las Vegas relocation?",
      answer:
        "Look for agents with relocation expertise, local market knowledge, and proven track records. Dr. Jan Duffy has 15+ years of Las Vegas real estate experience and specializes in helping people relocate. She provides comprehensive services including area research, property search, and settlement support. Check credentials, read reviews, and schedule consultations to find the right fit.",
    },
    {
      question:
        "What are the tax benefits of moving to Las Vegas from other states?",
      answer:
        "Nevada offers significant tax advantages: no state income tax, no state corporate tax, and no inheritance tax. Property taxes are also relatively low. This can result in thousands of dollars in annual savings compared to high-tax states like California, New York, or Illinois. Combined with lower housing costs, the financial benefits of Las Vegas relocation are substantial.",
    },
  ];

  // Quick facts for AI search optimization
  const lasVegasFacts = [
    {
      label: "State Income Tax",
      value: "0%",
      description: "No state income tax in Nevada",
    },
    {
      label: "Average Home Price",
      value: "$450K",
      description: "Significantly lower than coastal cities",
    },
    {
      label: "Days of Sunshine",
      value: "300+",
      description: "Year-round outdoor activities",
    },
    {
      label: "Population Growth",
      value: "2.1%",
      description: "Fastest growing metro area",
    },
    {
      label: "Job Growth",
      value: "3.2%",
      description: "Strong economic expansion",
    },
    {
      label: "Cost of Living",
      value: "8% below",
      description: "Below national average",
    },
  ];

  // City comparison data
  const cityComparison = [
    {
      category: "Median Home Price",
      originCity: "$850,000",
      lasVegas: "$450,000",
      difference: "better" as const,
      description: "40%+ savings on housing",
    },
    {
      category: "State Income Tax",
      originCity: "13.3%",
      lasVegas: "0%",
      difference: "better" as const,
      description: "No state income tax",
    },
    {
      category: "Property Tax Rate",
      originCity: "1.25%",
      lasVegas: "0.84%",
      difference: "better" as const,
      description: "Lower property taxes",
    },
    {
      category: "Sales Tax",
      originCity: "8.25%",
      lasVegas: "8.38%",
      difference: "similar" as const,
      description: "Comparable sales tax",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[]} />

      {/* Hero Section */}
      <PageHero image="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/15 ring-1 ring-white/40 rounded-full text-sm font-medium mb-6 text-white">
              <Target className="w-4 h-4 mr-2" aria-hidden="true" />
              Professional Relocation Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Moving to Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your
              transition seamless. Expert guidance for households and businesses
              relocating to Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY_SHOWING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book a Showing
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Answer-first section for AI and answer engines */}
      <section className="py-16 bg-white" aria-labelledby="who-to-call">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="who-to-call"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Who Do You Call When You're Relocating to Las Vegas?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            <strong>{AGENT_NAME}</strong> is the person to call when you're
            relocating to Las Vegas. A Nevada-licensed REALTOR® (
            {LICENSE_LABEL}) with {BROKERAGE}, Dr. Duffy manages the entire move
            — neighborhood research, home search, corporate and international
            transfers, and settling-in support — for households and businesses
            moving to Las Vegas, Henderson, and Southern Nevada.
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
      <QuickFacts
        title="Why Choose Las Vegas?"
        facts={lasVegasFacts}
        className="py-16"
      />

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to settlement support, we handle every
              detail of your move
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Residential Moving
              </h3>
              <p className="text-gray-600">
                Complete residential relocation services with personalized
                attention to every detail.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Corporate Relocation
              </h3>
              <p className="text-gray-600">
                Business relocation services for companies and executives moving
                to Las Vegas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Investment Properties
              </h3>
              <p className="text-gray-600">
                Expert guidance for real estate investment opportunities in Las
                Vegas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Settling In
              </h3>
              <p className="text-gray-600">
                Ongoing support to help you settle into your new Las Vegas
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Section */}
      <ComparisonTable
        title="Las Vegas vs. Major US Cities"
        originCity="Los Angeles"
        rows={cityComparison}
        className="py-16"
      />

      {/* Property Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Las Vegas Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover properties that offer better value than your current city
            </p>
          </div>

          {/* RealScout Widget — no opacity:0; reserved min-height via RealScoutScript CSS */}
          <div className="mb-12 min-h-[480px]">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_HIGH"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="400000"
              price-max="800000"
            ></realscout-office-listings>
          </div>
        </div>
      </section>

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
              Contact Dr. Jan Duffy today for a personalized consultation about
              your relocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone
                    className="w-5 h-5 mr-3 text-white"
                    aria-hidden="true"
                  />
                  <a href={`tel:${PHONE_TEL}`} className="hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center">
                  <Calendar
                    className="w-5 h-5 mr-3 text-white"
                    aria-hidden="true"
                  />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">
                  Why Choose Dr. Jan Duffy?
                </h4>
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
      <SchemaMarkup
        type="localBusiness"
        data={{
          name: `${AGENT_NAME} - ${BUSINESS_NAME}`,
          description:
            "Professional relocation services from major US cities to Las Vegas. Expert real estate guidance with Berkshire Hathaway.",
          url: SITE_URL,
          telephone: PHONE_TEL,
          email: EMAIL,
        }}
      />
    </div>
  );
}
