import React from 'react';

// Placeholder icons - replace with actual icons later
const IconPlaceholder = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

const statsData = [
  { number: "2,245,341", label: "Members" },
  { number: "46,328", label: "Clubs" },
  { number: "828,867", label: "Event Bookings" },
  { number: "1,926,436", label: "Payments" },
];

const StatsSection = () => {
  return (
    <div className="bg-neutral-silver py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-2">
            Helping a local <br className="hidden md:block" />
            <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-neutral-grey">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Stats Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-x-8 gap-y-10 md:gap-x-12 lg:gap-x-20">
          {statsData.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2 rounded bg-tint-green">
                 <IconPlaceholder className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-d-grey">{stat.number}</p>
                <p className="text-sm md:text-base text-neutral-grey">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
