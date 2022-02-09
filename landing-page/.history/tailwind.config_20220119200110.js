module.exports = {
  content: [
    "**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gray: "#8794BA",
        lightgray: "#F8F9FF"
      }
    },
    fontFamily: { 
      roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '5xl': ['50px', '1.2'],
    },
    backgroundImage: {
      header: "url('../images/fold.png')",
      footer: "url('../images/background-bottom.png')",
    }
  },
  plugins: [],
}
