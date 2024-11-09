import React from 'react';

interface ValueCard {
  image: string;
  title: string;
  subTitle: string;
  descTitle: string;
  description: string;
}

const valuesData: ValueCard[] = [
  { image: '/assets/innovation.jpeg', title: 'Innovation', subTitle: 'in our DNA.', descTitle: 'Innovation in our DNA.', description: 'We thrive on technology and business, push the limits and use innovation to enable our customers’ and communities’ dreams.' },
  { image: '/assets/stand.jpeg', title: 'Stand by', subTitle: 'our word.', descTitle: 'Stand by our word.', description: 'We commit to deliver on our promise. We do whatever it takes to meet and exceed our commitments to customers, partners and employees.' },
  { image: '/assets/dream.jpeg', title: 'Dream', subTitle: 'Big.', descTitle: 'Dream Big.', description: 'At every level, we empower you to think big, dream big and always be curious.' },
  { image: '/assets/trust.jpeg', title: 'Trust through', subTitle: 'transparency.', descTitle: 'Trust through transparency.', description: 'We earn trust through honesty, integrity, and candor with our teammates, partners and customers.' },
  { image: '/assets/make.jpeg', title: 'Make it', subTitle: 'matter.', descTitle: 'Make it matter.', description: 'We have a chance to make a difference - at work, at home and in our communities. Our success enables us to give back to others.' },
  { image: '/assets/team.jpeg', title: 'Win as a', subTitle: 'team.', descTitle: 'Win as a team.', description: 'We hold ourselves accountable to each other. We celebrate diversity and delight in our shared success.' },
];

const Values: React.FC = () => {
  return (
    <div className="sm:px-44 px-2 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto sm:gap-0 gap-6">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="relative group h-56 sm:h-64 lg:h-72 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={`${process.env.PUBLIC_URL}` + value.image}
              alt={value.title}
              className="w-full h-full object-cover"
            />
            {/* Title Overlay */}
            <div className="absolute bottom-2 left-2 text-white bg-opacity-50 px-3 py-1 rounded">
              <h3 className="text-lg sm:text-xl font-semibold">
                <span className="text-lg sm:text-2xl">{value.title}</span>{' '}
                <br />
                <span className="text-sm sm:text-base">{value.subTitle}</span>
              </h3>
            </div>
            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-3/5 bg-white text-black px-6 sm:px-8 transition-all duration-300 ease-in-out">
              <h3 className="text-sm sm:text-lg mt-4 font-semibold">{value.descTitle}</h3>
              <p className="text-xs sm:text-sm mt-2">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
