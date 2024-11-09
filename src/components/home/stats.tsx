import React from 'react';

interface StatsItem {
  name: string;
  number: number;
  description: string;
}

interface StatsProps {
  aboutUsText: string;
  statsData: StatsItem[];
}

const Stats: React.FC<StatsProps> = ({ aboutUsText, statsData }) => {
  return (
    <section className="flex flex-col md:flex-row w-full h-full py-8 sm:py-12">
      {/* Left Section - About Us */}
      <div className="flex-1 bg-violet-950 border-r-0 md:border-r-2 border-gray-300 p-6 sm:p-12 py-16 sm:py-28 flex flex-col justify-end items-end text-center md:text-right">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white w-full md:w-3/4 lg:w-1/2">About Meygham</h2>
        <p className="text-sm sm:text-base text-gray-200 w-full md:w-3/4 lg:w-1/2">{aboutUsText}</p>
      </div>

      {/* Right Section - Stats */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:px-8 lg:px-12">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-md flex flex-col items-center justify-center text-center border border-gray-200"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-3xl sm:text-4xl font-bold text-blue-600 my-2">{item.number}</p>
            <p className="text-sm sm:text-md text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
