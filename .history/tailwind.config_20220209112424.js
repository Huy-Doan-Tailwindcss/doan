module.exports = {
  content: [
    "**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gray: "#8794BA",
        lightgray: "#F8F9FF",
        'gray-4': "#465B95",
        pink: "#EF2A82",
        purple: "#172755",
        divi: '#2A407C',
        'purple-100': '#0F1F4B',
        'gray-5': '#D3D9E9'
      },
      padding: {
        auto: "auto"
      },
      boxShadow: {
        blurimg: '0 10px 40px 0 #d8e1e3'
      },
      screens: {
        'sm': {'max': '448px'},
        'mobile': {'max': '639px'},
        'tablex': {'max': '767px'},
        'laptop': {'max': '1023px'},
        'xl': {'max': '1279px'},
        'desktop': {'max': '1535px'},
      }
    },
    fontFamily: { 
      roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '19px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '3xl': ['30px', '35px'],
      '5xl': ['50px', '1.2'],
      '6xl': ['60px','70px']
    },
    backgroundImage: {
      header: "url('../images/fold.png')",
      footer: "url('../images/background-bottom.png')",
    },
    // borderRadius: {
    //   '32':
    //   '68': "68px"
    // }
  },
  plugins: [],
}
