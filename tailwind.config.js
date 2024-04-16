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
        JetBrains: "'Roobert, sans', monospace",
      },

      colors: {
        black_01: "#111111",
        white_01: "#eaeaea",
        black_02: "#2e2e2e",
        white_02: "#b1b1b1",
        black_03: "#191919",
        white_03: "#f6f6f6",
        black_04: "#242424",
        black_05: "#363636",
      },
    },
  },

  plugins: [],
};
