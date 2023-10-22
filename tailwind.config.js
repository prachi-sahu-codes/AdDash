/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "body-height": "calc(100vh - 4.1rem)",
      },
      padding: {
        "0.35rem": "0.35rem",
      },
      fontSize: {
        logo: "1.4rem",
        "1.1rem": "1.1rem",
      },
      colors: {
        "custom-orange": "#ff823c",
        "custom-gray": "#323c46",
        "custom-blue": "#0096ff",
        "custom-blue-dark": "#0187e7",
        "light-text": "#989da2",
        "medium-text": "#686f76",
        "dark-text": "#333d47",
        "bg-body": "#fafafa",
      },
      boxShadow: {
        "custom-sm": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "custom-md": "rgba(99, 99, 99, 0.2) 0px 2px 6px 0px",
      },
    },
  },
  plugins: [],
};
