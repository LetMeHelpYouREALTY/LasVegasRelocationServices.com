/**
 * Clark County property-tax figures checked 2026-10-17.
 * Source: Clark County Treasurer fiscal year 2026–27 district totals.
 * Nevada assesses real property at 35% of taxable value (NRS 361.225).
 * Do not treat a district total as the bill for every parcel in that city.
 */
export const TAX_CHECKED = '2026-10-17';

export const CLARK_COUNTY_TREASURER_URL =
  'https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/';

export const NRS_361_URL = 'https://www.leg.state.nv.us/nrs/NRS-361.html#NRS361Sec225';

/** District 421, Summerlin Town, total rate per $100 of assessed value. */
export const SUMMERLIN_TOWN_RATE = '$2.9328';

/** District 505, Henderson Artesian Basin, total rate per $100 of assessed value. */
export const HENDERSON_ARTESIAN_RATE = '$2.9613';

export const CLARK_COUNTY_TAX_SUMMARY = `Clark County property tax is billed by district. For fiscal year 2026–27, the Clark County Treasurer lists Summerlin Town (district 421) at ${SUMMERLIN_TOWN_RATE} per $100 of assessed value and Henderson Artesian Basin (district 505) at ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value. Nevada assesses property at 35% of taxable value (NRS 361.225). Other districts differ, and the parcel bill controls. Checked ${TAX_CHECKED}.`;
