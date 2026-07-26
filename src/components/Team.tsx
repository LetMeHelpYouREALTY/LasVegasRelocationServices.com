'use client';

import Image from 'next/image';
import {
  Award,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { motion } from '@/components/motion';
import {
  AGENT_NAME,
  BROKERAGE,
  EMAIL,
  LICENSE_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/business';

const featured = {
  name: AGENT_NAME,
  role: 'Founder & Lead Relocation Specialist',
  credentials: `${BROKERAGE} · Relocation Services Team`,
  experience: '15+ Years',
  expertise: [
    'Corporate Relocation',
    'Luxury Moving',
    'Residential Relocation',
    'Local Market Expert',
  ],
  image: '/dr-jan-duffy.webp',
  bio: `${AGENT_NAME} leads Las Vegas Relocation Services with focused local expertise. As a Nevada-licensed REALTOR® with ${BROKERAGE}, she helps households and businesses relocate to Las Vegas, Henderson, and Southern Nevada.`,
  certifications: [
    LICENSE_LABEL,
    'Berkshire Hathaway Services Relocation Team',
    'Las Vegas Relocation Specialist',
  ],
  contact: {
    phone: PHONE_DISPLAY,
    phoneHref: PHONE_TEL,
    email: EMAIL,
  },
  stats: {
    families: '500+',
    satisfaction: '98%',
    years: '15+',
    neighborhoods: '50+',
  },
};

const achievements = [
  {
    icon: Award,
    title: 'Berkshire Hathaway Services',
    description: 'Prestigious relocation team member',
  },
  {
    icon: Star,
    title: 'Client-Focused Service',
    description: 'Personalized relocation guidance',
  },
  {
    icon: Shield,
    title: 'Licensed REALTOR®',
    description: LICENSE_LABEL,
  },
  {
    icon: Users,
    title: '500+ Families Served',
    description: 'Proven track record of success',
  },
];

export default function Team() {
  return (
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
            Meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {AGENT_NAME}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Las Vegas relocation specialist — licensed, local, and ready
            to coordinate home search, logistics, and settling-in support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={featured.image}
                    alt={`${featured.name}, REALTOR® — Las Vegas Relocation Services`}
                    title={`${featured.name} — Las Vegas Relocation Specialist`}
                    fill
                    className="object-cover"
                    sizes="192px"
                    priority
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(featured.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-4 bg-white rounded-xl shadow-sm"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <a
                      href={`tel:${featured.contact.phoneHref}`}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {featured.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a
                      href={`mailto:${featured.contact.email}`}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {featured.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {featured.name}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {featured.role}
                  </p>
                  <p className="text-lg text-gray-600 mb-4">
                    {featured.credentials}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{featured.experience} Experience</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {featured.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Areas of Expertise:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featured.expertise.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Credentials:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featured.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://calendly.com/drjanduffy/showing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Book a Showing
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Credentials &amp; recognition
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
