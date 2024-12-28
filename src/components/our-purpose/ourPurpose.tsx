import React from "react";

interface CardData {
  image: string;
  title: string;
  description: string;
  link: string;
}

const cardData: CardData[] = [
  {
    image: "/assets/education.jpeg",
    title: "Education",
    description:
      "We work to ensure that children everywhere have access to a quality education and invest in local communities to enable the gift of learning.",
    link: '#'  
  },
  {
    image: "/assets/innovation-new.jpeg",
    title: "Innovation Incubator",
    description:
      "We celebrate the entrepreneurial spirit! Our technology incubators provide resources and mentorship to empower tomorrow’s leaders.",
      link: '#'  
  },
  {
    image: "/assets/home.jpeg",
    title: "International Builder",
    description:
      "We build single family, luxury, and mixed-use homes focusing on energy efficiency, sustainability, and quality craftsmanship.",
      link: '#'  
  },
];

const OurPurpose: React.FC = () => {
  return (
    <div className="space-y-16" id="our-purpose">
      {/* Section 1: Full-width Image with Text Overlay */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/our-purpose-main.jpg`}
          alt="Our purpose"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-6 left-6 sm:left-28 bg-black bg-opacity-50 text-white p-6 rounded-lg max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-wide leading-tight">
            Our Purpose
          </h2>
          <p className="mt-2 text-lg sm:text-xl">
            <q className="my-4 text-3xl sm:text-4xl italic">
              The best way to find yourself is to lose yourself in the service
              of others.
            </q>
            <p className="mt-4 text-sm sm:text-lg">~ Mahatma Gandhi</p>
          </p>
        </div>
      </div>

      {/* Section 2: Centered Content with Paragraphs and List Items */}
      <div className="max-w-5xl mx-auto text-left space-y-6 px-6 sm:px-8">
        <p className="text-lg sm:text-xl text-gray-700">
          <span className="italic text-2xl sm:text-3xl font-semibold text-gray-800">
            Our parents
          </span>{" "}
          taught us the importance of integrity, empathy, faith, and
          perseverance. These guiding principles have shaped our commitment to
          making a positive difference in the world. Whether it's business or
          community-focused, we believe that how you do something is far more
          impactful than what you do. The lifelong intent is what truly matters.
        </p>
        <p className="text-lg sm:text-xl text-gray-700">
          Our philanthropic ventures range from education and startup incubators
          to housing and sustainability. Here are a few examples of our impact:
        </p>
        <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-700">
          <li>
            Providing children in developing countries with access to free
            education, so they can acquire the life skills to become active,
            productive citizens.
          </li>
          <li>
            Supporting entrepreneurs and small businesses through our technology
            incubators with mentorship, funding, and resources.
          </li>
          <li>
            Donating 60% of profits from our luxury homebuilding business to
            nonprofit organizations and social welfare activities, while promoting
            sustainability.
          </li>
        </ul>
      </div>

      {/* Section 3: Cards with Image, Title, and Description */}
      <section className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto px-6 sm:px-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
            >
              <img
                src={`${process.env.PUBLIC_URL}` + card.image}
                alt={card.title}
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="p-6 space-y-4 flex flex-col justify-between">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 ease-in-out">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  {card.description}
                </p>
                <a href={card.link} rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-800 hover:underline text-right">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPurpose;
