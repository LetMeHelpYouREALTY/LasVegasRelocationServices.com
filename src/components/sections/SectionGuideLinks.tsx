import Link from 'next/link';

const LINKS = [
  { href: '/neighborhoods/summerlin#summerlin-tax', label: 'Summerlin property tax section' },
  {
    href: '/neighborhoods/henderson#seven-hills',
    label: 'Seven Hills section on the Henderson guide',
  },
  { href: '/neighborhoods/henderson#henderson-tax', label: 'Henderson property tax example' },
  { href: '/neighborhoods/green-valley#green-valley-place', label: 'Where Green Valley sits' },
  { href: '/neighborhoods/southern-highlands#where', label: 'Where Southern Highlands sits' },
  { href: '/neighborhoods/anthem#anthem-place', label: 'Anthem in Henderson' },
  { href: '/neighborhoods/inspirada#inspirada-place', label: 'Inspirada and zip 89044' },
  { href: '/neighborhoods/paradise#zip-89109', label: 'Paradise and zip 89109' },
  { href: '/neighborhoods/seven-hills#seven-hills-place', label: 'Seven Hills and zip 89052' },
  {
    href: '/guides/nevada-taxes#how-property-tax-works',
    label: 'How Clark County property tax works',
  },
  { href: '/relocation-specialist#who-to-call', label: 'Who to call for a Las Vegas relocation' },
  { href: '/services/employee-relocation#the-home', label: 'Employee home search' },
  {
    href: '/services/corporate-relocation#office-ffe',
    label: 'Office, FF&E, IT, and warehouse moves',
  },
  { href: '/services/luxury-relocation#high-net-worth', label: 'High-net-worth relocation' },
  {
    href: '/services/residential-moving#retirement-and-downsizing',
    label: 'Retirement and downsizing',
  },
  { href: '/services/investment-properties#paradise-89109', label: 'Paradise and zip 89109' },
  { href: '/moving-from-las-vegas#to-san-diego', label: 'Moving from Las Vegas to San Diego' },
] as const;

export default function SectionGuideLinks() {
  return (
    <nav aria-label="Sections of the relocation guides" className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Open a section</h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {LINKS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="font-semibold text-blue-800 underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
