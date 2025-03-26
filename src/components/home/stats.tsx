import React, { useEffect } from "react";

interface StatsItem {
  logo: string;
  title: string;
  description: string;
}

interface StatsProps {
  aboutUsText: string;
  companyData: StatsItem[];
}

const Stats: React.FC<StatsProps> = ({ aboutUsText, companyData }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes water {
        0% { transform: translateY(0); opacity: 0.3; }
        50% { transform: translateY(-10px); opacity: 0.6; }
        100% { transform: translateY(0); opacity: 0.3; }
      }
      .animate-water {
        animation: water 2s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="flex flex-col items-center w-full h-full py-24 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{aboutUsText}</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full px-12">
        {companyData.map((company, index) => (
          <div key={index} className="flex items-center space-x-6 p-4 ">
            {/* Logo with animation */}
            <div className="relative flex items-center justify-center w-24 h-24">
              {/* Outer Circle */}
              <div className="absolute w-28 h-28 border-2 border-blue-500 rounded-full animate-pulse"></div>
              {/* Inner Circle */}
              <div className="absolute w-24 h-24 border-2 border-blue-300 rounded-full"></div>
              {/* Logo */}
              <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-full overflow-hidden group">
                <img
                  src={company.logo}
                  alt={company.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                {/* Water Animation Effect */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity rounded-full animate-water"></div>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl font-semibold text-black pb-4">{company.title}</h3>
              <p className="text-gray-400">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
