/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#06070A',
        },
        surface: {
          base: '#0A0C10',
          elevated: '#10131A',
          elevated2: '#161A23',
        },
        border: {
          subtle: 'rgba(255,255,255,0.07)',
          DEFAULT: 'rgba(255,255,255,0.12)',
          strong: 'rgba(255,255,255,0.20)',
        },
        ink: {
          primary: '#F5F6F8',
          secondary: '#A7ADBA',
          tertiary: '#6B7280',
        },
        accent: {
          DEFAULT: '#E31A94',
          strong: '#E843A7',
          dim: '#660B42',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Iowan Old Style', 'Georgia', 'serif'],
        body: ['"Inter"', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Consolas', 'monospace'],
        arabic: ['"Tajawal"', '"Segoe UI"', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 8px -2px rgba(0,0,0,0.4)',
        md: '0 12px 32px -8px rgba(0,0,0,0.5)',
        lg: '0 24px 64px -16px rgba(0,0,0,0.6)',
        'accent-glow': '0 8px 24px -8px rgba(227,26,148,0.35)',
      },
      backgroundColor: {
        'accent-wash': 'rgba(227,26,148,0.10)',
        'accent-wash-2': 'rgba(227,26,148,0.18)',
      },
      animation: {
        'aurora-drift': 'auroraDrift 22s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        auroraDrift: {
          '0%': { transform: 'translate(-4%, -2%) scale(1)' },
          '100%': { transform: 'translate(4%, 3%) scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
