/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#C1282D",
        secondary: "#FBB03C",
        darkColor: "#010101",
        lightColor: "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-section": "url('/images/hero-section-img.webp')",
        "service-0": "url('/images/service-prototyping.webp')",
        "service-1": "url('/images/service-parts-from-composite-materials.webp')",
        "service-2": "url('/images/service-models-tools.webp')",
        "service-3": "url('/images/services-small-series.webp')",
        "service-4": "url('/images/service-thermo-vacuum.webp')",
        "logo-sigit": "url('/images/logo_sigit_top.png')",
        "logo-temp": "url('/images/logo_temp.png')",
      },
    },
  },

  plugins: [],
};
