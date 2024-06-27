/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0.45em 0px 0px #df6d6d',
        'custom2': '0px 0.25em 0px 0px #2fb179',
      },
    },
  },
  plugins: [],
}
