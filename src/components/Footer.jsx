import React from 'react';

// Placeholder icons - replace with actual icons later
const SocialIconPlaceholder = ({ className }) => (
  <div className={`w-8 h-8 rounded-full bg-gray-600 ${className}`}></div>
);
const SendIconPlaceholder = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.894 2.553a1 1 0 00-1.789 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 008 16.171V11.5a1 1 0 011-1h2a1 1 0 011 1v4.671a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
  </svg>
);
const LogoPlaceholder = ({ className }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-8 h-8 bg-primary rounded"></div>
        <span className="text-white text-2xl font-bold">Nexcent</span>
    </div>
);


const Footer = () => {
  return (
    <footer className="bg-secondary text-neutral-silver py-12 md:py-16 px-4 lg:px-36 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-8">
        {/* Company Info & Social */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <LogoPlaceholder className="mb-4"/>
          <div className="text-sm">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex gap-4 mt-4">
            <SocialIconPlaceholder />
            <SocialIconPlaceholder />
            <SocialIconPlaceholder />
            <SocialIconPlaceholder />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-2/3">
          {/* Company Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition">About us</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact us</a></li>
              <li><a href="#" className="hover:text-primary transition">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition">Help center</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of service</a></li>
              <li><a href="#" className="hover:text-primary transition">Legal</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Status</a></li>
            </ul>
          </div>

          {/* Stay up to date */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Stay up to date</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-700 bg-opacity-50 text-neutral-silver placeholder-neutral-l-grey px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-silver hover:text-primary">
                <SendIconPlaceholder className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
