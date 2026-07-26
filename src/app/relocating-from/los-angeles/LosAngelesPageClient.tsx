"use client";

import CalendlyBooking from '@/components/shared/CalendlyBooking';
import PageHero from "@/components/sections/PageHero";
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
  Star,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";
import {
  Breadcrumbs,
  ComparisonTable,
  FAQSection,
  QuickFacts,
  SchemaMarkup,
} from "@/components/seo";

export default function LosAngelesPageClient() {
          
  // FAQ data for AI search optimization
  const laRelocationFAQs = [
    {
      question:
        "What are the best neighborhoods in Las Vegas for families relocating from Los Angeles?",
      answer:
        "Summerlin, Henderson, and Green Valley are excellent choices for LA families. Summerlin offers top-rated schools, parks, and shopping centers similar to LA's upscale areas. Henderson provides a safe, family-oriented environment with beautiful parks and excellent schools. Green Valley features mature trees and established amenities. All three areas offer spacious homes, great schools, and family-friendly activities at a fraction of LA housing costs.",
    },
    {
      question: "How much does it cost to move from Los Angeles to Las Vegas?",
      answer:
        "Moving costs from LA to Las Vegas typically range from $2,000 to $5,000 depending on household size and moving services. This includes professional movers, packing services, and transportation. The 270-mile journey takes about 4-5 hours by car. Las Vegas offers significant long-term savings with no state income tax and housing costs that are 40-50% lower than LA, making the move financially beneficial.",
    },
    {
      question:
        "What's the job market like in Las Vegas compared to Los Angeles?",
      answer:
        "Las Vegas has a diverse job market with strong opportunities in hospitality, gaming, technology, healthcare, and construction. The city is experiencing growth in tech startups and remote work opportunities. While salaries may be slightly lower than LA, the cost of living is significantly lower, resulting in better overall financial outcomes. Many LA professionals find they can maintain similar lifestyles with much lower expenses in Las Vegas.",
    },
    {
      question:
        "How do I find the right real estate agent for my LA to Las Vegas relocation?",
      answer:
        "Look for agents with relocation expertise, local market knowledge, and proven track records. Dr. Jan Duffy has 15+ years of Las Vegas real estate experience and specializes in helping families relocate from California. She provides comprehensive services including area research, property search, and settlement support. Her deep understanding of both LA and Las Vegas markets makes her ideal for this transition.",
    },
    {
      question:
        "What are the tax benefits of moving from Los Angeles to Las Vegas?",
      answer:
        "Nevada offers significant tax advantages over California: no state income tax (vs. 13.3% in CA), no state corporate tax, and no inheritance tax. Property taxes are also lower (0.84% vs. 1.25% in CA). This can result in thousands of dollars in annual savings. Combined with lower housing costs, the financial benefits of Las Vegas relocation are substantial for LA residents.",
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
      label: "Distance",
      value: "270 miles",
      description: "4-5 hour drive from LA",
    },
    {
      label: "Housing Savings",
      value: "40-50%",
      description: "Lower than LA prices",
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
      description: "No more LA gridlock",
    },
  ];

  // LA vs Las Vegas comparison data
  const laVegasComparison = [
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
      originCity: "9.5%",
      lasVegas: "8.38%",
      difference: "better" as const,
      description: "Lower sales tax",
    },
    {
      category: "Traffic Congestion",
      originCity: "Severe",
      lasVegas: "Minimal",
      difference: "better" as const,
      description: "No more gridlock",
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
          { label: "Los Angeles", href: "/relocating-from/los-angeles" },
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
              Moving from LA to Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your
              transition seamless. We know both cities intimately and will guide
              you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Showing</a>
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
      <QuickFacts
        title="LA to Las Vegas: Key Facts"
        facts={laToVegasFacts}
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
              Discover the advantages of living in Las Vegas compared to Los
              Angeles
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
                Housing costs are significantly lower, and no state income tax
                means more money in your pocket.
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
                spacious homes and yards.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Car className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Less Traffic
              </h3>
              <p className="text-gray-600 text-center">
                Say goodbye to LA traffic jams. Las Vegas has much more
                manageable commute times.
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
                McCarran International Airport offers direct flights to LA and
                major cities worldwide.
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
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Growing Community
              </h3>
              <p className="text-gray-600 text-center">
                Join a rapidly growing, diverse community with excellent
                amenities and entertainment.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your needs, timeline, and preferences for your new
                Las Vegas home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Discover properties in Las Vegas that offer better value than Los
              Angeles
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
            {/* LA-Style Homes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                LA-Style Homes
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
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
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
              Contact Dr. Jan Duffy today for a personalized consultation about
              your relocation
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
                <h4 className="text-lg font-semibold mb-4">
                  Why Choose Dr. Jan Duffy?
                </h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• 15+ years of Las Vegas real estate experience</li>
                  <li>• Berkshire Hathaway expertise and resources</li>
                  <li>• Personal attention to every client</li>
                  <li>• Deep knowledge of LA to Vegas relocation</li>
                  <li>• Ongoing support after your move</li>
                </ul>
              </div>
            </div>

            <CalendlyBooking title="Book a Showing" description="Schedule a free consultation or showing with Dr. Jan Duffy." />
          </div>
        </div>
      </section>

      {/* Schema Markup for LA Relocation Page */}
      <SchemaMarkup
        type="howTo"
        data={{
          name: "How to Relocate from Los Angeles to Las Vegas",
          description:
            "Complete guide for moving from Los Angeles to Las Vegas with expert real estate guidance and relocation services.",
          steps: [
            {
              "@type": "HowToStep",
              name: "Initial Consultation",
              text: "Schedule a consultation with Dr. Jan Duffy to discuss your LA to Las Vegas relocation needs and timeline",
            },
            {
              "@type": "HowToStep",
              name: "Area Research",
              text: "Research Las Vegas neighborhoods that match your lifestyle and budget, comparing them to LA areas",
            },
            {
              "@type": "HowToStep",
              name: "Property Search",
              text: "Find and view properties in Las Vegas that offer better value than Los Angeles",
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
          name: "Los Angeles",
          description:
            "Los Angeles, California - Major US city with high cost of living and traffic congestion",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 34.0522,
            longitude: -118.2437,
          },
        }}
      />
    </div>
  );
}
