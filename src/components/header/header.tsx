import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Our Companies", href: "/our-companies" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Purpose", href: "/our-purpose" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load active index from localStorage if available
  useEffect(() => {
    const storedActiveIndex = localStorage.getItem("activeIndex");
    if (storedActiveIndex) {
      setActiveIndex(Number(storedActiveIndex));
    }
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", String(index)); // Store active index in localStorage
    setMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-800">
          Meygham
        </Link>

        {/* Hamburger Menu Icon (shown on mobile) */}
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <div className="relative group" key={index}>
              <Link
                to={item.href}
                className={`text-gray-500 text-lg font-medium transition-all duration-200 pb-4 ${
                  activeIndex === index ? "text-gray-950" : "hover:text-gray-800"
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

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-50">
            <div className="flex flex-col items-start px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`text-gray-700 text-lg font-medium transition-all duration-200 ${
                    activeIndex === index ? "text-gray-900" : "hover:text-gray-800"
                  }`}
                  onClick={() => handleLinkClick(index)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
