/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warning: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        light_grayish_violet: "hsl(270, 3%, 87%)",
        dark_grayish_violet: "hsl(279, 6%, 55%)",
        very_dark_violet: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      screens: {
        sm: "375px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1200px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
