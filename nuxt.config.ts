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
      script: [
        {
          // Első látogatáskor, MÉG a magyar tartalom kirajzolása előtt átirányítjuk
          // a nem magyar böngészőnyelvű látogatókat az /en oldalra — hogy pl. egy
          // németországi látogató alapból angolul lássa az oldalt, "villanás" nélkül.
          // Csak egyszer fut le (localStorage jelöli), utána a látogató szabadon
          // válthat nyelvet, nem szólunk bele többet.
          innerHTML: `(function(){try{var K='grenma-lang-pref';if(localStorage.getItem(K))return;var p=location.pathname;if(p==='/en'||p.indexOf('/en/')===0){localStorage.setItem(K,'en-default');return;}var l=((navigator.language||(navigator.languages&&navigator.languages[0])||'')).toLowerCase();if(l.indexOf('hu')!==0){localStorage.setItem(K,'auto-en');location.replace('/en'+(p==='/'?'':p));}else{localStorage.setItem(K,'hu-default');}}catch(e){}})();`
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/images/studio_main.jpg'
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
    prerender: {
      // A sitemap.xml egy szerver route (app/server/routes/sitemap.xml.ts),
      // amire semmilyen oldal nem linkel — a crawler magától nem találná meg,
      // ezért explicit ki kell jelölni, hogy a `nuxt generate` statikus
      // fájlként is legenerálja.
      routes: ['/sitemap.xml']
    }
  },

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
  },

  hooks: {
    // Minden magyar oldalhoz (/, /about, /studio, ...) létrehozunk egy VALÓDI,
    // önálló /en/... route-ot, ami ugyanarra a .vue fájlra mutat.
    //
    // Miért nem `alias` a definePageMeta-ban? Mert a Vue Router az alias-t szó
    // szerint "ugyanaz a route"-ként kezeli: a nyelvváltó kattintás emiatt
    // navigáció-no-op lett (az URL sem változott), és mindkét nyelvi link egyszerre
    // kapta meg az "aktív" stílust. Egy külön route-bejegyzéssel (ugyanarra a fájlra
    // mutatva) Vue Router ténylegesen különböző route-ként kezeli a két URL-t, így a
    // kattintásos navigáció és az aktív-link kiemelés is helyesen működik — az oldalak
    // saját `route.path`-alapú HU/EN logikája (lásd `useSiteContent`) változatlan marad.
    'pages:extend'(pages) {
      const enPages = pages
        .filter(page => !page.path.startsWith('/en'))
        .map(page => ({
          name: `en-${page.name ?? page.path.replace(/\//g, '') ?? 'index'}`,
          path: page.path === '/' ? '/en' : `/en${page.path}`,
          file: page.file
        }))

      pages.push(...enPages)
    }
  }
})
