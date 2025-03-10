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
      spacing: {
        '0.375': '0.09375rem', // Between mx-0.25 and mx-0.5
      },
      fontSize: {
        '4.5xl': ['2.625rem', { lineHeight: '2.75rem' }],
      },
      colors: {
        gray: {
          750: '#2F2F35', // Custom shade between 700 & 800
          850: '#1F1F23', // Custom shade between 800 & 900
        },
        primary: {
          25:  '#faf6f2',  // Light Cream  
          50:  '#f3ebe3',  // Latte Foam  
          100: '#e4d3c3',  // Cappuccino  
          200: '#d1b49a',  // Macchiato  
          300: '#b8936e',  // Caramel  
          400: '#996e45',  // Mocha  
          500: '#7B4B26',  // Espresso (Base)  
          DEFAULT: '#7B4B26', // Default primary  
          600: '#633b1e',  // Dark Roast  
          700: '#4d2e17',  // Coffee Bean  
          800: '#372110',  // French Roast  
          900: '#23150a',  // Black Coffee  
          950: '#120a05',  // Deep Brew  
        },
        secondary: {
          50:  '#e6f9f7',  
          100: '#c0f0ea',  
          200: '#88e1d4',  
          300: '#4fcdbd',  
          400: '#26b4a3',  
          500: '#129086',  // Core teal (base)
          DEFAULT: '#129086', // Default secondary
          600: '#0f736a',  
          700: '#0b5851',  
          800: '#073e39',  
          900: '#042724',  
          950: '#021514',  
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
        'accordion-up': 'collapsible-up 0.2s ease-out 0s 1 normal forwards',
        'accordion-down': 'collapsible-down 0.2s ease-out 0s 1 normal forwards',
        'rotate-shape': 'rotateShape 20s linear infinite',
      },
      keyframes: {
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--qwikui-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--qwikui-collapsible-content-height)' },
          to: { height: '0' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        rotateShape: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-animate'),
    require('tailwindcss-motion'),
    require('tailwindcss-intersect'), 
    flowbitePlugin,
  ],
  darkMode: "class",
};
