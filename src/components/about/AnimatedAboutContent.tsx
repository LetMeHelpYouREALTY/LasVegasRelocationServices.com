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
      {/* Hero: headline + short copy + CTA; portrait from PageHero (no cards on photo) */}
      <PageHero image="about" className="min-h-[68vh]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Meet Dr. Jan Duffy
          </h1>
          <p className="mt-5 text-lg md:text-xl text-blue-50 leading-relaxed max-w-xl">
            Nevada-licensed REALTOR® with Berkshire Hathaway HomeServices
            Nevada Properties — 15+ years helping households and businesses
            relocate to Las Vegas and Henderson.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/drjanduffy/showing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-[#0A2540] hover:bg-blue-50 transition-colors"
            >
              Book a Showing
            </a>
            <a
              href="tel:+17027077273"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              Call (702) 707-7273
            </a>
          </div>
        </motion.div>
      </PageHero>

      {/* Story + highlights (below the photo — not printed over it) */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-5">
                Your Las Vegas relocation specialist
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Dr. Jan Duffy leads Las Vegas Relocation Services with focused
                local expertise. As a member of the Berkshire Hathaway Services
                Relocation Team, she coordinates home search, move logistics,
                and settling-in support for people moving to Southern Nevada.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                One call covers area research, property tours, and the details
                that make a move stick — utilities, orientation, and follow-through
                after closing.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                "15+ years of Las Vegas real estate expertise",
                "Berkshire Hathaway Services Relocation Team member",
                "Nevada Real Estate License S.0197614",
                "Personalized approach for every relocation",
                "Local market knowledge and community connections",
                "Ongoing support throughout your move",
              ].map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-slate-800"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3A8DDE]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-7 h-7 text-[#3A8DDE] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#0A2540]">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
            Our core values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <value.icon className="w-8 h-8 text-[#3A8DDE] mx-auto sm:mx-0 mb-3" />
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <motion.a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </motion.a>
              <motion.a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer"
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
