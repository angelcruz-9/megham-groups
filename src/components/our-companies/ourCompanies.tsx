import React from "react";

const OurCompanies: React.FC = () => {
  const companiesData = [
    {
      image: "/assets/companies/crosscloudops.png",
      title: "Cross Cloud Ops",
      description:
        "Cross Cloud Ops is a cloud-based platform that enables businesses to manage their cloud infrastructure",
      link: "https://www.crosscloudops.com/",
    },
    {
      image: "/assets/companies/dx360.jpeg",
      title: "DX360",
      description:
        "DX360 is a cloud-based platform that enables businesses to manage their cloud infrastructure",
      link: "https://www.DX360.com/",
    },
    {
      image: "/assets/companies/cybercots.jpeg",
      title: "CyberCots",
      description:
        "We specialize in offering Cyber Security Business Consulting and Solutions in areas of Cyber Security, Internet Security, Penetration testing, Hardware",
      link: "https://www.cybercots.com/",
    },
    {
      image: "/assets/companies/winsoltech.jpeg",
      title: "Winsoltech",
      description:
        "WINSOLTECH is the Medical Billing company associated globally and Most of the outsourcing activities are performed from our Indian office.",
      link: "http://winsoltech.com/",
    },
    {
      image: "/assets/companies/nbil.png",
      title: "Next Big Innovation",
      description:
        "Welcome to Next Big Innovation Labs®, where we harness the power of bioprinting technology to fuel scientific discovery and innovation.",
      link: "https://nextbiginnovationlabs.com/",
    },
    {
      image: "/assets/companies/rtp.jpeg",
      title: "Royal Tiger Productions",
      description:
        "Royal Tiger Productions is a creative team dedicated to producing films that convey positive messages to the world.",
      link: "https://www.youtube.com/@RoyalTigerProduction",
    },
  ];

  return (
    <div id="our-companies" className="py-8">
      {/* Banner Section */}
      <div className="w-full h-[300px] md:h-[500px] flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Title and Description with Full-Width Background Image */}
        <div
          className="w-full h-full flex flex-col justify-end md:pl-24 relative p-8 rounded-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/our-companies.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-wider text-white">
            Our Companies
          </h1>
          <p className="text-lg md:text-xl text-white">
            DIverified. Global. Innovative.
          </p>
        </div>
      </div>

      {/* Company Cards */}
      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto p-16">
        {companiesData.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative"
            style={{ width: "400px", height: "500px" }}
          >
            {/* Double border effect with minimalistic colors */}
            <div className="absolute inset-0 border-4 border-gray-300 rounded-xl z-0"></div>
            <div className="absolute inset-0 border-2 border-gray-400 rounded-xl z-10"></div>

            <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
              <img
                src={`${process.env.PUBLIC_URL}${company.image}`}
                alt={company.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-6 z-20 relative flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-gray-600 transition-all duration-200">
                {company.title}
              </h3>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium hover:text-blue-700 hover:underline  text-sm text-right"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompanies;
