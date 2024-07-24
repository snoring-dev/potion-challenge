/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      fontWeight: {
        thin: '200',
        extralight: '300',
        light: '400',
        normal: '500',
        medium: '600',
        semibold: '700',
        bold: '800',
        extrabold: '900',
        black: '1000',
      },
    },
  },
  plugins: [],
}
