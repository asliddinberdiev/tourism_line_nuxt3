import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  darkMode: "selector",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#4a28bd",
        secondary: "#4facd8",
        white: "#fcfcfc",
        black: "#111",
        paragraph: "#545454",
      },
    },
  },
};
