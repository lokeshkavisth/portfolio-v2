/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MonoLisa: "MonoLisa",
      },

      colors: {
        my_black: "#111111",
        my_black_20: "#2e2e2e",
        my_black_40: "#363636",
        my_black_60: "#242424",
        my_black_80: "#191919",
        my_white: "#eaeaea",
        my_white_30: "#b1b1b1",
        my_white_90: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
