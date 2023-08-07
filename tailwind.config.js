/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        'main-image': 'linear-gradient(0deg,rgba(5, 50, 91, 0.84),rgba(8, 33, 63, 0.97)), url(https://img.freepik.com/foto-gratis/dos-hombres-negocios-dandose-mano_1423-77.jpg?)',
        'service-image': 'linear-gradient(0deg,rgba(5, 50, 91, 0.84),rgba(8, 33, 63, 0.97)), url(https://actualicese.com/_ig/img/fotos/calculadora-calculo-finanzas-contabi.jpg)'
      })
    },
    /**screens: {
      breakpoints extras
    }**/
  },
  plugins: [],
}