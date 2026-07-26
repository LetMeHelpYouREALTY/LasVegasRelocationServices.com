import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AGENT_NAME,
  BUSINESS_NAME,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
} from '@/lib/business'
import { IMAGE_LICENSE_URL, agentPortraitImageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Image License',
  description: `License and acquisition information for photographs used on ${BUSINESS_NAME}, including the ${AGENT_NAME} agent portrait and page hero images.`,
  alternates: { canonical: '/image-license' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Image License | ${BUSINESS_NAME}`,
    description: `How to credit and request use of photos published on ${BUSINESS_NAME}.`,
    url: IMAGE_LICENSE_URL,
    type: 'website',
    images: [
      {
        url: '/dr-jan-duffy.webp',
        width: 180,
        height: 180,
        alt: `${AGENT_NAME} headshot — ${BUSINESS_NAME}`,
      },
    ],
  },
}

export default function ImageLicensePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${IMAGE_LICENSE_URL}#webpage`,
        url: IMAGE_LICENSE_URL,
        name: `Image License | ${BUSINESS_NAME}`,
        description: `License and acquisition information for photographs used on ${BUSINESS_NAME}.`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: { '@id': `${SITE_URL}/dr-jan-duffy.webp#image` },
      },
      agentPortraitImageSchema(),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main className="bg-white">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#3A8DDE] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Media &amp; licensing
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Image license
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              How to credit and request use of photos published on {BUSINESS_NAME}.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0A2540]">Copyright</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Unless otherwise noted, photographs on this website — including the
              agent portrait of {AGENT_NAME} and destination hero imagery — are ©{' '}
              {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A2540]">Credit</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              When permission is granted, credit as:{' '}
              <strong>
                {AGENT_NAME} / {BUSINESS_NAME}
              </strong>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A2540]">
              Request a license
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              To acquire a license for editorial, press, or partner use, contact{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-[#3A8DDE] hover:underline"
              >
                {EMAIL}
              </a>{' '}
              or call{' '}
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-semibold text-[#3A8DDE] hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              . Include the image URL and intended use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A2540]">On-site use</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Images on this site are licensed for display in connection with{' '}
              {BUSINESS_NAME} marketing and SEO (including Google Image metadata /
              ImageObject structured data). Unauthorized scraping, training, or
              redistribution is not permitted.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            <Link href="/" className="text-[#3A8DDE] hover:underline">
              ← Back to home
            </Link>
          </p>
        </section>
      </main>
    </>
  )
}
