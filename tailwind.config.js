module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1825c1",
        secondary: "#75fa8f",
        tertiary: "#3D3D3D",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
