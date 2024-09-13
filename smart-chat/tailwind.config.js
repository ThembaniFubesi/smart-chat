/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '450': '28.125rem',
      },
      height: {
        '600': '37.5rem',
      },
      maxHeight: {
        '600': '37.5rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "valentine"],
  }
}

