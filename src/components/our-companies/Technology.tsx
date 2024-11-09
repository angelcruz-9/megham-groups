import React from 'react';

interface CardData {
  image: string;
  logo?: string;
  companyName?: string;
  description: React.ReactNode;
}

const servicesData: CardData[] = [
  {
    image: '/path/to/service-image1.jpg',
    // logo: '/path/to/logo1.png',
    // companyName: 'Service Company 1',
    description : <p>
    <strong>Meygham Groups</strong>
    is a global IT services and solutions company with a global network of strategic partners and extensive expertise in digital and business transformation specializing in cloud, data/AI, applications, and automation.
    </p> ,
  },
  {
    image: '/path/to/service-image2.jpg',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>SynapSiS</strong>
        is a systems integrator and technology services provider with expertise in designing processes and solutions that ensures client’s success in the development of mission critical business solutions.
    </p>,
  },
  {
    image: '/path/to/service-image1.jpg',
    // logo: '/path/to/logo1.png',
    // companyName: 'Service Company 1',
    description : <p>
    <strong>Infomatics, Inc.,</strong>
    is a leading provider of technology consulting services focusing on automotive and manufacturing, and is a certified Minority Business that works with diverse Fortune 500 enterprises.
    </p> ,
  },
  {
    image: '/path/to/service-image2.jpg',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>RiverPoint</strong>
        is a leading IT enterprise services company with expertise in AI, big data, data science, Business Intelligence, cybersecurity, applications, and support.
    </p>,
  },
  {
    image: '/path/to/service-image2.jpg',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>Kensington</strong>
        Information Group is an IT services and consulting company with the goal to improve and implement technology solutions to allow its clients to become high-performance businesses.
    </p>,
  },
  {
    image: '/path/to/service-image1.jpg',
    // logo: '/path/to/logo1.png',
    // companyName: 'Service Company 1',
    description : <p>
    <strong>Axius</strong>
    Technologies Inc., is one of the fastest growing IT talent sourcing companies providing end-to-end recruitment solutions to address the varied needs of channel partners across the globe.
    </p> ,
  },
  {
    image: '/path/to/service-image2.jpg',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>i3 Infotek</strong>
        delivers specialized services in the areas of R&D, engineering, packaging, quality and regulatory needs, to medical device and pharma manufacturers in life sciences and biotech industries.
    </p>,
  },
];

const productsData: CardData[] = [
    {
        image: '/path/to/service-image2.jpg',
        logo: '/path/to/logo2.png',
        description: <p>
            <strong>Farms IQ</strong>
            empowers Agri supply chain by offering E-traceability, digital anti-counterfeiting and streamline brand protection and promotion. Leverage Farms IQ solutions and ensure complete brand protection against counterfeits, track product inventory.
        </p>,
      },
      {
        image: '/path/to/service-image1.jpg',
        // logo: '/path/to/logo1.png',
        // companyName: 'Service Company 1',
        description : <p>
        <strong>TrackEx</strong>
        is a SaaS company offering a unified Travel & Expense Management platform for full workflow travel management designed to simply business travel.
        </p> ,
      },
      {
        image: '/path/to/service-image2.jpg',
        logo: '/path/to/logo2.png',
        description: <p>
            <strong>MSRvantage</strong>
            helps companies transform their business operations to increase or create new revenue opportunities through the MSRvantage platform utilizing cutting-edge technologies like AI, IoT, and blockchain.
        </p>,
      },
];

const productsData: CardData[] = [
    {
        image: '/path/to/service-image2.jpg',
        logo: '/path/to/logo2.png',
        description: <p>
            <strong>Farms IQ</strong>
            empowers Agri supply chain by offering E-traceability, digital anti-counterfeiting and streamline brand protection and promotion. Leverage Farms IQ solutions and ensure complete brand protection against counterfeits, track product inventory.
        </p>,
      },
      {
        image: '/path/to/service-image1.jpg',
        // logo: '/path/to/logo1.png',
        // companyName: 'Service Company 1',
        description : <p>
        <strong>TrackEx</strong>
        is a SaaS company offering a unified Travel & Expense Management platform for full workflow travel management designed to simply business travel.
        </p> ,
      },
      {
        image: '/path/to/service-image2.jpg',
        logo: '/path/to/logo2.png',
        description: <p>
            <strong>MSRvantage</strong>
            helps companies transform their business operations to increase or create new revenue opportunities through the MSRvantage platform utilizing cutting-edge technologies like AI, IoT, and blockchain.
        </p>,
      },
];

const Technology: React.FC = () => {
  return (
    <div className="px-4 py-8">
    <div className="space-y-8">
      {/* Services Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 h-96"
            >
              <img src={service.image} alt="" className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between h-[200px]">
                <div className="mb-4">
                  <p className="text-gray-700 mt-2">{service.description}</p>
                </div>
                <div className="flex justify-end">
                  <a href="/" className="text-blue-500 hover:underline font-semibold">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img src={product.image} alt="" className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between h-[200px]">
                <div className="mb-4">
                  <p className="text-gray-700 mt-2">{product.description}</p>
                </div>
                <div className="flex justify-end">
                  <a href="/" className="text-blue-500 hover:underline font-semibold">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Technology;
