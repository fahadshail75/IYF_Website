/**
 * Structured Data (JSON-LD) for Islamic Youth Federation of India
 * This helps search engines understand the organization and display rich snippets
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Islamic Youth Federation of India',
  alternateName: 'IYF India',
  url: 'https://iyfindia.org',
  logo: 'https://iyfindia.org/assets/black-logo.svg',
  description: 'Islamic Youth Federation of India empowers Muslim youth through Islamic education, character development, and community service.',
  foundingDate: '1970', // Update with actual founding date
  foundingLocation: {
    '@type': 'Place',
    name: 'India',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/iyfindia', // Add actual social media links
    'https://www.instagram.com/iyf_india',
    'https://twitter.com/iyfindia',
    'https://www.youtube.com/@IYFIndia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8800905047',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi', 'Urdu'],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Islamic Youth Federation of India',
  url: 'https://iyfindia.org',
  description: 'Empowering Muslim youth through Islamic education and character development',
  publisher: {
    '@type': 'Organization',
    name: 'Islamic Youth Federation of India',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://iyfindia.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const educationalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Islamic Youth Federation of India',
  url: 'https://iyfindia.org',
  logo: 'https://iyfindia.org/assets/black-logo.svg',
  description: 'Leading Islamic youth organization providing Islamic education, books, and audio lectures',
  educationalCredentialAwarded: 'Islamic Education',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Islamic Learning Resources',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Islamic Books Library',
          description: 'Free downloadable Islamic books in Urdu including Quran studies and Hadith',
          provider: {
            '@type': 'Organization',
            name: 'IYF India',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Islamic Audio Lectures',
          description: 'Comprehensive Tafseer and Islamic lectures by renowned scholars',
          provider: {
            '@type': 'Organization',
            name: 'IYF India',
          },
        },
      },
    ],
  },
}
