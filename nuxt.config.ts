// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Az összes route-ot explicit felsoroljuk a prerendereléshez, a crawler-alapú
// felfedezésre hagyatkozás helyett — ez korábban már okozott hibát (egy olyan
// poszt-oldal, amire semmi nem linkelt, kimaradt a build-ből), és nem-gyökér
// baseURL mellett (pl. a GH Pages preview build-nél) a crawler egyáltalán nem
// találja meg a linkeket, így csak a főoldal generálódna le.
const blogData = JSON.parse(
  readFileSync(fileURLToPath(new URL('./app/content/blog-posts.json', import.meta.url)), 'utf-8')
)

const staticPages = [
  '/', '/about', '/studio', '/references', '/pricing', '/blog', '/contact',
  '/en', '/en/about', '/en/studio', '/en/references', '/en/pricing', '/en/blog', '/en/contact',
  '/privacy', '/en/privacy'
]

const blogRoutes = (blogData.posts as { slug: string }[])
  .flatMap(p => [`/blog/${p.slug}`, `/en/blog/${p.slug}`])

// Nem-gyökér baseURL (GH Pages preview) esetén a prerender.routes bejegyzéseket
// magának a base-nek is tartalmazniuk kell, különben Nitro a base-prefix nélküli
// utat próbálja feloldani, és egy "Redirecting..." stub-ot ír ki valódi tartalom
// helyett. Gyökér baseURL-nél (éles build) ez nem változtat semmin.
const base = (process.env.NUXT_APP_BASE_URL || '/').replace(/\/$/, '')
const allRoutes = ['/sitemap.xml', ...staticPages, ...blogRoutes].map(r => base + r)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  ssr: true,

  app: {
    // Az éles (tárhely.eu) build-nél nincs env-változó, marad '/'. A feature/blog
    // GH Pages preview workflow build-időben NUXT_APP_BASE_URL=/grenma-studio-website/
    // -t ad át — ezt itt, konfiguráció-betöltéskor kell kiolvasni (process.env),
    // mert a prerenderelés/route-crawler build-időben már ezt az értéket használja,
    // a runtime env-override (Nuxt automatikus NUXT_ prefix mechanizmusa) ehhez már
    // túl későn jönne.
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      script: [
        {
          // Első látogatáskor, MÉG a magyar tartalom kirajzolása előtt átirányítjuk
          // a nem magyar böngészőnyelvű látogatókat az /en oldalra — hogy pl. egy
          // németországi látogató alapból angolul lássa az oldalt, "villanás" nélkül.
          // Csak egyszer fut le (localStorage jelöli), utána a látogató szabadon
          // válthat nyelvet, nem szólunk bele többet.
          // A B a build-időben beégetett base URL (üres string éles buildnél,
          // "/grenma-studio-website" a GH Pages preview-nél) — a path-eket ehhez
          // képest kell relatívan kezelni, különben preview alatt rossz útvonalra
          // redirektelne.
          innerHTML: `(function(){try{var K='grenma-lang-pref';if(localStorage.getItem(K))return;var B='${base}';var p=location.pathname;var rel=p.indexOf(B)===0?p.slice(B.length):p;if(rel==='')rel='/';if(rel==='/en'||rel.indexOf('/en/')===0){localStorage.setItem(K,'en-default');return;}var l=((navigator.language||(navigator.languages&&navigator.languages[0])||'')).toLowerCase();if(l.indexOf('hu')!==0){localStorage.setItem(K,'auto-en');location.replace(B+'/en'+(rel==='/'?'':rel));}else{localStorage.setItem(K,'hu-default');}}catch(e){}})();`
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${base}/favicon.ico`
        },
        {
          rel: 'preload',
          as: 'image',
          href: `${base}/images/studio_main.jpg`
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
      routes: allRoutes
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
