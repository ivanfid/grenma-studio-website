import blogData from '@/content/blog-posts.json'

export type BlogLang = 'hu' | 'en'

export interface BlogPost {
  slug: string
  number: number
  coverImage: string
  author: string
  date: string
  title: string
  body: string
}

interface RawBlogPost {
  slug: string
  number: number
  coverImage: string
  author: string
  date: string
  hu: { title: string; body: string }
  en: { title: string; body: string }
}

const rawPosts = (blogData as { posts: RawBlogPost[] }).posts

function resolve(post: RawBlogPost, lang: BlogLang): BlogPost {
  const { hu, en, ...shared } = post
  const localized = lang === 'en' ? en : hu
  return { ...shared, ...localized }
}

/**
 * Az összes blogbejegyzés az adott nyelven, a legújabb legelöl —
 * build-időben be van sütve a statikus oldalba (ugyanaz az elv, mint a
 * site-content.json-nál), így a blog is teljesen indexelhető marad.
 */
export function useBlogPosts(lang: BlogLang): BlogPost[] {
  return [...rawPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(post => resolve(post, lang))
}

export function useBlogPost(slug: string, lang: BlogLang): BlogPost | undefined {
  const raw = rawPosts.find(p => p.slug === slug)
  return raw ? resolve(raw, lang) : undefined
}

/** Az első bekezdés, rövid előnézetnek. */
export function blogExcerpt(post: BlogPost): string {
  return post.body.split('\n\n')[0] ?? ''
}
