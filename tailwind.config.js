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
          25:  '#fffaf2',  
          50:  '#fef3e0',  
          100: '#fde0b8',  
          200: '#fbc878',  
          300: '#f9ae4a',  
          400: '#f39c2a',  
          500: '#E59C2A',  // Core orange (base)  
          DEFAULT: '#E59C2A', // Default primary  
          600: '#c17e22',  
          700: '#9d621b',  
          800: '#794714',  
          900: '#55300e',  
          950: '#311b08',  
       
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
