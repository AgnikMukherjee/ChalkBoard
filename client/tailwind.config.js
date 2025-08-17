
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#0b5fff",
          600: "#0a4ed1",
          700: "#0a3ea3",
          800: "#0a2f75",
          900: "#0a2047",
          950: "#071533"
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(10,31,71,0.12)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
