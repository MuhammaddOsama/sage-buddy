/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screen: {
        sm: "567px",
        md: "767px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
    colors: {
      green: "#04AA77",
      orange: "#FD5631",
      white: "#FFFFFF",
      grey: "#1F1B2D",
      "gray-300": "rgba(31, 27, 45, 0.1)",
      "gray-200": "rgba(31, 27, 45, 0.3)",
      "gray-400": "#e8e8ea",
      "light-gray": "#3A3646",
      "white-100": "rgb(0, 0, 0, 0.05)",
      blue: "#075985",
    },

    extend: {
      backgroundImage: {
        "hero": "url('/images/1.jpg')",
        
      },
    },
  },
  plugins: [],
};
