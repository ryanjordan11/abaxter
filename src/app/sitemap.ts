import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const routes = [
    '',
    '/about',
    '/services',
    '/relationships',
    '/membership',
    '/contact',
    '/tools/life-path',
    '/tools/expression',
    '/tools/love-languages'
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
}
