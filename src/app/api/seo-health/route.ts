import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/business';
import { getGoogleSiteVerification } from '@/lib/google-verification';
import { SITE_PAGES, absoluteUrl } from '@/lib/site-pages';

export const dynamic = 'force-dynamic';

/**
 * Internal readiness check for Google Search Console setup.
 * Blocked from crawlers via robots.txt Disallow: /api/
 *
 * GET /api/seo-health
 */
export async function GET() {
  const verification = getGoogleSiteVerification();

  const checklist = {
    ok: true,
    generatedAt: new Date().toISOString(),
    canonicalHost: SITE_URL,
    googleSiteVerificationMeta: Boolean(verification),
    googleSiteVerificationHint: verification
      ? 'Meta tag will render as <meta name="google-site-verification" content="…">'
      : 'Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel (GSC HTML-tag content value), or drop google*.html into /public',
    sitemap: {
      url: `${SITE_URL}/sitemap.xml`,
      urlCount: SITE_PAGES.length,
      sample: SITE_PAGES.slice(0, 3).map((p) => absoluteUrl(p.path)),
    },
    robots: {
      url: `${SITE_URL}/robots.txt`,
      expectedSitemapLine: `Sitemap: ${SITE_URL}/sitemap.xml`,
    },
    gscNextSteps: [
      'Prefer a Domain property for lasvegasrelocationservices.com (covers www + apex), or URL-prefix https://www.lasvegasrelocationservices.com/',
      'Verify ownership (DNS TXT, HTML meta via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, or HTML file in /public)',
      'Submit sitemap: https://www.lasvegasrelocationservices.com/sitemap.xml',
      'Set preferred domain signals: apex must 301 → www (vercel.json)',
      'Use URL Inspection on homepage + /services/international-relocation after deploy',
      'Request indexing only after Validate Fix on “Crawled – currently not indexed” URLs',
    ],
  };

  return NextResponse.json(checklist, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
