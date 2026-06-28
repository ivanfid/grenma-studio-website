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
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"

        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
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
