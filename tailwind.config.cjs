/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      "888px": "55.5rem",
    },

    extend: {
      boxShadow: {
        "btn-register": "1px 4px 18px 4px rgba(87, 91, 198, 1)",
      },

      colors: {
        "bg-page": "#000212",

        "bg-form": "#0D0F19",
        "bg-formRegister": "#0D0F19",

        "footer-landing-1": "#000212",
        "footer-landing-2": "#09061E",

        "button-gradient-1": "#673FD7",
        "button-gradient-2": "#455EB5",
        "button-register": "#575BC6",

        "border-Inputs": "#292A35",

        "grey-1": "#454343",
        "grey-2": "#B4BCD0",
        "grey-3": "#C9C9C9",
        "grey-4": "#FFFFFF",
        "grey-5": "#86878c",
        "alternative-grey": "#D9D9D9",

        "purple-1": "#575BC6",
        "purple-2": "#B59BFF",

        "msg-error": "#8D1414",
        "btn-del": "#8D1414",

        "icon-checked": "#087F5B"
      },
      visibility: ["group-hover"],
      margin: {
        leftLibs: "0 0 0 20%",
      },
      height: {
        heightSection: "85vh",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
