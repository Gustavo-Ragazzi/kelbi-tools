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
      'onPrimary': '#7D7F83',
      'surface': '#262626',
      'discord': '#7289DA',
      'background': '#121212',
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
