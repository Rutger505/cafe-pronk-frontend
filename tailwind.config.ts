import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#EBE9E8",
      tertiary: "#242E30",
      accent: "#01001C",
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "32px",
    },
    boxShadow: {
      bottom:
        "0px 2px 6px 0px rgba(0, 0, 0, .04), 0px 8px 12px -2px rgba(0, 0, 0, .06), 0px 4px 6px 0px rgba(0, 0, 0, .04)",
      left: "-4px 0px 6px 0px rgba(0, 0, 0, .04)",
    },
    borderRadius: {
      small: "4px",
      normal: "12px",
      button: "9999px",
    },
  },
  plugins: [],
};
export default config;
