import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-8 bg-gray-800 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white text-lg">&copy; 2024 by Obada | All Rights Reserved.</p>
      <a href="#home" className="mt-4 md:mt-0 inline-flex items-center justify-center bg-blue-500 text-white p-2 rounded-full hover:bg-transparent hover:text-blue-500 border border-blue-500 transition">
        <i className="bx bx-up-arrow-alt text-2xl"></i>
      </a>
    </footer>
  );
};

export default Footer;