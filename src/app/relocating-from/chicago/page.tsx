"use client";

import CalendlyBooking from '@/components/shared/CalendlyBooking';
import PageHero from "@/components/sections/PageHero";
import {
  Building,
  Calendar,
  DollarSign,
  Home,
  Mail,
  MapPin,
  Phone,
  Plane,
  Star,
  Sun,
  Wind,
} from "lucide-react";
import { motion } from "@/components/motion";
import { FAQSection } from "@/components/seo";
import {
  AGENT_NAME,
  BROKERAGE,
  LICENSE_LABEL,
  PHONE_DISPLAY,
} from "@/lib/business";

const chicagoFAQs = [
  {
    question: "Who should I call when moving from Chicago to Las Vegas?",
    answer: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}. Dr. Duffy is a Nevada-licensed REALTOR® (${LICENSE_LABEL}) with ${BROKERAGE} who manages the entire Chicago-to-Las-Vegas move: neighborhood research, home search, purchase, and settling-in support after you arrive.`,
  },
  {
    question:
      "How much can I save on taxes by moving from Chicago to Las Vegas?",
    answer:
      "Nevada has no state income tax, while Illinois charges a 4.95% flat income tax. Property tax rates are also lower: Clark County's effective rate is approximately 0.84%, compared to roughly 2% in Cook County. On a $150,000 household income and a comparable home, the combined savings typically run well over $10,000 per year.",
  },
  {
    question: "How do housing costs compare between Chicago and Las Vegas?",
    answer:
      "Median home prices in the Las Vegas Valley are in the mid-$400Ks, comparable to or below many Chicago neighborhoods, but with newer construction, larger lots, and no snow-related maintenance. Popular relocation areas include Summerlin, Henderson, Green Valley, and Inspirada.",
  },
  {
    question: "How long does it take to get from Chicago to Las Vegas?",
    answer:
      "Direct flights from O'Hare or Midway to Harry Reid International Airport take about 4 hours. Driving the roughly 1,750 miles takes 25-27 hours over 2-3 days. Most relocating households fly and have their goods shipped by a moving company.",
  },
  {
    question: "What is the weather difference between Chicago and Las Vegas?",
    answer:
      "Las Vegas gets 300+ days of sunshine per year with almost no snow, versus Chicago winters that average around 35-40 inches of snow. Summers in Las Vegas are hot (July highs around 104°F) but dry, and there is no lake-effect wind chill.",
  },
];

export default function ChicagoToLasVegasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero image="fromChicago">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-500 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Chicago → Las Vegas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving from Chicago to Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your
              transition seamless. We understand the Chicago lifestyle and will
              help you find your perfect Las Vegas home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Showing</a>
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
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
              Discover the advantages of living in Las Vegas compared to Chicago
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Lower Cost of Living
              </h3>
              <p className="text-gray-600 text-center">
                Housing costs are significantly lower, and no state income tax
                means more money in your pocket compared to Chicago.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                More Space
              </h3>
              <p className="text-gray-600 text-center">
                Get more square footage for your money. Las Vegas offers
                spacious homes and yards compared to Chicago's dense urban
                areas.
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
                Enjoy 300+ days of sunshine annually. Say goodbye to Chicago
                winters and hello to year-round outdoor activities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Plane className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Easy Travel
              </h3>
              <p className="text-gray-600 text-center">
                McCarran International Airport offers direct flights to Chicago
                and major cities worldwide.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Business Friendly
              </h3>
              <p className="text-gray-600 text-center">
                Nevada's business-friendly environment with no corporate income
                tax and lower operating costs.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Wind className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                No Wind Chill
              </h3>
              <p className="text-gray-600 text-center">
                Escape Chicago's famous wind chill factor. Las Vegas offers
                comfortable temperatures year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Relocation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every detail of your move from Chicago to Las Vegas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your needs, timeline, and preferences for your new
                Las Vegas home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Area Research
              </h3>
              <p className="text-gray-600">
                We research neighborhoods, schools, and amenities that match
                your lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Property Search
              </h3>
              <p className="text-gray-600">
                We find and show you properties that meet your criteria and
                budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Settlement Support
              </h3>
              <p className="text-gray-600">
                We help you settle in with local connections and ongoing
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Las Vegas Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover properties in Las Vegas that offer better value than
              Chicago
            </p>
          </motion.div>

          {/* RealScout Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_HIGH"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="400000"
              price-max="800000"
            ></realscout-office-listings>
          </motion.div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chicago-Style Homes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Chicago-Style Homes
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_HIGH"
                listing-status="For Sale"
                property-types="SFR"
                price-min="500000"
                price-max="900000"
              ></realscout-office-listings>
            </motion.div>

            {/* Value Properties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Value Properties
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_LOW"
                listing-status="For Sale"
                property-types="SFR,MF"
                price-min="300000"
                price-max="600000"
              ></realscout-office-listings>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Las Vegas Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Las Vegas Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best neighborhoods for your lifestyle and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Summerlin
                </h3>
                <p className="text-gray-600 mb-4">
                  Upscale master-planned community with excellent schools,
                  parks, and shopping.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Family-friendly, great schools</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Henderson
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe, family-oriented city with top-rated schools and
                  beautiful parks.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Safe, excellent schools</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Green Valley
                </h3>
                <p className="text-gray-600 mb-4">
                  Established neighborhood with mature trees and convenient
                  amenities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Mature, established area</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Centennial Hills
                </h3>
                <p className="text-gray-600 mb-4">
                  Growing area with new homes, mountain views, and outdoor
                  recreation.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>New homes, mountain views</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Anthem
                </h3>
                <p className="text-gray-600 mb-4">
                  Master-planned community with golf courses and resort-style
                  amenities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Golf, resort amenities</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Inspirada
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern community with contemporary homes and active lifestyle
                  amenities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Modern, active lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with FAQPage schema */}
      <FAQSection
        title="Chicago to Las Vegas Relocation FAQs"
        faqs={chicagoFAQs}
        className="py-16"
      />

      {/* Contact Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Chicago to Vegas Journey?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for a personalized consultation about
              your relocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-200" />
                  <span>(702) 707-7273</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-red-200" />
                  <span>DrJan@LasVegasRelocationServices.com</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-red-200" />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">
                  Why Choose Dr. Jan Duffy?
                </h4>
                <ul className="space-y-2 text-red-100">
                  <li>• 15+ years of Las Vegas real estate experience</li>
                  <li>• Berkshire Hathaway expertise and resources</li>
                  <li>• Personal attention to every client</li>
                  <li>• Deep knowledge of Chicago to Vegas relocation</li>
                  <li>• Ongoing support after your move</li>
                </ul>
              </div>
            </div>

            <CalendlyBooking title="Book a Showing" description="Schedule a free consultation or showing with Dr. Jan Duffy." />
          </div>
        </div>
      </section>
    </div>
  );
}
