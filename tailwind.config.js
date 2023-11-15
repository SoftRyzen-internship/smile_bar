/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  screens: {
    sm: '480px',
    md: '768px',
    xl: '1280px',
    smOnly: { max: '767.98px' },
    mdOnly: { min: '768px', max: '1279.98px' },
    notXl: { max: '1279.98px' },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.875rem',
          xl: '1.875rem',
        },
      },
      colors: {
        //accent: '#FFC107',  - example
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        //header: '1px 2px 8px rgba(37, 101, 208, 0.14)', -example
      },
    },
  },
  plugins: [],
};
