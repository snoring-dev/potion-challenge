import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const plugins = [
  react(),
  dts({
    insertTypesEntry: true,
    exclude: [
      "**/*.stories.ts",
      "**/*.stories.tsx",
      "**/*.test.ts",
      "**/*.test.tsx",
    ],
  }),
];

const buildConfig = {
  lib: {
    entry: resolve(__dirname, "src/index.ts"),
    name: "PotionUI",
    fileName: (format: string) => `index.${format}.js`,
  },
  rollupOptions: {
    external: ["react", "react-dom"],
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      assetFileNames: (assetInfo: { name?: string }) => {
        if (assetInfo.name === 'index.css') return 'index.css';
        return assetInfo.name || '';
      },
    },
  },
  cssCodeSplit: false,
};

const cssConfig = {
  postcss: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss, autoprefixer] as any[],
  },
};

const resolveConfig = {
  alias: {
    "@": resolve(__dirname, "src"),
  },
};

const config: UserConfig = {
  plugins,
  build: buildConfig,
  css: cssConfig,
  resolve: resolveConfig,
};

export default defineConfig(config);