import React from 'react';

// Placeholder icons - replace with actual icons later
const IconPlaceholder = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const featuresData = [
  {
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Features = () => {
  return (
    <div className="py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-2">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutral-grey">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-custom text-center flex flex-col items-center">
              <div className="mb-4 p-3 inline-block rounded-tl-lg rounded-br-lg bg-tint-green">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-d-grey mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-grey text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
