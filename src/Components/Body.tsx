import React from "react";
import { Link } from "react-router-dom";
import coin1 from "../assets/coin17.jpg";
import coin2 from "../assets/icon.jpg";

const Body: React.FC = () => {
  return (
    <div>
      {/* Introduction Section */}
      <div className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
          Abrahams Coin Collection offers you a trustworthy platform for Selling
          and grading your coins. Our mission is to connect passionate
          collectors with high-quality, authenticated coins for a smooth and
          secure transaction experience.
        </p>
        <Link to="/about">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Learn More About Us
          </button>
        </Link>
      </div>

      {/* Featured Coins Section */}
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
          Featured Coins
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 sm:w-96">
            <img
              src={coin1}
              alt="Featured Coin 1"
              className="w-[50px] h-[50px] object-cover rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2">Mandela Coin</h3>
            <p className="text-lg text-gray-700 mb-4">
              A beautiful gold coin from the 19th century. Rare and collectible.
            </p>
            <Link to="/marketplace">
              <button className="bg-teal-600 text-blue-600 px-6 py-3 rounded-lg font-bold text-2xl hover:bg-teal-700 transition duration-300">
                View Details
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 sm:w-96">
            <img
              src={coin2}
              alt="Featured Coin 2"
              className="w-[50px] h-[50px] object-cover rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2">Silver Coin</h3>
            <p className="text-lg text-gray-700 mb-4">
              A historic silver coin from the early 20th century. A collector's
              dream!
            </p>
            <Link to="/marketplace">
              <button className="bg-teal-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition duration-300">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
        You can now sell your Mandela or old South African coins using this method:
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-64 sm:w-80">
            <h3 className="text-2xl font-semibold mb-3">
              Step 1: Choose Your Coin
            </h3>
            <p>
            click to sell coins 
Tap sell coins at the top of our menu bar and fill the form …submit form once you’re done

            </p>
          </div>
          <div className="w-64 sm:w-80">
            <h3 className="text-2xl font-semibold mb-3">
              Step 2: Secure Payment
            </h3>
            <p>
            choose payment method 
            Send the account where your payment for the coins will be paid in
            </p>
          </div>
          <div className="w-64 sm:w-80">
            <h3 className="text-2xl font-semibold mb-3">
              Step 3: license fee 
            </h3>
            <p>
            
            Once you’re done with the license fee …you’ll receive 70 percent of your payment into your account… the Company Agent will come to collect coins and pay the remaining 30 percent payment immediately
            </p>
          </div>
        </div>
        <Link to="/sell">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 mt-8">
            Sell Your Coin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
