import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Course-Syllabus/", // 🔥 Thêm chính xác dòng này vào đây
})