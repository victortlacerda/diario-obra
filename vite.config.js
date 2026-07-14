import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Precisa bater com o nome do repositório no GitHub, pois o Pages serve
// o site em usuario.github.io/NOME_DO_REPO/. Se você renomear o repo,
// ajuste este valor (ou troque para '/' se for usar domínio próprio).
const BASE_PATH = '/diario-obra/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Diário de Obra - Sammour Engenharia',
        short_name: 'Diário de Obra',
        description: 'Registro de diários de obras e geração de relatórios PDF',
        start_url: BASE_PATH,
        scope: BASE_PATH,
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0066CC',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Cacheia todos os arquivos gerados no build (JS, CSS, HTML, ícones)
        // para o app abrir e funcionar mesmo sem internet.
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        // Garante que a navegação offline sempre caia no index.html do app (SPA).
        navigateFallback: `${BASE_PATH}index.html`,
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
