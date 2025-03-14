import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "node:path";
import pwaFile from "./public/manifest.json";

export default defineConfig({
  appType: "mpa",
  build: {
    // manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "./pages/about.html"),
      },
    },
  },

  // alias imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // plugins
  plugins: [
    // pwa plugin
    VitePWA({
      registerType: "autoUpdate",
      manifest: pwaFile,
    }),
  ],

  // server mood configs
  server: {
    open: "/",
    port: 8080,
  },
});
