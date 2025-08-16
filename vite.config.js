/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/investment-calculator/',
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: './setupTests.js',
    coverage: {
      include: [
        '**/src/**'
      ],
      exclude: [
        './src/index.jsx',
        '**/*.test.*',
      ]
    }
  }
})
