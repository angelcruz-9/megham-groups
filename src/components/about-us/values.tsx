import React from 'react';

interface ValueCard {
  image: string;
  title: string;
  description: string;
}

const valuesData: ValueCard[] = [
  { image: '/path/to/image1.jpg', title: 'Integrity', description: 'We uphold the highest standards of integrity in all of our actions.' },
  { image: '/path/to/image2.jpg', title: 'Excellence', description: 'We strive for excellence in every aspect of our work.' },
  { image: '/path/to/image3.jpg', title: 'Innovation', description: 'We innovate to meet the evolving needs of our clients.' },
  { image: '/path/to/image4.jpg', title: 'Teamwork', description: 'We work together to meet the needs of our customers and help the company win.' },
  { image: '/path/to/image5.jpg', title: 'Respect', description: 'We value our people, encourage their development, and reward their performance.' },
  { image: '/path/to/image6.jpg', title: 'Customer Commitment', description: 'We develop relationships that make a positive difference in our customers\' lives.' },
];

const Values: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-3xl font-bold mb-8">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="relative group h-64 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={value.image}
              alt={value.title}
              className="w-full h-full object-cover"
            />
            {/* Title Overlay */}
            <div className="absolute bottom-2 left-2 text-black bg-opacity-50 px-3 py-1 rounded">
              <h3 className="text-lg font-semibold">{value.title}</h3>
            </div>
            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-3/5 bg-black bg-opacity-70 text-white p-4 transition-all duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm mt-2">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
