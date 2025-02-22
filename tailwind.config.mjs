/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1B1E",
        foreground: "#C1C2C5",
        customBorder: "#2C2E33",
        secondaryColor: "#87CEEB",
        boxColor: "#25262B",
      },
    },
  },
  plugins: [],
};
