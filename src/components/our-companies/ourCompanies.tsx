import React, { useState } from "react";
import Technology from "./Technology";
import Commercial from "./Commercial";
import NonProfits from "./NonProfits";

const OurCompanies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Technology");

  const tabs = [
    { name: "Technology", component: <Technology /> },
    { name: "Commercial", component: <Commercial /> },
    { name: "Non-profits", component: <NonProfits /> },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="w-full h-[300px] md:h-[500px] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-violet-500 via-blue-500 to-indigo-500 p-6 md:p-12">
        {/* Left side: Title and Description */}
        <div className="text-white md:w-1/2 relative md:top-28 md:left-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-wider">Our Companies</h1>
          <p className="text-lg md:text-xl">DIverified. Global. Innovative.</p>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-6 md:mt-0 bg-white rounded-full md:rounded-l-full overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/assets/companies.jpg`}
            alt="Our Companies"
            className="w-full h-auto md:w-3/4 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md mt-6 md:mt-4 w-11/12 md:w-3/4 lg:w-2/4 mx-auto">
        <div className="flex justify-center space-x-4 sm:space-x-6 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative text-base md:text-lg font-medium px-2 sm:px-4 transition duration-300 ${
                activeTab === tab.name
                  ? "text-gray-500"
                  : "text-gray-700 hover:text-gray-500"
              }`}
            >
              {tab.name}
              {/* Border Bottom Animation */}
              <span
                className={`absolute bottom-0 left-0 top-8 md:top-10 h-0.5 bg-gray-500 transition-all duration-300 ease-in-out ${
                  activeTab === tab.name ? "w-full" : "w-0"
                } group-hover:w-full`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 w-11/12 md:w-4/5 mx-auto">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && <div key={tab.name}>{tab.component}</div>
        )}
      </div>
    </div>
  );
};

export default OurCompanies;
