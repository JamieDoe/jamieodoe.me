/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      saturate: {
        subtle: "30%",
      },
      colors: {
        background: "#090919",
        secondary: "#0F172A",
        accent: "#535C91",
        headers: "#2f2b3a",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
