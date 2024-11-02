import React, { useState } from 'react';
import Technology from './Technology';
import Commercial from './Commercial';
import NonProfits from './NonProfits';

const OurCompanies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Technology');

  const tabs = [
    { name: 'Technology', component: <Technology /> },
    { name: 'Commercial', component: <Commercial /> },
    { name: 'Non-profits', component: <NonProfits /> },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="w-full h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/path/to/banner-image.jpg)' }}>
        <img src="/path/to/dummy-image.jpg" alt="Our Companies" className="w-3/4 h-auto" />
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md mt-4 w-3/4 mx-auto">
        <div className="flex justify-center space-x-6 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative text-lg font-medium px-4 transition duration-300 ${
                activeTab === tab.name ? 'text-gray-500' : 'text-gray-700 hover:text-gray-500'
              }`}
            >
              {tab.name}
              {/* Border Bottom Animation */}
              <span
                className={`absolute bottom-0 left-0 top-10 h-0.5 bg-gray-500 transition-all duration-300 ease-in-out ${
                  activeTab === tab.name ? 'w-full' : 'w-0'
                } group-hover:w-full`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {tabs.map((tab) => activeTab === tab.name && <div key={tab.name}>{tab.component}</div>)}
      </div>
    </div>
  );
};

export default OurCompanies;
