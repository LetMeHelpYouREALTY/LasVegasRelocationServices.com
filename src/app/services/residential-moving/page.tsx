"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Calendar,
  CheckCircle,
  Heart,
  Home,
  MapPin,
  Phone,
  School,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";

const serviceFeatures = [
  {
    icon: Home,
    title: "Home Finding Services",
    description: "Expert assistance finding your perfect Las Vegas home",
    benefits: [
      "Neighborhood matching",
      "School district analysis",
      "Market insights",
    ],
  },
  {
    icon: School,
    title: "School District Guidance",
    description: "Comprehensive school information and enrollment support",
    benefits: ["District ratings", "Enrollment assistance", "School tours"],
  },
  {
    icon: Heart,
    title: "Community Integration",
    description: "Help your family feel at home in Las Vegas",
    benefits: [
      "Local connections",
      "Activity recommendations",
      "Cultural integration",
    ],
  },
  {
    icon: Truck,
    title: "Moving Coordination",
    description: "Full-service moving day coordination and support",
    benefits: [
      "Professional movers",
      "Packing services",
      "Unpacking assistance",
    ],
  },
];

const residentialPackages = [
  {
    name: "Essential Family",
    price: "Starting at $1,500",
    description: "Basic residential relocation support for families",
    features: [
      "Home finding consultation",
      "School district information",
      "Moving day coordination",
      "Basic settling-in support",
    ],
    bestFor: "Small families (1-2 children)",
    cta: "Get Quote",
  },
  {
    name: "Complete Family",
    price: "Starting at $3,000",
    description: "Comprehensive family relocation services",
    features: [
      "Full home finding service",
      "School enrollment assistance",
      "Community integration support",
      "Moving coordination",
      "Settling-in assistance",
      "Ongoing support",
    ],
    bestFor: "Growing families (2+ children)",
    cta: "Get Quote",
  },
  {
    name: "Premium Family",
    price: "Starting at $5,000",
    description: "Luxury family relocation with concierge service",
    features: [
      "Dedicated relocation manager",
      "Luxury home options",
      "Private school assistance",
      "Concierge services",
      "Cultural integration programs",
      "24/7 family support",
    ],
    bestFor: "Families seeking premium service",
    cta: "Contact Sales",
  },
];

const familyBenefits = [
  {
    icon: Users,
    title: "Family-Focused Approach",
    description: "Every decision made with your family's needs in mind",
  },
  {
    icon: School,
    title: "Education Excellence",
    description:
      "Access to top-rated school districts and educational opportunities",
  },
  {
    icon: MapPin,
    title: "Perfect Neighborhoods",
    description: "Find communities that match your lifestyle and preferences",
  },
  {
    icon: Shield,
    title: "Stress-Free Moving",
    description: "Let us handle the details while you focus on your family",
  },
];

export default function ResidentialMovingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="residentialMoving">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Family Moving
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-200">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Professional residential moving services designed for families.
                We help you find the perfect home, navigate school districts,
                and integrate into your new Las Vegas community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </button>
                <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors flex items-center gap-2"
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
              Complete Family Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From finding your dream home to settling into your new community,
              we provide comprehensive support for every step of your family's
              relocation journey.
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
                className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Packages */}
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
              Choose Your Family Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible residential moving packages designed to meet your
              family's needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {residentialPackages.map((pkg, index) => (
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
                <div className="text-3xl font-bold text-green-600 mb-4">
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
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Benefits */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Families Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that family-focused relocation expertise
              makes for your move to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your Las Vegas Home?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's start your family's journey to Las Vegas. Schedule your free
              consultation and discover how we can make your move stress-free
              and successful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center gap-2"
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
