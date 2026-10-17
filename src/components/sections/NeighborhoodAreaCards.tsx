import Image from 'next/image';
import Link from 'next/link';
import SectionGuideLinks from '@/components/sections/SectionGuideLinks';

type AreaCard = {
  id: string;
  name: string;
  href: string;
  src: string;
  alt: string;
  summary: string;
  detail: string;
};

const AREAS: AreaCard[] = [
  {
    id: 'summerlin',
    name: 'Summerlin',
    href: '/neighborhoods/summerlin',
    src: '/heroes/summerlin.webp',
    alt: 'Summerlin homes below Red Rock cliffs with a desert trail in the foreground',
    summary:
      'Master-planned community with 250+ parks, 150+ miles of trails, and Downtown Summerlin.',
    detail: 'Parks, trails, and a retail district',
  },
  {
    id: 'henderson',
    name: 'Henderson',
    href: '/neighborhoods/henderson',
    src: '/heroes/henderson.webp',
    alt: 'Henderson, Nevada homes with desert landscaping and mountains beyond',
    summary: 'About a 20–30 minute drive to the Strip and Harry Reid International Airport.',
    detail: 'Parks, recreation programs, and a short airport drive',
  },
  {
    id: 'paradise',
    name: 'Paradise',
    href: '/neighborhoods/paradise',
    src: '/heroes/paradise.webp',
    alt: 'Las Vegas Strip skyline at sunset beyond a palm-lined road in Paradise',
    summary:
      'Unincorporated Clark County town around the Strip. High-rise and investment searches, including zip 89109.',
    detail: 'Not the City of Las Vegas. The parcel record controls.',
  },
  {
    id: 'green-valley',
    name: 'Green Valley',
    href: '/neighborhoods/green-valley',
    src: '/heroes/green-valley.webp',
    alt: 'Green Valley Parkway in Henderson with low buildings and desert mountains',
    summary:
      'Henderson community along Green Valley Parkway, with shops, parks, and a 20–30 minute drive to the Strip.',
    detail: 'Shops, parks, and the Green Valley office corridor',
  },
  {
    id: 'centennial-hills',
    name: 'Centennial Hills',
    href: '/neighborhoods#centennial-hills',
    src: '/sections/centennial-hills.webp',
    alt: 'New single-story homes in northwest Las Vegas with the Spring Mountains behind them',
    summary: 'Northwest Las Vegas streets with new homes, wide roads, and mountain views.',
    detail: 'New homes and mountain views',
  },
  {
    id: 'southern-highlands',
    name: 'Southern Highlands',
    href: '/neighborhoods/southern-highlands',
    src: '/heroes/southern-highlands.webp',
    alt: 'Luxury homes and a golf fairway in Southern Highlands, southwest Las Vegas valley',
    summary:
      'Unincorporated Clark County in the southwest valley. The 1998 development agreement caps the plan at 8,500 homes and one private golf course.',
    detail: 'Not Henderson. Confirm the parcel zip.',
  },
  {
    id: 'anthem',
    name: 'Anthem',
    href: '/neighborhoods/anthem',
    src: '/sections/anthem.webp',
    alt: 'Anthem homes in Henderson beside a golf fairway and desert mountain ridge',
    summary: 'Henderson community with golf fairways and resort-style landscaping.',
    detail: 'Golf fairways and mountain views',
  },
  {
    id: 'seven-hills',
    name: 'Seven Hills',
    href: '/neighborhoods/seven-hills',
    src: '/heroes/seven-hills.webp',
    alt: 'Hillside homes at dusk in Seven Hills, Henderson',
    summary: 'Henderson community near Anthem. The commonly cited zip is 89052.',
    detail: 'Sampled plats use tax district 505. Your parcel can differ.',
  },
  {
    id: 'inspirada',
    name: 'Inspirada',
    href: '/neighborhoods/inspirada',
    src: '/sections/inspirada.webp',
    alt: 'Contemporary two-story homes and a linear park in Inspirada, Henderson',
    summary: 'Contemporary Henderson homes along a linear park, with mountains to the east.',
    detail: 'Contemporary homes and a linear park',
  },
];

export default function NeighborhoodAreaCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Las Vegas Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Summerlin, Henderson, Southern Highlands, Anthem, and Inspirada are the areas relocating
            buyers ask about. The parcel record controls price and tax.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS.map((area) => (
            <Link
              key={area.id}
              id={area.id}
              href={area.href}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow scroll-mt-24"
            >
              <div className="relative h-48">
                <Image
                  src={area.src}
                  alt={area.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.summary}</p>
                <p className="text-sm text-gray-500">{area.detail}</p>
              </div>
            </Link>
          ))}
        </div>
        <SectionGuideLinks />
      </div>
    </section>
  );
}
