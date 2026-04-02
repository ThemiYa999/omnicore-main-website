import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Allow AI crawlers for GEO (citation readiness)
      { userAgent: 'GPTBot',        allow: '/' },
      { userAgent: 'Claude-Web',    allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot',     allow: '/' },
    ],
    sitemap: 'https://omnicore.lk/sitemap.xml',
  }
}
