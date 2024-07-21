/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#2f2f2f",
        "text-primary": "#fff",
      }
    },
  },
  plugins: [],
}

