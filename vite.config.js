import { defineConfig } from 'vite'

export default defineConfig({
  // ...your existing config
  preview: {
    allowedHosts: ['devasri.shop', 'www.devasri.shop']
  }
})
