"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Building,
  Calendar,
  CheckCircle,
  DollarSign,
  FileText,
  Globe,
  Home,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";
import { FAQSection } from "@/components/seo";
import {
  AGENT_NAME,
  BROKERAGE,
  CALENDLY_SHOWING_URL,
  LICENSE_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/business";

const internationalFAQs = [
  {
    question: "Who should I call for international relocation to Las Vegas?",
    answer: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}. Dr. Duffy is a Nevada-licensed REALTOR® (${LICENSE_LABEL}) with ${BROKERAGE} and coordinates housing search, temporary lodging, school enrollment by district and school name, utility setup, and settling-in support for households and businesses moving to Las Vegas from abroad.`,
  },
  {
    question: "Does Dr. Jan Duffy handle visas and immigration paperwork?",
    answer:
      "Dr. Duffy does not practice immigration law. She provides relocation coordination and can refer you to licensed immigration attorneys and document preparers when visa or status questions arise. Housing, logistics, and local orientation stay under her relocation practice.",
  },
  {
    question:
      "How far in advance should I start an international move to Las Vegas?",
    answer:
      "Most international moves need 90–180 days of lead time: temporary housing first, then a purchase or long-term lease after arrival. Corporate transfers with a fixed start date often lock temporary lodging 60–90 days out and schedule property tours for the first week on the ground.",
  },
  {
    question:
      "Which Las Vegas areas do international relocators request most often?",
    answer:
      "Summerlin, Henderson, and Green Valley are the most requested for longer stays because they offer newer construction, dedicated parks and recreation programs, and roughly 20–30 minute drives to Harry Reid International Airport. Strip-adjacent high-rises are more common for executives on shorter assignments.",
  },
  {
    question: "What settling-in tasks do you cover after arrival?",
    answer:
      "Typical settling-in work includes temporary-to-permanent housing transition, utility setup, Nevada DMV orientation, banking introductions, and school enrollment coordination using district and school names. Ongoing local orientation is available for the first 30–90 days after move-in.",
  },
];

const internationalServices = [
  {
    icon: FileText,
    title: "Visa & Immigration Coordination",
    description:
      "Timeline planning and referrals to licensed immigration attorneys",
    benefits: [
      "Attorney referrals",
      "Document checklist support",
      "Timeline planning",
      "Status-aware housing search",
    ],
  },
  {
    icon: Building,
    title: "Corporate Relocation",
    description: "Support for international businesses expanding to Las Vegas",
    benefits: [
      "Business registration",
      "Office space",
      "Local partnerships",
      "Cultural integration",
    ],
  },
  {
    icon: Home,
    title: "Housing Solutions",
    description: "International-friendly housing options and neighborhoods",
    benefits: [
      "Temporary housing",
      "Long-term rentals",
      "Home purchases",
      "Neighborhood guidance",
    ],
  },
  {
    icon: Users,
    title: "Cultural Integration",
    description:
      "Orientation to local customs, services, and day-to-day life in Las Vegas",
    benefits: [
      "Cultural orientation",
      "Language support referrals",
      "Community connections",
      "Local customs overview",
    ],
  },
];

const internationalPackages = [
  {
    name: "Essential International",
    price: "Starting at $3,500",
    description:
      "Basic international relocation support for individuals and small households",
    features: [
      "Visa consultation referrals",
      "Housing assistance",
      "Basic cultural orientation",
      "Airport pickup and welcome",
      "Essential services setup",
    ],
    bestFor: "Individual professionals and small households",
    cta: "Get Quote",
  },
  {
    name: "Complete International",
    price: "Starting at $6,500",
    description: "Comprehensive international relocation with full support",
    features: [
      "Full visa and immigration support",
      "Comprehensive housing search",
      "School enrollment assistance",
      "Cultural integration program",
      "Ongoing support network",
      "Legal and financial guidance",
    ],
    bestFor: "Families with children and professionals",
    cta: "Get Quote",
  },
  {
    name: "Premium International",
    price: "Starting at $10,000",
    description: "Luxury international relocation with concierge service",
    features: [
      "Dedicated relocation manager",
      "Premium housing options",
      "Private school assistance",
      "Concierge services",
      "Cultural programs",
      "24/7 international support",
      "Legal and financial planning",
    ],
    bestFor: "Executives and high-net-worth individuals",
    cta: "Contact Sales",
  },
];

const internationalBenefits = [
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Experience with clients from over 30 countries",
  },
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "Ensuring all immigration and legal requirements are met",
  },
  {
    icon: DollarSign,
    title: "Financial Guidance",
    description: "Help with banking, taxes, and financial planning",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description: "Deep understanding of Las Vegas for international residents",
  },
];

export default function InternationalRelocationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="internationalRelocation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                International Relocation Services to Las Vegas
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                {AGENT_NAME} coordinates housing, logistics, and settling-in
                support for people and businesses moving to Las Vegas from
                abroad — with referrals to licensed immigration counsel when
                visa questions arise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={CALENDLY_SHOWING_URL}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  Book a Showing
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </PageHero>

      {/* Answer-first block for indexing / AEO */}
      <section className="py-16 bg-white" aria-labelledby="intl-who-to-call">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="intl-who-to-call"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Who Handles International Relocation to Las Vegas?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>{AGENT_NAME}</strong> at Las Vegas Relocation Services (
            {BROKERAGE}, {LICENSE_LABEL}) is the person to call when you are
            relocating to Las Vegas from another country. One contact covers
            temporary and long-term housing search, move logistics coordination,
            school enrollment by district and school name, utility setup, and
            the first 30–90 days of settling-in support after arrival.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Immigration filings stay with licensed immigration counsel — Dr.
            Duffy refers those specialists and keeps the housing and local
            transition on track. Call{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-purple-800 font-semibold underline"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            to start the timeline.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive International Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From housing search and logistics to cultural orientation, we
              provide complete support for your international relocation to Las
              Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internationalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your International Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible international relocation packages designed to meet your
              needs and ensure a successful transition to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {internationalPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  {pkg.price}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>

                <button
                  type="button"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our International Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that international relocation expertise
              makes for your move to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internationalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Property Search Section */}
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
              International Property Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover premium properties in Las Vegas perfect for international
              buyers and investors
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
              property-types="SFR,MF,OTHER"
              price-min="500000"
              price-max="1000000"
            ></realscout-office-listings>
          </motion.div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Premium Homes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Homes
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_HIGH"
                listing-status="For Sale"
                property-types="SFR"
                price-min="700000"
                price-max="1200000"
              ></realscout-office-listings>
            </motion.div>

            {/* Investment Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Investment Opportunities
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_LOW"
                listing-status="For Sale"
                property-types="MF,SFR"
                price-min="350000"
                price-max="700000"
              ></realscout-office-listings>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ with FAQPage schema */}
      <FAQSection
        title="International Relocation to Las Vegas FAQs"
        faqs={internationalFAQs}
        className="py-16"
      />

      {/* CTA Section */}
      <section
        id="consultation"
        className="py-20 bg-gradient-to-r from-purple-800 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your International Journey to Las Vegas?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Call {AGENT_NAME} at {PHONE_DISPLAY} for a free consultation on
              housing, logistics, and settling-in support for your move to Las
              Vegas from abroad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={CALENDLY_SHOWING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center gap-2 justify-center"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Book a Showing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
