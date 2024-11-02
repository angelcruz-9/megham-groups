import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-8">
      {/* Left Section: Title and Long Description */}
      <div className="lg:w-3/5 space-y-4 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">About Our Company</h2>
        <p className="text-gray-700 text-lg pr-32">
          Our company is dedicated to providing high-quality services and products that cater to our customers' needs.
          We have been a trusted name in the industry for years, known for our commitment to excellence and innovation.
          Our team works tirelessly to bring the best solutions to our clients, helping them achieve their goals
          efficiently and effectively. We are passionate about what we do, and it reflects in every project we undertake.
          Join us on our journey as we continue to make a positive impact on the industry and the communities we serve.
        </p>
      </div>

      {/* Right Section: Image Grid with Overlay */}
      <div className="lg:w-2/5 grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Image Card 1 */}
        <div className="relative h-64">
          <img
            src="/path/to/image1.jpg"
            alt="Service 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Service 1</h3>
            <p className="text-sm">Our innovative solutions help businesses achieve more.</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="relative h-64">
          <img
            src="/path/to/image2.jpg"
            alt="Service 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-end p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Service 2</h3>
            <p className="text-sm">High-quality products designed to meet customer needs.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
