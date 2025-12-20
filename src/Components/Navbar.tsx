import React, { useState } from "react";
import icon from "../assets/icon.jpg";
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
         ? "bg-amber-100 text-amber-900"
         : "text-amber-900 hover:bg-amber-50 hover:text-amber-800"
     }`;

  return (
    <nav className="bg-white shadow-lg border-b border-amber-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={icon}
              alt="Abrahams Coin Collection Logo"
              className="h-10 w-10 rounded-full border-2 border-amber-800 p-0.5"
            />
            <div className="ml-3">
              <Link
                to="/"
                className="text-xl font-bold text-amber-900 hover:text-amber-700"
              >
                Abrahams Coin Collection
              </Link>
              <p className="text-xs text-amber-600 hidden sm:block">
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
              className="pl-4 pr-4 py-2 w-64 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
            />
            
            <button className="px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg hover:bg-amber-800">
              Get Appraised
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-amber-700 hover:bg-amber-50 rounded-md"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 shadow-xl">
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
                       ? "bg-amber-100 text-amber-900"
                       : "text-amber-900 hover:bg-amber-50"
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
