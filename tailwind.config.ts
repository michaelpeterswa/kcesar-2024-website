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
        'esar-green' : '#026737',
      },
      fontFamily: {
        'neuzeit': ["neuzeit-grotesk", 'sans-serif'],
        'stratum': ["stratum-2-web", 'sans-serif'],
        'brothers': ["brothers", 'sans-serif'],
        'gin': ["gin", 'serif'],
        'komet': ["komet", 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
