import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 px-4 sm:px-6 py-8">
      {/* Left Section: Title and Long Description */}
      <div className="lg:w-3/5 space-y-4 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold">We are Meygham Group</h2>
        <p className="text-gray-700 text-base sm:text-lg lg:pr-8">
          Meygham Group inspires and shapes the future of businesses and communities with innovation, integrity, and perseverance. 
          Headquartered in the U.S., our worldwide operations span IT consulting services, software products, real estate, 
          venture investments, foundations, and more. We believe that business success and serving humanity are symbiotic, 
          and we strive to excel at both.
        </p>
      </div>

      {/* Right Section: Image Grid with Overlay */}
      <div className="lg:w-2/5 grid grid-cols-1 gap-6">
        {/* Image Card 1 */}
        <div className="relative h-48 sm:h-64">
          <img
            src={`${process.env.PUBLIC_URL}/assets/vision.jpg`}
            alt="Our Vision"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-3 sm:p-4 lg:pl-16 rounded-lg">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">Our Vision</h3>
            <p className="text-sm sm:text-md w-4/5">
              Empower enterprises, individuals, and communities to realize their dreams.
            </p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="relative h-48 sm:h-64">
          <img
            src={`${process.env.PUBLIC_URL}/assets/mission.jpg`}
            alt="Our Mission"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-3 sm:p-4 lg:pl-16 rounded-lg">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">Our Mission</h3>
            <p className="text-sm sm:text-md w-4/5">
              Our mission is to enable and enrich enterprises and communities worldwide with innovative, cutting-edge technology. 
              We aim to excel in both business and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
