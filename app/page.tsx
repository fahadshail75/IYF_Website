// import Footer from "@/components/common/Header";
// import Header from "@/components/common/Header";
import CampaignsSection from "@/components/home/Campaign";
import EventosSection from "@/components/home/Events";
import HeroSection from "@/components/home/HeroSection";
import MagzineSwiper from "@/components/home/MagzinesSlider";
import OurInitiatives from "@/components/home/OurInitiatives";
// import RecentMagzines from "@/components/home/RecentMagzines";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// SEO metadata for homepage
export const metadata: Metadata = {
  title: "Home | Islamic Youth Federation of India",
  description: "Islamic Youth Federation of India (IYF) is dedicated to empowering Muslim youth through Islamic education, conferences, workshops, and community activities. Join our mission to establish Deen and build character.",
  openGraph: {
    title: "Islamic Youth Federation of India | Empowering Muslim Youth",
    description: "Join IYF India in empowering Muslim youth through Islamic education, state conferences, workshops, and community service.",
    images: ['/assets/home/banner-home-image.png'],
  },
  alternates: {
    canonical: 'https://iyfindia.org',
  },
};

export default function Home() {
  const campaigns = [
    {
      title: "State Conference - Maharashtra",
      description: `The IYF Maharashtra State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href: "https://www.instagram.com/reel/DFGK3vdBlHw/",
      date: "11 August 2025 - 20 August 2025",
      imageSrc: "/assets/home/conference-1.png",
    },
    {
      title: "State Conference - West Bengal ",
      description: `The IYF West Bengal State Conference, themed "Wa Rabbaka Fakabbir", is a grand gathering to inspire youth towards the greatness of their Creator. It aims to strengthen faith, revive spiritual consciousness, and motivate young minds to serve society with sincerity.`,
      href: "https://www.youtube.com/live/NchJLkdyxHY",
      date: "11 August 2025 - 20 August 2025",
      imageSrc: "/assets/home/conference-2.png",
    },
    // {
    //   title: "HAI YA ALAL FALAH",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    //   date: "11 August 2023 - 20 August 2023",
    //   imageSrc: "/assets/home/event-image.png",
    // },
  ];

  const eventosData = [
    {
      title: "Addressing Contemporary Issues",
      description: `A program titled "Legal Lens" was held today at Mohona Lodge, Basudebpur, featuring a discussion on contemporary issues and the role of lawyers in addressing them effectively.`,
      imageSrc: "/assets/home/activity-1.png",
      link: "#",
    },
    {
      title: "Media Workshop",
      description: `A two-day Media Correspondents' Workshop was organized by the Islamic Youth Federation on 28–29 June in New Delhi, focusing on ground reporting and field correspondence.`,
      imageSrc: "/assets/home/activity-2.png",
      link: "#",
    },
    {
      title: "Book Presented at SPP University",
      description: `IYF Mumbai visited Savitribai Phule Pune University, meeting Dr. Parag Kalkar to discuss the “Rehmatullil Aalameen” campaign and present the book Mohammad (PBUH) – Benefactor to Humanity.`,
      imageSrc: "/assets/home/activity-3.png",
      link: "#",
    },
  ];

  const magazines = [
    {
      title: "The Milestone",
      description: `The Milestone" is a high-quality English magazine published by IYF (Islamic Youth Federation), aiming to provide intellectual, spiritual, and moral guidance to the youth. The magazine seeks to present Islamic teachings in a modern and practical context, helping young people understand their true purpose in life. It features thought-provoking articles on social reform, character building, and awakening of the Muslim Ummah.

Verses from the Qur'an, Hadith, and inspiring historical stories are beautifully woven with contemporary issues to motivate readers towards positive action. The contributions of young writers and scholars are especially encouraged, giving them a platform to express their ideas and talents.

The language and style of "The Milestone" are simple yet impactful, leaving a lasting impression on the hearts and minds of its audience. It also includes sections on literature, poetry, and introductions to influential personalities, further enriching its intellectual and literary value. Overall, this magazine serves as a guiding light for the youth, inspiring them with hope, confidence, and a sense of responsibility towards society and the Ummah.`,
      image: "/assets/home/milestone.png",
    },
    {
      title: "نقوشِ راہ",
      description: `نقوشِ راہ" آئی۔وائی۔ایف (اسلامک یوتھ فیڈریشن) کی جانب سے شائع ہونے والی ایک معیاری اور با مقصد اردو میگزین ہے، اس میگزین کے ذریعے نا صرف نوجوانوں کی فکری، روحانی اور اخلاقی تربیت کرنا مقصود ہے، بلکہ یہ اسلامی تعلیمات کے ساتھ ساتھ عصرِ حاضر کے تقاضوں سے بھی مزیّن ہے۔ اس کے جزئیات میں معاشرتی اصلاح، کردار سازی، اور امت مسلمہ کی بیداری جیسے اہم موضوعات شامل ہیں۔ مجموعی طور پر یہ میگزین نوجوانوں کے لیے ایک فکری مشعلِ راہ، حوصلے کا پیغام، اور تحریکی زندگی میں رہنمائی کا اہم ذریعہ ہے`,
      image: "/assets/home/nukush.png",
    },
    {
      title: "সত্যবাক",
      description: `সত্যবাক ইসলামিক ইয়ুথ ফেডারেশন (IYF) কর্তৃক প্রকাশিত দ্বিমাসিক গবেষণামূলক পত্রিকা, যা তরুণ সমাজে ইসলামী চেতনা, নৈতিক মূল্যবোধ ও মননশীলতা জাগ্রত করতে কাজ করে।

কুরআনের নির্দেশ—“হে ইমানদারগণ, আল্লাহকে ভয় করো এবং সত্য কথা বলো” এবং হাদীসের ঘোষণা—“জালেম শাসকের সামনে সত্য কথা বলা উত্তম জিহাদ”—একে পথনির্দেশ হিসেবে গ্রহণ করে সত্যবাক সত্য ও ন্যায়ের পক্ষে যুক্তিনির্ভর ও চিন্তাজাগানিয়া লেখা প্রকাশ করে।`,
      image: "/assets/home/bengal.png",
    },
  ];

  return (
    <>
      <HeroSection />

      {/* balck section */}

      <section className="bg-[#000] w-full    ">
        <div className="max-w-[1600px] w-full px-5 md:px-10 2xl:px-6 py-10 md:py-20 mx-auto  flex flex-col md:flex-row gap-10 lg:gap-20 2xl:gap-[104px] items-center justify-center">
          <div className="md:w-1/3">
            <Image
              src={"/assets/home/event-image-black.png"}
              width={544}
              height={544}
              className="object-contain w-full h-full"
              alt="event-image"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="font-bold text-3xl md:text-[40px]/[72px] text-white">
              IYF is an <span className="text-[#22CA38]">national</span> level
              organization, working across India. It aims to guide students and{" "}
              <span className="text-[#22CA38]">youths</span> in the light of
              Quran and Sunnah.
            </h1>

            <button className="primary-button">Know more about us</button>
          </div>
        </div>
      </section>


      <section className="max-w-[1600px] bg-white w-full px-5 md:px-10 2xl:px-6 mx-auto space-y-10 md:space-y-20 2xl:space-y-[160px] my-10 md:my-20 2xl:my-[160px] ">
        <MagzineSwiper magazines={magazines} />
        <CampaignsSection campaigns={campaigns} />
        <EventosSection eventos={eventosData} />
      </section>


  {/* IYF Islamic Book Library Section (moved after events) */}

      <section className="w-full bg-gradient-to-br from-[#f6fff8] to-white py-10 md:py-20 border-t border-gray-100 mt-10">
        <div className="max-w-2xl mx-auto px-4 md:px-0 text-center flex flex-col items-center">
          {/* Top heading for Al_HUDA with book icon */}
          <h2 className="font-extrabold text-white bg-black py-1 px-3 text-2xl sm:text-3xl md:text-4xl mb-3 tracking-wide flex items-center justify-center gap-2 w-fit mx-auto">
            {/* Open Book Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#22CA38"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20c0-2.5-2.5-4-6-4H4a2 2 0 0 0-2 2v-13a2 2 0 0 1 2-2h4c3.5 0 4 1.5 4 4"
              />
              <path
                stroke="#22CA38"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20c0-2.5 2.5-4 6-4h2a2 2 0 0 1 2 2v-13a2 2 0 0 0-2-2h-4c-3.5 0-4 1.5-4 4"
              />
            </svg>
            AL_HUDA
          </h2>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22CA38]/10 px-3 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#22CA38] mb-4">
            IYF Islamic Digital Library
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#1B2B34] mb-3 sm:mb-4">
            Discover, Read, and Grow
          </h2>
          <p className="text-gray-600 text-xs sm:text-base mb-6 sm:mb-7 max-w-lg leading-relaxed">
            Dive into a curated collection of authentic Islamic books in Urdu, English, and more. Whether you’re a student, seeker, or lifelong learner, our library is open to all—completely free and accessible online.
          </p>
          <Link
            href="/learn-islam/books"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3 bg-[#22CA38] text-white font-semibold rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:bg-[#1db832] transition-all duration-300 text-xs sm:text-base"
          >
            Explore Books
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-4-4 4 4-4 4"/></svg>
          </Link>
        </div>
  </section>

  {/* Our Initiatives Section */}
  <OurInitiatives />
    </>
  );
}
