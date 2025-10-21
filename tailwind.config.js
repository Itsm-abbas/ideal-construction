/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-montserrat)",
        subtitle: "var(--font-poppins)",
        body: "var(--font-roboto)",
        quote: "var(--font-playfair)",
      },
      colors: {
        primary: "#0a284e",
        accent: "#d4af37",
        teal: "#157a6e",
        mint: "#e6f4f1",
        lightgray: "#f2f2f2",
        grayblue: "#b4c5d1",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
