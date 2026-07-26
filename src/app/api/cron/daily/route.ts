import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/business';
import {
  probeApexRedirect,
  probePriorityPages,
  probeRobots,
  probeSitemap,
} from '@/lib/gsc-checks';
import { SITE_PAGES } from '@/lib/site-pages';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function assertCronAuthorized(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get('authorization');
  return Boolean(cronSecret && authHeader === `Bearer ${cronSecret}`);
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

  const [sitemap, robots, pages, apex] = await Promise.all([
    probeSitemap(),
    probeRobots(),
    probePriorityPages(),
    probeApexRedirect(),
  ]);

  const pagesOk = pages.every((p) => p.ok && p.status === 200);

  const report = {
    ok: sitemap.ok && robots.ok && pagesOk,
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
        note: apex.ok
          ? 'Permanent redirect OK for GSC host consolidation'
          : apex.status === 307 || apex.status === 302
            ? 'Temporary redirect — prefer 301/308 so Google consolidates to www'
            : 'Unexpected apex response',
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
