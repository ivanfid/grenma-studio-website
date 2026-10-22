# Grenma Studio weboldal — projekt-összefoglaló Claude-nak

Budapesti hangstúdió (grenmastudio.hu) kétnyelvű (HU/EN) weboldala és egy saját PHP-s admin CMS.
A szöveget és a blogot egy nem technikai munkatárs szerkeszti az admin felületen.

> **A repo PUBLIKUS.** Ide (és bármelyik commitolt fájlba) soha ne kerüljön jelszó, token, FTP/cPanel adat.

## Stack

- Nuxt 4 (`app/` könyvtár-struktúra), Vue 3, Tailwind (`@nuxtjs/tailwindcss` 6 → Tailwind v3), statikus generálás: `npm run generate` → `.output/public`.
- Éles tárhely: tárhely.eu, megosztott **PHP-s** hosting, **nincs Node** — csak statikus fájlok + PHP (`sendmail.php`, `gallery.php`, `admin/`).
- Repo: `ivanfid/grenma-studio-website`, alapág: `main`.

## Mappák, fontos fájlok

| Hely | Mi az |
|---|---|
| `app/pages/` | oldalak (`index`, `about`, `studio`, `references`, `pricing`, `contact`, `privacy`, `blog/index`, `blog/[slug]`) |
| `app/components/header.vue` | fix fejléc, görgetéskor (scrollY > 20) összehúzódik: `py-4` → `py-0 shadow-lg` |
| `app/content/site-content.json` | az összes oldal szövege HU/EN — az admin írja |
| `app/content/blog-posts.json` | blogbejegyzések (`slug`, `number`, `coverImage`, `inlineImage?`, `author`, `date`, `hu/en: {title, titleBold?, titleLight?, body}`) — az admin írja |
| `app/composables/useSiteContent.ts`, `useBlogPosts.ts` | tartalom-olvasók; `blogReadingTime()` = szószám / 130 szó/perc, kerekítve, min. 1 perc |
| `server/routes/sitemap.xml.ts` | dinamikus sitemap (a **gyökér** `server/` mappában, NEM `app/server/`) |
| `nuxt.config.ts` | EN route-ok `pages:extend` hookkal; explicit prerender route-lista (`allRoutes`); `baseURL` env-ből |
| `.github/workflows/publish.yml` | build → GitHub Release `live-build` (lásd Deploy) |
| `.github/workflows/preview-pages.yml` | régi GH Pages preview, csak `feature/blog` push-ra indul — maradvány, törölhető |
| `admin/` | PHP admin CMS — **git-ignorált, nincs a repóban!** (lásd lent) |
| `gallery.php` | a `public/gallery` képeit listázza futásidőben (a stúdió-galéria ebből tölt) |
| `sendmail.php` | kapcsolati űrlap |

Nem verziókövetett, személyes: `_tarhely_public_folder_files/`, `admin_login.txt` — **soha ne stage-eld / commitold**.

## Admin CMS (`admin/`, csak FTP-vel kerül a szerverre)

- **Nincs a git-ben** (publikus repo, a belépési pont ne legyen látható). Új gépen **kézzel kell átmásolni** a régi gépről vagy a szerverről (`public_html/admin/`), különben nincs admin-kód lokálisan.
- `config.php` tartalmazza a titkokat (jelszó-hash, GitHub token, `DEPLOY_TOKEN`); sablon: `config.example.php`.
- Működés: a szöveg- és blogszerkesztő **a GitHub Contents API-n keresztül közvetlenül a `main`-re commitol** (`github-api.php`). Blogképek: `public/images/blog-<slug>-cover|inline.jpg` néven commitolódnak.
- Fájlok: `index.php`/`save.php` (oldalszövegek), `blog.php`, `blog-edit.php`, `blog-save.php`, `blog-delete.php`, `blog-helpers.php`, `login.php`/`auth.php`/`logout.php`, `pull-deploy.php`.
- Ezért a `main`-en rendszeresen vannak „Content update via admin panel” / „Blog: …” commitok — **munka előtt mindig `git pull` / `git fetch`**, mert a main a CMS miatt magától is halad.

## Deploy (élesítés) — fontos!

1. A `main`-re mergelés **önmagában NEM élesít semmit.**
2. Élesítés = a `publish.yml` futtatása: az admin „Mentés és közzététel” gombja (`repository_dispatch`), vagy kézzel a GitHub Actions felületén (`workflow_dispatch`). Ez buildeli a `main`-t, és feltölti `live-build` GitHub Release-ként.
3. A szerveren egy **cPanel Cron Job** pár percenként futtatja a `php .../public_html/admin/pull-deploy.php`-t, ami letölti és kicsomagolja az új release-t a `public_html`-be.
4. Miért így: a tárhely bot-védelme blokkolja a GitHub Actions felől jövő FTP-t és HTTP-t is, ezért „pull” alapú a deploy.

## Fejlesztés, tesztelés

- `npm install`, `npm run dev`, vagy `npm run generate` + statikus kiszolgálás a `.output/public`-ból.
- Ezen a gépen a portable PHP elromlott, a Python csak Store-stub volt → statikus kiszolgálásra egy pár soros **Node `http` szerver** vált be (scratchpadban), pl. a 3050-es porton.
- Playwright a projekt `node_modules`-ában van → a tesztszkriptet a **projektmappába** kell tenni, `.cjs` kiterjesztéssel (`"type": "module"`), utána törölni.
- **Playwright: mindig `locale: 'hu-HU'`**, különben a site saját nyelv-átirányító scriptje `/en`-re dob, és hamis hibákat látsz.
- Vizuális/időzítési hibákat **valódi Chrome-ban** (`channel: 'chrome'`) és **valódi egérgörgetéssel** (`page.mouse.wheel`) érdemes reprodukálni, képkockánkénti `requestAnimationFrame` rögzítéssel. Ha a javítás után „működik”, futtass negatív kontrollt is (javítás nélkül elő kell jönnie a hibának).
- A felhasználó a lokális buildet nézi: változás után **a blog főoldalon is Ctrl+F5**, mert a NuxtLink előre betölti a cikkoldal régi kódját.
- Git Bash: `/`-rel kezdődő env-értékeket átír Windows-útvonalra → `MSYS_NO_PATHCONV=1 NUXT_APP_BASE_URL=/x/ npm run generate`.

## Buktatók (mind megtörtént)

- **Tailwind felülírás:** az `app.vue` globálisan stílusozza a `h1/h2/h3`-at (Prompt, uppercase, fix méret) — felülírni csak `!` prefixszel lehet (`!text-xl !normal-case …`).
- **Címsorok:** minden oldalon pontosan egy `<h1>`; ahol nincs látható cím (Rólunk, Stúdió, Árak, Referenciák, Kapcsolat), ott `sr-only` H1 van. A H1 mobilon 28px, md/lg-től nagyobb.
- **EN route-ok:** valódi külön route-ok a `pages:extend` hookban — `alias`-t NE használj (eltöri a nyelvváltót).
- **Prerender:** a route-ok explicit listája a `nuxt.config.ts`-ben (`staticPages` + blog-slugok). Új oldalnál ide és a `sitemap.xml.ts`-be is fel kell venni.
- **`<NuxtPage keepalive />`:** az oldalak elhagyáskor nem semmisülnek meg. Ablak-/scroll-figyelőket `onActivated`/`onDeactivated`-ban kell indítani/leállítani, különben a háttérben futnak, és visszatéréskor régi állapot villan fel.
- **Blog progress bar** (`blog/[slug].vue`): csak akkor jelenik meg (1 s fade), ha a fejléc összehúzva áll (padding 0, `getAnimations()` üres) és ez 300 ms-ig fennáll; mozgáskor azonnal rejtett. Ezt hosszan hangoltuk — ne egyszerűsítsd vissza `transitionend`-re vagy fix időzítőre.
- A fejléc magassága görgetés, töréspont és mobilmenü szerint is változik → mindig mérni kell, nem fix pixel.

## Munkamódszer (a felhasználó kérései)

- A felhasználó magyarul kommunikál; a válaszok is magyarul.
- Az eredeti projekt helyett **másolaton** dolgozunk (eredeti gépen: eredeti `d:\programming\_nuxt\grenma`, munkapéldány `d:\programming\Claude\grenma`).
- Branch létrehozása/váltása előtt kérdezz. **Commit és push csak kifejezett kérésre**, csak a feladat fájljait stage-eld; `main`-re közvetlenül ne, feature branch + PR.
- PR-t a gépen tárolt git-hozzáféréssel, a GitHub REST API-n nyitottunk (a `gh` CLI nincs telepítve).
- Kódkommentek legyenek rövidek (1–2 sor, csak a nem nyilvánvaló „miért”); a magyarázat a chatbe való.
- Nagyobb vizuális változásnál előbb screenshot/preview, és várj a visszajelzésre, mielőtt továbbmennél.

## Állapot (2026-10-22)

**Kész és éles:** kétnyelvű site; PHP admin a szövegekhez; blog (HU/EN, kiemelt friss poszt + „Korábbi bejegyzések” lista) admin CMS-sel (új / szerkesztés / törlés / képfeltöltés); git-alapú CMS + cron pull-deploy; site-wide H1; olvasási idő badge („5 perc olvasás”) és olvasási progress bar („X perc van hátra”) — PR #7 és #8 mergelve, a publish utána lefutott.

**Nyitott / következő lépések:**
1. **Képek kezelése a CMS-ben** (oldalképek, stúdió-galéria feltöltés/csere) — a blog előtt félbehagyva, még nincs kész.
2. **Blog archív lista lapozás** — most az összes régebbi poszt egy listában jelenik meg (`older = posts.slice(1)`). Terv: 10-es limit + „Továbbiak betöltése” gomb.
3. `preview-pages.yml` és a GH Pages `github-pages` környezet `feature/blog` engedélye maradvány — eldönteni, kell-e még (a `nuxt.config.ts` base-URL logikája ehhez tartozik).
4. Régi, már mergelt feature branchek takarítása (helyben és az originen).
5. Ismert apróság: `header.vue` csak scroll-eseményre frissíti az összehúzott állapotot, így legörgetett oldalt frissítve a fejléc nyitva marad az első görgetésig.
