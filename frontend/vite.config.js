import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const backendUrl = 'https://binks-ecommerce-backend.vercel.app';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':"http://localhost:7000"
    },
  },
});
