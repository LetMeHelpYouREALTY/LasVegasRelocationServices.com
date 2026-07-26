import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/business';
import { getGoogleSiteVerification } from '@/lib/google-verification';
import {
  probeApexRedirect,
  probePriorityPages,
  probeRobots,
  probeSitemap,
} from '@/lib/gsc-checks';
import { SITE_PAGES } from '@/lib/site-pages';

export const dynamic = 'force-dynamic';

type StepStatus = 'done' | 'needs_you' | 'ready' | 'warn';

type OpsStep = {
  id: string;
  order: number;
  title: string;
  status: StepStatus;
  detail: string;
  action?: string;
};

/**
 * Internal readiness check for Google Search Console + production ops.
 * Blocked from crawlers via robots.txt Disallow: /api/
 *
 * GET /api/seo-health
 */
export async function GET() {
  const verification = getGoogleSiteVerification();
  const cronConfigured = Boolean(process.env.CRON_SECRET?.trim());
  const fubConfigured = Boolean(
    process.env.FOLLOW_UP_BOSS_API_KEY?.trim() &&
      !/^your-|changeme|placeholder/i.test(process.env.FOLLOW_UP_BOSS_API_KEY),
  );

  const [apex, sitemap, robots, priorityPages] = await Promise.all([
    probeApexRedirect(),
    probeSitemap(),
    probeRobots(),
    probePriorityPages(),
  ]);

  const pagesOk = priorityPages.every((p) => p.ok && p.status === 200);
  const sitemapReadyForGsc = sitemap.ok && robots.ok;

  const steps: OpsStep[] = [
    {
      id: 'gsc-property',
      order: 1,
      title: 'Google Search Console — Domain property',
      status: 'needs_you',
      detail:
        'Create a Domain property for lasvegasrelocationservices.com (covers www + apex). URL-prefix www-only misses apex signals.',
      action: 'https://search.google.com/search-console',
    },
    {
      id: 'gsc-verify',
      order: 2,
      title: 'Verify ownership',
      status: verification ? 'done' : 'needs_you',
      detail: verification
        ? 'Verification token present (Cloudflare DNS TXT + HTML meta backup). Domain property should already verify in GSC.'
        : 'Preferred: DNS TXT on the Domain property. Or HTML tag → paste content= into Vercel as NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION and redeploy. Or drop google*.html into /public.',
    },
    {
      id: 'gsc-sitemap-live',
      order: 3,
      title: 'Sitemap + robots ready for GSC',
      status: sitemapReadyForGsc ? 'ready' : 'warn',
      detail: sitemapReadyForGsc
        ? `Live sitemap has ${sitemap.urlCount}/${sitemap.expectedCount} www URLs; robots.txt includes Sitemap line. Submit in GSC → Sitemaps (paste sitemap.xml only, not the full URL if the UI is relative — full URL also works): ${SITE_URL}/sitemap.xml`
        : `Sitemap ok=${sitemap.ok} (count ${sitemap.urlCount}/${sitemap.expectedCount}, allWww=${sitemap.allWwwCanonical}); robots ok=${robots.ok} (hasSitemapLine=${robots.hasSitemapLine}).`,
      action: `${SITE_URL}/sitemap.xml`,
    },
    {
      id: 'gsc-sitemap-submit',
      order: 4,
      title: 'Submit sitemap in Search Console',
      status: 'needs_you',
      detail: `After verification: GSC → Sitemaps → add “sitemap.xml” → Submit. Expected ${SITE_PAGES.length} discovered URLs. Google ignores changefreq/priority; accurate lastmod matters.`,
      action: 'https://search.google.com/search-console',
    },
    {
      id: 'apex-301',
      order: 5,
      title: 'Apex → www permanent redirect (301/308)',
      status: apex.ok ? 'done' : 'needs_you',
      detail: apex.ok
        ? `Live apex redirect is ${apex.status} → ${apex.location}`
        : `Live apex is ${apex.status ?? 'unreachable'} → ${apex.location ?? 'n/a'}. vercel.json + middleware use 301, but Vercel Domains still answers first. Project → Settings → Domains → lasvegasrelocationservices.com → redirect to www with status 301.`,
    },
    {
      id: 'gsc-pages',
      order: 6,
      title: 'Priority pages return 200',
      status: pagesOk ? 'ready' : 'warn',
      detail: pagesOk
        ? 'Homepage, international relocation, about, and contact all return 200 with self-canonicals suitable for URL Inspection.'
        : `Failed or non-200: ${priorityPages
            .filter((p) => !p.ok || p.status !== 200)
            .map((p) => `${p.url} (${p.status})`)
            .join(', ') || 'unknown'}`,
    },
    {
      id: 'fub-rotate',
      order: 7,
      title: 'Rotate Follow Up Boss API key',
      status: 'needs_you',
      detail:
        'A live FUB key was committed in git history (commit ddf0bd2). Revoke/rotate in Follow Up Boss → Admin → API, then set FOLLOW_UP_BOSS_API_KEY in Vercel Production.',
    },
    {
      id: 'cron-secret',
      order: 8,
      title: 'Set CRON_SECRET in Vercel',
      status: cronConfigured ? 'done' : 'needs_you',
      detail: cronConfigured
        ? 'CRON_SECRET is present; /api/cron/daily can run GSC hygiene checks at 10:00 UTC.'
        : 'Generate with `openssl rand -hex 24`, add to Vercel → Settings → Environment Variables (Production), name CRON_SECRET.',
    },
    {
      id: 'gsc-index',
      order: 9,
      title: 'Validate Fix + request indexing',
      status: 'needs_you',
      detail:
        'URL Inspection on homepage and /services/international-relocation. Use Validate Fix on “Crawled – currently not indexed” before mass Request indexing. Do not rely on sitemap ping (deprecated).',
      action: 'https://search.google.com/search-console',
    },
  ];

  const needsYou = steps.filter((s) => s.status === 'needs_you').length;
  const warnings = steps.filter((s) => s.status === 'warn').length;

  return NextResponse.json(
    {
      ok: needsYou === 0 && warnings === 0,
      generatedAt: new Date().toISOString(),
      canonicalHost: SITE_URL,
      googleSiteVerificationMeta: Boolean(verification),
      googleSiteVerificationHint: verification
        ? 'Meta tag will render as <meta name="google-site-verification" content="…">'
        : 'DNS token fallback missing — set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION or restore GOOGLE_SITE_VERIFICATION_DNS',
      cronSecretConfigured: cronConfigured,
      followUpBossKeyConfigured: fubConfigured,
      apexRedirect: apex,
      sitemap,
      robots,
      priorityPages: priorityPages.map((p) => ({
        url: p.url,
        status: p.status,
        ok: p.ok,
        canonical: p.canonical ?? null,
        selfCanonical:
          p.canonical === p.url ||
          (p.url === SITE_URL && p.canonical === `${SITE_URL}/`),
      })),
      gscSubmit: {
        propertyType: 'Domain property recommended',
        sitemapToPaste: 'sitemap.xml',
        sitemapAbsolute: `${SITE_URL}/sitemap.xml`,
        expectedUrlCount: SITE_PAGES.length,
        note: 'Google no longer supports sitemap ping; submit once in GSC and keep lastmod accurate when primary content changes.',
      },
      opsChecklist: steps,
      needsYouCount: needsYou,
      warnCount: warnings,
      gscNextSteps: steps
        .filter((s) => s.status === 'needs_you' || s.status === 'warn')
        .sort((a, b) => a.order - b.order)
        .map((s) => `${s.order}. ${s.title}: ${s.detail}`),
    },
    {
      headers: {
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  );
}
