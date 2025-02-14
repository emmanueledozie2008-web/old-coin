import React, { useState } from "react";
import icon from "../assets/icon.jpg";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side: Logo or brand */}
          <div className="flex items-center space-x-3">
            <img src={icon} alt="logo" className="h-8 w-8 rounded-full" />
            <a href="#" className="text-xl font-bold text-white hover:text-gray-200">
              Abrahams Coin Collection
            </a>
          </div>

          {/* Middle: Search bar (Responsive) */}
          <div className="hidden md:flex items-center flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xs px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          {/* Right side: Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div>
             <Link to="/about">
            <button className="bg-purple-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
            About Us
            </button>
            </Link>
            </div>
            {/* second */}
            <div className="">
            <Link to="/Sell">
            <button className="bg-purple-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
            Sell Your Coin
            </button>
            </Link>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Display on smaller screens */}
      <div
        className={`md:hidden bg-purple-600 text-white p-4 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm mb-3"
        />
        <div className="space-y-3">
          <div className="pb-3">
        <Link to="/about">
          <button className="w-full text-blue-500 bg-purple-600  px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
          About Us
          </button>
          </Link>
          </div>
          {/*  */}
          <div className="pt-4">
          <Link to="/Sell">
          <button className="w-full bg-purple-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
          Sell Your Coin
          </button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
