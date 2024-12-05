/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "3rem",
        center: true,
      },
    },
    colors: {
      primary: "#E9DED3",
      secondary: "#E9E9E9",
      tertiary: "#0B1536",
      quaternary: "#EBC400",
      number: "#A2A2A2",
    },
  },
  plugins: [],
};
