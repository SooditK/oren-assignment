/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-gray": "#F0F4F8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
