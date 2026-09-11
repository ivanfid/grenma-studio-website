import siteContent from '@/content/site-content.json'

export type SiteContentLang = 'hu' | 'en'

// A JSON importált típusa konkrét (a jelenlegi tartalom alakját tükrözi),
// itt viszont bármelyik oldal bármelyik mezőjét dinamikusan kérhetjük le,
// ezért egyszer, explicit `unknown`-on át alakítjuk általános alakra.
const content = siteContent as unknown as Record<SiteContentLang, Record<string, unknown>>

/**
 * Visszaadja egy adott oldal/nyelv szerkeszthető szövegblokkját az
 * app/content/site-content.json-ból. Ez a JSON az egyetlen forrása az
 * admin-szerkeszthető szövegeknek — build előtt ezt írjuk felül a mentett
 * (élő) tartalommal, helyi fejlesztés közben pedig ennek az alap/fallback
 * értékei jelennek meg.
 *
 * A legtöbb oldalnál a blokk egyszerű string-mező gyűjtemény, ezért ez az
 * alapértelmezett visszatérési típus — de pl. a studio oldal felszerelés-
 * listáihoz (ahol beágyazott tömbök is vannak) egy saját típus adható meg:
 * `useSiteContent<StudioContent>('studio', lang)`.
 */
export function useSiteContent<T = Record<string, string>>(page: string, lang: SiteContentLang): T {
  return (content[lang]?.[page] ?? {}) as T
}
