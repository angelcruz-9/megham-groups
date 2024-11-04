import React from 'react';
import About from './about';
import OurFounders from './ourFounders';
import Values from './values';

const AboutUs: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Section 1: Full-width Image with Text Overlay */}
      <div className="relative w-full h-[500px]">
        <img
          src="/path/to/image.jpg"
          alt="About Us Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-opacity-50 text-black p-4 rounded-md">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-1">Discover who we are and what we stand for.</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="px-6 py-8 bg-gray-100 rounded-lg">
        <About />
      </div>

      {/* Section 3 */}
      <div className="px-6 py-8 bg-gray-100 rounded-lg">
        <Values />
      </div>

      {/* Section 4 */}
      <div className="px-6 py-8 bg-gray-100 rounded-lg">
        <OurFounders />
      </div>
    </div>
  );
};

export default AboutUs;
