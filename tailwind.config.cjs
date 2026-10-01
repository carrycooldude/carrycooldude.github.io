/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          bg: "#ffffff",
          subtle: "#fafaf9",
          card: "#ffffff",
          border: "#e5e7eb",
          borderDashed: "#d1d5db",
          ink: "#18181b",
          muted: "#52525b",
          red: "#dc2626",      // Crimson ink
          blue: "#2563eb",     // Royal blue ink
          code: "#f4f4f5",
        },
        darkPaper: {
          bg: "#0c0e14",
          subtle: "#12151f",
          card: "#161a26",
          border: "#232838",
          borderDashed: "#2e354a",
          ink: "#f1f5f9",
          muted: "#94a3b8",
          code: "#08090d",
        }
      },
      fontFamily: {
        sans: ['"Kalam"', '"Caveat"', 'cursive', 'system-ui', 'sans-serif'],
        hand: ['"Kalam"', '"Caveat"', '"Architects Daughter"', 'cursive'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        serif: ['"Kalam"', '"Caveat"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};