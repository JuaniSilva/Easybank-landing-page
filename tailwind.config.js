
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayishBlue: 'hsl(233, 8%, 62%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif']
      },
      backgroundImage: {
        'intro-desktop': "url('../images/bg-intro-desktop.svg')",
        'intro-mobile': "url('../images/bg-intro-mobile.svg')",
        'icon-close': "url('../images/icon-close.svg')",
        'icon-hamburger': "url('../images/icon-hamburger.svg')",
      },
      aspectRatio: {
        'cuadrado': '1/1'
      },
      spacing: {
        '11px': '11px',
        'modal-width': '90%',
        'title': '15ch',
        'pad-top': '72px',
        'space-top': '62px',
      },
      borderRadius: {
        '5xl': '2rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
