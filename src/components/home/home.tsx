import React from "react";
import CaroselVideo from "./caroselVideo";
import Stats from "./stats";
import About from "./about";

const videoData = [
  {
    video: "/assets/our-company.mp4",
    title: "Our Companies",
    description:
      "Meygham Group is U.S.-based multinational conglomerate focused on diverse ventures ranging from software services to real estate and education.",
  },
  {
    video: "/assets/tech.mp4",
    title: "Dream. Create. Thrive.",
    description:
      "To inspire and empower individuals, businesses, and communities to realize their dreams.",
  },
  {
    video: "/assets/purpose.mp4",
    title: "Our Purpose",
    description:
      "we use power of business make positive difference in our communities and to help build sustainable planet.",
  },
];

const statsData = [
  { name: "Total companies", number: 15, description: "Diverse Entities" },
  { name: "Offices", number: 20, description: "4 Continents" },
  { name: "Work Force", number: 2000, description: "U.S. based & Offshore" },
  { name: "Happy Customers", number: 300, description: "Worldwide Customers" },
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
      <CaroselVideo data={videoData} />
      <Stats aboutUsText={aboutUsText} statsData={statsData} />
      <About
        leftImage="/assets/about-us.jpg"
        leftTitle="About Us"
        leftDescription="At Meygham Group, we’re passionate about helping businesses and communities achieve their dreams."
        rightSections={rightSectionsData}
      />
    </div>
  );
};

export default Home;
