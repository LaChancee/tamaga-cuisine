/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F7A4A4",

          secondary: "#FEBE8C",

          accent: "#FFFBC1",

          neutral: "#282F3E",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#B6E2A1",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
