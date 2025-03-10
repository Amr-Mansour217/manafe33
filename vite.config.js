// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/manafe33/' // 👈 استبدل repository-name باسم مستودعك على GitHub
})