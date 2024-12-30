import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true,
    proxy: {
      '/api': {
        target: 'https://newyearium-backend.onrender.com/api', // Укажите порт, на котором работает ваш API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
