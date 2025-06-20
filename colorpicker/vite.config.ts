import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  server: {
    origin: 'http://localhost:3000',
    port: 3000,
  },
  base: "http://localhost:3000",
  plugins: [
    react(),
    federation({
      name: 'colorpicker',
      manifest: true,
      remotes: {
        picker: {
          type: "module",
          name: "picker",
          entry: "http://localhost:5173/remoteEntry.js",
        },
        colorlist: {
          type: "module",
          name: "colorlist",
          entry: "http://localhost:5174/remoteEntry.js",
        },
        useColors: {
          type: "module",
          name: "useColors",
          entry: "http://localhost:5173/remoteEntry.js",
        },
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