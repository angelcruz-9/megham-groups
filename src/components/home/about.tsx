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
    <section className="flex flex-col md:flex-row w-full h-full p-6 bg-gray-100 px-72">
      {/* Left Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
        <img
          src={`${process.env.PUBLIC_URL}` + leftImage}
          alt={leftTitle}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 pt-12">{leftTitle}</h2>
        <p className="text-gray-700">{leftDescription}</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col  gap-6">
        {rightSections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md h-52 flex">
            <div className="w-2/4">
              <img
                src={`${process.env.PUBLIC_URL}` + section.image}
                alt={leftTitle}
                className="w-full h-full object-cover rounded-md mb-4"
              />
            </div>
            <div className="w-2/4 flex flex-col justify-center pl-4 pr-4">
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
