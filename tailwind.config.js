/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      "inter":['Inter','sans-serf'],
    },
    extend: {
      maxWidth:{
        
        "84":'84px',
      },
      width:{
        "02":'2px',
        "06":'6px',
        "022":'22px',
        "84":'84px',
        "132":"132px",
        "146":"146px",
        "150":"150px",
        "154":"154px",
        "156":"156px",
        "184.67":"184.67px",
        "232":'232px',
        "544":'544px',
        "683":'683px',
        "736":'736px',
        "760":'760px',
      },
      height:{
        "06":'6px',
        "014":'14px',
        "34":'34px',
        "172":'172px',
        "978":'978px',
        "20%":"20%",
        "30%":"30%",
        "65%":"65%",
        "75%":"75%",
        "85%":"85%",
        "calc":"calc(100vh - 64px)"
      },
      lineHeight:{
        "14.52":"14.52px",
        "16-8":'16.8px',
        "19-2":'19.2px',
        "19-6":'19.6px',
        "21-6":"21.6px",
        "25-6":"25.6px"
      },
      padding:{
        "010":'10px',
        "13":'13px',
        "014":'14px',
        "13.5":'13.5px',
        "15":'15px',
        "018":'18px',
        "26":'26px',
        "27":'27px',
        "030":'30px',
        "61":'61px',
        "100%":'100%',
      },
      colors:{
        "anti-flash-white":'#f2f4f8',
        "new-car-8":'#1757d914',
        "new-car":'#1757D9',
        "dark-gunmetal-60":'#1c212b99',
        "AuroMetalSaurus-32":'#70758052',
        "AuroMetalSaurus-16":"#70758029",
        "dark-gunmetal-80":'#1c212bde',
        "dark-gunmetal":'#1c212b',
        "deep-carmine-pink":'#e93939',
        "gunmetal":'#2E333E',
        "deep-carmine-pink-08":'#e9393914',
        "Lavender":"#E5EAF5",
      },
      backgroundImage:{
        "user-dropdowm":"url('../Image/user-dropdown.svg')",
        "usa":"url('../Image/usa.svg')",
      },
      inset:{
        "02":'2px',
        "03":'3px',
        "2%":'2%',
        "5%":'5%',
        "8%":'8%',
        "10%":'10%',
        "12%":'12%',
        "14%":'14%',
        "18%":'18%',
        "20%":'20%',
        "30%":'30%',
        "35%":'35%',
        "36%":'36%',
        "40%":'40%',
        "46%":'46%',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}
