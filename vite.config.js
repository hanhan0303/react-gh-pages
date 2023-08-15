import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  //編譯的路徑，會判斷是屬於開發中dev、產品路徑build
  base: process.env.NODE_ENV === 'production' ? '/react-gh-pages/' : '/',
  plugins: [react()],
});
