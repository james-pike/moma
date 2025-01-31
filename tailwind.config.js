/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import flowbitePlugin from 'flowbite/plugin'

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-qwik/**/*.{cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.brown, // Using Tailwind's default brown as a base for primary
          50:  '#f5f0e6',  // Soft sandy beige
          100: '#e0d6c4',  // Light tan
          200: '#cbb89e',  // Warm taupe
          300: '#b49a78',  // Earthy brown
          400: '#9c7d58',  // Classic capybara fur color
          500: '#866441',  // Rich brown (base)
          600: '#6e4f32',  // Deep brown
          700: '#573d26',  // Dark walnut brown
          800: '#3f2c1a',  // Espresso brown
          900: '#291d10',  // Almost black-brown
          950: '#1b120a',  // Ultra-dark brown for deep contrast // Very dark blue (even more professional)
        },
        secondary: colors.sky,
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
      },
      keyframes: {
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    flowbitePlugin,
  ],
  darkMode: "class",
};
