import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#9B82F5',
      },
      height: {
        'screen-header': 'calc(100vh - 56px)',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
export default config
