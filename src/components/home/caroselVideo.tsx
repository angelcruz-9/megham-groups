import React from "react";

interface DataItem {
  title: string;
  description: string;
}

interface StaticDisplayProps {
  data: DataItem[];
  staticImage: string; // Path or URL of the static image
}

const StaticDisplay: React.FC<StaticDisplayProps> = ({ data, staticImage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch w-full h-screen bg-gray-100">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-6 p-6 md:w-1/2">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Right Image Section */}
      <div className="relative w-full h-64 md:h-full">
        <img
          src={`${process.env.PUBLIC_URL}/${staticImage}`}
          alt="Static representation"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default StaticDisplay;
