import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  server: {
    origin: 'http://localhost:5173',
    port: 5173,
  },
  base: 'http://localhost:5173',
  plugins: [
    react(),
    federation({
      name: 'picker', // name of the remote
      filename: 'remoteEntry.js',
      exposes: {
        './Picker': './src/components/Picker.tsx',
        './useColors': './src/hooks/useColors.ts',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
      manifest: true,
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
