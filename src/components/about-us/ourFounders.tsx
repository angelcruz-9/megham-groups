import React from 'react';

const OurFounders: React.FC = () => {
  return (
    <section className="sm:px-44 px-6 py-12 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8">Our Founders</h2>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Content Section */}
        <div className="lg:w-1/2 sm:w-1/2">
          <p className="text-gray-700 mb-4">
            Our founders have a remarkable background in technology and business, with a shared passion for innovation and excellence.
          </p>
          <p className="text-gray-700 mb-4">
            With decades of combined experience, they have established our company as a leader in the industry.
          </p>
          <p className="text-gray-700 mb-4">
            Their commitment to quality and dedication to customer success are the foundation of our company's values.
          </p>
          <p className="text-gray-700">
            Together, they continue to drive our growth, ensuring we deliver exceptional value to clients worldwide.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col sm:flex-row sm:justify-center gap-4">
          <div className="w-full h-full sm:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/founder-1.jpeg`}
              alt="Founder 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full h-full sm:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/founder-2.jpeg`}
              alt="Founder 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounders;
