"use client";

import {
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { motion } from "@/components/motion";
import PageHero from "@/components/sections/PageHero";
import GbpActionBar from "@/components/shared/GbpActionBar";
import {
  ADDRESS,
  AGENT_NAME,
  BUSINESS_NAME,
  PHONE_DISPLAY,
} from "@/lib/business";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us Directly",
    description: "Speak with a relocation specialist",
    action: "Call Now",
    value: "(702) 707-7273",
    link: "tel:+17027077273",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions",
    action: "Send Email",
    value: "DrJan@LasVegasRelocationServices.com",
    link: "mailto:DrJan@LasVegasRelocationServices.com",
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a free 30-minute call",
    action: "Book Now",
    value: "Free 30-min Call",
    link: "#consultation-form",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us online",
    action: "Start Chat",
    value: "Available Now",
    link: "#live-chat",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentLocation: "",
    timeline: "",
    services: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Here you would typically send to your API
  };

  return (
    <>
      <PageHero image="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
            Call {PHONE_DISPLAY} or request a free Las Vegas relocation
            consultation.
          </p>
        </div>
      </PageHero>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
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
              Start Your Las Vegas Relocation Today
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to make Las Vegas your new home? Contact Dr. Jan Duffy for a
              free consultation and discover how we can make your relocation
              seamless and successful.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentLocation"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Current Location
                  </label>
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Relocation Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Within 30 days</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6+months">6+ months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="services"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Services Needed
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select Primary Need</option>
                    <option value="buying">Home Buying Assistance</option>
                    <option value="selling">Home Selling Services</option>
                    <option value="both">Both Buying & Selling</option>
                    <option value="rental">Rental Assistance</option>
                    <option value="corporate">Corporate Relocation</option>
                    <option value="consultation">Initial Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Tell Us About Your Relocation Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Briefly describe your relocation goals, family size, preferred areas, budget range, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get My Free Las Vegas Relocation Consultation
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start gap-4 p-6 rounded-2xl ${
                      method.primary
                        ? "bg-blue-600 text-white"
                        : "bg-white shadow-lg border border-gray-100"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-full ${method.primary ? "bg-white/20" : "bg-blue-100"}`}
                    >
                      <method.icon
                        className={`w-6 h-6 ${method.primary ? "text-white" : "text-blue-600"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-1 ${
                          method.primary ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {method.title}
                      </h4>
                      <p
                        className={`text-sm mb-3 ${
                          method.primary ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {method.description}
                      </p>
                      <a
                        href={method.link}
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          method.primary
                            ? "text-white hover:text-blue-100"
                            : "text-blue-600 hover:text-blue-700"
                        } transition-colors`}
                      >
                        {method.action}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, _index) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">
                        {schedule.day}
                      </span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location + GBP actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {BUSINESS_NAME}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  {ADDRESS.streetAddress}
                  <br />
                  {ADDRESS.addressLocality}, {ADDRESS.addressRegion}{" "}
                  {ADDRESS.postalCode}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {AGENT_NAME} serves Las Vegas, Henderson, North Las Vegas, and
                  surrounding Southern Nevada communities. Call {PHONE_DISPLAY}{" "}
                  or leave a Google review after your move.
                </p>
                <GbpActionBar />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
