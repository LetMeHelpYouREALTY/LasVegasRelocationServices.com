import { RichText } from '@/components/sections/RichText';

type OriginCity = 'san-diego' | 'los-angeles';

const NOTES: Record<OriginCity, { heading: string; places: { name: string; text: string }[] }> = {
  'san-diego': {
    heading: 'San Diego neighborhoods people ask about',
    places: [
      {
        name: 'La Jolla',
        text: 'Coastal San Diego buyers use this same Las Vegas search. The home they buy is in Nevada. The truck is a separate hire.',
      },
      {
        name: 'Coronado',
        text: 'Coronado is a short move inside San Diego County and a full relocation to Las Vegas. Dr. Jan Duffy handles the Nevada home.',
      },
      {
        name: 'Scripps Ranch',
        text: 'Scripps Ranch clients usually want a house in [Summerlin](/neighborhoods/summerlin#what-summerlin-is), [Henderson](/neighborhoods/henderson#henderson-drive), or [Green Valley](/neighborhoods/green-valley#green-valley-place). Say which of those you want to see.',
      },
    ],
  },
  'los-angeles': {
    heading: 'Los Angeles-area neighborhoods people ask about',
    places: [
      {
        name: 'Playa Vista',
        text: 'Playa Vista is on the Westside. Buyers from there often compare a high-rise in [Paradise](/neighborhoods/paradise#what-paradise-is) with a house in [Summerlin](/neighborhoods/summerlin#what-summerlin-is).',
      },
      {
        name: 'Oak View',
        text: 'Oak View is in Ventura County. The Las Vegas search is the same practice as a Los Angeles move. Call with the week you can tour.',
      },
    ],
  },
};

export default function OriginNeighborhoodNotes({ city }: { city: OriginCity }) {
  const note = NOTES[city];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{note.heading}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {note.places.map((place) => (
            <div key={place.name}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{place.name}</h3>
              <RichText text={place.text} className="text-gray-700 leading-relaxed" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
