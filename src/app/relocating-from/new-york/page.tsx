'use client';

import {
  Building,
  Calendar,
  DollarSign,
  Home,
  Mail,
  MapPin,
  Phone,
  Plane,
  Sun,
  Users,
} from 'lucide-react';
import NeighborhoodAreaCards from '@/components/sections/NeighborhoodAreaCards';
import PageHero from '@/components/sections/PageHero';
import { FAQSection } from '@/components/seo';
import CalendlyBooking from '@/components/shared/CalendlyBooking';
import { AGENT_NAME, BROKERAGE, LICENSE_LABEL, PHONE_DISPLAY } from '@/lib/business';

const newYorkFAQs = [
  {
    question: 'Who should I call when moving from New York to Las Vegas?',
    answer: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}. Dr. Duffy is a Nevada-licensed REALTOR® (${LICENSE_LABEL}) with ${BROKERAGE} who manages the entire New-York-to-Las-Vegas move: neighborhood research, home search, purchase, and settling-in support after you arrive.`,
  },
  {
    question: 'How much can I save on taxes by moving from New York to Las Vegas?',
    answer:
      'Nevada does not levy a state personal income tax or an inheritance tax. New York does tax wages. Clark County property tax is a district bill. The [Nevada property tax guide](/guides/nevada-taxes#no-wage-tax) has the examples. This site does not estimate a dollar savings.',
  },
  {
    question: 'How do housing costs compare between New York and Las Vegas?',
    answer:
      'This site does not publish a median price. The search is the [Summerlin](/neighborhoods/summerlin#what-summerlin-is), [Henderson](/neighborhoods/henderson#henderson-drive), or [Green Valley](/neighborhoods/green-valley#green-valley-place) guide. Call with the home you want to see.',
  },
  {
    question: 'How long does it take to get from New York to Las Vegas?',
    answer:
      'Nonstop flights from JFK, LaGuardia, or Newark to Harry Reid International Airport take about 5 to 5.5 hours. Driving the roughly 2,500 miles takes 36-40 hours over 4-5 days, so most relocating households fly and ship their goods.',
  },
  {
    question: 'What should New Yorkers know about daily life in Las Vegas?',
    answer:
      'Las Vegas is a car-oriented city: most residents drive rather than use transit, and typical commutes run 20-30 minutes. The region gets 300+ days of sunshine with hot, dry summers and mild winters. Popular relocation areas include Summerlin, Henderson, and Green Valley.',
  },
];

export default function NewYorkToLasVegasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero image="fromNewYork">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              New York → Las Vegas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Moving from New York to Las Vegas</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your transition seamless. We
              understand the New York lifestyle and will help you find your perfect Las Vegas home.
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

      {/* Why Choose Las Vegas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Las Vegas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of living in Las Vegas compared to New York City
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
                your pocket compared to NYC.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">More Space</h3>
              <p className="text-gray-600 text-center">
                Get more square footage for your money. Las Vegas offers spacious homes and yards
                compared to NYC apartments.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sun className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Better Weather
              </h3>
              <p className="text-gray-600 text-center">
                Enjoy 300+ days of sunshine annually. Say goodbye to NYC winters and hello to
                year-round outdoor activities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Plane className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Easy Travel</h3>
              <p className="text-gray-600 text-center">
                McCarran International Airport offers direct flights to NYC and major cities
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
                Nevada's business-friendly environment with no corporate income tax and lower
                operating costs.
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
                Join a rapidly growing, diverse community with excellent amenities and entertainment
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Relocation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every detail of your move from New York to Las Vegas
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
      <NeighborhoodAreaCards />

      {/* FAQ content (no FAQPage JSON-LD — Google removed FAQ rich results May 2026) */}
      <FAQSection
        title="New York to Las Vegas Relocation FAQs"
        faqs={newYorkFAQs}
        className="py-16"
      />

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your NYC to Vegas Journey?
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
                  <span>(702) 707-7273</span>
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
                  <li>• Deep knowledge of NYC to Vegas relocation</li>
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
    </div>
  );
}
