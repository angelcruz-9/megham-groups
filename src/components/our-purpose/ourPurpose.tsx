import React, { useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "John Doe", designation: "CEO", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Jane Smith", designation: "CTO", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Robert Brown", designation: "Lead Designer", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emily Johnson", designation: "Marketing Head", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael Lee", designation: "Lead Developer", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Sophia White", designation: "HR Manager", image: "https://randomuser.me/api/portraits/women/6.jpg" },
];

const OurPurpose: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="flex flex-col items-center space-y-6 py-12" id="our-purpose">
      <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ translateX: `-${currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ width: "100%" }}
        >
          {[0, 1].map((index) => (
            <div key={index} className="flex w-full justify-center gap-6 shrink-0">
              {teamMembers.slice(index * 3, index * 3 + 3).map((member) => (
                <div
                  key={member.id}
                  className="w-1/3 h-[250px] p-4 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center relative overflow-hidden"
                >
                  {/* Profile Image with Logo Overlay */}
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full mb-4 border-4 border-gray-300"
                    />
                  </div>

                  {/* Title and Designation at the Bottom */}
                  <div className="absolute bottom-0 left-0 w-full bg-gray-900 text-white text-center py-2">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots for navigation */}
      <div className="flex space-x-4 mt-4">
        {[0, 1].map((index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurPurpose;
