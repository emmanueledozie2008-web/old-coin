import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 to-blue-600 text-white">
      {/* Content */}
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Abrahams Coin Collection
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Buy  your old coins with us!
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          (A onceoff license fee is applicable)
        </p>
      

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/about">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              About Us
            </button>
          </Link>

          <Link to="/marketplace">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              View Marketplace
            </button>
          </Link>

          <Link to="/sell">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Buy Your Coin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
