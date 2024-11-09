import React from "react";

interface CardData {
  image: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    image: "/path/to/card-image1.jpg",
    title: "Education",
    description:
      "We work to ensure that children everywhere have access to a quality education and invest in local communities to enable the gift of learning.",
  },
  {
    image: "/path/to/card-image2.jpg",
    title: "Innovation Incubator",
    description:
      "We celebrate the entrepreneurial spirit! Our technology incubators provide resources and mentorship to empower tomorrow’s leaders.",
  },
  {
    image: "/path/to/card-image3.jpg",
    title: "International Builder",
    description:
      "We build single family, luxury, and mixed-use homes focusing on energy efficiency, sustainability, and quality craftsmanship.",
  },
];

const OurPurpose: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Full-width Image with Text Overlay */}
      <div className="relative w-full h-[500px]">
        <img
          src="/path/to/image.jpg"
          alt="About Us Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-28 bg-opacity-50 text-black p-4 rounded-md">
          <h2 className="text-5xl font-bold tracking-wider pb-4">
            Our Purpose
          </h2>
          <p className="mt-1 text-xl">
            <q className="my-4 text-3xl flex w-2/2">
              The best way to find yourself is to lose yourself in the service
              of others.
            </q>
            <p className="mt-2">~ Mahatma Gandhi</p>
          </p>
        </div>
      </div>

      {/* Section 2: Centered Content with Paragraphs and List Items */}
      <div className="max-w-3xl mx-auto text-left space-y-4">
        <p className="text-xl text-gray-600">
          <span className="italic text-2xl font-bold">Our parents</span> taught
          us the importance of integrity, empathy, faith, and perseverance, and
          we have relied on these guiding principles to make a positive
          difference in the things we care deeply about. Whether it’s business-
          or community-focused, we believe that how you do something is much
          more impactful than what you do— in other words, it’s the lifelong
          intent that matters, not necessarily the act itself. As such, we have
          built a strong culture of service across our diverse businesses and
          philanthropic ventures and take our role as stewards of our planet
          very seriously.
        </p>
        <p className="text-xl text-gray-600">
          Our philanthropic ventures range from education and startup incubators
          to housing and sustainability. For example:
        </p>
        <ul className="list-disc list-inside space-y-2 text-left mx-auto text-xl text-gray-600">
          <li>
            We provide children in developing countries with access to free
            education, so they have the necessary life and work skills
            (professional and trade) to be active, productive citizens.
          </li>
          <li>
            Our technology incubators provide mentorship, funding, and other
            resources to help entrepreneurs and small businesses succeed.
          </li>
          <li>
            Our luxury homebuilder business donates 60% of its profits to
            non-profit organizations or social welfare activities. And we help
            protect our planet for future generations through our sustainability
            efforts that span state-of-the-art energy efficient solutions to
            eco-friendly alternatives to plastics.
          </li>
        </ul>
      </div>

      {/* Section 3: Cards with Image, Title, and Description */}
      <section className="bg-gray-300 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPurpose;
