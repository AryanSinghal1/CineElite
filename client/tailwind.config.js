/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,  jsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px',
  
  },
    extend: {
      colors:{
        'cineBlue': "#141C31",
        'billingBlue': "#072448",
        "background": "#EEEEEE"
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
