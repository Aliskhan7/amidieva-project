import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "#FF4D4D",
        success: "#65DC78",
        gray: {
          200: "#D8D8D8",
          300: "#979797",
          400: "#707070",
        },
        gold: {
          400: "#A18A68",
        },
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "157%",
            letterSpacing: "-0.14px",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "169%",
            letterSpacing: "-0.14px",
            fontWeight: "400",
          },
        ],
        xl: [
          "20px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.46px",
          },
        ],
        "2xl": [
          "23px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.46px",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "33px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.72px",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
