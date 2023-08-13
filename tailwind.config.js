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
        'service-image': 'linear-gradient(0deg,rgba(5, 50, 91, 0.84),rgba(8, 33, 63, 0.97)), url(https://actualicese.com/_ig/img/fotos/calculadora-calculo-finanzas-contabi.jpg)',
        'feature-image': 'linear-gradient(0deg,rgba(5, 50, 91, 0.84),rgba(8, 33, 63, 0.97)), url(https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg)',
        'about-us-image': 'linear-gradient(0deg,rgba(5, 50, 91, 0.84),rgba(8, 33, 63, 0.97)), url(https://censusuy.com/wp-content/uploads/2021/03/background_black.png)',
        'coment-image': 'linear-gradient(0deg,rgba(5, 50, 91, 0.84),rgba(8, 33, 63, 0.97)), url(https://img.freepik.com/fotos-premium/fondo-pantalla-imagen-cubos-palabra-cubos_744422-2023.jpg)'
      })
    },
    /**screens: {
      breakpoints extras
    }**/
  },
  plugins: [],
}