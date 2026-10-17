'use client';

import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ComparisonRow {
  category: string;
  originCity: string;
  lasVegas: string;
  difference: 'better' | 'worse' | 'similar';
  description?: string;
}

interface ComparisonTableProps {
  title: string;
  originCity: string;
  rows: ComparisonRow[];
  className?: string;
}

export default function ComparisonTable({ title, originCity, rows, className = "" }: ComparisonTableProps) {
  const getDifferenceIcon = (difference: 'better' | 'worse' | 'similar') => {
    switch (difference) {
      case 'better':
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'worse':
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      case 'similar':
        return <Minus className="w-5 h-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const getDifferenceText = (difference: 'better' | 'worse' | 'similar') => {
    switch (difference) {
      case 'better':
        return 'Better in Las Vegas';
      case 'worse':
        return `Better in ${originCity}`;
      case 'similar':
        return 'Similar';
      default:
        return '';
    }
  };

  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Compare {originCity} and Las Vegas across key factors
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold text-gray-900">
                  Category
                </th>
                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold text-gray-900">
                  {originCity}
                </th>
                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold text-gray-900">
                  Las Vegas
                </th>
                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold text-gray-900">
                  Comparison
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    {row.category}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    {row.originCity}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    {row.lasVegas}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getDifferenceIcon(row.difference)}
                      <span className="text-sm font-medium text-gray-700">
                        {getDifferenceText(row.difference)}
                      </span>
                    </div>
                    {row.description && (
                      <p className="text-xs text-gray-500 mt-1">
                        {row.description}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Property tax figures are district rates. The parcel bill controls. This site does not publish a median price.
          </p>
        </div>
      </div>
    </section>
  );
}
