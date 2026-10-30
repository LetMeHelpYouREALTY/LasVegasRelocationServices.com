import type { TopicGuideProps } from '@/components/sections/TopicGuide';
import { LICENSE_LABEL, PHONE_DISPLAY } from '@/lib/business';
import {
  CLARK_COUNTY_TAX_SUMMARY,
  HENDERSON_ARTESIAN_RATE,
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
        'Henderson and Green Valley have their own guides. Property tax for a Summerlin address is in the next section, and the [Nevada property tax guide](/guides/nevada-taxes#how-property-tax-works) shows the assessment rule.',
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
        'Nevada assesses real property at 35% of taxable value under [NRS 361.225](https://www.leg.state.nv.us/nrs/NRS-361.html#NRS361Sec225). Abatements can change the bill.',
        'Some Summerlin street addresses sit inside the City of Las Vegas and use a different district. The parcel bill controls.',
        'Confirm the district on the [Clark County Treasurer](https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/) site before you write an offer.',
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
        'Henderson sits southeast of Las Vegas. [Green Valley](/neighborhoods/green-valley#green-valley-place) is one of its communities.',
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
      id: 'seven-hills',
      heading: 'Seven Hills',
      paragraphs: [
        '[Seven Hills](/neighborhoods/seven-hills#seven-hills-place) is a Henderson community in the southeast valley, near [Anthem](/neighborhoods/anthem#anthem-place).',
        'Buyers ask for a relocation realtor there by name. The search is the same Henderson practice.',
        'The tax district is not the community name. Pull the parcel before you compare two houses.',
      ],
    },
    {
      id: 'henderson-schools',
      heading: 'Schools follow the address',
      paragraphs: [
        '[Clark County School District](https://www.ccsd.net/) assigns a school by the street address, not by a neighborhood label.',
        'Look up the assigned school names for a specific house before you compare it with another house.',
        'This guide does not rank school quality.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Green Valley part of Henderson?',
      answer:
        'Yes. [Green Valley](/neighborhoods/green-valley) is a Henderson community along Green Valley Parkway.',
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
    { href: '/neighborhoods/seven-hills', label: 'Seven Hills, Henderson' },
    { href: '/neighborhoods/anthem', label: 'Anthem, Henderson' },
    { href: '/neighborhoods/inspirada', label: 'Inspirada, Henderson' },
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
        'Read the [Nevada property tax guide](/guides/nevada-taxes#how-property-tax-works), then look up the parcel on the [Clark County Treasurer](https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/) site.',
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
        'Summerlin, Henderson, and Green Valley come up most. This guide does not publish a median price. The [Nevada property tax guide](/guides/nevada-taxes#district-examples) is the number to compare.',
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
        'The county assesses real property at 35% of taxable value. That rule is [NRS 361.225](https://www.leg.state.nv.us/nrs/NRS-361.html#NRS361Sec225).',
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
        'Look up the parcel on the [Clark County Treasurer](https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/) site. The [Summerlin tax section](/neighborhoods/summerlin#summerlin-tax) and the [Henderson tax section](/neighborhoods/henderson#henderson-tax) show the two district examples.',
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

export const relocationSpecialistGuide: TopicGuideProps = {
  hero: 'relocationSpecialist',
  eyebrow: 'Luxury relocation realtor',
  h1: 'Las Vegas Relocation Specialist',
  lede: `Dr. Jan Duffy is the relocation realtor for households and executives moving to Las Vegas. Call ${PHONE_DISPLAY}.`,
  blocks: [
    {
      id: 'who-to-call',
      heading: 'One realtor for the relocation',
      paragraphs: [
        'She is a REALTOR® licensed since 2008 · 35 years in Las Vegas.',
        'The work is the home: the search, the showings, the purchase or the lease, and the sale if you already own in Nevada.',
        'She is not a moving company. A licensed mover hauls the furniture. She introduces one if you need a name.',
      ],
      image: {
        src: '/heroes/relocation-specialist.webp',
        alt: 'Luxury desert estate at dusk with a pool and Red Rock cliffs',
      },
    },
    {
      id: 'out-of-state',
      heading: 'Out-of-state moves',
      paragraphs: [
        'Buyers come from Los Angeles, San Diego, Phoenix, Dallas, Chicago, New York, Miami, and Seattle.',
        'Tell her the week you can tour, whether you are buying or leasing, and the home you want.',
        'Summerlin, Henderson, Green Valley, and Paradise are the areas people ask about first.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Who is the Las Vegas relocation specialist?',
      answer: `Dr. Jan Duffy, ${PHONE_DISPLAY}. She is a luxury relocation realtor, licensed since 2008 · 35 years in Las Vegas.`,
    },
    {
      question: 'Can you recommend a relocation realtor in Las Vegas?',
      answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY}. One contact covers the home search for an out-of-state move.`,
    },
    {
      question: 'Do you pack and truck the household?',
      answer:
        'No. This practice is the real estate side of the relocation. Hire a licensed mover for packing, furniture, fixtures, and equipment.',
    },
  ],
  related: [
    { href: '/services/corporate-relocation', label: 'Corporate relocation in Las Vegas' },
    { href: '/services/employee-relocation', label: 'Employee relocation' },
    { href: '/services/luxury-relocation', label: 'Luxury relocation' },
    { href: '/neighborhoods', label: 'Neighborhood guides' },
  ],
};

export const employeeRelocationGuide: TopicGuideProps = {
  hero: 'employeeRelocation',
  eyebrow: 'Transferring employees',
  h1: 'Employee Relocation Las Vegas',
  lede: `Dr. Jan Duffy finds the home for an employee or executive transferring to Las Vegas. Call ${PHONE_DISPLAY} with the start date.`,
  blocks: [
    {
      id: 'the-home',
      heading: 'The home, timed to the start date',
      paragraphs: [
        'She searches, shows, and writes the offer or the lease for the transferring employee.',
        'The company can send one contact. She can also work with the employee directly.',
        '[Henderson](/neighborhoods/henderson#henderson-drive) and the Las Vegas valley are both in the search. The office is in Henderson. Company moves also use the [corporate relocation](/services/corporate-relocation) page.',
      ],
      image: {
        src: '/heroes/employee-relocation.webp',
        alt: 'Glass residential towers in Las Vegas at blue hour with palm trees',
      },
    },
    {
      id: 'what-she-does-not-move',
      heading: 'What stays with a mover',
      paragraphs: [
        'Furniture, fixtures, equipment, warehouse goods, and office IT ship with a licensed mover.',
        'She coordinates the real estate so the housing date lines up with the transfer.',
        'Office leases and purchases sit on the [corporate relocation](/services/corporate-relocation) page.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you handle employee relocation in Las Vegas?',
      answer: `Yes. Call ${PHONE_DISPLAY}. Dr. Jan Duffy is the realtor for the employee’s home purchase or lease.`,
    },
    {
      question: 'Do you move the office furniture?',
      answer:
        'No. She handles the home and, when asked, the office lease or purchase. A mover handles FF&E, IT, and warehouse goods.',
    },
    {
      question: 'Can an executive use the same realtor?',
      answer: `Yes. Executive home searches are the same practice. The luxury relocation page covers higher-end homes. Call ${PHONE_DISPLAY}.`,
    },
  ],
  related: [
    { href: '/services/corporate-relocation', label: 'Corporate relocation Las Vegas' },
    { href: '/services/luxury-relocation', label: 'Luxury and high-net-worth relocation' },
    { href: '/relocation-specialist', label: 'Las Vegas relocation specialist' },
    { href: '/neighborhoods/henderson', label: 'Henderson guide' },
  ],
};

export const leavingLasVegasGuide: TopicGuideProps = {
  hero: 'leavingLasVegas',
  eyebrow: 'Listing the Nevada home',
  h1: 'Moving from Las Vegas',
  lede: `If you are leaving Las Vegas, Dr. Jan Duffy can list the Nevada home. Call ${PHONE_DISPLAY}. She does not represent buyers in California or New York.`,
  blocks: [
    {
      id: 'to-san-diego',
      heading: 'Moving from Las Vegas to San Diego',
      paragraphs: [
        'She lists and sells the Las Vegas or Henderson house.',
        'She is not a San Diego mover and she is not a California agent. Hire a California broker for the home you are buying there, and a licensed mover for the truck.',
        'If the move is the other way, from San Diego to Las Vegas, use the San Diego guide.',
      ],
      image: {
        src: '/heroes/leaving-las-vegas.webp',
        alt: 'Luxury Las Vegas home at twilight with the lights on and an empty driveway',
      },
    },
    {
      id: 'to-new-york',
      heading: 'Moving from Las Vegas to New York',
      paragraphs: [
        'The same split applies. She sells the Nevada home. A New York broker handles the home on that side.',
        'Coming from New York to Las Vegas is the inbound guide.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Can you help me move from Las Vegas to San Diego?',
      answer: `Dr. Jan Duffy can list your Las Vegas home. Call ${PHONE_DISPLAY}. She is not licensed in California and she does not run the moving truck.`,
    },
    {
      question: 'Can you help me move from Las Vegas to New York?',
      answer: `She can sell the Nevada property. A New York agent handles the purchase there. Call ${PHONE_DISPLAY} to list the Las Vegas home.`,
    },
    {
      question: 'I am moving to Las Vegas, not away. Where do I start?',
      answer:
        'Use the San Diego, Los Angeles, or New York guides, or call the same number. This practice relocates people to Las Vegas.',
    },
  ],
  related: [
    { href: '/relocating-from/san-diego', label: 'Moving from San Diego to Las Vegas' },
    { href: '/relocating-from/new-york', label: 'Moving from New York to Las Vegas' },
    { href: '/relocation-specialist', label: 'Las Vegas relocation specialist' },
    { href: '/contact', label: 'Contact Dr. Jan Duffy' },
  ],
};

export const paradiseGuide: TopicGuideProps = {
  hero: 'paradise',
  eyebrow: 'Unincorporated Clark County',
  h1: 'Moving to Paradise, Nevada',
  lede: `Paradise is the Clark County town around the Strip, not the City of Las Vegas. Call ${PHONE_DISPLAY} to see high-rise and condo options.`,
  blocks: [
    {
      id: 'what-paradise-is',
      heading: 'What Paradise is',
      paragraphs: [
        'Winchester and Paradise are an unincorporated town administered by Clark County. Clark County’s planning page places it near the center of the valley.',
        'The Strip and Harry Reid International Airport sit in this part of the valley. The airport’s published address is 5757 Wayne Newton Boulevard, Las Vegas, NV 89119.',
        'A Paradise street can still say Las Vegas in the mailing address. The city limit and the tax district are what matter, and the parcel record controls.',
      ],
      image: {
        src: '/heroes/paradise.webp',
        alt: 'Las Vegas Strip skyline at sunset beyond a palm-lined road in Paradise',
      },
    },
    {
      id: 'zip-89109',
      heading: 'Investment property and zip 89109',
      paragraphs: [
        'Buyers ask about investment property in 89109. That zip appears on the Clark County zip-code map in the central valley, near 89119. The [investment property page](/services/investment-properties) uses the same boundary.',
        'A zip is not a tax bill and it is not a promise of rent. Confirm the parcel, the district, and the building rules before you write an offer.',
        'Dr. Jan Duffy searches investment and residence property here. She does not quote a return.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Paradise part of the City of Las Vegas?',
      answer:
        'No. Paradise is an unincorporated Clark County town. Many addresses still read Las Vegas because of the postal city.',
    },
    {
      question: 'Do you cover investment properties in 89109?',
      answer: `Yes, as a realtor search. Call ${PHONE_DISPLAY}. Confirm the zip and the tax district on the parcel. This site does not publish a cap rate or a median price for 89109.`,
    },
    {
      question: 'Are you a Paradise mover?',
      answer: 'No. Dr. Jan Duffy is the relocation realtor. A licensed mover handles the truck.',
    },
  ],
  related: [
    { href: '/services/investment-properties', label: 'Las Vegas investment properties' },
    { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
    { href: '/neighborhoods', label: 'All neighborhood guides' },
    { href: '/relocation-specialist', label: 'Las Vegas relocation specialist' },
  ],
};

export const southernHighlandsGuide: TopicGuideProps = {
  hero: 'southernHighlands',
  eyebrow: 'Unincorporated Clark County',
  h1: 'Southern Highlands Las Vegas',
  lede: `Southern Highlands is a Clark County community in the southwest valley, not the City of Henderson. Call ${PHONE_DISPLAY} to tour homes there.`,
  blocks: [
    {
      id: 'where',
      heading: 'Where Southern Highlands sits',
      paragraphs: [
        'The [Clark County planning library](https://www.clarkcountynv.gov/government/departments/comprehensive_planning_department/library/southern-highlands) describes Southern Highlands as about 2,299 acres in the southern Las Vegas Valley, generally bounded by Interstate 15 on the east, Cactus on the north, Jones on the west, and Larson on the south.',
        'The Clark County Commission approved the development agreement and zone change on November 18, 1998, and amended it on December 8, 1999. That agreement limits the project to one private golf course, a maximum of 8,500 residential units, and 493 acres of non-residential private uses.',
        'It is unincorporated Clark County. A county park in the community, Inzalaco Park, is addressed 5801 Shinnecock Hills Avenue, Las Vegas, NV 89141. Confirm the zip on the parcel you are buying. The mailing city can say Las Vegas.',
      ],
      image: {
        src: '/heroes/southern-highlands.webp',
        alt: 'Luxury homes and a golf fairway in Southern Highlands, southwest Las Vegas valley',
      },
    },
    {
      id: 'search',
      heading: 'The realtor search',
      paragraphs: [
        'Dr. Jan Duffy shows houses here for a purchase or a lease. She is a luxury relocation realtor, licensed since 2008.',
        'She does not quote a median price for the community and she does not invoice a moving package. A licensed mover prices the truck.',
        `Property tax follows the parcel’s Clark County district, not the community name. The Nevada tax guide explains the bill. Call ${PHONE_DISPLAY}.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Southern Highlands in Henderson?',
      answer:
        'No. Clark County plans it as unincorporated land in the southwest valley. Henderson communities such as Anthem and Inspirada are separate guides.',
    },
    {
      question: 'What is the Southern Highlands zip code?',
      answer:
        'Inzalaco Park, inside the community, uses 89141. Confirm the zip on the specific parcel. A community name is not a zip boundary.',
    },
    {
      question: 'Do you rank schools in Southern Highlands?',
      answer:
        'No. [Clark County School District](https://www.ccsd.net/) assigns a school by the street address. This site does not rank school quality.',
    },
  ],
  related: [
    { href: '/neighborhoods/anthem', label: 'Anthem, Henderson' },
    { href: '/neighborhoods/inspirada', label: 'Inspirada, Henderson' },
    { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
    { href: '/relocation-specialist', label: 'Las Vegas relocation specialist' },
  ],
};

export const anthemGuide: TopicGuideProps = {
  hero: 'anthem',
  eyebrow: 'Henderson',
  h1: 'Moving to Anthem',
  lede: `Anthem is a Henderson community. Addresses there commonly use 89044 and 89052. Call ${PHONE_DISPLAY} to see homes.`,
  blocks: [
    {
      id: 'anthem-place',
      heading: 'Anthem in Henderson',
      paragraphs: [
        'Anthem sits in south Henderson. Buyers use the name for several villages, not one plat.',
        'Mailing addresses in the area commonly use 89044 and 89052. Confirm the zip and the tax district on the parcel.',
        'Some villages are age-restricted, including Sun City Anthem. Read that village’s rules before you write an offer. This guide does not rank one village over another.',
      ],
      image: {
        src: '/heroes/anthem.webp',
        alt: 'Hillside homes beside a golf fairway in Anthem, Henderson',
      },
    },
    {
      id: 'anthem-tax',
      heading: 'Tax district and nearby communities',
      paragraphs: [
        `Henderson has more than one tax district. For fiscal year 2026–27, district 505 (Henderson Artesian Basin) is ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value. That rate is an example. The parcel bill controls. Checked ${TAX_CHECKED}.`,
        'Seven Hills and Inspirada are nearby Henderson communities with their own guides.',
        `Dr. Jan Duffy is the relocation realtor for the purchase or the lease. Call ${PHONE_DISPLAY}. A licensed mover handles the truck.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'What zip code is Anthem Henderson?',
      answer:
        'Addresses in Anthem commonly use 89044 and 89052. Confirm the zip on the house. The community name covers more than one zip.',
    },
    {
      question: 'Is Sun City Anthem the same as Anthem?',
      answer:
        'Sun City Anthem is an age-restricted village inside the broader Anthem area. Other Anthem villages are not the same product. Read the rules for the village on the listing.',
    },
    {
      question: 'Who shows Anthem homes?',
      answer: `Call Dr. Jan Duffy at ${PHONE_DISPLAY}. She is the Las Vegas relocation realtor, not a mover.`,
    },
  ],
  related: [
    { href: '/neighborhoods/seven-hills', label: 'Seven Hills, Henderson' },
    { href: '/neighborhoods/inspirada', label: 'Inspirada, Henderson' },
    { href: '/neighborhoods/henderson', label: 'Henderson relocation guide' },
    { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
  ],
};

export const inspiradaGuide: TopicGuideProps = {
  hero: 'inspirada',
  eyebrow: 'Henderson',
  h1: 'Moving to Inspirada',
  lede: `Inspirada is a master-planned community in Henderson. Its site lists Henderson, NV 89044. Call ${PHONE_DISPLAY}.`,
  blocks: [
    {
      id: 'inspirada-place',
      heading: 'Inspirada and zip 89044',
      paragraphs: [
        'Inspirada’s [community map](https://inspirada.com/community-map/) lists addresses in Henderson, NV 89044, including the information center.',
        'It is southwest Henderson, near Anthem. The MLS city field on a listing can still say Las Vegas. The parcel and the city of Henderson are what matter.',
        'This guide does not publish a median price, an HOA dues figure, or a builder inventory. Ask for the current listing.',
      ],
      image: {
        src: '/heroes/inspirada.webp',
        alt: 'Contemporary Henderson homes along a linear park in Inspirada',
      },
    },
    {
      id: 'inspirada-realtor',
      heading: 'Purchase or lease',
      paragraphs: [
        'Dr. Jan Duffy searches Inspirada for buyers relocating to Henderson. She represents you on the contract.',
        `Property tax is the parcel’s district. Henderson district 505 is ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value for fiscal year 2026–27, and it may not be the district on an Inspirada lot. Pull the bill. Checked ${TAX_CHECKED}.`,
        `Call ${PHONE_DISPLAY}. She does not quote a moving package.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'What zip code is Inspirada?',
      answer:
        'The Inspirada community site lists Henderson, NV 89044. Confirm the zip on the parcel before you write.',
    },
    {
      question: 'Is Inspirada in Henderson or Las Vegas?',
      answer:
        'Inspirada is a Henderson community. A listing can still type Las Vegas in the city field. Read the parcel.',
    },
    {
      question: 'Do you sell new construction in Inspirada?',
      answer: `She can represent you on a listed home, including new construction the builder has on the market. Call ${PHONE_DISPLAY}. She does not publish a price list.`,
    },
  ],
  related: [
    { href: '/neighborhoods/anthem', label: 'Anthem, Henderson' },
    { href: '/neighborhoods/henderson', label: 'Henderson relocation guide' },
    { href: '/neighborhoods/southern-highlands', label: 'Southern Highlands' },
    { href: '/relocation-specialist', label: 'Las Vegas relocation specialist' },
  ],
};

export const sevenHillsGuide: TopicGuideProps = {
  hero: 'sevenHills',
  eyebrow: 'Henderson',
  h1: 'Seven Hills, Henderson',
  lede: `Seven Hills is a master-planned community in Henderson. Call ${PHONE_DISPLAY} for a private showing.`,
  blocks: [
    {
      id: 'seven-hills-place',
      heading: 'Seven Hills and zip 89052',
      paragraphs: [
        'Seven Hills is a Henderson community in the southeast valley, near [Anthem](/neighborhoods/anthem#anthem-place). The [Wikipedia entry for the neighborhood](https://en.wikipedia.org/wiki/Seven_Hills,_Henderson,_Nevada) lists ZIP 89052.',
        'Clark County Assessor plats titled Seven Hills list the city as Henderson. Sampled lots in those plats are tax district 505 for fiscal year 2026–27. The lot you buy can differ. Pull that parcel.',
        `District 505 (Henderson Artesian Basin) is ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value. Checked ${TAX_CHECKED}. ${CLARK_COUNTY_TAX_SUMMARY}`,
      ],
      image: {
        src: '/heroes/seven-hills.webp',
        alt: 'Hillside homes at dusk in Seven Hills, Henderson',
      },
    },
    {
      id: 'seven-hills-search',
      heading: 'A Henderson home search',
      paragraphs: [
        'Dr. Jan Duffy shows Seven Hills for buyers relocating to Henderson. The search is a purchase or a lease.',
        'She does not rank schools. [Clark County School District](https://www.ccsd.net/) assigns the school by the street address.',
        `Anthem and the broader Henderson guide are linked below. Call ${PHONE_DISPLAY}.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'What is the Seven Hills Las Vegas zip code?',
      answer:
        'Seven Hills is in Henderson, not a separate city. The commonly cited zip is 89052. Confirm it on the parcel.',
    },
    {
      question: 'What property tax district is Seven Hills?',
      answer: `Sampled Seven Hills plats are district 505, ${HENDERSON_ARTESIAN_RATE} per $100 of assessed value for fiscal year 2026–27. Your parcel can be different. The treasurer bill controls.`,
    },
    {
      question: 'Are you a Seven Hills mover?',
      answer: 'No. Dr. Jan Duffy is the relocation realtor. A licensed mover handles furniture.',
    },
  ],
  related: [
    { href: '/neighborhoods/anthem', label: 'Anthem, Henderson' },
    { href: '/neighborhoods/henderson', label: 'Henderson relocation guide' },
    { href: '/guides/nevada-taxes', label: 'Nevada property tax guide' },
    { href: '/contact', label: 'Contact Dr. Jan Duffy' },
  ],
};
