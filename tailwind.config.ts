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
      accent: "#F36805",
      "accent-secondary": "#FF8000",
      "homepage-gray": " #F5F3F1",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
  },
  plugins: [],
};
export default config;
