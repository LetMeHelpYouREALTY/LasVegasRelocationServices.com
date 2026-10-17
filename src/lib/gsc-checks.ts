import { SITE_URL } from '@/lib/business';
import { absoluteUrl, SITE_PAGES } from '@/lib/site-pages';

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
  options: { parseHtml?: boolean } = {}
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
        /rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i
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
    const locs = [...body.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
    const allWwwCanonical = locs.every((loc) =>
      loc.startsWith('https://www.lasvegasrelocationservices.com')
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

/**
 * URLs in the 2026-10-17 GSC Coverage drilldown, issue "Page with redirect".
 * Both must stay out of the index. They are a problem only while the host hop
 * is temporary (307/302): Google follows it but does not treat www as canonical.
 * https://developers.google.com/search/docs/crawling-indexing/301-redirects
 */
export const GSC_PAGE_WITH_REDIRECT_URLS = [
  'http://lasvegasrelocationservices.com/',
  'https://lasvegasrelocationservices.com/',
] as const;

const APEX_HOST = 'lasvegasrelocationservices.com';
const WWW_HOST = 'www.lasvegasrelocationservices.com';

export type RedirectHop = {
  url: string;
  status: number | null;
  location: string | null;
  permanent: boolean;
};

/** Where the apex host redirect status is set. Domain redirect runs before middleware. */
export const VERCEL_APEX_DOMAIN_SETTINGS_URL =
  'https://vercel.com/janet-duffys-projects/las-vegas-relocation-services-com/settings/domains';

export function formatRedirectHops(hops: readonly RedirectHop[]): string {
  return hops
    .map((hop) => `${hop.url} ${hop.status ?? 'unreachable'} → ${hop.location ?? 'n/a'}`)
    .join('; ');
}

function isPermanentRedirect(status: number | null): boolean {
  return status === 301 || status === 308;
}

function parseLocation(location: string | null, base: string): URL | null {
  if (!location) {
    return null;
  }
  try {
    return new URL(location, base);
  } catch {
    return null;
  }
}

function isHomePath(url: URL): boolean {
  return url.pathname === '/' || url.pathname === '';
}

function isWwwHome(url: URL | null): boolean {
  return url !== null && url.protocol === 'https:' && url.hostname === WWW_HOST && isHomePath(url);
}

function isHttpsApexHome(url: URL | null): boolean {
  return url !== null && url.protocol === 'https:' && url.hostname === APEX_HOST && isHomePath(url);
}

/**
 * Apex → www check for the two GSC "Page with redirect" URLs.
 * `ok` is true only when every hop is 301 or 308 and the chain ends at https www.
 * A same-host http→https 308 is acceptable when the https hop is itself permanent.
 */
export async function probeApexRedirect(): Promise<{
  status: number | null;
  location: string | null;
  ok: boolean;
  hops: RedirectHop[];
}> {
  const [httpProbe, httpsProbe] = await Promise.all([
    probeUrl(GSC_PAGE_WITH_REDIRECT_URLS[0]),
    probeUrl(GSC_PAGE_WITH_REDIRECT_URLS[1]),
  ]);

  const httpLocation = parseLocation(httpProbe.location ?? null, httpProbe.url);
  const httpsLocation = parseLocation(httpsProbe.location ?? null, httpsProbe.url);
  const httpsPermanentToWww = isPermanentRedirect(httpsProbe.status) && isWwwHome(httpsLocation);
  const httpDirectToWww = isPermanentRedirect(httpProbe.status) && isWwwHome(httpLocation);
  const httpToHttpsApex = isPermanentRedirect(httpProbe.status) && isHttpsApexHome(httpLocation);

  const hops: RedirectHop[] = [
    {
      url: httpProbe.url,
      status: httpProbe.status,
      location: httpProbe.location ?? null,
      permanent: isPermanentRedirect(httpProbe.status),
    },
    {
      url: httpsProbe.url,
      status: httpsProbe.status,
      location: httpsProbe.location ?? null,
      permanent: isPermanentRedirect(httpsProbe.status),
    },
  ];

  return {
    status: httpsProbe.status,
    location: httpsProbe.location ?? null,
    ok: httpsPermanentToWww && (httpDirectToWww || httpToHttpsApex),
    hops,
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
    GSC_PRIORITY_PATHS.map((path) => probeUrl(absoluteUrl(path), { parseHtml: true }))
  );
}
