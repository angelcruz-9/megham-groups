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
          src={`${process.env.PUBLIC_URL}` + '/assets/about-us-main.jpeg'}
          alt="About Us Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-28 bg-opacity-50 text-white p-4 rounded-md">
          <h2 className="text-5xl font-bold tracking-wider">About Us</h2>
          <p className="mt-4 text-2xl w-1/2">Meygham Groups is a U.S.-based multinational conglomerate focused on diverse ventures ranging from software services to real estate and non-profits.</p>
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
