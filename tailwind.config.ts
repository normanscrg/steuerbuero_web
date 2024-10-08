import type { Config } from 'tailwindcss'; // Importiere den Typ

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#f9f6f2',
        accent: '#d1b290', // Deutlich dunklerer Beigeton
        cta: '#00509e',
        'cta-hover': '#003f7d',
        link: '#333',
      },
      spacing: {
        100: '100px',
        1200: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
