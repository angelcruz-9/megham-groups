import React, { useState } from "react";
import { motion } from "framer-motion";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const flipVariants = {
    hidden: { rotateY: 0 },
    visible: { rotateY: 180 },
  };

  const transition = {
    duration: 0.6,
    ease: "easeInOut",
  };

  return (
    <section className="flex flex-col md:flex-row w-full h-full p-4 sm:p-6 lg:px-20 xl:px-36 bg-gray-100">
      {/* Left Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6">
        <motion.div
          className="relative w-full h-32 sm:h-48 lg:h-64 mb-4 perspective-1000"
          initial="hidden"
          animate={hoveredIndex === -1 ? "visible" : "hidden"}
          variants={flipVariants}
          transition={transition}
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Front (Image) */}
          <motion.div
            className="absolute w-full h-full backface-hidden"
            style={{ rotateY: hoveredIndex === -1 ? 180 : 0 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}${leftImage}`}
              alt={leftTitle}
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div>
          {/* Back (Content) */}
          <motion.div
            className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-white p-4 rounded-md flex flex-col items-center justify-center"
            style={{ rotateY: hoveredIndex === -1 ? 0 : -180 }}
          >
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
          </motion.div>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6">
        {rightSections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col sm:flex-row h-auto sm:h-52 perspective-1000"
            initial="hidden"
            animate={hoveredIndex === index ? "visible" : "hidden"}
            variants={flipVariants}
            transition={transition}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div className="w-full sm:w-2/4 relative">
              {/* Front (Image) */}
              <motion.div
                className="absolute w-full h-full backface-hidden"
                style={{ rotateY: hoveredIndex === index ? 180 : 0 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${section.image}`}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                />
              </motion.div>
              {/* Back (Content) */}
              <motion.div
                className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-white p-4 flex flex-col items-center justify-center"
                style={{ rotateY: hoveredIndex === index ? 0 : -180 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
