import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bffb4f", // Override the default primary color
        tab: {
          DEFAULT: "#000", // Default tab text color (not selected)
          selected: "#bffb4f", // Selected tab text color
        },
      },
      fontSize: {
        'xxl': '2.5rem', // Custom font size
      },
      padding: {
        'lg': '2rem', // Custom padding
      },
      height: {
        'tab': '80px', // Custom height for the tab
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      colors: {
        primary: "#bffb4f", // Override the primary color using HeroUI plugin
      },
    }),
    require('@tailwindcss/forms'), // Optional: for form styling if needed
  ],
};
