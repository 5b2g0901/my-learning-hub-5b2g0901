import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-learning-hub-5b2g0901/", // 💡 請確保這裡改成你的新專案資料夾名稱！
})