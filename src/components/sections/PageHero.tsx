import Image from 'next/image';
import PageSchema from '@/components/seo/PageSchema';
import AgentPortrait from '@/components/shared/AgentPortrait';
import { RealScoutBelowHero } from '@/components/shared/RealScoutOfficeListings';
import { AGENT_NAME, BUSINESS_NAME } from '@/lib/business';
import { HERO_IMAGES, type HeroImageKey } from '@/lib/hero-images';

type PageHeroProps = {
  image: HeroImageKey;
  children: React.ReactNode;
  className?: string;
  /** Set false only if a page must omit listings under the hero */
  showListings?: boolean;
  /** Set false only if a page supplies its own portrait placement */
  showPortrait?: boolean;
  /** Set false only if the page emits its own JSON-LD page graph */
  showSchema?: boolean;
};

/**
 * Full-bleed photographic hero.
 * By default: agent portrait on the right + RealScout listings directly below
 * + per-page JSON-LD (WebPage/Service/ProfilePage + ImageObject metadata).
 */
export default function PageHero({
  image,
  children,
  className = '',
  showListings = true,
  showPortrait = true,
  showSchema = true,
}: PageHeroProps) {
  const hero = HERO_IMAGES[image];

  return (
    <>
      {showSchema ? <PageSchema heroKey={image} /> : null}
      <section
        className={`relative overflow-hidden text-white py-20 ${className}`.trim()}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          title={`${hero.alt} | ${BUSINESS_NAME}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 brightness-110 contrast-105"
          itemProp="image"
        />
        <meta itemProp="name" content={hero.alt} />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/35 via-[#0A2540]/25 to-[#0A2540]/55"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/30 via-transparent to-[#0A2540]/20"
          aria-hidden="true"
        />
        <div className="relative z-10 [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_12px_rgba(0,0,0,0.35)]">
          {showPortrait ? (
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 lg:px-8">
              <div className="min-w-0">{children}</div>
              <div className="flex flex-col items-center gap-3 lg:pl-2">
                <AgentPortrait
                  priority
                  className="h-40 w-40 md:h-52 md:w-52 lg:h-60 lg:w-60"
                  size={512}
                />
                <p className="text-center text-sm font-medium text-white/95">
                  {AGENT_NAME}
                  <span className="mt-0.5 block text-xs font-normal text-white/80">
                    Las Vegas Relocation Specialist
                  </span>
                </p>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </section>
      {showListings ? <RealScoutBelowHero /> : null}
    </>
  );
}
