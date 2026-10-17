'use client';

import { Award, Calendar, CheckCircle, Crown, Home, Phone, Shield } from 'lucide-react';
import { motion } from '@/components/motion';
import PageHero from '@/components/sections/PageHero';

const luxuryServices = [
  {
    icon: Home,
    title: 'Luxury home search',
    description: 'Houses and high-rises in Las Vegas and Henderson.',
    benefits: ['Purchase or lease', 'Private showings', 'The areas you name'],
  },
  {
    icon: Crown,
    title: 'Buyer representation',
    description: 'She writes the offer on the home you choose.',
    benefits: ['One realtor', 'Berkshire Hathaway HomeServices', 'Nevada license'],
  },
  {
    icon: Shield,
    title: 'A quiet search',
    description: 'Showings stay between you and the listing.',
    benefits: ['Private appointments', 'No published search', 'Direct line'],
  },
  {
    icon: Award,
    title: 'Nevada listing',
    description: 'If the home you are leaving is in Nevada, she can list it.',
    benefits: ['Seller representation', 'Nevada only', 'Call to start'],
  },
];

const luxuryBenefits = [
  {
    icon: Home,
    title: 'The house',
    description: 'She shows the home. She does not book travel or drive the truck.',
  },
  {
    icon: Crown,
    title: 'The contract',
    description: 'Purchase, lease, or a Nevada listing. One brokerage.',
  },
  {
    icon: Shield,
    title: 'Private showings',
    description: 'Appointments are scheduled with you. The search is not a public post.',
  },
  {
    icon: Award,
    title: 'The areas',
    description: 'Summerlin, Henderson, Anthem, Seven Hills, and Southern Highlands.',
  },
];

export default function LuxuryRelocationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="luxuryRelocation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
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
                Luxury Relocation in Las Vegas
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Dr. Jan Duffy is the realtor for high-net-worth buyers moving to Las Vegas and
                Henderson. She shows the house. She does not book the jet or drive the truck.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17027077273"
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
              High-net-worth relocation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              She shows the house and represents you on the purchase, the lease, or the Nevada
              listing. She does not sell a moving package.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
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

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What a luxury relocation includes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dr. Jan Duffy shows the house. Berkshire Hathaway HomeServices Nevada Properties is the
            brokerage. She does not book travel, handle fine art, or invoice a moving package. Call
            (702) 707-7273.
          </p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Luxury Relocation?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Call to tour a Las Vegas or Henderson home. She is the realtor for the purchase, the
              lease, or the Nevada listing.
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
