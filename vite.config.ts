import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    svgr({
      svgrOptions: {
        icon: true
      },
      include: '**/*.svg'
    })
  ],
  publicDir: path.resolve(__dirname, 'assets'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@providers': path.resolve(__dirname, './src/app/providers'),
      '@ui': path.resolve(__dirname, './src/shared/components/ui'),
      '@images': path.resolve(__dirname, './assets/images'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@consts': path.resolve(__dirname, './src/shared/consts'),
      '@appTypes': path.resolve(__dirname, './src/shared/types'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@icons': path.resolve(__dirname, './assets/icons'),
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@store': path.resolve(__dirname, './src/shared/store')
    }
  }
});
