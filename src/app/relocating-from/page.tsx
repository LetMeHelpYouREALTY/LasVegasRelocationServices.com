import PageHero from "@/components/sections/PageHero";
import { Building, Home, MapPin, Plane, Shield, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relocating to Las Vegas from Major US Cities | Dr. Jan Duffy",
  description:
    "Expert relocation services from major US cities to Las Vegas. Professional assistance for Los Angeles, San Diego, New York, Chicago, Miami, and Seattle relocations.",
  keywords:
    "Las Vegas relocation, moving to Las Vegas, relocation services, Dr. Jan Duffy, Berkshire Hathaway",
  alternates: {
    canonical: "/relocating-from",
  },
  openGraph: {
    title: "Relocating to Las Vegas from Major US Cities | Dr. Jan Duffy",
    description:
      "Expert relocation services from major US cities to Las Vegas. Professional assistance for Los Angeles, San Diego, New York, Chicago, Miami, and Seattle relocations.",
    type: "website",
    url: "https://www.lasvegasrelocationservices.com/relocating-from",
  },
};

const cities = [
  {
    name: "Los Angeles",
    state: "California",
    href: "/relocating-from/los-angeles",
    icon: Home,
    description: "LA to Las Vegas relocation with expert guidance",
    features: [
      "Weather transition",
      "Cost of living adjustment",
      "Lifestyle change",
    ],
  },
  {
    name: "San Diego",
    state: "California",
    href: "/relocating-from/san-diego",
    icon: MapPin,
    description: "San Diego to Las Vegas relocation services",
    features: [
      "Climate adaptation",
      "Housing market transition",
      "Community integration",
    ],
  },
  {
    name: "New York",
    state: "New York",
    href: "/relocating-from/new-york",
    icon: Building,
    description: "NYC to Las Vegas corporate and residential relocation",
    features: [
      "Urban to suburban transition",
      "Tax benefits",
      "Quality of life improvement",
    ],
  },
  {
    name: "Chicago",
    state: "Illinois",
    href: "/relocating-from/chicago",
    icon: Users,
    description: "Chicago to Las Vegas relocation assistance",
    features: ["Weather improvement", "Cost savings", "Lifestyle enhancement"],
  },
  {
    name: "Miami",
    state: "Florida",
    href: "/relocating-from/miami",
    icon: Plane,
    description: "Miami to Las Vegas relocation support",
    features: [
      "Climate adjustment",
      "Business opportunities",
      "Family-friendly environment",
    ],
  },
  {
    name: "Seattle",
    state: "Washington",
    href: "/relocating-from/seattle",
    icon: Shield,
    description: "Seattle to Las Vegas relocation services",
    features: ["Weather benefits", "Tax advantages", "Economic opportunities"],
  },
];

export default function RelocatingFromPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero image="relocatingFrom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Relocating to Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert relocation services from major US cities to Las Vegas. Dr.
              Jan Duffy provides personalized assistance for your successful
              move.
            </p>
          </div>
        </div>
      </PageHero>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Starting City
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select your current city to get specialized relocation guidance
              and services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <city.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {city.name}, {city.state}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {city.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {city.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Relocation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact Dr. Jan Duffy for a free consultation and discover how we
            can make your relocation seamless and successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="http://drjanduffy.realscout.com/onboarding"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
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
