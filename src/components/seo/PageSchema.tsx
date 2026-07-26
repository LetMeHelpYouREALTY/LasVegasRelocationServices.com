import { pageSchemaGraph } from '@/lib/schema'
import type { HeroImageKey } from '@/lib/hero-images'

type PageSchemaProps = {
  heroKey: HeroImageKey
}

/**
 * Per-page JSON-LD: WebPage / Service / ProfilePage / ContactPage,
 * BreadcrumbList, and ImageObject for hero + agent portrait
 * (Google Image metadata: contentUrl + creator/credit/copyright/license).
 */
export default function PageSchema({ heroKey }: PageSchemaProps) {
  const data = pageSchemaGraph(heroKey)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}
