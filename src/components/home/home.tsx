import React from "react";
import Stats from "./stats";
import About from "./about";
import OurCompanies from "../our-companies/ourCompanies";
import OurPurpose from "../our-purpose/ourPurpose";
import ContactUs from "../contactUs/contactUs";
import StaticDisplay from "./caroselVideo";

const StaticData = 
  {
    title: "Architecting tomorrow’s enterprise, today.",
    description:
      "We are at the forefront of architecting intelligent solutions that transform how businesses operate, innovate, and succeed.",
  }

const aboutUsText =
  "Our ensemble of specialized companies creates perfect technology solutions to transform your business landscape";

  const companyData = [
    {
      logo: "/assets/company1.png",
      title: "Tech Innovators",
      description: "Pioneering AI and cloud solutions to drive digital transformation.",
    },
    {
      logo: "/assets/company2.png",
      title: "HealthSync",
      description: "Revolutionizing healthcare with smart, data-driven technology.",
    },
    {
      logo: "/assets/company3.png",
      title: "Eco Energy",
      description: "Sustainable energy solutions for a greener future.",
    },
    {
      logo: "/assets/company4.png",
      title: "FinSecure",
      description: "Innovative fintech solutions for secure and seamless transactions.",
    },
    {
      logo: "/assets/company5.png",
      title: "Auto AI",
      description: "Advancing autonomous driving with AI-powered systems.",
    },
    {
      logo: "/assets/company6.png",
      title: "EduTech Global",
      description: "Transforming education with digital learning platforms.",
    },
  ];

  const customerStories = [
    {
      id: 1,
      title: "Kairos Technologies",
      description: "Achieving Excellence through Total Quality Assurance",
      href: "/"
    },
    {
      id: 2,
      title: "Solunus",
      description: "Helping resolve data integration issues using Salesforce",
      href: "/"
    },
    {
      id: 3,
      title: "Mergen IT",
      description: "Mergen IT Uses ServiceNow to Enhance Incident Management and Resolve High-Priority Issues for a Banking and Financial Client",
      href: "/"
    },
    {
      id: 4,
      title: "Kodeus",
      description: "The Kodeus Multi-Agent Framework (K-MAF) redefines AI by integrating human-like sentience, adaptability, and decentralized intelligence.",
      href: "/"
    },
  ];
  
    

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <StaticDisplay data={StaticData} />
      <Stats aboutUsText={aboutUsText} companyData={companyData} />
      <About
        customersData={customerStories}
      />
      <OurCompanies/>
      <OurPurpose />
      <ContactUs />
    </div>
  );
};

export default Home;
