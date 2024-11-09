import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-8">
      {/* Left Section: Title and Long Description */}
      <div className="lg:w-3/5 space-y-4 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">We are Meygham Group</h2>
        <p className="text-gray-700 text-lg pr-32">
          Meygham Group inspires and shapes future of businesses and communities
          the innovation, integrity, and perseverance. Headquartered in U.S.,
          our worldwide operations span IT consulting services, software
          products, solutions, real estate, venture investments, foundations,
          and more. We believe that business success and serving humanity are
          symbiotic and we strive to excel at both.
        </p>
      </div>

      {/* Right Section: Image Grid with Overlay */}
      <div className="lg:w-2/5 grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Image Card 1 */}
        <div className="relative h-64">
          <img
             src={`${process.env.PUBLIC_URL}` + '/assets/vision.jpg'}
            alt="Service 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-4 pl-16 rounded-lg">
            <h3 className="text-2xl tracking-wider font-semibold">Our Vision</h3>
            <p className="text-md w-4/5">
              Empower enterprises, individuals and communities to realise their
              dreams.
            </p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="relative h-64">
          <img
            src={`${process.env.PUBLIC_URL}` + '/assets/mission.jpg'}
            alt="Service 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-4 pl-16 rounded-lg">
            <h3 className="text-2xl tracking-wider font-semibold">Our Mission</h3>
            <p className="text-md w-4/5">
              It is our mission to enable and enrich enterprises and communities
              across the globe with innovative cutting edge technology. Whether
              it be business or social responsibility, we strive to be the best
              at both.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
