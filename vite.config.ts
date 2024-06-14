import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const imageUrls = Array.from({ length: 82 }, (_, index) => ({
  url: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`,
  revision: null,
})).filter(entry => entry.url !== "https://starwars-visualguide.com/assets/img/characters/17.jpg");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: "auto",

    pwaAssets: {
      disabled: true,
      config: false,
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
          sizes: "48x48",
          type: "image/x-icon",
        },
        {
          src: "/favicon.svg",
          sizes: "512x512",
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
          sizes: "512x512",
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

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      cacheId: 'sw-cache',
      skipWaiting: true,
      clientsClaim: true,
      additionalManifestEntries: imageUrls,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === 'https://swapi.dev',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ url }) => url.origin === 'https://starwars-visualguide.com',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style' || request.destination === 'document',
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-resources',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ request }) => ['image', 'font', 'media'].includes(request.destination),
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})