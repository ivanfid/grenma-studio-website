// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  ssr: false, // <-- GitHub Pages miatt kell

  app: {
    baseURL: '/grenma-studio-website/', // <-- A repo neve KÖTELEZŐ ide
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/grenma-studio-website/favicon.ico'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/grenma-studio-website/studio_about.jpg'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/grenma-studio-website/studio_1.jpg'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/grenma-studio-website/studio_references_3.jpg'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/grenma-studio-website/studio_pricing.jpg'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/grenma-studio-website/studio_pricing.jpg'
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;700;900&display=swap"

        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        }
      ]
    }
  },

  css: [
    'photoswipe/style.css'
  ],

  nitro: {
    preset: 'github-pages' // <-- Ez teszi statikussá a buildet
  },

  vite: {
    optimizeDeps: {
      include: [
        'photoswipe',
        'photoswipe/lightbox'
      ]
    }
  }
})
