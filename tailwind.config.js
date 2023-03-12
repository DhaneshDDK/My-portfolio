/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'port' :  ['Be Vietnam Pro', 'sans-serif'],
      }, 
      screens: {
        'inter': {'min': '1200px'},
         'shade' : {'min' : '1500px'},
         'low' : {'max':'768px'}
      }, 
      colors : {
           'border1' : '#ffffff30',
           'bg1' : '#ffffff1a',
           bg: '#f6f8ff',
           bgcontent: '#fefefe',
           lmtext: '#4b6a9b',
           lmtextalt: '#2b3442',
           lmiconbg: 'brightness(100%)',
           /* Btn */
           btn: '#0079ff',
           btnhover: '#60abff',
           dyn : '#4e45d5',
           gray : 'rgb(231,231,231)',
           org : '#e84949',
           bgGray : 'rgb(231,231,231);',
           bgFoot : '#343d68',
      },
    },
  },
  plugins: [],
}
