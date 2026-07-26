"use client";

import { usePathname } from "next/navigation";
import CalendlyBooking from "@/components/shared/CalendlyBooking";
import { CALENDLY_SHOWING_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

/** Routes that already mount a full CalendlyBooking panel */
const PAGES_WITH_INLINE_EMBED = new Set([
  "/",
  "/contact",
  "/relocating-from/chicago",
  "/relocating-from/new-york",
  "/relocating-from/miami",
  "/relocating-from/seattle",
  "/relocating-from/los-angeles",
  "/relocating-from/san-diego",
]);

/**
 * Sitewide Calendly band above the footer.
 * - Pages without a page-level embed: full official inline widget
 * - Pages that already embed Calendly: compact popup CTA (avoids double 700px calendars)
 * Badge + popup-on-link still run globally via CalendlyScript.
 */
export default function CalendlySitewide() {
  const pathname = usePathname() || "/";
  const hasPageEmbed = PAGES_WITH_INLINE_EMBED.has(pathname);

  return (
    <section
      id="schedule"
      className="py-16 bg-gradient-to-br from-[#0A2540] to-[#0A2540]/90 text-white"
      aria-labelledby="calendly-sitewide-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${hasPageEmbed ? "mb-6" : "mb-10"}`}>
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

        {hasPageEmbed ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CALENDLY_SHOWING_URL}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule time with me
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2540] transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        ) : (
          <CalendlyBooking
            title="Pick a time that works"
            description="Use the calendar below, the floating badge, or any Schedule link for the popup scheduler."
          />
        )}
      </div>
    </section>
  );
}
