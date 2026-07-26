/**
 * Google Search Console ownership verification helpers.
 *
 * Domain property is already verified via Cloudflare DNS TXT:
 *   google-site-verification=ex0RZzYvOVwZhwpkvLONUP8jrvM-6SCfQYBlycutG8Q
 * We also emit the HTML meta tag as a backup for URL-prefix properties.
 *
 * Override with NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION if GSC issues a new token.
 */

const PLACEHOLDER_PATTERN = /^(your-google-verification-code|xxx+|placeholder|changeme)$/i;

/** Token from live Cloudflare DNS TXT (Domain property verification). */
export const GOOGLE_SITE_VERIFICATION_DNS =
  'ex0RZzYvOVwZhwpkvLONUP8jrvM-6SCfQYBlycutG8Q';

/** Returns a usable verification token, or undefined if unset/placeholder. */
export function getGoogleSiteVerification(): string | undefined {
  const token =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
    process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
    GOOGLE_SITE_VERIFICATION_DNS;

  if (!token || PLACEHOLDER_PATTERN.test(token)) {
    return undefined;
  }

  // GSC sometimes shows the full tag; extract content="..."
  const metaMatch = token.match(/content=["']([^"']+)["']/i);
  if (metaMatch?.[1]) {
    return metaMatch[1];
  }

  return token;
}
