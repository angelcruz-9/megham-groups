import React, { useState, useEffect } from "react";

interface AboutProps {
  leftImage: string;
  leftTitle: string;
  leftDescription: string;
  rightSections: { title: string; description: string; image: string }[];
}

const About: React.FC<AboutProps> = ({
  leftImage,
  leftTitle,
  leftDescription,
  rightSections,
}) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndex((prev) => (prev === null ? -1 : null));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full h-full p-4 sm:p-6 lg:px-20 xl:px-36 bg-gray-100">
      {/* Left Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
        <div
          className={`w-full h-32 sm:h-48 lg:h-64 mb-4 relative ${
            flippedIndex === -1 ? "animate-flip" : ""
          }`}
        >
          <div
            className={`absolute w-full h-full ${
              flippedIndex === -1 ? "rotate-y-180" : ""
            } transition-transform duration-500`}
          >
            <img
              src={`${process.env.PUBLIC_URL}${leftImage}`}
              alt={leftTitle}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">{leftTitle}</h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          {leftDescription}
        </p>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-800 hover:underline"
        >
          Learn More
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6">
        {rightSections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col sm:flex-row h-auto sm:h-52"
          >
            <div
              className={`w-full sm:w-2/4 relative ${
                flippedIndex === index ? "animate-flip" : ""
              }`}
            >
              <div
                className={`absolute w-full h-full ${
                  flippedIndex === index ? "rotate-y-180" : ""
                } transition-transform duration-500`}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${section.image}`}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                />
              </div>
            </div>
            <div className="w-full sm:w-2/4 p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {section.description}
              </p>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-800 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
