import React from 'react';

interface ValueCard {
  image: string;
  title: string;
  subTitle: string;
  descTitle: string;
  description: string;
}

const valuesData: ValueCard[] = [
  { image: '/path/to/image1.jpg', title: 'Innovation', subTitle: 'in our DNA.', descTitle: 'Innovation in our DNA.', description: 'We thrive on technology and business, push the limits and use innovation to enable our customers’ and communities’ dreams.' },
  { image: '/path/to/image2.jpg', title: 'Stand by', subTitle: 'our word.', descTitle: 'Stand by our word.', description: 'We commit to deliver on our promise. We do whatever it takes to meet and exceed our commitments to customers, partners and employees.' },
  { image: '/path/to/image3.jpg', title: 'Dream', subTitle: 'Big.', descTitle: 'Dream Big.', description: 'At every level, we empower you to think big, dream big and always be curious.' },
  { image: '/path/to/image4.jpg', title: 'Trust through', subTitle: 'transparency.', descTitle: 'Trust through transparency.', description: 'We earn trust through honesty, integrity, and candor with our teammates, partners and customers.' },
  { image: '/path/to/image5.jpg', title: 'Make it', subTitle: 'matter.', descTitle: 'Make it matter.', description: 'We have a chance to make a difference - at work, at home and in our communities. Our success enables us to give back to others.' },
  { image: '/path/to/image6.jpg', title: 'Win as a', subTitle: 'team.', descTitle: 'Win as a team.', description: 'We hold ourselves accountable to each other. We celebrate diversity and delight in our shared success.' },
];

const Values: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
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
              <h3 className="text-2xl font-semibold">
                <span className="text-3xl">{value.title}</span>{' '} <br />
                <span className="text-lg">{value.subTitle}</span>
              </h3>
            </div>
            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-3/5 bg-white text-black px-12 transition-all duration-300 ease-in-out">
              <h3 className="text-xl mt-4 font-semibold">{value.descTitle}</h3>
              <p className="text-md mt-2">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
