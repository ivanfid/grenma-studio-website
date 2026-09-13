import blogData from '@/content/blog-posts.json'

export interface BlogPost {
  slug: string
  number: number
  title: string
  coverImage: string
  author: string
  date: string
  body: string
}

const posts = (blogData as { posts: BlogPost[] }).posts

/**
 * Az összes blogbejegyzés, a legújabb legelöl — build-időben be van sütve a
 * statikus oldalba (ugyanaz az elv, mint a site-content.json-nál), így a
 * blog is teljesen indexelhető marad kereséskor.
 */
export function useBlogPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function useBlogPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

/** Az első bekezdés, rövid előnézetnek a listaoldalon. */
export function blogExcerpt(post: BlogPost): string {
  return post.body.split('\n\n')[0] ?? ''
}
