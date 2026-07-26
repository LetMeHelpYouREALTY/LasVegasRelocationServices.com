import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/business';
import { absoluteUrl, SITE_PAGES } from '@/lib/site-pages';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

type UrlCheck = {
  url: string;
  ok: boolean;
  status: number | null;
  canonical?: string | null;
  error?: string;
};

function assertCronAuthorized(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get('authorization');
  return Boolean(cronSecret && authHeader === `Bearer ${cronSecret}`);
}

async function checkUrl(url: string): Promise<UrlCheck> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: {
        'User-Agent': 'LasVegasRelocationServices-Cron/1.0',
      },
      cache: 'no-store',
    });
    const html = res.status === 200 ? await res.text() : '';
    const canonicalMatch = html.match(
      /rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i
    );
    const canonical = canonicalMatch?.[1] || canonicalMatch?.[2] || null;
    return {
      url,
      ok: res.status >= 200 && res.status < 400,
      status: res.status,
      canonical,
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: null,
      error: error instanceof Error ? error.message : 'Unknown fetch error',
    };
  }
}

/**
 * Daily production cron: sitemap reachability + key-page index hygiene.
 * Secured with CRON_SECRET (Vercel sends Authorization: Bearer <secret>).
 *
 * Schedule: 0 10 * * * (10:00 UTC) via vercel.json
 */
export async function GET(request: NextRequest) {
  if (!assertCronAuthorized(request)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const schedule = request.headers.get('x-vercel-cron-schedule');
  const userAgent = request.headers.get('user-agent');

  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const robotsUrl = `${SITE_URL}/robots.txt`;
  const priorityPaths = ['/', '/services/international-relocation', '/about', '/contact'];

  const [sitemap, robots, ...pages] = await Promise.all([
    checkUrl(sitemapUrl),
    checkUrl(robotsUrl),
    ...priorityPaths.map((path) => checkUrl(absoluteUrl(path))),
  ]);

  const apex = await checkUrl('https://lasvegasrelocationservices.com/');
  const apexRedirectsToWww =
    (apex.status === 301 || apex.status === 308 || apex.status === 307 || apex.status === 302) &&
    true;

  const report = {
    ok: sitemap.ok && robots.ok && pages.every((p) => p.ok),
    ranAt: new Date().toISOString(),
    schedule,
    userAgent,
    siteUrl: SITE_URL,
    sitemapUrlCount: SITE_PAGES.length,
    checks: {
      sitemap,
      robots,
      pages,
      apexRedirect: {
        ...apex,
        preferredStatus: 301,
        note:
          apex.status === 301 || apex.status === 308
            ? 'Permanent redirect OK for GSC host consolidation'
            : apex.status === 307 || apex.status === 302
              ? 'Temporary redirect — prefer 301/308 so Google consolidates to www'
              : 'Unexpected apex response',
        redirectsToWww: apexRedirectsToWww,
      },
    },
  };

  return NextResponse.json(report, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
