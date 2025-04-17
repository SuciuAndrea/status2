import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"
import path from "path" // ⬅️ Ai nevoie de asta

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      manifest: {
        theme_color: "#169bcb",
        icons: [
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    }),
    tailwindcss(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // ⬅️ Asta rezolvă importul
    }
  },
  server: {
    fs: {
      allow: [".."]
    }
  }
})
