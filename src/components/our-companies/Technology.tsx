import React from 'react';

interface CardData {
  image: string;
  logo?: string;
  companyName?: string;
  description: React.ReactNode;
}

const servicesData: CardData[] = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx7GjLAe18yhf00jjya3hOAzbCD3rxaw4cA&s',
    // logo: '/path/to/logo1.png',
    // companyName: 'Service Company 1',
    description : <p>
    <strong>Meygham Groups</strong>
    is a global IT services and solutions company with a global network of strategic partners and extensive expertise in digital and business transformation specializing in cloud, data/AI, applications, and automation.
    </p> ,
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/C4E0BAQFx8Y8IYJDRqw/company-logo_200_200/company-logo_200_200/0/1630563765033/synapsis_inc_logo?e=2147483647&v=beta&t=Wr0hJR4GTWpr81Oc7SOZgfR16n5OxhpsGAYuSsf_TdY',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>SynapSiS</strong>
        is a systems integrator and technology services provider with expertise in designing processes and solutions that ensures client’s success in the development of mission critical business solutions.
    </p>,
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/C4E0BAQG11epeR29iyA/company-logo_200_200/company-logo_200_200/0/1631373282241?e=2147483647&v=beta&t=Pqf1263Zj5xPLkqApoKdyLru2ozcpaaOiC8iv4ZDTl0',
    // logo: '/path/to/logo1.png',
    // companyName: 'Service Company 1',
    description : <p>
    <strong>Infomatics, Inc.,</strong>
    is a leading provider of technology consulting services focusing on automotive and manufacturing, and is a certified Minority Business that works with diverse Fortune 500 enterprises.
    </p> ,
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/C560BAQHAJ7MEBuCxUg/company-logo_200_200/company-logo_200_200/0/1631355862296?e=2147483647&v=beta&t=QvQs7ON6fgMDYrVGoWaCEGB-8utGIrCFBlvuQOkHPw4',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>RiverPoint</strong>
        is a leading IT enterprise services company with expertise in AI, big data, data science, Business Intelligence, cybersecurity, applications, and support.
    </p>,
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/C560BAQFO4bHoLVjAbg/company-logo_200_200/company-logo_200_200/0/1630565814844/kensington_logo?e=2147483647&v=beta&t=_NCa_WiMD5LxlmvoPS-H7vMBW226mPmYj3o7AZpS8oA',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>Kensington</strong>
        Information Group is an IT services and consulting company with the goal to improve and implement technology solutions to allow its clients to become high-performance businesses.
    </p>,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-3e4QXEZvhtcQ9r4axhTPSYM86lNmWTutA&s',
    // logo: '/path/to/logo1.png',
    // companyName: 'Service Company 1',
    description : <p>
    <strong>Axius</strong>
    Technologies Inc., is one of the fastest growing IT talent sourcing companies providing end-to-end recruitment solutions to address the varied needs of channel partners across the globe.
    </p> ,
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/C560BAQGO6-aVNgJ-0A/company-logo_200_200/company-logo_200_200/0/1630630234986/i3infotek_inc_logo?e=2147483647&v=beta&t=VdJiZlWCQ7knfogIizn7tG3M61brLQrCTH5jeCENPnU',
    logo: '/path/to/logo2.png',
    description: <p>
        <strong>i3 Infotek</strong>
        delivers specialized services in the areas of R&D, engineering, packaging, quality and regulatory needs, to medical device and pharma manufacturers in life sciences and biotech industries.
    </p>,
  },
];

const productsData: CardData[] = [
    {
        image: 'https://media.licdn.com/dms/image/v2/C560BAQHp-qnnCn4m3Q/company-logo_200_200/company-logo_200_200/0/1669761492535/farmiq_systems_ltd_logo?e=2147483647&v=beta&t=3_0c10w8MZ_RmanTWyQIk43NOC4eUgTdq24mtHgmVH0',
        logo: '/path/to/logo2.png',
        description: <p>
            <strong>Farms IQ</strong>
            empowers Agri supply chain by offering E-traceability, digital anti-counterfeiting and streamline brand protection and promotion. Leverage Farms IQ solutions and ensure complete brand protection against counterfeits, track product inventory.
        </p>,
      },
      {
        image: 'data:image/jpeg;base64,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',
        // logo: '/path/to/logo1.png',
        // companyName: 'Service Company 1',
        description : <p>
        <strong>TrackEx</strong>
        is a SaaS company offering a unified Travel & Expense Management platform for full workflow travel management designed to simply business travel.
        </p> ,
      },
      {
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ME/HE/MN/145090014/block-chain-technology-services.png',
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
