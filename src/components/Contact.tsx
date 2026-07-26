"use client";

import { ArrowRight, Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "@/components/motion";
import PageHero from "@/components/sections/PageHero";
import CalendlyBooking from "@/components/shared/CalendlyBooking";
import GbpActionBar from "@/components/shared/GbpActionBar";
import {
  ADDRESS,
  AGENT_NAME,
  BUSINESS_NAME,
  CALENDLY_SHOWING_URL,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/business";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us Directly",
    description: "Speak with a relocation specialist",
    action: "Call Now",
    value: PHONE_DISPLAY,
    link: `tel:${PHONE_TEL}`,
    primary: true,
  },
  {
    icon: Calendar,
    title: "Book a Showing",
    description: "Schedule on Calendly — no form needed",
    action: "Open Calendly",
    value: "Showing appointment",
    link: CALENDLY_SHOWING_URL,
    primary: false,
    external: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions",
    action: "Send Email",
    value: EMAIL,
    link: `mailto:${EMAIL}`,
    primary: false,
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

export default function Contact() {
  return (
    <>
      <PageHero image="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8">
            Call {PHONE_DISPLAY} or book a showing on Calendly.
          </p>
          <a
            href={CALENDLY_SHOWING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            Book a Showing
          </a>
        </div>
      </PageHero>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Ready to make Las Vegas your new home? Book a showing with Dr. Jan
              Duffy or call {PHONE_DISPLAY} — no website form required.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CalendlyBooking
                title="Book a Showing"
                description="Choose a time on Calendly for a consultation or property showing with Dr. Jan Duffy."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
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
                        {...(method.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
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

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule) => (
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
