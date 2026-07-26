"use client";

import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MapPin as MapPinIcon,
  Phone,
  Phone as PhoneIcon,
  Twitter,
  Users,
} from "lucide-react";
import { motion } from "@/components/motion";
import CalendlyBooking from "@/components/shared/CalendlyBooking";
import GbpActionBar from "@/components/shared/GbpActionBar";
import {
  EMAIL,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/business";

const footerSections = [
  {
    title: "Services",
    icon: Building,
    links: [
      { name: "Residential Relocation", href: "/services/residential-moving" },
      { name: "Corporate Relocation", href: "/services/corporate-relocation" },
      {
        name: "International Relocation",
        href: "/services/international-relocation",
      },
      {
        name: "Moving & Transportation",
        href: "/services/moving-transportation",
      },
      { name: "Settling-In Services", href: "/services/settling-in" },
      { name: "Relocation Planning", href: "/services/relocation-planning" },
      { name: "Luxury Relocation", href: "/services/luxury-relocation" },
      {
        name: "Investment Properties",
        href: "/services/investment-properties",
      },
    ],
  },
  {
    title: "Relocating From",
    icon: MapPinIcon,
    links: [
      { name: "Los Angeles", href: "/relocating-from/los-angeles" },
      { name: "San Diego", href: "/relocating-from/san-diego" },
      { name: "New York", href: "/relocating-from/new-york" },
      { name: "Chicago", href: "/relocating-from/chicago" },
      { name: "Miami", href: "/relocating-from/miami" },
      { name: "Seattle", href: "/relocating-from/seattle" },
    ],
  },
  {
    title: "Company",
    icon: Users,
    links: [
      { name: "About Us", href: "/about" },
      { name: "Resources", href: "/resources" },
      { name: "Contact", href: "/contact" },
      { name: "Write a Google Review", href: GOOGLE_WRITE_REVIEW_URL },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

const contactInfo = [
  {
    icon: Phone,
    text: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
  },
  {
    icon: Mail,
    text: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    text: "100 N Green Valley Pkwy #330, Henderson, NV 89074",
    href: GOOGLE_DIRECTIONS_URL,
  },
  {
    icon: Clock,
    text: "Mon–Fri 8am–6pm, Sat 9am–3pm",
    href: "/contact",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "http://drjanduffy.realscout.com/onboarding",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "http://drjanduffy.realscout.com/onboarding",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "http://drjanduffy.realscout.com/onboarding",
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "http://drjanduffy.realscout.com/onboarding",
    color: "hover:text-blue-700",
  },
];

const quickStats = [
  { number: "500+", label: "Happy Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Las Vegas Relocation Services
                </h3>
                <p className="text-gray-400 text-sm">
                  Your trusted partner for seamless relocation
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Dr. Jan Duffy and the Berkshire Hathaway team provide
              comprehensive relocation services to help you make Las Vegas your
              new home. From residential moves to corporate relocations, we
              handle every detail with expertise and care.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-gray-800 rounded-lg"
                >
                  <div className="text-2xl font-bold text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-5 h-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <PhoneIcon className="w-5 h-5 text-blue-400 mr-2" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    {...(contact.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <contact.icon className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
              <GbpActionBar variant="dark" className="mt-6" />
            </div>

            <CalendlyBooking variant="footer" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm">
                Comprehensive Real Estate Services by Dr. Jan Duffy S.0197614
              </span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2026 Las Vegas Relocation Services</span>
              <span>•</span>
              <span>All rights reserved</span>
              <span>•</span>
              <span>Berkshire Hathaway Affiliate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
