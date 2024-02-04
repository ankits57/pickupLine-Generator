/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Bumbbled",
      },
      backgroundImage: (theme) => ({
        "romantic-gradient": "linear-gradient(to right, #ff8c66, #ff5252)",
      }),
    },
  },
  plugins: [],
};
