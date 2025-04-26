import React, { useState } from 'react';

// Placeholder Logo
const LogoPlaceholder = ({ className }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-8 h-8 bg-primary rounded"></div>
        <span className="text-neutral-d-grey text-2xl font-bold">Nexcent</span>
    </div>
);

// Placeholder Icons
const MenuIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
);
const CloseIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

    return (
        <nav className="bg-neutral-silver font-inter sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-36 py-4 flex justify-between items-center">
                {/* Logo */}
                <LogoPlaceholder />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-neutral-d-grey">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-primary transition">{link}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="space-x-4">
                        <button className="text-primary hover:text-green-700">Login</button>
                        <button className="bg-primary text-white px-5 py-2 rounded hover:bg-green-700 transition duration-300">Sign up</button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <CloseIcon className="w-6 h-6 text-neutral-d-grey" /> : <MenuIcon className="w-6 h-6 text-neutral-d-grey" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-neutral-silver absolute top-full left-0 right-0 shadow-md pb-4">
                    <ul className="flex flex-col items-center space-y-4 text-neutral-d-grey pt-4">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-primary transition" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col items-center space-y-4 mt-4 px-4">
                        <button className="text-primary hover:text-green-700 w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Login</button>
                        <button className="bg-primary text-white px-5 py-2 rounded hover:bg-green-700 transition duration-300 w-full" onClick={() => setIsMobileMenuOpen(false)}>Sign up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
