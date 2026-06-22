import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { existsSync } from "fs";

const rawPort = process.env.PORT || "8080";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";

async function loadReplitPlugin() {
  try {
    const m = await import("@replit/vite-plugin-runtime-error-modal");
    return m.default();
  } catch {
    return null;
  }
}

const replitPlugin = await loadReplitPlugin();

const replitDevPlugins =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? (
        await Promise.all([
          import("@replit/vite-plugin-cartographer").catch(() => null),
          import("@replit/vite-plugin-dev-banner").catch(() => null),
        ])
      ).flatMap((m) => {
        if (!m) return [];
        try {
          if (m.cartographer) {
            return m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            });
          }
          if (m.devBanner) {
            return m.devBanner();
          }
        } catch {
          return [];
        }
        return [];
      })
    : [];

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(replitPlugin ? [replitPlugin] : []),
    ...replitDevPlugins,
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
