import React, { useState } from "react";

interface Customer {
  id: number;
  title: string;
  description: string;
  href: string;
}

interface AboutProps {
  customersData: Customer[];
}

const About: React.FC<AboutProps> = ({ customersData }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center w-full h-full p-6 lg:px-20 xl:px-36 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-400 my-8">Customer Stories</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
        {customersData.map((customer) => (
          <div
            key={customer.id}
            className={`relative h-[300px] p-6 rounded-md shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 flex flex-col justify-center items-center`}
            style={{
              backgroundColor: hoveredId === customer.id ? "#1E40AF" : "#fff", // Blue when hovered, gray otherwise
            }}
            onMouseEnter={() => setHoveredId(customer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <h2 className="text-xl font-semibold text-blue-400">
              {hoveredId === customer.id ? "✨ " + customer.title + " ✨" : customer.title}
            </h2>
            <p className="mt-2 text-2xl text-center tracking-wide leading-7 py-2">{customer.description}</p>
            <div className="px-4 py-2 bg-gray-300 text-black rounded-md my-4">
              <a href={customer.href} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
