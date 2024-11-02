import React from 'react';

interface CardData {
  image: string;
  logo: string;
  companyName: string;
  description: string;
}

const servicesData: CardData[] = [
  {
    image: '/path/to/service-image1.jpg',
    logo: '/path/to/logo1.png',
    companyName: 'Service Company 1',
    description: 'Service Company 1 provides excellent solutions for businesses. Learn more about what we do.',
  },
  {
    image: '/path/to/service-image2.jpg',
    logo: '/path/to/logo2.png',
    companyName: 'Service Company 2',
    description: 'Service Company 2 offers innovative technology to enhance efficiency.',
  },
  // Add more cards as needed
];

const productsData: CardData[] = [
  {
    image: '/path/to/product-image1.jpg',
    logo: '/path/to/product-logo1.png',
    companyName: 'Product Company 1',
    description: 'Product Company 1 specializes in high-quality products for global markets.',
  },
  {
    image: '/path/to/product-image2.jpg',
    logo: '/path/to/product-logo2.png',
    companyName: 'Product Company 2',
    description: 'Product Company 2 delivers advanced technology solutions.',
  },
  {
    image: '/path/to/product-image3.jpg',
    logo: '/path/to/product-logo3.png',
    companyName: 'Product Company 3',
    description: 'Product Company 3 is at the forefront of innovation.',
  },
];

const Technology: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <div className="grid lg:grid-cols-1 gap-8">
        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <div className="grid sm:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden w-80 h-[400px] transform hover:scale-105 transition duration-300 mx-auto"
              >
                <img src={service.image} alt={service.companyName} className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <div className="mb-4">
                    <img src={service.logo} alt={`${service.companyName} Logo`} className="w-16 h-16 mb-2" />
                    <p className="text-lg font-bold text-gray-900">{service.companyName}</p>
                    <p className="text-gray-700 mt-2">{service.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-500 hover:underline font-semibold">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <div className="grid sm:grid-cols-4 gap-6">
            {productsData.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden w-80 h-[400px] transform hover:scale-105 transition duration-300 mx-auto"
              >
                <img src={product.image} alt={product.companyName} className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <div className="mb-4">
                    <img src={product.logo} alt={`${product.companyName} Logo`} className="w-16 h-16 mb-2" />
                    <p className="text-lg font-bold text-gray-900">{product.companyName}</p>
                    <p className="text-gray-700 mt-2">{product.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-blue-500 hover:underline font-semibold">Learn More</a>
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
