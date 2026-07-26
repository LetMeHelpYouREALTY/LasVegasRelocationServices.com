"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Calendar,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Package,
  Phone,
  Plane,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";

const movingServices = [
  {
    icon: Truck,
    title: "Professional Moving",
    description: "Full-service moving with experienced professionals",
    benefits: [
      "Packing services",
      "Loading & unloading",
      "Furniture protection",
      "Specialty item handling",
    ],
  },
  {
    icon: Package,
    title: "Packing & Crating",
    description: "Expert packing for fragile and valuable items",
    benefits: [
      "Custom crating",
      "Fragile item protection",
      "Inventory management",
      "Labeling system",
    ],
  },
  {
    icon: Car,
    title: "Vehicle Transportation",
    description: "Safe and reliable vehicle shipping services",
    benefits: [
      "Enclosed transport",
      "Insurance coverage",
      "Door-to-door service",
      "Tracking updates",
    ],
  },
  {
    icon: Plane,
    title: "Air Freight Services",
    description: "Fast air transportation for urgent moves",
    benefits: [
      "Express shipping",
      "International routes",
      "Customs clearance",
      "Priority handling",
    ],
  },
];

const transportationPackages = [
  {
    name: "Basic Moving",
    price: "Starting at $2,500",
    description: "Essential moving services for local and regional relocations",
    features: [
      "Professional movers",
      "Basic packing materials",
      "Loading and unloading",
      "Furniture protection",
      "Local delivery",
      "Basic insurance",
    ],
    bestFor: "Local moves and small households",
    cta: "Get Quote",
  },
  {
    name: "Complete Moving",
    price: "Starting at $5,000",
    description: "Comprehensive moving services with full support",
    features: [
      "Full packing service",
      "Professional movers",
      "Specialty item handling",
      "Furniture disassembly",
      "Long-distance transport",
      "Full insurance coverage",
      "Storage options",
    ],
    bestFor: "Long-distance moves and families",
    cta: "Get Quote",
  },
  {
    name: "Premium Moving",
    price: "Starting at $8,000",
    description: "Luxury moving with white-glove service",
    features: [
      "Dedicated move coordinator",
      "Premium packing materials",
      "White-glove service",
      "Climate-controlled transport",
      "Full unpacking service",
      "Premium insurance",
      "Storage solutions",
      "24/7 support",
    ],
    bestFor: "High-value homes and luxury clients",
    cta: "Contact Sales",
  },
];

const transportationBenefits = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for your belongings during transport",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable scheduling with real-time tracking updates",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals handle your move with care",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Services available across the United States",
  },
];

export default function MovingTransportationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="movingTransportation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Moving &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-red-200">
                  Transportation
                </span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Professional moving and transportation services for your
                relocation to Las Vegas. From local moves to cross-country
                relocations, we handle every detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="bg-white text-orange-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </button>
                <button
                  type="button"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-900 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Free Quote
                </button>
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
              Complete Moving & Transportation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From packing to delivery, we provide comprehensive moving services
              with professional care and attention to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {movingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-orange-600" />
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
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Packages */}
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
              Choose Your Moving Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible moving packages designed to meet your needs and ensure a
              smooth relocation experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportationPackages.map((pkg, index) => (
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
                <div className="text-3xl font-bold text-orange-600 mb-4">
                  {pkg.price}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>

                <button
                  type="button"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Benefits */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Moving Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional moving expertise makes
              for your relocation to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Move to Las Vegas?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let's get your relocation started. Schedule your free consultation
              and discover how we can make your move smooth and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors flex items-center gap-2"
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
