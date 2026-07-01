import type { Config } from 'tailwindcss';

/**
 * Global Tailwind design tokens for the IEEE GBPIET Student Branch website.
 *
 * Color and typography values are sourced from the project's design system.
 * Do NOT hardcode hex values in components — always reference these tokens
 * (or the CSS variables in `src/styles/variables.css`) so the palette can be
 * updated from a single source of truth.
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Primary Blue
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FACC15', // Golden Yellow
          foreground: '#1F2937',
        },
        background: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
        },
        text: {
          DEFAULT: '#1F2937', // Dark Text
          muted: '#6B7280', // Muted Text
        },
        border: {
          DEFAULT: '#D1D5DB',
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
      },
      screens: {
        xs: '480px',
        // sm, md, lg, xl, 2xl use Tailwind defaults (tablet/laptop/desktop)
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
