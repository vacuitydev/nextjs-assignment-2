import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "palette-darkest": "#051623",
        "palette-dark": "#05204A",
        "palette-brand": "#EFF2C0",
        "palette-brand-dull": "#BEA57D",
        "palette-accent": "#8f250c",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
