/**
 * Full-bleed hero images for each public page.
 * Files live in /public/heroes/*.webp
 */
export const HERO_IMAGES = {
  home: {
    src: "/heroes/home-las-vegas.webp",
    alt: "Las Vegas Strip and valley skyline at golden hour",
  },
  services: {
    src: "/heroes/services-overview.webp",
    alt: "Aerial view of Las Vegas neighborhoods with the city skyline beyond",
  },
  residentialMoving: {
    src: "/heroes/residential-moving.webp",
    alt: "Sunlit Las Vegas suburban home ready for a residential move",
  },
  corporateRelocation: {
    src: "/heroes/corporate-relocation.webp",
    alt: "Modern Las Vegas business district office towers at dusk",
  },
  internationalRelocation: {
    src: "/heroes/international-relocation.webp",
    alt: "Las Vegas airport arrival with the Strip skyline in the distance",
  },
  investmentProperties: {
    src: "/heroes/investment-properties.webp",
    alt: "Luxury Las Vegas high-rise condominiums at blue hour",
  },
  movingTransportation: {
    src: "/heroes/moving-transportation.webp",
    alt: "Moving truck on a desert highway approaching Las Vegas",
  },
  settlingIn: {
    src: "/heroes/settling-in.webp",
    alt: "Community trail in a Las Vegas neighborhood with desert mountains",
  },
  relocationPlanning: {
    src: "/heroes/relocation-planning.webp",
    alt: "Relocation planning desk overlooking the Las Vegas valley",
  },
  luxuryRelocation: {
    src: "/heroes/luxury-relocation.webp",
    alt: "Luxury desert estate with pool and Red Rock mountain backdrop",
  },
  relocatingFrom: {
    src: "/heroes/relocating-from-hub.webp",
    alt: "Welcome to Las Vegas skyline for households relocating to Southern Nevada",
  },
  fromLosAngeles: {
    src: "/heroes/from-los-angeles.webp",
    alt: "Desert corridor opening toward the Las Vegas valley from Southern California",
  },
  fromSanDiego: {
    src: "/heroes/from-san-diego.webp",
    alt: "Modern Las Vegas desert home with pool under bright sunshine",
  },
  fromChicago: {
    src: "/heroes/from-chicago.webp",
    alt: "Sunny Las Vegas patio outdoor living after relocating from colder climates",
  },
  fromNewYork: {
    src: "/heroes/from-new-york.webp",
    alt: "Spacious Las Vegas suburban home at twilight with city glow on the horizon",
  },
  fromMiami: {
    src: "/heroes/from-miami.webp",
    alt: "Desert luxury pool with Red Rock mountains under a clear dry sky",
  },
  fromSeattle: {
    src: "/heroes/from-seattle.webp",
    alt: "Sun-drenched Las Vegas desert patio under a clear blue sky",
  },
  about: {
    src: "/heroes/about.webp",
    alt: "Professional Las Vegas real estate office overlooking the desert city",
  },
  contact: {
    src: "/heroes/contact.webp",
    alt: "Las Vegas real estate consultation setting with city views",
  },
  resources: {
    src: "/heroes/resources.webp",
    alt: "Las Vegas relocation research desk with valley map and neighborhood guides",
  },
} as const;

export type HeroImageKey = keyof typeof HERO_IMAGES;
