/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0A192F',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'slate': '#8892B0',
        'light-slate': '#A8B2D1',
        'lightest-slate': '#CCD6F6',
        'white': '#E6F1FF',
        'cyan': '#64FFDA',
        'purple': '#C77DFF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
