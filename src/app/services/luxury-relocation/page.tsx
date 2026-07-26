"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Award,
  Calendar,
  CheckCircle,
  Crown,
  Home,
  Phone,
  Plane,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "@/components/motion";

const luxuryServices = [
  {
    icon: Crown,
    title: "Concierge Relocation",
    description: "White-glove service with personal relocation managers",
    benefits: [
      "Dedicated relocation specialist",
      "Priority scheduling",
      "VIP treatment",
      "24/7 support",
    ],
  },
  {
    icon: Home,
    title: "Luxury Property Search",
    description: "Exclusive access to premium Las Vegas properties",
    benefits: [
      "Off-market listings",
      "Custom property tours",
      "Luxury neighborhood access",
      "Investment analysis",
    ],
  },
  {
    icon: Plane,
    title: "Private Travel Coordination",
    description: "First-class travel arrangements and logistics",
    benefits: [
      "Private jet options",
      "Luxury car service",
      "Hotel concierge",
      "Travel insurance",
    ],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Complete confidentiality and security measures",
    benefits: [
      "NDA agreements",
      "Secure communications",
      "Private viewings",
      "Discrete handling",
    ],
  },
];

const luxuryPackages = [
  {
    name: "Elite Package",
    price: "Starting at $25,000",
    description: "Premium relocation service for discerning clients",
    features: [
      "Personal relocation manager",
      "Luxury property search",
      "Private travel coordination",
      "Settling-in services",
      "Ongoing support",
    ],
    bestFor: "High-net-worth individuals",
    cta: "Contact Sales",
  },
  {
    name: "Royal Package",
    price: "Starting at $50,000",
    description: "Ultimate luxury relocation experience",
    features: [
      "All Elite features",
      "Private jet coordination",
      "Luxury car collection",
      "Fine art handling",
      "Celebrity-level privacy",
      "24/7 concierge",
    ],
    bestFor: "Celebrities and executives",
    cta: "Contact Sales",
  },
  {
    name: "Corporate Elite",
    price: "Starting at $100,000",
    description: "Executive relocation for C-suite professionals",
    features: [
      "All Royal features",
      "Corporate housing",
      "Team relocation",
      "Business setup",
      "Networking events",
      "Ongoing support",
    ],
    bestFor: "Corporate executives",
    cta: "Contact Sales",
  },
];

const luxuryBenefits = [
  {
    icon: Crown,
    title: "Exclusive Access",
    description:
      "Access to properties and services not available to the general public",
  },
  {
    icon: Star,
    title: "Celebrity Treatment",
    description:
      "VIP service level with priority scheduling and personal attention",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description:
      "Absolute confidentiality and discretion throughout the process",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Highest standards of service and attention to detail",
  },
];

export default function LuxuryRelocationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="luxuryRelocation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500 rounded-full text-sm font-medium mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Luxury Relocation Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Luxury Relocation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
                  Services
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Experience the epitome of luxury relocation with our exclusive
                services designed for discerning clients. From private jet
                coordination to VIP property access, we deliver excellence at
                every step.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+17027077273"
                  className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </a>
                <a
                  href="https://calendly.com/drjanduffy/showing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
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
                <Crown className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </PageHero>

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
              Luxury Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the highest level of service with our exclusive luxury
              relocation packages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryServices.map((service, index) => (
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

      {/* Luxury Packages */}
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
              Choose Your Luxury Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect luxury relocation experience for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {luxuryPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-colors"
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

      {/* Luxury Benefits */}
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
              Why Choose Our Luxury Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that true luxury service makes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryBenefits.map((benefit, index) => (
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

      {/* Luxury Property Search Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Luxury Property Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exclusive luxury properties in Las Vegas's most
              prestigious neighborhoods
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
              property-types="SFR,OTHER"
              price-min="1000000"
              price-max="2000000"
            ></realscout-office-listings>
          </motion.div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ultra-Luxury Homes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ultra-Luxury Homes
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_HIGH"
                listing-status="For Sale"
                property-types="SFR"
                price-min="1500000"
                price-max="3000000"
              ></realscout-office-listings>
            </motion.div>

            {/* Premium Estates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Estates
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_HIGH"
                listing-status="For Sale"
                property-types="SFR,OTHER"
                price-min="800000"
                price-max="1500000"
              ></realscout-office-listings>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Luxury Relocation?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Experience the ultimate in relocation services with our exclusive
              luxury packages
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027077273"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </a>
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Showing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
