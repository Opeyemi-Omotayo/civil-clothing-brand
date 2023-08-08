/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2915C",
        secondary: "#171218",
        normal: "#FFFFFF",
      },
      height: {
        '95vh': '95vh',
      },
      backgroundImage: {
        'my-image': "url('https://img.freepik.com/free-photo/sensual-black-woman-with-beautiful-wavy-hairs-elegant-golden-satin-suit-posing-beige-wall-spring-fashion-look-full-lenght_273443-4100.jpg?w=900&t=st=1691516259~exp=1691516859~hmac=c00721870fa5d66d37a31af6dff28e1a0725821803b0fa9a9bee29587c9aa35a')",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        verticalBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        verticalBounce: 'verticalBounce 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

