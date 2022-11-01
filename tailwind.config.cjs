/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-page": "#000212",
        "footer-landing-1": "#000212",
        "footer-landing-2": "#09061E",

        "button-gradient-1": "#673FD7",
        "button-gradient-2": "#455EB5",

        "grey-1": "#454343",
        "grey-2": "#B4BCD0",
        "grey-3": "#C9C9C9",
        "grey-4": "#FFFFFF",

        "purple-1": "#575BC6",
        "purple-2": "#B59BFF",

        "msg-error": "#601212",
        "btn-del": "#8D1414",
      },
      margin: {
        leftLibs: "0 0 0 20%",
      },
      height: {
        "heightSection": "85vh",
      },
    },
  },
  plugins: [],
};
