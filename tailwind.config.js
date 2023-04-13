/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [ './components/**/*.{html,js}',
    '*.{html,js}',
  ]
  
    ,
  darkMode: 'class',
  theme: {
 
      
      container: {
        // you can configure the container to be centered
      center: true,
        // padding:"1rem",
        // or have default horizontal padding
        
  
        // default breakpoints but with 40px removed
        screens: {
          sm: "100%",
          md: "100%",
          lg: "992px",
          xl: "1700px"
       }
     
  
    },
    extend: {
      backgroundImage: {
        'homeBg': "url('/images/hero.jpg')",

       
      },
      colors: {
        'Influencertok': '#FADD72',
        'line': '#1E1E1E',
        'bg-red': '#EA445A',
        'text-gray': '#b1b1b2',
        'bg-gray': '#1F1F1F',
      },
      boxShadow: {
        'box': '-5px 14px 32px rgba(0, 0, 0, 0.06)',
        'icon': '-2px 9px 24px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}