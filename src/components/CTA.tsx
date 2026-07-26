"use client";

import { ArrowRight, Calendar, Phone } from "lucide-react";
import { motion } from "@/components/motion";
import { CALENDLY_SHOWING_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

export default function CTA() {
  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Las Vegas Relocation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't let the stress of moving hold you back. Dr. Jan Duffy and
              our team are here to make your Las Vegas relocation seamless,
              successful, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href={CALENDLY_SHOWING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
              >
                Book a Showing
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now: {PHONE_DISPLAY}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium text-blue-200">
                  Available 7 Days a Week
                </span>
              </div>
              <p className="text-sm text-blue-100">
                Schedule your consultation today and start your stress-free
                relocation journey to Las Vegas
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Phone CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium">
              Ready to speak with Dr. Jan Duffy now?
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-2xl font-bold hover:text-green-200 transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs opacity-90">
              Book a showing • Available 7 days a week
            </p>
            <a
              href={CALENDLY_SHOWING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
