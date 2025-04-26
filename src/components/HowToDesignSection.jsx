import React from 'react';

// Placeholder for image - replace with actual image path later
const howToDesignImagePlaceholder = "https://via.placeholder.com/442x433"; // Using same size as Pixelgrade for consistency

const HowToDesignSection = () => {
  return (
    <div className="py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={howToDesignImagePlaceholder}
            alt="How to design illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-4">
            How to design your site footer like we did
          </h2>
          <p className="text-neutral-grey mb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula
            leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur
            faucibus ipsum id gravida.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded hover:bg-green-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToDesignSection;
