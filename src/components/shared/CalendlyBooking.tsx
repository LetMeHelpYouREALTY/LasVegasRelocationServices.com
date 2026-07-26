"use client";

import { Calendar } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { CALENDLY_SHOWING_URL } from "@/lib/business";

type CalendlyBookingProps = {
  title?: string;
  description?: string;
  /** panel = official inline widget; button/footer = popup CTA */
  variant?: "panel" | "button" | "footer";
  className?: string;
  buttonClassName?: string;
};

const DEFAULT_BUTTON =
  "inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors";

function openCalendlyPopup(event: React.MouseEvent<HTMLAnchorElement>) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!window.Calendly?.initPopupWidget) return;
  event.preventDefault();
  window.Calendly.initPopupWidget({ url: CALENDLY_SHOWING_URL });
}

function useCalendlyInline(parentRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    let cancelled = false;
    let tries = 0;

    const mount = () => {
      if (cancelled || !parent || !window.Calendly?.initInlineWidget)
        return false;
      parent.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: `${CALENDLY_SHOWING_URL}?hide_gdpr_banner=1`,
        parentElement: parent,
      });
      return true;
    };

    if (mount())
      return () => {
        cancelled = true;
      };

    const timer = window.setInterval(() => {
      tries += 1;
      if (mount() || tries > 40) window.clearInterval(timer);
    }, 250);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [parentRef]);
}

/**
 * Official Calendly widgets — inline embed or popup CTA.
 * Badge is initialized once in CalendlyScript (root layout).
 */
export default function CalendlyBooking({
  title = "Book a Showing with Dr. Jan Duffy",
  description = "Pick a time that works for you — schedule directly on Calendly.",
  variant = "panel",
  className = "",
  buttonClassName = DEFAULT_BUTTON,
}: CalendlyBookingProps) {
  const inlineRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useCalendlyInline(inlineRef);

  if (variant === "button") {
    return (
      <a
        href={CALENDLY_SHOWING_URL}
        onClick={openCalendlyPopup}
        className={`${buttonClassName} ${className}`.trim()}
      >
        <Calendar className="w-5 h-5" aria-hidden="true" />
        {title}
      </a>
    );
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <h4 className="text-xl font-semibold mb-6">Book a Showing</h4>
        <p className="text-gray-300 mb-4">
          Schedule time with Dr. Jan Duffy to tour homes or plan your Las Vegas
          relocation.
        </p>
        <a
          href={CALENDLY_SHOWING_URL}
          onClick={openCalendlyPopup}
          className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          Schedule time with me
        </a>
      </div>
    );
  }

  return (
    <div
      id="consultation-form"
      className={`bg-white rounded-xl p-6 md:p-8 text-gray-900 shadow-lg ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <h3 id={titleId} className="text-2xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={CALENDLY_SHOWING_URL}
        onClick={openCalendlyPopup}
        className="mb-4 inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
      >
        <Calendar className="w-4 h-4" aria-hidden="true" />
        Schedule time with me
      </a>
      {/* Official Calendly inline widget container */}
      <div
        ref={inlineRef}
        className="calendly-inline-widget w-full overflow-hidden rounded-lg border border-gray-200 bg-white"
        data-url={CALENDLY_SHOWING_URL}
        style={{ minWidth: 320, height: 700 }}
      />
    </div>
  );
}
