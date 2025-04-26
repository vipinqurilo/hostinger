import React from 'react';

// Placeholder for image - replace with actual image path later
const pixelgradeImagePlaceholder = "https://via.placeholder.com/442x433";

const PixelgradeSection = () => {
  return (
    <div className="py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={pixelgradeImagePlaceholder}
            alt="Pixelgrade Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-4">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-neutral-grey mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded hover:bg-green-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PixelgradeSection;
