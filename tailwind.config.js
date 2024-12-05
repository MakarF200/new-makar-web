/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      purple: {
        50 : '#faf5ff',
        100 : '#f3e8ff',
        200 : '#ddd6fe',
        300 : '#c4b5fd'
      },
      gray: {
        50 : '#f9fafb',
        100 : '#f3f4f6',
        200 : '#e5e7eb',
        300 : '#d1d5db'
      }
    }
  },
  plugins: [
    daisyui,
  ],
}
