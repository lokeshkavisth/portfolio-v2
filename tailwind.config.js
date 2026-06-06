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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        JetBrains: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        black_01: "#06060a",
        black_02: "#14141c",
        black_03: "#0c0c12",
        black_04: "#1a1a26",
        black_05: "#252532",
        white_01: "#f4f4f5",
        white_02: "#a1a1aa",
        white_03: "#fafafa",
        accent: {
          DEFAULT: "#818cf8",
          cyan: "#22d3ee",
          violet: "#a78bfa",
          muted: "rgba(129, 140, 248, 0.15)",
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(129, 140, 248, 0.35)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        wiggle: "wiggle 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(12px, -16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
