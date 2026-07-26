"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Calendar,
  Car,
  CheckCircle,
  CreditCard,
  Heart,
  Home,
  Phone,
  School,
  Shield,
  Users,
  Wifi,
} from "lucide-react";
import { motion } from "@/components/motion";

const settlingServices = [
  {
    icon: Home,
    title: "Home Setup & Utilities",
    description: "Get your new home fully functional and comfortable",
    benefits: [
      "Utility connections",
      "Internet setup",
      "Home security",
      "Furniture arrangement",
    ],
  },
  {
    icon: School,
    title: "School & Education",
    description: "Navigate the Las Vegas education system for your children",
    benefits: [
      "School enrollment",
      "District information",
      "Extracurricular activities",
      "Tutoring resources",
    ],
  },
  {
    icon: Car,
    title: "Transportation & DMV",
    description: "Get your vehicles registered and learn local transportation",
    benefits: [
      "DMV assistance",
      "Driver's license",
      "Vehicle registration",
      "Public transit info",
    ],
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Connect with your new community and build relationships",
    benefits: [
      "Neighborhood events",
      "Local groups",
      "Cultural activities",
      "Social connections",
    ],
  },
];

const settlingPackages = [
  {
    name: "Essential Settling-In",
    price: "Starting at $800",
    description: "Basic settling-in support for individuals and families",
    features: [
      "Utility setup assistance",
      "Basic home orientation",
      "Local area introduction",
      "Essential service referrals",
      "30-day follow-up support",
    ],
    bestFor: "Individuals and small families",
    cta: "Get Started",
  },
  {
    name: "Complete Settling-In",
    price: "Starting at $1,500",
    description: "Comprehensive settling-in with ongoing support",
    features: [
      "Full utility and service setup",
      "School enrollment assistance",
      "Transportation setup",
      "Community integration support",
      "Local service connections",
      "90-day ongoing support",
    ],
    bestFor: "Families with children",
    cta: "Get Started",
  },
  {
    name: "Premium Settling-In",
    price: "Starting at $2,500",
    description: "Luxury settling-in with concierge service",
    features: [
      "Dedicated settling-in manager",
      "Premium service connections",
      "Private school assistance",
      "Concierge services",
      "Cultural integration programs",
      "6-month ongoing support",
      "24/7 assistance",
    ],
    bestFor: "Executives and luxury clients",
    cta: "Contact Sales",
  },
];

const settlingBenefits = [
  {
    icon: Heart,
    title: "Personal Touch",
    description: "One-on-one support tailored to your specific needs",
  },
  {
    icon: Shield,
    title: "Local Expertise",
    description: "Deep knowledge of Las Vegas services and resources",
  },
  {
    icon: Wifi,
    title: "Service Connections",
    description: "Direct connections to reliable local service providers",
  },
  {
    icon: CreditCard,
    title: "Cost Savings",
    description: "Help finding the best deals and avoiding hidden costs",
  },
];

export default function SettlingInPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="settlingIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Settling-In
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-200">
                  Services
                </span>
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Get fully established in your new Las Vegas home with our
                comprehensive settling-in services. We help you feel at home
                from day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="bg-white text-teal-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </button>
                <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-teal-900 transition-colors flex items-center gap-2"
                >
                Book a Showing
              </a>
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
              Complete Settling-In Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From utilities to community connections, we handle every detail to
              help you feel at home in Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {settlingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-teal-600" />
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
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Settling Packages */}
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
              Choose Your Settling-In Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible settling-in packages designed to get you comfortable and
              connected in your new Las Vegas home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {settlingPackages.map((pkg, index) => (
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
                <div className="text-3xl font-bold text-teal-600 mb-4">
                  {pkg.price}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>

                <button
                  type="button"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Settling Benefits */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Settling-In Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional settling-in support
              makes for your transition to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {settlingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-teal-600" />
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


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Feel at Home in Las Vegas?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Let's get you settled and connected in your new community.
              Schedule your free consultation and discover how we can make your
              transition smooth and enjoyable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors flex items-center gap-2"
              >
                Book a Showing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
