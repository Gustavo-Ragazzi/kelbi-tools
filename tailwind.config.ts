import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'secondary': '#f28930',
      'onPrimary': '#7d7f83',
      'surface': '#262626',
      'discord': '#7289da',
      'background': '#121212',
      'danger': '#b9261c',
      'successful': '#5cb85c',
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  },
};
export default config;
