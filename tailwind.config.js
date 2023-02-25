/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#333',
        everlance: '#36b59f',
      },
      gridTemplateColumns: {
        users: 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
};
