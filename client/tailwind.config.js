/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,  jsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
