import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Shield,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
} from "lucide-react";
import coin1 from "../assets/coin17.jpg";
import coin2 from "../assets/icon.jpg";
import Footer from "./Footer";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Bank-level security for all your transactions and personal information.",
  },
  {
    icon: CheckCircle,
    title: "Expert Authentication",
    description:
      "Every coin verified by our team of certified numismatic experts.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description:
      "Real-time pricing data and market trends to inform your investments.",
  },
];

const coins = [
  {
    badge: "RARE FIND",
    title: "Mandela Commemorative Coin",
    subtitle: "Limited Edition • 24K Gold Plated",
    image: coin1,
    description:
      "A pristine gold commemorative coin celebrating Nelson Mandela's legacy. Limited to only 500 pieces worldwide.",
    specs: [
      { label: "Year", value: "1994" },
      { label: "Condition", value: "Mint State" },
      { label: "Weight", value: "31.1g" },
      { label: "Purity", value: "99.9% Gold" },
    ],
    price: "$2,450",
  },
  {
    badge: "HISTORICAL",
    title: "Early 20th Century Silver Coin",
    subtitle: "Sterling Silver • Exceptional Condition",
    image: coin2,
    description:
      "A remarkable piece of history from the early 1900s with documented provenance and certified authenticity.",
    specs: [
      { label: "Year", value: "1910" },
      { label: "Condition", value: "XF (Extremely Fine)" },
      { label: "Weight", value: "28.28g" },
      { label: "Purity", value: "92.5% Silver" },
    ],
    price: "$1,850",
  },
];

const steps = [
  {
    number: 1,
    icon: Clock,
    title: "Submit Your Coin Details",
    description:
      "Complete the submission form and upload photos. Get a valuation within 24 hours.",
    footer: "Estimated Time: 5–10 minutes",
  },
  {
    number: 2,
    icon: DollarSign,
    title: "Choose Payment Method",
    description:
      "Select your preferred payment method. All transactions are encrypted.",
    footer: "Bank Transfer • PayPal",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Receive Payment",
    description:
      "Get 70% upfront and the remaining 30% when our agent collects the coin.",
    footer: "70% Instantly • 30% On Collection",
  },
];

const Body: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-gray-900/50 text-center px-4 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-yellow-400 mb-4 sm:mb-6" />

        <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
          Why Choose{" "}
          <span className="text-yellow-400">Rosland Capital?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-10 relative z-10">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
            >
              <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COINS */}
      <section className="py-16 sm:py-20 bg-gray-800 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {coins.map((coin) => (
            <div
              key={coin.title}
              className="bg-gray-900 rounded-2xl shadow-2xl border border-yellow-500/20 p-6 sm:p-8 hover:border-yellow-500/40 transition-all"
            >
              {/* Image */}
              <div className="flex justify-center sm:justify-start mb-4">
  <img
    src="https://www.roslandcapitalgold.com/assets/img/gold.webp"
    alt={coin?.title ? `${coin.title} gold coin` : "Gold coin image"}
    className="w-20 h-20 rounded-lg ring-2 ring-yellow-500/30 object-cover"
    loading="lazy"
  />
</div>

              <span className="inline-block bg-yellow-500 text-gray-900 text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                {coin.badge}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1">
                {coin.title}
              </h3>
              <p className="text-sm sm:text-base text-yellow-300 mb-4">
                {coin.subtitle}
              </p>

              <p className="text-sm sm:text-base text-gray-300 mb-6">
                {coin.description}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {coin.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-700"
                  >
                    <p className="text-xs sm:text-sm text-yellow-400">
                      {spec.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-gray-100">
                      {spec.value}
                    </p>
              </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  {coin.price}
                </p>

                <Link to="/marketplace" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map(({ number, icon: Icon, title, description, footer }) => (
            <div
              key={number}
              className="relative bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-yellow-500/20"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">
                {number}
              </div>

              <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mb-4" />

              <h3 className="text-lg sm:text-2xl font-bold text-yellow-300 mb-3">
                {title}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {description}
              </p>

              <p className="text-xs sm:text-sm font-semibold text-yellow-400">
                {footer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MARKET INSIGHTS WIDGET - enhanced with dark theme */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-yellow-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-300">Market Insights Widget</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/80 p-6 rounded-lg backdrop-blur-sm border border-yellow-500/20 shadow-xl">
              <DollarSign className="w-8 h-8 mb-2 text-yellow-400" />
              <p className="text-sm uppercase tracking-wider text-gray-400">Gold (spot)</p>
              <p className="text-2xl font-bold text-gray-100">$1,950.20</p>
              <p className="text-sm text-green-400">+0.5%</p>
            </div>
            <div className="bg-gray-800/80 p-6 rounded-lg backdrop-blur-sm border border-yellow-500/20 shadow-xl">
              <DollarSign className="w-8 h-8 mb-2 text-gray-400" />
              <p className="text-sm uppercase tracking-wider text-gray-400">Silver (spot)</p>
              <p className="text-2xl font-bold text-gray-100">$24.68</p>
              <p className="text-sm text-red-400">-0.2%</p>
            </div>
            <div className="bg-gray-800/80 p-6 rounded-lg backdrop-blur-sm border border-yellow-500/20 shadow-xl">
              <TrendingUp className="w-8 h-8 mb-2 text-green-400" />
              <p className="text-sm uppercase tracking-wider text-gray-400">Platinum</p>
              <p className="text-2xl font-bold text-gray-100">$980.50</p>
              <p className="text-sm text-green-400">+0.3%</p>
            </div>
          </div>
          <p className="text-center text-sm mt-6 text-gray-400">
            Data updates every 5 minutes. For reference only.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Body;