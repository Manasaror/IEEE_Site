import type { Config } from 'tailwindcss';

/**
 * IEEE GBPIET Student Branch — Tailwind Design System
 *
 * Sourced from official IEEE Brand Guidelines & modern engineering aesthetics.
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#292929', // PRIMARY BACKGROUND
          secondary: '#303030', // SECONDARY BACKGROUND / CARDS
          darker: '#1F1F1F', // DARKER BACKGROUND / FOOTER
        },
        nav: {
          blue: '#1E5F88', // NAVIGATION BLUE
        },
        ieee: {
          blue: '#1E5F88',
          accent: '#0077B6', // IEEE ACCENT BLUE
          bright: '#1689C9', // OPTIONAL BRIGHT ACCENT
          deep: '#103952',
        },
        primary: {
          DEFAULT: '#0077B6',
          foreground: '#F5F5F5',
          blue: '#1E5F88',
          accent: '#0077B6',
        },
        content: {
          primary: '#F5F5F5', // PRIMARY TEXT
          secondary: '#C9C9C9', // SECONDARY TEXT
          muted: '#9CA3AF', // MUTED TEXT
        },
        surface: {
          DEFAULT: '#292929',
          card: '#303030',
          darker: '#1F1F1F',
          border: '#3A3A3A',
        },
        border: {
          DEFAULT: '#3A3A3A',
          subtle: '#3A3A3A',
          accent: '#0077B6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'ui-monospace', 'monospace'],
        tech: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem', // 8px
        sm: '0.375rem', // 6px
        md: '0.5rem', // 8px
        lg: '0.625rem', // 10px
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
