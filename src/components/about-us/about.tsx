import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 px-6 py-8 sm:px-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      {/* Left Section: Title and Long Description */}
      <div className="lg:w-3/5 space-y-8 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          We are Meygham Group
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 lg:text-left max-w-3xl mx-auto lg:mx-0">
          Meygham Group inspires and shapes the future of businesses and communities with innovation, integrity, and perseverance. 
          Headquartered in the U.S., our worldwide operations span IT consulting services, software products, real estate, 
          venture investments, foundations, and more. We believe that business success and serving humanity are symbiotic, 
          and we strive to excel at both.
        </p>
      </div>

      {/* Right Section: Image Grid with Overlay */}
      <div className="lg:w-2/5 grid grid-cols-1 gap-10 lg:grid-cols-1">
        {/* Image Card 1 */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <img
            src={`${process.env.PUBLIC_URL}/assets/vision.jpg`}
            alt="Our Vision"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col justify-end p-4">
            <h3 className="text-2xl font-bold tracking-wide leading-snug">Our Vision</h3>
            <p className="text-sm sm:text-md opacity-90">
              Empower enterprises, individuals, and communities to realize their dreams.
            </p>
            <a href="/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-200 hover:underline text-right">Learn More</a>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <img
            src={`${process.env.PUBLIC_URL}/assets/mission.jpg`}
            alt="Our Mission"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col justify-end p-4">
            <h3 className="text-2xl font-bold tracking-wide leading-snug">Our Mission</h3>
            <p className="text-sm sm:text-md opacity-90">
              Our mission is to enable and enrich enterprises and communities worldwide with innovative, cutting-edge technology. 
              We aim to excel in both business and social responsibility.
            </p>
            <a href="/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-200 hover:underline text-right">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
