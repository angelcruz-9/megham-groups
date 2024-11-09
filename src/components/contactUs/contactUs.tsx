import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (country: string) => {
    setActiveAccordion(activeAccordion === country ? null : country);
  };

  return (
    <div className="space-y-16">
      {/* Section 1: Full-width Image with Text Overlay */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/contact.avif`}
          alt="Contact Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white px-4">Let's Be in Touch</h2>
        </div>
      </div>

      {/* Section 2: Contact Form */}
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Section 3: Accordion for Locations */}
      <div className="max-w-3xl container mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">Our Locations</h3>
        <div className="space-y-4">
          {['India', 'USA'].map((country) => (
            <div key={country}>
              <button
                onClick={() => toggleAccordion(country)}
                className="w-full text-left p-4 bg-gray-200 rounded-lg font-semibold flex justify-between items-center"
              >
                {country}
                <span>{activeAccordion === country ? '-' : '+'}</span>
              </button>
              {activeAccordion === country && (
                <div className="p-4 bg-white rounded-lg shadow-inner mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Office 1</h4>
                    <p className="text-gray-600">
                      123 Business St.<br />
                      City, State, Zip Code
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Office 2</h4>
                    <p className="text-gray-600">
                      456 Main Rd.<br />
                      City, State, Zip Code
                    </p>
                  </div>
                  {/* Add more offices as needed */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
