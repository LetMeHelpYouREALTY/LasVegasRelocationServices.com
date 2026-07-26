import type { MetadataRoute } from 'next';
import { absoluteUrl, SITE_PAGES } from '@/lib/site-pages';

/** Regenerate daily so GSC sees fresh lastmod without per-request churn. */
export const revalidate = 86400;

/**
 * Google Search Console sitemap.
 * Every URL is the www canonical form — never apex, never trailing-slash variants.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
