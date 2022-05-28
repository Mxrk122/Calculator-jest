import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    '@emotion',
    {
      // sourceMap is on by default but source maps are dead code eliminated in production
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      cssPropOptimization: true,
    },
  ],
})
