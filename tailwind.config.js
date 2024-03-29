const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...fontFamily.sans],
      serif: ["Scope One", ...fontFamily.serif],
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1264px",
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        text: "#464646",
        primary: "#da3c13",
        secondary: "#4b7fae",
        link: "#008068",
        body: "#fbf5ee",
        border: "#fcece7",
        pink: "#eec2cb",
        "gray-lighter": "#dbdbdb",
        gray: "#767775",
        "gray-darker": "#5f635d",
        error: "#ee2000",
        success: "#008068",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
