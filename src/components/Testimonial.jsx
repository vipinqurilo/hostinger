import React from 'react';

// Placeholder for image - replace with actual image path later
const testimonialImagePlaceholder = "https://via.placeholder.com/328x328";

const Testimonial = () => {
  return (
    <div className="bg-neutral-silver py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={testimonialImagePlaceholder}
            alt="Tim Smith"
            className="rounded-lg shadow-testimonial w-full max-w-xs md:max-w-full"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-neutral-grey text-base md:text-lg italic mb-6">
            “Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.”
          </p>
          <p className="text-primary text-lg md:text-xl font-semibold mb-1">
            Tim Smith
          </p>
          <p className="text-neutral-l-grey text-sm md:text-base">
            British Dragon Boat Racing Association
          </p>
          {/* Add client logos section if needed based on full design */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
