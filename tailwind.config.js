/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode:"class",
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1150px',
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
        "232":"232px",
        "544":'544px',
        "1120":"1120px"
      },
      minHeight:{
        "calc":"calc(100vh - 100%)",
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
        "376-5":"376.5px",
        "480":'480px',
        "544":'544px',
        "683":'683px',
        "736":'736px',
        "760":'760px',
        "1120":"1120px",
        "calc":"calc(100vw - 148px)"
      },
      height:{
        "06":'6px',
        "014":'14px',
        "34":'34px',
        "060":'60px',
        "172":'172px',
        "978":'978px',
        "20%":"20%",
        "30%":"30%",
        "65%":"65%",
        "75%":"75%",
        "85%":"85%",
        "93%":"93%",
        "calc":"calc(100vh - 64px)",
        "calc-1":"calc(100vh - 15%)",
        "calc-2":"calc(100vh - 56px)"
      },
      lineHeight:{
        "010":'10px',
        "14.52":"14.52px",
        "16-8":'16.8px',
        "16-9":"16.94px",
        "19-2":'19.2px',
        "19-6":'19.6px',
        "21-6":"21.6px",
        "21":"21px",
        "25-6":"25.6px"
      },
      padding:{
        "09":'9px',
        "010":'10px',
        "011":'11px',
        "13":'13px',
        "014":'14px',
        "13.5":'13.5px',
        "15":'15px',
        "018":'18px',
        "21":'21px',
        "23":'23px',
        "26":'26px',
        "27":'27px',
        "030":'30px',
        "57":'57px',
        "61":'61px',
        '172':"172px",
        "9%":'9%',
        "24%":'24%',
        "100%":'100%',
      },
      colors:{
        "anti-flash-white":'#f2f4f8',
        "new-car-8":'#1757d914',
        "chinese-black":"#121212",
        "charleston-green":"#242933",
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
        "Lavender-60":"#e5eaf599",
        "grape":'#612DAE',
        "pale-pink":'#F5D6D6',
        "silver-sand":"#B6BBC6",
        "alice-blue":"#f4f6fbde",
        "pale-cerulean":"#A5BAE3",
        "black-coral":"#585D68",
        "metallic-silver":"#9FA4AF",
        "yellow-green-20":"#22c21533",
        "aquamarine":"#78FCC5",
        "baker-miller-pink":"#FF9EB0",
        "outer-space":"#434853",
        "baker-miller-pink-08":"#ff9eb014",
        "green-dark":"#1A9310",
        "gray-300":"#D9D9D9",
        "black-14":"#00000014"
      },
      backgroundImage:{
        "user-dropdowm":"url('../Image/user-dropdown.svg')",
        "user-dropdown-dark":"url('../Image/user-dropdown-dark.svg')",
        "logo-in-light":"url('../Image/logo-light.svg')",
        "logo-in-dark":"url('../Image/logo-dark.svg')",
        "usa":"url('../Image/usa.svg')",
        "composer-bg":"url(../Image/composor-canva.svg)"
      },
      inset:{
        "02":'2px',
        "03":'3px',
        "2%":'2%',
        "3%":'3%',
        "5%":'5%',
        "8%":'8%',
        "10%":'10%',
        "12%":'12%',
        "14%":'14%',
        "16%":'16%',
        "17%":'17%',
        "18%":'18%',
        "20%":'20%',
        "28%":'28%',
        "29%":'29%',
        "30%":'30%',
        "35%":'35%',
        "36%":'36%',
        "40%":'40%',
        "43%":'43%',
        "46%":'46%',
        "49%":'49%',
      },
      gap:{
        "056":"56px",
      },
      borderWidth:{
        "02":"2px",
      },
      zIndex:{
        '99':'99',
        '111':'1111'
      },
      translate:{
        "376-5":"376.5px",
      },
    },
  },
  variants: {
    extend: {
      colors: ['dark', 'dark-hover', 'dark-group-hover'],
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  require('tailwind-scrollbar'),
    
  ],
}
