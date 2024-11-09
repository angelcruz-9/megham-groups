import React from "react";

interface CardData {
  image: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    image: "/assets/education.jpeg",
    title: "Education",
    description:
      "We work to ensure that children everywhere have access to a quality education and invest in local communities to enable the gift of learning.",
  },
  {
    image: "/assets/innovation-new.jpeg",
    title: "Innovation Incubator",
    description:
      "We celebrate the entrepreneurial spirit! Our technology incubators provide resources and mentorship to empower tomorrow’s leaders.",
  },
  {
    image: "/assets/home.jpeg",
    title: "International Builder",
    description:
      "We build single family, luxury, and mixed-use homes focusing on energy efficiency, sustainability, and quality craftsmanship.",
  },
];

const OurPurpose: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Full-width Image with Text Overlay */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/our-purpose.jpeg`}
          alt="Our purpose"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-6 sm:left-28 bg-opacity-50 text-white p-4 rounded-md">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-wider pb-4">
            Our Purpose
          </h2>
          <p className="mt-1 text-lg sm:text-xl">
            <q className="my-4 text-2xl sm:text-3xl">
              The best way to find yourself is to lose yourself in the service
              of others.
            </q>
            <p className="mt-2 text-sm sm:text-lg">~ Mahatma Gandhi</p>
          </p>
        </div>
      </div>

      {/* Section 2: Centered Content with Paragraphs and List Items */}
      <div className="max-w-3xl mx-auto text-left space-y-4 px-6 sm:px-8">
        <p className="text-lg sm:text-xl text-gray-600">
          <span className="italic text-xl sm:text-2xl font-bold">
            Our parents
          </span>{" "}
          taught us the importance of integrity, empathy, faith, and
          perseverance, and we have relied on these guiding principles to make a
          positive difference in the things we care deeply about. Whether it’s
          business- or community-focused, we believe that how you do something
          is much more impactful than what you do— in other words, it’s the
          lifelong intent that matters, not necessarily the act itself. As such,
          we have built a strong culture of service across our diverse
          businesses and philanthropic ventures and take our role as stewards of
          our planet very seriously.
        </p>
        <p className="text-lg sm:text-xl text-gray-600">
          Our philanthropic ventures range from education and startup incubators
          to housing and sustainability. For example:
        </p>
        <ul className="list-disc list-inside space-y-2 text-left mx-auto text-lg sm:text-xl text-gray-600">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto px-6 sm:px-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={`${process.env.PUBLIC_URL}` + card.image}
                alt={card.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold">
                  {card.title}
                </h4>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPurpose;
