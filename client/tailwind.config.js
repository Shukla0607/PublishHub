/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'),
  require('tailwind-scrollbar'),
  ],
};
// intoroduced by us in the starting to handle all the source files