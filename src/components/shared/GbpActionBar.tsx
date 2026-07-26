import { MapPin, Phone, Star } from 'lucide-react';
import {
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/business';

type GbpActionBarProps = {
  className?: string;
  /** Dark (on blue/purple bands) vs light (on white). */
  variant?: 'light' | 'dark';
};

/**
 * GBP-aligned NAP actions: Call, Directions, View Google Reviews, Write a Review.
 * Required on contact/local surfaces per local SEO operating rules.
 */
export default function GbpActionBar({ className = '', variant = 'light' }: GbpActionBarProps) {
  const isDark = variant === 'dark';
  const base = isDark
    ? 'border-white/40 text-white hover:bg-white hover:text-blue-900'
    : 'border-blue-800 text-blue-900 hover:bg-blue-800 hover:text-white';
  const primary = isDark
    ? 'bg-white text-blue-900 hover:bg-blue-50'
    : 'bg-blue-800 text-white hover:bg-blue-900';

  const linkClass = `inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${base}`;
  const primaryClass = `inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${primary}`;

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className}`}
      aria-label="Contact and Google Business Profile actions"
    >
      <a href={`tel:${PHONE_TEL}`} className={primaryClass}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={GOOGLE_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Directions
      </a>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <Star className="h-4 w-4" aria-hidden="true" />
        View Google Reviews
      </a>
      <a
        href={GOOGLE_WRITE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <Star className="h-4 w-4" aria-hidden="true" />
        Write a Review
      </a>
    </div>
  );
}
