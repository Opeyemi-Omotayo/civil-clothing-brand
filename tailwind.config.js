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
        '80vh': '80vh',
      },
      backgroundImage: {
        'my-image': "url('https://img.freepik.com/free-photo/sensual-black-woman-with-beautiful-wavy-hairs-elegant-golden-satin-suit-posing-beige-wall-spring-fashion-look-full-lenght_273443-4100.jpg?w=2000&t=st=1691516259~exp=1691516859~hmac=c00721870fa5d66d37a31af6dff28e1a0725821803b0fa9a9bee29587c9aa35a')",
        'banner-1': "url('https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-red-dress_23-2149553641.jpg?w=1000&t=st=1692136755~exp=1692137355~hmac=47256b3734b81c6e705fdf5bc533dfbd2afd7060a6db6c3d350eb86dac225b58')",
        'banner-2': "url('https://img.freepik.com/premium-photo/beautiful-woman-with-long-red-dress_593226-574.jpg?w=1000')",
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
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

