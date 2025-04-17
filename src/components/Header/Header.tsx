import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-8 bg-[#1f242d] z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold cursor-default">Portfolio</a>

        {/* Menu Icon (for mobile) */}
        <button
          onClick={() => setMenuActive(!menuActive)}
          className="md:hidden text-white text-4xl absolute right-20"
        >
          {menuActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex ${menuActive ? 'block' : 'hidden'} md:static absolute top-16 right-0 w-full md:w-auto bg-[#1f242d] md:bg-transparent`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block px-4 py-2 text-white text-lg font-medium hover:text-[#0ef] cursor-pointer"
            onClick={() => setMenuActive(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block px-4 py-2 text-white text-lg font-medium hover:text-[#0ef] cursor-pointer"
            onClick={() => setMenuActive(false)}
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block px-4 py-2 text-white text-lg font-medium hover:text-[#0ef] cursor-pointer"
            onClick={() => setMenuActive(false)}
          >
            Services
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block px-4 py-2 text-white text-lg font-medium hover:text-[#0ef] cursor-pointer"
            onClick={() => setMenuActive(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block md:inline-block px-4 py-2 text-white text-lg font-medium hover:text-[#0ef] cursor-pointer"
            onClick={() => setMenuActive(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;