import type { TopicGuideProps } from '@/components/sections/TopicGuide';
import { PHONE_DISPLAY } from '@/lib/business';
import {
  CLARK_COUNTY_TAX_SUMMARY,
  CLARK_COUNTY_TREASURER_URL,
  HENDERSON_ARTESIAN_RATE,
  NRS_361_URL,
  SUMMERLIN_TOWN_RATE,
  TAX_CHECKED,
} from '@/lib/tax-facts';

const sharedRelated = [
  { href: '/neighborhoods', label: 'All Las Vegas neighborhood guides' },
  { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
  { href: '/relocating-from', label: 'Guides by origin city' },
  { href: '/contact', label: 'Contact Dr. Jan Duffy' },
];

export const summerlinGuide: TopicGuideProps = {
  hero: 'summerlin',
  eyebrow: 'Las Vegas neighborhoods',
  h1: 'Moving to Summerlin',
  lede: `Summerlin has 250+ parks and 150+ miles of trails. Call ${PHONE_DISPLAY} to see homes there.`,
  blocks: [
    {
      id: 'what-summerlin-is',
      heading: 'What Summerlin includes',
      paragraphs: [
        'Summerlin is a master-planned community on the west side of the Las Vegas valley, against Red Rock.',
        'Downtown Summerlin is the main shopping district. Trails connect parks across the community.',
        'Median prices in Summerlin, Henderson, and Green Valley typically run from the mid-$400Ks to the $600Ks.',
      ],
      image: {
        src: '/heroes/summerlin.webp',
        alt: 'Summerlin homes below Red Rock cliffs with a desert trail in the foreground',
      },
    },
    {
      id: 'summerlin-tax',
      heading: 'Summerlin property tax example',
      paragraphs: [
        `For fiscal year 2026–27, Clark County Treasurer district 421 (Summerlin Town) totals ${SUMMERLIN_TOWN_RATE} per $100 of assessed value. Checked ${TAX_CHECKED}.`,
        'Nevada assesses real property at 35% of taxable value under NRS 361.225. Abatements can change the bill.',
        'Some Summerlin street addresses sit inside the City of Las Vegas and use a different district. The parcel bill controls.',
        `Confirm the district on the Clark County Treasurer site before you write an offer: ${CLARK_COUNTY_TREASURER_URL}`,
      ],
    },
    {
      id: 'summerlin-move',
      heading: 'How a Summerlin relocation works',
      paragraphs: [
        `Dr. Jan Duffy handles the short list, the showings, and the move. Call ${PHONE_DISPLAY}.`,
        'Tell her the commute you want, the home size, and whether you are buying or leasing.',
        'She will not rank neighborhoods by who lives there. The facts above are parks, trails, price range, and the tax district.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How far is Summerlin from the Strip?',
      answer:
        'Drive time varies with traffic and which Summerlin village you mean. Henderson and Green Valley are the areas quoted at 20–30 minutes to the Strip and Harry Reid International Airport. Summerlin is farther west, against Red Rock.',
    },
    {
      question: 'What is the Summerlin Town property tax rate?',
      answer: `District 421, Summerlin Town, is ${SUMMERLIN_TOWN_RATE} per $100 of assessed value for fiscal year 2026–27. That is not the rate for every Summerlin address. Look up the parcel.`,
    },
    {
      question: 'Who do I call to look at Summerlin homes?',
      answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY}. One contact covers the search and the relocation.`,
    },
  ],
  related: sharedRelated,
};

export const hendersonGuide: TopicGuideProps = {
  hero: 'henderson',
  eyebrow: 'Las Vegas neighborhoods',
  h1: 'Moving to Henderson',
  lede: `Henderson is about 20–30 minutes from the Strip and the airport. Call ${PHONE_DISPLAY} to start the search.`,
  blocks: [
    {
      id: 'henderson-drive',
      heading: 'Drive time and what is here',
      paragraphs: [
        'Henderson sits southeast of Las Vegas. Green Valley is one of its communities.',
        'Buyers relocating here often cite a 20–30 minute drive to the Strip and Harry Reid International Airport.',
        'The office for Las Vegas Relocation Services is at 100 North Green Valley Parkway, Suite 330, Henderson, NV 89074.',
      ],
      image: {
        src: '/heroes/henderson.webp',
        alt: 'Henderson, Nevada homes with desert landscaping and mountains beyond',
      },
    },
    {
      id: 'henderson-tax',
      heading: 'Henderson property tax example',
      paragraphs: [
        `For fiscal year 2026–27, Clark County Treasurer district 505 (Henderson Artesian Basin) totals ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value. Checked ${TAX_CHECKED}.`,
        'Henderson has more than one tax district. This rate is an example, not a citywide bill.',
        CLARK_COUNTY_TAX_SUMMARY,
      ],
    },
    {
      id: 'henderson-schools',
      heading: 'Schools follow the address',
      paragraphs: [
        'Clark County School District assigns a school by the street address, not by a neighborhood label.',
        'Look up the assigned school names for a specific house before you compare it with another house.',
        'This guide does not rank school quality.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Green Valley part of Henderson?',
      answer:
        'Yes. Green Valley is a Henderson community along Green Valley Parkway. It has its own guide on this site.',
    },
    {
      question: 'What property tax rate applies in Henderson?',
      answer: `It depends on the parcel. District 505, Henderson Artesian Basin, is ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value for fiscal year 2026–27. Other Henderson districts differ.`,
    },
    {
      question: 'Who helps with a Henderson relocation?',
      answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY}. The office is in Henderson, at 100 North Green Valley Parkway, Suite 330.`,
    },
  ],
  related: [
    { href: '/neighborhoods/green-valley', label: 'Green Valley relocation guide' },
    ...sharedRelated,
  ],
};

export const greenValleyGuide: TopicGuideProps = {
  hero: 'greenValley',
  eyebrow: 'Las Vegas neighborhoods',
  h1: 'Moving to Green Valley',
  lede: `Green Valley is in Henderson, along Green Valley Parkway. Call ${PHONE_DISPLAY} to see homes there.`,
  blocks: [
    {
      id: 'green-valley-place',
      heading: 'Where Green Valley sits',
      paragraphs: [
        'Green Valley is a Henderson community. Shops, parks, and low office buildings line Green Valley Parkway.',
        'The drive to the Strip and Harry Reid International Airport is often 20–30 minutes.',
        'Dr. Jan Duffy’s office is at 100 North Green Valley Parkway, Suite 330, Henderson, NV 89074.',
      ],
      image: {
        src: '/heroes/green-valley.webp',
        alt: 'Green Valley Parkway in Henderson with low buildings and desert mountains',
      },
    },
    {
      id: 'green-valley-tax',
      heading: 'Check the parcel, not the name',
      paragraphs: [
        'Green Valley is not its own tax district. A house here can fall in a Henderson district or a neighboring one.',
        `A common Henderson example is district 505, Henderson Artesian Basin, at ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value for fiscal year 2026–27.`,
        'Pull the parcel on the Clark County Treasurer site before you compare two houses on tax.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How far is Green Valley from the airport?',
      answer:
        'Plan on about 20–30 minutes to Harry Reid International Airport and the Strip, depending on traffic and the exact address.',
    },
    {
      question: 'Does Green Valley have one property tax rate?',
      answer: 'No. Clark County bills by district. Use the parcel number, not the community name.',
    },
    {
      question: 'Can I meet at the Green Valley office?',
      answer: `Yes. Call ${PHONE_DISPLAY} or book a showing. The office is Suite 330, 100 North Green Valley Parkway, Henderson, NV 89074.`,
    },
  ],
  related: [
    { href: '/neighborhoods/henderson', label: 'Henderson relocation guide' },
    ...sharedRelated,
  ],
};

export const phoenixGuide: TopicGuideProps = {
  hero: 'fromPhoenix',
  eyebrow: 'Relocating from Phoenix',
  h1: 'Moving from Phoenix to Las Vegas',
  lede: `The drive is one day on US-93 and I-11. The nonstop flight is short. Call ${PHONE_DISPLAY} before you list dates.`,
  blocks: [
    {
      id: 'phoenix-trip',
      heading: 'Drive or fly',
      paragraphs: [
        'Phoenix to Las Vegas is a one-day drive on US-93 and I-11.',
        'Nonstop flights between the Phoenix area and Harry Reid International Airport are short.',
        'This page does not publish a drive-time or a fare. Both change with traffic, the airline, and the day.',
      ],
      image: {
        src: '/heroes/from-phoenix.webp',
        alt: 'Moving truck on a desert interstate between Arizona and Las Vegas',
      },
    },
    {
      id: 'phoenix-tax',
      heading: 'Income tax is the clean difference',
      paragraphs: [
        'Arizona taxes wage income at the state level. Nevada does not levy a state personal income tax.',
        'Do not assume the property-tax bill drops just because the state income tax does. Clark County bills by district.',
        `Read the Nevada property tax guide, then look up the parcel. ${CLARK_COUNTY_TREASURER_URL}`,
      ],
    },
    {
      id: 'phoenix-next',
      heading: 'What to line up first',
      paragraphs: [
        'Pick a target week for showings. Summerlin, Henderson, and Green Valley are the areas Phoenix buyers ask about most.',
        `Call ${PHONE_DISPLAY} with your budget, whether you are buying or leasing, and how often you will fly back to Arizona.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Is the Phoenix to Las Vegas drive one day?',
      answer:
        'Yes. US-93 and I-11 make it a one-day drive. This site does not publish a door-to-door hour count because traffic and the starting address change it.',
    },
    {
      question: 'Do both states tax wages?',
      answer:
        'Arizona taxes wage income. Nevada does not levy a state personal income tax. Property tax is a separate bill and depends on the Nevada parcel.',
    },
    {
      question: 'Who coordinates the move from Phoenix?',
      answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY}. She covers the Las Vegas home search and the relocation plan.`,
    },
  ],
  related: [
    { href: '/relocating-from/dallas', label: 'Moving from Dallas to Las Vegas' },
    { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
    { href: '/neighborhoods', label: 'Las Vegas neighborhood guides' },
    { href: '/services/residential-moving', label: 'Residential moving services' },
  ],
};

export const dallasGuide: TopicGuideProps = {
  hero: 'fromDallas',
  eyebrow: 'Relocating from Dallas',
  h1: 'Moving from Dallas to Las Vegas',
  lede: `Dallas and Nevada both skip a state personal income tax. Nonstop flights run between DFW and Harry Reid. Call ${PHONE_DISPLAY}.`,
  blocks: [
    {
      id: 'dallas-flight',
      heading: 'How people make the trip',
      paragraphs: [
        'Nonstop flights operate between Dallas/Fort Worth International Airport and Harry Reid International Airport.',
        'This page does not publish a drive time or a ticket price. Both move.',
        'Most Dallas clients fly for showings, then schedule the truck after the contract.',
      ],
      image: {
        src: '/heroes/from-dallas.webp',
        alt: 'Las Vegas Strip at dusk with a jet on approach to Harry Reid International',
      },
    },
    {
      id: 'dallas-tax',
      heading: 'Income tax is not the reason',
      paragraphs: [
        'Texas and Nevada both have no state personal income tax. That is not a reason, by itself, to move.',
        'Housing, the work schedule, and the Clark County property-tax district are the numbers to compare.',
        'Use the Nevada property tax guide for the fiscal year 2026–27 district examples, then pull the parcel bill.',
      ],
    },
    {
      id: 'dallas-areas',
      heading: 'Areas Dallas buyers ask about',
      paragraphs: [
        'Summerlin, Henderson, and Green Valley come up most. Median prices there typically run from the mid-$400Ks to the $600Ks.',
        `Call ${PHONE_DISPLAY} with the home size you want and whether you need to be near the airport.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Is there a nonstop flight from Dallas to Las Vegas?',
      answer:
        'Yes. Nonstop flights run between Dallas/Fort Worth International Airport and Harry Reid International Airport. Schedules and fares change.',
    },
    {
      question: 'Will I save state income tax by leaving Dallas?',
      answer:
        'No. Texas and Nevada both have no state personal income tax. Compare the house, the commute, and the Clark County district bill instead.',
    },
    {
      question: 'Who should I call in Las Vegas?',
      answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY} at Las Vegas Relocation Services.`,
    },
  ],
  related: [
    { href: '/relocating-from/phoenix', label: 'Moving from Phoenix to Las Vegas' },
    { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
    { href: '/neighborhoods/summerlin', label: 'Summerlin relocation guide' },
    { href: '/services/corporate-relocation', label: 'Corporate relocation' },
  ],
};

export const nevadaTaxGuide: TopicGuideProps = {
  hero: 'nevadaTaxes',
  eyebrow: 'Relocation money',
  h1: 'Nevada taxes when you move to Las Vegas',
  lede: `Nevada does not tax wages at the state level. Clark County property tax is a district bill. Call ${PHONE_DISPLAY} before you compare two houses on tax alone.`,
  blocks: [
    {
      id: 'no-wage-tax',
      heading: 'No state tax on wages',
      paragraphs: [
        'Nevada does not levy a state personal income tax.',
        'Nevada also has no state corporate income tax and no inheritance tax.',
        'That does not set your property-tax bill. Clark County bills the house by tax district.',
      ],
      image: {
        src: '/heroes/nevada-taxes.webp',
        alt: 'Single-story desert home in the Las Vegas valley under a clear sky',
      },
    },
    {
      id: 'how-property-tax-works',
      heading: 'How Clark County property tax works',
      paragraphs: [
        `The county assesses real property at 35% of taxable value. That rule is NRS 361.225: ${NRS_361_URL}`,
        `A rate quoted “per $100 of assessed value” applies to that 35% slice, not to the full taxable value.`,
        `${SUMMERLIN_TOWN_RATE} per $100 of assessed value is about $1.03 per $100 of taxable value before abatements (2.9328 × 0.35). Abatements can lower the bill. This is arithmetic on the published rate, not a second official rate.`,
      ],
    },
    {
      id: 'district-examples',
      heading: 'Two district examples for fiscal year 2026–27',
      paragraphs: [
        CLARK_COUNTY_TAX_SUMMARY,
        'Summerlin Town is district 421. Henderson Artesian Basin is district 505. A Summerlin mailing address can still sit in a City of Las Vegas district.',
        `Look up the parcel on the Clark County Treasurer site: ${CLARK_COUNTY_TREASURER_URL}`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Does Nevada have a state income tax?',
      answer: 'No. Nevada does not levy a state personal income tax.',
    },
    {
      question: 'Is the Las Vegas property tax rate 0.84%?',
      answer: `Do not use a single effective rate for the valley. For fiscal year 2026–27, Summerlin Town (district 421) is ${SUMMERLIN_TOWN_RATE} per $100 of assessed value, and Henderson Artesian Basin (district 505) is ${HENDERSON_ARTESIAN_RATE}. The parcel bill controls. Checked ${TAX_CHECKED}.`,
    },
    {
      question: 'Where do I confirm a house’s tax district?',
      answer: `Use the Clark County Treasurer parcel search. The statute for the 35% assessment ratio is NRS 361.225. For help reading a bill next to a listing, call ${PHONE_DISPLAY}.`,
    },
  ],
  related: [
    { href: '/neighborhoods/summerlin', label: 'Summerlin relocation guide' },
    { href: '/neighborhoods/henderson', label: 'Henderson relocation guide' },
    { href: '/relocating-from/phoenix', label: 'Moving from Phoenix' },
    { href: '/relocating-from/dallas', label: 'Moving from Dallas' },
  ],
};
