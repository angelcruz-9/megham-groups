import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Our Companies", href: "#our-companies" },
  { label: "Success Stories", href: "#about-us" },
  { label: "Our Team", href: "#our-purpose" },
  { label: "Contact Us", href: "#contact-us" },
];

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adds shadow when scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-blue-400"
      }`}
    >
      <div className="container mx-auto p-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Meygham
        </a>

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
              <a
                href={item.href}
                className={` ${
                  isScrolled ? "text-black" : "text-white"
                }  text-lg font-medium transition-all duration-200 pb-4 ${
                  activeIndex === index ? "text-gray-950" : "hover:text-gray-800"
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {item.label}
              </a>
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
                <a
                  key={index}
                  href={item.href}
                  className={`text-gray-700 text-lg font-medium transition-all duration-200 ${
                    activeIndex === index ? "text-gray-900" : "hover:text-gray-800"
                  }`}
                  onClick={() => handleLinkClick(index)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
