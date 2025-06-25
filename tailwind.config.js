/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'shooting-star': {
          '0%': {
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-300px) translateY(100px) scale(0.5)',
            opacity: '0',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 8s infinite ease-in-out',
        'shooting-star': 'shooting-star 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'spin-reverse': 'spin-reverse 14s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
