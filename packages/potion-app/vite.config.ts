import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "potion-ui": path.resolve(__dirname, "../potion-ui"),
    },
  },
  build: {
    rollupOptions: {
      external: ["potion-ui"],
    },
  },
});
