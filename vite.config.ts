// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/tarot-game/', // ⬅️ 關鍵
  plugins: [react()],
})
