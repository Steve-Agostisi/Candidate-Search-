import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()], 
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to allow external access
    port: parseInt(process.env.PORT || '3000'), // Use Render's PORT environment variable or default to 3000
  }, 
  preview: {
    host: '0.0.0.0', // Ensure preview also binds to 0.0.0.0
    port: parseInt(process.env.PORT || '3000'),
  },
});
