/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07070A',
          900: '#0B0B0F',
          850: '#101017',
          800: '#12121A',
          700: '#1A1A26',
          600: '#262638',
        },
        neon: {
          magenta: '#D926A9',
          purple: '#B5179E',
          violet: '#8A2BE2',
          cyan: '#00D2FF',
          blue: '#4361EE',
          amber: '#FFAA00',
        }
      },
      fontFamily: {
        heading: ['"Syne"', 'Montserrat', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'neon-magenta': '0 0 25px rgba(217, 38, 169, 0.45)',
        'neon-magenta-lg': '0 0 50px rgba(217, 38, 169, 0.6)',
        'neon-cyan': '0 0 25px rgba(0, 210, 255, 0.45)',
        'neon-cyan-lg': '0 0 50px rgba(0, 210, 255, 0.6)',
        'neon-violet': '0 0 35px rgba(138, 43, 226, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
