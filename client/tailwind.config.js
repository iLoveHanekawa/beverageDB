/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        25: .25
      },
      width: {
        nvw: "97vw"
      },
      height: {
        nvh: "95vh",
        hvh: "50vh"
      },
      colors: {
        purple: {
          wisteria: '#875F9A',
          bellflower: '#5D3F6A'
        }
      },
      fontFamily: {
        nunito: 'Nunito, sans-serif',
        inter: 'Inter, sans-serif',
        poppins: 'Poppins, sans-serif',
        roboto: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
