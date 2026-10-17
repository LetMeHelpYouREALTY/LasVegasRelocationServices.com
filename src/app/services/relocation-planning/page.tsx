'use client';

import {
  BarChart3,
  Calendar,
  CheckCircle,
  CheckSquare,
  FileText,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { motion } from '@/components/motion';
import PageHero from '@/components/sections/PageHero';

const planningServices = [
  {
    icon: Calendar,
    title: 'Timeline Management',
    description: 'Strategic planning and scheduling for your entire relocation',
    benefits: [
      'Milestone planning',
      'Deadline management',
      'Progress tracking',
      'Contingency planning',
    ],
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Define and achieve your relocation objectives',
    benefits: [
      'Objective definition',
      'Success metrics',
      'Progress monitoring',
      'Achievement tracking',
    ],
  },
  {
    icon: CheckSquare,
    title: 'Task Coordination',
    description: 'Coordinate all aspects of your relocation seamlessly',
    benefits: ['Vendor management', 'Service coordination', 'Quality control', 'Issue resolution'],
  },
  {
    icon: Users,
    title: 'Stakeholder Management',
    description: 'Coordinate with all parties involved in your move',
    benefits: ['Communication plans', 'Meeting coordination', 'Documentation', 'Progress updates'],
  },
];

const planningBenefits = [
  {
    icon: TrendingUp,
    title: 'Efficiency Gains',
    description: 'Streamlined processes save time and reduce stress',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Proactive planning prevents costly delays and issues',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Complete records and tracking for your relocation',
  },
  {
    icon: BarChart3,
    title: 'Performance Metrics',
    description: 'Clear visibility into progress and success metrics',
  },
];

export default function RelocationPlanningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="relocationPlanning">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Relocation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">
                  Planning
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Strategic relocation planning services that ensure your move to Las Vegas is
                organized, efficient, and successful. We coordinate every detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17027077273"
                  className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </a>
                <a
                  href="https://calendly.com/drjanduffy/showing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors flex items-center gap-2"
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
              Strategic Relocation Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to successful completion, we provide comprehensive coordination
              and strategic guidance for your relocation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Benefits */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Planning Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that strategic planning makes for your relocation to Las
              Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Perfect Relocation?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's create a strategic plan for your move to Las Vegas. Schedule your free planning
              session and discover how we can make your relocation organized and successful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027077273"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </a>
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors flex items-center gap-2"
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
