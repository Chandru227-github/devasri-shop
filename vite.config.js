import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['devasri.shop', 'www.devasri.shop']
  },
  server: {
    allowedHosts: ['devasri.shop', 'www.devasri.shop']
  }
})
