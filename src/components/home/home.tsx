import React from "react";
import Stats from "./stats";
import About from "./about";
import OurCompanies from "../our-companies/ourCompanies";
import AboutUs from "../about-us/aboutUs";
import OurPurpose from "../our-purpose/ourPurpose";
import ContactUs from "../contactUs/contactUs";
import StaticDisplay from "./caroselVideo";

const StaticData = [
  {
    title: "Our Companies",
    description:
      "Meygham Group is U.S.-based multinational conglomerate focused on diverse ventures ranging from software services to real estate and education.",
  },
  {
    title: "Dream. Create. Thrive.",
    description:
      "To inspire and empower individuals, businesses, and communities to realize their dreams.",
  },
  {
    title: "Our Purpose",
    description:
      "we use power of business make positive difference in our communities and to help build sustainable planet.",
  },
];

const statsData = [
  { name: "Total Companies", start: 0, end: 7, description: "Diverse Entities" },
  { name: "Offices", start: 0, end: 10, description: "4 Continents" },
  { name: "Workforce", start: 90, end: 100, description: "Americas, Europe, Asia" },
  { name: "Happy Customers", start: 0, end: 50, description: "Worldwide Customers" },
];

const aboutUsText =
  "Meygham Partners is a diverse group of service and solution providers, specializing in various areas such as digital transformation, cloud migration, cyber security, and medical healthcare billing.";

const rightSectionsData = [
  {
    title: "Our Companies",
    description:
      "We operate diversified portfolio of businesses with global presence across several continents.",
    image: "/assets/our-companies.png"  
  },
  {
    title: "Our Purpose",
    description:
      "We use power of business make positive difference in our communities and to help build sustainable planet.",
      image: "/assets/our-purpose.jpg" 
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <StaticDisplay data={StaticData} staticImage="/assets/meygham.avif"/>
      <Stats aboutUsText={aboutUsText} statsData={statsData} />
      <About
        leftImage="/assets/about-us.jpg"
        leftTitle="About Us"
        leftDescription="At Meygham Group, we’re passionate about helping businesses and communities achieve their dreams."
        rightSections={rightSectionsData}
      />
      <OurCompanies/>
      <AboutUs />
      <OurPurpose />
      <ContactUs />
    </div>
  );
};

export default Home;
