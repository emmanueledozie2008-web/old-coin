import React from "react";
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/+447311058889"; // Replace with your WhatsApp number

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-sm">
              Abrahams Coin Collection (ACC) is the world’s largest and most trusted third-party grading service for coins, tokens, and medals.
            </p>
          </div>

          {/* Middle Section: Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <Link to="">
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              </Link>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Right Section: Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:contact@acc.com" className="hover:text-gray-300">contact@acc.com</a></li>
              <li>Phone: <a href="tel:+123456789" className="hover:text-gray-300">+447311058889</a></li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg text-xl flex items-center justify-center gap-2 transition duration-300"
          >
            <i className="fab fa-whatsapp text-white"></i>
            Chat with us on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8">
        <p>&copy; 2025 Abrahams Coin Collection. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
