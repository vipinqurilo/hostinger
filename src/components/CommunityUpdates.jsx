import React from 'react';

// Placeholder for image - replace with actual image path later
const communityImagePlaceholder = "https://via.placeholder.com/368x286";
// Placeholder Icon
const ArrowRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
);


const communityUpdatesData = [
  {
    image: communityImagePlaceholder,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: communityImagePlaceholder,
    title: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: communityImagePlaceholder,
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

const CommunityUpdates = () => {
  return (
    <div className="py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-2">
            Caring is the new marketing
          </h2>
          <p className="text-neutral-grey max-w-xl mx-auto">
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {communityUpdatesData.map((update, index) => (
            <div key={index} className="relative">
              <img
                src={update.image}
                alt={update.title}
                className="rounded-lg w-full h-auto mb-[-60px] relative z-0" // Negative margin to pull text block up
              />
              <div className="bg-neutral-silver p-4 rounded-lg shadow-custom relative z-10 mx-4 md:mx-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-grey mb-4 leading-snug">
                  {update.title}
                </h3>
                <a href="#" className="text-primary font-semibold hover:text-green-700 inline-flex items-center gap-2">
                  Readmore <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdates;
