/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        card:    'var(--color-card)',
        border:  'var(--color-border)',
        accent:  'var(--color-accent)',
        violet:  'var(--color-violet)',
        cyan:    'var(--color-cyan)',
        text:    'var(--color-text)',
        muted:   'var(--color-muted)',
      },
      animation: {
        'pulse-slow':  'pulse 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'glow-pulse':  'glowPulse 2s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'marquee':     'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,92,252,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(124,92,252,0.6)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='rgba(124,92,252,0.06)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
