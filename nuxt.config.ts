// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  ssr: true,

  app: {
    // baseURL: '/grenma-studio-website/', // <-- ez csak github pageshez kell
    baseURL: '/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/studio_main.jpg'
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

  /*nitro: {
    preset: 'github-pages' // <-- Ez teszi statikussá a buildet
  },*/

  vite: {
    optimizeDeps: {
      include: [
        'photoswipe',
        'photoswipe/lightbox'
      ]
    }
  }
})
