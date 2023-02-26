/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        title: '#333',
        body: '#74767c',
        everlance: '#36b59f',
        'light-grey': '#e5e7eb',
      },
      gridTemplateColumns: {
        users: 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
};
