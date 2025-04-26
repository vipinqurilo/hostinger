/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4CAF4F',        // Main green button/accent
        'secondary': '#263238',      // Footer background
        'neutral-d-grey': '#4D4D4D', // Dark text
        'neutral-grey': '#717171',   // Medium text/subheadings
        'neutral-l-grey': '#89939E', // Lighter text (e.g., testimonial company)
        'neutral-silver': '#F5F7FA', // Light background sections
        'neutral-black': '#18191F',  // Very dark text (rarely used)
        'white': '#FFFFFF',          // White background/text
        'tint-green': '#E8F5E9',     // Light green background for icons
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Primary font
      },
      boxShadow: {
        'custom': '0px 2px 4px 0px rgba(171, 190, 209, 0.2)',    // Subtle shadow for cards
        'testimonial': '0px 8px 16px 0px rgba(171, 190, 209, 0.4)', // Shadow for testimonial image
      }
    },
  },
  plugins: [],
}
