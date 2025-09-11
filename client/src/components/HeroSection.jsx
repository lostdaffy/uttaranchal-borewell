// HeroSection.jsx
import React from "react";

const HeroSection = ({ title, highlight, des }) => {
  return (
    <section
      className="relative flex items-center min-h-[50vh] md:h-[40vh] lg:h-[45vh] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-start mb-4 md:mb-6">
          {title}{" "}
          {highlight && (
            <span className="text-[#3dc1d3]">{highlight}</span>
          )}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">{des}</p>
      </div>
    </section>
  );
};

export default HeroSection;
