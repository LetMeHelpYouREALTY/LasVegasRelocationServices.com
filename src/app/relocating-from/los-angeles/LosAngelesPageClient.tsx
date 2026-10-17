'use client';

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
  Users,
} from 'lucide-react';
import NeighborhoodAreaCards from '@/components/sections/NeighborhoodAreaCards';
import OriginNeighborhoodNotes from '@/components/sections/OriginNeighborhoodNotes';
import PageHero from '@/components/sections/PageHero';
import {
  Breadcrumbs,
  ComparisonTable,
  FAQSection,
  QuickFacts,
  SchemaMarkup,
} from '@/components/seo';
import CalendlyBooking from '@/components/shared/CalendlyBooking';

export default function LosAngelesPageClient() {
  // FAQ data for AI search optimization
  const laRelocationFAQs = [
    {
      question: 'Which Las Vegas neighborhoods do people moving from Los Angeles ask about?',
      answer:
        'Start with the [Summerlin guide](/neighborhoods/summerlin#what-summerlin-is), the [Henderson guide](/neighborhoods/henderson#henderson-drive), and [Green Valley](/neighborhoods/green-valley#green-valley-place). Summerlin has 250+ parks and 150+ miles of trails. Henderson and Green Valley are often a 20-30 minute drive to the Strip and Harry Reid International Airport. [Clark County School District](https://www.ccsd.net/) assigns a school by the street address. This site does not publish a median price.',
    },
    {
      question: 'How much does it cost to move from Los Angeles to Las Vegas?',
      answer:
        'Dr. Jan Duffy does not quote a moving-company rate. A licensed mover prices the truck. The drive is about 270 miles, often 4-5 hours. Her work is the [Las Vegas or Henderson home](/services/residential-moving). Nevada does not levy a state personal income tax.',
    },
    {
      question: "What's the job market like in Las Vegas compared to Los Angeles?",
      answer:
        'Las Vegas has a diverse job market with strong opportunities in hospitality, gaming, technology, healthcare, and construction. The city is experiencing growth in tech startups and remote work opportunities. While salaries may be slightly lower than LA, the cost of living is significantly lower, resulting in better overall financial outcomes. Many LA professionals find they can maintain similar lifestyles with much lower expenses in Las Vegas.',
    },
    {
      question: 'How do I find the right real estate agent for my LA to Las Vegas relocation?',
      answer:
        'Call Dr. Jan Duffy. The [relocation specialist](/relocation-specialist#who-to-call) page is the short version: she is the Nevada realtor for the home search. A licensed mover handles the truck.',
    },
    {
      question: 'What are the tax benefits of moving from Los Angeles to Las Vegas?',
      answer:
        'Nevada does not levy a state personal income tax, a state corporate income tax, or an inheritance tax. California taxes wages. Clark County property tax is a district bill. The [Nevada property tax guide](/guides/nevada-taxes#no-wage-tax) has the fiscal year 2026–27 examples. This site does not estimate a dollar savings.',
    },
    {
      question: "What's the weather like in Las Vegas compared to Los Angeles?",
      answer:
        "Las Vegas enjoys 300+ days of sunshine annually with a desert climate. Summers are hot (90-110°F) but dry, unlike LA's humidity. Winters are mild (40-60°F) with occasional rain. Spring and fall are pleasant (60-80°F). The dry climate is great for outdoor activities year-round, and you'll say goodbye to LA's marine layer and traffic. Many find the consistent sunshine and clear skies refreshing.",
    },
  ];

  // Quick facts for AI search optimization
  const laToVegasFacts = [
    {
      label: 'Distance',
      value: '270 miles',
      description: '4-5 hour drive from LA',
    },
    {
      label: 'State tax on wages',
      value: 'None',
      description: 'Nevada does not tax wages',
    },
    {
      label: 'Property tax',
      value: 'By district',
      description: 'The parcel bill controls',
    },
    {
      label: 'Home search',
      value: 'Las Vegas',
      description: 'Summerlin, Henderson, and Green Valley guides',
    },
    {
      label: 'Mover rate',
      value: 'Not quoted',
      description: 'A licensed mover prices the truck',
    },
    {
      label: 'Traffic',
      value: 'Minimal',
      description: 'No more LA gridlock',
    },
  ];

  // LA vs Las Vegas comparison data
  const laVegasComparison = [
    {
      category: 'Home search',
      originCity: 'Los Angeles',
      lasVegas: 'Las Vegas and Henderson',
      difference: 'similar' as const,
      description: 'This site does not publish a median price.',
    },
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
      description: 'See the Nevada property tax guide. The parcel bill controls.',
    },
    {
      category: 'Traffic Congestion',
      originCity: 'Severe',
      lasVegas: 'Minimal',
      difference: 'better' as const,
      description: 'No more gridlock',
    },
    {
      category: 'Housing Space',
      originCity: 'Limited',
      lasVegas: 'Spacious',
      difference: 'better' as const,
      description: 'More square footage',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Relocating From', href: '/relocating-from' },
          { label: 'Los Angeles', href: '/relocating-from/los-angeles' },
        ]}
      />

      {/* Hero Section */}
      <PageHero image="fromLosAngeles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Los Angeles → Las Vegas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving from Los Angeles to Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your transition seamless. We
              know both cities intimately and will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book a Showing
              </a>
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Las Vegas Areas
              </button>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Quick Facts Section */}
      <QuickFacts title="LA to Las Vegas: Key Facts" facts={laToVegasFacts} className="py-16" />

      {/* Why Choose Las Vegas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Las Vegas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of living in Las Vegas compared to Los Angeles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Lower Cost of Living
              </h3>
              <p className="text-gray-600 text-center">
                Housing costs are significantly lower, and no state income tax means more money in
                your pocket.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">More Space</h3>
              <p className="text-gray-600 text-center">
                Get more square footage for your money. Las Vegas offers spacious homes and yards.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Car className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Less Traffic</h3>
              <p className="text-gray-600 text-center">
                Say goodbye to LA traffic jams. Las Vegas has much more manageable commute times.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Plane className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Easy Travel</h3>
              <p className="text-gray-600 text-center">
                McCarran International Airport offers direct flights to LA and major cities
                worldwide.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Business Friendly
              </h3>
              <p className="text-gray-600 text-center">
                Nevada's business-friendly environment with no corporate income tax.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Growing Community
              </h3>
              <p className="text-gray-600 text-center">
                Join a rapidly growing, diverse community with excellent amenities and
                entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Section */}
      <ComparisonTable
        title="Los Angeles vs. Las Vegas Comparison"
        originCity="Los Angeles"
        rows={laVegasComparison}
        className="py-16"
      />

      {/* Relocation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Relocation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every detail of your move from Los Angeles to Las Vegas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs, timeline, and preferences for your new Las Vegas home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Area Research</h3>
              <p className="text-gray-600">
                We research neighborhoods, commute times, and amenities that match your lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Search</h3>
              <p className="text-gray-600">
                We find and show you properties that meet your criteria and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settlement Support</h3>
              <p className="text-gray-600">
                We help you settle in with local connections and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Las Vegas Areas */}
      <OriginNeighborhoodNotes city="los-angeles" />
      <NeighborhoodAreaCards />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions: LA to Las Vegas Relocation"
        faqs={laRelocationFAQs}
        className="py-16"
      />

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your LA to Vegas Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for a personalized consultation about your relocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-200" />
                  <a href="tel:+17027077273" className="hover:underline">
                    (702) 707-7273
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-200" />
                  <span>DrJan@LasVegasRelocationServices.com</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-blue-200" />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Why Choose Dr. Jan Duffy?</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• 15+ years of Las Vegas real estate experience</li>
                  <li>• Berkshire Hathaway expertise and resources</li>
                  <li>• Personal attention to every client</li>
                  <li>• Deep knowledge of LA to Vegas relocation</li>
                  <li>• Ongoing support after your move</li>
                </ul>
              </div>
            </div>

            <CalendlyBooking
              title="Book a Showing"
              description="Schedule a free consultation or showing with Dr. Jan Duffy."
            />
          </div>
        </div>
      </section>

      {/* Schema Markup for LA Relocation Page */}
      <SchemaMarkup
        type="howTo"
        data={{
          name: 'How to Relocate from Los Angeles to Las Vegas',
          description:
            'Complete guide for moving from Los Angeles to Las Vegas with expert real estate guidance and relocation services.',
          steps: [
            {
              '@type': 'HowToStep',
              name: 'Initial Consultation',
              text: 'Schedule a consultation with Dr. Jan Duffy to discuss your LA to Las Vegas relocation needs and timeline',
            },
            {
              '@type': 'HowToStep',
              name: 'Area Research',
              text: 'Research Las Vegas neighborhoods that match your lifestyle and budget, comparing them to LA areas',
            },
            {
              '@type': 'HowToStep',
              name: 'Property Search',
              text: 'Find and view properties in Las Vegas that offer better value than Los Angeles',
            },
            {
              '@type': 'HowToStep',
              name: 'Settlement Support',
              text: 'Get assistance with settling into your new Las Vegas home with local connections and ongoing support',
            },
          ],
        }}
      />

      <SchemaMarkup
        type="place"
        data={{
          name: 'Los Angeles',
          description:
            'Los Angeles, California - Major US city with high cost of living and traffic congestion',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 34.0522,
            longitude: -118.2437,
          },
        }}
      />
    </div>
  );
}
