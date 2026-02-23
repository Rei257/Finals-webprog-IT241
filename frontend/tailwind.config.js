/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ── Cyberpunk Color Palette ── */
      colors: {
        terminal: {
          base: '#080808',
          surface: '#0f0f0f',
          muted: '#1a1a2e',
          border: '#2a2a3e',
        },
        neon: {
          pink: '#d946ef',       // fuchsia-500
          blue: '#22d3ee',       // cyan-400
          green: '#4ade80',      // for accents / success states
        },
      },
      /* ── Typography ── */
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      /* ── Glow Effects ── */
      boxShadow: {
        'neon-pink': '0 0 5px #d946ef, 0 0 20px #d946ef33',
        'neon-blue': '0 0 5px #22d3ee, 0 0 20px #22d3ee33',
        'neon-blue-lg': '0 0 10px #22d3ee, 0 0 40px #22d3ee44',
      },
      /* ── Animations ── */
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 0.15s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 2s steps(20) 1s forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.97' },
          '50%': { opacity: '0.94' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee33' },
          '100%': { textShadow: '0 0 10px #22d3ee, 0 0 30px #22d3ee66' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
