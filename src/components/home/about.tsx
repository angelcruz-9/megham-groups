import React from "react";

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
  return (
    <section className="flex flex-col md:flex-row w-full h-full p-4 sm:p-6 lg:px-20 xl:px-36 bg-gray-100">
      {/* Left Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
        <img
          src={`${process.env.PUBLIC_URL}` + leftImage}
          alt={leftTitle}
          className="w-full h-32 sm:h-48 lg:h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl sm:text-2xl font-bold mb-2 pt-6 sm:pt-12">{leftTitle}</h2>
        <p className="text-gray-700 text-sm sm:text-base">{leftDescription}</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6">
        {rightSections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md flex flex-col sm:flex-row h-auto sm:h-52">
            <div className="w-full sm:w-2/4">
              <img
                src={`${process.env.PUBLIC_URL}` + section.image}
                alt={section.title}
                className="w-full h-32 sm:h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg mb-4 sm:mb-0"
              />
            </div>
            <div className="w-full sm:w-2/4 flex flex-col justify-center p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
