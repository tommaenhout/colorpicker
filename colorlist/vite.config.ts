import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  server: {
    origin: 'http://localhost:5174',
    port: 5174,
  },
  base: 'http://localhost:5174',
  plugins: [
    react(),
    federation({
      name: 'colorlist',
      filename: 'remoteEntry.js',
      exposes: {
        './ColorList': './src/components/ColorList.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
