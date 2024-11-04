import React from 'react';

const OurFounders: React.FC = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-left mb-8">Our Founders</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Content Section */}
        <div className="lg:w-1/2">
          <p className="text-gray-700 mb-4">
            Our founders have a remarkable background in technology and business, with a shared passion for innovation and excellence.
            Our founders have a remarkable background in technology and business, with a shared passion for innovation and excellence.
          </p>
          <p className="text-gray-700 mb-4">
            With decades of combined experience, they have established our company as a leader in the industry.
            Our founders have a remarkable background in technology and business, with a shared passion for innovation and excellence.
          </p>
          <p className="text-gray-700 mb-4">
            Their commitment to quality and dedication to customer success are the foundation of our company's values.
            Our founders have a remarkable background in technology and business, with a shared passion for innovation and excellence.
          </p>
          <p className="text-gray-700">
            Together, they continue to drive our growth, ensuring we deliver exceptional value to clients worldwide.
            Our founders have a remarkable background in technology and business, with a shared passion for innovation and excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <img
              src="/path/to/founder1.jpg"
              alt="Founder 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <img
              src="/path/to/founder2.jpg"
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
