/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  colors: {
    brand: "#6919ff",
    neutrals: {
      900: "#0f1922",
      700: "#1f2731",
      500: "#2d353e",
      50: "#fffefa",
    },
    "success-cyan": "#48e3aa",
    "alert-red": "#ff4665",
  },
  plugins: [],
}
