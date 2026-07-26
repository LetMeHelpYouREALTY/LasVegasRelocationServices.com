import { SITE_URL } from '@/lib/business';

export type SitePage = {
  path: string;
  /**
   * Accurate lastmod for GSC (ISO date or datetime).
   * Bump only when primary content/structure/schema/links change — not for footer chrome.
   * Google ignores changefreq/priority; lastmod is the signal that matters.
   */
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

/**
 * Canonical URL inventory for sitemap.xml and GSC submission.
 * Paths are relative; all resolve under SITE_URL (www).
 */
export const SITE_PAGES: SitePage[] = [
  { path: '/', lastModified: '2026-07-26T13:20:00.000Z', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', lastModified: '2026-07-26T13:20:00.000Z', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/services/residential-moving',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/services/corporate-relocation',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/services/international-relocation',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/services/investment-properties',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/services/moving-transportation',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/services/settling-in',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/services/relocation-planning',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/services/luxury-relocation',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { path: '/relocating-from', lastModified: '2026-07-26T13:20:00.000Z', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/relocating-from/los-angeles',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/relocating-from/san-diego',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/relocating-from/chicago',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/relocating-from/new-york',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/relocating-from/miami',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/relocating-from/seattle',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  { path: '/about', lastModified: '2026-07-26T13:20:00.000Z', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: '2026-07-26T13:20:00.000Z', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/resources', lastModified: '2026-07-26T13:20:00.000Z', changeFrequency: 'monthly', priority: 0.6 },
  {
    path: '/image-license',
    lastModified: '2026-07-26T13:20:00.000Z',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];

/** Absolute www URL for a path. Homepage has no trailing slash (matches canonical). */
export function absoluteUrl(path: string): string {
  if (path === '/' || path === '') {
    return SITE_URL;
  }
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
