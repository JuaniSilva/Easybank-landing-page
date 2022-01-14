module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
      backgroundImage: {
        "intro-desktop": "url('../images/bg-intro-desktop.svg')",
        "intro-mobile": "url('../images/bg-intro-mobile.svg')",
        "icon-close": "url('../images/icon-close.svg')",
        "icon-hamburger": "url('../images/icon-hamburger.svg')",
        "image-currency": "url('../images/image-currency.jpg')",
        "image-restaurant": "url('../images/image-restaurant.jpg')",
        "image-plane": "url('../images/image-plane.jpg')",
        "image-confetti": "url('../images/image-confetti.jpg')",
      },
      aspectRatio: {
        cuadrado: "1/1",
      },
      spacing: {
        "11px": "11px",
        "modal-width": "90%",
        title: "15ch",
        "pad-top": "72px",
        "pad-top-desk": "108px",
        "space-top": "62px",
        "article-image": "100px",
      },
      borderRadius: {
        "5xl": "2rem",
      },
      gridTemplateRows: {
        layout: "116px minmax(0, 1fr)",
        "article-layout": "40px 1fr",
      },
      fontSize: {
        title: [
          "22px",
          {
            lineHeight: "26px",
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
