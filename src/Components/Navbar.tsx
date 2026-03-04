import React, { useState } from "react";
import icon from "../assets/WhatsApp Image 2026-03-03 at 5.57.28 PM.jpeg";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/Collection" },
    // { name: "Sell Your Coin", path: "/sell" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/Contact" },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
     ${
       isActive
         ? "bg-yellow-500/20 text-yellow-300"
         : "text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-300"
     }`;

  return (
    <nav className="bg-gradient-to-b from-gray-900 to-gray-800 border-b border-yellow-500/20 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={icon}
              alt="Rosland Capital Logo"
              className="h-10 w-10 rounded-full border-2 border-yellow-500 p-0.5"
            />
            <div className="ml-3">
              <Link
                to="/"
                className="text-xl font-bold text-gray-100 hover:text-yellow-300 transition-colors"
              >
                Rosland Capital Coin Collection
              </Link>
              <p className="text-xs text-gray-400 hidden sm:block">
                Trusted Numismatics Since 1995
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navLinkClasses}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search coins, years, mint..."
              className="pl-4 pr-4 py-2 w-64 bg-gray-800 border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-200 placeholder-gray-500 text-sm"
            />
            
            <button className="px-4 py-2 bg-yellow-500 text-gray-900 text-sm font-medium rounded-lg hover:bg-yellow-400 transition-colors">
              Get Appraised
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-gray-300 hover:bg-yellow-500/10 rounded-md"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-yellow-500/20 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors
                   ${
                     isActive
                       ? "bg-yellow-500/20 text-yellow-300"
                       : "text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-300"
                   }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;