import React from 'react';

interface CardData {
  image: string;
  logo: string;
  companyName: string;
  description: string;
}

const nonProfitData: CardData = {
  image: '/path/to/non-profit-image.jpg',
  logo: '/path/to/non-profit-logo.png',
  companyName: 'Non-Profit Organization',
  description: 'Our non-profit organization is dedicated to making a positive impact. Learn more about our mission and values.',
};

const NonProfits: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 h-[400px] transform hover:scale-105 transition duration-300">
          <img src={nonProfitData.image} alt={nonProfitData.companyName} className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-col justify-between h-[240px]">
            <div className="mb-4">
              <img src={nonProfitData.logo} alt={`${nonProfitData.companyName} Logo`} className="w-16 h-16 mb-2" />
              <p className="text-lg font-bold text-gray-900">{nonProfitData.companyName}</p>
              <p className="text-gray-700 mt-2">{nonProfitData.description}</p>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-blue-500 hover:underline font-semibold">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonProfits;
