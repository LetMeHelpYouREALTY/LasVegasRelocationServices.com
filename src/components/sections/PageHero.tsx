import Image from "next/image";
import { HERO_IMAGES, type HeroImageKey } from "@/lib/hero-images";

type PageHeroProps = {
  image: HeroImageKey;
  children: React.ReactNode;
  className?: string;
};

/**
 * Full-bleed photographic hero.
 * Light gradient keeps the photo visible while protecting text contrast.
 */
export default function PageHero({
  image,
  children,
  className = "",
}: PageHeroProps) {
  const hero = HERO_IMAGES[image];

  return (
    <section
      className={`relative overflow-hidden text-white py-20 ${className}`.trim()}
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105 brightness-110 contrast-105"
      />
      {/* Soft readable wash — not a flat dark curtain */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/35 via-[#0A2540]/25 to-[#0A2540]/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/30 via-transparent to-[#0A2540]/20"
        aria-hidden="true"
      />
      <div className="relative z-10 [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_12px_rgba(0,0,0,0.35)]">
        {children}
      </div>
    </section>
  );
}
