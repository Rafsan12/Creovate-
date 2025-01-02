/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "calm-gradient":
          "linear-gradient(135deg, #000000 0%, #434343 50%, #1F1F1F 100%)",
        "white-gradient-text":
          "linear-gradient(90deg, #ffffff, #e5e5e5, #cccccc)",
        "horizontal-gradient":
          "linear-gradient(to right, #ffffff, #e5e5e5, #cccccc)",
      },
      animation: {
        "gradient-move": "gradient-move 3s ease infinite",
      },
      keyframes: {
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
