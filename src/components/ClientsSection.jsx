import React from 'react';

// Placeholder for client logos - replace with actual logos/SVGs later
const ClientLogoPlaceholder = ({ className }) => (
  <div className={`h-12 w-24 bg-gray-300 flex items-center justify-center text-gray-500 text-xs ${className}`}>
    Logo
  </div>
);

const ClientsSection = () => {
  // Assuming 7 logos based on the design
  const clientLogos = Array(7).fill(null);

  return (
    <div className="py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-2">
            Our Clients
          </h2>
          <p className="text-neutral-grey">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
          {clientLogos.map((_, index) => (
            <ClientLogoPlaceholder key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
