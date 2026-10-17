import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { RichText } from '@/components/sections/RichText';
import SectionGuideLinks from '@/components/sections/SectionGuideLinks';
import { FAQSection } from '@/components/seo';
import GbpActionBar from '@/components/shared/GbpActionBar';
import { CALENDLY_SHOWING_URL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/business';
import type { HeroImageKey } from '@/lib/hero-images';

export type GuideBlock = {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export type GuideLink = {
  href: string;
  label: string;
};

export type TopicGuideProps = {
  hero: HeroImageKey;
  eyebrow: string;
  h1: string;
  lede: string;
  blocks: GuideBlock[];
  faqs: { question: string; answer: string }[];
  related: GuideLink[];
};

const relatedSectionId = 'related-guides';
const questionsSectionId = 'questions';

function GuideBlockSection({ block }: { block: GuideBlock }) {
  return (
    <section id={block.id} className="py-16 border-b border-gray-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={block.image ? 'grid lg:grid-cols-2 gap-10 items-center' : 'max-w-3xl'}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{block.heading}</h2>
            {block.paragraphs.map((paragraph) => (
              <RichText
                key={paragraph}
                text={paragraph}
                className="text-lg text-gray-700 leading-relaxed mb-4"
              />
            ))}
          </div>
          {block.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function TopicGuide({
  hero,
  eyebrow,
  h1,
  lede,
  blocks,
  faqs,
  related,
}: TopicGuideProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero image={hero}>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{h1}</h1>
          <p className="text-xl text-blue-100 mb-8">{lede}</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </PageHero>

      <nav aria-label="On this page" className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
            On this page
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {blocks.map((block) => (
              <li key={block.id}>
                <a href={`#${block.id}`} className="font-semibold text-blue-800 underline">
                  {block.heading}
                </a>
              </li>
            ))}
            <li>
              <a href={`#${relatedSectionId}`} className="font-semibold text-blue-800 underline">
                Related guides
              </a>
            </li>
            <li>
              <a href={`#${questionsSectionId}`} className="font-semibold text-blue-800 underline">
                Questions
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {blocks.map((block) => (
        <GuideBlockSection key={block.id} block={block} />
      ))}

      <section id={relatedSectionId} className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related guides</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-gray-200 px-5 py-4 font-semibold text-[#0A2540] hover:border-blue-400 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <SectionGuideLinks />
        </div>
      </section>

      <FAQSection id={questionsSectionId} faqs={faqs} />

      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Talk through the move</h2>
          <p className="text-xl text-blue-100 mb-8">
            Call {PHONE_DISPLAY} or book a showing. One contact covers the search and the move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${PHONE_TEL}`}
              className="bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={CALENDLY_SHOWING_URL}
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A2540]"
            >
              Book a Showing
            </a>
          </div>
          <GbpActionBar variant="dark" />
        </div>
      </section>
    </div>
  );
}
