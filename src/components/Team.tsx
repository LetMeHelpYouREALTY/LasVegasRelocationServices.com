'use client';

import { Award, CheckCircle, Clock, Mail, Phone, Shield, Star, Users } from 'lucide-react';
import { motion } from '@/components/motion';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Jan Duffy',
    role: 'Founder & Lead Relocation Specialist',
    credentials: 'Berkshire Hathaway Services Relocation Team',
    experience: '15+ Years',
    expertise: ['Corporate Relocation', 'Luxury Moving', 'Family Services', 'Local Market Expert'],
    image: '/team/dr-jan-duffy.jpg',
    bio: 'Dr. Jan Duffy leads our Las Vegas relocation services with unmatched expertise and dedication. As a member of the prestigious Berkshire Hathaway Services Relocation Team, she brings 15+ years of experience helping families and businesses successfully transition to Las Vegas.',
    certifications: [
      'Certified Relocation Specialist',
      'Berkshire Hathaway Services',
      'Las Vegas Real Estate Expert',
    ],
    contact: {
      phone: '(702) 707-7273',
      email: 'DrJan@LasVegasRelocationServices.com',
      linkedin: 'https://linkedin.com/in/dr-jan-duffy',
    },
    stats: {
      families: '500+',
      satisfaction: '98%',
      years: '15+',
      neighborhoods: '50+',
    },
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Senior Relocation Coordinator',
    credentials: 'Certified Moving Consultant',
    experience: '8+ Years',
    expertise: ['Logistics Management', 'Vendor Coordination', 'Client Relations'],
    image: '/team/michael-rodriguez.jpg',
    bio: 'Michael specializes in coordinating complex relocations, ensuring every detail is perfectly managed. His expertise in logistics and vendor management guarantees smooth transitions for our clients.',
    certifications: ['Certified Moving Consultant', 'Project Management Professional'],
    contact: {
      phone: '(702) 707-7274',
      email: 'Michael@LasVegasRelocationServices.com',
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
    },
    stats: {
      relocations: '200+',
      satisfaction: '97%',
      years: '8+',
      clients: '150+',
    },
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Real Estate Specialist',
    credentials: 'Licensed Real Estate Agent',
    experience: '6+ Years',
    expertise: ['Home Finding', 'Neighborhood Analysis', 'School Districts', 'Market Insights'],
    image: '/team/sarah-chen.jpg',
    bio: "Sarah's deep knowledge of Las Vegas neighborhoods and real estate markets helps families find their perfect home. She specializes in school district analysis and community integration.",
    certifications: ['Licensed Real Estate Agent', 'Neighborhood Specialist'],
    contact: {
      phone: '(702) 707-7275',
      email: 'Sarah@LasVegasRelocationServices.com',
      linkedin: 'https://linkedin.com/in/sarah-chen',
    },
    stats: {
      homes: '100+',
      satisfaction: '99%',
      years: '6+',
      neighborhoods: '25+',
    },
  },
];

const achievements = [
  {
    icon: Award,
    title: 'Berkshire Hathaway Services',
    description: 'Prestigious relocation team member',
  },
  {
    icon: Star,
    title: 'A+ BBB Rating',
    description: 'Better Business Bureau accredited',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full protection for your move',
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to making your Las Vegas relocation
            seamless, stress-free, and successful. Every team member brings unique expertise to
            ensure your move exceeds expectations.
          </p>
        </motion.div>

        {/* Featured Team Member - Dr. Jan Duffy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Photo & Stats */}
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                    <Users className="w-20 h-20 text-blue-600" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {teamMembers[0].stats &&
                    Object.entries(teamMembers[0].stats).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                        <div className="text-xs text-gray-600 font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{teamMembers[0].contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{teamMembers[0].contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Bio & Expertise */}
              <div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{teamMembers[0].name}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{teamMembers[0].role}</p>
                  <p className="text-lg text-gray-600 mb-4">{teamMembers[0].credentials}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{teamMembers[0].experience} Experience</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{teamMembers[0].bio}</p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {teamMembers[0].expertise.map((skill, _index) => (
                      <div key={skill} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[0].certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href="https://calendly.com/drjanduffy/showing" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">Book a Showing</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.credentials}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{member.experience} Experience</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">{member.bio}</p>

              {/* Expertise */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm">Expertise:</h5>
                <div className="space-y-2">
                  {member.expertise.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{member.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{member.contact.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Achievements & Recognition</h3>
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
                <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
