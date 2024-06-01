


const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FuturaExBold: ['FuturaExBold'],
        FuturaBold: ['FuturaBold'],
        FuturaBook: ['FuturaBook'],
        FuturaDemi: ['FuturaDemi'],
        FuturaHeavy: ['FuturaHeavy'],
        FuturaLight: ['FuturaLight'],
        FuturaMedium: ['FuturaMedium'],
      },
      colors: {
        'bggray' : '#F7F7F7',
        'primarycolor': "#002038",
        'secondrycolor': "#008726",
        'fontlight': "#2A2A2A",
        'fontdark': "#828282",
        'dangercolor': "#C60000" 
      },
    },
  },
  plugins: [],
})