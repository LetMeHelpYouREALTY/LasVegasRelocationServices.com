'use client';

import { BookOpen, Calculator, CheckCircle, FileText, Home, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from '@/components/motion';
import PageHero from '@/components/sections/PageHero';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/business';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Neighborhood guides',
    description: 'Places relocating buyers ask about',
    resources: [
      { label: 'All neighborhoods', href: '/neighborhoods' },
      { label: 'Summerlin', href: '/neighborhoods/summerlin' },
      { label: 'Henderson', href: '/neighborhoods/henderson' },
      { label: 'Green Valley', href: '/neighborhoods/green-valley' },
    ],
  },
  {
    icon: Calculator,
    title: 'Money',
    description: 'Taxes you can verify before you write an offer',
    resources: [
      { label: 'Nevada property tax guide', href: '/guides/nevada-taxes' },
      { label: 'Moving from Phoenix', href: '/relocating-from/phoenix' },
      { label: 'Moving from Dallas', href: '/relocating-from/dallas' },
      { label: 'Investment properties', href: '/services/investment-properties' },
    ],
  },
  {
    icon: FileText,
    title: 'Official lookups',
    description: 'County and state pages, not ratings',
    resources: [
      {
        label: 'Clark County Treasurer',
        href: 'https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/',
      },
      {
        label: 'NRS 361.225 assessment ratio',
        href: 'https://www.leg.state.nv.us/nrs/NRS-361.html#NRS361Sec225',
      },
      {
        label: 'Clark County School District address lookup',
        href: 'https://www.ccsd.net/',
      },
      { label: 'Settling-in services', href: '/services/settling-in' },
    ],
  },
  {
    icon: Home,
    title: 'The move itself',
    description: 'Services that cover the search and the truck',
    resources: [
      { label: 'Residential moving', href: '/services/residential-moving' },
      { label: 'Corporate relocation', href: '/services/corporate-relocation' },
      { label: 'Relocation planning', href: '/services/relocation-planning' },
      { label: 'All origin cities', href: '/relocating-from' },
    ],
  },
];

const featuredArticles = [
  {
    title: 'Summerlin relocation guide',
    excerpt:
      '250+ parks, 150+ miles of trails, Downtown Summerlin, and the fiscal year 2026–27 Summerlin Town tax district.',
    category: 'Neighborhood',
    href: '/neighborhoods/summerlin',
    image: '/heroes/summerlin.webp',
    alt: 'Summerlin homes below Red Rock cliffs with a desert trail in the foreground',
  },
  {
    title: 'Henderson and Green Valley',
    excerpt:
      'A 20–30 minute drive to the Strip and Harry Reid International Airport, plus how to read a Henderson tax district.',
    category: 'Neighborhood',
    href: '/neighborhoods/henderson',
    image: '/heroes/henderson.webp',
    alt: 'Henderson, Nevada homes with desert landscaping and mountains beyond',
  },
  {
    title: 'Nevada property tax, by district',
    excerpt:
      'No state tax on wages. Clark County bills the house by district. Summerlin Town and Henderson Artesian Basin examples for fiscal year 2026–27.',
    category: 'Taxes',
    href: '/guides/nevada-taxes',
    image: '/heroes/nevada-taxes.webp',
    alt: 'Single-story desert home in the Las Vegas valley under a clear sky',
  },
  {
    title: 'Moving from Phoenix or Dallas',
    excerpt:
      'Phoenix is a one-day drive on US-93 and I-11. Dallas already has no state income tax. Nonstop flights land at Harry Reid.',
    category: 'Origin city',
    href: '/relocating-from/phoenix',
    image: '/heroes/from-phoenix.webp',
    alt: 'Moving truck on a desert interstate between Arizona and Las Vegas',
  },
];

const tools = [
  {
    icon: Calculator,
    title: 'Nevada property tax',
    description: 'District rates for fiscal year 2026–27, and how assessed value works',
    href: '/guides/nevada-taxes',
  },
  {
    icon: Home,
    title: 'Home search',
    description: 'Residential moving page, with current office listings under the hero',
    href: '/services/residential-moving',
  },
  {
    icon: MapPin,
    title: 'Neighborhood guides',
    description: 'Summerlin, Henderson, Green Valley, Centennial Hills, Anthem, and Inspirada',
    href: '/neighborhoods',
  },
  {
    icon: BookOpen,
    title: 'Origin-city guides',
    description: 'Los Angeles, Phoenix, Dallas, and the other city pages',
    href: '/relocating-from',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Resources & Tools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Las Vegas Relocation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                Resources
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Everything you need to know about relocating to Las Vegas. From guides and tools to
              market insights and neighborhood information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2"
              >
                Book a Showing
              </a>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Resource Categories */}
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
              Resource Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources organized by category to help you with every aspect of your
              relocation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">{category.description}</p>
                <ul className="space-y-2">
                  {category.resources.map((resource) => {
                    const external = resource.href.startsWith('http');
                    const className =
                      'flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700';
                    const inner = (
                      <>
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        {resource.label}
                      </>
                    );
                    return (
                      <li key={resource.href}>
                        {external ? (
                          <a
                            href={resource.href}
                            className={className}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {inner}
                          </a>
                        ) : (
                          <Link href={resource.href} className={className}>
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guides with a real address, a tax district, or a drive — not placeholder articles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <Link href={article.href} className="block">
                  <div className="relative h-52">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <span className="text-blue-600 font-semibold">Read the guide</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Start here</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each card opens a guide on this site.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{tool.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{tool.description}</p>
                <Link
                  href={tool.href}
                  className="block w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Open
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Las Vegas Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized assistance with your relocation from our expert team
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href="https://calendly.com/drjanduffy/showing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
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
