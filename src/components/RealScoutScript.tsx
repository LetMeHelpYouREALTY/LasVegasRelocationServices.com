import Script from 'next/script';

const REALSCOUT_SCRIPT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js';

/**
 * Loads the RealScout web-components bundle once, after the page is idle.
 * Kept global (widgets appear on most routes) but deferred so it does not
 * contend with LCP / TBT on mobile — the UMD is ~629KB (~208KB gzip).
 *
 * Per project RealScout rules: load once via next/script in root layout.
 */
export default function RealScoutScript() {
  return (
    <>
      <Script
        id="realscout-web-components"
        src={REALSCOUT_SCRIPT_SRC}
        type="module"
        strategy="lazyOnload"
      />
      <style>{`
        realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          width: 100%;
          display: block;
          min-height: 480px;
        }
      `}</style>
    </>
  );
}
