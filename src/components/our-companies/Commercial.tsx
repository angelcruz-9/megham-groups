import React from 'react';

interface CardData {
  image: string;
  logo: string;
  companyName: string;
  description: string;
}

const commercialData: CardData[] = [
  {
    image: '/path/to/commercial-image1.jpg',
    logo: '/path/to/commercial-logo1.png',
    companyName: 'Commercial Company 1',
    description: 'Commercial Company 1 offers reliable services for clients worldwide. Discover more about our solutions.',
  },
  {
    image: '/path/to/commercial-image2.jpg',
    logo: '/path/to/commercial-logo2.png',
    companyName: 'Commercial Company 2',
    description: 'Commercial Company 2 specializes in innovative commercial products for a global market.',
  },
  {
    image: '/path/to/commercial-image3.jpg',
    logo: '/path/to/commercial-logo3.png',
    companyName: 'Commercial Company 3',
    description: 'Commercial Company 3 is renowned for exceptional quality and customer satisfaction.',
  },
  {
    image: '/path/to/commercial-image4.jpg',
    logo: '/path/to/commercial-logo4.png',
    companyName: 'Commercial Company 4',
    description: 'Commercial Company 4 provides trusted commercial solutions across industries.',
  },
];

const Commercial: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {commercialData.map((company, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-[380px] transform hover:scale-105 transition duration-300 mx-auto"
          >
            <img src={company.image} alt={company.companyName} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between h-[220px]">
              <div className="mb-4">
                <img src={company.logo} alt={`${company.companyName} Logo`} className="w-16 h-16 mb-2" />
                <p className="text-lg font-bold text-gray-900">{company.companyName}</p>
                <p className="text-gray-700 mt-2">{company.description}</p>
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-blue-500 hover:underline font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commercial;
