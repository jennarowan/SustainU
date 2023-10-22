/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Inter var", sans-serif'],
    },
  },
  plugins: [],
};
