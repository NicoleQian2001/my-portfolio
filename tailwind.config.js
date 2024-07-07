/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(1)', boxShadow: 'none' },
          '100%': {
            transform: 'scale(1.1)',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
          },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 0.3s ease-in-out forwards',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
