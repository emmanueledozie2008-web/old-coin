import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock, Shield, Award, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const emailAddress = "roslandcapitaluk@gmail.com";
  const businessHours = "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM";

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information with Social Widget */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 p-2 rounded-lg mr-3">
                <Award className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300">Rosland Capital</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The world's most trusted third-party grading service for coins, tokens, and medals.
              Trusted by collectors and institutions worldwide since 1987.
            </p>
            {/* Social Media Widget */}
            <div className="flex space-x-3 pt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500/20 border border-yellow-500/20 transition-colors">
                <Facebook className="w-5 h-5 text-yellow-400" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500/20 border border-yellow-500/20 transition-colors">
                <Twitter className="w-5 h-5 text-yellow-400" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500/20 border border-yellow-500/20 transition-colors">
                <Instagram className="w-5 h-5 text-yellow-400" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500/20 border border-yellow-500/20 transition-colors">
                <Youtube className="w-5 h-5 text-yellow-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 hover:font-semibold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 hover:font-semibold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-400 hover:text-yellow-400 hover:font-semibold transition-colors duration-300">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-400 hover:text-yellow-400 hover:font-semibold transition-colors duration-300">
                  Sell Your Coins
                </Link>
              </li>
              <li>
                <Link to="/grading" className="text-gray-400 hover:text-yellow-400 hover:font-semibold transition-colors duration-300">
                  Grading Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${emailAddress}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  {emailAddress}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{businessHours}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Updates */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on rare coins, market insights, and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-yellow-500/20 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Stat Widgets Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-yellow-500/20 text-center">
            <Shield className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
            <p className="text-2xl font-bold text-yellow-300">1.2M+</p>
            <p className="text-gray-400">Coins Authenticated</p>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-yellow-500/20 text-center">
            <Award className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
            <p className="text-2xl font-bold text-yellow-300">37+</p>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-yellow-500/20 text-center">
            <svg className="w-8 h-8 mx-auto text-yellow-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <p className="text-2xl font-bold text-yellow-300">99.8%</p>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>

        {/* Contact Button Section */}
        <div className="border-t border-yellow-500/20 pt-8 mt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Need Expert Consultation?</h3>
            <p className="text-gray-400 mb-6">
              Our numismatic experts are ready to assist you with coin valuation, grading, and sales inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${emailAddress}?subject=Coin%20Consultation%20Request&body=Hello%20Rosland%20Capital%20Team,%0A%0AI%20would%20like%20to%20request%20a%20consultation%20about%20my%20coins.%0A%0AHere%20are%20my%20details:`}
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                Email Our Experts
              </a>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Response time: Typically within 2 business hours
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-950 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Rosland Capital. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/guarantee" className="hover:text-yellow-400 transition-colors duration-300">
                Guarantee Terms
              </a>
              <a href="/shipping" className="hover:text-yellow-400 transition-colors duration-300">
                Shipping Policy
              </a>
              <a href="/faq" className="hover:text-yellow-400 transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              Rosland Capital is a registered trademark. All coin images are for illustrative purposes only. 
              Actual coins may vary. Professional grading and authentication services subject to terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;