/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    splitVendorChunkPlugin(),
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      shared: '/src/shared',
      assets: '/src/assets',
      pages: '/src/pages',
      store: '/src/store',
    },
  },
});
