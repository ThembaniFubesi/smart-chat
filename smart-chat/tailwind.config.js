/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        450: "28.125rem",
      },
      height: {
        600: "37.5rem",
      },
      maxHeight: {
        600: "37.5rem",
      },
      boxShadow: {
        header: 'rgba(0, 0, 0, 0.16) 0px 2px 18px 0px',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "valentine",
      {
        wc: {
          primary: "rgb(74, 144, 226)",
          "base-300": "rgb(241, 242, 249)",
          secondary: "#00ff00",
          accent: "#00ff00",
          neutral: "#ffffff",
          "neutral-content": "rgb(47, 50, 74)",
          "base-100": "#ffffff",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
          "primary-content": "#ffffff",
          "--rounded-box": "5px",
        },
      },
    ],
    darkTheme: false,
  },
};
