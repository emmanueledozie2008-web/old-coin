import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coin1 from "../assets/WhatsApp Image 2026-03-03 at 5.24.12 PM.jpeg"; // adjust paths as needed
import coin2 from "../assets/WhatsApp Image 2026-03-03 at 5.20.04 PM.jpeg";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [coin1, coin2];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] w-full overflow-hidden">
      {/* Background Images with Zoom Effect */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 animate-very-slow-zoom"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-4 text-5xl md:text-7xl font-bold">
          <span className="text-yellow-400">Rosland Capital</span>
        </h1>
        <p className="mb-8 max-w-2xl text-xl md:text-2xl text-gray-200">
          The World's Most Trusted Coin Grading & Authentication Service
        </p>
        <div className="flex gap-4">
          <button className="rounded-lg bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition">
            Explore Collection
          </button>
          <button className="rounded-lg border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-white hover:bg-yellow-500/20 transition">
            Get Appraised
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentIndex ? "bg-yellow-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;