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
    <div className="flex flex-col md:flex-row items-stretch w-full min-h-screen bg-gray-50">
      {/* Static Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 bg-gray-200 rounded-lg shadow-lg">
        <div className="w-full max-w-[750px] aspect-[4/3] relative overflow-hidden rounded-lg">
          <img
            src={`${process.env.PUBLIC_URL}/${staticImage}`}
            alt="Static"
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Data Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 hover:text-gray-900">{item.title}</h2>
            <p className="text-gray-700 mt-3 text-lg">{item.description}</p>
            <button className="mt-4 py-2 px-6 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticDisplay;
