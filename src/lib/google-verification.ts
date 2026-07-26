/**
 * Google Search Console ownership verification helpers.
 *
 * Preferred method for this Next.js site: HTML meta tag via
 * NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (the content= value from GSC,
 * not the full meta tag).
 *
 * Alternate: drop the HTML file Google gives you into /public
 * (e.g. public/googleXXXXXXXX.html) and redeploy.
 */

const PLACEHOLDER_PATTERN = /^(your-google-verification-code|xxx+|placeholder|changeme)$/i;

/** Returns a usable verification token, or undefined if unset/placeholder. */
export function getGoogleSiteVerification(): string | undefined {
  const token =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
    process.env.GOOGLE_SITE_VERIFICATION?.trim();

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
