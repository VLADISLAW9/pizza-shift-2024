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
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false
            }
          ]
        }
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
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@_types': path.resolve(__dirname, './src/shared/types'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@store': path.resolve(__dirname, './src/shared/store')
    }
  }
});
