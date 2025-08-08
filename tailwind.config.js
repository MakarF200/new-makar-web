/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // 中文字体
        douyin: ['"DouyinSansBold"', "sans-serif"],
        toneoz: ['"ToneOZ-YinPZ-Tsuipita-TC"', "sans-serif"],
        // 英文字体
        homenaje: ['"Homenaje"', "sans-serif"],
        joti: ['"Joti One"', "sans-serif"],
        tangerine: ['"Tangerine"', "sans-serif"],
      },
      height: {
        "5vh": "5vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
    },
    colors: {
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
      },
      red: {
        50: "#fff2e8",
        100: "#ffd8bf",
        200: "#ffbb96",
        300: "#ff9c6e",
        400: "#ff7a45",
        500: "#fa541c",
        600: "#d4380d",
        700: "#ad2102",
        800: "#871400",
        900: "#610b00",
      },
    },
  },
  plugins: [daisyui],
};
