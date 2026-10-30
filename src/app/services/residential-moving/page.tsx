'use client';

import { CheckCircle, Home, MapPin, Phone, Shield } from 'lucide-react';
import { motion } from '@/components/motion';
import PageHero from '@/components/sections/PageHero';

const retirementSectionId = 'retirement-and-downsizing';

const serviceFeatures = [
  {
    icon: Home,
    title: 'Purchase or lease',
    description: 'She represents you on the Las Vegas or Henderson home.',
    benefits: ['Buyer representation', 'Lease search', 'Showings you schedule'],
  },
  {
    icon: MapPin,
    title: 'The area you name',
    description: 'Summerlin, Henderson, Southern Highlands, Anthem, or Inspirada.',
    benefits: ['Neighborhood guides', 'Parcel confirmation', 'One realtor'],
  },
  {
    icon: Home,
    title: 'Retirement and downsizing',
    description: 'A smaller house, with less to maintain, bought or leased.',
    benefits: ['Size you set', 'One story or two', 'Timing you choose'],
  },
  {
    icon: Shield,
    title: 'Mover stays separate',
    description: 'A licensed mover packs and drives. She does not quote a truck.',
    benefits: ['No moving package', 'No published mover rate', 'Realtor for the home'],
  },
];

const representationPoints = [
  {
    icon: Home,
    title: 'The contract',
    description: 'She writes the offer or the lease on the home you choose.',
  },
  {
    icon: MapPin,
    title: 'Nevada listing',
    description: 'If the home you are leaving is in Nevada, she can list it.',
  },
  {
    icon: Shield,
    title: 'One realtor',
    description: 'Licensed since 2008 · 35 years in Las Vegas.',
  },
  {
    icon: Phone,
    title: 'One number',
    description: 'Call (702) 707-7273 to start the search.',
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
                Residential Relocation in Las Vegas
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Dr. Jan Duffy is the realtor for the home you buy or lease in Las Vegas, including a
                retirement move or a smaller house. A licensed mover handles the truck.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </button>
                <a
                  href="https://calendly.com/drjanduffy/showing"
                  target="_blank"
                  rel="noopener noreferrer"
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
      <section id={retirementSectionId} className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Retirement and downsizing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some clients are leaving a larger house for a Las Vegas home with less to maintain.
              Tell her the size you want and whether you are buying or leasing. Call (702) 707-7273.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
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

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How a residential search works
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tell her whether you are buying or leasing, and the size of the house. She shows homes
            in Las Vegas and Henderson. If the home you are leaving is in Nevada, she can list it. A
            licensed mover prices the truck. Call (702) 707-7273.
          </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What she handles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The home, the contract, and the Nevada listing. The truck is a licensed mover.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {representationPoints.map((benefit, index) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
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
              Call to tour Las Vegas and Henderson homes. She is the realtor. A licensed mover
              handles the truck.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
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
