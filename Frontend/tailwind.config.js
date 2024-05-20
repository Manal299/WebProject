/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/.{js,ts,jsx,tsx}"],

  theme: {
    extend: {fontFamily: {
      'garamond': ['Cormorant Garamond', 'serif'],
      'heebo': ['Heebo', 'sans-serif'],
    },
    keyframes: {
      reveal: {
        '0%': { opacity: 0, transform: 'translateX(-10px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
    },
    animation: {
      reveal: 'reveal 1s forwards',
    },
   },
  },
  plugins: [],
};
