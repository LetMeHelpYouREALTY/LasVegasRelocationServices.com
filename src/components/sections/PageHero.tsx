import Image from "next/image";
import { HERO_IMAGES, type HeroImageKey } from "@/lib/hero-images";

type PageHeroProps = {
  image: HeroImageKey;
  children: React.ReactNode;
  className?: string;
  /** Dark overlay for text contrast over photography */
  overlayClassName?: string;
};

/**
 * Full-bleed photographic hero. Keeps existing page content as children;
 * image sits edge-to-edge behind a readable overlay.
 */
export default function PageHero({
  image,
  children,
  className = "",
  overlayClassName = "bg-[#0A2540]/65",
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
        className="object-cover object-center"
      />
      <div
        className={`absolute inset-0 ${overlayClassName}`}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
