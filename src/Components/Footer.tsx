import React from "react";
import { Link } from "react-router-dom";
import { Mail,  MapPin, Clock, Shield, Award } from "lucide-react";

const Footer: React.FC = () => {
  const emailAddress = "contact@abrahamscoincollection.com";
  
  const businessHours = "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM";

  return (
    <footer className="bg-gradient-to-b from-white to-amber-50 text-amber-900 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="bg-amber-700 p-2 rounded-lg mr-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-800">Abrahams Coin Collection</h3>
            </div>
            <p className="text-amber-700 leading-relaxed">
              The world's most trusted third-party grading service for coins, tokens, and medals.
              Trusted by collectors and institutions worldwide since 1987.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-amber-700" />
              </div>
              <div className="bg-amber-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-amber-700" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-amber-700 hover:text-amber-800 hover:font-semibold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-700 hover:text-amber-800 hover:font-semibold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-amber-700 hover:text-amber-800 hover:font-semibold transition-colors duration-300">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-amber-700 hover:text-amber-800 hover:font-semibold transition-colors duration-300">
                  Sell Your Coins
                </Link>
              </li>
              <li>
                <Link to="/grading" className="text-amber-700 hover:text-amber-800 hover:font-semibold transition-colors duration-300">
                  Grading Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-amber-700 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${emailAddress}`}
                  className="text-amber-700 hover:text-amber-800 transition-colors duration-300"
                >
                  Collectioncoinscraft@gmail.com
                </a>
              </li>
              
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-amber-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-amber-700">{businessHours}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-amber-700">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Updates */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 mb-4">Stay Updated</h3>
            <p className="text-amber-700 mb-4">
              Subscribe to receive updates on rare coins, market insights, and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Button Section */}
        <div className="border-t border-amber-200 pt-8 mt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Need Expert Consultation?</h3>
            <p className="text-amber-700 mb-6">
              Our numismatic experts are ready to assist you with coin valuation, grading, and sales inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${emailAddress}?subject=Coin%20Consultation%20Request&body=Hello%20ACC%20Team,%0A%0AI%20would%20like%20to%20request%20a%20consultation%20about%20my%20coins.%0A%0AHere%20are%20my%20details:`}
                className="bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                Email Our Experts
              </a>
              
              
            </div>
            
            <p className="text-amber-600 text-sm mt-4">
              Response time: Typically within 2 business hours
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-amber-800 text-amber-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Abrahams Coin Collection. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-amber-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-amber-300 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/guarantee" className="hover:text-amber-300 transition-colors duration-300">
                Guarantee Terms
              </a>
              <a href="/shipping" className="hover:text-amber-300 transition-colors duration-300">
                Shipping Policy
              </a>
              <a href="/faq" className="hover:text-amber-300 transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-amber-700">
            <p className="text-xs text-amber-300">
              Abrahams Coin Collection is a registered trademark. All coin images are for illustrative purposes only. 
              Actual coins may vary. Professional grading and authentication services subject to terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;