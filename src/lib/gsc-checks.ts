import { SITE_URL } from '@/lib/business';
import { SITE_PAGES, absoluteUrl } from '@/lib/site-pages';

export type UrlProbe = {
  url: string;
  ok: boolean;
  status: number | null;
  canonical?: string | null;
  location?: string | null;
  error?: string;
};

export type SitemapProbe = {
  url: string;
  ok: boolean;
  status: number | null;
  urlCount: number;
  expectedCount: number;
  allWwwCanonical: boolean;
  sample: string[];
  error?: string;
};

export type RobotsProbe = {
  url: string;
  ok: boolean;
  status: number | null;
  hasSitemapLine: boolean;
  expectedSitemapLine: string;
  error?: string;
};

const FETCH_HEADERS = {
  'User-Agent': 'LasVegasRelocationServices-GSC/1.0',
} as const;

export async function probeUrl(
  url: string,
  options: { parseHtml?: boolean } = {},
): Promise<UrlProbe> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: FETCH_HEADERS,
      cache: 'no-store',
    });

    const location = res.headers.get('location');
    let canonical: string | null = null;

    if (options.parseHtml && res.status === 200) {
      const html = await res.text();
      const canonicalMatch = html.match(
        /rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
      );
      canonical = canonicalMatch?.[1] || canonicalMatch?.[2] || null;
    }

    return {
      url,
      ok: res.status >= 200 && res.status < 400,
      status: res.status,
      location,
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

export async function probeSitemap(): Promise<SitemapProbe> {
  const url = `${SITE_URL}/sitemap.xml`;
  try {
    const res = await fetch(url, {
      headers: FETCH_HEADERS,
      cache: 'no-store',
    });
    const body = await res.text();
    const locs = [...body.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) =>
      m[1].trim(),
    );
    const allWwwCanonical = locs.every((loc) =>
      loc.startsWith('https://www.lasvegasrelocationservices.com'),
    );

    return {
      url,
      ok: res.ok && locs.length === SITE_PAGES.length && allWwwCanonical,
      status: res.status,
      urlCount: locs.length,
      expectedCount: SITE_PAGES.length,
      allWwwCanonical,
      sample: locs.slice(0, 3),
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: null,
      urlCount: 0,
      expectedCount: SITE_PAGES.length,
      allWwwCanonical: false,
      sample: [],
      error: error instanceof Error ? error.message : 'Unknown fetch error',
    };
  }
}

export async function probeRobots(): Promise<RobotsProbe> {
  const url = `${SITE_URL}/robots.txt`;
  const expectedSitemapLine = `Sitemap: ${SITE_URL}/sitemap.xml`;
  try {
    const res = await fetch(url, {
      headers: FETCH_HEADERS,
      cache: 'no-store',
    });
    const body = await res.text();
    const hasSitemapLine = body.includes(expectedSitemapLine);

    return {
      url,
      ok: res.ok && hasSitemapLine,
      status: res.status,
      hasSitemapLine,
      expectedSitemapLine,
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: null,
      hasSitemapLine: false,
      expectedSitemapLine,
      error: error instanceof Error ? error.message : 'Unknown fetch error',
    };
  }
}

export async function probeApexRedirect(): Promise<{
  status: number | null;
  location: string | null;
  ok: boolean;
}> {
  const probe = await probeUrl('https://lasvegasrelocationservices.com/');
  const location = probe.location;
  const ok =
    (probe.status === 301 || probe.status === 308) &&
    Boolean(location?.includes('www.lasvegasrelocationservices.com'));

  return {
    status: probe.status,
    location: location ?? null,
    ok,
  };
}

/** Priority URLs for GSC URL Inspection / Validate Fix. */
export const GSC_PRIORITY_PATHS = [
  '/',
  '/services/international-relocation',
  '/about',
  '/contact',
] as const;

export async function probePriorityPages(): Promise<UrlProbe[]> {
  return Promise.all(
    GSC_PRIORITY_PATHS.map((path) =>
      probeUrl(absoluteUrl(path), { parseHtml: true }),
    ),
  );
}
