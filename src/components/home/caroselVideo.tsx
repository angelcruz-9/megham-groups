import React from "react";

interface DataItem {
  title: string;
  description: string;
}

interface StaticDisplayProps {
  data: DataItem;
}

const StaticDisplay: React.FC<StaticDisplayProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full  bg-blue-400 pb-36 pt-16 space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex flex-col justify-center items-center w-3/5">
        <h1 className="text-5xl font-bold text-white mb-4 text-center tracking-wide">{data.title}</h1>
        <p className="text-white text-2xl mb-6 text-center tracking-wider py-4">{data.description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">
          <a href="/" className="block w-full">
            View More
          </a>
        </button>
      </div>
    </div>
  );
};

export default StaticDisplay;
