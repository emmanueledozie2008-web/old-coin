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
    <div className="bg-amber-50">

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-amber-50 text-center px-4">
        <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-amber-700 mb-4 sm:mb-6" />

        <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
          Why Choose{" "}
          <span className="text-amber-700">Abrahams Coin Collection?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-10">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow-lg border border-amber-200"
            >
              <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-amber-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COINS */}
      <section className="py-16 sm:py-20 bg-white px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {coins.map((coin) => (
            <div
              key={coin.title}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl border border-amber-200 p-6 sm:p-8"
            >
              {/* Image */}
              <div className="flex justify-center sm:justify-start mb-4">
                <img
                  src={coin.image}
                  alt={coin.title}
                  className="w-20 h-20 rounded-lg"
                />
              </div>

              <span className="inline-block bg-amber-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                {coin.badge}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                {coin.title}
              </h3>
              <p className="text-sm sm:text-base text-amber-700 mb-4">
                {coin.subtitle}
              </p>

              <p className="text-sm sm:text-base text-amber-700 mb-6">
                {coin.description}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {coin.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-amber-50 p-3 sm:p-4 rounded-lg"
                  >
                    <p className="text-xs sm:text-sm text-amber-600">
                      {spec.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-2xl sm:text-3xl font-bold text-amber-800">
                  {coin.price}
                </p>

                <Link to="/marketplace" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-amber-700 text-white px-6 py-3 rounded-xl hover:bg-amber-800 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-800 to-amber-600 text-white px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map(({ number, icon: Icon, title, description, footer }) => (
            <div
              key={number}
              className="relative bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold">
                {number}
              </div>

              <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-amber-200 mb-4" />

              <h3 className="text-lg sm:text-2xl font-bold mb-3">
                {title}
              </h3>

              <p className="text-sm sm:text-base text-amber-100 mb-4">
                {description}
              </p>

              <p className="text-xs sm:text-sm font-semibold text-amber-200">
                {footer}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};


export default Body;
