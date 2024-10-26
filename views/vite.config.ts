import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import solid from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid()],
  server: { port: 3000, strictPort: true },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // optimizeDeps: {
  //   force: true,
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },
  // base: '/dist'
  build: {
    // outDir: "../static/",
    emptyOutDir: true,
    rollupOptions: {
      input: "main.js",
    }
  }
});
