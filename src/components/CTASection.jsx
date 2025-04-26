import React from 'react';

// Placeholder Icon
const ArrowRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
);

const CTASection = () => {
  return (
    <div className="bg-neutral-silver py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-black mb-8 max-w-3xl mx-auto leading-tight">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="bg-primary text-white px-8 py-3 rounded hover:bg-green-700 transition duration-300 inline-flex items-center gap-2">
          Get a Demo <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;
