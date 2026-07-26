"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Building,
  Calculator,
  Calendar,
  CheckCircle,
  DollarSign,
  Home,
  Phone,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "@/components/motion";

const investmentServices = [
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Comprehensive Las Vegas real estate market research",
    benefits: [
      "ROI projections",
      "Market trends",
      "Growth potential",
      "Risk assessment",
    ],
  },
  {
    icon: Home,
    title: "Property Sourcing",
    description: "Exclusive access to off-market investment opportunities",
    benefits: [
      "Pre-foreclosure deals",
      "Wholesale properties",
      "New construction",
      "Fixer-uppers",
    ],
  },
  {
    icon: Calculator,
    title: "Investment Analysis",
    description: "Detailed financial modeling and cash flow analysis",
    benefits: [
      "Cash flow projections",
      "Cap rate analysis",
      "ROI calculations",
      "Tax implications",
    ],
  },
  {
    icon: Building,
    title: "Portfolio Management",
    description: "Ongoing management and optimization of investment properties",
    benefits: [
      "Tenant screening",
      "Property management",
      "Maintenance coordination",
      "Performance tracking",
    ],
  },
];

const investmentPackages = [
  {
    name: "Starter Investor",
    price: "Starting at $5,000",
    description: "Perfect for first-time real estate investors",
    features: [
      "Market analysis report",
      "Property search assistance",
      "Basic financial modeling",
      "Closing support",
      "30-day follow-up",
    ],
    bestFor: "First-time investors",
    cta: "Get Started",
  },
  {
    name: "Active Investor",
    price: "Starting at $15,000",
    description: "Comprehensive service for experienced investors",
    features: [
      "All Starter features",
      "Portfolio optimization",
      "Advanced analytics",
      "Property management setup",
      "Ongoing support",
    ],
    bestFor: "Experienced investors",
    cta: "Get Started",
  },
  {
    name: "Portfolio Builder",
    price: "Starting at $25,000",
    description: "Full-service investment portfolio development",
    features: [
      "All Active features",
      "Multi-property acquisition",
      "Tax strategy planning",
      "Exit strategy planning",
      "Dedicated manager",
    ],
    bestFor: "Portfolio builders",
    cta: "Contact Sales",
  },
];

const investmentBenefits = [
  {
    icon: DollarSign,
    title: "High ROI Potential",
    description:
      "Las Vegas offers some of the best investment returns in the nation",
  },
  {
    icon: TrendingUp,
    title: "Market Growth",
    description: "Consistent appreciation and rental income growth",
  },
  {
    icon: Shield,
    title: "Tax Advantages",
    description: "Nevada's business-friendly tax environment",
  },
  {
    icon: Target,
    title: "Diversification",
    description: "Add real estate to your investment portfolio",
  },
];

export default function InvestmentPropertiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="investmentProperties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Investment Property Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Investment
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-green-200">
                  Properties
                </span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Build wealth through Las Vegas real estate investments. Our
                expert team helps you identify high-ROI opportunities and manage
                your portfolio for maximum returns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+17027077273"
                  className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </a>
                <a
                  href="https://calendly.com/drjanduffy/showing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-900 transition-colors flex items-center gap-2"
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
                <TrendingUp className="w-32 h-32 text-white/80" />
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
              Investment Property Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to maximize your real estate
              investment returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-emerald-600" />
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
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
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
              Choose Your Investment Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect investment service level for your goals and
              experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-emerald-600 mb-4">
                  {pkg.price}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>

                <button
                  type="button"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Invest in Las Vegas Real Estate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that make Las Vegas a top investment
              destination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Investment Portfolio?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Start building wealth through Las Vegas real estate investments
              today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027077273"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </a>
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors flex items-center gap-2"
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
