'use client';

import {
  Building,
  Calendar,
  CheckCircle,
  Home,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from '@/components/motion';
import PageHero from '@/components/sections/PageHero';

const investmentServices = [
  {
    icon: MapPin,
    title: 'Unincorporated town',
    description: 'Paradise is a Clark County town around the Strip, not the City of Las Vegas.',
    benefits: [
      'County jurisdiction',
      'Parcel record controls',
      'Mailing city can still say Las Vegas',
    ],
  },
  {
    icon: Home,
    title: 'Zip 89109',
    description: '89109 sits on the Clark County zip map in the central valley, near 89119.',
    benefits: ['Confirm the parcel', 'Not the airport address', 'Ask before you write'],
  },
  {
    icon: Building,
    title: 'Purchase or lease',
    description: 'She searches the property and represents you on the contract.',
    benefits: ['Buyer representation', 'Showings', 'One realtor'],
  },
  {
    icon: Shield,
    title: 'No return quoted',
    description: 'She does not project a yield, a cap rate, or a rent roll.',
    benefits: ['You bring the numbers', 'The tax bill is the parcel', 'No published return'],
  },
];

const investmentBenefits = [
  {
    icon: Home,
    title: 'Buyer representation',
    description: 'She writes the offer. She does not manage the building after closing.',
  },
  {
    icon: MapPin,
    title: 'Paradise guide',
    description: 'The Paradise page covers the town boundary and zip 89109.',
  },
  {
    icon: Shield,
    title: 'No state income tax',
    description:
      'Nevada does not levy a state personal income tax. The parcel tax bill is separate.',
  },
  {
    icon: TrendingUp,
    title: 'The parcel',
    description: 'District, rent, and expenses come from the property, not from a valley average.',
  },
];

export default function InvestmentPropertiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="investmentProperties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
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
                Dr. Jan Duffy searches investment property in Las Vegas, including Paradise and zip
                89109. She does not quote a return. Call (702) 707-7273.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17027077273"
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
              Paradise and zip 89109
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paradise is the unincorporated Clark County town around the Strip. Zip 89109 sits in
              that central valley on the Clark County zip map. Confirm the parcel before you write.
              The{' '}
              <Link
                className="text-emerald-700 font-semibold hover:underline"
                href="/neighborhoods/paradise"
              >
                Paradise guide
              </Link>{' '}
              has the details.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
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

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What she will and will not quote
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            She searches the property and represents you on the purchase or the lease. She does not
            publish a return, a cap rate, or a package price. Bring the rent roll if you have one.
            Call (702) 707-7273.
          </p>
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
              Discover the advantages that make Las Vegas a top investment destination
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
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
              Call to search Paradise, 89109, and other Las Vegas investment property. She does not
              quote a return.
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
