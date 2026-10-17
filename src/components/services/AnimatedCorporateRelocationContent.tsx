'use client';

import {
  Building,
  Calendar,
  CheckCircle,
  Globe,
  Phone,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';
import { motion } from '@/components/motion';
import PageHero from '@/components/sections/PageHero';

const officeSectionId = 'office-ffe';

const serviceFeatures = [
  {
    icon: Building,
    title: 'Business Relocation Planning',
    description: 'Comprehensive strategy development for your entire business move',
    benefits: ['Minimize downtime', 'Reduce costs', 'Maintain productivity'],
  },
  {
    icon: Users,
    title: 'Employee Relocation Support',
    description: 'Home search for employees and executives transferring to Las Vegas',
    benefits: ['Purchase or lease', 'Showings on their schedule', 'One realtor'],
  },
  {
    icon: Globe,
    title: 'Vendor & Service Coordination',
    description: 'Introduces a licensed mover for furniture, fixtures, and equipment',
    benefits: ['Single point of contact', 'Quality assurance', 'Cost optimization'],
  },
  {
    icon: Shield,
    title: 'Office real estate',
    description: 'Lease or purchase of the Las Vegas office, separate from the truck',
    benefits: ['Office search', 'Employee housing', 'One point of contact'],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Minimize downtime and maintain business operations during relocation',
  },
  {
    icon: Users,
    title: 'Employee housing',
    description: 'A separate search for each transferring employee or executive',
  },
  {
    icon: Building,
    title: 'Office lease or purchase',
    description: 'The Las Vegas workplace, handled as real estate',
  },
  {
    icon: Shield,
    title: 'Mover stays separate',
    description: 'Furniture, fixtures, equipment, and IT ship with a licensed mover',
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
                Corporate Relocation Las Vegas
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Dr. Jan Duffy is the relocation realtor for the company and its transferring
                executives. She handles the home search and the purchase or lease. A licensed mover
                handles the furniture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:+17027077273"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </motion.a>
                <motion.a
                  href="https://calendly.com/drjanduffy/showing"
                  target="_blank"
                  rel="noopener noreferrer"
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
              From initial planning to post-move support, we provide comprehensive corporate
              relocation services that minimize disruption to your business.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
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

      <section id={officeSectionId} className="py-20 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Office, FF&amp;E, IT, and warehouse moves
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. Jan Duffy coordinates the office lease or purchase and the employees’ homes. A
            licensed mover handles furniture, fixtures, equipment, the server room, and warehouse
            goods.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Illinois companies sending an office to Nevada use the same split. She is the Las Vegas
            realtor. She does not invoice a moving package and she does not publish a mover’s rate.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Employee home searches have their own page. Call (702) 707-7273 to start the housing.
          </p>
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
              Experience the benefits of professional corporate relocation expertise that keeps your
              business running smoothly during transitions.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
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
              Let's discuss your business relocation needs and create a customized plan that
              minimizes disruption and maximizes success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+17027077273"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </motion.a>
              <motion.a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
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
