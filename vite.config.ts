import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'; // التحقق مما إذا كان الوضع هو الإنتاج

  return {
    plugins: [react()],
    base: isProduction ? '/Portfolio/' : '/', // <--- استخدم '/' للتطوير و'/Portfolio/' للإنتاج
  };
});