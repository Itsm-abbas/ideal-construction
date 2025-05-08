/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./app/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      title: ["Montserrat", "sans-serif"],
      subtitle: ["Poppins", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      quote: ["Playfair Display", "serif"],
    },
    colors: {
      primary: "#0a284e",
      accent: "#d4af37",
      teal: "#157a6e",
      mint: "#e6f4f1",
      lightgray: "#f2f2f2",
      grayblue: "#b4c5d1",
    },
  },
};
export const plugins = [];
