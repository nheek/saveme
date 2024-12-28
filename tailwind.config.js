/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxxxs: "300px",
      xxxs: "350px",
      xxs: "400px",
      xxs: "500px",
      xs: "580px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      display: ["Bowlby One"],
      body: ["Share Tech Mono"],
    },
    fontSize: {
      xxs: ["12px"],
      xs: ["14px"],
      s: ["16px"],
      m: ["20px"],
      l: ["24px"],
      xl: ["28px"],
      xxl: ["32px"],
    },
    extend: {},
  },
  plugins: [],
};
