import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/business";
import { getGoogleSiteVerification } from "@/lib/google-verification";
import { SITE_PAGES, absoluteUrl } from "@/lib/site-pages";

export const dynamic = "force-dynamic";

type StepStatus = "done" | "needs_you" | "blocked" | "warn";

type OpsStep = {
  id: string;
  order: number;
  title: string;
  status: StepStatus;
  detail: string;
  action?: string;
};

async function probeApexRedirect(): Promise<{
  status: number | null;
  location: string | null;
  ok: boolean;
}> {
  try {
    const res = await fetch("https://lasvegasrelocationservices.com/", {
      method: "HEAD",
      redirect: "manual",
      cache: "no-store",
    });
    const location = res.headers.get("location");
    const ok =
      (res.status === 301 || res.status === 308) &&
      Boolean(location?.includes("www.lasvegasrelocationservices.com"));
    return { status: res.status, location, ok };
  } catch {
    return { status: null, location: null, ok: false };
  }
}

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
  const apex = await probeApexRedirect();

  const steps: OpsStep[] = [
    {
      id: "gsc-property",
      order: 1,
      title: "Google Search Console — Domain property",
      status: "needs_you",
      detail:
        "Create a Domain property for lasvegasrelocationservices.com (covers www + apex).",
      action: "https://search.google.com/search-console",
    },
    {
      id: "gsc-verify",
      order: 2,
      title: "Verify ownership",
      status: verification ? "done" : "needs_you",
      detail: verification
        ? "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is set; meta tag will render."
        : "In GSC use DNS TXT (preferred) or HTML tag. Paste the content= value into Vercel as NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, then redeploy.",
    },
    {
      id: "gsc-sitemap",
      order: 3,
      title: "Submit sitemap",
      status: "needs_you",
      detail: `After verification, submit ${SITE_URL}/sitemap.xml (${SITE_PAGES.length} URLs).`,
      action: `${SITE_URL}/sitemap.xml`,
    },
    {
      id: "apex-301",
      order: 4,
      title: "Apex → www permanent redirect (301/308)",
      status: apex.ok ? "done" : "needs_you",
      detail: apex.ok
        ? `Live apex redirect is ${apex.status} → ${apex.location}`
        : `Live apex is ${apex.status ?? "unreachable"} → ${apex.location ?? "n/a"}. vercel.json + middleware use 301, but Vercel Domains still answers first. Project → Settings → Domains → lasvegasrelocationservices.com → redirect to www with status 301.`,
    },
    {
      id: "fub-rotate",
      order: 5,
      title: "Rotate Follow Up Boss API key",
      status: "needs_you",
      detail:
        "A live FUB key was committed in git history (commit ddf0bd2). File is scrubbed to a placeholder, but the old key must be revoked/rotated in Follow Up Boss → Admin → API, then set FOLLOW_UP_BOSS_API_KEY in Vercel Production.",
    },
    {
      id: "cron-secret",
      order: 6,
      title: "Set CRON_SECRET in Vercel",
      status: cronConfigured ? "done" : "needs_you",
      detail: cronConfigured
        ? "CRON_SECRET is present in this deployment environment."
        : "Generate with `openssl rand -hex 24`, add to Vercel → Settings → Environment Variables (Production), name CRON_SECRET. Cron calls /api/cron/daily daily at 10:00 UTC.",
    },
    {
      id: "gsc-index",
      order: 7,
      title: "Validate Fix + request indexing",
      status: "needs_you",
      detail:
        "URL Inspection on homepage and /services/international-relocation. Use Validate Fix on “Crawled – currently not indexed” before mass Request indexing.",
    },
  ];

  const needsYou = steps.filter((s) => s.status === "needs_you").length;

  return NextResponse.json(
    {
      ok: needsYou === 0,
      generatedAt: new Date().toISOString(),
      canonicalHost: SITE_URL,
      googleSiteVerificationMeta: Boolean(verification),
      googleSiteVerificationHint: verification
        ? 'Meta tag will render as <meta name="google-site-verification" content="…">'
        : "Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel (GSC HTML-tag content value), or drop google*.html into /public",
      cronSecretConfigured: cronConfigured,
      followUpBossKeyConfigured: fubConfigured,
      apexRedirect: apex,
      sitemap: {
        url: `${SITE_URL}/sitemap.xml`,
        urlCount: SITE_PAGES.length,
        sample: SITE_PAGES.slice(0, 3).map((p) => absoluteUrl(p.path)),
      },
      robots: {
        url: `${SITE_URL}/robots.txt`,
        expectedSitemapLine: `Sitemap: ${SITE_URL}/sitemap.xml`,
      },
      opsChecklist: steps,
      needsYouCount: needsYou,
      gscNextSteps: steps
        .filter((s) => s.status !== "done")
        .sort((a, b) => a.order - b.order)
        .map((s) => `${s.order}. ${s.title}: ${s.detail}`),
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
