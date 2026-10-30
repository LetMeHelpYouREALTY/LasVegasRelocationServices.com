import { Building, Home, MapPin, Plane, Shield, Target, Truck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import SectionGuideLinks from '@/components/sections/SectionGuideLinks';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('services', {
  title: { absolute: 'Relocation Services in Las Vegas | Dr. Jan Duffy' },
  description:
    'Luxury relocation realtor in Las Vegas: residential, corporate, employee, and investment searches with Dr. Jan Duffy. Call (702) 707-7273.',
  alternates: {
    canonical: '/services',
  },
});

const services = [
  {
    title: 'Residential Relocation',
    description: 'The Las Vegas or Henderson home you buy or lease, including a smaller house.',
    icon: Home,
    href: '/services/residential-moving',
    features: ['Purchase or lease', 'Retirement and downsizing', 'Mover stays separate'],
  },
  {
    title: 'Corporate Relocation',
    description:
      'Realtor for the company, the office lease or purchase, and transferring executives.',
    icon: Building,
    href: '/services/corporate-relocation',
    features: ['Executive home search', 'Office real estate', 'Employee housing'],
  },
  {
    title: 'Employee Relocation',
    description: 'The Las Vegas home for an employee transferring in.',
    icon: Users,
    href: '/services/employee-relocation',
    features: ['Purchase or lease', 'Start-date timing', 'Henderson or Las Vegas'],
  },
  {
    title: 'Relocation Specialist',
    description: 'Dr. Jan Duffy for an out-of-state move to Las Vegas.',
    icon: Target,
    href: '/relocation-specialist',
    features: ['One realtor', 'Luxury home search', 'Not a moving company'],
  },
  {
    title: 'International Relocation',
    description:
      'The Las Vegas home for a buyer arriving from another country. Not a visa service.',
    icon: Plane,
    href: '/services/international-relocation',
    features: ['Purchase or lease', 'Attorney referral for visas', 'Not a mover'],
  },
  {
    title: 'Moving and the truck',
    description: 'She is the realtor. A licensed mover prices the truck.',
    icon: Truck,
    href: '/services/moving-transportation',
    features: ['Home search', 'No published mover rate', 'Nevada listing'],
  },
  {
    title: 'Settling-In Services',
    description: 'Comprehensive support to help you settle into your new Las Vegas home.',
    icon: Shield,
    href: '/services/settling-in',
    features: ['Utility setup assistance', 'Local service connections', 'Community integration'],
  },
  {
    title: 'Relocation Planning',
    description: 'Strategic planning and coordination for successful relocations.',
    icon: Target,
    href: '/services/relocation-planning',
    features: ['Timeline planning', 'Budget management', 'Risk assessment'],
  },
  {
    title: 'Luxury Relocation',
    description: 'High-net-worth home search in Las Vegas and Henderson. She shows the house.',
    icon: Users,
    href: '/services/luxury-relocation',
    features: ['Private showings', 'Purchase or lease', 'Nevada listing'],
  },
  {
    title: 'Investment Properties',
    description: 'Paradise and zip 89109 searches. She does not quote a return.',
    icon: MapPin,
    href: '/services/investment-properties',
    features: ['Buyer representation', 'Parcel confirmation', 'No published yield'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero image="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Relocation Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dr. Jan Duffy is a luxury relocation realtor in Las Vegas. She shows the home. A licensed mover handles the truck.
            </p>
          </div>
        </div>
      </PageHero>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Relocation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of relocation services designed to make your move
              seamless and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, _index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
          <SectionGuideLinks />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Relocation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact Dr. Jan Duffy for a free consultation and discover how we can make your
            relocation seamless and successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/drjanduffy/showing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Book a Showing
            </Link>
            <Link
              href="/about"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
