import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // 👈 makes it accessible via IP and localhost
    port: 5173,   // (optional) fixes the port if you want consistency
  },
})
