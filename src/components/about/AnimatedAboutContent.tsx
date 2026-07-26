"use client";

import PageHero from "@/components/sections/PageHero";
import {
  Award,
  Building,
  Calendar,
  Clock,
  Globe,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";

const credentials = [
  {
    icon: Award,
    title: "Berkshire Hathaway Services",
    description: "Relocation Services Team Member",
    details: "Prestigious team with proven track record",
  },
  {
    icon: Shield,
    title: "Nevada-Licensed REALTOR®",
    description: "Nevada Real Estate License S.0197614",
    details: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  {
    icon: Building,
    title: "Las Vegas Market Expert",
    description: "15+ years local experience",
    details: "Deep knowledge of neighborhoods and markets",
  },
  {
    icon: Globe,
    title: "International Relocation",
    description: "Worldwide broker network",
    details: "Global relocation expertise",
  },
];

const teamStats = [
  { number: "500+", label: "Families Relocated", icon: Users },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "50+", label: "Neighborhoods Served", icon: MapPin },
];

const values = [
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every relocation is unique. We treat your move as if it were our own family's move.",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description:
      "Built on 15+ years of trust, transparency, and consistent delivery of promises.",
  },
  {
    icon: Building,
    title: "Local Expertise",
    description:
      "Deep knowledge of Las Vegas neighborhoods, schools, and real estate markets.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Committed to exceeding expectations in every aspect of your relocation.",
  },
];

const achievements = [
  {
    title: "Primary Service Provider",
    description:
      "Primary service provider for Las Vegas metro with BGRS (2nd largest relocation provider worldwide)",
    highlight: "Trusted by Fortune 100 Companies",
  },
  {
    title: "Preferred Broker Status",
    description:
      'Earned "primary" or "preferred" broker status with most third-party relocation companies',
    highlight: "Industry Recognition",
  },
  {
    title: "Nationally Recognized Team",
    description:
      "Multiple awards for service and performance, representing the majority of Las Vegas relocations",
    highlight: "Award-Winning Excellence",
  },
];

export default function AnimatedAboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero image="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Dr. Jan Duffy
                </span>
              </h1>

              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Dr. Jan Duffy leads our Las Vegas relocation services with
                unmatched expertise and dedication. As a member of the
                prestigious Berkshire Hathaway Services Relocation Team, she
                brings 15+ years of experience helping families and businesses
                successfully transition to Las Vegas.
              </p>

              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our commitment to excellence ensures that your move to Las Vegas
                is not just successful, but truly exceptional.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {[
                  "15+ years of Las Vegas real estate expertise",
                  "Berkshire Hathaway Services Relocation Team member",
                  "Certified relocation specialist with proven track record",
                  "Personalized approach for every client family",
                  "Local market knowledge and community connections",
                  "Ongoing support throughout your relocation journey",
                ].map((highlight, index) => (
                  <motion.div
                    key={`highlight-${highlight}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-100">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                type="button"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>

            {/* Right Column - Stats & Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-blue-200/20 rounded-xl">
                        <stat.icon className="w-6 h-6 text-blue-200" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-200 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-100 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Company Values */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  Our Core Values
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                    >
                      <div className="p-2 bg-blue-200/20 rounded-lg">
                        <value.icon className="w-5 h-5 text-blue-200" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">
                          {value.title}
                        </h5>
                        <p className="text-sm text-blue-100">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Berkshire Hathaway Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Berkshire Hathaway Services
                </h4>
                <p className="text-blue-100 text-sm">
                  Relocation Services Team Member
                </p>
                <p className="text-xs text-blue-200 font-medium mt-2">
                  Quality • Reliability • Excellence
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </PageHero>

      {/* Credentials Section */}
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
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Credentials
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dr. Jan Duffy's extensive qualifications and industry recognition
              make her the trusted choice for your Las Vegas relocation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-600 mb-2">{credential.description}</p>
                <p className="text-sm text-blue-600 font-medium">
                  {credential.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team's accomplishments and industry recognition demonstrate
              our commitment to excellence in relocation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                    {achievement.highlight}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Las Vegas Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse available properties while learning about our team and
              services
            </p>
          </motion.div>

          {/* RealScout Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_HIGH"
              listing-status="For Sale"
              property-types="SFR,MF,OTHER"
              price-min="400000"
              price-max="800000"
            ></realscout-office-listings>
          </motion.div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Listings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Featured Listings
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_HIGH"
                listing-status="For Sale"
                property-types="SFR"
                price-min="500000"
                price-max="900000"
              ></realscout-office-listings>
            </motion.div>

            {/* New Arrivals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                New Arrivals
              </h3>
              <realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_LOW"
                listing-status="For Sale"
                property-types="SFR,MF"
                price-min="300000"
                price-max="600000"
              ></realscout-office-listings>
            </motion.div>
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
              Ready to Work with Dr. Jan Duffy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that professional expertise and
              personalized care make for your Las Vegas relocation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                type="button"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                type="button"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2 justify-center"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
