export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['BPFont', 'sans-serif'], // Add your custom font
      },
      boxShadow: {
        glow: '0 0 20px -1px rgba(116, 249, 77, 1)', // Adjust color and size
      },
    },
  },
  plugins: [],
};