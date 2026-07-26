"use client";

import Script from "next/script";
import { useEffect } from "react";
import { CALENDLY_SHOWING_URL } from "@/lib/business";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

function initBadge() {
  if (typeof window === "undefined" || !window.Calendly?.initBadgeWidget)
    return;
  // Avoid duplicate badges on Fast Refresh / remount
  if (document.querySelector(".calendly-badge-widget")) return;
  window.Calendly.initBadgeWidget({
    url: CALENDLY_SHOWING_URL,
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
        'a[href*="calendly.com/drjanduffy/showing"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      // Allow modified clicks (new tab / download) to pass through
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      if (!window.Calendly?.initPopupWidget) return;
      event.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_SHOWING_URL });
    }

    document.addEventListener("click", onClick);
    // Script may already be cached from a prior navigation
    if (window.Calendly) initBadge();
    return () => document.removeEventListener("click", onClick);
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
