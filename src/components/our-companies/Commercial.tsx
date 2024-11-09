import React from 'react';

interface CardData {
  image: string;
  logo?: string;
  companyName?: string;
  description: React.ReactNode;
}

const commercialData: CardData[] = [
    {
        image: '/path/to/service-image2.jpg',
        // logo: '/path/to/logo2.png',
        description: <p>
            <strong>MSRcommunities</strong>
            is an international builder of residential homes with a design focus on state-of-the-art energy efficiency and sustainability approaches.
        </p>,
      },
      {
        image: '/path/to/service-image2.jpg',
        // logo: '/path/to/logo2.png',
        description: <p>
            <strong>MSRsilver</strong>
            is a global supplier of high-quality silver goods, including jewelry, utensils, tableware, and specialty products, to wholesalers and consumers.
        </p>,
      },
      {
        image: '/path/to/service-image2.jpg',
        // logo: '/path/to/logo2.png',
        description: <p>
            <strong>MSRcapital</strong>
            is a tech accelerator providing resources, funding and mentorship to entrepreneurs and women-owned businesses focused on sustainability, healthcare, manufacturing/supply chain (rural areas), and ecommerce.
        </p>,
      },
      {
        image: '/path/to/service-image1.jpg',
        // logo: '/path/to/logo1.png',
        // companyName: 'Service Company 1',
        description : <p>
        <strong>MSRhotels</strong>
        is an India-based hotel chain that sets a new standard for luxury business accommodations at affordable prices.
        </p> ,
      },
];

const Commercial: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {commercialData.map((company, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden w-[320px] h-[400px] transform hover:scale-105 transition duration-300 mx-auto"
          >
            <img src={company.image} alt={company.companyName} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between h-[220px]">
              <div className="mb-4">
                {/* <img src={company.logo} alt={`${company.companyName} Logo`} className="w-16 h-16 mb-2" /> */}
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
