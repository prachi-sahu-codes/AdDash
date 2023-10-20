/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        logo:"1.4rem"
      },
      colors: {
        "custom-orange": "#ff823c",
        "custom-blue": "#0096ff",
        "custom-gray": "#323c46",
        "light-text": "#989da2",
        "medium-text": "#686f76",
        "dark-text": "#333d47",
      },
      boxShadow: {
        "custom-md": "rgba(99, 99, 99, 0.2) 0px 2px 6px 0px",
      },
    },
  },
  plugins: [],
};
