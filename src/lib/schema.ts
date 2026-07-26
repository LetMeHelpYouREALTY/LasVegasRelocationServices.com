/**
 * Google Search structured data builders (JSON-LD).
 *
 * Supported types we emit (Search Central gallery / Jul 2026 docs):
 * - LocalBusiness / RealEstateAgent, Organization, Person
 * - ProfilePage, ContactPage, WebPage, CollectionPage, Service
 * - ImageObject license metadata (contentUrl + creator/credit/copyright/license)
 * - BreadcrumbList (desktop rich results)
 * - og:image + ImageObject for preferred thumbnails (Mar 2026 Images/Discover)
 *
 * Intentionally NOT emitted (deprecated / removed rich results):
 * - FAQPage (deprecated May 2026; docs removed June 15, 2026)
 * - HowTo (removed 2023)
 * - Merchant listing Product.category / sale pricing (ecommerce-only; N/A here)
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 * @see https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata
 * @see https://developers.google.com/search/docs/appearance/google-images#specify-preferred-image
 * @see https://developers.google.com/search/updates/search_docs_updates
 */

import type { Metadata } from 'next';
import {
  ADDRESS,
  AGENT_NAME,
  AREA_SERVED,
  BROKERAGE,
  BUSINESS_ID,
  BUSINESS_NAME,
  EMAIL,
  GOOGLE_DIRECTIONS_URL,
  GOOGLE_PLACE_ID,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  LICENSE_LABEL,
  LICENSE_NUMBER,
  PERSON_ID,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  WEBSITE_ID,
  type BreadcrumbInput,
  breadcrumbListSchema,
  businessSchema,
  personSchema,
  webSiteSchema,
} from '@/lib/business';
import { HERO_IMAGES, type HeroImageKey } from '@/lib/hero-images';
import { absoluteUrl } from '@/lib/site-pages';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const IMAGE_LICENSE_URL = `${SITE_URL}/image-license`;
/** Matches AgentPortrait / public/dr-jan-duffy.webp */
export const AGENT_IMAGE_URL = `${SITE_URL}/dr-jan-duffy.webp`;
export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

const RELOCATION_OFFER_CATALOG = {
  '@type': 'OfferCatalog',
  name: 'Relocation Services',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Residential Relocation',
        description:
          'Complete home relocation services including packing, moving, and settling into your new Las Vegas home.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Corporate Relocation',
        description:
          'Comprehensive corporate relocation solutions for businesses and their employees moving to Las Vegas.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'International Relocation',
        description:
          'Expert international relocation services for clients moving to Las Vegas from abroad.',
      },
    },
  ],
} as const;

export type PageSchemaKind =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'Service'
  | 'ProfilePage';

export type HeroPageSeo = {
  path: string;
  name: string;
  description: string;
  kind: PageSchemaKind;
  breadcrumbs: BreadcrumbInput[];
  serviceName?: string;
};

/** Per-hero SEO + schema routing so every PageHero page emits complete markup. */
export const HERO_PAGE_SEO: Record<HeroImageKey, HeroPageSeo> = {
  home: {
    path: '/',
    name: 'Las Vegas Relocation Services | Dr. Jan Duffy',
    description:
      'Professional relocation services to Las Vegas with Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties.',
    kind: 'WebPage',
    breadcrumbs: [],
  },
  services: {
    path: '/services',
    name: 'Las Vegas Relocation Services',
    description:
      'Residential, corporate, international, and luxury relocation services to Las Vegas and Henderson.',
    kind: 'CollectionPage',
    breadcrumbs: [{ label: 'Services', href: '/services' }],
  },
  residentialMoving: {
    path: '/services/residential-moving',
    name: 'Residential Moving to Las Vegas',
    description:
      'Residential relocation and home-finding services for households moving to Las Vegas.',
    kind: 'Service',
    serviceName: 'Residential Relocation',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: 'Residential Moving', href: '/services/residential-moving' },
    ],
  },
  corporateRelocation: {
    path: '/services/corporate-relocation',
    name: 'Corporate Relocation to Las Vegas',
    description:
      'Corporate relocation coordination for businesses and transferring employees moving to Las Vegas.',
    kind: 'Service',
    serviceName: 'Corporate Relocation',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: 'Corporate Relocation', href: '/services/corporate-relocation' },
    ],
  },
  internationalRelocation: {
    path: '/services/international-relocation',
    name: 'International Relocation to Las Vegas',
    description:
      'International relocation support for households and businesses moving to Las Vegas from abroad.',
    kind: 'Service',
    serviceName: 'International Relocation',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      {
        label: 'International Relocation',
        href: '/services/international-relocation',
      },
    ],
  },
  investmentProperties: {
    path: '/services/investment-properties',
    name: 'Las Vegas Investment Properties',
    description:
      'Investment property guidance in Las Vegas and Henderson with Dr. Jan Duffy.',
    kind: 'Service',
    serviceName: 'Investment Property Advising',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      {
        label: 'Investment Properties',
        href: '/services/investment-properties',
      },
    ],
  },
  movingTransportation: {
    path: '/services/moving-transportation',
    name: 'Moving & Transportation to Las Vegas',
    description:
      'Moving and transportation coordination for Las Vegas relocations.',
    kind: 'Service',
    serviceName: 'Moving & Transportation Coordination',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      {
        label: 'Moving & Transportation',
        href: '/services/moving-transportation',
      },
    ],
  },
  settlingIn: {
    path: '/services/settling-in',
    name: 'Settling-In Services in Las Vegas',
    description:
      'Settling-in support after your move to Las Vegas, including utilities and local orientation.',
    kind: 'Service',
    serviceName: 'Settling-In Services',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: 'Settling In', href: '/services/settling-in' },
    ],
  },
  relocationPlanning: {
    path: '/services/relocation-planning',
    name: 'Las Vegas Relocation Planning',
    description:
      'Relocation planning timelines and checklists for moves to Las Vegas.',
    kind: 'Service',
    serviceName: 'Relocation Planning',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: 'Relocation Planning', href: '/services/relocation-planning' },
    ],
  },
  luxuryRelocation: {
    path: '/services/luxury-relocation',
    name: 'Luxury Relocation to Las Vegas',
    description:
      'Luxury home relocation services in Las Vegas, Summerlin, and Henderson.',
    kind: 'Service',
    serviceName: 'Luxury Relocation',
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: 'Luxury Relocation', href: '/services/luxury-relocation' },
    ],
  },
  relocatingFrom: {
    path: '/relocating-from',
    name: 'Relocating to Las Vegas from Major Cities',
    description:
      'City-to-city relocation guides for moving to Las Vegas from across the U.S.',
    kind: 'CollectionPage',
    breadcrumbs: [{ label: 'Relocating From', href: '/relocating-from' }],
  },
  fromLosAngeles: {
    path: '/relocating-from/los-angeles',
    name: 'Moving from Los Angeles to Las Vegas',
    description:
      'Relocation guide for households and businesses moving from Los Angeles to Las Vegas.',
    kind: 'WebPage',
    breadcrumbs: [
      { label: 'Relocating From', href: '/relocating-from' },
      { label: 'Los Angeles', href: '/relocating-from/los-angeles' },
    ],
  },
  fromSanDiego: {
    path: '/relocating-from/san-diego',
    name: 'Moving from San Diego to Las Vegas',
    description:
      'Relocation guide for households moving from San Diego to Las Vegas.',
    kind: 'WebPage',
    breadcrumbs: [
      { label: 'Relocating From', href: '/relocating-from' },
      { label: 'San Diego', href: '/relocating-from/san-diego' },
    ],
  },
  fromChicago: {
    path: '/relocating-from/chicago',
    name: 'Moving from Chicago to Las Vegas',
    description:
      'Relocation guide for households moving from Chicago to Las Vegas.',
    kind: 'WebPage',
    breadcrumbs: [
      { label: 'Relocating From', href: '/relocating-from' },
      { label: 'Chicago', href: '/relocating-from/chicago' },
    ],
  },
  fromNewYork: {
    path: '/relocating-from/new-york',
    name: 'Moving from New York to Las Vegas',
    description:
      'Relocation guide for households moving from New York to Las Vegas.',
    kind: 'WebPage',
    breadcrumbs: [
      { label: 'Relocating From', href: '/relocating-from' },
      { label: 'New York', href: '/relocating-from/new-york' },
    ],
  },
  fromMiami: {
    path: '/relocating-from/miami',
    name: 'Moving from Miami to Las Vegas',
    description:
      'Relocation guide for households moving from Miami to Las Vegas.',
    kind: 'WebPage',
    breadcrumbs: [
      { label: 'Relocating From', href: '/relocating-from' },
      { label: 'Miami', href: '/relocating-from/miami' },
    ],
  },
  fromSeattle: {
    path: '/relocating-from/seattle',
    name: 'Moving from Seattle to Las Vegas',
    description:
      'Relocation guide for households moving from Seattle to Las Vegas.',
    kind: 'WebPage',
    breadcrumbs: [
      { label: 'Relocating From', href: '/relocating-from' },
      { label: 'Seattle', href: '/relocating-from/seattle' },
    ],
  },
  about: {
    path: '/about',
    name: 'About Dr. Jan Duffy',
    description:
      'Meet Dr. Jan Duffy, Nevada-licensed REALTOR® and Las Vegas relocation specialist with Berkshire Hathaway HomeServices Nevada Properties.',
    kind: 'ProfilePage',
    breadcrumbs: [{ label: 'About', href: '/about' }],
  },
  contact: {
    path: '/contact',
    name: 'Contact Dr. Jan Duffy',
    description: `Call ${PHONE_DISPLAY} or book a showing with Dr. Jan Duffy for Las Vegas relocation help.`,
    kind: 'ContactPage',
    breadcrumbs: [{ label: 'Contact', href: '/contact' }],
  },
  resources: {
    path: '/resources',
    name: 'Las Vegas Relocation Resources',
    description:
      'Guides, tools, and neighborhood resources for relocating to Las Vegas.',
    kind: 'CollectionPage',
    breadcrumbs: [{ label: 'Resources', href: '/resources' }],
  },
};

export const OPENING_HOURS_SPECIFICATION = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Saturday',
    opens: '09:00',
    closes: '15:00',
  },
] as const;

/** Google Image metadata (ImageObject) — contentUrl + creator/credit/copyright/license. */
export function imageObjectSchema(options: {
  contentUrl: string;
  name: string;
  description: string;
  width?: number;
  height?: number;
  id?: string;
}) {
  return {
    '@type': 'ImageObject',
    ...(options.id ? { '@id': options.id } : {}),
    contentUrl: options.contentUrl,
    url: options.contentUrl,
    name: options.name,
    description: options.description,
    ...(options.width ? { width: options.width } : {}),
    ...(options.height ? { height: options.height } : {}),
    encodingFormat: options.contentUrl.endsWith('.webp')
      ? 'image/webp'
      : options.contentUrl.endsWith('.png')
        ? 'image/png'
        : 'image/jpeg',
    creator: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: AGENT_NAME,
    },
    creditText: `${AGENT_NAME} / ${BUSINESS_NAME}`,
    copyrightNotice: `© ${new Date().getFullYear()} ${BUSINESS_NAME}. All rights reserved.`,
    license: IMAGE_LICENSE_URL,
    acquireLicensePage: IMAGE_LICENSE_URL,
    representativeOfPage: true,
  };
}

export function agentPortraitImageSchema() {
  return {
    ...imageObjectSchema({
      id: `${SITE_URL}/dr-jan-duffy.webp#image`,
      contentUrl: AGENT_IMAGE_URL,
      name: `${AGENT_NAME} headshot`,
      description: `${AGENT_NAME}, Nevada-licensed REALTOR® (${LICENSE_LABEL}) with ${BROKERAGE}, holding a phone — Las Vegas relocation specialist.`,
      width: 180,
      height: 180,
    }),
    // Portrait is sitewide; page heroes are primaryImageOfPage
    representativeOfPage: false,
  };
}

export function heroImageSchema(key: HeroImageKey) {
  const hero = HERO_IMAGES[key];
  const seo = HERO_PAGE_SEO[key];
  return imageObjectSchema({
    id: `${absoluteUrl(seo.path)}#hero-image`,
    contentUrl: `${SITE_URL}${hero.src}`,
    name: `${seo.name} — hero image`,
    description: hero.alt,
    width: 1920,
    height: 1080,
  });
}

/** Organization knowledge-panel eligible entity (Google Organization docs). */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: AGENT_IMAGE_URL,
      contentUrl: AGENT_IMAGE_URL,
      width: 180,
      height: 180,
    },
    image: [AGENT_IMAGE_URL, OG_IMAGE_URL],
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: ADDRESS,
    sameAs: [GOOGLE_REVIEWS_URL, GOOGLE_WRITE_REVIEW_URL],
    founder: { '@id': PERSON_ID },
    employee: [{ '@id': PERSON_ID }],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
  };
}

export function enhancedPersonSchema() {
  return {
    ...personSchema(),
    image: agentPortraitImageSchema(),
    identifier: LICENSE_NUMBER,
    alternateName: ['Janet Duffy', 'Dr. Janet Duffy'],
    sameAs: [GOOGLE_REVIEWS_URL, `${SITE_URL}/about`],
    memberOf: {
      '@type': 'Organization',
      name: BROKERAGE,
      url: 'https://www.berkshirehathawayhomeservices.com',
    },
  };
}

export function enhancedBusinessSchema() {
  return {
    ...businessSchema(),
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    image: [agentPortraitImageSchema(), OG_IMAGE_URL],
    logo: AGENT_IMAGE_URL,
    openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
    hasMap: GOOGLE_DIRECTIONS_URL,
    hasOfferCatalog: RELOCATION_OFFER_CATALOG,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Google Place ID',
        value: GOOGLE_PLACE_ID,
      },
    ],
    parentOrganization: { '@id': ORGANIZATION_ID },
  };
}

export function enhancedWebSiteSchema() {
  return {
    ...webSiteSchema(),
    publisher: { '@id': ORGANIZATION_ID },
    copyrightHolder: { '@id': ORGANIZATION_ID },
    image: OG_IMAGE_URL,
  };
}

/** Sitewide @graph for root layout. */
export function sitewideSchemaGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      enhancedBusinessSchema(),
      organizationSchema(),
      enhancedPersonSchema(),
      enhancedWebSiteSchema(),
      agentPortraitImageSchema(),
      {
        ...imageObjectSchema({
          id: `${OG_IMAGE_URL}#image`,
          contentUrl: OG_IMAGE_URL,
          name: `${BUSINESS_NAME} social share image`,
          description: `Las Vegas valley relocation hero image for ${BUSINESS_NAME}`,
          width: 1200,
          height: 630,
        }),
        representativeOfPage: false,
      },
    ],
  };
}

export function serviceSchema(options: {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${options.url}#service`,
    name: options.name,
    description: options.description,
    url: options.url,
    image: options.imageUrl,
    provider: { '@id': BUSINESS_ID },
    areaServed: AREA_SERVED,
    serviceType: 'RelocationService',
    termsOfService: IMAGE_LICENSE_URL,
  };
}

/** Per-page WebPage / Service / ProfilePage / ContactPage + images + breadcrumbs. */
export function pageSchemaGraph(heroKey: HeroImageKey) {
  const seo = HERO_PAGE_SEO[heroKey];
  const pageUrl = absoluteUrl(seo.path);
  const heroImg = heroImageSchema(heroKey);
  const portrait = agentPortraitImageSchema();
  const pageId = `${pageUrl}#webpage`;

  const basePage = {
    '@id': pageId,
    url: pageUrl,
    name: seo.name,
    description: seo.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: [{ '@id': BUSINESS_ID }, { '@id': PERSON_ID }],
    primaryImageOfPage: { '@id': heroImg['@id'] },
    image: [heroImg, portrait],
    inLanguage: 'en-US',
    provider: { '@id': BUSINESS_ID },
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };

  let main: Record<string, unknown>;
  switch (seo.kind) {
    case 'ProfilePage':
      main = {
        '@type': 'ProfilePage',
        ...basePage,
        mainEntity: { '@id': PERSON_ID },
      };
      break;
    case 'ContactPage':
      main = {
        '@type': 'ContactPage',
        ...basePage,
        mainEntity: { '@id': BUSINESS_ID },
      };
      break;
    case 'CollectionPage':
      main = {
        '@type': 'CollectionPage',
        ...basePage,
      };
      break;
    case 'AboutPage':
      main = {
        '@type': 'AboutPage',
        ...basePage,
        mainEntity: { '@id': PERSON_ID },
      };
      break;
    case 'Service':
      main = {
        '@type': 'WebPage',
        ...basePage,
        mainEntity: serviceSchema({
          name: seo.serviceName || seo.name,
          description: seo.description,
          url: pageUrl,
          imageUrl: `${SITE_URL}${HERO_IMAGES[heroKey].src}`,
        }),
      };
      break;
    case 'WebPage':
      main = {
        '@type': 'WebPage',
        ...basePage,
      };
      break;
    default: {
      const _exhaustive: never = seo.kind;
      void _exhaustive;
      main = {
        '@type': 'WebPage',
        ...basePage,
      };
    }
  }

  const graph: Record<string, unknown>[] = [main, heroImg, portrait];

  if (seo.breadcrumbs.length > 0 || seo.path === '/') {
    const crumbs = breadcrumbListSchema(seo.breadcrumbs);
    // Nested @graph nodes must not carry a second @context
    const { '@context': _ctx, ...breadcrumbNode } = crumbs as {
      '@context'?: string;
      '@type': string;
      itemListElement: unknown[];
    };
    void _ctx;
    graph.push(breadcrumbNode);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Merge Next.js Metadata with per-page hero + agent image SEO
 * (Open Graph / Twitter images with descriptive alt text).
 */
export function withPageImageSeo(
  heroKey: HeroImageKey,
  metadata: Metadata = {},
): Metadata {
  const hero = HERO_IMAGES[heroKey];
  const seo = HERO_PAGE_SEO[heroKey];
  const pageUrl = absoluteUrl(seo.path);
  const images = [
    {
      url: hero.src,
      width: 1920,
      height: 1080,
      alt: hero.alt,
    },
    {
      url: '/dr-jan-duffy.webp',
      width: 180,
      height: 180,
      alt: `${AGENT_NAME}, REALTOR® — Las Vegas Relocation Services`,
    },
  ];

  const existingOg =
    metadata.openGraph && typeof metadata.openGraph === 'object'
      ? metadata.openGraph
      : {};
  const existingTwitter =
    metadata.twitter && typeof metadata.twitter === 'object'
      ? metadata.twitter
      : {};

  return {
    ...metadata,
    alternates: {
      canonical: seo.path,
      ...metadata.alternates,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      siteName: BUSINESS_NAME,
      title:
        (typeof metadata.title === 'string' ? metadata.title : undefined) ||
        seo.name,
      description: metadata.description || seo.description,
      ...existingOg,
      images:
        'images' in existingOg && existingOg.images
          ? existingOg.images
          : images,
    },
    twitter: {
      card: 'summary_large_image',
      title:
        (typeof metadata.title === 'string' ? metadata.title : undefined) ||
        seo.name,
      description: metadata.description || seo.description,
      ...existingTwitter,
      images:
        'images' in existingTwitter && existingTwitter.images
          ? existingTwitter.images
          : [hero.src],
    },
  };
}

export { breadcrumbListSchema };
