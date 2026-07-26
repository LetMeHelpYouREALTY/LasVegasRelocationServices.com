import { Calendar } from "lucide-react";
import { CALENDLY_SHOWING_URL } from "@/lib/business";

type CalendlyBookingProps = {
  title?: string;
  description?: string;
  /** panel = embed card; button = single CTA link; footer = compact newsletter replacement */
  variant?: "panel" | "button" | "footer";
  className?: string;
  buttonClassName?: string;
};

const DEFAULT_BUTTON =
  "inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors";

/**
 * Calendly showing scheduler — replaces lead capture forms sitewide.
 */
export default function CalendlyBooking({
  title = "Book a Showing with Dr. Jan Duffy",
  description = "Pick a time that works for you. No form to fill out on this page.",
  variant = "panel",
  className = "",
  buttonClassName = DEFAULT_BUTTON,
}: CalendlyBookingProps) {
  if (variant === "button") {
    return (
      <a
        href={CALENDLY_SHOWING_URL}
        target="_blank"
        rel="noopener noreferrer"
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
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          Schedule on Calendly
        </a>
      </div>
    );
  }

  return (
    <div
      id="consultation-form"
      className={`bg-white rounded-xl p-6 md:p-8 text-gray-900 shadow-lg ${className}`.trim()}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={CALENDLY_SHOWING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
      >
        <Calendar className="w-4 h-4" aria-hidden="true" />
        Open Calendly in a new tab
      </a>
      <iframe
        src={`${CALENDLY_SHOWING_URL}?embed_type=Inline&hide_gdpr_banner=1`}
        title="Schedule a showing with Dr. Jan Duffy on Calendly"
        className="w-full h-[720px] rounded-lg border border-gray-200 bg-white"
        loading="lazy"
      />
    </div>
  );
}
