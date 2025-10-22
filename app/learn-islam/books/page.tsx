// Import necessary dependencies
import { FC } from "react"; // FC = Functional Component type from React
import Image from "next/image"; // Next.js optimized image component for better performance
import Link from "next/link"; // Next.js link component for client-side navigation
import {
  ArrowRight,
  BookOpen,
  Download,
  Headphones,
  Clock,
  MessageCircle,
} from "lucide-react"; // Icon library for UI elements
import type { Metadata } from "next";

// SEO metadata for Al-Huda Library page
export const metadata: Metadata = {
  title: "Al-Huda Library | Islamic Books & Audio Lectures",
  description: "Download free Islamic books in Urdu including Iqamat-e-Din, Quran ki Char Bunyadi Istilahain, and Durre Yateem. Listen to Tafheem-ul-Quran lectures by Maulana Maududi and more Islamic audio series.",
  keywords: [
    'Islamic books PDF',
    'Iqamat-e-Din Islam ka Taqaza',
    'Quran ki Char Bunyadi Istilahain',
    'Durre Yateem',
    'Tafheem ul Quran',
    'Maulana Maududi books',
    'Islamic audio lectures',
    'Free Islamic books',
    'Urdu Islamic books',
    'Islamic education resources',
    'Khurram Murad lectures',
    'Islamic syllabus books',
    'Muslim youth learning'
  ],
  openGraph: {
    title: "Al-Huda Library | Islamic Books & Audio Lectures",
    description: "Access curated Islamic books and immersive audio lectures. Download PDFs and listen to Tafheem-ul-Quran, Seerah, and more.",
    images: ['/assets/books/covers/Iqamat e Din Islam ka Taqaza.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://iyfindia.org/learn-islam/books',
  },
};

// Data array for PDF books section
// Each book object contains all information needed to display a book card
const syllabusBooks = [
  {
    title: "Iqamat-e-Din Islam ka Taqaza",
    level: "Foundational Text",
    description:
      "Syed Hamid Ali outlines the core responsibilities of establishing Deen in personal and social life.",
    image: "/assets/books/covers/Iqamat e Din Islam ka Taqaza.jpg",
    link: "/assets/books/pdfs/اقامت-دین-اسلام-کا-تقاضہ .pdf",
    format: "PDF • Urdu",
  },
  {
    title: "Durre Yateem ﷺ",
    level: "Character Development",
    description:
      "Mahirul Qadri captures prophetic compassion and lessons for youth leadership and service.",
    image: "/assets/books/covers/Durre Yateem ﷺ.jpg",
    link: "/assets/books/pdfs/Durre-Yateem-Sallallahu-Alehi-Wasallm-by-Mahirul-Qadri.pdf",
    format: "PDF • Urdu",
  },
  {
    title: "Quran ki Char Bunyadi Istilahain",
    level: "Phase Two Core",
    description:
      "Maulana Maududi unpacks four foundational Qur'anic terms, with audio commentary available for deeper study.",
    image: "/assets/books/covers/Quran ki Char Bunyadi Istilahain.jpg",
    link: "/assets/books/pdfs/01 Quran ki 4(four)  Bunyadi Istilahain.pdf",
    format: "PDF • Urdu",
  },
];

// Data array for audio series section
// Each audio object contains speaker info, duration, and streaming links
const audioSeries = [
  {
    title: "Tafheem-ul-Qur'an",
    speaker: "Maulana Abul A'la Maududi",
    duration: "Comprehensive Tafseer playlist",
    description:
      "Verse-by-verse exposition of the Qur'an that helps students connect timeless guidance with contemporary challenges.",
    image: "/assets/books/covers/tafheemul quraan.jpeg",
    link: "https://youtube.com/playlist?list=PLy3aG7Boy-PXkayqOahfWX39YY5dfC3AW&si=8jzs0K043-htBBed",
  },
  {
    title: "Glimpses from the Prophet's Life",
    speaker: "Khurram Murad",
    duration: "Narrative lecture",
    description:
      "An inspiring retelling of moments from the Sirah and the lives of the companions to revive prophetic character.",
    image: "/assets/books/covers/Images From The Prophet's Life Album By Khurram Murad.jpeg",
    link: "https://youtu.be/yh7l1_eTEtU?feature=shared",
  },
  {
    title: "Hamari Namaz Be Asar Kyu Ho Rahi Hai",
    speaker: "Maulana Abul A'la Maududi",
    duration: "Focused lecture",
    description:
      "Practical insights on restoring khushu' in salah, delivered in a women-led voice for inclusive learning.",
    image: "/assets/books/covers/Hamari Namaz Be Asar Kyu Ho Rahi Hai.jpeg",
    link: "https://youtu.be/XGgMxDUqaEY?si=D3ZI9TK7oHb5PmgF",
  },
];

// Data array for feature highlights shown below the hero section
// Each highlight showcases a key benefit of the learning platform
const highlights = [
  {
    title: "Curated Curriculum",
    description: "Syllabus-aligned reading paths designed with IYF mentors for progressive learning.",
    icon: BookOpen,
  },
  {
    title: "Immersive Audio",
    description: "High-quality lectures and storytelling for on-the-go inspiration and revision.",
    icon: Headphones,
  },
];

// Main component for the Islamic Books page
const IslamicBooksPage: FC = () => {
  // Structured data for Al-Huda Library page
  const booksPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Al-Huda Library - Islamic Books and Audio Lectures',
    description: 'Curated collection of Islamic books and audio lectures for youth education',
    url: 'https://iyfindia.org/learn-islam/books',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: syllabusBooks.map((book, index) => ({
        '@type': 'Book',
        position: index + 1,
        name: book.title,
        description: book.description,
        inLanguage: 'ur',
        bookFormat: 'EBook/Paperback',
        image: `https://iyfindia.org${book.image}`,
        url: book.link,
      })),
    },
  };

  return (
    // Main container with max-width, centered, and responsive padding
    <main className="max-w-[1600px] w-full mx-auto px-5 md:px-10 2xl:px-20 pb-20">
      {/* Add structured data to page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(booksPageSchema) }}
      />
      
      
      {/* Hero Section - Gradient banner with page introduction */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#22CA38] via-emerald-500 to-[#0F5127] text-white px-6 py-14 sm:px-10 lg:px-20">
        {/* Decorative blur effect visible only on large screens */}
        <div className="absolute inset-y-0 right-[-80px] hidden lg:block w-[340px] rounded-full bg-white/10 blur-3xl" />
        
        {/* Content wrapper with z-10 to appear above decorative elements */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: text content */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
              Al‑Huda — the IYF Islamic Digital Library
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              Al‑Huda provides free, syllabus-aligned Islamic books and carefully curated audio lectures in multiple languages. Designed for students, teachers and lifelong learners, the Library offers downloadable PDFs, guided learning pathways, and narrated lessons to support study, reflection and practical application of authentic knowledge.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#pdf-library"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1B2B34] shadow-sm transition hover:bg-white/80"
              >
                Browse PDF Library
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#audio-collection"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Listen to Audio Collection
                <Headphones size={18} />
              </Link>
            </div>
          </div>

          {/* Right: logo card placed into empty space */}
          <div className="col-span-1 lg:col-span-5 flex justify-end">
            <div className="w-full max-w-xs lg:max-w-sm p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center">
              <Image
                src="/assets/Alhudalogo.png"
                alt="AL_HUDA - IYF Islamic Digital Library"
                width={520}
                height={160}
                className="h-20 md:h-24 lg:h-28 xl:h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Highlights Section - 3 column grid showcasing key benefits */}
  <section className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2" aria-label="Learning highlights">
        {/* Map through highlights array to create feature cards */}
        {highlights.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            // Hover effect: translates card upward and changes shadow
            className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-[0_20px_45px_-40px_rgba(34,202,56,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-35px_rgba(34,202,56,0.45)]"
          >
            {/* Icon container with light green background */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22CA38]/10 text-[#22CA38]">
              <Icon size={24} />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#1B2B34]">{title}</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </section>

      {/* PDF Library Section - Main books display area */}
      <section id="pdf-library" className="mt-16 lg:mt-24">
        {/* Section header with title and WhatsApp CTA */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {/* Small badge label */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#22CA38]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#22CA38]">
              PDF Library
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1B2B34]">
              Syllabus-focused books to download & annotate
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Ideal for study circles and self-paced learning, these titles help you build a disciplined reading habit. Each download includes discussion prompts to help you internalise key lessons.
            </p>
          </div>
          
          {/* WhatsApp button - opens WhatsApp chat with pre-filled message */}
          <a
            href="https://wa.me/918800905047?text=Hi%2C%20I%20would%20like%20to%20request%20the%20full%20syllabus%20plan%20for%20Islamic%20books"
            target="_blank" // Opens in new tab
            rel="noopener noreferrer" // Security best practice for external links
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#20BA5A] shadow-lg shadow-[#25D366]/25"
          >
            <MessageCircle size={16} />
            Request on WhatsApp
          </a>
        </div>

        {/* Books grid - responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Map through syllabusBooks array to create book cards */}
          {syllabusBooks.map(({ title, description, image, link, level, format }) => (
            <article
              key={title}
              // group class enables hover effects on child elements
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_24px_60px_-45px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-40px_rgba(34,202,56,0.45)]"
            >
              {/* Book cover image container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                {/* Next.js Image component with optimized loading */}
                <Image
                  src={image}
                  alt={title}
                  fill // Makes image fill the parent container
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" // Responsive image sizes
                  // object-contain ensures full image is visible without cropping
                  // group-hover:scale-105 creates zoom effect on card hover
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Book details container */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Level and format badges */}
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#22CA38]">
                  <span>{level}</span>
                  <span className="text-gray-400">{format}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-[#1B2B34] leading-tight">{title}</h3>
                
                {/* flex-1 makes description take available space, pushing buttons to bottom */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
                
                {/* Download button - downloads PDF to user's device */}
                <a
                  href={link}
                  download={`${title}.pdf`} // Sets the downloaded filename
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22CA38] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#22CA38]/25 transition hover:bg-[#1db832] w-full"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Audio Collection Section - Audio lectures and series */}
      <section id="audio-collection" className="mt-16 lg:mt-24">
        {/* Container with gradient background for visual distinction */}
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white via-[#F4FFF7] to-white p-6 sm:p-10">
          
          {/* Section header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#22CA38]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#22CA38]">
                Audio Series
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1B2B34]">
                Listen, reflect, and reinforce your learning on the go
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Prefer podcasts or learn during commutes? Queue these curated playlists and lecture series to complement your reading list.
              </p>
            </div>
            
            {/* WhatsApp CTA for audio requests */}
            <a
              href="https://wa.me/918800905047?text=Hi%2C%20I%20would%20like%20to%20request%20a%20curated%20audio%20set%20for%20Islamic%20learning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#20BA5A]"
            >
              <MessageCircle size={18} />
              Request on WhatsApp
            </a>
          </div>

          {/* Audio items grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Map through audioSeries array to create audio cards */}
            {audioSeries.map(({ title, speaker, duration, description, image, link }) => (
              <article
                key={title}
                className="group flex flex-col gap-5 rounded-2xl border border-transparent bg-white/80 p-6 shadow-[0_24px_55px_-45px_rgba(15,23,42,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-[#22CA38]/40 hover:shadow-[0_28px_70px_-40px_rgba(34,202,56,0.45)]"
              >
                {/* Header with audio cover and title */}
                <div className="flex items-center gap-4">
                  {/* Small square audio cover */}
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-[#22CA38]/10">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="64px" // Fixed size for audio thumbnails
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Title and speaker info */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2B34]">{title}</h3>
                    <p className="text-sm text-gray-500">{speaker}</p>
                  </div>
                </div>
                
                {/* Description with flex-1 to push metadata and button to bottom */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
                
                {/* Metadata row - duration and quality indicator */}
                <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} />
                    {duration}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[#22CA38]">
                    <Headphones size={14} />
                    High-quality audio
                  </span>
                </div>
                
                {/* Listen button - opens audio link in new tab */}
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22CA38] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#22CA38]/25 transition hover:bg-[#1db832]"
                >
                  <Headphones size={18} />
                  Listen Audio
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// Export component as default for Next.js page routing
export default IslamicBooksPage;