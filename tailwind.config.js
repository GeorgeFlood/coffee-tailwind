/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backGroundImage: {
        "mobile-index":
          "url('./src/assets/home/mobile/image-hero-coffeepress.jpg')",
        "table-index-hero":
          "url('./src/assets/home/tablet/image-hero-coffeepress.jpg')",
        "desktop-index-hero":
          "url('./src/assets/home/desktop/image-hero-coffeepress.jpg)')",
      },
      colors: {
        "custom-green": "#0D8784",
        "custom-biege": "#FED6BA",
      },
    },
  },
  plugins: [],
};
