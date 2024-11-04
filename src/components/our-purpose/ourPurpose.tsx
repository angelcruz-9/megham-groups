import React from 'react';

const OurPurpose: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Full-width Image with Text Overlay */}
      <div className="relative w-full h-[500px]">
        <img
          src="/path/to/image.jpg"
          alt="About Us Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-opacity-50 text-black p-4 rounded-md">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-1">Discover who we are and what we stand for.</p>
        </div>
      </div>

      {/* Section 2: Centered Content with Paragraphs and List Items */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-xl font-semibold">Our Purpose and Values</h3>
        <p>
          We believe in creating meaningful change through our actions and values.
          Our purpose drives us to constantly improve and innovate in every area.
        </p>
        <p>
          Here’s how we make a difference:
        </p>
        <ul className="list-disc list-inside space-y-2 text-left mx-auto">
          <li>Commitment to quality and integrity.</li>
          <li>Empowering communities through technology.</li>
          <li>Continuous innovation in all that we do.</li>
          <li>Maintaining transparency with our partners and clients.</li>
        </ul>
      </div>

      {/* Section 3: Cards with Image, Title, and Description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
          >
            <img
              src={`/path/to/card-image${card}.jpg`}
              alt={`Card Image ${card}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Title {card}</h4>
              <p className="mt-2 text-gray-600">
                Description for this card goes here. It explains the purpose and details of the item.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPurpose;
