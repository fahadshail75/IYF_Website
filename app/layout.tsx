import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { organizationSchema, websiteSchema, educationalOrganizationSchema } from "@/lib/structured-data";

const monteserrat = Montserrat({
  variable: "--font-monteserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iyfindia.org'),
  title: {
    default: 'Islamic Youth Federation of India | Empowering Muslim Youth',
    template: '%s | IYF India'
  },
  description: 'Islamic Youth Federation of India (IYF) empowers Muslim youth through Islamic education, character development, and community service. Join us in building a purposeful Islamic life.',
  keywords: [
    'Islamic Youth Federation',
    'IYF India',
    'Muslim youth organization',
    'Islamic education',
    'Islamic books',
    'Quran study',
    'Islamic audio lectures',
    'Youth empowerment',
    'Islamic conferences',
    'Muslim students',
    'Islamic learning',
    'Deen establishment',
    'Islamic character development',
    'Tafheem ul Quran',
    'Maulana Maududi'
  ],
  authors: [{ name: 'Islamic Youth Federation of India' }],
  creator: 'Islamic Youth Federation of India',
  publisher: 'IYF India',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://iyfindia.org',
    title: 'Islamic Youth Federation of India | Empowering Muslim Youth',
    description: 'IYF India empowers Muslim youth through Islamic education, character development, and community service. Building purposeful Islamic lives.',
    siteName: 'IYF India',
    images: [
      {
        url: '/assets/logo-IYF.png',
        width: 1200,
        height: 630,
        alt: 'Islamic Youth Federation of India Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Youth Federation of India | Empowering Muslim Youth',
    description: 'IYF India empowers Muslim youth through Islamic education, character development, and community service.',
    images: ['/assets/logo-IYF.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
  },
  alternates: {
    canonical: 'https://iyfindia.org',
  },
  category: 'Education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#22CA38" />
        <link rel="apple-touch-icon" href="/assets/logo-IYF.png" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
        />
      </head>
      <body
        className={`${monteserrat.variable} antialiased`}
      >
        <Header />

        <main className="pt-[64px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
