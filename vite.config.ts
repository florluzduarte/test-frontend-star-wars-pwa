import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    includeAssets: [
      'favicon.ico',
      'apple-touch-icon.png',
      'mask-icon.svg',
      'favicon.svg',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'android-chrome-192x192.png',
      'android-chrome-512x512.png'
    ],

    manifest: {
      name: 'Star Wars PWA',
      short_name: 'SW-PWA',
      description: 'An app to find information about your favorite Star Wars heroes',
      theme_color: '#ffe81f',
      icons: [
        {
          src: "/favicon.ico",
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon",
        },
        {
          src: "/favicon.svg",
          sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
          type: "image/svg+xml",
          purpose: "any"
        },
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "/mask-icon.svg",
          sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
          type: "image/svg+xml",
          purpose: "maskable",
        }
      ],
      background_color: "#14151D",
      dir: 'ltr',
      display: 'standalone',
      lang: 'en',
      orientation: 'any',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})