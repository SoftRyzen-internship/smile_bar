/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
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
        //text-colors
        primary: '#1D1D1B',
        placeholder: '#1D1D1B26',
        error: '#FF5555',
        contact: '#000000',
        //bg-colors
        primaryBg: '#FFFFFF',
        heroBg: '#FFFFFF40',
        purple: '#D6C8FF',
        rose: '#EDC6FF',
        serviceBlock: '#BBBBBB1A',
        block: '#D3D3D340',
        blockHover: '#D3D3D380',
        blockBlue: '#A6D4FF',
        blockPurple: '#A6AFFF',
        //btn-colors
        btn: '#C3C7F4',
        btnHover: '#9FA4DF',
        btnDisabled: '#D3D3D3',
        bord: '#F5F5F5',
      },
      backgroundImage: {
        serviceGradient:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.00) 49.48%)',
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
