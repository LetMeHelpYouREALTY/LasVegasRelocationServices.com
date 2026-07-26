'use client';

import { Calendar, CheckCircle, Home, MapPin, Truck, Users } from 'lucide-react';
import { motion } from '@/components/motion';

const processSteps = [
  {
    icon: MapPin,
    step: '01',
    title: 'Initial Consultation',
    description:
      "Free consultation to understand your relocation needs, timeline, and budget. We'll create a personalized moving plan.",
    duration: '1-2 hours',
    features: ['Needs assessment', 'Budget planning', 'Timeline creation'],
  },
  {
    icon: Home,
    step: '02',
    title: 'Home Finding & Real Estate',
    description:
      'Our local experts help you find the perfect home in your target area, including neighborhood analysis and school research.',
    duration: '2-4 weeks',
    features: ['Property search', 'Neighborhood tours', 'School district analysis'],
  },
  {
    icon: Truck,
    step: '03',
    title: 'Moving Coordination',
    description:
      'We coordinate every aspect of your move, from packing to transportation, ensuring a smooth transition.',
    duration: '1-2 weeks',
    features: ['Packing services', 'Transportation', 'Insurance coverage'],
  },
  {
    icon: Users,
    step: '04',
    title: 'Settling In Support',
    description:
      'Get help with utilities, local services, and community integration to make your new location feel like home.',
    duration: 'Ongoing',
    features: ['Utility setup', 'Local services', 'Community integration'],
  },
  {
    icon: CheckCircle,
    step: '05',
    title: 'Post-Move Follow-up',
    description:
      'We stay in touch to ensure your satisfaction and provide ongoing support for any relocation needs.',
    duration: 'Lifetime',
    features: ['Satisfaction check', 'Ongoing support', 'Future referrals'],
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
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
            Your Stress-Free Relocation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial planning to settling into your new home, we handle every detail with
            precision and care. Our proven 5-step process ensures a seamless transition.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-green-200 transform -translate-x-1/2" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 text-center lg:text-left ${
                    index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    {/* Duration */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-blue-600">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">Duration: {step.duration}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6">
              Book your free consultation today and discover how we can make your relocation
              stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Showing</a>
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
              >
                Call Now: (702) 707-7273
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
