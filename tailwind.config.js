/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Electro-Graphite Color Palette (v3 — CSS variables, themeable via .light on <html>)
        // Values are defined in src/index.css (:root = dark, .light = light theme)
        'night-graphite': 'rgb(var(--night-graphite) / <alpha-value>)',
        'smoky-steel': 'rgb(var(--smoky-steel) / <alpha-value>)',
        'cloud-white': 'rgb(var(--cloud-white) / <alpha-value>)',
        'electric-cyan': 'rgb(var(--electric-cyan) / <alpha-value>)',
        'neon-blue': 'rgb(var(--neon-blue) / <alpha-value>)',
        'cyber-orange': 'rgb(var(--cyber-orange) / <alpha-value>)',
        'soft-graphite': 'rgb(var(--soft-graphite) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'accent': ['16px', { lineHeight: '1.2', fontWeight: '500' }],
        'button': ['16px', { lineHeight: '1.2', fontWeight: '600' }],
        'nav': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee, 0 0 15px #22d3ee' },
          '100%': { boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, rgb(var(--night-graphite)) 0%, rgb(var(--smoky-steel)) 100%)',
        'hero-gradient': 'linear-gradient(45deg, rgb(var(--night-graphite)), rgb(var(--smoky-steel)), rgb(var(--night-graphite)))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
