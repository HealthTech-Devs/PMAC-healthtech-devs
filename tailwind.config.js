/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",

  ],
  variants: {
    extend: {
      backgroundColor:['active'],
    },
 

  },
  theme: {
    colors: {
      'red': '#840029',
      'bred': '#ef4444',
      'gray': '#C8C9C7',
      'gold': '#FDB913',
      'black': '#000000',
      'bgold': '#EFDBB2',
      'white': '#f8fafc',
      'bogold': '#bd955a',
      'green': '#22c55e'
    }
  },
  plugins: [
   
    require('@tailwindcss/forms'),
  ],
 
  
}
