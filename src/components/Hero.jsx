import React from 'react';

// Placeholder for illustration - replace with actual image/SVG path later
const illustrationPlaceholder = "https://via.placeholder.com/391x407";

const Hero = () => {
  return (
    <div className="bg-neutral-silver font-inter">
      <div className="container mx-auto px-4 lg:px-36 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-semibold text-neutral-d-grey mb-4 leading-tight">
            Lessons and insights <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-neutral-grey mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded hover:bg-green-700 transition duration-300">
            Register
          </button>
        </div>

        {/* Illustration */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <img src={illustrationPlaceholder} alt="Hero Illustration" className="w-full max-w-sm lg:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
