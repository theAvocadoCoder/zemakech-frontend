module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '3xl': '2560px',

      '2xl': '1440px',

      'xl': '1024px',

      'lg': '768px',

      'md': '425px',

      'sm': '375px',
      
      'xs': '320px',
    },
    extend: {
      colors: {
        zemakech: "#eb7025",
        "zemakech-light": "#ffe096",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
