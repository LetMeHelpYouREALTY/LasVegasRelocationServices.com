/**
 * Full-bleed hero images for each public page.
 * Files live in /public/heroes/*.webp
 */
export const HERO_IMAGES = {
  home: {
    // Brightest relocation hero: sunlit residential valley + Strip
    src: '/heroes/home-las-vegas.webp',
    alt: 'Sunlit aerial view of Las Vegas neighborhoods with the Strip skyline beyond',
  },
  services: {
    src: '/heroes/services-overview.webp',
    alt: 'Las Vegas valley and Strip skyline at golden hour',
  },
  residentialMoving: {
    src: '/heroes/residential-moving.webp',
    alt: 'Sunlit Las Vegas suburban home ready for a residential move',
  },
  corporateRelocation: {
    src: '/heroes/corporate-relocation.webp',
    alt: 'Modern Las Vegas business district office towers at dusk',
  },
  internationalRelocation: {
    src: '/heroes/international-relocation.webp',
    alt: 'Las Vegas airport arrival with the Strip skyline in the distance',
  },
  investmentProperties: {
    src: '/heroes/investment-properties.webp',
    alt: 'Luxury Las Vegas high-rise condominiums at blue hour',
  },
  movingTransportation: {
    src: '/heroes/moving-transportation.webp',
    alt: 'Moving truck on a desert highway approaching Las Vegas',
  },
  settlingIn: {
    src: '/heroes/settling-in.webp',
    alt: 'Community trail in a Las Vegas neighborhood with desert mountains',
  },
  relocationPlanning: {
    src: '/heroes/relocation-planning.webp',
    alt: 'Relocation planning desk overlooking the Las Vegas valley',
  },
  luxuryRelocation: {
    src: '/heroes/luxury-relocation.webp',
    alt: 'Luxury desert estate with pool and Red Rock mountain backdrop',
  },
  relocatingFrom: {
    src: '/heroes/relocating-from-hub.webp',
    alt: 'Welcome to Las Vegas skyline for households relocating to Southern Nevada',
  },
  fromLosAngeles: {
    src: '/heroes/from-los-angeles.webp',
    alt: 'Desert corridor opening toward the Las Vegas valley from Southern California',
  },
  fromSanDiego: {
    src: '/heroes/from-san-diego.webp',
    alt: 'Modern Las Vegas desert home with pool under bright sunshine',
  },
  fromChicago: {
    src: '/heroes/from-chicago.webp',
    alt: 'Sunny Las Vegas patio outdoor living after relocating from colder climates',
  },
  fromNewYork: {
    src: '/heroes/from-new-york.webp',
    alt: 'Spacious Las Vegas suburban home at twilight with city glow on the horizon',
  },
  fromMiami: {
    src: '/heroes/from-miami.webp',
    alt: 'Desert luxury pool with Red Rock mountains under a clear dry sky',
  },
  fromSeattle: {
    src: '/heroes/from-seattle.webp',
    alt: 'Sun-drenched Las Vegas desert patio under a clear blue sky',
  },
  about: {
    src: '/heroes/about.webp',
    alt: 'Professional Las Vegas real estate office overlooking the desert city',
  },
  contact: {
    src: '/heroes/contact.webp',
    alt: 'Las Vegas real estate consultation setting with city views',
  },
  resources: {
    src: '/heroes/resources.webp',
    alt: 'Las Vegas relocation research desk with valley map and neighborhood guides',
  },
  neighborhoods: {
    src: '/heroes/neighborhoods.webp',
    alt: 'Las Vegas valley neighborhoods with desert mountains and tile-roof homes',
  },
  summerlin: {
    src: '/heroes/summerlin.webp',
    alt: 'Summerlin homes below Red Rock cliffs with a desert trail in the foreground',
  },
  henderson: {
    src: '/heroes/henderson.webp',
    alt: 'Henderson, Nevada homes with desert landscaping and mountains beyond',
  },
  greenValley: {
    src: '/heroes/green-valley.webp',
    alt: 'Green Valley Parkway in Henderson with low buildings and desert mountains',
  },
  fromPhoenix: {
    src: '/heroes/from-phoenix.webp',
    alt: 'Moving truck on a desert interstate between Arizona and Las Vegas',
  },
  fromDallas: {
    src: '/heroes/from-dallas.webp',
    alt: 'Las Vegas Strip at dusk with a jet on approach to Harry Reid International',
  },
  nevadaTaxes: {
    src: '/heroes/nevada-taxes.webp',
    alt: 'Single-story desert home in the Las Vegas valley under a clear sky',
  },
  relocationSpecialist: {
    src: '/heroes/relocation-specialist.webp',
    alt: 'Luxury desert estate at dusk with a pool and Red Rock cliffs',
  },
  employeeRelocation: {
    src: '/heroes/employee-relocation.webp',
    alt: 'Glass residential towers in Las Vegas at blue hour with palm trees',
  },
  leavingLasVegas: {
    src: '/heroes/leaving-las-vegas.webp',
    alt: 'Luxury Las Vegas home at twilight with the lights on and an empty driveway',
  },
  paradise: {
    src: '/heroes/paradise.webp',
    alt: 'Las Vegas Strip skyline at sunset beyond a palm-lined road in Paradise',
  },
  southernHighlands: {
    src: '/heroes/southern-highlands.webp',
    alt: 'Luxury homes and a golf fairway in Southern Highlands, southwest Las Vegas valley',
  },
  anthem: {
    src: '/heroes/anthem.webp',
    alt: 'Hillside homes beside a golf fairway in Anthem, Henderson',
  },
  inspirada: {
    src: '/heroes/inspirada.webp',
    alt: 'Contemporary Henderson homes along a linear park in Inspirada',
  },
  sevenHills: {
    src: '/heroes/seven-hills.webp',
    alt: 'Hillside homes at dusk in Seven Hills, Henderson',
  },
} as const;

export type HeroImageKey = keyof typeof HERO_IMAGES;
