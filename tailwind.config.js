/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-orange': '#FF6B35',
        'pizza-red': '#E63946',
        'hack-green': '#00FF88',
        'hack-purple': '#9D4EDD',
        'hack-blue': '#4CC9F0',
        'dark-bg': '#0A0A0F',
        'card-bg': '#12121A',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #FF6B35, 0 0 40px #FF6B35' },
          '100%': { boxShadow: '0 0 40px #FF6B35, 0 0 80px #FF6B35' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
