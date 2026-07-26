"use client";

import CalendlyBooking from "@/components/shared/CalendlyBooking";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

/**
 * Sitewide Calendly band — official inline widget on every page above the footer.
 */
export default function CalendlySitewide() {
  return (
    <section
      id="schedule"
      className="py-16 bg-gradient-to-br from-[#0A2540] to-[#0A2540]/90 text-white"
      aria-labelledby="calendly-sitewide-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="calendly-sitewide-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Schedule time with Dr. Jan Duffy
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Book a showing or relocation consultation on Calendly — or call{" "}
            <a href={`tel:${PHONE_TEL}`} className="underline hover:text-white">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
        <CalendlyBooking
          title="Pick a time that works"
          description="Use the calendar below, the floating “Schedule time with me” badge, or any Book a Showing button for the popup scheduler."
        />
      </div>
    </section>
  );
}
