import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;