"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Building,
  Calendar,
  DollarSign,
  Home,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Plane,
  Star,
  Sun,
} from "lucide-react";
import { useId } from "react";
import { motion } from "@/components/motion";
import {
  Breadcrumbs,
  ComparisonTable,
  FAQSection,
  QuickFacts,
  SchemaMarkup,
} from "@/components/seo";

export default function SanDiegoPageClient() {
  const fullNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const neighborhoodId = useId();
  const moveDateId = useId();

  // FAQ data for AI search optimization
  const sdRelocationFAQs = [
    {
      question:
        "What are the best neighborhoods in Las Vegas for families relocating from San Diego?",
      answer:
        "Summerlin, Henderson, and Green Valley are excellent choices for San Diego families. Summerlin offers top-rated schools, parks, and shopping centers similar to SD's upscale areas. Henderson provides a safe, family-oriented environment with beautiful parks and excellent schools. Green Valley features mature trees and established amenities. All three areas offer spacious homes, great schools, and family-friendly activities at a fraction of San Diego housing costs.",
    },
    {
      question: "How much does it cost to move from San Diego to Las Vegas?",
      answer:
        "Moving costs from San Diego to Las Vegas typically range from $2,500 to $6,000 depending on household size and moving services. This includes professional movers, packing services, and transportation. The 330-mile journey takes about 5-6 hours by car. Las Vegas offers significant long-term savings with no state income tax and housing costs that are 40-50% lower than San Diego, making the move financially beneficial.",
    },
    {
      question:
        "What's the job market like in Las Vegas compared to San Diego?",
      answer:
        "Las Vegas has a diverse job market with strong opportunities in hospitality, gaming, technology, healthcare, and construction. The city is experiencing growth in tech startups and remote work opportunities. While salaries may be slightly lower than San Diego, the cost of living is significantly lower, resulting in better overall financial outcomes. Many San Diego professionals find they can maintain similar lifestyles with much lower expenses in Las Vegas.",
    },
    {
      question:
        "How do I find the right real estate agent for my San Diego to Las Vegas relocation?",
      answer:
        "Look for agents with relocation expertise, local market knowledge, and proven track records. Dr. Jan Duffy has 15+ years of Las Vegas real estate experience and specializes in helping families relocate from California. She provides comprehensive services including area research, property search, and settlement support. Her deep understanding of both San Diego and Las Vegas markets makes her ideal for this transition.",
    },
    {
      question:
        "What are the tax benefits of moving from San Diego to Las Vegas?",
      answer:
        "Nevada offers significant tax advantages over California: no state income tax (vs. 13.3% in CA), no state corporate tax, and no inheritance tax. Property taxes are also lower (0.84% vs. 1.25% in CA). This can result in thousands of dollars in annual savings. Combined with lower housing costs, the financial benefits of Las Vegas relocation are substantial for San Diego residents.",
    },
    {
      question: "What's the weather like in Las Vegas compared to San Diego?",
      answer:
        "Las Vegas enjoys 300+ days of sunshine annually with a desert climate. Summers are hot (90-110°F) but dry, unlike San Diego's marine layer and humidity. Winters are mild (40-60°F) with occasional rain. Spring and fall are pleasant (60-80°F). The dry climate is great for outdoor activities year-round, and you'll say goodbye to San Diego's coastal fog. Many find the consistent sunshine and clear skies refreshing.",
    },
  ];

  // Quick facts for AI search optimization
  const sdToVegasFacts = [
    {
      label: "Distance",
      value: "330 miles",
      description: "5-6 hour drive from SD",
    },
    {
      label: "Housing Savings",
      value: "40-50%",
      description: "Lower than SD prices",
    },
    {
      label: "State Income Tax",
      value: "0% vs 13.3%",
      description: "Massive tax savings",
    },
    {
      label: "Property Tax",
      value: "0.84% vs 1.25%",
      description: "Lower property taxes",
    },
    {
      label: "Cost of Living",
      value: "25% lower",
      description: "Significantly more affordable",
    },
    {
      label: "Traffic",
      value: "Minimal",
      description: "No more SD congestion",
    },
  ];

  // San Diego vs Las Vegas comparison data
  const sdVegasComparison = [
    {
      category: "Median Home Price",
      originCity: "$900,000",
      lasVegas: "$450,000",
      difference: "better" as const,
      description: "50%+ savings on housing",
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
      originCity: "7.75%",
      lasVegas: "8.38%",
      difference: "worse" as const,
      description: "Slightly higher sales tax",
    },
    {
      category: "Traffic Congestion",
      originCity: "Moderate",
      lasVegas: "Minimal",
      difference: "better" as const,
      description: "Much less traffic",
    },
    {
      category: "Housing Space",
      originCity: "Limited",
      lasVegas: "Spacious",
      difference: "better" as const,
      description: "More square footage",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Relocating From", href: "/relocating-from" },
          { label: "San Diego", href: "/relocating-from/san-diego" },
        ]}
      />

      {/* Hero Section */}
      <PageHero image="fromSanDiego">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              San Diego → Las Vegas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving from San Diego to Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your
              transition seamless. We understand the San Diego lifestyle and
              will help you find your perfect Las Vegas home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                View Las Vegas Areas
              </button>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Quick Facts Section */}
      <QuickFacts
        title="San Diego to Las Vegas: Key Facts"
        facts={sdToVegasFacts}
        className="py-16"
      />

      {/* Why Choose Las Vegas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Las Vegas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of living in Las Vegas compared to San
              Diego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Lower Cost of Living
              </h3>
              <p className="text-gray-600 text-center">
                Housing costs are significantly lower than San Diego, and no
                state income tax means more money in your pocket.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                More Space
              </h3>
              <p className="text-gray-600 text-center">
                Get more square footage for your money. Las Vegas offers
                spacious homes and yards compared to San Diego.
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
                Enjoy 300+ days of sunshine annually. Say goodbye to San Diego's
                marine layer and hello to year-round outdoor activities.
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
                McCarran International Airport offers direct flights to San
                Diego and major cities worldwide.
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
                Nevada's business-friendly environment with no corporate income
                tax.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mountain className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Outdoor Recreation
              </h3>
              <p className="text-gray-600 text-center">
                Access to Red Rock Canyon, Mount Charleston, and Lake Mead for
                hiking and outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Section */}
      <ComparisonTable
        title="San Diego vs. Las Vegas Comparison"
        originCity="San Diego"
        rows={sdVegasComparison}
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
              We handle every detail of your move from San Diego to Las Vegas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Discover properties in Las Vegas that offer better value than San
              Diego
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
            {/* San Diego-Style Homes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                San Diego-Style Homes
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
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
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
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
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
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
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

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions: San Diego to Las Vegas Relocation"
        faqs={sdRelocationFAQs}
        className="py-16"
      />

      {/* Contact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your San Diego to Vegas Journey?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for a personalized consultation about
              your relocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-200" />
                  <a href="tel:+17027077273" className="hover:underline">
                    (702) 707-7273
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-green-200" />
                  <span>DrJan@LasVegasRelocationServices.com</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-green-200" />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">
                  Why Choose Dr. Jan Duffy?
                </h4>
                <ul className="space-y-2 text-green-100">
                  <li>• 15+ years of Las Vegas real estate experience</li>
                  <li>• Berkshire Hathaway expertise and resources</li>
                  <li>• Personal attention to every client</li>
                  <li>• Deep knowledge of San Diego to Vegas relocation</li>
                  <li>• Ongoing support after your move</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">
                Free Consultation Request
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor={fullNameId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id={fullNameId}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor={emailId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor={neighborhoodId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Current San Diego Neighborhood
                  </label>
                  <input
                    id={neighborhoodId}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., La Jolla, Del Mar, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor={moveDateId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Target Move Date
                  </label>
                  <input
                    id={moveDateId}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    aria-label="Target move date"
                    title="Select your target move date"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for San Diego Relocation Page */}
      <SchemaMarkup
        type="howTo"
        data={{
          name: "How to Relocate from San Diego to Las Vegas",
          description:
            "Complete guide for moving from San Diego to Las Vegas with expert real estate guidance and relocation services.",
          steps: [
            {
              "@type": "HowToStep",
              name: "Initial Consultation",
              text: "Schedule a consultation with Dr. Jan Duffy to discuss your San Diego to Las Vegas relocation needs and timeline",
            },
            {
              "@type": "HowToStep",
              name: "Area Research",
              text: "Research Las Vegas neighborhoods that match your lifestyle and budget, comparing them to San Diego areas",
            },
            {
              "@type": "HowToStep",
              name: "Property Search",
              text: "Find and view properties in Las Vegas that offer better value than San Diego",
            },
            {
              "@type": "HowToStep",
              name: "Settlement Support",
              text: "Get assistance with settling into your new Las Vegas home with local connections and ongoing support",
            },
          ],
        }}
      />

      <SchemaMarkup
        type="place"
        data={{
          name: "San Diego",
          description:
            "San Diego, California - Coastal city with high cost of living and marine climate",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.7157,
            longitude: -117.1611,
          },
        }}
      />
    </div>
  );
}
