import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

const pwa = VitePWA({
  registerType: "autoUpdate",

  devOptions: {
    enabled: true, // Important for dev testing
  },

  manifest: {
    name: "Papara Fintech",
    short_name: "Papara",
    description: "Papara PWA",
    theme_color: "#0B0D10",
    background_color: "#0B0D10",
    display: "standalone",
    start_url: "/",

    icons: [
      {
        src: "/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools(), pwa],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@composables": fileURLToPath(
        new URL("./src/composables", import.meta.url)
      ),
      "@fonts": fileURLToPath(new URL("./src/assets/fonts", import.meta.url)),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
    },
  },
});
