import React, { useState } from "react";
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Our Companies", href: "/our-companies" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Purpose", href: "/our-purpose" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to='/' className="text-2xl font-bold text-gray-800 flex items-center">
          {/* <span className="w-[100px] h-10 flex">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="meghyam"
            className="w-[100px] h-12"
          />{" "}
          </span> */}
          Meygham
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          {navItems.map((item, index) => (
            <div className="relative group" key={index}>
              <Link
                to={item.href}
                className={`text-gray-700 text-lg font-medium transition-all duration-200 pb-4 ${
                  activeIndex === index
                    ? "text-gray-900"
                    : "hover:text-gray-800"
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {item.label}
              </Link>
              {/* Underline animation */}
              <span
                className={`absolute bottom-0 top-8 left-0 h-0.5 bg-gray-700 transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "w-full" : "w-0"
                } group-hover:w-full`}
              />
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
