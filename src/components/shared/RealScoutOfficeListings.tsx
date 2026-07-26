/**
 * Shared RealScout office listings widget.
 * Script loads once via RealScoutScript in root layout.
 */
export const REALSCOUT_AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw';

type RealScoutOfficeListingsProps = {
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

export default function RealScoutOfficeListings({
  sortOrder = 'PRICE_HIGH',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF',
  priceMin = '400000',
  priceMax = '800000',
  className = 'min-h-[480px]',
}: RealScoutOfficeListingsProps) {
  return (
    <div className={className}>
      <realscout-office-listings
        agent-encoded-id={REALSCOUT_AGENT_ENCODED_ID}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin}
        price-max={priceMax}
      />
    </div>
  );
}

/** Full section placed immediately below every PageHero */
export function RealScoutBelowHero() {
  return (
    <section
      className="py-12 md:py-16 bg-gray-50"
      aria-labelledby="realscout-listings-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            id="realscout-listings-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Homes for Sale in Las Vegas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse current listings with Dr. Jan Duffy — Berkshire Hathaway HomeServices Nevada
            Properties.
          </p>
        </div>
        <RealScoutOfficeListings />
      </div>
    </section>
  );
}
