/** @type {import("tailwindcss").Config} */
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "16px",
        xl: "46px",
      },
      screens: {
        DEFAULT: "1464px", // 1440 + 12*2
        md: "1472px", // 1440 + 16*2
        xl: "1534px", // 1440 + 47*2
      },
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "body-bg": "#0F0F0F",
        "text-primary": "#EDEDED",
        "card-bg": "#161616",
        "button-primary": "#E9532F",
      },
      screens: {
        xs: "640px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};


