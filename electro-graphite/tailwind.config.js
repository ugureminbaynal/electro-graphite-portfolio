/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'night-graphite': '#0f0f0f',
        'smoky-steel': '#1f1f1f',
        'cloud-white': '#e0e0e0',
        'electric-cyan': '#00ffff',
        'neon-blue': '#2979ff',
        'cyber-orange': '#ff6f00',
        'soft-graphite': '#2c2c2c',
        'text-muted': '#a0a0a0',
        'text-secondary': '#c7c7c7',
      },
      fontFamily: {
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 