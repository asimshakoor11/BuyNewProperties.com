


const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custommd': {'max': '718px'},
        'customlg': {'max': '960px'},
        'custommax': {'max': '550px'},
        'custommaxforSDP': {'max': '1200px'},
        'customminforSDP': {'min': '1200px'},
      },
      fontFamily: {
        BebasNeueSemiExpBold: ['BebasNeueSemiExpBold'],
        Shippori_Mincho: ['Shippori_Mincho'],
        Playfair: ['Playfair'],
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