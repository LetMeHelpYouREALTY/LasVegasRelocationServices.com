"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Building,
  Calendar,
  CheckCircle,
  DollarSign,
  Globe,
  Phone,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";

const serviceFeatures = [
  {
    icon: Building,
    title: "Business Relocation Planning",
    description:
      "Comprehensive strategy development for your entire business move",
    benefits: ["Minimize downtime", "Reduce costs", "Maintain productivity"],
  },
  {
    icon: Users,
    title: "Employee Relocation Support",
    description:
      "Full-service support for relocating employees and their families",
    benefits: [
      "Housing assistance",
      "School district guidance",
      "Community integration",
    ],
  },
  {
    icon: Globe,
    title: "Vendor & Service Coordination",
    description:
      "Coordinate all moving services and local vendor relationships",
    benefits: [
      "Single point of contact",
      "Quality assurance",
      "Cost optimization",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Comprehensive insurance and liability protection for your move",
    benefits: ["Full coverage", "Compliance assurance", "Peace of mind"],
  },
];

const corporatePackages = [
  {
    name: "Essential Corporate",
    price: "Starting at $2,500",
    description: "Basic corporate relocation support for small businesses",
    features: [
      "Relocation planning consultation",
      "Vendor recommendations",
      "Basic employee support",
      "Move coordination",
      "Post-move follow-up",
    ],
    bestFor: "Small businesses (1-10 employees)",
    cta: "Get Quote",
  },
  {
    name: "Professional Corporate",
    price: "Starting at $5,000",
    description: "Comprehensive relocation services for growing companies",
    features: [
      "Full relocation management",
      "Employee relocation packages",
      "Housing assistance",
      "School district analysis",
      "Community integration support",
      "Ongoing support",
    ],
    bestFor: "Medium businesses (10-50 employees)",
    cta: "Get Quote",
  },
  {
    name: "Enterprise Corporate",
    price: "Custom Pricing",
    description: "Full-service enterprise relocation with dedicated support",
    features: [
      "Dedicated relocation manager",
      "Custom employee packages",
      "Luxury housing options",
      "Executive relocation services",
      "Cultural integration programs",
      "24/7 support hotline",
    ],
    bestFor: "Large corporations (50+ employees)",
    cta: "Contact Sales",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description:
      "Minimize downtime and maintain business operations during relocation",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Reduce relocation costs through expert planning and vendor management",
  },
  {
    icon: Users,
    title: "Employee Retention",
    description:
      "Improve employee satisfaction and retention through smooth transitions",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description:
      "Comprehensive insurance and compliance management for your move",
  },
];

export default function AnimatedCorporateRelocationContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="corporateRelocation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Corporate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Relocation Services
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional corporate relocation services designed for
                businesses. We help you minimize downtime, reduce costs, and
                ensure a smooth transition for your entire organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a href="tel:+17027077273"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </motion.a>
                <motion.a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Showing
                </motion.a>
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
              Complete Corporate Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to post-move support, we provide
              comprehensive corporate relocation services that minimize
              disruption to your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Corporate Relocation Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your business size and
              relocation needs. All packages include our expert guidance and
              support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {pkg.price}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>

                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Corporate Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of professional corporate relocation
              expertise that keeps your business running smoothly during
              transitions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Corporate Relocation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your business relocation needs and create a
              customized plan that minimizes disruption and maximizes success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="tel:+17027077273"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </motion.a>
              <motion.a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2 justify-center"
              >
                <Calendar className="w-5 h-5" />
                Book a Showing
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
