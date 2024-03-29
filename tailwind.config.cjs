/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,svelte,html}"],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#333',
        'gray-darker': '#151515'
      },
      spacing: {
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        88: "88px",
        96: "96px",
        104: "104px",
        112: "112px",
      },
      fontSize: {
        8: "8px",
        12: "12px",
        14: "14px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
      },
      borderRadius: {
        DEFAULT: "4px",
        md: "8px",
        xl: "14px",
        full: "9999px",
      },
      animation: {
        slideIn: "slideIn .2s ease-in-out",
        slideOut: "slideOut .2s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
