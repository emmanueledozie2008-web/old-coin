import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 text-amber-900 p-4 md:p-8">
      {/* Left Content */}
      <div className="text-center lg:text-left px-6 md:px-12 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-amber-800">Abrahams Coin Collection</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-amber-700">
          sell your old coins with us!
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-10 text-amber-600">
          (A once-off license fee is applicable)
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
          <Link to="/about">
            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition duration-300 shadow-lg hover:shadow-xl">
              About Us
            </button>
          </Link>

          <Link to="/marketplace">
            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition duration-300 shadow-lg hover:shadow-xl">
              View Marketplace
            </button>
          </Link>

          <Link to="/Collection">
            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition duration-300 shadow-lg hover:shadow-xl">
              Collections
            </button>
          </Link>
        </div>
      </div>

      {/* Right Widget - Statistics Widget */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-amber-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
              Collection Statistics
            </h2>
            <p className="text-amber-600">Real-time marketplace insights</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">1,250+</div>
              <div className="text-sm md:text-base text-amber-600">Active Collectors</div>
            </div>
            
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">5,400+</div>
              <div className="text-sm md:text-base text-amber-600">Coins Listed</div>
            </div>
            
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">98%</div>
              <div className="text-sm md:text-base text-amber-600">Satisfaction Rate</div>
            </div>
            
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">24h</div>
              <div className="text-sm md:text-base text-amber-600">Avg. Response Time</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-amber-800 font-semibold">Monthly Transactions</span>
              <span className="text-amber-800 font-bold">85%</span>
            </div>
            <div className="w-full bg-amber-100 rounded-full h-3">
              <div className="bg-amber-600 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Featured Collection */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <h3 className="font-bold text-amber-900 mb-3 text-lg">Featured This Week</h3>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                <span className="text-amber-800 font-bold">$</span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900">Roman Empire Denarius</h4>
                <p className="text-sm text-amber-600">Starting at $2,450</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full mt-8 bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-900 transition duration-300 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Live Market Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;