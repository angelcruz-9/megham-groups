import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className= "text-gray-400 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; Meygham Groups {new Date().getFullYear()}
          <a href="/privacy-policy" className="text-blue-400 hover:underline ml-1">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
