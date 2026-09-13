import blogData from '../../app/content/blog-posts.json'

/**
 * A sitemap.xml mostantól dinamikusan generálódik build-időben (prerenderelve,
 * lásd nuxt.config.ts nitro.prerender.routes), hogy a blogbejegyzések
 * automatikusan bekerüljenek — nem kell kézzel karbantartani egy statikus
 * fájlt minden új posztnál.
 */

const BASE = 'https://grenmastudio.hu'

const staticPages = [
  '/',
  '/about',
  '/studio',
  '/references',
  '/pricing',
  '/blog',
  '/contact',
  '/en',
  '/en/about',
  '/en/studio',
  '/en/references',
  '/en/pricing',
  '/en/blog',
  '/en/contact',
  '/privacy',
  '/en/privacy',
]

export default defineEventHandler(event => {
  const slugs = (blogData as { posts: { slug: string }[] }).posts.map(p => p.slug)
  const blogPaths = slugs.flatMap(slug => [`/blog/${slug}`, `/en/blog/${slug}`])

  const urls = [...staticPages, ...blogPaths]
    .map(path => {
      const loc = path === '/' ? `${BASE}/` : `${BASE}${path}/`
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`
    })
    .join('\n\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urls}\n\n</urlset>\n`
})
