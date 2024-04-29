/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', /* src folder, for example */
  'node_modules/flowbite-react/lib/esm/**/*.js',
],

  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
};