import React from 'react';

interface CardData {
  image: string;
  logo?: string;
  companyName?: string;
  description: React.ReactNode;
}

const nonProfitData: CardData = {
  image: '/path/to/service-image1.jpg',
  description: (
    <p>
      <strong>MSRfoundations</strong> seeks to improve underserved communities worldwide by offering education,
      healthcare, sustainability, food/shelter, and employment (trade and skills development) opportunities.
    </p>
  ),
};

const NonProfits: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img src={nonProfitData.image} alt={nonProfitData.companyName} className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-col justify-between">
            <div className="mb-4">
              <p className="text-lg font-bold text-gray-900">{nonProfitData.companyName}</p>
              <p className="text-gray-700 mt-2">{nonProfitData.description}</p>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-blue-500 hover:underline font-semibold">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonProfits;
