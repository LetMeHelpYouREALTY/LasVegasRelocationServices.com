"use client";

import Script from "next/script";
import { useEffect } from "react";
import { calendlyEventForPath, withCalendlyParams } from "@/lib/business";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

function initBadge() {
  const pathname = window.location.pathname;
  if (typeof window === "undefined" || !window.Calendly?.initBadgeWidget)
    return;
  // Avoid duplicate badges on Fast Refresh / remount
  if (document.querySelector(".calendly-badge-widget")) return;
  window.Calendly.initBadgeWidget({
    url: withCalendlyParams(calendlyEventForPath(pathname), "badge", pathname),
    text: "Schedule time with me",
    color: "#0069ff",
    textColor: "#ffffff",
    branding: false,
  });
}

/**
 * Loads Calendly widget.css + widget.js once, enables the floating badge on
 * every page, and upgrades all Calendly links to the popup widget.
 */
export default function CalendlyScript() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest?.(
        'a[href*="calendly.com/drjanduffy/"]',
      ) as HTMLAnchorElement | null;
      if (!anchor || event.defaultPrevented) return;
      // Allow modified clicks (new tab / download) to pass through
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      if (!window.Calendly?.initPopupWidget) return;
      event.preventDefault();
      const pathname = window.location.pathname;
      // Links already tagged by CalendlyBooking keep their own UTM medium.
      const url = anchor.href.includes("utm_source=")
        ? anchor.href
        : withCalendlyParams(
            anchor.href.includes("/showing")
              ? calendlyEventForPath(pathname)
              : anchor.href.split("?")[0],
            "link",
            pathname,
          );
      window.Calendly.initPopupWidget({ url });
    }

    // Booking conversion for GA4 (Calendly posts calendly.* messages).
    function onMessage(event: MessageEvent) {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;
      (window as { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        "calendly_booked",
        { page_path: window.location.pathname },
      );
    }

    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage);
    // Script may already be cached from a prior navigation
    if (window.Calendly) initBadge();
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <Script
      id="calendly-widget"
      src={WIDGET_SRC}
      strategy="lazyOnload"
      onLoad={initBadge}
    />
  );
}
