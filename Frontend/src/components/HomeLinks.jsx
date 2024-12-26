import React from 'react';

const HomeLinks = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <div className="grid grid-cols-3 gap-6">
        {/* Section 1 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Browse Top Links to Search Your Home</h3>
          <ul className="list-disc pl-4">
            <li>People Also Search For:</li>
            <li>Resale Flats in Agra</li>
            <li>Ready to Move Flats in Agra</li>
            <li>Flats for Sale in Agra Without Brokerage</li>
            <li>Resale House in Agra</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-bold mb-2">City Collections</h3>
          <ul className="list-disc pl-4">
            <li>Affordable Projects in Agra</li>
            <li>Townships in Agra</li>
            <li>Ready to Move Projects in Agra</li>
            <li>Properties for Sale in Agra</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Filter Your Search</h3>
          <ul className="list-disc pl-4">
            <li>House for Sale Without Brokerage in Agra</li>
            <li>Under Construction Apartments in Agra</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
