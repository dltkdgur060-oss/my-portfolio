/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Nest Hub Max 전용 (1280x800)
        'nest': { 'raw': '(min-width: 1024px) and (max-height: 850px)' },
      }
    },
  },
  plugins: [],
}