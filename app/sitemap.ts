import { MetadataRoute } from 'next'

/**
 * Generates dynamic sitemap for SEO
 * This helps search engines discover and index all pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iyfindia.org'
  
  // Get current date for lastModified
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/learn-islam/books`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add more dynamic pages here as your site grows
    // Example:
    // {
    //   url: `${baseUrl}/contact-us`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ]
}
