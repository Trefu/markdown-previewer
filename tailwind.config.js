module.exports = {
  corePlugins: {
    preflight: false
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        ink: {
          50: '#f6f6f9',
          100: '#ececf3',
          200: '#d5d6e1',
          300: '#b1b3c7',
          400: '#878aa6',
          500: '#686b8a',
          600: '#525470',
          700: '#424358',
          800: '#383947',
          900: '#1d1e2a',
          950: '#0e0e16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.08)',
        glow: '0 0 0 1px rgb(99 102 241 / 0.18), 0 8px 24px -8px rgb(99 102 241 / 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-6px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.05)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out both',
        'slide-up': 'slideUp 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-right': 'slideRight 400ms ease-out both',
        aurora: 'aurora 18s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'aurora-light':
          'radial-gradient(60% 50% at 15% 10%, rgb(199 210 254 / 0.35) 0%, transparent 60%), radial-gradient(45% 45% at 90% 0%, rgb(167 243 208 / 0.28) 0%, transparent 60%), radial-gradient(55% 50% at 80% 100%, rgb(221 214 254 / 0.30) 0%, transparent 65%)',
        'aurora-dark':
          'radial-gradient(60% 50% at 15% 10%, rgb(99 102 241 / 0.18) 0%, transparent 60%), radial-gradient(45% 45% at 90% 0%, rgb(16 185 129 / 0.10) 0%, transparent 60%), radial-gradient(55% 50% at 80% 100%, rgb(139 92 246 / 0.14) 0%, transparent 65%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
