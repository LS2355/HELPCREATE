/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{html,js,jsx}', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors:{
        "bg-color": "#111111",
        'tabs-bg': '#232323',
        'tabs': '#c9c9c9'
        
      }
    },
  },
  plugins: [],
}

