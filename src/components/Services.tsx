'use client';

import { ArrowRight, Award, Building, CheckCircle, Home, Shield, Users } from 'lucide-react';
import { motion } from '@/components/motion';

const services = [
  {
    icon: Home,
    title: 'Home Buying & Renting Services',
    description: 'Comprehensive assistance for finding your perfect home in Las Vegas.',
    features: [
      'Las Vegas area overviews and neighborhood tours',
      'Temporary housing coordination',
      'Home finding assistance from certified specialists',
      'Rental property assistance',
      'International settling-in services',
    ],
    benefits: ['Local market expertise', 'Personalized home search', 'Ongoing support'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Building,
    title: 'Home Sale & Marketing Services',
    description: 'Advanced property marketing and professional broker services.',
    features: [
      'Advanced property marketing strategies',
      'Professional broker price opinions',
      'Corporate inventory management',
      'Full-service property management',
      'Maximum market exposure guaranteed',
    ],
    benefits: ['Maximum market exposure', 'Professional marketing', 'Optimal pricing'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Users,
    title: 'Specialized Relocation Support',
    description: 'Corporate and international relocation services with global reach.',
    features: [
      'Corporate and group move coordination',
      'International relocation services',
      'Affinity program partnerships',
      'Individual needs analysis',
      'Worldwide broker referral network',
    ],
    benefits: ['Global expertise', 'Corporate partnerships', 'Customized solutions'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Award,
    title: 'Complete Relocation Services',
    description: 'Full-service relocation division with over 1,300 local Las Vegas experts.',
    features: [
      'Single point of contact with Dr. Jan Duffy',
      'Personal oversight of entire process',
      'Seamless communication throughout',
      'Exceptional results guaranteed',
      'Nationally recognized team',
    ],
    benefits: ['Personal attention', 'Seamless process', 'Proven results'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: Shield,
    title: 'Corporate Relocation Services',
    description: 'Primary service provider for Las Vegas metro with BGRS partnership.',
    features: [
      'Fortune 100 company partnerships',
      'Employee relocation packages',
      'HR partnership support',
      'ROI analysis & reporting',
      'Vendor management',
      'Compliance & legal support',
    ],
    benefits: ['Reduce relocation costs', 'Minimize downtime', 'Improve retention'],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Relocation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From corporate moves to luxury relocations, we provide end-to-end services that ensure
            your transition is seamless, stress-free, and successful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.bgColor} rounded-2xl p-8 border ${service.borderColor} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2`}
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Relocation?</h3>
            <p className="text-blue-100 mb-6">
              Get a personalized quote and discover how we can make your move stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </button>
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors">Book a Showing</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
