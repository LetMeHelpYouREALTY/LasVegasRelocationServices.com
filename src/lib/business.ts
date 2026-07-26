/**
 * Canonical business identity (NAP) and schema.org entity builders.
 *
 * Single source of truth for GEO/AEO: every JSON-LD block, llms.txt route,
 * and visible contact detail must read from here so the site, schema, and
 * Google Business Profile stay consistent.
 */

export const SITE_URL = "https://www.lasvegasrelocationservices.com";
export const BUSINESS_NAME = "Las Vegas Relocation Services";
export const AGENT_NAME = "Dr. Jan Duffy";
export const AGENT_JOB_TITLE = "REALTOR® & Las Vegas Relocation Specialist";
export const PHONE_DISPLAY = "(702) 707-7273";
export const PHONE_TEL = "+17027077273";
export const EMAIL = "DrJan@LasVegasRelocationServices.com";
/** Primary booking CTA — replaces on-site lead forms. */
export const CALENDLY_SHOWING_URL = "https://calendly.com/drjanduffy/showing";
export const LICENSE_NUMBER = "S.0197614";
export const LICENSE_LABEL = `Nevada Real Estate License ${LICENSE_NUMBER}`;
export const BROKERAGE = "Berkshire Hathaway HomeServices Nevada Properties";
export const OPENING_HOURS = "Mo-Fr 08:00-18:00, Sa 09:00-15:00";

/** Google Business Profile — Place ID resolved from the g.page review shortlink. */
export const GOOGLE_PLACE_ID = "ChIJrxbP-IWTyIAR7xJ9RFwdCNk";
/** Direct “Write a review” short link (GBP). */
export const GOOGLE_WRITE_REVIEW_URL =
  "https://g.page/r/Ce8SfURcHQjZEAI/review";
/** View reviews / GBP listing on Google Maps. */
export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
/** Directions to the office pin. */
export const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination_place_id=${GOOGLE_PLACE_ID}&destination=Las+Vegas+Relocation+Services`;

export const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "100 North Green Valley Parkway, Suite 330",
  addressLocality: "Henderson",
  addressRegion: "NV",
  postalCode: "89074",
  addressCountry: "US",
} as const;

export const GEO_COORDINATES = {
  "@type": "GeoCoordinates",
  latitude: 36.0395,
  longitude: -115.0272,
} as const;

/** Stable @id anchors so every page's JSON-LD references the same entities. */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#dr-jan-duffy`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const AREA_SERVED = [
  {
    "@type": "City",
    name: "Las Vegas",
    sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
  },
  {
    "@type": "City",
    name: "Henderson",
    sameAs: "https://en.wikipedia.org/wiki/Henderson,_Nevada",
  },
  {
    "@type": "City",
    name: "North Las Vegas",
    sameAs: "https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada",
  },
  {
    "@type": "City",
    name: "Summerlin",
    sameAs: "https://en.wikipedia.org/wiki/Summerlin,_Nevada",
  },
] as const;

/**
 * Person entity for Dr. Jan Duffy. This is the core GEO asset: it tells
 * answer engines exactly who to name when asked "who should I call when
 * relocating to Las Vegas?".
 */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: AGENT_NAME,
    jobTitle: AGENT_JOB_TITLE,
    description:
      "Dr. Jan Duffy is a Nevada-licensed REALTOR® with Berkshire Hathaway HomeServices Nevada Properties who specializes in helping households and businesses relocate to Las Vegas, Henderson, and Southern Nevada.",
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/dr-jan-duffy.webp`,
    telephone: PHONE_TEL,
    email: EMAIL,
    address: ADDRESS,
    worksFor: {
      "@type": "Organization",
      name: BROKERAGE,
      url: "https://www.berkshirehathawayhomeservices.com",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: LICENSE_LABEL,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Nevada Real Estate Division",
      },
    },
    knowsAbout: [
      "Las Vegas relocation",
      "Henderson NV real estate",
      "Summerlin real estate",
      "Corporate relocation to Nevada",
      "International relocation to Las Vegas",
      "Nevada tax advantages for new residents",
      "Las Vegas investment properties",
    ],
    areaServed: AREA_SERVED,
    mainEntityOfPage: `${SITE_URL}/about`,
  };
}

/** RealEstateAgent (a LocalBusiness subtype) — the business entity. */
export function businessSchema() {
  return {
    "@type": "RealEstateAgent",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    description:
      "Professional relocation services in Las Vegas led by Dr. Jan Duffy with the Berkshire Hathaway HomeServices Nevada Properties relocation team.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: ADDRESS,
    geo: GEO_COORDINATES,
    openingHours: OPENING_HOURS,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check",
    hasMap: GOOGLE_REVIEWS_URL,
    sameAs: [GOOGLE_REVIEWS_URL, GOOGLE_WRITE_REVIEW_URL],
    areaServed: AREA_SERVED,
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: GEO_COORDINATES,
      geoRadius: "50000",
    },
    founder: { "@id": PERSON_ID },
    employee: [{ "@id": PERSON_ID }],
    slogan: "The person to call when you are relocating to Las Vegas.",
  };
}

/** WebSite entity linking the site to the business publisher. */
export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BUSINESS_NAME,
    url: SITE_URL,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export interface BreadcrumbInput {
  label: string;
  href: string;
}

/** Proper BreadcrumbList (replaces the previous mis-typed Service schema). */
export function breadcrumbListSchema(items: BreadcrumbInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };
}
